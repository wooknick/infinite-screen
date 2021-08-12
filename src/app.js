import "regenerator-runtime/runtime";
import Konva from "konva";
import queryString from "query-string";
import axios from "axios";

import "./style.scss";

class App {
  constructor() {
    // DOM Element
    this.controller = document.getElementById("controller");
    this.container = document.getElementById("container");
    this.viewer = document.getElementById("viewer");
    this.addYoutubeBtn = document.getElementById("addYoutube");
    this.youtubeId = document.getElementById("youtubeId");

    // Settings
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.stageWidth = this.container.getBoundingClientRect().width;
    this.stageHeight = this.container.getBoundingClientRect().height;
    this.maxLength = 3000;
    this.scaleBy = 1.03;
    this.maxScale = 5;
    this.minScale = 1 / 5;
    this.zoomAvailable = false;
    this.defaultYoutubeWidth = 480;
    this.defaultYoutubeHeight = 360;

    // Data
    this.state = [];

    // Video
    this.playingVideo = [];
    this.playingVideoId = [];

    // LifeCycle
    this.init();
    this.initEventListener();
  }

  init() {
    this.stage = new Konva.Stage({
      container: this.container,
      width: this.stageWidth,
      height: this.stageHeight,
    });
    this.layer = new Konva.Layer();
    this.stage.add(this.layer);
    this.renewTransform();
    const cache = localStorage.getItem("infScreen");
    if (cache) {
      this.setState(JSON.parse(cache));
    }
  }

  renewTransform() {
    this.transformer = new Konva.Transformer({
      boundBoxFunc: function (oldBoundBox, newBoundBox) {
        return newBoundBox;
      },
    });
    this.layer.add(this.transformer);
  }

  async findYoutube(x, y) {
    const url = this.youtubeId.value;
    const {
      query: { v: id },
    } = queryString.parseUrl(url);

    if (id) {
      const videoInfo = await this.getVideoInfo(id);
      const {
        thumbnails: {
          high: { url: imgSrc },
        },
      } = videoInfo;

      const newData = {
        x: (x - this.stage.position().x) / this.stage.scaleX(),
        y: (y - this.stage.position().y) / this.stage.scaleY(),
        width: this.defaultYoutubeWidth / this.stage.scaleX(),
        height: this.defaultYoutubeHeight / this.stage.scaleY(),
        rotation: 0,
        src: imgSrc,
        videoId: id,
      };

      this.setState([...this.state, newData]);
      this.youtubeId.value = "";
    }
  }

  async getVideoInfo(videoId) {
    const url = "https://www.googleapis.com/youtube/v3/videos";
    try {
      const {
        data: { items },
      } = await axios(url, {
        method: "GET",
        params: {
          key: process.env.YOUTUBE_API_KEY,
          id: videoId,
          part: "snippet",
        },
      });

      const result = items[0];

      const videoInfo = {
        title: result.snippet.title,
        thumbnails: result.snippet.thumbnails,
      };

      return videoInfo;
    } catch (e) {
      console.log(e);
    }
  }

  setState(newState) {
    this.state = newState;
    localStorage.setItem("infScreen", JSON.stringify(newState));
    this.update();
  }

  setStateWithoutUpdate(newState) {
    this.state = newState;
    localStorage.setItem("infScreen", JSON.stringify(newState));
  }

  update() {
    this.layer.destroyChildren();
    this.renewTransform();
    this.state.forEach((item, idx) => {
      const { x, y, width, height, rotation, src, videoId } = item;
      const imageElm = new Image();

      imageElm.onload = () => {
        const image = new Konva.Image({
          image: imageElm,
          x,
          y,
          width,
          height,
          rotation,
          draggable: true,
        });
        this.layer.add(image);

        image.on("dragend", () => {
          this.state[idx].x = image.x();
          this.state[idx].y = image.y();
          this.setStateWithoutUpdate(this.state);
        });

        image.on("transformend", () => {
          this.state[idx].width = image.width() * image.scaleX();
          this.state[idx].height = image.height() * image.scaleY();
          this.state[idx].rotation = image.rotation();
          this.setStateWithoutUpdate(this.state);
        });

        image.on("click tap", () => {
          this.showVideo(videoId);
        });
      };

      imageElm.src = src;
    });
  }

  showVideo(videoId) {
    if (this.playingVideoId.includes(videoId)) {
      return;
    }
    if (this.playingVideo.length > 2) {
      this.viewer.removeChild(this.playingVideo[0]);
      this.playingVideo.shift();
      this.playingVideoId.shift();
    }
    const iframe = document.createElement("iframe");
    iframe.id = "ytplayer";
    iframe.type = "text/html";
    iframe.width = "100%";
    iframe.style.aspectRatio = "16 / 9";
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    iframe.frameborder = "0";
    this.playingVideo.push(iframe);
    this.playingVideoId.push(videoId);
    this.viewer.appendChild(iframe);
  }

  initEventListener() {
    window.addEventListener("resize", this.resize.bind(this), false);
    this.addYoutubeBtn.addEventListener(
      "click",
      this.findYoutube.bind(this, 120, 120)
    );
    this.stage.on("wheel", (e) => {
      if (e.evt.metaKey) {
        this.zoom(e);
      } else {
        this.scroll(e);
      }
    });
    this.stage.on("click tap", (e) => {
      this.select(e);
    });
  }

  select(e) {
    if (e.target === this.stage) {
      this.transformer.nodes([]);
      return;
    }

    this.transformer.nodes([e.target]);
  }

  zoom(e) {
    const oldScale = this.stage.scaleX();
    const pointer = this.stage.getPointerPosition();
    const mousePointTo = {
      x: (pointer.x - this.stage.x()) / oldScale,
      y: (pointer.y - this.stage.y()) / oldScale,
    };
    let newScale =
      e.evt.deltaX !== 0
        ? oldScale
        : e.evt.deltaY > 0
        ? oldScale * this.scaleBy
        : oldScale / this.scaleBy;

    newScale = Math.max(this.minScale, Math.min(newScale, this.maxScale));

    this.stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    this.stage.position(newPos);
  }

  scroll(e) {
    /**
     * layer의 x, y는 역방향으로 움직임
     * stage위에 layer를 이동시켜서 전체가 움직이는 것처럼 보이게 하는 원리이기 때문
     * 스크롤 범위는 clamp 함수를 사용하여 최소 최대 범위 안쪽으로 고정
     */
    const dx = e.evt.deltaX;
    const dy = e.evt.deltaY;

    const minX = -(this.maxLength - this.stage.width());
    const maxX = this.maxLength;
    const x = Math.max(minX, Math.min(this.layer.x() - dx, maxX));

    const minY = -(this.maxLength - this.stage.height());
    const maxY = this.maxLength;
    const y = Math.max(minY, Math.min(this.layer.y() - dy, maxY));

    this.layer.position({ x, y });
  }

  resize() {
    this.stageWidth = this.container.getBoundingClientRect().width;
    this.stageHeight = this.container.getBoundingClientRect().height;
    if (this.stage) {
      this.stage.width(this.stageWidth);
      this.stage.height(this.stageHeight);
    }
  }
}

window.onload = () => {
  const app = new App();
};
