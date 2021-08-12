// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2FQzm":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "c75227167347e57df55b258c72166a09";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5XPnV":[function(require,module,exports) {
var _konva = require("konva");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _konvaDefault = _parcelHelpers.interopDefault(_konva);
var _queryString = require("query-string");
var _queryStringDefault = _parcelHelpers.interopDefault(_queryString);
var _axios = require("axios");
var _axiosDefault = _parcelHelpers.interopDefault(_axios);
require("./style.scss");
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
    this.stage = new _konvaDefault.default.Stage({
      container: this.container,
      width: this.stageWidth,
      height: this.stageHeight
    });
    this.layer = new _konvaDefault.default.Layer();
    this.stage.add(this.layer);
    this.renewTransform();
    const cache = localStorage.getItem("infScreen");
    if (cache) {
      this.setState(JSON.parse(cache));
    }
  }
  renewTransform() {
    this.transformer = new _konvaDefault.default.Transformer({
      boundBoxFunc: function (oldBoundBox, newBoundBox) {
        return newBoundBox;
      }
    });
    this.layer.add(this.transformer);
  }
  async findYoutube(x, y) {
    const url = this.youtubeId.value;
    const {query: {v: id}} = _queryStringDefault.default.parseUrl(url);
    if (id) {
      const videoInfo = await this.getVideoInfo(id);
      const {thumbnails: {high: {url: imgSrc}}} = videoInfo;
      const newData = {
        x: (x - this.stage.position().x) / this.stage.scaleX(),
        y: (y - this.stage.position().y) / this.stage.scaleY(),
        width: this.defaultYoutubeWidth / this.stage.scaleX(),
        height: this.defaultYoutubeHeight / this.stage.scaleY(),
        rotation: 0,
        src: imgSrc,
        videoId: id
      };
      this.setState([...this.state, newData]);
      this.youtubeId.value = "";
    }
  }
  async getVideoInfo(videoId) {
    const url = "https://www.googleapis.com/youtube/v3/videos";
    const {data: {items}} = await _axiosDefault.default(url, {
      method: "GET",
      params: {
        key: "AIzaSyD8Sgttgum-4m11HcR0UozmI9VYkdl0Z8Q",
        id: videoId,
        part: "snippet"
      }
    });
    const result = items[0];
    const videoInfo = {
      title: result.snippet.title,
      thumbnails: result.snippet.thumbnails
    };
    return videoInfo;
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
      const {x, y, width, height, rotation, src, videoId} = item;
      const imageElm = new Image();
      imageElm.onload = () => {
        const image = new _konvaDefault.default.Image({
          image: imageElm,
          x,
          y,
          width,
          height,
          rotation,
          draggable: true
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
    this.addYoutubeBtn.addEventListener("click", this.findYoutube.bind(this, 120, 120));
    this.stage.on("wheel", e => {
      if (e.evt.metaKey) {
        this.zoom(e);
      } else {
        this.scroll(e);
      }
    });
    this.stage.on("click tap", e => {
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
      y: (pointer.y - this.stage.y()) / oldScale
    };
    let newScale = e.evt.deltaX !== 0 ? oldScale : e.evt.deltaY > 0 ? oldScale * this.scaleBy : oldScale / this.scaleBy;
    newScale = Math.max(this.minScale, Math.min(newScale, this.maxScale));
    this.stage.scale({
      x: newScale,
      y: newScale
    });
    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale
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
    this.layer.position({
      x,
      y
    });
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

},{"konva":"5Bi2L","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D","./style.scss":"1nhTO","query-string":"64QUI","axios":"7rA65"}],"5Bi2L":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _FullInternalsJs = require('./_FullInternals.js');
exports.default = _FullInternalsJs.Konva;

},{"./_FullInternals.js":"2YSNW","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"2YSNW":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Konva", function () {
  return Konva;
});
var _CoreInternalsJs = require('./_CoreInternals.js');
var _shapesArcJs = require('./shapes/Arc.js');
var _shapesArrowJs = require('./shapes/Arrow.js');
var _shapesCircleJs = require('./shapes/Circle.js');
var _shapesEllipseJs = require('./shapes/Ellipse.js');
var _shapesImageJs = require('./shapes/Image.js');
var _shapesLabelJs = require('./shapes/Label.js');
var _shapesLineJs = require('./shapes/Line.js');
var _shapesPathJs = require('./shapes/Path.js');
var _shapesRectJs = require('./shapes/Rect.js');
var _shapesRegularPolygonJs = require('./shapes/RegularPolygon.js');
var _shapesRingJs = require('./shapes/Ring.js');
var _shapesSpriteJs = require('./shapes/Sprite.js');
var _shapesStarJs = require('./shapes/Star.js');
var _shapesTextJs = require('./shapes/Text.js');
var _shapesTextPathJs = require('./shapes/TextPath.js');
var _shapesTransformerJs = require('./shapes/Transformer.js');
var _shapesWedgeJs = require('./shapes/Wedge.js');
var _filtersBlurJs = require('./filters/Blur.js');
var _filtersBrightenJs = require('./filters/Brighten.js');
var _filtersContrastJs = require('./filters/Contrast.js');
var _filtersEmbossJs = require('./filters/Emboss.js');
var _filtersEnhanceJs = require('./filters/Enhance.js');
var _filtersGrayscaleJs = require('./filters/Grayscale.js');
var _filtersHSLJs = require('./filters/HSL.js');
var _filtersHSVJs = require('./filters/HSV.js');
var _filtersInvertJs = require('./filters/Invert.js');
var _filtersKaleidoscopeJs = require('./filters/Kaleidoscope.js');
var _filtersMaskJs = require('./filters/Mask.js');
var _filtersNoiseJs = require('./filters/Noise.js');
var _filtersPixelateJs = require('./filters/Pixelate.js');
var _filtersPosterizeJs = require('./filters/Posterize.js');
var _filtersRGBJs = require('./filters/RGB.js');
var _filtersRGBAJs = require('./filters/RGBA.js');
var _filtersSepiaJs = require('./filters/Sepia.js');
var _filtersSolarizeJs = require('./filters/Solarize.js');
var _filtersThresholdJs = require('./filters/Threshold.js');
const Konva = _CoreInternalsJs.Konva.Util._assign(_CoreInternalsJs.Konva, {
  Arc: _shapesArcJs.Arc,
  Arrow: _shapesArrowJs.Arrow,
  Circle: _shapesCircleJs.Circle,
  Ellipse: _shapesEllipseJs.Ellipse,
  Image: _shapesImageJs.Image,
  Label: _shapesLabelJs.Label,
  Tag: _shapesLabelJs.Tag,
  Line: _shapesLineJs.Line,
  Path: _shapesPathJs.Path,
  Rect: _shapesRectJs.Rect,
  RegularPolygon: _shapesRegularPolygonJs.RegularPolygon,
  Ring: _shapesRingJs.Ring,
  Sprite: _shapesSpriteJs.Sprite,
  Star: _shapesStarJs.Star,
  Text: _shapesTextJs.Text,
  TextPath: _shapesTextPathJs.TextPath,
  Transformer: _shapesTransformerJs.Transformer,
  Wedge: _shapesWedgeJs.Wedge,
  Filters: {
    Blur: _filtersBlurJs.Blur,
    Brighten: _filtersBrightenJs.Brighten,
    Contrast: _filtersContrastJs.Contrast,
    Emboss: _filtersEmbossJs.Emboss,
    Enhance: _filtersEnhanceJs.Enhance,
    Grayscale: _filtersGrayscaleJs.Grayscale,
    HSL: _filtersHSLJs.HSL,
    HSV: _filtersHSVJs.HSV,
    Invert: _filtersInvertJs.Invert,
    Kaleidoscope: _filtersKaleidoscopeJs.Kaleidoscope,
    Mask: _filtersMaskJs.Mask,
    Noise: _filtersNoiseJs.Noise,
    Pixelate: _filtersPixelateJs.Pixelate,
    Posterize: _filtersPosterizeJs.Posterize,
    RGB: _filtersRGBJs.RGB,
    RGBA: _filtersRGBAJs.RGBA,
    Sepia: _filtersSepiaJs.Sepia,
    Solarize: _filtersSolarizeJs.Solarize,
    Threshold: _filtersThresholdJs.Threshold
  }
});

},{"./_CoreInternals.js":"7nhch","./shapes/Arc.js":"1hJS2","./shapes/Arrow.js":"5xDdd","./shapes/Circle.js":"6az8Y","./shapes/Ellipse.js":"2s2ZT","./shapes/Image.js":"4Ent7","./shapes/Label.js":"6zroH","./shapes/Line.js":"5CJlu","./shapes/Path.js":"5Mvr2","./shapes/Rect.js":"4F7lt","./shapes/RegularPolygon.js":"D0Yqr","./shapes/Ring.js":"40VNr","./shapes/Sprite.js":"6uw1S","./shapes/Star.js":"7sU9T","./shapes/Text.js":"6fN4w","./shapes/TextPath.js":"5nhrG","./shapes/Transformer.js":"30rm5","./shapes/Wedge.js":"52jtI","./filters/Blur.js":"2Luqo","./filters/Brighten.js":"3iEMA","./filters/Contrast.js":"18bkP","./filters/Emboss.js":"7gWC1","./filters/Enhance.js":"y2UaJ","./filters/Grayscale.js":"4Sr0E","./filters/HSL.js":"57uKB","./filters/HSV.js":"6B1nN","./filters/Invert.js":"7C9M1","./filters/Kaleidoscope.js":"7ipBg","./filters/Mask.js":"6JmYM","./filters/Noise.js":"5xzCG","./filters/Pixelate.js":"1YGv7","./filters/Posterize.js":"4zntz","./filters/RGB.js":"4NR4h","./filters/RGBA.js":"4hdBJ","./filters/Sepia.js":"5KTlJ","./filters/Solarize.js":"X4fVa","./filters/Threshold.js":"1wOja","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"7nhch":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Konva", function () {
  return Konva;
});
var _GlobalJs = require('./Global.js');
var _UtilJs = require('./Util.js');
var _NodeJs = require('./Node.js');
var _ContainerJs = require('./Container.js');
var _StageJs = require('./Stage.js');
var _LayerJs = require('./Layer.js');
var _FastLayerJs = require('./FastLayer.js');
var _GroupJs = require('./Group.js');
var _DragAndDropJs = require('./DragAndDrop.js');
var _ShapeJs = require('./Shape.js');
var _AnimationJs = require('./Animation.js');
var _TweenJs = require('./Tween.js');
var _ContextJs = require('./Context.js');
var _CanvasJs = require('./Canvas.js');
const Konva = _UtilJs.Util._assign(_GlobalJs.Konva, {
  Util: _UtilJs.Util,
  Transform: _UtilJs.Transform,
  Node: _NodeJs.Node,
  Container: _ContainerJs.Container,
  Stage: _StageJs.Stage,
  stages: _StageJs.stages,
  Layer: _LayerJs.Layer,
  FastLayer: _FastLayerJs.FastLayer,
  Group: _GroupJs.Group,
  DD: _DragAndDropJs.DD,
  Shape: _ShapeJs.Shape,
  shapes: _ShapeJs.shapes,
  Animation: _AnimationJs.Animation,
  Tween: _TweenJs.Tween,
  Easings: _TweenJs.Easings,
  Context: _ContextJs.Context,
  Canvas: _CanvasJs.Canvas
});
exports.default = Konva;

},{"./Global.js":"6qmUL","./Util.js":"27sKe","./Node.js":"5H2JD","./Container.js":"6SS8S","./Stage.js":"6m2ki","./Layer.js":"7yclU","./FastLayer.js":"3e32M","./Group.js":"796CV","./DragAndDrop.js":"5JOlZ","./Shape.js":"4xDL7","./Animation.js":"4PMju","./Tween.js":"43MYL","./Context.js":"3J28s","./Canvas.js":"6wLjS","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6qmUL":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "glob", function () {
  return glob;
});
_parcelHelpers.export(exports, "Konva", function () {
  return Konva;
});
_parcelHelpers.export(exports, "_registerNode", function () {
  return _registerNode;
});
var global = arguments[3];
var PI_OVER_180 = Math.PI / 180;
function detectBrowser() {
  return typeof window !== 'undefined' && (({}).toString.call(window) === '[object Window]' || ({}).toString.call(window) === '[object global]');
}
const glob = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' ? self : {};
const Konva = {
  _global: glob,
  version: '8.1.3',
  isBrowser: detectBrowser(),
  isUnminified: (/param/).test((function (param) {}).toString()),
  dblClickWindow: 400,
  getAngle(angle) {
    return Konva.angleDeg ? angle * PI_OVER_180 : angle;
  },
  enableTrace: false,
  pointerEventsEnabled: true,
  autoDrawEnabled: true,
  hitOnDragEnabled: false,
  capturePointerEventsEnabled: false,
  _mouseListenClick: false,
  _touchListenClick: false,
  _pointerListenClick: false,
  _mouseInDblClickWindow: false,
  _touchInDblClickWindow: false,
  _pointerInDblClickWindow: false,
  pixelRatio: typeof window !== 'undefined' && window.devicePixelRatio || 1,
  dragDistance: 3,
  angleDeg: true,
  showWarnings: true,
  dragButtons: [0, 1],
  isDragging() {
    return Konva['DD'].isDragging;
  },
  isDragReady() {
    return !!Konva['DD'].node;
  },
  document: glob.document,
  _injectGlobal(Konva) {
    glob.Konva = Konva;
  }
};
const _registerNode = NodeClass => {
  Konva[NodeClass.prototype.getClassName()] = NodeClass;
};
Konva._injectGlobal(Konva);

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4Bc1D":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"27sKe":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Transform", function () {
  return Transform;
});
_parcelHelpers.export(exports, "Util", function () {
  return Util;
});
var _GlobalJs = require('./Global.js');
class Transform {
  constructor(m = [1, 0, 0, 1, 0, 0]) {
    this.dirty = false;
    this.m = m && m.slice() || [1, 0, 0, 1, 0, 0];
  }
  reset() {
    this.m[0] = 1;
    this.m[1] = 0;
    this.m[2] = 0;
    this.m[3] = 1;
    this.m[4] = 0;
    this.m[5] = 0;
  }
  copy() {
    return new Transform(this.m);
  }
  copyInto(tr) {
    tr.m[0] = this.m[0];
    tr.m[1] = this.m[1];
    tr.m[2] = this.m[2];
    tr.m[3] = this.m[3];
    tr.m[4] = this.m[4];
    tr.m[5] = this.m[5];
  }
  point(point) {
    var m = this.m;
    return {
      x: m[0] * point.x + m[2] * point.y + m[4],
      y: m[1] * point.x + m[3] * point.y + m[5]
    };
  }
  translate(x, y) {
    this.m[4] += this.m[0] * x + this.m[2] * y;
    this.m[5] += this.m[1] * x + this.m[3] * y;
    return this;
  }
  scale(sx, sy) {
    this.m[0] *= sx;
    this.m[1] *= sx;
    this.m[2] *= sy;
    this.m[3] *= sy;
    return this;
  }
  rotate(rad) {
    var c = Math.cos(rad);
    var s = Math.sin(rad);
    var m11 = this.m[0] * c + this.m[2] * s;
    var m12 = this.m[1] * c + this.m[3] * s;
    var m21 = this.m[0] * -s + this.m[2] * c;
    var m22 = this.m[1] * -s + this.m[3] * c;
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    return this;
  }
  getTranslation() {
    return {
      x: this.m[4],
      y: this.m[5]
    };
  }
  skew(sx, sy) {
    var m11 = this.m[0] + this.m[2] * sy;
    var m12 = this.m[1] + this.m[3] * sy;
    var m21 = this.m[2] + this.m[0] * sx;
    var m22 = this.m[3] + this.m[1] * sx;
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    return this;
  }
  multiply(matrix) {
    var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
    var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
    var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
    var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
    var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
    var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    this.m[4] = dx;
    this.m[5] = dy;
    return this;
  }
  invert() {
    var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
    var m0 = this.m[3] * d;
    var m1 = -this.m[1] * d;
    var m2 = -this.m[2] * d;
    var m3 = this.m[0] * d;
    var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
    var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    this.m[0] = m0;
    this.m[1] = m1;
    this.m[2] = m2;
    this.m[3] = m3;
    this.m[4] = m4;
    this.m[5] = m5;
    return this;
  }
  getMatrix() {
    return this.m;
  }
  setAbsolutePosition(x, y) {
    var m0 = this.m[0], m1 = this.m[1], m2 = this.m[2], m3 = this.m[3], m4 = this.m[4], m5 = this.m[5], yt = (m0 * (y - m5) - m1 * (x - m4)) / (m0 * m3 - m1 * m2), xt = (x - m4 - m2 * yt) / m0;
    return this.translate(xt, yt);
  }
  decompose() {
    var a = this.m[0];
    var b = this.m[1];
    var c = this.m[2];
    var d = this.m[3];
    var e = this.m[4];
    var f = this.m[5];
    var delta = a * d - b * c;
    let result = {
      x: e,
      y: f,
      rotation: 0,
      scaleX: 0,
      scaleY: 0,
      skewX: 0,
      skewY: 0
    };
    if (a != 0 || b != 0) {
      var r = Math.sqrt(a * a + b * b);
      result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
      result.scaleX = r;
      result.scaleY = delta / r;
      result.skewX = (a * c + b * d) / delta;
      result.skewY = 0;
    } else if (c != 0 || d != 0) {
      var s = Math.sqrt(c * c + d * d);
      result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
      result.scaleX = delta / s;
      result.scaleY = s;
      result.skewX = 0;
      result.skewY = (a * c + b * d) / delta;
    } else {}
    result.rotation = Util._getRotation(result.rotation);
    return result;
  }
}
var OBJECT_ARRAY = '[object Array]', OBJECT_NUMBER = '[object Number]', OBJECT_STRING = '[object String]', OBJECT_BOOLEAN = '[object Boolean]', PI_OVER_DEG180 = Math.PI / 180, DEG180_OVER_PI = 180 / Math.PI, HASH = '#', EMPTY_STRING = '', ZERO = '0', KONVA_WARNING = 'Konva warning: ', KONVA_ERROR = 'Konva error: ', RGB_PAREN = 'rgb(', COLORS = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 132, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 255, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 203],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [119, 128, 144],
  slategrey: [119, 128, 144],
  snow: [255, 255, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  transparent: [255, 255, 255, 0],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 5]
}, RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, animQueue = [];
const req = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame || (function (f) {
  setTimeout(f, 60);
});
const Util = {
  _isElement(obj) {
    return !!(obj && obj.nodeType == 1);
  },
  _isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  },
  _isPlainObject(obj) {
    return !!obj && obj.constructor === Object;
  },
  _isArray(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
  },
  _isNumber(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
  },
  _isString(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_STRING;
  },
  _isBoolean(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
  },
  isObject(val) {
    return val instanceof Object;
  },
  isValidSelector(selector) {
    if (typeof selector !== 'string') {
      return false;
    }
    var firstChar = selector[0];
    return firstChar === '#' || firstChar === '.' || firstChar === firstChar.toUpperCase();
  },
  _sign(number) {
    if (number === 0) {
      return 1;
    }
    if (number > 0) {
      return 1;
    } else {
      return -1;
    }
  },
  requestAnimFrame(callback) {
    animQueue.push(callback);
    if (animQueue.length === 1) {
      req(function () {
        const queue = animQueue;
        animQueue = [];
        queue.forEach(function (cb) {
          cb();
        });
      });
    }
  },
  createCanvasElement() {
    var canvas = document.createElement('canvas');
    try {
      canvas.style = canvas.style || ({});
    } catch (e) {}
    return canvas;
  },
  createImageElement() {
    return document.createElement('img');
  },
  _isInDocument(el) {
    while (el = el.parentNode) {
      if (el == document) {
        return true;
      }
    }
    return false;
  },
  _urlToImage(url, callback) {
    var imageObj = Util.createImageElement();
    imageObj.onload = function () {
      callback(imageObj);
    };
    imageObj.src = url;
  },
  _rgbToHex(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },
  _hexToRgb(hex) {
    hex = hex.replace(HASH, EMPTY_STRING);
    var bigint = parseInt(hex, 16);
    return {
      r: bigint >> 16 & 255,
      g: bigint >> 8 & 255,
      b: bigint & 255
    };
  },
  getRandomColor() {
    var randColor = (Math.random() * 0xffffff << 0).toString(16);
    while (randColor.length < 6) {
      randColor = ZERO + randColor;
    }
    return HASH + randColor;
  },
  getRGB(color) {
    var rgb;
    if ((color in COLORS)) {
      rgb = COLORS[color];
      return {
        r: rgb[0],
        g: rgb[1],
        b: rgb[2]
      };
    } else if (color[0] === HASH) {
      return this._hexToRgb(color.substring(1));
    } else if (color.substr(0, 4) === RGB_PAREN) {
      rgb = RGB_REGEX.exec(color.replace(/ /g, ''));
      return {
        r: parseInt(rgb[1], 10),
        g: parseInt(rgb[2], 10),
        b: parseInt(rgb[3], 10)
      };
    } else {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
  },
  colorToRGBA(str) {
    str = str || 'black';
    return Util._namedColorToRBA(str) || Util._hex3ColorToRGBA(str) || Util._hex6ColorToRGBA(str) || Util._rgbColorToRGBA(str) || Util._rgbaColorToRGBA(str) || Util._hslColorToRGBA(str);
  },
  _namedColorToRBA(str) {
    var c = COLORS[str.toLowerCase()];
    if (!c) {
      return null;
    }
    return {
      r: c[0],
      g: c[1],
      b: c[2],
      a: 1
    };
  },
  _rgbColorToRGBA(str) {
    if (str.indexOf('rgb(') === 0) {
      str = str.match(/rgb\(([^)]+)\)/)[1];
      var parts = str.split(/ *, */).map(Number);
      return {
        r: parts[0],
        g: parts[1],
        b: parts[2],
        a: 1
      };
    }
  },
  _rgbaColorToRGBA(str) {
    if (str.indexOf('rgba(') === 0) {
      str = str.match(/rgba\(([^)]+)\)/)[1];
      var parts = str.split(/ *, */).map(Number);
      return {
        r: parts[0],
        g: parts[1],
        b: parts[2],
        a: parts[3]
      };
    }
  },
  _hex6ColorToRGBA(str) {
    if (str[0] === '#' && str.length === 7) {
      return {
        r: parseInt(str.slice(1, 3), 16),
        g: parseInt(str.slice(3, 5), 16),
        b: parseInt(str.slice(5, 7), 16),
        a: 1
      };
    }
  },
  _hex3ColorToRGBA(str) {
    if (str[0] === '#' && str.length === 4) {
      return {
        r: parseInt(str[1] + str[1], 16),
        g: parseInt(str[2] + str[2], 16),
        b: parseInt(str[3] + str[3], 16),
        a: 1
      };
    }
  },
  _hslColorToRGBA(str) {
    if ((/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g).test(str)) {
      const [_, ...hsl] = (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g).exec(str);
      const h = Number(hsl[0]) / 360;
      const s = Number(hsl[1]) / 100;
      const l = Number(hsl[2]) / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return {
          r: Math.round(val),
          g: Math.round(val),
          b: Math.round(val),
          a: 1
        };
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return {
        r: Math.round(rgb[0]),
        g: Math.round(rgb[1]),
        b: Math.round(rgb[2]),
        a: 1
      };
    }
  },
  haveIntersection(r1, r2) {
    return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
  },
  cloneObject(obj) {
    var retObj = {};
    for (var key in obj) {
      if (this._isPlainObject(obj[key])) {
        retObj[key] = this.cloneObject(obj[key]);
      } else if (this._isArray(obj[key])) {
        retObj[key] = this.cloneArray(obj[key]);
      } else {
        retObj[key] = obj[key];
      }
    }
    return retObj;
  },
  cloneArray(arr) {
    return arr.slice(0);
  },
  degToRad(deg) {
    return deg * PI_OVER_DEG180;
  },
  radToDeg(rad) {
    return rad * DEG180_OVER_PI;
  },
  _degToRad(deg) {
    Util.warn('Util._degToRad is removed. Please use public Util.degToRad instead.');
    return Util.degToRad(deg);
  },
  _radToDeg(rad) {
    Util.warn('Util._radToDeg is removed. Please use public Util.radToDeg instead.');
    return Util.radToDeg(rad);
  },
  _getRotation(radians) {
    return _GlobalJs.Konva.angleDeg ? Util.radToDeg(radians) : radians;
  },
  _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  throw(str) {
    throw new Error(KONVA_ERROR + str);
  },
  error(str) {
    console.error(KONVA_ERROR + str);
  },
  warn(str) {
    if (!_GlobalJs.Konva.showWarnings) {
      return;
    }
    console.warn(KONVA_WARNING + str);
  },
  each(obj, func) {
    for (var key in obj) {
      func(key, obj[key]);
    }
  },
  _inRange(val, left, right) {
    return left <= val && val < right;
  },
  _getProjectionToSegment(x1, y1, x2, y2, x3, y3) {
    var x, y, dist;
    var pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    if (pd2 == 0) {
      x = x1;
      y = y1;
      dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
    } else {
      var u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
      if (u < 0) {
        x = x1;
        y = y1;
        dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
      } else if (u > 1.0) {
        x = x2;
        y = y2;
        dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
      } else {
        x = x1 + u * (x2 - x1);
        y = y1 + u * (y2 - y1);
        dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
      }
    }
    return [x, y, dist];
  },
  _getProjectionToLine(pt, line, isClosed) {
    var pc = Util.cloneObject(pt);
    var dist = Number.MAX_VALUE;
    line.forEach(function (p1, i) {
      if (!isClosed && i === line.length - 1) {
        return;
      }
      var p2 = line[(i + 1) % line.length];
      var proj = Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
      var px = proj[0], py = proj[1], pdist = proj[2];
      if (pdist < dist) {
        pc.x = px;
        pc.y = py;
        dist = pdist;
      }
    });
    return pc;
  },
  _prepareArrayForTween(startArray, endArray, isClosed) {
    var n, start = [], end = [];
    if (startArray.length > endArray.length) {
      var temp = endArray;
      endArray = startArray;
      startArray = temp;
    }
    for (n = 0; n < startArray.length; n += 2) {
      start.push({
        x: startArray[n],
        y: startArray[n + 1]
      });
    }
    for (n = 0; n < endArray.length; n += 2) {
      end.push({
        x: endArray[n],
        y: endArray[n + 1]
      });
    }
    var newStart = [];
    end.forEach(function (point) {
      var pr = Util._getProjectionToLine(point, start, isClosed);
      newStart.push(pr.x);
      newStart.push(pr.y);
    });
    return newStart;
  },
  _prepareToStringify(obj) {
    var desc;
    obj.visitedByCircularReferenceRemoval = true;
    for (var key in obj) {
      if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == 'object')) {
        continue;
      }
      desc = Object.getOwnPropertyDescriptor(obj, key);
      if (obj[key].visitedByCircularReferenceRemoval || Util._isElement(obj[key])) {
        if (desc.configurable) {
          delete obj[key];
        } else {
          return null;
        }
      } else if (Util._prepareToStringify(obj[key]) === null) {
        if (desc.configurable) {
          delete obj[key];
        } else {
          return null;
        }
      }
    }
    delete obj.visitedByCircularReferenceRemoval;
    return obj;
  },
  _assign(target, source) {
    for (var key in source) {
      target[key] = source[key];
    }
    return target;
  },
  _getFirstPointerId(evt) {
    if (!evt.touches) {
      return 999;
    } else {
      return evt.changedTouches[0].identifier;
    }
  }
};

},{"./Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"5H2JD":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Node", function () {
  return Node;
});
var _UtilJs = require('./Util.js');
var _FactoryJs = require('./Factory.js');
var _CanvasJs = require('./Canvas.js');
var _GlobalJs = require('./Global.js');
var _DragAndDropJs = require('./DragAndDrop.js');
var _ValidatorsJs = require('./Validators.js');
var ABSOLUTE_OPACITY = 'absoluteOpacity', ALL_LISTENERS = 'allEventListeners', ABSOLUTE_TRANSFORM = 'absoluteTransform', ABSOLUTE_SCALE = 'absoluteScale', CANVAS = 'canvas', CHANGE = 'Change', CHILDREN = 'children', KONVA = 'konva', LISTENING = 'listening', MOUSEENTER = 'mouseenter', MOUSELEAVE = 'mouseleave', NAME = 'name', SET = 'set', SHAPE = 'Shape', SPACE = ' ', STAGE = 'stage', TRANSFORM = 'transform', UPPER_STAGE = 'Stage', VISIBLE = 'visible', TRANSFORM_CHANGE_STR = ['xChange.konva', 'yChange.konva', 'scaleXChange.konva', 'scaleYChange.konva', 'skewXChange.konva', 'skewYChange.konva', 'rotationChange.konva', 'offsetXChange.konva', 'offsetYChange.konva', 'transformsEnabledChange.konva'].join(SPACE);
let idCounter = 1;
class Node {
  constructor(config) {
    this._id = idCounter++;
    this.eventListeners = {};
    this.attrs = {};
    this.index = 0;
    this._allEventListeners = null;
    this.parent = null;
    this._cache = new Map();
    this._attachedDepsListeners = new Map();
    this._lastPos = null;
    this._batchingTransformChange = false;
    this._needClearTransformCache = false;
    this._filterUpToDate = false;
    this._isUnderCache = false;
    this._dragEventId = null;
    this._shouldFireChangeEvents = false;
    this.setAttrs(config);
    this._shouldFireChangeEvents = true;
  }
  hasChildren() {
    return false;
  }
  _clearCache(attr) {
    if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && this._cache.get(attr)) {
      this._cache.get(attr).dirty = true;
    } else if (attr) {
      this._cache.delete(attr);
    } else {
      this._cache.clear();
    }
  }
  _getCache(attr, privateGetter) {
    var cache = this._cache.get(attr);
    var isTransform = attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM;
    var invalid = cache === undefined || isTransform && cache.dirty === true;
    if (invalid) {
      cache = privateGetter.call(this);
      this._cache.set(attr, cache);
    }
    return cache;
  }
  _calculate(name, deps, getter) {
    if (!this._attachedDepsListeners.get(name)) {
      const depsString = deps.map(dep => dep + 'Change.konva').join(SPACE);
      this.on(depsString, () => {
        this._clearCache(name);
      });
      this._attachedDepsListeners.set(name, true);
    }
    return this._getCache(name, getter);
  }
  _getCanvasCache() {
    return this._cache.get(CANVAS);
  }
  _clearSelfAndDescendantCache(attr) {
    this._clearCache(attr);
    if (attr === ABSOLUTE_TRANSFORM) {
      this.fire('absoluteTransformChange');
    }
  }
  clearCache() {
    this._cache.delete(CANVAS);
    this._clearSelfAndDescendantCache();
    this._requestDraw();
    return this;
  }
  cache(config) {
    var conf = config || ({});
    var rect = {};
    if (conf.x === undefined || conf.y === undefined || conf.width === undefined || conf.height === undefined) {
      rect = this.getClientRect({
        skipTransform: true,
        relativeTo: this.getParent()
      });
    }
    var width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x = conf.x === undefined ? rect.x : conf.x, y = conf.y === undefined ? rect.y : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false, hitCanvasPixelRatio = conf.hitCanvasPixelRatio || 1;
    if (!width || !height) {
      _UtilJs.Util.error('Can not cache the node. Width or height of the node equals 0. Caching is skipped.');
      return;
    }
    width += offset * 2;
    height += offset * 2;
    x -= offset;
    y -= offset;
    var cachedSceneCanvas = new _CanvasJs.SceneCanvas({
      pixelRatio: pixelRatio,
      width: width,
      height: height
    }), cachedFilterCanvas = new _CanvasJs.SceneCanvas({
      pixelRatio: pixelRatio,
      width: 0,
      height: 0
    }), cachedHitCanvas = new _CanvasJs.HitCanvas({
      pixelRatio: hitCanvasPixelRatio,
      width: width,
      height: height
    }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
    cachedHitCanvas.isCache = true;
    cachedSceneCanvas.isCache = true;
    this._cache.delete(CANVAS);
    this._filterUpToDate = false;
    if (conf.imageSmoothingEnabled === false) {
      cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
      cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
    }
    sceneContext.save();
    hitContext.save();
    sceneContext.translate(-x, -y);
    hitContext.translate(-x, -y);
    this._isUnderCache = true;
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
    this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
    this.drawScene(cachedSceneCanvas, this);
    this.drawHit(cachedHitCanvas, this);
    this._isUnderCache = false;
    sceneContext.restore();
    hitContext.restore();
    if (drawBorder) {
      sceneContext.save();
      sceneContext.beginPath();
      sceneContext.rect(0, 0, width, height);
      sceneContext.closePath();
      sceneContext.setAttr('strokeStyle', 'red');
      sceneContext.setAttr('lineWidth', 5);
      sceneContext.stroke();
      sceneContext.restore();
    }
    this._cache.set(CANVAS, {
      scene: cachedSceneCanvas,
      filter: cachedFilterCanvas,
      hit: cachedHitCanvas,
      x: x,
      y: y
    });
    this._requestDraw();
    return this;
  }
  isCached() {
    return this._cache.has(CANVAS);
  }
  getClientRect(config) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(rect, top) {
    var points = [{
      x: rect.x,
      y: rect.y
    }, {
      x: rect.x + rect.width,
      y: rect.y
    }, {
      x: rect.x + rect.width,
      y: rect.y + rect.height
    }, {
      x: rect.x,
      y: rect.y + rect.height
    }];
    var minX, minY, maxX, maxY;
    var trans = this.getAbsoluteTransform(top);
    points.forEach(function (point) {
      var transformed = trans.point(point);
      if (minX === undefined) {
        minX = maxX = transformed.x;
        minY = maxY = transformed.y;
      }
      minX = Math.min(minX, transformed.x);
      minY = Math.min(minY, transformed.y);
      maxX = Math.max(maxX, transformed.x);
      maxY = Math.max(maxY, transformed.y);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  _drawCachedSceneCanvas(context) {
    context.save();
    context._applyOpacity(this);
    context._applyGlobalCompositeOperation(this);
    const canvasCache = this._getCanvasCache();
    context.translate(canvasCache.x, canvasCache.y);
    var cacheCanvas = this._getCachedSceneCanvas();
    var ratio = cacheCanvas.pixelRatio;
    context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
    context.restore();
  }
  _drawCachedHitCanvas(context) {
    var canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
    context.save();
    context.translate(canvasCache.x, canvasCache.y);
    context.drawImage(hitCanvas._canvas, 0, 0, hitCanvas.width / hitCanvas.pixelRatio, hitCanvas.height / hitCanvas.pixelRatio);
    context.restore();
  }
  _getCachedSceneCanvas() {
    var filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n, filter;
    if (filters) {
      if (!this._filterUpToDate) {
        var ratio = sceneCanvas.pixelRatio;
        filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
        try {
          len = filters.length;
          filterContext.clear();
          filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
          imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
          for (n = 0; n < len; n++) {
            filter = filters[n];
            if (typeof filter !== 'function') {
              _UtilJs.Util.error('Filter should be type of function, but got ' + typeof filter + ' instead. Please check correct filters');
              continue;
            }
            filter.call(this, imageData);
            filterContext.putImageData(imageData, 0, 0);
          }
        } catch (e) {
          _UtilJs.Util.error('Unable to apply filter. ' + e.message + ' This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.');
        }
        this._filterUpToDate = true;
      }
      return filterCanvas;
    }
    return sceneCanvas;
  }
  on(evtStr, handler) {
    this._cache && this._cache.delete(ALL_LISTENERS);
    if (arguments.length === 3) {
      return this._delegate.apply(this, arguments);
    }
    var events = evtStr.split(SPACE), len = events.length, n, event, parts, baseEvent, name;
    for (n = 0; n < len; n++) {
      event = events[n];
      parts = event.split('.');
      baseEvent = parts[0];
      name = parts[1] || '';
      if (!this.eventListeners[baseEvent]) {
        this.eventListeners[baseEvent] = [];
      }
      this.eventListeners[baseEvent].push({
        name: name,
        handler: handler
      });
    }
    return this;
  }
  off(evtStr, callback) {
    var events = (evtStr || '').split(SPACE), len = events.length, n, t, event, parts, baseEvent, name;
    this._cache && this._cache.delete(ALL_LISTENERS);
    if (!evtStr) {
      for (t in this.eventListeners) {
        this._off(t);
      }
    }
    for (n = 0; n < len; n++) {
      event = events[n];
      parts = event.split('.');
      baseEvent = parts[0];
      name = parts[1];
      if (baseEvent) {
        if (this.eventListeners[baseEvent]) {
          this._off(baseEvent, name, callback);
        }
      } else {
        for (t in this.eventListeners) {
          this._off(t, name, callback);
        }
      }
    }
    return this;
  }
  dispatchEvent(evt) {
    var e = {
      target: this,
      type: evt.type,
      evt: evt
    };
    this.fire(evt.type, e);
    return this;
  }
  addEventListener(type, handler) {
    this.on(type, function (evt) {
      handler.call(this, evt.evt);
    });
    return this;
  }
  removeEventListener(type) {
    this.off(type);
    return this;
  }
  _delegate(event, selector, handler) {
    var stopNode = this;
    this.on(event, function (evt) {
      var targets = evt.target.findAncestors(selector, true, stopNode);
      for (var i = 0; i < targets.length; i++) {
        evt = _UtilJs.Util.cloneObject(evt);
        evt.currentTarget = targets[i];
        handler.call(targets[i], evt);
      }
    });
  }
  remove() {
    if (this.isDragging()) {
      this.stopDrag();
    }
    _DragAndDropJs.DD._dragElements.delete(this._id);
    this._remove();
    return this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
    this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
    this._clearSelfAndDescendantCache(STAGE);
    this._clearSelfAndDescendantCache(VISIBLE);
    this._clearSelfAndDescendantCache(LISTENING);
  }
  _remove() {
    this._clearCaches();
    var parent = this.getParent();
    if (parent && parent.children) {
      parent.children.splice(this.index, 1);
      parent._setChildrenIndices();
      this.parent = null;
    }
  }
  destroy() {
    this.remove();
    return this;
  }
  getAttr(attr) {
    var method = 'get' + _UtilJs.Util._capitalize(attr);
    if (_UtilJs.Util._isFunction(this[method])) {
      return this[method]();
    }
    return this.attrs[attr];
  }
  getAncestors() {
    var parent = this.getParent(), ancestors = [];
    while (parent) {
      ancestors.push(parent);
      parent = parent.getParent();
    }
    return ancestors;
  }
  getAttrs() {
    return this.attrs || ({});
  }
  setAttrs(config) {
    this._batchTransformChanges(() => {
      var key, method;
      if (!config) {
        return this;
      }
      for (key in config) {
        if (key === CHILDREN) {
          continue;
        }
        method = SET + _UtilJs.Util._capitalize(key);
        if (_UtilJs.Util._isFunction(this[method])) {
          this[method](config[key]);
        } else {
          this._setAttr(key, config[key]);
        }
      }
    });
    return this;
  }
  isListening() {
    return this._getCache(LISTENING, this._isListening);
  }
  _isListening(relativeTo) {
    const listening = this.listening();
    if (!listening) {
      return false;
    }
    const parent = this.getParent();
    if (parent && parent !== relativeTo && this !== relativeTo) {
      return parent._isListening(relativeTo);
    } else {
      return true;
    }
  }
  isVisible() {
    return this._getCache(VISIBLE, this._isVisible);
  }
  _isVisible(relativeTo) {
    const visible = this.visible();
    if (!visible) {
      return false;
    }
    const parent = this.getParent();
    if (parent && parent !== relativeTo && this !== relativeTo) {
      return parent._isVisible(relativeTo);
    } else {
      return true;
    }
  }
  shouldDrawHit(top, skipDragCheck = false) {
    if (top) {
      return this._isVisible(top) && this._isListening(top);
    }
    var layer = this.getLayer();
    var layerUnderDrag = false;
    _DragAndDropJs.DD._dragElements.forEach(elem => {
      if (elem.dragStatus !== 'dragging') {
        return;
      } else if (elem.node.nodeType === 'Stage') {
        layerUnderDrag = true;
      } else if (elem.node.getLayer() === layer) {
        layerUnderDrag = true;
      }
    });
    var dragSkip = !skipDragCheck && !_GlobalJs.Konva.hitOnDragEnabled && layerUnderDrag;
    return this.isListening() && this.isVisible() && !dragSkip;
  }
  show() {
    this.visible(true);
    return this;
  }
  hide() {
    this.visible(false);
    return this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var depth = this.getDepth(), that = this, index = 0, nodes, len, n, child;
    function addChildren(children) {
      nodes = [];
      len = children.length;
      for (n = 0; n < len; n++) {
        child = children[n];
        index++;
        if (child.nodeType !== SHAPE) {
          nodes = nodes.concat(child.getChildren().slice());
        }
        if (child._id === that._id) {
          n = len;
        }
      }
      if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
        addChildren(nodes);
      }
    }
    if (that.nodeType !== UPPER_STAGE) {
      addChildren(that.getStage().getChildren());
    }
    return index;
  }
  getDepth() {
    var depth = 0, parent = this.parent;
    while (parent) {
      depth++;
      parent = parent.parent;
    }
    return depth;
  }
  _batchTransformChanges(func) {
    this._batchingTransformChange = true;
    func();
    this._batchingTransformChange = false;
    if (this._needClearTransformCache) {
      this._clearCache(TRANSFORM);
      this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    }
    this._needClearTransformCache = false;
  }
  setPosition(pos) {
    this._batchTransformChanges(() => {
      this.x(pos.x);
      this.y(pos.y);
    });
    return this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    if (!this.getStage()) {
      return null;
    }
    var pos = this.getStage().getPointerPosition();
    if (!pos) {
      return null;
    }
    var transform = this.getAbsoluteTransform().copy();
    transform.invert();
    return transform.point(pos);
  }
  getAbsolutePosition(top) {
    let haveCachedParent = false;
    let parent = this.parent;
    while (parent) {
      if (parent.isCached()) {
        haveCachedParent = true;
        break;
      }
      parent = parent.parent;
    }
    if (haveCachedParent && !top) {
      top = true;
    }
    var absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new _UtilJs.Transform(), offset = this.offset();
    absoluteTransform.m = absoluteMatrix.slice();
    absoluteTransform.translate(offset.x, offset.y);
    return absoluteTransform.getTranslation();
  }
  setAbsolutePosition(pos) {
    var origTrans = this._clearTransform();
    this.attrs.x = origTrans.x;
    this.attrs.y = origTrans.y;
    delete origTrans.x;
    delete origTrans.y;
    this._clearCache(TRANSFORM);
    var it = this._getAbsoluteTransform().copy();
    it.invert();
    it.translate(pos.x, pos.y);
    pos = {
      x: this.attrs.x + it.getTranslation().x,
      y: this.attrs.y + it.getTranslation().y
    };
    this._setTransform(origTrans);
    this.setPosition({
      x: pos.x,
      y: pos.y
    });
    this._clearCache(TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    return this;
  }
  _setTransform(trans) {
    var key;
    for (key in trans) {
      this.attrs[key] = trans[key];
    }
  }
  _clearTransform() {
    var trans = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    this.attrs.x = 0;
    this.attrs.y = 0;
    this.attrs.rotation = 0;
    this.attrs.scaleX = 1;
    this.attrs.scaleY = 1;
    this.attrs.offsetX = 0;
    this.attrs.offsetY = 0;
    this.attrs.skewX = 0;
    this.attrs.skewY = 0;
    return trans;
  }
  move(change) {
    var changeX = change.x, changeY = change.y, x = this.x(), y = this.y();
    if (changeX !== undefined) {
      x += changeX;
    }
    if (changeY !== undefined) {
      y += changeY;
    }
    this.setPosition({
      x: x,
      y: y
    });
    return this;
  }
  _eachAncestorReverse(func, top) {
    var family = [], parent = this.getParent(), len, n;
    if (top && top._id === this._id) {
      return;
    }
    family.unshift(this);
    while (parent && (!top || parent._id !== top._id)) {
      family.unshift(parent);
      parent = parent.parent;
    }
    len = family.length;
    for (n = 0; n < len; n++) {
      func(family[n]);
    }
  }
  rotate(theta) {
    this.rotation(this.rotation() + theta);
    return this;
  }
  moveToTop() {
    if (!this.parent) {
      _UtilJs.Util.warn('Node has no parent. moveToTop function is ignored.');
      return false;
    }
    var index = this.index;
    this.parent.children.splice(index, 1);
    this.parent.children.push(this);
    this.parent._setChildrenIndices();
    return true;
  }
  moveUp() {
    if (!this.parent) {
      _UtilJs.Util.warn('Node has no parent. moveUp function is ignored.');
      return false;
    }
    var index = this.index, len = this.parent.getChildren().length;
    if (index < len - 1) {
      this.parent.children.splice(index, 1);
      this.parent.children.splice(index + 1, 0, this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  moveDown() {
    if (!this.parent) {
      _UtilJs.Util.warn('Node has no parent. moveDown function is ignored.');
      return false;
    }
    var index = this.index;
    if (index > 0) {
      this.parent.children.splice(index, 1);
      this.parent.children.splice(index - 1, 0, this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  moveToBottom() {
    if (!this.parent) {
      _UtilJs.Util.warn('Node has no parent. moveToBottom function is ignored.');
      return false;
    }
    var index = this.index;
    if (index > 0) {
      this.parent.children.splice(index, 1);
      this.parent.children.unshift(this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  setZIndex(zIndex) {
    if (!this.parent) {
      _UtilJs.Util.warn('Node has no parent. zIndex parameter is ignored.');
      return this;
    }
    if (zIndex < 0 || zIndex >= this.parent.children.length) {
      _UtilJs.Util.warn('Unexpected value ' + zIndex + ' for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to ' + (this.parent.children.length - 1) + '.');
    }
    var index = this.index;
    this.parent.children.splice(index, 1);
    this.parent.children.splice(zIndex, 0, this);
    this.parent._setChildrenIndices();
    return this;
  }
  getAbsoluteOpacity() {
    return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var absOpacity = this.opacity();
    var parent = this.getParent();
    if (parent && !parent._isUnderCache) {
      absOpacity *= parent.getAbsoluteOpacity();
    }
    return absOpacity;
  }
  moveTo(newContainer) {
    if (this.getParent() !== newContainer) {
      this._remove();
      newContainer.add(this);
    }
    return this;
  }
  toObject() {
    var obj = {}, attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
    obj.attrs = {};
    for (key in attrs) {
      val = attrs[key];
      nonPlainObject = _UtilJs.Util.isObject(val) && !_UtilJs.Util._isPlainObject(val) && !_UtilJs.Util._isArray(val);
      if (nonPlainObject) {
        continue;
      }
      getter = typeof this[key] === 'function' && this[key];
      delete attrs[key];
      defaultValue = getter ? getter.call(this) : null;
      attrs[key] = val;
      if (defaultValue !== val) {
        obj.attrs[key] = val;
      }
    }
    obj.className = this.getClassName();
    return _UtilJs.Util._prepareToStringify(obj);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(selector, includeSelf, stopNode) {
    var res = [];
    if (includeSelf && this._isMatch(selector)) {
      res.push(this);
    }
    var ancestor = this.parent;
    while (ancestor) {
      if (ancestor === stopNode) {
        return res;
      }
      if (ancestor._isMatch(selector)) {
        res.push(ancestor);
      }
      ancestor = ancestor.parent;
    }
    return res;
  }
  isAncestorOf(node) {
    return false;
  }
  findAncestor(selector, includeSelf, stopNode) {
    return this.findAncestors(selector, includeSelf, stopNode)[0];
  }
  _isMatch(selector) {
    if (!selector) {
      return false;
    }
    if (typeof selector === 'function') {
      return selector(this);
    }
    var selectorArr = selector.replace(/ /g, '').split(','), len = selectorArr.length, n, sel;
    for (n = 0; n < len; n++) {
      sel = selectorArr[n];
      if (!_UtilJs.Util.isValidSelector(sel)) {
        _UtilJs.Util.warn('Selector "' + sel + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
        _UtilJs.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
        _UtilJs.Util.warn('Konva is awesome, right?');
      }
      if (sel.charAt(0) === '#') {
        if (this.id() === sel.slice(1)) {
          return true;
        }
      } else if (sel.charAt(0) === '.') {
        if (this.hasName(sel.slice(1))) {
          return true;
        }
      } else if (this.className === sel || this.nodeType === sel) {
        return true;
      }
    }
    return false;
  }
  getLayer() {
    var parent = this.getParent();
    return parent ? parent.getLayer() : null;
  }
  getStage() {
    return this._getCache(STAGE, this._getStage);
  }
  _getStage() {
    var parent = this.getParent();
    if (parent) {
      return parent.getStage();
    } else {
      return undefined;
    }
  }
  fire(eventType, evt = {}, bubble) {
    evt.target = evt.target || this;
    if (bubble) {
      this._fireAndBubble(eventType, evt);
    } else {
      this._fire(eventType, evt);
    }
    return this;
  }
  getAbsoluteTransform(top) {
    if (top) {
      return this._getAbsoluteTransform(top);
    } else {
      return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
    }
  }
  _getAbsoluteTransform(top) {
    var at;
    if (top) {
      at = new _UtilJs.Transform();
      this._eachAncestorReverse(function (node) {
        var transformsEnabled = node.transformsEnabled();
        if (transformsEnabled === 'all') {
          at.multiply(node.getTransform());
        } else if (transformsEnabled === 'position') {
          at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
        }
      }, top);
      return at;
    } else {
      at = this._cache.get(ABSOLUTE_TRANSFORM) || new _UtilJs.Transform();
      if (this.parent) {
        this.parent.getAbsoluteTransform().copyInto(at);
      } else {
        at.reset();
      }
      var transformsEnabled = this.transformsEnabled();
      if (transformsEnabled === 'all') {
        at.multiply(this.getTransform());
      } else if (transformsEnabled === 'position') {
        const x = this.attrs.x || 0;
        const y = this.attrs.y || 0;
        const offsetX = this.attrs.offsetX || 0;
        const offsetY = this.attrs.offsetY || 0;
        at.translate(x - offsetX, y - offsetY);
      }
      at.dirty = false;
      return at;
    }
  }
  getAbsoluteScale(top) {
    var parent = this;
    while (parent) {
      if (parent._isUnderCache) {
        top = parent;
      }
      parent = parent.getParent();
    }
    const transform = this.getAbsoluteTransform(top);
    const attrs = transform.decompose();
    return {
      x: attrs.scaleX,
      y: attrs.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(TRANSFORM, this._getTransform);
  }
  _getTransform() {
    var _a, _b;
    var m = this._cache.get(TRANSFORM) || new _UtilJs.Transform();
    m.reset();
    var x = this.x(), y = this.y(), rotation = _GlobalJs.Konva.getAngle(this.rotation()), scaleX = (_a = this.attrs.scaleX) !== null && _a !== void 0 ? _a : 1, scaleY = (_b = this.attrs.scaleY) !== null && _b !== void 0 ? _b : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
    if (x !== 0 || y !== 0) {
      m.translate(x, y);
    }
    if (rotation !== 0) {
      m.rotate(rotation);
    }
    if (skewX !== 0 || skewY !== 0) {
      m.skew(skewX, skewY);
    }
    if (scaleX !== 1 || scaleY !== 1) {
      m.scale(scaleX, scaleY);
    }
    if (offsetX !== 0 || offsetY !== 0) {
      m.translate(-1 * offsetX, -1 * offsetY);
    }
    m.dirty = false;
    return m;
  }
  clone(obj) {
    var attrs = _UtilJs.Util.cloneObject(this.attrs), key, allListeners, len, n, listener;
    for (key in obj) {
      attrs[key] = obj[key];
    }
    var node = new this.constructor(attrs);
    for (key in this.eventListeners) {
      allListeners = this.eventListeners[key];
      len = allListeners.length;
      for (n = 0; n < len; n++) {
        listener = allListeners[n];
        if (listener.name.indexOf(KONVA) < 0) {
          if (!node.eventListeners[key]) {
            node.eventListeners[key] = [];
          }
          node.eventListeners[key].push(listener);
        }
      }
    }
    return node;
  }
  _toKonvaCanvas(config) {
    config = config || ({});
    var box = this.getClientRect();
    var stage = this.getStage(), x = config.x !== undefined ? config.x : box.x, y = config.y !== undefined ? config.y : box.y, pixelRatio = config.pixelRatio || 1, canvas = new _CanvasJs.SceneCanvas({
      width: config.width || box.width || (stage ? stage.width() : 0),
      height: config.height || box.height || (stage ? stage.height() : 0),
      pixelRatio: pixelRatio
    }), context = canvas.getContext();
    context.save();
    if (x || y) {
      context.translate(-1 * x, -1 * y);
    }
    this.drawScene(canvas);
    context.restore();
    return canvas;
  }
  toCanvas(config) {
    return this._toKonvaCanvas(config)._canvas;
  }
  toDataURL(config) {
    config = config || ({});
    var mimeType = config.mimeType || null, quality = config.quality || null;
    var url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
    if (config.callback) {
      config.callback(url);
    }
    return url;
  }
  toImage(config) {
    if (!config || !config.callback) {
      throw 'callback required for toImage method config argument';
    }
    var callback = config.callback;
    delete config.callback;
    _UtilJs.Util._urlToImage(this.toDataURL(config), function (img) {
      callback(img);
    });
  }
  setSize(size) {
    this.width(size.width);
    this.height(size.height);
    return this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    if (this.attrs.dragDistance !== undefined) {
      return this.attrs.dragDistance;
    } else if (this.parent) {
      return this.parent.getDragDistance();
    } else {
      return _GlobalJs.Konva.dragDistance;
    }
  }
  _off(type, name, callback) {
    var evtListeners = this.eventListeners[type], i, evtName, handler;
    for (i = 0; i < evtListeners.length; i++) {
      evtName = evtListeners[i].name;
      handler = evtListeners[i].handler;
      if ((evtName !== 'konva' || name === 'konva') && (!name || evtName === name) && (!callback || callback === handler)) {
        evtListeners.splice(i, 1);
        if (evtListeners.length === 0) {
          delete this.eventListeners[type];
          break;
        }
        i--;
      }
    }
  }
  _fireChangeEvent(attr, oldVal, newVal) {
    this._fire(attr + CHANGE, {
      oldVal: oldVal,
      newVal: newVal
    });
  }
  addName(name) {
    if (!this.hasName(name)) {
      var oldName = this.name();
      var newName = oldName ? oldName + ' ' + name : name;
      this.name(newName);
    }
    return this;
  }
  hasName(name) {
    if (!name) {
      return false;
    }
    const fullName = this.name();
    if (!fullName) {
      return false;
    }
    var names = (fullName || '').split(/\s/g);
    return names.indexOf(name) !== -1;
  }
  removeName(name) {
    var names = (this.name() || '').split(/\s/g);
    var index = names.indexOf(name);
    if (index !== -1) {
      names.splice(index, 1);
      this.name(names.join(' '));
    }
    return this;
  }
  setAttr(attr, val) {
    var func = this[SET + _UtilJs.Util._capitalize(attr)];
    if (_UtilJs.Util._isFunction(func)) {
      func.call(this, val);
    } else {
      this._setAttr(attr, val);
    }
    return this;
  }
  _requestDraw() {
    if (_GlobalJs.Konva.autoDrawEnabled) {
      const drawNode = this.getLayer() || this.getStage();
      drawNode === null || drawNode === void 0 ? void 0 : drawNode.batchDraw();
    }
  }
  _setAttr(key, val) {
    var oldVal = this.attrs[key];
    if (oldVal === val && !_UtilJs.Util.isObject(val)) {
      return;
    }
    if (val === undefined || val === null) {
      delete this.attrs[key];
    } else {
      this.attrs[key] = val;
    }
    if (this._shouldFireChangeEvents) {
      this._fireChangeEvent(key, oldVal, val);
    }
    this._requestDraw();
  }
  _setComponentAttr(key, component, val) {
    var oldVal;
    if (val !== undefined) {
      oldVal = this.attrs[key];
      if (!oldVal) {
        this.attrs[key] = this.getAttr(key);
      }
      this.attrs[key][component] = val;
      this._fireChangeEvent(key, oldVal, val);
    }
  }
  _fireAndBubble(eventType, evt, compareShape) {
    if (evt && this.nodeType === SHAPE) {
      evt.target = this;
    }
    var shouldStop = (eventType === MOUSEENTER || eventType === MOUSELEAVE) && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === 'Stage' && !compareShape);
    if (!shouldStop) {
      this._fire(eventType, evt);
      var stopBubble = (eventType === MOUSEENTER || eventType === MOUSELEAVE) && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);
      if ((evt && !evt.cancelBubble || !evt) && this.parent && this.parent.isListening() && !stopBubble) {
        if (compareShape && compareShape.parent) {
          this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
        } else {
          this._fireAndBubble.call(this.parent, eventType, evt);
        }
      }
    }
  }
  _getProtoListeners(eventType) {
    let listeners = this._cache.get(ALL_LISTENERS);
    if (!listeners) {
      listeners = {};
      let obj = Object.getPrototypeOf(this);
      while (obj) {
        if (!obj.eventListeners) {
          obj = Object.getPrototypeOf(obj);
          continue;
        }
        for (var event in obj.eventListeners) {
          const newEvents = obj.eventListeners[event];
          const oldEvents = listeners[event] || [];
          listeners[event] = newEvents.concat(oldEvents);
        }
        obj = Object.getPrototypeOf(obj);
      }
      this._cache.set(ALL_LISTENERS, listeners);
    }
    return listeners[eventType];
  }
  _fire(eventType, evt) {
    evt = evt || ({});
    evt.currentTarget = this;
    evt.type = eventType;
    const topListeners = this._getProtoListeners(eventType);
    if (topListeners) {
      for (var i = 0; i < topListeners.length; i++) {
        topListeners[i].handler.call(this, evt);
      }
    }
    const selfListeners = this.eventListeners[eventType];
    if (selfListeners) {
      for (var i = 0; i < selfListeners.length; i++) {
        selfListeners[i].handler.call(this, evt);
      }
    }
  }
  draw() {
    this.drawScene();
    this.drawHit();
    return this;
  }
  _createDragElement(evt) {
    var pointerId = evt ? evt.pointerId : undefined;
    var stage = this.getStage();
    var ap = this.getAbsolutePosition();
    var pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;
    _DragAndDropJs.DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: pos,
      offset: {
        x: pos.x - ap.x,
        y: pos.y - ap.y
      },
      dragStatus: 'ready',
      pointerId
    });
  }
  startDrag(evt, bubbleEvent = true) {
    if (!_DragAndDropJs.DD._dragElements.has(this._id)) {
      this._createDragElement(evt);
    }
    const elem = _DragAndDropJs.DD._dragElements.get(this._id);
    elem.dragStatus = 'dragging';
    this.fire('dragstart', {
      type: 'dragstart',
      target: this,
      evt: evt && evt.evt
    }, bubbleEvent);
  }
  _setDragPosition(evt, elem) {
    const pos = this.getStage()._getPointerById(elem.pointerId);
    if (!pos) {
      return;
    }
    var newNodePos = {
      x: pos.x - elem.offset.x,
      y: pos.y - elem.offset.y
    };
    var dbf = this.dragBoundFunc();
    if (dbf !== undefined) {
      const bounded = dbf.call(this, newNodePos, evt);
      if (!bounded) {
        _UtilJs.Util.warn('dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.');
      } else {
        newNodePos = bounded;
      }
    }
    if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
      this.setAbsolutePosition(newNodePos);
      this._requestDraw();
    }
    this._lastPos = newNodePos;
  }
  stopDrag(evt) {
    const elem = _DragAndDropJs.DD._dragElements.get(this._id);
    if (elem) {
      elem.dragStatus = 'stopped';
    }
    _DragAndDropJs.DD._endDragBefore(evt);
    _DragAndDropJs.DD._endDragAfter(evt);
  }
  setDraggable(draggable) {
    this._setAttr('draggable', draggable);
    this._dragChange();
  }
  isDragging() {
    const elem = _DragAndDropJs.DD._dragElements.get(this._id);
    return elem ? elem.dragStatus === 'dragging' : false;
  }
  _listenDrag() {
    this._dragCleanup();
    this.on('mousedown.konva touchstart.konva', function (evt) {
      var shouldCheckButton = evt.evt['button'] !== undefined;
      var canDrag = !shouldCheckButton || _GlobalJs.Konva.dragButtons.indexOf(evt.evt['button']) >= 0;
      if (!canDrag) {
        return;
      }
      if (this.isDragging()) {
        return;
      }
      var hasDraggingChild = false;
      _DragAndDropJs.DD._dragElements.forEach(elem => {
        if (this.isAncestorOf(elem.node)) {
          hasDraggingChild = true;
        }
      });
      if (!hasDraggingChild) {
        this._createDragElement(evt);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable) {
      this._listenDrag();
    } else {
      this._dragCleanup();
      var stage = this.getStage();
      if (!stage) {
        return;
      }
      const dragElement = _DragAndDropJs.DD._dragElements.get(this._id);
      const isDragging = dragElement && dragElement.dragStatus === 'dragging';
      const isReady = dragElement && dragElement.dragStatus === 'ready';
      if (isDragging) {
        this.stopDrag();
      } else if (isReady) {
        _DragAndDropJs.DD._dragElements.delete(this._id);
      }
    }
  }
  _dragCleanup() {
    this.off('mousedown.konva');
    this.off('touchstart.konva');
  }
  isClientRectOnScreen(margin = {
    x: 0,
    y: 0
  }) {
    const stage = this.getStage();
    if (!stage) {
      return false;
    }
    const screenRect = {
      x: -margin.x,
      y: -margin.y,
      width: stage.width() + margin.x,
      height: stage.height() + margin.y
    };
    return _UtilJs.Util.haveIntersection(screenRect, this.getClientRect());
  }
  static create(data, container) {
    if (_UtilJs.Util._isString(data)) {
      data = JSON.parse(data);
    }
    return this._createNode(data, container);
  }
  static _createNode(obj, container) {
    var className = Node.prototype.getClassName.call(obj), children = obj.children, no, len, n;
    if (container) {
      obj.attrs.container = container;
    }
    if (!_GlobalJs.Konva[className]) {
      _UtilJs.Util.warn('Can not find a node with class name "' + className + '". Fallback to "Shape".');
      className = 'Shape';
    }
    const Class = _GlobalJs.Konva[className];
    no = new Class(obj.attrs);
    if (children) {
      len = children.length;
      for (n = 0; n < len; n++) {
        no.add(Node._createNode(children[n]));
      }
    }
    return no;
  }
}
Node.prototype.nodeType = 'Node';
Node.prototype._attrsAffectingSize = [];
Node.prototype.eventListeners = {};
Node.prototype.on.call(Node.prototype, TRANSFORM_CHANGE_STR, function () {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = true;
    return;
  }
  this._clearCache(TRANSFORM);
  this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
});
Node.prototype.on.call(Node.prototype, 'visibleChange.konva', function () {
  this._clearSelfAndDescendantCache(VISIBLE);
});
Node.prototype.on.call(Node.prototype, 'listeningChange.konva', function () {
  this._clearSelfAndDescendantCache(LISTENING);
});
Node.prototype.on.call(Node.prototype, 'opacityChange.konva', function () {
  this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
});
const addGetterSetter = _FactoryJs.Factory.addGetterSetter;
addGetterSetter(Node, 'zIndex');
addGetterSetter(Node, 'absolutePosition');
addGetterSetter(Node, 'position');
addGetterSetter(Node, 'x', 0, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'y', 0, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'globalCompositeOperation', 'source-over', _ValidatorsJs.getStringValidator());
addGetterSetter(Node, 'opacity', 1, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'name', '', _ValidatorsJs.getStringValidator());
addGetterSetter(Node, 'id', '', _ValidatorsJs.getStringValidator());
addGetterSetter(Node, 'rotation', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addComponentsGetterSetter(Node, 'scale', ['x', 'y']);
addGetterSetter(Node, 'scaleX', 1, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'scaleY', 1, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addComponentsGetterSetter(Node, 'skew', ['x', 'y']);
addGetterSetter(Node, 'skewX', 0, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'skewY', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addComponentsGetterSetter(Node, 'offset', ['x', 'y']);
addGetterSetter(Node, 'offsetX', 0, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'offsetY', 0, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'dragDistance', null, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'width', 0, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'height', 0, _ValidatorsJs.getNumberValidator());
addGetterSetter(Node, 'listening', true, _ValidatorsJs.getBooleanValidator());
addGetterSetter(Node, 'preventDefault', true, _ValidatorsJs.getBooleanValidator());
addGetterSetter(Node, 'filters', null, function (val) {
  this._filterUpToDate = false;
  return val;
});
addGetterSetter(Node, 'visible', true, _ValidatorsJs.getBooleanValidator());
addGetterSetter(Node, 'transformsEnabled', 'all', _ValidatorsJs.getStringValidator());
addGetterSetter(Node, 'size');
addGetterSetter(Node, 'dragBoundFunc');
addGetterSetter(Node, 'draggable', false, _ValidatorsJs.getBooleanValidator());
_FactoryJs.Factory.backCompat(Node, {
  rotateDeg: 'rotate',
  setRotationDeg: 'setRotation',
  getRotationDeg: 'getRotation'
});

},{"./Util.js":"27sKe","./Factory.js":"2GdoH","./Canvas.js":"6wLjS","./Global.js":"6qmUL","./DragAndDrop.js":"5JOlZ","./Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"2GdoH":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Factory", function () {
  return Factory;
});
var _UtilJs = require('./Util.js');
var _ValidatorsJs = require('./Validators.js');
var GET = 'get', SET = 'set';
const Factory = {
  addGetterSetter(constructor, attr, def, validator, after) {
    Factory.addGetter(constructor, attr, def);
    Factory.addSetter(constructor, attr, validator, after);
    Factory.addOverloadedGetterSetter(constructor, attr);
  },
  addGetter(constructor, attr, def) {
    var method = GET + _UtilJs.Util._capitalize(attr);
    constructor.prototype[method] = constructor.prototype[method] || (function () {
      var val = this.attrs[attr];
      return val === undefined ? def : val;
    });
  },
  addSetter(constructor, attr, validator, after) {
    var method = SET + _UtilJs.Util._capitalize(attr);
    if (!constructor.prototype[method]) {
      Factory.overWriteSetter(constructor, attr, validator, after);
    }
  },
  overWriteSetter(constructor, attr, validator, after) {
    var method = SET + _UtilJs.Util._capitalize(attr);
    constructor.prototype[method] = function (val) {
      if (validator && val !== undefined && val !== null) {
        val = validator.call(this, val, attr);
      }
      this._setAttr(attr, val);
      if (after) {
        after.call(this);
      }
      return this;
    };
  },
  addComponentsGetterSetter(constructor, attr, components, validator, after) {
    var len = components.length, capitalize = _UtilJs.Util._capitalize, getter = GET + capitalize(attr), setter = SET + capitalize(attr), n, component;
    constructor.prototype[getter] = function () {
      var ret = {};
      for (n = 0; n < len; n++) {
        component = components[n];
        ret[component] = this.getAttr(attr + capitalize(component));
      }
      return ret;
    };
    var basicValidator = _ValidatorsJs.getComponentValidator(components);
    constructor.prototype[setter] = function (val) {
      var oldVal = this.attrs[attr], key;
      if (validator) {
        val = validator.call(this, val);
      }
      if (basicValidator) {
        basicValidator.call(this, val, attr);
      }
      for (key in val) {
        if (!val.hasOwnProperty(key)) {
          continue;
        }
        this._setAttr(attr + capitalize(key), val[key]);
      }
      this._fireChangeEvent(attr, oldVal, val);
      if (after) {
        after.call(this);
      }
      return this;
    };
    Factory.addOverloadedGetterSetter(constructor, attr);
  },
  addOverloadedGetterSetter(constructor, attr) {
    var capitalizedAttr = _UtilJs.Util._capitalize(attr), setter = SET + capitalizedAttr, getter = GET + capitalizedAttr;
    constructor.prototype[attr] = function () {
      if (arguments.length) {
        this[setter](arguments[0]);
        return this;
      }
      return this[getter]();
    };
  },
  addDeprecatedGetterSetter(constructor, attr, def, validator) {
    _UtilJs.Util.error('Adding deprecated ' + attr);
    var method = GET + _UtilJs.Util._capitalize(attr);
    var message = attr + ' property is deprecated and will be removed soon. Look at Konva change log for more information.';
    constructor.prototype[method] = function () {
      _UtilJs.Util.error(message);
      var val = this.attrs[attr];
      return val === undefined ? def : val;
    };
    Factory.addSetter(constructor, attr, validator, function () {
      _UtilJs.Util.error(message);
    });
    Factory.addOverloadedGetterSetter(constructor, attr);
  },
  backCompat(constructor, methods) {
    _UtilJs.Util.each(methods, function (oldMethodName, newMethodName) {
      var method = constructor.prototype[newMethodName];
      var oldGetter = GET + _UtilJs.Util._capitalize(oldMethodName);
      var oldSetter = SET + _UtilJs.Util._capitalize(oldMethodName);
      function deprecated() {
        method.apply(this, arguments);
        _UtilJs.Util.error('"' + oldMethodName + '" method is deprecated and will be removed soon. Use ""' + newMethodName + '" instead.');
      }
      constructor.prototype[oldMethodName] = deprecated;
      constructor.prototype[oldGetter] = deprecated;
      constructor.prototype[oldSetter] = deprecated;
    });
  },
  afterSetFilter() {
    this._filterUpToDate = false;
  }
};

},{"./Util.js":"27sKe","./Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"2KBE7":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "RGBComponent", function () {
  return RGBComponent;
});
_parcelHelpers.export(exports, "alphaComponent", function () {
  return alphaComponent;
});
_parcelHelpers.export(exports, "getNumberValidator", function () {
  return getNumberValidator;
});
_parcelHelpers.export(exports, "getNumberOrArrayOfNumbersValidator", function () {
  return getNumberOrArrayOfNumbersValidator;
});
_parcelHelpers.export(exports, "getNumberOrAutoValidator", function () {
  return getNumberOrAutoValidator;
});
_parcelHelpers.export(exports, "getStringValidator", function () {
  return getStringValidator;
});
_parcelHelpers.export(exports, "getStringOrGradientValidator", function () {
  return getStringOrGradientValidator;
});
_parcelHelpers.export(exports, "getFunctionValidator", function () {
  return getFunctionValidator;
});
_parcelHelpers.export(exports, "getNumberArrayValidator", function () {
  return getNumberArrayValidator;
});
_parcelHelpers.export(exports, "getBooleanValidator", function () {
  return getBooleanValidator;
});
_parcelHelpers.export(exports, "getComponentValidator", function () {
  return getComponentValidator;
});
var _GlobalJs = require('./Global.js');
var _UtilJs = require('./Util.js');
function _formatValue(val) {
  if (_UtilJs.Util._isString(val)) {
    return '"' + val + '"';
  }
  if (Object.prototype.toString.call(val) === '[object Number]') {
    return val;
  }
  if (_UtilJs.Util._isBoolean(val)) {
    return val;
  }
  return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  }
  return Math.round(val);
}
function alphaComponent(val) {
  if (val > 1) {
    return 1;
  } else if (val < 0.0001) {
    return 0.0001;
  }
  return val;
}
function getNumberValidator() {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      if (!_UtilJs.Util._isNumber(val)) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number.');
      }
      return val;
    };
  }
}
function getNumberOrArrayOfNumbersValidator(noOfElements) {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      let isNumber = _UtilJs.Util._isNumber(val);
      let isValidArray = _UtilJs.Util._isArray(val) && val.length == noOfElements;
      if (!isNumber && !isValidArray) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or Array<number>(' + noOfElements + ')');
      }
      return val;
    };
  }
}
function getNumberOrAutoValidator() {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      var isNumber = _UtilJs.Util._isNumber(val);
      var isAuto = val === 'auto';
      if (!(isNumber || isAuto)) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or "auto".');
      }
      return val;
    };
  }
}
function getStringValidator() {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      if (!_UtilJs.Util._isString(val)) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string.');
      }
      return val;
    };
  }
}
function getStringOrGradientValidator() {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      const isString = _UtilJs.Util._isString(val);
      const isGradient = Object.prototype.toString.call(val) === '[object CanvasGradient]' || val && val.addColorStop;
      if (!(isString || isGradient)) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string or a native gradient.');
      }
      return val;
    };
  }
}
function getFunctionValidator() {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      if (!_UtilJs.Util._isFunction(val)) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a function.');
      }
      return val;
    };
  }
}
function getNumberArrayValidator() {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      if (!_UtilJs.Util._isArray(val)) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a array of numbers.');
      } else {
        val.forEach(function (item) {
          if (!_UtilJs.Util._isNumber(item)) {
            _UtilJs.Util.warn('"' + attr + '" attribute has non numeric element ' + item + '. Make sure that all elements are numbers.');
          }
        });
      }
      return val;
    };
  }
}
function getBooleanValidator() {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      var isBool = val === true || val === false;
      if (!isBool) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a boolean.');
      }
      return val;
    };
  }
}
function getComponentValidator(components) {
  if (_GlobalJs.Konva.isUnminified) {
    return function (val, attr) {
      if (!_UtilJs.Util.isObject(val)) {
        _UtilJs.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be an object with properties ' + components);
      }
      return val;
    };
  }
}

},{"./Global.js":"6qmUL","./Util.js":"27sKe","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6wLjS":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Canvas", function () {
  return Canvas;
});
_parcelHelpers.export(exports, "SceneCanvas", function () {
  return SceneCanvas;
});
_parcelHelpers.export(exports, "HitCanvas", function () {
  return HitCanvas;
});
var _UtilJs = require('./Util.js');
var _ContextJs = require('./Context.js');
var _GlobalJs = require('./Global.js');
var _FactoryJs = require('./Factory.js');
var _ValidatorsJs = require('./Validators.js');
var _pixelRatio;
function getDevicePixelRatio() {
  if (_pixelRatio) {
    return _pixelRatio;
  }
  var canvas = _UtilJs.Util.createCanvasElement();
  var context = canvas.getContext('2d');
  _pixelRatio = (function () {
    var devicePixelRatio = _GlobalJs.Konva._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
    return devicePixelRatio / backingStoreRatio;
  })();
  return _pixelRatio;
}
class Canvas {
  constructor(config) {
    this.pixelRatio = 1;
    this.width = 0;
    this.height = 0;
    this.isCache = false;
    var conf = config || ({});
    var pixelRatio = conf.pixelRatio || _GlobalJs.Konva.pixelRatio || getDevicePixelRatio();
    this.pixelRatio = pixelRatio;
    this._canvas = _UtilJs.Util.createCanvasElement();
    this._canvas.style.padding = '0';
    this._canvas.style.margin = '0';
    this._canvas.style.border = '0';
    this._canvas.style.background = 'transparent';
    this._canvas.style.position = 'absolute';
    this._canvas.style.top = '0';
    this._canvas.style.left = '0';
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(pixelRatio) {
    var previousRatio = this.pixelRatio;
    this.pixelRatio = pixelRatio;
    this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
  }
  setWidth(width) {
    this.width = this._canvas.width = width * this.pixelRatio;
    this._canvas.style.width = width + 'px';
    var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
    _context.scale(pixelRatio, pixelRatio);
  }
  setHeight(height) {
    this.height = this._canvas.height = height * this.pixelRatio;
    this._canvas.style.height = height + 'px';
    var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
    _context.scale(pixelRatio, pixelRatio);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(width, height) {
    this.setWidth(width || 0);
    this.setHeight(height || 0);
  }
  toDataURL(mimeType, quality) {
    try {
      return this._canvas.toDataURL(mimeType, quality);
    } catch (e) {
      try {
        return this._canvas.toDataURL();
      } catch (err) {
        _UtilJs.Util.error('Unable to get data URL. ' + err.message + ' For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.');
        return '';
      }
    }
  }
}
_FactoryJs.Factory.addGetterSetter(Canvas, 'pixelRatio', undefined, _ValidatorsJs.getNumberValidator());
class SceneCanvas extends Canvas {
  constructor(config = {
    width: 0,
    height: 0
  }) {
    super(config);
    this.context = new _ContextJs.SceneContext(this);
    this.setSize(config.width, config.height);
  }
}
class HitCanvas extends Canvas {
  constructor(config = {
    width: 0,
    height: 0
  }) {
    super(config);
    this.hitCanvas = true;
    this.context = new _ContextJs.HitContext(this);
    this.setSize(config.width, config.height);
  }
}

},{"./Util.js":"27sKe","./Context.js":"3J28s","./Global.js":"6qmUL","./Factory.js":"2GdoH","./Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"3J28s":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Context", function () {
  return Context;
});
_parcelHelpers.export(exports, "SceneContext", function () {
  return SceneContext;
});
_parcelHelpers.export(exports, "HitContext", function () {
  return HitContext;
});
var _UtilJs = require('./Util.js');
var _GlobalJs = require('./Global.js');
function simplifyArray(arr) {
  var retArr = [], len = arr.length, util = _UtilJs.Util, n, val;
  for (n = 0; n < len; n++) {
    val = arr[n];
    if (util._isNumber(val)) {
      val = Math.round(val * 1000) / 1000;
    } else if (!util._isString(val)) {
      val = val + '';
    }
    retArr.push(val);
  }
  return retArr;
}
var COMMA = ',', OPEN_PAREN = '(', CLOSE_PAREN = ')', OPEN_PAREN_BRACKET = '([', CLOSE_BRACKET_PAREN = '])', SEMICOLON = ';', DOUBLE_PAREN = '()', EQUALS = '=', CONTEXT_METHODS = ['arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'createLinearGradient', 'createPattern', 'createRadialGradient', 'drawImage', 'ellipse', 'fill', 'fillText', 'getImageData', 'createImageData', 'lineTo', 'moveTo', 'putImageData', 'quadraticCurveTo', 'rect', 'restore', 'rotate', 'save', 'scale', 'setLineDash', 'setTransform', 'stroke', 'strokeText', 'transform', 'translate'];
var CONTEXT_PROPERTIES = ['fillStyle', 'strokeStyle', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY', 'lineCap', 'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'font', 'textAlign', 'textBaseline', 'globalAlpha', 'globalCompositeOperation', 'imageSmoothingEnabled'];
const traceArrMax = 100;
class Context {
  constructor(canvas) {
    this.canvas = canvas;
    this._context = canvas._canvas.getContext('2d');
    if (_GlobalJs.Konva.enableTrace) {
      this.traceArr = [];
      this._enableTrace();
    }
  }
  fillShape(shape) {
    if (shape.fillEnabled()) {
      this._fill(shape);
    }
  }
  _fill(shape) {}
  strokeShape(shape) {
    if (shape.hasStroke()) {
      this._stroke(shape);
    }
  }
  _stroke(shape) {}
  fillStrokeShape(shape) {
    if (shape.attrs.fillAfterStrokeEnabled) {
      this.strokeShape(shape);
      this.fillShape(shape);
    } else {
      this.fillShape(shape);
      this.strokeShape(shape);
    }
  }
  getTrace(relaxed, rounded) {
    var traceArr = this.traceArr, len = traceArr.length, str = '', n, trace, method, args;
    for (n = 0; n < len; n++) {
      trace = traceArr[n];
      method = trace.method;
      if (method) {
        args = trace.args;
        str += method;
        if (relaxed) {
          str += DOUBLE_PAREN;
        } else {
          if (_UtilJs.Util._isArray(args[0])) {
            str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
          } else {
            if (rounded) {
              args = args.map(a => typeof a === 'number' ? Math.floor(a) : a);
            }
            str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
          }
        }
      } else {
        str += trace.property;
        if (!relaxed) {
          str += EQUALS + trace.val;
        }
      }
      str += SEMICOLON;
    }
    return str;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(str) {
    var traceArr = this.traceArr, len;
    traceArr.push(str);
    len = traceArr.length;
    if (len >= traceArrMax) {
      traceArr.shift();
    }
  }
  reset() {
    var pixelRatio = this.getCanvas().getPixelRatio();
    this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(bounds) {
    var canvas = this.getCanvas();
    if (bounds) {
      this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
    } else {
      this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
    }
  }
  _applyLineCap(shape) {
    var lineCap = shape.getLineCap();
    if (lineCap) {
      this.setAttr('lineCap', lineCap);
    }
  }
  _applyOpacity(shape) {
    var absOpacity = shape.getAbsoluteOpacity();
    if (absOpacity !== 1) {
      this.setAttr('globalAlpha', absOpacity);
    }
  }
  _applyLineJoin(shape) {
    var lineJoin = shape.attrs.lineJoin;
    if (lineJoin) {
      this.setAttr('lineJoin', lineJoin);
    }
  }
  setAttr(attr, val) {
    this._context[attr] = val;
  }
  arc(a0, a1, a2, a3, a4, a5) {
    this._context.arc(a0, a1, a2, a3, a4, a5);
  }
  arcTo(a0, a1, a2, a3, a4) {
    this._context.arcTo(a0, a1, a2, a3, a4);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(a0, a1, a2, a3, a4, a5) {
    this._context.bezierCurveTo(a0, a1, a2, a3, a4, a5);
  }
  clearRect(a0, a1, a2, a3) {
    this._context.clearRect(a0, a1, a2, a3);
  }
  clip() {
    this._context.clip();
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(a0, a1) {
    var a = arguments;
    if (a.length === 2) {
      return this._context.createImageData(a0, a1);
    } else if (a.length === 1) {
      return this._context.createImageData(a0);
    }
  }
  createLinearGradient(a0, a1, a2, a3) {
    return this._context.createLinearGradient(a0, a1, a2, a3);
  }
  createPattern(a0, a1) {
    return this._context.createPattern(a0, a1);
  }
  createRadialGradient(a0, a1, a2, a3, a4, a5) {
    return this._context.createRadialGradient(a0, a1, a2, a3, a4, a5);
  }
  drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
    var a = arguments, _context = this._context;
    if (a.length === 3) {
      _context.drawImage(a0, a1, a2);
    } else if (a.length === 5) {
      _context.drawImage(a0, a1, a2, a3, a4);
    } else if (a.length === 9) {
      _context.drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8);
    }
  }
  ellipse(a0, a1, a2, a3, a4, a5, a6, a7) {
    this._context.ellipse(a0, a1, a2, a3, a4, a5, a6, a7);
  }
  isPointInPath(x, y) {
    return this._context.isPointInPath(x, y);
  }
  fill(path2d) {
    if (path2d) {
      this._context.fill(path2d);
    } else {
      this._context.fill();
    }
  }
  fillRect(x, y, width, height) {
    this._context.fillRect(x, y, width, height);
  }
  strokeRect(x, y, width, height) {
    this._context.strokeRect(x, y, width, height);
  }
  fillText(text, x, y, maxWidth) {
    if (maxWidth) {
      this._context.fillText(text, x, y, maxWidth);
    } else {
      this._context.fillText(text, x, y);
    }
  }
  measureText(text) {
    return this._context.measureText(text);
  }
  getImageData(a0, a1, a2, a3) {
    return this._context.getImageData(a0, a1, a2, a3);
  }
  lineTo(a0, a1) {
    this._context.lineTo(a0, a1);
  }
  moveTo(a0, a1) {
    this._context.moveTo(a0, a1);
  }
  rect(a0, a1, a2, a3) {
    this._context.rect(a0, a1, a2, a3);
  }
  putImageData(a0, a1, a2) {
    this._context.putImageData(a0, a1, a2);
  }
  quadraticCurveTo(a0, a1, a2, a3) {
    this._context.quadraticCurveTo(a0, a1, a2, a3);
  }
  restore() {
    this._context.restore();
  }
  rotate(a0) {
    this._context.rotate(a0);
  }
  save() {
    this._context.save();
  }
  scale(a0, a1) {
    this._context.scale(a0, a1);
  }
  setLineDash(a0) {
    if (this._context.setLineDash) {
      this._context.setLineDash(a0);
    } else if (('mozDash' in this._context)) {
      this._context['mozDash'] = a0;
    } else if (('webkitLineDash' in this._context)) {
      this._context['webkitLineDash'] = a0;
    }
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(a0, a1, a2, a3, a4, a5) {
    this._context.setTransform(a0, a1, a2, a3, a4, a5);
  }
  stroke(path2d) {
    if (path2d) {
      this._context.stroke(path2d);
    } else {
      this._context.stroke();
    }
  }
  strokeText(a0, a1, a2, a3) {
    this._context.strokeText(a0, a1, a2, a3);
  }
  transform(a0, a1, a2, a3, a4, a5) {
    this._context.transform(a0, a1, a2, a3, a4, a5);
  }
  translate(a0, a1) {
    this._context.translate(a0, a1);
  }
  _enableTrace() {
    var that = this, len = CONTEXT_METHODS.length, origSetter = this.setAttr, n, args;
    var func = function (methodName) {
      var origMethod = that[methodName], ret;
      that[methodName] = function () {
        args = simplifyArray(Array.prototype.slice.call(arguments, 0));
        ret = origMethod.apply(that, arguments);
        that._trace({
          method: methodName,
          args: args
        });
        return ret;
      };
    };
    for (n = 0; n < len; n++) {
      func(CONTEXT_METHODS[n]);
    }
    that.setAttr = function () {
      origSetter.apply(that, arguments);
      var prop = arguments[0];
      var val = arguments[1];
      if (prop === 'shadowOffsetX' || prop === 'shadowOffsetY' || prop === 'shadowBlur') {
        val = val / this.canvas.getPixelRatio();
      }
      that._trace({
        property: prop,
        val: val
      });
    };
  }
  _applyGlobalCompositeOperation(node) {
    const op = node.attrs.globalCompositeOperation;
    var def = !op || op === 'source-over';
    if (!def) {
      this.setAttr('globalCompositeOperation', op);
    }
  }
}
CONTEXT_PROPERTIES.forEach(function (prop) {
  Object.defineProperty(Context.prototype, prop, {
    get() {
      return this._context[prop];
    },
    set(val) {
      this._context[prop] = val;
    }
  });
});
class SceneContext extends Context {
  _fillColor(shape) {
    var fill = shape.fill();
    this.setAttr('fillStyle', fill);
    shape._fillFunc(this);
  }
  _fillPattern(shape) {
    this.setAttr('fillStyle', shape._getFillPattern());
    shape._fillFunc(this);
  }
  _fillLinearGradient(shape) {
    var grd = shape._getLinearGradient();
    if (grd) {
      this.setAttr('fillStyle', grd);
      shape._fillFunc(this);
    }
  }
  _fillRadialGradient(shape) {
    var grd = shape._getRadialGradient();
    if (grd) {
      this.setAttr('fillStyle', grd);
      shape._fillFunc(this);
    }
  }
  _fill(shape) {
    var hasColor = shape.fill(), fillPriority = shape.getFillPriority();
    if (hasColor && fillPriority === 'color') {
      this._fillColor(shape);
      return;
    }
    var hasPattern = shape.getFillPatternImage();
    if (hasPattern && fillPriority === 'pattern') {
      this._fillPattern(shape);
      return;
    }
    var hasLinearGradient = shape.getFillLinearGradientColorStops();
    if (hasLinearGradient && fillPriority === 'linear-gradient') {
      this._fillLinearGradient(shape);
      return;
    }
    var hasRadialGradient = shape.getFillRadialGradientColorStops();
    if (hasRadialGradient && fillPriority === 'radial-gradient') {
      this._fillRadialGradient(shape);
      return;
    }
    if (hasColor) {
      this._fillColor(shape);
    } else if (hasPattern) {
      this._fillPattern(shape);
    } else if (hasLinearGradient) {
      this._fillLinearGradient(shape);
    } else if (hasRadialGradient) {
      this._fillRadialGradient(shape);
    }
  }
  _strokeLinearGradient(shape) {
    var start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
    if (colorStops) {
      for (var n = 0; n < colorStops.length; n += 2) {
        grd.addColorStop(colorStops[n], colorStops[n + 1]);
      }
      this.setAttr('strokeStyle', grd);
    }
  }
  _stroke(shape) {
    var dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
    if (shape.hasStroke()) {
      if (!strokeScaleEnabled) {
        this.save();
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }
      this._applyLineCap(shape);
      if (dash && shape.dashEnabled()) {
        this.setLineDash(dash);
        this.setAttr('lineDashOffset', shape.dashOffset());
      }
      this.setAttr('lineWidth', shape.strokeWidth());
      if (!shape.getShadowForStrokeEnabled()) {
        this.setAttr('shadowColor', 'rgba(0,0,0,0)');
      }
      var hasLinearGradient = shape.getStrokeLinearGradientColorStops();
      if (hasLinearGradient) {
        this._strokeLinearGradient(shape);
      } else {
        this.setAttr('strokeStyle', shape.stroke());
      }
      shape._strokeFunc(this);
      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  }
  _applyShadow(shape) {
    var _a, _b, _c;
    var color = (_a = shape.getShadowRGBA()) !== null && _a !== void 0 ? _a : 'black', blur = (_b = shape.getShadowBlur()) !== null && _b !== void 0 ? _b : 5, offset = (_c = shape.getShadowOffset()) !== null && _c !== void 0 ? _c : {
      x: 0,
      y: 0
    }, scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
    this.setAttr('shadowColor', color);
    this.setAttr('shadowBlur', blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
    this.setAttr('shadowOffsetX', offset.x * scaleX);
    this.setAttr('shadowOffsetY', offset.y * scaleY);
  }
}
class HitContext extends Context {
  _fill(shape) {
    this.save();
    this.setAttr('fillStyle', shape.colorKey);
    shape._fillFuncHit(this);
    this.restore();
  }
  strokeShape(shape) {
    if (shape.hasHitStroke()) {
      this._stroke(shape);
    }
  }
  _stroke(shape) {
    if (shape.hasHitStroke()) {
      var strokeScaleEnabled = shape.getStrokeScaleEnabled();
      if (!strokeScaleEnabled) {
        this.save();
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }
      this._applyLineCap(shape);
      var hitStrokeWidth = shape.hitStrokeWidth();
      var strokeWidth = hitStrokeWidth === 'auto' ? shape.strokeWidth() : hitStrokeWidth;
      this.setAttr('lineWidth', strokeWidth);
      this.setAttr('strokeStyle', shape.colorKey);
      shape._strokeFuncHit(this);
      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  }
}

},{"./Util.js":"27sKe","./Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"5JOlZ":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "DD", function () {
  return DD;
});
var _GlobalJs = require('./Global.js');
var _UtilJs = require('./Util.js');
const DD = {
  get isDragging() {
    var flag = false;
    DD._dragElements.forEach(elem => {
      if (elem.dragStatus === 'dragging') {
        flag = true;
      }
    });
    return flag;
  },
  justDragged: false,
  get node() {
    var node;
    DD._dragElements.forEach(elem => {
      node = elem.node;
    });
    return node;
  },
  _dragElements: new Map(),
  _drag(evt) {
    const nodesToFireEvents = [];
    DD._dragElements.forEach((elem, key) => {
      const {node} = elem;
      const stage = node.getStage();
      stage.setPointersPositions(evt);
      if (elem.pointerId === undefined) {
        elem.pointerId = _UtilJs.Util._getFirstPointerId(evt);
      }
      const pos = stage._changedPointerPositions.find(pos => pos.id === elem.pointerId);
      if (!pos) {
        return;
      }
      if (elem.dragStatus !== 'dragging') {
        var dragDistance = node.dragDistance();
        var distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));
        if (distance < dragDistance) {
          return;
        }
        node.startDrag({
          evt
        });
        if (!node.isDragging()) {
          return;
        }
      }
      node._setDragPosition(evt, elem);
      nodesToFireEvents.push(node);
    });
    nodesToFireEvents.forEach(node => {
      node.fire('dragmove', {
        type: 'dragmove',
        target: node,
        evt: evt
      }, true);
    });
  },
  _endDragBefore(evt) {
    DD._dragElements.forEach(elem => {
      const {node} = elem;
      const stage = node.getStage();
      if (evt) {
        stage.setPointersPositions(evt);
      }
      const pos = stage._changedPointerPositions.find(pos => pos.id === elem.pointerId);
      if (!pos) {
        return;
      }
      if (elem.dragStatus === 'dragging' || elem.dragStatus === 'stopped') {
        DD.justDragged = true;
        _GlobalJs.Konva._mouseListenClick = false;
        _GlobalJs.Konva._touchListenClick = false;
        _GlobalJs.Konva._pointerListenClick = false;
        elem.dragStatus = 'stopped';
      }
      const drawNode = elem.node.getLayer() || elem.node instanceof _GlobalJs.Konva['Stage'] && elem.node;
      if (drawNode) {
        drawNode.batchDraw();
      }
    });
  },
  _endDragAfter(evt) {
    DD._dragElements.forEach((elem, key) => {
      if (elem.dragStatus === 'stopped') {
        elem.node.fire('dragend', {
          type: 'dragend',
          target: elem.node,
          evt: evt
        }, true);
      }
      if (elem.dragStatus !== 'dragging') {
        DD._dragElements.delete(key);
      }
    });
  }
};
if (_GlobalJs.Konva.isBrowser) {
  window.addEventListener('mouseup', DD._endDragBefore, true);
  window.addEventListener('touchend', DD._endDragBefore, true);
  window.addEventListener('mousemove', DD._drag);
  window.addEventListener('touchmove', DD._drag);
  window.addEventListener('mouseup', DD._endDragAfter, false);
  window.addEventListener('touchend', DD._endDragAfter, false);
}

},{"./Global.js":"6qmUL","./Util.js":"27sKe","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6SS8S":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Container", function () {
  return Container;
});
var _FactoryJs = require('./Factory.js');
var _NodeJs = require('./Node.js');
var _ValidatorsJs = require('./Validators.js');
class Container extends _NodeJs.Node {
  constructor() {
    super(...arguments);
    this.children = [];
  }
  getChildren(filterFunc) {
    if (!filterFunc) {
      return this.children || [];
    }
    const children = this.children || [];
    var results = [];
    children.forEach(function (child) {
      if (filterFunc(child)) {
        results.push(child);
      }
    });
    return results;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    this.getChildren().forEach(child => {
      child.parent = null;
      child.index = 0;
      child.remove();
    });
    this.children = [];
    this._requestDraw();
    return this;
  }
  destroyChildren() {
    this.getChildren().forEach(child => {
      child.parent = null;
      child.index = 0;
      child.destroy();
    });
    this.children = [];
    this._requestDraw();
    return this;
  }
  add(...children) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    var child = children[0];
    if (child.getParent()) {
      child.moveTo(this);
      return this;
    }
    this._validateAdd(child);
    child.index = this.getChildren().length;
    child.parent = this;
    child._clearCaches();
    this.getChildren().push(child);
    this._fire('add', {
      child: child
    });
    this._requestDraw();
    return this;
  }
  destroy() {
    if (this.hasChildren()) {
      this.destroyChildren();
    }
    super.destroy();
    return this;
  }
  find(selector) {
    return this._generalFind(selector, false);
  }
  findOne(selector) {
    var result = this._generalFind(selector, true);
    return result.length > 0 ? result[0] : undefined;
  }
  _generalFind(selector, findOne) {
    var retArr = [];
    this._descendants(node => {
      const valid = node._isMatch(selector);
      if (valid) {
        retArr.push(node);
      }
      if (valid && findOne) {
        return true;
      }
      return false;
    });
    return retArr;
  }
  _descendants(fn) {
    let shouldStop = false;
    const children = this.getChildren();
    for (const child of children) {
      shouldStop = fn(child);
      if (shouldStop) {
        return true;
      }
      if (!child.hasChildren()) {
        continue;
      }
      shouldStop = child._descendants(fn);
      if (shouldStop) {
        return true;
      }
    }
    return false;
  }
  toObject() {
    var obj = _NodeJs.Node.prototype.toObject.call(this);
    obj.children = [];
    this.getChildren().forEach(child => {
      obj.children.push(child.toObject());
    });
    return obj;
  }
  isAncestorOf(node) {
    var parent = node.getParent();
    while (parent) {
      if (parent._id === this._id) {
        return true;
      }
      parent = parent.getParent();
    }
    return false;
  }
  clone(obj) {
    var node = _NodeJs.Node.prototype.clone.call(this, obj);
    this.getChildren().forEach(function (no) {
      node.add(no.clone());
    });
    return node;
  }
  getAllIntersections(pos) {
    var arr = [];
    this.find('Shape').forEach(function (shape) {
      if (shape.isVisible() && shape.intersects(pos)) {
        arr.push(shape);
      }
    });
    return arr;
  }
  _clearSelfAndDescendantCache(attr) {
    var _a;
    super._clearSelfAndDescendantCache(attr);
    if (this.isCached()) {
      return;
    }
    (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (node) {
      node._clearSelfAndDescendantCache(attr);
    });
  }
  _setChildrenIndices() {
    var _a;
    (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child, n) {
      child.index = n;
    });
    this._requestDraw();
  }
  drawScene(can, top) {
    var layer = this.getLayer(), canvas = can || layer && layer.getCanvas(), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
    var caching = canvas && canvas.isCache;
    if (!this.isVisible() && !caching) {
      return this;
    }
    if (cachedSceneCanvas) {
      context.save();
      var m = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      this._drawCachedSceneCanvas(context);
      context.restore();
    } else {
      this._drawChildren('drawScene', canvas, top);
    }
    return this;
  }
  drawHit(can, top) {
    if (!this.shouldDrawHit(top)) {
      return this;
    }
    var layer = this.getLayer(), canvas = can || layer && layer.hitCanvas, context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
    if (cachedHitCanvas) {
      context.save();
      var m = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      this._drawCachedHitCanvas(context);
      context.restore();
    } else {
      this._drawChildren('drawHit', canvas, top);
    }
    return this;
  }
  _drawChildren(drawMethod, canvas, top) {
    var _a;
    var context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = clipWidth && clipHeight || clipFunc;
    const selfCache = top === this;
    if (hasClip) {
      context.save();
      var transform = this.getAbsoluteTransform(top);
      var m = transform.getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      context.beginPath();
      if (clipFunc) {
        clipFunc.call(this, context, this);
      } else {
        var clipX = this.clipX();
        var clipY = this.clipY();
        context.rect(clipX, clipY, clipWidth, clipHeight);
      }
      context.clip();
      m = transform.copy().invert().getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
    }
    var hasComposition = !selfCache && this.globalCompositeOperation() !== 'source-over' && drawMethod === 'drawScene';
    if (hasComposition) {
      context.save();
      context._applyGlobalCompositeOperation(this);
    }
    (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
      child[drawMethod](canvas, top);
    });
    if (hasComposition) {
      context.restore();
    }
    if (hasClip) {
      context.restore();
    }
  }
  getClientRect(config) {
    var _a;
    config = config || ({});
    var skipTransform = config.skipTransform;
    var relativeTo = config.relativeTo;
    var minX, minY, maxX, maxY;
    var selfRect = {
      x: Infinity,
      y: Infinity,
      width: 0,
      height: 0
    };
    var that = this;
    (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
      if (!child.visible()) {
        return;
      }
      var rect = child.getClientRect({
        relativeTo: that,
        skipShadow: config.skipShadow,
        skipStroke: config.skipStroke
      });
      if (rect.width === 0 && rect.height === 0) {
        return;
      }
      if (minX === undefined) {
        minX = rect.x;
        minY = rect.y;
        maxX = rect.x + rect.width;
        maxY = rect.y + rect.height;
      } else {
        minX = Math.min(minX, rect.x);
        minY = Math.min(minY, rect.y);
        maxX = Math.max(maxX, rect.x + rect.width);
        maxY = Math.max(maxY, rect.y + rect.height);
      }
    });
    var shapes = this.find('Shape');
    var hasVisible = false;
    for (var i = 0; i < shapes.length; i++) {
      var shape = shapes[i];
      if (shape._isVisible(this)) {
        hasVisible = true;
        break;
      }
    }
    if (hasVisible && minX !== undefined) {
      selfRect = {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    } else {
      selfRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (!skipTransform) {
      return this._transformedRect(selfRect, relativeTo);
    }
    return selfRect;
  }
}
_FactoryJs.Factory.addComponentsGetterSetter(Container, 'clip', ['x', 'y', 'width', 'height']);
_FactoryJs.Factory.addGetterSetter(Container, 'clipX', undefined, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Container, 'clipY', undefined, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Container, 'clipWidth', undefined, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Container, 'clipHeight', undefined, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Container, 'clipFunc');

},{"./Factory.js":"2GdoH","./Node.js":"5H2JD","./Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6m2ki":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "stages", function () {
  return stages;
});
_parcelHelpers.export(exports, "Stage", function () {
  return Stage;
});
var _UtilJs = require('./Util.js');
var _FactoryJs = require('./Factory.js');
var _ContainerJs = require('./Container.js');
var _GlobalJs = require('./Global.js');
var _CanvasJs = require('./Canvas.js');
var _DragAndDropJs = require('./DragAndDrop.js');
var _PointerEventsJs = require('./PointerEvents.js');
var STAGE = 'Stage', STRING = 'string', PX = 'px', MOUSEOUT = 'mouseout', MOUSELEAVE = 'mouseleave', MOUSEOVER = 'mouseover', MOUSEENTER = 'mouseenter', MOUSEMOVE = 'mousemove', MOUSEDOWN = 'mousedown', MOUSEUP = 'mouseup', POINTERMOVE = 'pointermove', POINTERDOWN = 'pointerdown', POINTERUP = 'pointerup', POINTERCANCEL = 'pointercancel', LOSTPOINTERCAPTURE = 'lostpointercapture', POINTEROUT = 'pointerout', POINTERLEAVE = 'pointerleave', POINTEROVER = 'pointerover', POINTERENTER = 'pointerenter', CONTEXTMENU = 'contextmenu', TOUCHSTART = 'touchstart', TOUCHEND = 'touchend', TOUCHMOVE = 'touchmove', TOUCHCANCEL = 'touchcancel', WHEEL = 'wheel', MAX_LAYERS_NUMBER = 5, EVENTS = [[MOUSEENTER, '_pointerenter'], [MOUSEDOWN, '_pointerdown'], [MOUSEMOVE, '_pointermove'], [MOUSEUP, '_pointerup'], [MOUSELEAVE, '_pointerleave'], [TOUCHSTART, '_pointerdown'], [TOUCHMOVE, '_pointermove'], [TOUCHEND, '_pointerup'], [TOUCHCANCEL, '_pointercancel'], [MOUSEOVER, '_pointerover'], [WHEEL, '_wheel'], [CONTEXTMENU, '_contextmenu'], [POINTERDOWN, '_pointerdown'], [POINTERMOVE, '_pointermove'], [POINTERUP, '_pointerup'], [POINTERCANCEL, '_pointercancel'], [LOSTPOINTERCAPTURE, '_lostpointercapture']];
const EVENTS_MAP = {
  mouse: {
    [POINTEROUT]: MOUSEOUT,
    [POINTERLEAVE]: MOUSELEAVE,
    [POINTEROVER]: MOUSEOVER,
    [POINTERENTER]: MOUSEENTER,
    [POINTERMOVE]: MOUSEMOVE,
    [POINTERDOWN]: MOUSEDOWN,
    [POINTERUP]: MOUSEUP,
    [POINTERCANCEL]: 'mousecancel',
    pointerclick: 'click',
    pointerdblclick: 'dblclick'
  },
  touch: {
    [POINTEROUT]: 'touchout',
    [POINTERLEAVE]: 'touchleave',
    [POINTEROVER]: 'touchover',
    [POINTERENTER]: 'touchenter',
    [POINTERMOVE]: TOUCHMOVE,
    [POINTERDOWN]: TOUCHSTART,
    [POINTERUP]: TOUCHEND,
    [POINTERCANCEL]: TOUCHCANCEL,
    pointerclick: 'tap',
    pointerdblclick: 'dbltap'
  },
  pointer: {
    [POINTEROUT]: POINTEROUT,
    [POINTERLEAVE]: POINTERLEAVE,
    [POINTEROVER]: POINTEROVER,
    [POINTERENTER]: POINTERENTER,
    [POINTERMOVE]: POINTERMOVE,
    [POINTERDOWN]: POINTERDOWN,
    [POINTERUP]: POINTERUP,
    [POINTERCANCEL]: POINTERCANCEL,
    pointerclick: 'pointerclick',
    pointerdblclick: 'pointerdblclick'
  }
};
const getEventType = type => {
  if (type.indexOf('pointer') >= 0) {
    return 'pointer';
  }
  if (type.indexOf('touch') >= 0) {
    return 'touch';
  }
  return 'mouse';
};
const getEventsMap = eventType => {
  const type = getEventType(eventType);
  if (type === 'pointer') {
    return _GlobalJs.Konva.pointerEventsEnabled && EVENTS_MAP.pointer;
  }
  if (type === 'touch') {
    return EVENTS_MAP.touch;
  }
  if (type === 'mouse') {
    return EVENTS_MAP.mouse;
  }
};
function checkNoClip(attrs = {}) {
  if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) {
    _UtilJs.Util.warn('Stage does not support clipping. Please use clip for Layers or Groups.');
  }
  return attrs;
}
const NO_POINTERS_MESSAGE = `Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);`;
const stages = [];
class Stage extends _ContainerJs.Container {
  constructor(config) {
    super(checkNoClip(config));
    this._pointerPositions = [];
    this._changedPointerPositions = [];
    this._buildDOM();
    this._bindContentEvents();
    stages.push(this);
    this.on('widthChange.konva heightChange.konva', this._resizeDOM);
    this.on('visibleChange.konva', this._checkVisibility);
    this.on('clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva', () => {
      checkNoClip(this.attrs);
    });
    this._checkVisibility();
  }
  _validateAdd(child) {
    const isLayer = child.getType() === 'Layer';
    const isFastLayer = child.getType() === 'FastLayer';
    const valid = isLayer || isFastLayer;
    if (!valid) {
      _UtilJs.Util.throw('You may only add layers to the stage.');
    }
  }
  _checkVisibility() {
    if (!this.content) {
      return;
    }
    const style = this.visible() ? '' : 'none';
    this.content.style.display = style;
  }
  setContainer(container) {
    if (typeof container === STRING) {
      if (container.charAt(0) === '.') {
        var className = container.slice(1);
        container = document.getElementsByClassName(className)[0];
      } else {
        var id;
        if (container.charAt(0) !== '#') {
          id = container;
        } else {
          id = container.slice(1);
        }
        container = document.getElementById(id);
      }
      if (!container) {
        throw 'Can not find container in document with id ' + id;
      }
    }
    this._setAttr('container', container);
    if (this.content) {
      if (this.content.parentElement) {
        this.content.parentElement.removeChild(this.content);
      }
      container.appendChild(this.content);
    }
    return this;
  }
  shouldDrawHit() {
    return true;
  }
  clear() {
    var layers = this.children, len = layers.length, n;
    for (n = 0; n < len; n++) {
      layers[n].clear();
    }
    return this;
  }
  clone(obj) {
    if (!obj) {
      obj = {};
    }
    obj.container = typeof document !== 'undefined' && document.createElement('div');
    return _ContainerJs.Container.prototype.clone.call(this, obj);
  }
  destroy() {
    super.destroy();
    var content = this.content;
    if (content && _UtilJs.Util._isInDocument(content)) {
      this.container().removeChild(content);
    }
    var index = stages.indexOf(this);
    if (index > -1) {
      stages.splice(index, 1);
    }
    return this;
  }
  getPointerPosition() {
    const pos = this._pointerPositions[0] || this._changedPointerPositions[0];
    if (!pos) {
      _UtilJs.Util.warn(NO_POINTERS_MESSAGE);
      return null;
    }
    return {
      x: pos.x,
      y: pos.y
    };
  }
  _getPointerById(id) {
    return this._pointerPositions.find(p => p.id === id);
  }
  getPointersPositions() {
    return this._pointerPositions;
  }
  getStage() {
    return this;
  }
  getContent() {
    return this.content;
  }
  _toKonvaCanvas(config) {
    config = config || ({});
    config.x = config.x || 0;
    config.y = config.y || 0;
    config.width = config.width || this.width();
    config.height = config.height || this.height();
    var canvas = new _CanvasJs.SceneCanvas({
      width: config.width,
      height: config.height,
      pixelRatio: config.pixelRatio || 1
    });
    var _context = canvas.getContext()._context;
    var layers = this.children;
    if (config.x || config.y) {
      _context.translate(-1 * config.x, -1 * config.y);
    }
    layers.forEach(function (layer) {
      if (!layer.isVisible()) {
        return;
      }
      var layerCanvas = layer._toKonvaCanvas(config);
      _context.drawImage(layerCanvas._canvas, config.x, config.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
    });
    return canvas;
  }
  getIntersection(pos) {
    if (!pos) {
      return null;
    }
    var layers = this.children, len = layers.length, end = len - 1, n;
    for (n = end; n >= 0; n--) {
      const shape = layers[n].getIntersection(pos);
      if (shape) {
        return shape;
      }
    }
    return null;
  }
  _resizeDOM() {
    var width = this.width();
    var height = this.height();
    if (this.content) {
      this.content.style.width = width + PX;
      this.content.style.height = height + PX;
    }
    this.bufferCanvas.setSize(width, height);
    this.bufferHitCanvas.setSize(width, height);
    this.children.forEach(layer => {
      layer.setSize({
        width,
        height
      });
      layer.draw();
    });
  }
  add(layer, ...rest) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    super.add(layer);
    var length = this.children.length;
    if (length > MAX_LAYERS_NUMBER) {
      _UtilJs.Util.warn('The stage has ' + length + ' layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.');
    }
    layer.setSize({
      width: this.width(),
      height: this.height()
    });
    layer.draw();
    if (_GlobalJs.Konva.isBrowser) {
      this.content.appendChild(layer.canvas._canvas);
    }
    return this;
  }
  getParent() {
    return null;
  }
  getLayer() {
    return null;
  }
  hasPointerCapture(pointerId) {
    return _PointerEventsJs.hasPointerCapture(pointerId, this);
  }
  setPointerCapture(pointerId) {
    _PointerEventsJs.setPointerCapture(pointerId, this);
  }
  releaseCapture(pointerId) {
    _PointerEventsJs.releaseCapture(pointerId, this);
  }
  getLayers() {
    return this.children;
  }
  _bindContentEvents() {
    if (!_GlobalJs.Konva.isBrowser) {
      return;
    }
    EVENTS.forEach(([event, methodName]) => {
      this.content.addEventListener(event, evt => {
        this[methodName](evt);
      });
    });
  }
  _pointerenter(evt) {
    this.setPointersPositions(evt);
    const events = getEventsMap(evt.type);
    this._fire(events.pointerenter, {
      evt: evt,
      target: this,
      currentTarget: this
    });
  }
  _pointerover(evt) {
    this.setPointersPositions(evt);
    const events = getEventsMap(evt.type);
    this._fire(events.pointerover, {
      evt: evt,
      target: this,
      currentTarget: this
    });
  }
  _getTargetShape(evenType) {
    let shape = this[evenType + 'targetShape'];
    if (shape && !shape.getStage()) {
      shape = null;
    }
    return shape;
  }
  _pointerleave(evt) {
    const events = getEventsMap(evt.type);
    const eventType = getEventType(evt.type);
    if (!events) {
      return;
    }
    this.setPointersPositions(evt);
    var targetShape = this._getTargetShape(eventType);
    var eventsEnabled = !_DragAndDropJs.DD.isDragging || _GlobalJs.Konva.hitOnDragEnabled;
    if (targetShape && eventsEnabled) {
      targetShape._fireAndBubble(events.pointerout, {
        evt: evt
      });
      targetShape._fireAndBubble(events.pointerleave, {
        evt: evt
      });
      this._fire(events.pointerleave, {
        evt: evt,
        target: this,
        currentTarget: this
      });
      this[eventType + 'targetShape'] = null;
    } else if (eventsEnabled) {
      this._fire(events.pointerleave, {
        evt: evt,
        target: this,
        currentTarget: this
      });
      this._fire(events.pointerout, {
        evt: evt,
        target: this,
        currentTarget: this
      });
    }
    this.pointerPos = undefined;
    this._pointerPositions = [];
  }
  _pointerdown(evt) {
    const events = getEventsMap(evt.type);
    const eventType = getEventType(evt.type);
    if (!events) {
      return;
    }
    this.setPointersPositions(evt);
    var triggeredOnShape = false;
    this._changedPointerPositions.forEach(pos => {
      var shape = this.getIntersection(pos);
      _DragAndDropJs.DD.justDragged = false;
      _GlobalJs.Konva['_' + eventType + 'ListenClick'] = true;
      const hasShape = shape && shape.isListening();
      if (!hasShape) {
        return;
      }
      if (_GlobalJs.Konva.capturePointerEventsEnabled) {
        shape.setPointerCapture(pos.id);
      }
      this[eventType + 'ClickStartShape'] = shape;
      shape._fireAndBubble(events.pointerdown, {
        evt: evt,
        pointerId: pos.id
      });
      triggeredOnShape = true;
      const isTouch = evt.type.indexOf('touch') >= 0;
      if (shape.preventDefault() && evt.cancelable && isTouch) {
        evt.preventDefault();
      }
    });
    if (!triggeredOnShape) {
      this._fire(events.pointerdown, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
  }
  _pointermove(evt) {
    const events = getEventsMap(evt.type);
    const eventType = getEventType(evt.type);
    if (!events) {
      return;
    }
    if (_DragAndDropJs.DD.isDragging && _DragAndDropJs.DD.node.preventDefault() && evt.cancelable) {
      evt.preventDefault();
    }
    this.setPointersPositions(evt);
    var eventsEnabled = !_DragAndDropJs.DD.isDragging || _GlobalJs.Konva.hitOnDragEnabled;
    if (!eventsEnabled) {
      return;
    }
    var processedShapesIds = {};
    let triggeredOnShape = false;
    var targetShape = this._getTargetShape(eventType);
    this._changedPointerPositions.forEach(pos => {
      const shape = _PointerEventsJs.getCapturedShape(pos.id) || this.getIntersection(pos);
      const pointerId = pos.id;
      const event = {
        evt: evt,
        pointerId
      };
      var differentTarget = targetShape !== shape;
      if (differentTarget && targetShape) {
        targetShape._fireAndBubble(events.pointerout, event, shape);
        targetShape._fireAndBubble(events.pointerleave, event, shape);
      }
      if (shape) {
        if (processedShapesIds[shape._id]) {
          return;
        }
        processedShapesIds[shape._id] = true;
      }
      if (shape && shape.isListening()) {
        triggeredOnShape = true;
        if (differentTarget) {
          shape._fireAndBubble(events.pointerover, event, targetShape);
          shape._fireAndBubble(events.pointerenter, event, targetShape);
          this[eventType + 'targetShape'] = shape;
        }
        shape._fireAndBubble(events.pointermove, event);
      } else {
        if (targetShape) {
          this._fire(events.pointerover, {
            evt: evt,
            target: this,
            currentTarget: this,
            pointerId
          });
          this[eventType + 'targetShape'] = null;
        }
      }
    });
    if (!triggeredOnShape) {
      this._fire(events.pointermove, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
  }
  _pointerup(evt) {
    const events = getEventsMap(evt.type);
    const eventType = getEventType(evt.type);
    if (!events) {
      return;
    }
    this.setPointersPositions(evt);
    const clickStartShape = this[eventType + 'ClickStartShape'];
    const clickEndShape = this[eventType + 'ClickEndShape'];
    var processedShapesIds = {};
    let triggeredOnShape = false;
    this._changedPointerPositions.forEach(pos => {
      const shape = _PointerEventsJs.getCapturedShape(pos.id) || this.getIntersection(pos);
      if (shape) {
        shape.releaseCapture(pos.id);
        if (processedShapesIds[shape._id]) {
          return;
        }
        processedShapesIds[shape._id] = true;
      }
      const pointerId = pos.id;
      const event = {
        evt: evt,
        pointerId
      };
      let fireDblClick = false;
      if (_GlobalJs.Konva['_' + eventType + 'InDblClickWindow']) {
        fireDblClick = true;
        clearTimeout(this[eventType + 'DblTimeout']);
      } else if (!_DragAndDropJs.DD.justDragged) {
        _GlobalJs.Konva['_' + eventType + 'InDblClickWindow'] = true;
        clearTimeout(this[eventType + 'DblTimeout']);
      }
      this[eventType + 'DblTimeout'] = setTimeout(function () {
        _GlobalJs.Konva['_' + eventType + 'InDblClickWindow'] = false;
      }, _GlobalJs.Konva.dblClickWindow);
      if (shape && shape.isListening()) {
        triggeredOnShape = true;
        this[eventType + 'ClickEndShape'] = shape;
        shape._fireAndBubble(events.pointerup, event);
        if (_GlobalJs.Konva['_' + eventType + 'ListenClick'] && clickStartShape && clickStartShape === shape) {
          shape._fireAndBubble(events.pointerclick, event);
          if (fireDblClick && clickEndShape && clickEndShape === shape) {
            shape._fireAndBubble(events.pointerdblclick, event);
          }
        }
      } else {
        this[eventType + 'ClickEndShape'] = null;
        if (_GlobalJs.Konva['_' + eventType + 'ListenClick']) {
          this._fire(events.pointerclick, {
            evt: evt,
            target: this,
            currentTarget: this,
            pointerId
          });
        }
        if (fireDblClick) {
          this._fire(events.pointerdblclick, {
            evt: evt,
            target: this,
            currentTarget: this,
            pointerId
          });
        }
      }
    });
    if (!triggeredOnShape) {
      this._fire(events.pointerup, {
        evt: evt,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _GlobalJs.Konva['_' + eventType + 'ListenClick'] = false;
    if (evt.cancelable) {
      evt.preventDefault();
    }
  }
  _contextmenu(evt) {
    this.setPointersPositions(evt);
    var shape = this.getIntersection(this.getPointerPosition());
    if (shape && shape.isListening()) {
      shape._fireAndBubble(CONTEXTMENU, {
        evt: evt
      });
    } else {
      this._fire(CONTEXTMENU, {
        evt: evt,
        target: this,
        currentTarget: this
      });
    }
  }
  _wheel(evt) {
    this.setPointersPositions(evt);
    var shape = this.getIntersection(this.getPointerPosition());
    if (shape && shape.isListening()) {
      shape._fireAndBubble(WHEEL, {
        evt: evt
      });
    } else {
      this._fire(WHEEL, {
        evt: evt,
        target: this,
        currentTarget: this
      });
    }
  }
  _pointercancel(evt) {
    this.setPointersPositions(evt);
    const shape = _PointerEventsJs.getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
    if (shape) {
      shape._fireAndBubble(POINTERUP, _PointerEventsJs.createEvent(evt));
    }
    _PointerEventsJs.releaseCapture(evt.pointerId);
  }
  _lostpointercapture(evt) {
    _PointerEventsJs.releaseCapture(evt.pointerId);
  }
  setPointersPositions(evt) {
    var contentPosition = this._getContentPosition(), x = null, y = null;
    evt = evt ? evt : window.event;
    if (evt.touches !== undefined) {
      this._pointerPositions = [];
      this._changedPointerPositions = [];
      Array.prototype.forEach.call(evt.touches, touch => {
        this._pointerPositions.push({
          id: touch.identifier,
          x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
          y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
        });
      });
      Array.prototype.forEach.call(evt.changedTouches || evt.touches, touch => {
        this._changedPointerPositions.push({
          id: touch.identifier,
          x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
          y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
        });
      });
    } else {
      x = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
      y = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
      this.pointerPos = {
        x: x,
        y: y
      };
      this._pointerPositions = [{
        x,
        y,
        id: _UtilJs.Util._getFirstPointerId(evt)
      }];
      this._changedPointerPositions = [{
        x,
        y,
        id: _UtilJs.Util._getFirstPointerId(evt)
      }];
    }
  }
  _setPointerPosition(evt) {
    _UtilJs.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
    this.setPointersPositions(evt);
  }
  _getContentPosition() {
    if (!this.content || !this.content.getBoundingClientRect) {
      return {
        top: 0,
        left: 0,
        scaleX: 1,
        scaleY: 1
      };
    }
    var rect = this.content.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      scaleX: rect.width / this.content.clientWidth || 1,
      scaleY: rect.height / this.content.clientHeight || 1
    };
  }
  _buildDOM() {
    this.bufferCanvas = new _CanvasJs.SceneCanvas({
      width: this.width(),
      height: this.height()
    });
    this.bufferHitCanvas = new _CanvasJs.HitCanvas({
      pixelRatio: 1,
      width: this.width(),
      height: this.height()
    });
    if (!_GlobalJs.Konva.isBrowser) {
      return;
    }
    var container = this.container();
    if (!container) {
      throw 'Stage has no container. A container is required.';
    }
    container.innerHTML = '';
    this.content = document.createElement('div');
    this.content.style.position = 'relative';
    this.content.style.userSelect = 'none';
    this.content.className = 'konvajs-content';
    this.content.setAttribute('role', 'presentation');
    container.appendChild(this.content);
    this._resizeDOM();
  }
  cache() {
    _UtilJs.Util.warn('Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.');
    return this;
  }
  clearCache() {
    return this;
  }
  batchDraw() {
    this.getChildren().forEach(function (layer) {
      layer.batchDraw();
    });
    return this;
  }
}
Stage.prototype.nodeType = STAGE;
_GlobalJs._registerNode(Stage);
_FactoryJs.Factory.addGetterSetter(Stage, 'container');

},{"./Util.js":"27sKe","./Factory.js":"2GdoH","./Container.js":"6SS8S","./Global.js":"6qmUL","./Canvas.js":"6wLjS","./DragAndDrop.js":"5JOlZ","./PointerEvents.js":"8HpZv","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"8HpZv":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "getCapturedShape", function () {
  return getCapturedShape;
});
_parcelHelpers.export(exports, "createEvent", function () {
  return createEvent;
});
_parcelHelpers.export(exports, "hasPointerCapture", function () {
  return hasPointerCapture;
});
_parcelHelpers.export(exports, "setPointerCapture", function () {
  return setPointerCapture;
});
_parcelHelpers.export(exports, "releaseCapture", function () {
  return releaseCapture;
});
var _GlobalJs = require('./Global.js');
const Captures = new Map();
const SUPPORT_POINTER_EVENTS = _GlobalJs.Konva._global['PointerEvent'] !== undefined;
function getCapturedShape(pointerId) {
  return Captures.get(pointerId);
}
function createEvent(evt) {
  return {
    evt,
    pointerId: evt.pointerId
  };
}
function hasPointerCapture(pointerId, shape) {
  return Captures.get(pointerId) === shape;
}
function setPointerCapture(pointerId, shape) {
  releaseCapture(pointerId);
  const stage = shape.getStage();
  if (!stage) return;
  Captures.set(pointerId, shape);
  if (SUPPORT_POINTER_EVENTS) {
    shape._fire('gotpointercapture', createEvent(new PointerEvent('gotpointercapture')));
  }
}
function releaseCapture(pointerId, target) {
  const shape = Captures.get(pointerId);
  if (!shape) return;
  const stage = shape.getStage();
  if (stage && stage.content) {}
  Captures.delete(pointerId);
  if (SUPPORT_POINTER_EVENTS) {
    shape._fire('lostpointercapture', createEvent(new PointerEvent('lostpointercapture')));
  }
}

},{"./Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"7yclU":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Layer", function () {
  return Layer;
});
var _UtilJs = require('./Util.js');
var _ContainerJs = require('./Container.js');
var _NodeJs = require('./Node.js');
var _FactoryJs = require('./Factory.js');
var _CanvasJs = require('./Canvas.js');
var _ValidatorsJs = require('./Validators.js');
var _ShapeJs = require('./Shape.js');
var _GlobalJs = require('./Global.js');
var HASH = '#', BEFORE_DRAW = 'beforeDraw', DRAW = 'draw', INTERSECTION_OFFSETS = [{
  x: 0,
  y: 0
}, {
  x: -1,
  y: -1
}, {
  x: 1,
  y: -1
}, {
  x: 1,
  y: 1
}, {
  x: -1,
  y: 1
}], INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
class Layer extends _ContainerJs.Container {
  constructor(config) {
    super(config);
    this.canvas = new _CanvasJs.SceneCanvas();
    this.hitCanvas = new _CanvasJs.HitCanvas({
      pixelRatio: 1
    });
    this._waitingForDraw = false;
    this.on('visibleChange.konva', this._checkVisibility);
    this._checkVisibility();
    this.on('imageSmoothingEnabledChange.konva', this._setSmoothEnabled);
    this._setSmoothEnabled();
  }
  createPNGStream() {
    const c = this.canvas._canvas;
    return c.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(bounds) {
    this.getContext().clear(bounds);
    this.getHitCanvas().getContext().clear(bounds);
    return this;
  }
  setZIndex(index) {
    super.setZIndex(index);
    var stage = this.getStage();
    if (stage && stage.content) {
      stage.content.removeChild(this.getNativeCanvasElement());
      if (index < stage.children.length - 1) {
        stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[index + 1].getCanvas()._canvas);
      } else {
        stage.content.appendChild(this.getNativeCanvasElement());
      }
    }
    return this;
  }
  moveToTop() {
    _NodeJs.Node.prototype.moveToTop.call(this);
    var stage = this.getStage();
    if (stage && stage.content) {
      stage.content.removeChild(this.getNativeCanvasElement());
      stage.content.appendChild(this.getNativeCanvasElement());
    }
    return true;
  }
  moveUp() {
    var moved = _NodeJs.Node.prototype.moveUp.call(this);
    if (!moved) {
      return false;
    }
    var stage = this.getStage();
    if (!stage || !stage.content) {
      return false;
    }
    stage.content.removeChild(this.getNativeCanvasElement());
    if (this.index < stage.children.length - 1) {
      stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[this.index + 1].getCanvas()._canvas);
    } else {
      stage.content.appendChild(this.getNativeCanvasElement());
    }
    return true;
  }
  moveDown() {
    if (_NodeJs.Node.prototype.moveDown.call(this)) {
      var stage = this.getStage();
      if (stage) {
        var children = stage.children;
        if (stage.content) {
          stage.content.removeChild(this.getNativeCanvasElement());
          stage.content.insertBefore(this.getNativeCanvasElement(), children[this.index + 1].getCanvas()._canvas);
        }
      }
      return true;
    }
    return false;
  }
  moveToBottom() {
    if (_NodeJs.Node.prototype.moveToBottom.call(this)) {
      var stage = this.getStage();
      if (stage) {
        var children = stage.children;
        if (stage.content) {
          stage.content.removeChild(this.getNativeCanvasElement());
          stage.content.insertBefore(this.getNativeCanvasElement(), children[1].getCanvas()._canvas);
        }
      }
      return true;
    }
    return false;
  }
  getLayer() {
    return this;
  }
  remove() {
    var _canvas = this.getNativeCanvasElement();
    _NodeJs.Node.prototype.remove.call(this);
    if (_canvas && _canvas.parentNode && _UtilJs.Util._isInDocument(_canvas)) {
      _canvas.parentNode.removeChild(_canvas);
    }
    return this;
  }
  getStage() {
    return this.parent;
  }
  setSize({width, height}) {
    this.canvas.setSize(width, height);
    this.hitCanvas.setSize(width, height);
    this._setSmoothEnabled();
    return this;
  }
  _validateAdd(child) {
    var type = child.getType();
    if (type !== 'Group' && type !== 'Shape') {
      _UtilJs.Util.throw('You may only add groups and shapes to a layer.');
    }
  }
  _toKonvaCanvas(config) {
    config = config || ({});
    config.width = config.width || this.getWidth();
    config.height = config.height || this.getHeight();
    config.x = config.x !== undefined ? config.x : this.x();
    config.y = config.y !== undefined ? config.y : this.y();
    return _NodeJs.Node.prototype._toKonvaCanvas.call(this, config);
  }
  _checkVisibility() {
    const visible = this.visible();
    if (visible) {
      this.canvas._canvas.style.display = 'block';
    } else {
      this.canvas._canvas.style.display = 'none';
    }
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent) {
      return this.parent.width();
    }
  }
  setWidth() {
    _UtilJs.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent) {
      return this.parent.height();
    }
  }
  setHeight() {
    _UtilJs.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    if (!this._waitingForDraw) {
      this._waitingForDraw = true;
      _UtilJs.Util.requestAnimFrame(() => {
        this.draw();
        this._waitingForDraw = false;
      });
    }
    return this;
  }
  getIntersection(pos) {
    if (!this.isListening() || !this.isVisible()) {
      return null;
    }
    var spiralSearchDistance = 1;
    var continueSearch = false;
    while (true) {
      for (let i = 0; i < INTERSECTION_OFFSETS_LEN; i++) {
        const intersectionOffset = INTERSECTION_OFFSETS[i];
        const obj = this._getIntersection({
          x: pos.x + intersectionOffset.x * spiralSearchDistance,
          y: pos.y + intersectionOffset.y * spiralSearchDistance
        });
        const shape = obj.shape;
        if (shape) {
          return shape;
        }
        continueSearch = !!obj.antialiased;
        if (!obj.antialiased) {
          break;
        }
      }
      if (continueSearch) {
        spiralSearchDistance += 1;
      } else {
        return null;
      }
    }
  }
  _getIntersection(pos) {
    const ratio = this.hitCanvas.pixelRatio;
    const p = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data;
    const p3 = p[3];
    if (p3 === 255) {
      const colorKey = _UtilJs.Util._rgbToHex(p[0], p[1], p[2]);
      const shape = _ShapeJs.shapes[HASH + colorKey];
      if (shape) {
        return {
          shape: shape
        };
      }
      return {
        antialiased: true
      };
    } else if (p3 > 0) {
      return {
        antialiased: true
      };
    }
    return {};
  }
  drawScene(can, top) {
    var layer = this.getLayer(), canvas = can || layer && layer.getCanvas();
    this._fire(BEFORE_DRAW, {
      node: this
    });
    if (this.clearBeforeDraw()) {
      canvas.getContext().clear();
    }
    _ContainerJs.Container.prototype.drawScene.call(this, canvas, top);
    this._fire(DRAW, {
      node: this
    });
    return this;
  }
  drawHit(can, top) {
    var layer = this.getLayer(), canvas = can || layer && layer.hitCanvas;
    if (layer && layer.clearBeforeDraw()) {
      layer.getHitCanvas().getContext().clear();
    }
    _ContainerJs.Container.prototype.drawHit.call(this, canvas, top);
    return this;
  }
  enableHitGraph() {
    this.hitGraphEnabled(true);
    return this;
  }
  disableHitGraph() {
    this.hitGraphEnabled(false);
    return this;
  }
  setHitGraphEnabled(val) {
    _UtilJs.Util.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.');
    this.listening(val);
  }
  getHitGraphEnabled(val) {
    _UtilJs.Util.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.');
    return this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent['content']) {
      return;
    }
    var parent = this.parent;
    var added = !!this.hitCanvas._canvas.parentNode;
    if (added) {
      parent.content.removeChild(this.hitCanvas._canvas);
    } else {
      parent.content.appendChild(this.hitCanvas._canvas);
    }
  }
}
Layer.prototype.nodeType = 'Layer';
_GlobalJs._registerNode(Layer);
_FactoryJs.Factory.addGetterSetter(Layer, 'imageSmoothingEnabled', true);
_FactoryJs.Factory.addGetterSetter(Layer, 'clearBeforeDraw', true);
_FactoryJs.Factory.addGetterSetter(Layer, 'hitGraphEnabled', true, _ValidatorsJs.getBooleanValidator());

},{"./Util.js":"27sKe","./Container.js":"6SS8S","./Node.js":"5H2JD","./Factory.js":"2GdoH","./Canvas.js":"6wLjS","./Validators.js":"2KBE7","./Shape.js":"4xDL7","./Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4xDL7":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "shapes", function () {
  return shapes;
});
_parcelHelpers.export(exports, "Shape", function () {
  return Shape;
});
var _GlobalJs = require('./Global.js');
var _UtilJs = require('./Util.js');
var _FactoryJs = require('./Factory.js');
var _NodeJs = require('./Node.js');
var _ValidatorsJs = require('./Validators.js');
var _PointerEventsJs = require('./PointerEvents.js');
var HAS_SHADOW = 'hasShadow';
var SHADOW_RGBA = 'shadowRGBA';
var patternImage = 'patternImage';
var linearGradient = 'linearGradient';
var radialGradient = 'radialGradient';
let dummyContext;
function getDummyContext() {
  if (dummyContext) {
    return dummyContext;
  }
  dummyContext = _UtilJs.Util.createCanvasElement().getContext('2d');
  return dummyContext;
}
const shapes = {};
function _fillFunc(context) {
  context.fill();
}
function _strokeFunc(context) {
  context.stroke();
}
function _fillFuncHit(context) {
  context.fill();
}
function _strokeFuncHit(context) {
  context.stroke();
}
function _clearHasShadowCache() {
  this._clearCache(HAS_SHADOW);
}
function _clearGetShadowRGBACache() {
  this._clearCache(SHADOW_RGBA);
}
function _clearFillPatternCache() {
  this._clearCache(patternImage);
}
function _clearLinearGradientCache() {
  this._clearCache(linearGradient);
}
function _clearRadialGradientCache() {
  this._clearCache(radialGradient);
}
class Shape extends _NodeJs.Node {
  constructor(config) {
    super(config);
    let key;
    while (true) {
      key = _UtilJs.Util.getRandomColor();
      if (key && !((key in shapes))) {
        break;
      }
    }
    this.colorKey = key;
    shapes[key] = this;
  }
  getContext() {
    _UtilJs.Util.warn('shape.getContext() method is deprecated. Please do not use it.');
    return this.getLayer().getContext();
  }
  getCanvas() {
    _UtilJs.Util.warn('shape.getCanvas() method is deprecated. Please do not use it.');
    return this.getLayer().getCanvas();
  }
  getSceneFunc() {
    return this.attrs.sceneFunc || this['_sceneFunc'];
  }
  getHitFunc() {
    return this.attrs.hitFunc || this['_hitFunc'];
  }
  hasShadow() {
    return this._getCache(HAS_SHADOW, this._hasShadow);
  }
  _hasShadow() {
    return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
  }
  _getFillPattern() {
    return this._getCache(patternImage, this.__getFillPattern);
  }
  __getFillPattern() {
    if (this.fillPatternImage()) {
      var ctx = getDummyContext();
      const pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || 'repeat');
      if (pattern && pattern.setTransform) {
        const tr = new _UtilJs.Transform();
        tr.translate(this.fillPatternX(), this.fillPatternY());
        tr.rotate(_GlobalJs.Konva.getAngle(this.fillPatternRotation()));
        tr.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
        tr.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
        const m = tr.getMatrix();
        pattern.setTransform({
          a: m[0],
          b: m[1],
          c: m[2],
          d: m[3],
          e: m[4],
          f: m[5]
        });
      }
      return pattern;
    }
  }
  _getLinearGradient() {
    return this._getCache(linearGradient, this.__getLinearGradient);
  }
  __getLinearGradient() {
    var colorStops = this.fillLinearGradientColorStops();
    if (colorStops) {
      var ctx = getDummyContext();
      var start = this.fillLinearGradientStartPoint();
      var end = this.fillLinearGradientEndPoint();
      var grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
      for (var n = 0; n < colorStops.length; n += 2) {
        grd.addColorStop(colorStops[n], colorStops[n + 1]);
      }
      return grd;
    }
  }
  _getRadialGradient() {
    return this._getCache(radialGradient, this.__getRadialGradient);
  }
  __getRadialGradient() {
    var colorStops = this.fillRadialGradientColorStops();
    if (colorStops) {
      var ctx = getDummyContext();
      var start = this.fillRadialGradientStartPoint();
      var end = this.fillRadialGradientEndPoint();
      var grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
      for (var n = 0; n < colorStops.length; n += 2) {
        grd.addColorStop(colorStops[n], colorStops[n + 1]);
      }
      return grd;
    }
  }
  getShadowRGBA() {
    return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
  }
  _getShadowRGBA() {
    if (this.hasShadow()) {
      var rgba = _UtilJs.Util.colorToRGBA(this.shadowColor());
      return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + rgba.a * (this.shadowOpacity() || 1) + ')';
    }
  }
  hasFill() {
    return this._calculate('hasFill', ['fillEnabled', 'fill', 'fillPatternImage', 'fillLinearGradientColorStops', 'fillRadialGradientColorStops'], () => {
      return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops());
    });
  }
  hasStroke() {
    return this._calculate('hasStroke', ['strokeEnabled', 'strokeWidth', 'stroke', 'strokeLinearGradientColorStops'], () => {
      return this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops());
    });
  }
  hasHitStroke() {
    const width = this.hitStrokeWidth();
    if (width === 'auto') {
      return this.hasStroke();
    }
    return this.strokeEnabled() && !!width;
  }
  intersects(point) {
    var stage = this.getStage(), bufferHitCanvas = stage.bufferHitCanvas, p;
    bufferHitCanvas.getContext().clear();
    this.drawHit(bufferHitCanvas, null, true);
    p = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
    return p[3] > 0;
  }
  destroy() {
    _NodeJs.Node.prototype.destroy.call(this);
    delete shapes[this.colorKey];
    delete this.colorKey;
    return this;
  }
  _useBufferCanvas(forceFill) {
    var _a;
    if (!this.getStage()) {
      return false;
    }
    const perfectDrawEnabled = (_a = this.attrs.perfectDrawEnabled) !== null && _a !== void 0 ? _a : true;
    if (!perfectDrawEnabled) {
      return false;
    }
    const hasFill = forceFill || this.hasFill();
    const hasStroke = this.hasStroke();
    const isTransparent = this.getAbsoluteOpacity() !== 1;
    if (hasFill && hasStroke && isTransparent) {
      return true;
    }
    const hasShadow = this.hasShadow();
    const strokeForShadow = this.shadowForStrokeEnabled();
    if (hasFill && hasStroke && hasShadow && strokeForShadow) {
      return true;
    }
    return false;
  }
  setStrokeHitEnabled(val) {
    _UtilJs.Util.warn('strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.');
    if (val) {
      this.hitStrokeWidth('auto');
    } else {
      this.hitStrokeWidth(0);
    }
  }
  getStrokeHitEnabled() {
    if (this.hitStrokeWidth() === 0) {
      return false;
    } else {
      return true;
    }
  }
  getSelfRect() {
    var size = this.size();
    return {
      x: this._centroid ? -size.width / 2 : 0,
      y: this._centroid ? -size.height / 2 : 0,
      width: size.width,
      height: size.height
    };
  }
  getClientRect(config = {}) {
    const skipTransform = config.skipTransform;
    const relativeTo = config.relativeTo;
    const fillRect = this.getSelfRect();
    const applyStroke = !config.skipStroke && this.hasStroke();
    const strokeWidth = applyStroke && this.strokeWidth() || 0;
    const fillAndStrokeWidth = fillRect.width + strokeWidth;
    const fillAndStrokeHeight = fillRect.height + strokeWidth;
    const applyShadow = !config.skipShadow && this.hasShadow();
    const shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
    const shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
    const preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
    const preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
    const blurRadius = applyShadow && this.shadowBlur() || 0;
    const width = preWidth + blurRadius * 2;
    const height = preHeight + blurRadius * 2;
    let roundingOffset = 0;
    if (Math.round(strokeWidth / 2) !== strokeWidth / 2) {
      roundingOffset = 1;
    }
    const rect = {
      width: width + roundingOffset,
      height: height + roundingOffset,
      x: -Math.round(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
      y: -Math.round(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
    };
    if (!skipTransform) {
      return this._transformedRect(rect, relativeTo);
    }
    return rect;
  }
  drawScene(can, top) {
    var layer = this.getLayer(), canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow(), stage, bufferCanvas, bufferContext;
    var skipBuffer = canvas.isCache;
    var cachingSelf = top === this;
    if (!this.isVisible() && !cachingSelf) {
      return this;
    }
    if (cachedCanvas) {
      context.save();
      var m = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      this._drawCachedSceneCanvas(context);
      context.restore();
      return this;
    }
    if (!drawFunc) {
      return this;
    }
    context.save();
    if (this._useBufferCanvas() && !skipBuffer) {
      stage = this.getStage();
      bufferCanvas = stage.bufferCanvas;
      bufferContext = bufferCanvas.getContext();
      bufferContext.clear();
      bufferContext.save();
      bufferContext._applyLineJoin(this);
      var o = this.getAbsoluteTransform(top).getMatrix();
      bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
      drawFunc.call(this, bufferContext, this);
      bufferContext.restore();
      var ratio = bufferCanvas.pixelRatio;
      if (hasShadow) {
        context._applyShadow(this);
      }
      context._applyOpacity(this);
      context._applyGlobalCompositeOperation(this);
      context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
    } else {
      context._applyLineJoin(this);
      if (!cachingSelf) {
        var o = this.getAbsoluteTransform(top).getMatrix();
        context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
      }
      if (hasShadow) {
        context._applyShadow(this);
      }
      drawFunc.call(this, context, this);
    }
    context.restore();
    return this;
  }
  drawHit(can, top, skipDragCheck = false) {
    if (!this.shouldDrawHit(top, skipDragCheck)) {
      return this;
    }
    var layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
    if (!this.colorKey) {
      _UtilJs.Util.warn('Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()');
    }
    if (cachedHitCanvas) {
      context.save();
      var m = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      this._drawCachedHitCanvas(context);
      context.restore();
      return this;
    }
    if (!drawFunc) {
      return this;
    }
    context.save();
    context._applyLineJoin(this);
    const selfCache = this === top;
    if (!selfCache) {
      var o = this.getAbsoluteTransform(top).getMatrix();
      context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
    }
    drawFunc.call(this, context, this);
    context.restore();
    return this;
  }
  drawHitFromCache(alphaThreshold = 0) {
    var cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight(), hitImageData, hitData, len, rgbColorKey, i, alpha;
    hitContext.clear();
    hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
    try {
      hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
      hitData = hitImageData.data;
      len = hitData.length;
      rgbColorKey = _UtilJs.Util._hexToRgb(this.colorKey);
      for (i = 0; i < len; i += 4) {
        alpha = hitData[i + 3];
        if (alpha > alphaThreshold) {
          hitData[i] = rgbColorKey.r;
          hitData[i + 1] = rgbColorKey.g;
          hitData[i + 2] = rgbColorKey.b;
          hitData[i + 3] = 255;
        } else {
          hitData[i + 3] = 0;
        }
      }
      hitContext.putImageData(hitImageData, 0, 0);
    } catch (e) {
      _UtilJs.Util.error('Unable to draw hit graph from cached scene canvas. ' + e.message);
    }
    return this;
  }
  hasPointerCapture(pointerId) {
    return _PointerEventsJs.hasPointerCapture(pointerId, this);
  }
  setPointerCapture(pointerId) {
    _PointerEventsJs.setPointerCapture(pointerId, this);
  }
  releaseCapture(pointerId) {
    _PointerEventsJs.releaseCapture(pointerId, this);
  }
}
Shape.prototype._fillFunc = _fillFunc;
Shape.prototype._strokeFunc = _strokeFunc;
Shape.prototype._fillFuncHit = _fillFuncHit;
Shape.prototype._strokeFuncHit = _strokeFuncHit;
Shape.prototype._centroid = false;
Shape.prototype.nodeType = 'Shape';
_GlobalJs._registerNode(Shape);
Shape.prototype.eventListeners = {};
Shape.prototype.on.call(Shape.prototype, 'shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', _clearHasShadowCache);
Shape.prototype.on.call(Shape.prototype, 'shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', _clearGetShadowRGBACache);
Shape.prototype.on.call(Shape.prototype, 'fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva', _clearFillPatternCache);
Shape.prototype.on.call(Shape.prototype, 'fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva', _clearLinearGradientCache);
Shape.prototype.on.call(Shape.prototype, 'fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva', _clearRadialGradientCache);
_FactoryJs.Factory.addGetterSetter(Shape, 'stroke', undefined, _ValidatorsJs.getStringOrGradientValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeWidth', 2, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'fillAfterStrokeEnabled', false);
_FactoryJs.Factory.addGetterSetter(Shape, 'hitStrokeWidth', 'auto', _ValidatorsJs.getNumberOrAutoValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeHitEnabled', true, _ValidatorsJs.getBooleanValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'perfectDrawEnabled', true, _ValidatorsJs.getBooleanValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'shadowForStrokeEnabled', true, _ValidatorsJs.getBooleanValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'lineJoin');
_FactoryJs.Factory.addGetterSetter(Shape, 'lineCap');
_FactoryJs.Factory.addGetterSetter(Shape, 'sceneFunc');
_FactoryJs.Factory.addGetterSetter(Shape, 'hitFunc');
_FactoryJs.Factory.addGetterSetter(Shape, 'dash');
_FactoryJs.Factory.addGetterSetter(Shape, 'dashOffset', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'shadowColor', undefined, _ValidatorsJs.getStringValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'shadowBlur', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'shadowOpacity', 1, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'shadowOffset', ['x', 'y']);
_FactoryJs.Factory.addGetterSetter(Shape, 'shadowOffsetX', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'shadowOffsetY', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternImage');
_FactoryJs.Factory.addGetterSetter(Shape, 'fill', undefined, _ValidatorsJs.getStringOrGradientValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternX', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternY', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientColorStops');
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientColorStops');
_FactoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientStartRadius', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientEndRadius', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientColorStops');
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternRepeat', 'repeat');
_FactoryJs.Factory.addGetterSetter(Shape, 'fillEnabled', true);
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeEnabled', true);
_FactoryJs.Factory.addGetterSetter(Shape, 'shadowEnabled', true);
_FactoryJs.Factory.addGetterSetter(Shape, 'dashEnabled', true);
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeScaleEnabled', true);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPriority', 'color');
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'fillPatternOffset', ['x', 'y']);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternOffsetX', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternOffsetY', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'fillPatternScale', ['x', 'y']);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternScaleX', 1, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternScaleY', 1, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'fillLinearGradientStartPoint', ['x', 'y']);
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'strokeLinearGradientStartPoint', ['x', 'y']);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientStartPointX', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientStartPointX', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientStartPointY', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientStartPointY', 0);
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'fillLinearGradientEndPoint', ['x', 'y']);
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'strokeLinearGradientEndPoint', ['x', 'y']);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientEndPointX', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientEndPointX', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillLinearGradientEndPointY', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'strokeLinearGradientEndPointY', 0);
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'fillRadialGradientStartPoint', ['x', 'y']);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientStartPointX', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientStartPointY', 0);
_FactoryJs.Factory.addComponentsGetterSetter(Shape, 'fillRadialGradientEndPoint', ['x', 'y']);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientEndPointX', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillRadialGradientEndPointY', 0);
_FactoryJs.Factory.addGetterSetter(Shape, 'fillPatternRotation', 0);
_FactoryJs.Factory.backCompat(Shape, {
  dashArray: 'dash',
  getDashArray: 'getDash',
  setDashArray: 'getDash',
  drawFunc: 'sceneFunc',
  getDrawFunc: 'getSceneFunc',
  setDrawFunc: 'setSceneFunc',
  drawHitFunc: 'hitFunc',
  getDrawHitFunc: 'getHitFunc',
  setDrawHitFunc: 'setHitFunc'
});

},{"./Global.js":"6qmUL","./Util.js":"27sKe","./Factory.js":"2GdoH","./Node.js":"5H2JD","./Validators.js":"2KBE7","./PointerEvents.js":"8HpZv","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"3e32M":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "FastLayer", function () {
  return FastLayer;
});
var _UtilJs = require('./Util.js');
var _LayerJs = require('./Layer.js');
var _GlobalJs = require('./Global.js');
class FastLayer extends _LayerJs.Layer {
  constructor(attrs) {
    super(attrs);
    this.listening(false);
    _UtilJs.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
FastLayer.prototype.nodeType = 'FastLayer';
_GlobalJs._registerNode(FastLayer);

},{"./Util.js":"27sKe","./Layer.js":"7yclU","./Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"796CV":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Group", function () {
  return Group;
});
var _UtilJs = require('./Util.js');
var _ContainerJs = require('./Container.js');
var _GlobalJs = require('./Global.js');
class Group extends _ContainerJs.Container {
  _validateAdd(child) {
    var type = child.getType();
    if (type !== 'Group' && type !== 'Shape') {
      _UtilJs.Util.throw('You may only add groups and shapes to groups.');
    }
  }
}
Group.prototype.nodeType = 'Group';
_GlobalJs._registerNode(Group);

},{"./Util.js":"27sKe","./Container.js":"6SS8S","./Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4PMju":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Animation", function () {
  return Animation;
});
var _GlobalJs = require('./Global.js');
var _UtilJs = require('./Util.js');
var now = (function () {
  if (_GlobalJs.glob.performance && _GlobalJs.glob.performance.now) {
    return function () {
      return _GlobalJs.glob.performance.now();
    };
  }
  return function () {
    return new Date().getTime();
  };
})();
class Animation {
  constructor(func, layers) {
    this.id = Animation.animIdCounter++;
    this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: now(),
      frameRate: 0
    };
    this.func = func;
    this.setLayers(layers);
  }
  setLayers(layers) {
    var lays = [];
    if (!layers) {
      lays = [];
    } else if (layers.length > 0) {
      lays = layers;
    } else {
      lays = [layers];
    }
    this.layers = lays;
    return this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(layer) {
    var layers = this.layers, len = layers.length, n;
    for (n = 0; n < len; n++) {
      if (layers[n]._id === layer._id) {
        return false;
      }
    }
    this.layers.push(layer);
    return true;
  }
  isRunning() {
    var a = Animation, animations = a.animations, len = animations.length, n;
    for (n = 0; n < len; n++) {
      if (animations[n].id === this.id) {
        return true;
      }
    }
    return false;
  }
  start() {
    this.stop();
    this.frame.timeDiff = 0;
    this.frame.lastTime = now();
    Animation._addAnimation(this);
    return this;
  }
  stop() {
    Animation._removeAnimation(this);
    return this;
  }
  _updateFrameObject(time) {
    this.frame.timeDiff = time - this.frame.lastTime;
    this.frame.lastTime = time;
    this.frame.time += this.frame.timeDiff;
    this.frame.frameRate = 1000 / this.frame.timeDiff;
  }
  static _addAnimation(anim) {
    this.animations.push(anim);
    this._handleAnimation();
  }
  static _removeAnimation(anim) {
    var id = anim.id, animations = this.animations, len = animations.length, n;
    for (n = 0; n < len; n++) {
      if (animations[n].id === id) {
        this.animations.splice(n, 1);
        break;
      }
    }
  }
  static _runFrames() {
    var layerHash = {}, animations = this.animations, anim, layers, func, n, i, layersLen, layer, key, needRedraw;
    for (n = 0; n < animations.length; n++) {
      anim = animations[n];
      layers = anim.layers;
      func = anim.func;
      anim._updateFrameObject(now());
      layersLen = layers.length;
      if (func) {
        needRedraw = func.call(anim, anim.frame) !== false;
      } else {
        needRedraw = true;
      }
      if (!needRedraw) {
        continue;
      }
      for (i = 0; i < layersLen; i++) {
        layer = layers[i];
        if (layer._id !== undefined) {
          layerHash[layer._id] = layer;
        }
      }
    }
    for (key in layerHash) {
      if (!layerHash.hasOwnProperty(key)) {
        continue;
      }
      layerHash[key].batchDraw();
    }
  }
  static _animationLoop() {
    var Anim = Animation;
    if (Anim.animations.length) {
      Anim._runFrames();
      _UtilJs.Util.requestAnimFrame(Anim._animationLoop);
    } else {
      Anim.animRunning = false;
    }
  }
  static _handleAnimation() {
    if (!this.animRunning) {
      this.animRunning = true;
      _UtilJs.Util.requestAnimFrame(this._animationLoop);
    }
  }
}
Animation.animations = [];
Animation.animIdCounter = 0;
Animation.animRunning = false;

},{"./Global.js":"6qmUL","./Util.js":"27sKe","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"43MYL":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Tween", function () {
  return Tween;
});
_parcelHelpers.export(exports, "Easings", function () {
  return Easings;
});
var _UtilJs = require('./Util.js');
var _AnimationJs = require('./Animation.js');
var _NodeJs = require('./Node.js');
var _GlobalJs = require('./Global.js');
var blacklist = {
  node: 1,
  duration: 1,
  easing: 1,
  onFinish: 1,
  yoyo: 1
}, PAUSED = 1, PLAYING = 2, REVERSING = 3, idCounter = 0, colorAttrs = ['fill', 'stroke', 'shadowColor'];
class TweenEngine {
  constructor(prop, propFunc, func, begin, finish, duration, yoyo) {
    this.prop = prop;
    this.propFunc = propFunc;
    this.begin = begin;
    this._pos = begin;
    this.duration = duration;
    this._change = 0;
    this.prevPos = 0;
    this.yoyo = yoyo;
    this._time = 0;
    this._position = 0;
    this._startTime = 0;
    this._finish = 0;
    this.func = func;
    this._change = finish - this.begin;
    this.pause();
  }
  fire(str) {
    var handler = this[str];
    if (handler) {
      handler();
    }
  }
  setTime(t) {
    if (t > this.duration) {
      if (this.yoyo) {
        this._time = this.duration;
        this.reverse();
      } else {
        this.finish();
      }
    } else if (t < 0) {
      if (this.yoyo) {
        this._time = 0;
        this.play();
      } else {
        this.reset();
      }
    } else {
      this._time = t;
      this.update();
    }
  }
  getTime() {
    return this._time;
  }
  setPosition(p) {
    this.prevPos = this._pos;
    this.propFunc(p);
    this._pos = p;
  }
  getPosition(t) {
    if (t === undefined) {
      t = this._time;
    }
    return this.func(t, this.begin, this._change, this.duration);
  }
  play() {
    this.state = PLAYING;
    this._startTime = this.getTimer() - this._time;
    this.onEnterFrame();
    this.fire('onPlay');
  }
  reverse() {
    this.state = REVERSING;
    this._time = this.duration - this._time;
    this._startTime = this.getTimer() - this._time;
    this.onEnterFrame();
    this.fire('onReverse');
  }
  seek(t) {
    this.pause();
    this._time = t;
    this.update();
    this.fire('onSeek');
  }
  reset() {
    this.pause();
    this._time = 0;
    this.update();
    this.fire('onReset');
  }
  finish() {
    this.pause();
    this._time = this.duration;
    this.update();
    this.fire('onFinish');
  }
  update() {
    this.setPosition(this.getPosition(this._time));
    this.fire('onUpdate');
  }
  onEnterFrame() {
    var t = this.getTimer() - this._startTime;
    if (this.state === PLAYING) {
      this.setTime(t);
    } else if (this.state === REVERSING) {
      this.setTime(this.duration - t);
    }
  }
  pause() {
    this.state = PAUSED;
    this.fire('onPause');
  }
  getTimer() {
    return new Date().getTime();
  }
}
class Tween {
  constructor(config) {
    var that = this, node = config.node, nodeId = node._id, duration, easing = config.easing || Easings.Linear, yoyo = !!config.yoyo, key;
    if (typeof config.duration === 'undefined') {
      duration = 0.3;
    } else if (config.duration === 0) {
      duration = 0.001;
    } else {
      duration = config.duration;
    }
    this.node = node;
    this._id = idCounter++;
    var layers = node.getLayer() || (node instanceof _GlobalJs.Konva['Stage'] ? node.getLayers() : null);
    if (!layers) {
      _UtilJs.Util.error('Tween constructor have `node` that is not in a layer. Please add node into layer first.');
    }
    this.anim = new _AnimationJs.Animation(function () {
      that.tween.onEnterFrame();
    }, layers);
    this.tween = new TweenEngine(key, function (i) {
      that._tweenFunc(i);
    }, easing, 0, 1, duration * 1000, yoyo);
    this._addListeners();
    if (!Tween.attrs[nodeId]) {
      Tween.attrs[nodeId] = {};
    }
    if (!Tween.attrs[nodeId][this._id]) {
      Tween.attrs[nodeId][this._id] = {};
    }
    if (!Tween.tweens[nodeId]) {
      Tween.tweens[nodeId] = {};
    }
    for (key in config) {
      if (blacklist[key] === undefined) {
        this._addAttr(key, config[key]);
      }
    }
    this.reset();
    this.onFinish = config.onFinish;
    this.onReset = config.onReset;
    this.onUpdate = config.onUpdate;
  }
  _addAttr(key, end) {
    var node = this.node, nodeId = node._id, start, diff, tweenId, n, len, trueEnd, trueStart, endRGBA;
    tweenId = Tween.tweens[nodeId][key];
    if (tweenId) {
      delete Tween.attrs[nodeId][tweenId][key];
    }
    start = node.getAttr(key);
    if (_UtilJs.Util._isArray(end)) {
      diff = [];
      len = Math.max(end.length, start.length);
      if (key === 'points' && end.length !== start.length) {
        if (end.length > start.length) {
          trueStart = start;
          start = _UtilJs.Util._prepareArrayForTween(start, end, node.closed());
        } else {
          trueEnd = end;
          end = _UtilJs.Util._prepareArrayForTween(end, start, node.closed());
        }
      }
      if (key.indexOf('fill') === 0) {
        for (n = 0; n < len; n++) {
          if (n % 2 === 0) {
            diff.push(end[n] - start[n]);
          } else {
            var startRGBA = _UtilJs.Util.colorToRGBA(start[n]);
            endRGBA = _UtilJs.Util.colorToRGBA(end[n]);
            start[n] = startRGBA;
            diff.push({
              r: endRGBA.r - startRGBA.r,
              g: endRGBA.g - startRGBA.g,
              b: endRGBA.b - startRGBA.b,
              a: endRGBA.a - startRGBA.a
            });
          }
        }
      } else {
        for (n = 0; n < len; n++) {
          diff.push(end[n] - start[n]);
        }
      }
    } else if (colorAttrs.indexOf(key) !== -1) {
      start = _UtilJs.Util.colorToRGBA(start);
      endRGBA = _UtilJs.Util.colorToRGBA(end);
      diff = {
        r: endRGBA.r - start.r,
        g: endRGBA.g - start.g,
        b: endRGBA.b - start.b,
        a: endRGBA.a - start.a
      };
    } else {
      diff = end - start;
    }
    Tween.attrs[nodeId][this._id][key] = {
      start: start,
      diff: diff,
      end: end,
      trueEnd: trueEnd,
      trueStart: trueStart
    };
    Tween.tweens[nodeId][key] = this._id;
  }
  _tweenFunc(i) {
    var node = this.node, attrs = Tween.attrs[node._id][this._id], key, attr, start, diff, newVal, n, len, end;
    for (key in attrs) {
      attr = attrs[key];
      start = attr.start;
      diff = attr.diff;
      end = attr.end;
      if (_UtilJs.Util._isArray(start)) {
        newVal = [];
        len = Math.max(start.length, end.length);
        if (key.indexOf('fill') === 0) {
          for (n = 0; n < len; n++) {
            if (n % 2 === 0) {
              newVal.push((start[n] || 0) + diff[n] * i);
            } else {
              newVal.push('rgba(' + Math.round(start[n].r + diff[n].r * i) + ',' + Math.round(start[n].g + diff[n].g * i) + ',' + Math.round(start[n].b + diff[n].b * i) + ',' + (start[n].a + diff[n].a * i) + ')');
            }
          }
        } else {
          for (n = 0; n < len; n++) {
            newVal.push((start[n] || 0) + diff[n] * i);
          }
        }
      } else if (colorAttrs.indexOf(key) !== -1) {
        newVal = 'rgba(' + Math.round(start.r + diff.r * i) + ',' + Math.round(start.g + diff.g * i) + ',' + Math.round(start.b + diff.b * i) + ',' + (start.a + diff.a * i) + ')';
      } else {
        newVal = start + diff * i;
      }
      node.setAttr(key, newVal);
    }
  }
  _addListeners() {
    this.tween.onPlay = () => {
      this.anim.start();
    };
    this.tween.onReverse = () => {
      this.anim.start();
    };
    this.tween.onPause = () => {
      this.anim.stop();
    };
    this.tween.onFinish = () => {
      var node = this.node;
      var attrs = Tween.attrs[node._id][this._id];
      if (attrs.points && attrs.points.trueEnd) {
        node.setAttr('points', attrs.points.trueEnd);
      }
      if (this.onFinish) {
        this.onFinish.call(this);
      }
    };
    this.tween.onReset = () => {
      var node = this.node;
      var attrs = Tween.attrs[node._id][this._id];
      if (attrs.points && attrs.points.trueStart) {
        node.points(attrs.points.trueStart);
      }
      if (this.onReset) {
        this.onReset();
      }
    };
    this.tween.onUpdate = () => {
      if (this.onUpdate) {
        this.onUpdate.call(this);
      }
    };
  }
  play() {
    this.tween.play();
    return this;
  }
  reverse() {
    this.tween.reverse();
    return this;
  }
  reset() {
    this.tween.reset();
    return this;
  }
  seek(t) {
    this.tween.seek(t * 1000);
    return this;
  }
  pause() {
    this.tween.pause();
    return this;
  }
  finish() {
    this.tween.finish();
    return this;
  }
  destroy() {
    var nodeId = this.node._id, thisId = this._id, attrs = Tween.tweens[nodeId], key;
    this.pause();
    for (key in attrs) {
      delete Tween.tweens[nodeId][key];
    }
    delete Tween.attrs[nodeId][thisId];
  }
}
Tween.attrs = {};
Tween.tweens = {};
_NodeJs.Node.prototype.to = function (params) {
  var onFinish = params.onFinish;
  params.node = this;
  params.onFinish = function () {
    this.destroy();
    if (onFinish) {
      onFinish();
    }
  };
  var tween = new Tween(params);
  tween.play();
};
const Easings = {
  BackEaseIn(t, b, c, d) {
    var s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  BackEaseOut(t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  BackEaseInOut(t, b, c, d) {
    var s = 1.70158;
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  ElasticEaseIn(t, b, c, d, a, p) {
    var s = 0;
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  ElasticEaseOut(t, b, c, d, a, p) {
    var s = 0;
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  ElasticEaseInOut(t, b, c, d, a, p) {
    var s = 0;
    if (t === 0) {
      return b;
    }
    if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  },
  BounceEaseOut(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  BounceEaseIn(t, b, c, d) {
    return c - Easings.BounceEaseOut(d - t, 0, c, d) + b;
  },
  BounceEaseInOut(t, b, c, d) {
    if (t < d / 2) {
      return Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
    } else {
      return Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
  },
  EaseIn(t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  EaseOut(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  EaseInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    }
    return -c / 2 * (--t * (t - 2) - 1) + b;
  },
  StrongEaseIn(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  StrongEaseOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  StrongEaseInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  Linear(t, b, c, d) {
    return c * t / d + b;
  }
};

},{"./Util.js":"27sKe","./Animation.js":"4PMju","./Node.js":"5H2JD","./Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"1hJS2":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Arc", function () {
  return Arc;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _GlobalJs = require('../Global.js');
var _ValidatorsJs = require('../Validators.js');
class Arc extends _ShapeJs.Shape {
  _sceneFunc(context) {
    var angle = _GlobalJs.Konva.getAngle(this.angle()), clockwise = this.clockwise();
    context.beginPath();
    context.arc(0, 0, this.outerRadius(), 0, angle, clockwise);
    context.arc(0, 0, this.innerRadius(), angle, 0, !clockwise);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
}
Arc.prototype._centroid = true;
Arc.prototype.className = 'Arc';
Arc.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius'];
_GlobalJs._registerNode(Arc);
_FactoryJs.Factory.addGetterSetter(Arc, 'innerRadius', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Arc, 'outerRadius', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Arc, 'angle', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Arc, 'clockwise', false, _ValidatorsJs.getBooleanValidator());

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Global.js":"6qmUL","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"5xDdd":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Arrow", function () {
  return Arrow;
});
var _FactoryJs = require('../Factory.js');
var _LineJs = require('./Line.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
var _PathJs = require('./Path.js');
class Arrow extends _LineJs.Line {
  _sceneFunc(ctx) {
    super._sceneFunc(ctx);
    var PI2 = Math.PI * 2;
    var points = this.points();
    var tp = points;
    var fromTension = this.tension() !== 0 && points.length > 4;
    if (fromTension) {
      tp = this.getTensionPoints();
    }
    var length = this.pointerLength();
    var n = points.length;
    var dx, dy;
    if (fromTension) {
      const lp = [tp[tp.length - 4], tp[tp.length - 3], tp[tp.length - 2], tp[tp.length - 1], points[n - 2], points[n - 1]];
      const lastLength = _PathJs.Path.calcLength(tp[tp.length - 4], tp[tp.length - 3], 'C', lp);
      const previous = _PathJs.Path.getPointOnQuadraticBezier(Math.min(1, 1 - length / lastLength), lp[0], lp[1], lp[2], lp[3], lp[4], lp[5]);
      dx = points[n - 2] - previous.x;
      dy = points[n - 1] - previous.y;
    } else {
      dx = points[n - 2] - points[n - 4];
      dy = points[n - 1] - points[n - 3];
    }
    var radians = (Math.atan2(dy, dx) + PI2) % PI2;
    var width = this.pointerWidth();
    if (this.pointerAtEnding()) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(points[n - 2], points[n - 1]);
      ctx.rotate(radians);
      ctx.moveTo(0, 0);
      ctx.lineTo(-length, width / 2);
      ctx.lineTo(-length, -width / 2);
      ctx.closePath();
      ctx.restore();
    }
    if (this.pointerAtBeginning()) {
      ctx.save();
      ctx.translate(points[0], points[1]);
      if (fromTension) {
        dx = (tp[0] + tp[2]) / 2 - points[0];
        dy = (tp[1] + tp[3]) / 2 - points[1];
      } else {
        dx = points[2] - points[0];
        dy = points[3] - points[1];
      }
      ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
      ctx.moveTo(0, 0);
      ctx.lineTo(-length, width / 2);
      ctx.lineTo(-length, -width / 2);
      ctx.closePath();
      ctx.restore();
    }
    var isDashEnabled = this.dashEnabled();
    if (isDashEnabled) {
      this.attrs.dashEnabled = false;
      ctx.setLineDash([]);
    }
    ctx.fillStrokeShape(this);
    if (isDashEnabled) {
      this.attrs.dashEnabled = true;
    }
  }
  getSelfRect() {
    const lineRect = super.getSelfRect();
    const offset = this.pointerWidth() / 2;
    return {
      x: lineRect.x - offset,
      y: lineRect.y - offset,
      width: lineRect.width + offset * 2,
      height: lineRect.height + offset * 2
    };
  }
}
Arrow.prototype.className = 'Arrow';
_GlobalJs._registerNode(Arrow);
_FactoryJs.Factory.addGetterSetter(Arrow, 'pointerLength', 10, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Arrow, 'pointerWidth', 10, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Arrow, 'pointerAtBeginning', false);
_FactoryJs.Factory.addGetterSetter(Arrow, 'pointerAtEnding', true);

},{"../Factory.js":"2GdoH","./Line.js":"5CJlu","../Validators.js":"2KBE7","../Global.js":"6qmUL","./Path.js":"5Mvr2","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"5CJlu":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Line", function () {
  return Line;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
function getControlPoints(x0, y0, x1, y1, x2, y2, t) {
  var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), fa = t * d01 / (d01 + d12), fb = t * d12 / (d01 + d12), p1x = x1 - fa * (x2 - x0), p1y = y1 - fa * (y2 - y0), p2x = x1 + fb * (x2 - x0), p2y = y1 + fb * (y2 - y0);
  return [p1x, p1y, p2x, p2y];
}
function expandPoints(p, tension) {
  var len = p.length, allPoints = [], n, cp;
  for (n = 2; n < len - 2; n += 2) {
    cp = getControlPoints(p[n - 2], p[n - 1], p[n], p[n + 1], p[n + 2], p[n + 3], tension);
    if (isNaN(cp[0])) {
      continue;
    }
    allPoints.push(cp[0]);
    allPoints.push(cp[1]);
    allPoints.push(p[n]);
    allPoints.push(p[n + 1]);
    allPoints.push(cp[2]);
    allPoints.push(cp[3]);
  }
  return allPoints;
}
class Line extends _ShapeJs.Shape {
  constructor(config) {
    super(config);
    this.on('pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva', function () {
      this._clearCache('tensionPoints');
    });
  }
  _sceneFunc(context) {
    var points = this.points(), length = points.length, tension = this.tension(), closed = this.closed(), bezier = this.bezier(), tp, len, n;
    if (!length) {
      return;
    }
    context.beginPath();
    context.moveTo(points[0], points[1]);
    if (tension !== 0 && length > 4) {
      tp = this.getTensionPoints();
      len = tp.length;
      n = closed ? 0 : 4;
      if (!closed) {
        context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
      }
      while (n < len - 2) {
        context.bezierCurveTo(tp[n++], tp[n++], tp[n++], tp[n++], tp[n++], tp[n++]);
      }
      if (!closed) {
        context.quadraticCurveTo(tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
      }
    } else if (bezier) {
      n = 2;
      while (n < length) {
        context.bezierCurveTo(points[n++], points[n++], points[n++], points[n++], points[n++], points[n++]);
      }
    } else {
      for (n = 2; n < length; n += 2) {
        context.lineTo(points[n], points[n + 1]);
      }
    }
    if (closed) {
      context.closePath();
      context.fillStrokeShape(this);
    } else {
      context.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache('tensionPoints', this._getTensionPoints);
  }
  _getTensionPoints() {
    if (this.closed()) {
      return this._getTensionPointsClosed();
    } else {
      return expandPoints(this.points(), this.tension());
    }
  }
  _getTensionPointsClosed() {
    var p = this.points(), len = p.length, tension = this.tension(), firstControlPoints = getControlPoints(p[len - 2], p[len - 1], p[0], p[1], p[2], p[3], tension), lastControlPoints = getControlPoints(p[len - 4], p[len - 3], p[len - 2], p[len - 1], p[0], p[1], tension), middle = expandPoints(p, tension), tp = [firstControlPoints[2], firstControlPoints[3]].concat(middle).concat([lastControlPoints[0], lastControlPoints[1], p[len - 2], p[len - 1], lastControlPoints[2], lastControlPoints[3], firstControlPoints[0], firstControlPoints[1], p[0], p[1]]);
    return tp;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var points = this.points();
    if (points.length < 4) {
      return {
        x: points[0] || 0,
        y: points[1] || 0,
        width: 0,
        height: 0
      };
    }
    if (this.tension() !== 0) {
      points = [points[0], points[1], ...this._getTensionPoints(), points[points.length - 2], points[points.length - 1]];
    } else {
      points = this.points();
    }
    var minX = points[0];
    var maxX = points[0];
    var minY = points[1];
    var maxY = points[1];
    var x, y;
    for (var i = 0; i < points.length / 2; i++) {
      x = points[i * 2];
      y = points[i * 2 + 1];
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
}
Line.prototype.className = 'Line';
Line.prototype._attrsAffectingSize = ['points', 'bezier', 'tension'];
_GlobalJs._registerNode(Line);
_FactoryJs.Factory.addGetterSetter(Line, 'closed', false);
_FactoryJs.Factory.addGetterSetter(Line, 'bezier', false);
_FactoryJs.Factory.addGetterSetter(Line, 'tension', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Line, 'points', [], _ValidatorsJs.getNumberArrayValidator());

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"5Mvr2":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Path", function () {
  return Path;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _GlobalJs = require('../Global.js');
class Path extends _ShapeJs.Shape {
  constructor(config) {
    super(config);
    this.dataArray = [];
    this.pathLength = 0;
    this.dataArray = Path.parsePathData(this.data());
    this.pathLength = 0;
    for (var i = 0; i < this.dataArray.length; ++i) {
      this.pathLength += this.dataArray[i].pathLength;
    }
    this.on('dataChange.konva', function () {
      this.dataArray = Path.parsePathData(this.data());
      this.pathLength = 0;
      for (var i = 0; i < this.dataArray.length; ++i) {
        this.pathLength += this.dataArray[i].pathLength;
      }
    });
  }
  _sceneFunc(context) {
    var ca = this.dataArray;
    context.beginPath();
    var isClosed = false;
    for (var n = 0; n < ca.length; n++) {
      var c = ca[n].command;
      var p = ca[n].points;
      switch (c) {
        case 'L':
          context.lineTo(p[0], p[1]);
          break;
        case 'M':
          context.moveTo(p[0], p[1]);
          break;
        case 'C':
          context.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
          break;
        case 'Q':
          context.quadraticCurveTo(p[0], p[1], p[2], p[3]);
          break;
        case 'A':
          var cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6], fs = p[7];
          var r = rx > ry ? rx : ry;
          var scaleX = rx > ry ? 1 : rx / ry;
          var scaleY = rx > ry ? ry / rx : 1;
          context.translate(cx, cy);
          context.rotate(psi);
          context.scale(scaleX, scaleY);
          context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
          context.scale(1 / scaleX, 1 / scaleY);
          context.rotate(-psi);
          context.translate(-cx, -cy);
          break;
        case 'z':
          isClosed = true;
          context.closePath();
          break;
      }
    }
    if (!isClosed && !this.hasFill()) {
      context.strokeShape(this);
    } else {
      context.fillStrokeShape(this);
    }
  }
  getSelfRect() {
    var points = [];
    this.dataArray.forEach(function (data) {
      if (data.command === 'A') {
        var start = data.points[4];
        var dTheta = data.points[5];
        var end = data.points[4] + dTheta;
        var inc = Math.PI / 180.0;
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        if (dTheta < 0) {
          for (let t = start - inc; t > end; t -= inc) {
            const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
            points.push(point.x, point.y);
          }
        } else {
          for (let t = start + inc; t < end; t += inc) {
            const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
            points.push(point.x, point.y);
          }
        }
      } else if (data.command === 'C') {
        for (let t = 0.0; t <= 1; t += 0.01) {
          const point = Path.getPointOnCubicBezier(t, data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3], data.points[4], data.points[5]);
          points.push(point.x, point.y);
        }
      } else {
        points = points.concat(data.points);
      }
    });
    var minX = points[0];
    var maxX = points[0];
    var minY = points[1];
    var maxY = points[1];
    var x, y;
    for (var i = 0; i < points.length / 2; i++) {
      x = points[i * 2];
      y = points[i * 2 + 1];
      if (!isNaN(x)) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
      }
      if (!isNaN(y)) {
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
    return {
      x: Math.round(minX),
      y: Math.round(minY),
      width: Math.round(maxX - minX),
      height: Math.round(maxY - minY)
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(length) {
    var point, i = 0, ii = this.dataArray.length;
    if (!ii) {
      return null;
    }
    while (i < ii && length > this.dataArray[i].pathLength) {
      length -= this.dataArray[i].pathLength;
      ++i;
    }
    if (i === ii) {
      point = this.dataArray[i - 1].points.slice(-2);
      return {
        x: point[0],
        y: point[1]
      };
    }
    if (length < 0.01) {
      point = this.dataArray[i].points.slice(0, 2);
      return {
        x: point[0],
        y: point[1]
      };
    }
    var cp = this.dataArray[i];
    var p = cp.points;
    switch (cp.command) {
      case 'L':
        return Path.getPointOnLine(length, cp.start.x, cp.start.y, p[0], p[1]);
      case 'C':
        return Path.getPointOnCubicBezier(length / cp.pathLength, cp.start.x, cp.start.y, p[0], p[1], p[2], p[3], p[4], p[5]);
      case 'Q':
        return Path.getPointOnQuadraticBezier(length / cp.pathLength, cp.start.x, cp.start.y, p[0], p[1], p[2], p[3]);
      case 'A':
        var cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6];
        theta += dTheta * length / cp.pathLength;
        return Path.getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi);
    }
    return null;
  }
  static getLineLength(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
  static getPointOnLine(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
    if (fromX === undefined) {
      fromX = P1x;
    }
    if (fromY === undefined) {
      fromY = P1y;
    }
    var m = (P2y - P1y) / (P2x - P1x + 0.00000001);
    var run = Math.sqrt(dist * dist / (1 + m * m));
    if (P2x < P1x) {
      run *= -1;
    }
    var rise = m * run;
    var pt;
    if (P2x === P1x) {
      pt = {
        x: fromX,
        y: fromY + rise
      };
    } else if ((fromY - P1y) / (fromX - P1x + 0.00000001) === m) {
      pt = {
        x: fromX + run,
        y: fromY + rise
      };
    } else {
      var ix, iy;
      var len = this.getLineLength(P1x, P1y, P2x, P2y);
      var u = (fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y);
      u = u / (len * len);
      ix = P1x + u * (P2x - P1x);
      iy = P1y + u * (P2y - P1y);
      var pRise = this.getLineLength(fromX, fromY, ix, iy);
      var pRun = Math.sqrt(dist * dist - pRise * pRise);
      run = Math.sqrt(pRun * pRun / (1 + m * m));
      if (P2x < P1x) {
        run *= -1;
      }
      rise = m * run;
      pt = {
        x: ix + run,
        y: iy + rise
      };
    }
    return pt;
  }
  static getPointOnCubicBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
    function CB1(t) {
      return t * t * t;
    }
    function CB2(t) {
      return 3 * t * t * (1 - t);
    }
    function CB3(t) {
      return 3 * t * (1 - t) * (1 - t);
    }
    function CB4(t) {
      return (1 - t) * (1 - t) * (1 - t);
    }
    var x = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
    var y = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);
    return {
      x: x,
      y: y
    };
  }
  static getPointOnQuadraticBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
    function QB1(t) {
      return t * t;
    }
    function QB2(t) {
      return 2 * t * (1 - t);
    }
    function QB3(t) {
      return (1 - t) * (1 - t);
    }
    var x = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
    var y = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);
    return {
      x: x,
      y: y
    };
  }
  static getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
    var cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
    var pt = {
      x: rx * Math.cos(theta),
      y: ry * Math.sin(theta)
    };
    return {
      x: cx + (pt.x * cosPsi - pt.y * sinPsi),
      y: cy + (pt.x * sinPsi + pt.y * cosPsi)
    };
  }
  static parsePathData(data) {
    if (!data) {
      return [];
    }
    var cs = data;
    var cc = ['m', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z', 'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'];
    cs = cs.replace(new RegExp(' ', 'g'), ',');
    for (var n = 0; n < cc.length; n++) {
      cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
    }
    var arr = cs.split('|');
    var ca = [];
    var coords = [];
    var cpx = 0;
    var cpy = 0;
    var re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    var match;
    for (n = 1; n < arr.length; n++) {
      var str = arr[n];
      var c = str.charAt(0);
      str = str.slice(1);
      coords.length = 0;
      while (match = re.exec(str)) {
        coords.push(match[0]);
      }
      var p = [];
      for (var j = 0, jlen = coords.length; j < jlen; j++) {
        if (coords[j] === '00') {
          p.push(0, 0);
          continue;
        }
        var parsed = parseFloat(coords[j]);
        if (!isNaN(parsed)) {
          p.push(parsed);
        } else {
          p.push(0);
        }
      }
      while (p.length > 0) {
        if (isNaN(p[0])) {
          break;
        }
        var cmd = null;
        var points = [];
        var startX = cpx, startY = cpy;
        var prevCmd, ctlPtx, ctlPty;
        var rx, ry, psi, fa, fs, x1, y1;
        switch (c) {
          case 'l':
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'L':
            cpx = p.shift();
            cpy = p.shift();
            points.push(cpx, cpy);
            break;
          case 'm':
            var dx = p.shift();
            var dy = p.shift();
            cpx += dx;
            cpy += dy;
            cmd = 'M';
            if (ca.length > 2 && ca[ca.length - 1].command === 'z') {
              for (var idx = ca.length - 2; idx >= 0; idx--) {
                if (ca[idx].command === 'M') {
                  cpx = ca[idx].points[0] + dx;
                  cpy = ca[idx].points[1] + dy;
                  break;
                }
              }
            }
            points.push(cpx, cpy);
            c = 'l';
            break;
          case 'M':
            cpx = p.shift();
            cpy = p.shift();
            cmd = 'M';
            points.push(cpx, cpy);
            c = 'L';
            break;
          case 'h':
            cpx += p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'H':
            cpx = p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'v':
            cpy += p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'V':
            cpy = p.shift();
            cmd = 'L';
            points.push(cpx, cpy);
            break;
          case 'C':
            points.push(p.shift(), p.shift(), p.shift(), p.shift());
            cpx = p.shift();
            cpy = p.shift();
            points.push(cpx, cpy);
            break;
          case 'c':
            points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'C';
            points.push(cpx, cpy);
            break;
          case 'S':
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === 'C') {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, p.shift(), p.shift());
            cpx = p.shift();
            cpy = p.shift();
            cmd = 'C';
            points.push(cpx, cpy);
            break;
          case 's':
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === 'C') {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'C';
            points.push(cpx, cpy);
            break;
          case 'Q':
            points.push(p.shift(), p.shift());
            cpx = p.shift();
            cpy = p.shift();
            points.push(cpx, cpy);
            break;
          case 'q':
            points.push(cpx + p.shift(), cpy + p.shift());
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'Q';
            points.push(cpx, cpy);
            break;
          case 'T':
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === 'Q') {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx = p.shift();
            cpy = p.shift();
            cmd = 'Q';
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case 't':
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === 'Q') {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'Q';
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case 'A':
            rx = p.shift();
            ry = p.shift();
            psi = p.shift();
            fa = p.shift();
            fs = p.shift();
            x1 = cpx;
            y1 = cpy;
            cpx = p.shift();
            cpy = p.shift();
            cmd = 'A';
            points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
            break;
          case 'a':
            rx = p.shift();
            ry = p.shift();
            psi = p.shift();
            fa = p.shift();
            fs = p.shift();
            x1 = cpx;
            y1 = cpy;
            cpx += p.shift();
            cpy += p.shift();
            cmd = 'A';
            points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
            break;
        }
        ca.push({
          command: cmd || c,
          points: points,
          start: {
            x: startX,
            y: startY
          },
          pathLength: this.calcLength(startX, startY, cmd || c, points)
        });
      }
      if (c === 'z' || c === 'Z') {
        ca.push({
          command: 'z',
          points: [],
          start: undefined,
          pathLength: 0
        });
      }
    }
    return ca;
  }
  static calcLength(x, y, cmd, points) {
    var len, p1, p2, t;
    var path = Path;
    switch (cmd) {
      case 'L':
        return path.getLineLength(x, y, points[0], points[1]);
      case 'C':
        len = 0.0;
        p1 = path.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
        for (t = 0.01; t <= 1; t += 0.01) {
          p2 = path.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
          len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
          p1 = p2;
        }
        return len;
      case 'Q':
        len = 0.0;
        p1 = path.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
        for (t = 0.01; t <= 1; t += 0.01) {
          p2 = path.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
          len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
          p1 = p2;
        }
        return len;
      case 'A':
        len = 0.0;
        var start = points[4];
        var dTheta = points[5];
        var end = points[4] + dTheta;
        var inc = Math.PI / 180.0;
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
        if (dTheta < 0) {
          for (t = start - inc; t > end; t -= inc) {
            p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        } else {
          for (t = start + inc; t < end; t += inc) {
            p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        }
        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
        return len;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg) {
    var psi = psiDeg * (Math.PI / 180.0);
    var xp = Math.cos(psi) * (x1 - x2) / 2.0 + Math.sin(psi) * (y1 - y2) / 2.0;
    var yp = -1 * Math.sin(psi) * (x1 - x2) / 2.0 + Math.cos(psi) * (y1 - y2) / 2.0;
    var lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);
    if (lambda > 1) {
      rx *= Math.sqrt(lambda);
      ry *= Math.sqrt(lambda);
    }
    var f = Math.sqrt((rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) / (rx * rx * (yp * yp) + ry * ry * (xp * xp)));
    if (fa === fs) {
      f *= -1;
    }
    if (isNaN(f)) {
      f = 0;
    }
    var cxp = f * rx * yp / ry;
    var cyp = f * -ry * xp / rx;
    var cx = (x1 + x2) / 2.0 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
    var cy = (y1 + y2) / 2.0 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;
    var vMag = function (v) {
      return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
    };
    var vRatio = function (u, v) {
      return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
    };
    var vAngle = function (u, v) {
      return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
    };
    var theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
    var u = [(xp - cxp) / rx, (yp - cyp) / ry];
    var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    var dTheta = vAngle(u, v);
    if (vRatio(u, v) <= -1) {
      dTheta = Math.PI;
    }
    if (vRatio(u, v) >= 1) {
      dTheta = 0;
    }
    if (fs === 0 && dTheta > 0) {
      dTheta = dTheta - 2 * Math.PI;
    }
    if (fs === 1 && dTheta < 0) {
      dTheta = dTheta + 2 * Math.PI;
    }
    return [cx, cy, rx, ry, theta, dTheta, psi, fs];
  }
}
Path.prototype.className = 'Path';
Path.prototype._attrsAffectingSize = ['data'];
_GlobalJs._registerNode(Path);
_FactoryJs.Factory.addGetterSetter(Path, 'data');

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6az8Y":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Circle", function () {
  return Circle;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
class Circle extends _ShapeJs.Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    if (this.radius() !== width / 2) {
      this.radius(width / 2);
    }
  }
  setHeight(height) {
    if (this.radius() !== height / 2) {
      this.radius(height / 2);
    }
  }
}
Circle.prototype._centroid = true;
Circle.prototype.className = 'Circle';
Circle.prototype._attrsAffectingSize = ['radius'];
_GlobalJs._registerNode(Circle);
_FactoryJs.Factory.addGetterSetter(Circle, 'radius', 0, _ValidatorsJs.getNumberValidator());

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"2s2ZT":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Ellipse", function () {
  return Ellipse;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
class Ellipse extends _ShapeJs.Shape {
  _sceneFunc(context) {
    var rx = this.radiusX(), ry = this.radiusY();
    context.beginPath();
    context.save();
    if (rx !== ry) {
      context.scale(1, ry / rx);
    }
    context.arc(0, 0, rx, 0, Math.PI * 2, false);
    context.restore();
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(width) {
    this.radiusX(width / 2);
  }
  setHeight(height) {
    this.radiusY(height / 2);
  }
}
Ellipse.prototype.className = 'Ellipse';
Ellipse.prototype._centroid = true;
Ellipse.prototype._attrsAffectingSize = ['radiusX', 'radiusY'];
_GlobalJs._registerNode(Ellipse);
_FactoryJs.Factory.addComponentsGetterSetter(Ellipse, 'radius', ['x', 'y']);
_FactoryJs.Factory.addGetterSetter(Ellipse, 'radiusX', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Ellipse, 'radiusY', 0, _ValidatorsJs.getNumberValidator());

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4Ent7":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Image", function () {
  return Image;
});
var _UtilJs = require('../Util.js');
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
class Image extends _ShapeJs.Shape {
  constructor(attrs) {
    super(attrs);
    this.on('imageChange.konva', () => {
      this._setImageLoad();
    });
    this._setImageLoad();
  }
  _setImageLoad() {
    const image = this.image();
    if (image && image.complete) {
      return;
    }
    if (image && image.readyState === 4) {
      return;
    }
    if (image && image['addEventListener']) {
      image['addEventListener']('load', () => {
        this._requestDraw();
      });
    }
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(true);
  }
  _sceneFunc(context) {
    const width = this.getWidth();
    const height = this.getHeight();
    const image = this.attrs.image;
    let params;
    if (image) {
      const cropWidth = this.attrs.cropWidth;
      const cropHeight = this.attrs.cropHeight;
      if (cropWidth && cropHeight) {
        params = [image, this.cropX(), this.cropY(), cropWidth, cropHeight, 0, 0, width, height];
      } else {
        params = [image, 0, 0, width, height];
      }
    }
    if (this.hasFill() || this.hasStroke()) {
      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }
    if (image) {
      context.drawImage.apply(context, params);
    }
  }
  _hitFunc(context) {
    var width = this.width(), height = this.height();
    context.beginPath();
    context.rect(0, 0, width, height);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    var _a, _b;
    return (_a = this.attrs.width) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.width;
  }
  getHeight() {
    var _a, _b;
    return (_a = this.attrs.height) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.height;
  }
  static fromURL(url, callback) {
    var img = _UtilJs.Util.createImageElement();
    img.onload = function () {
      var image = new Image({
        image: img
      });
      callback(image);
    };
    img.crossOrigin = 'Anonymous';
    img.src = url;
  }
}
Image.prototype.className = 'Image';
_GlobalJs._registerNode(Image);
_FactoryJs.Factory.addGetterSetter(Image, 'image');
_FactoryJs.Factory.addComponentsGetterSetter(Image, 'crop', ['x', 'y', 'width', 'height']);
_FactoryJs.Factory.addGetterSetter(Image, 'cropX', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Image, 'cropY', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Image, 'cropWidth', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Image, 'cropHeight', 0, _ValidatorsJs.getNumberValidator());

},{"../Util.js":"27sKe","../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6zroH":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Label", function () {
  return Label;
});
_parcelHelpers.export(exports, "Tag", function () {
  return Tag;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _GroupJs = require('../Group.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
var ATTR_CHANGE_LIST = ['fontFamily', 'fontSize', 'fontStyle', 'padding', 'lineHeight', 'text', 'width', 'height'], CHANGE_KONVA = 'Change.konva', NONE = 'none', UP = 'up', RIGHT = 'right', DOWN = 'down', LEFT = 'left', attrChangeListLen = ATTR_CHANGE_LIST.length;
class Label extends _GroupJs.Group {
  constructor(config) {
    super(config);
    this.on('add.konva', function (evt) {
      this._addListeners(evt.child);
      this._sync();
    });
  }
  getText() {
    return this.find('Text')[0];
  }
  getTag() {
    return this.find('Tag')[0];
  }
  _addListeners(text) {
    var that = this, n;
    var func = function () {
      that._sync();
    };
    for (n = 0; n < attrChangeListLen; n++) {
      text.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, func);
    }
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var text = this.getText(), tag = this.getTag(), width, height, pointerDirection, pointerWidth, x, y, pointerHeight;
    if (text && tag) {
      width = text.width();
      height = text.height();
      pointerDirection = tag.pointerDirection();
      pointerWidth = tag.pointerWidth();
      pointerHeight = tag.pointerHeight();
      x = 0;
      y = 0;
      switch (pointerDirection) {
        case UP:
          x = width / 2;
          y = -1 * pointerHeight;
          break;
        case RIGHT:
          x = width + pointerWidth;
          y = height / 2;
          break;
        case DOWN:
          x = width / 2;
          y = height + pointerHeight;
          break;
        case LEFT:
          x = -1 * pointerWidth;
          y = height / 2;
          break;
      }
      tag.setAttrs({
        x: -1 * x,
        y: -1 * y,
        width: width,
        height: height
      });
      text.setAttrs({
        x: -1 * x,
        y: -1 * y
      });
    }
  }
}
Label.prototype.className = 'Label';
_GlobalJs._registerNode(Label);
class Tag extends _ShapeJs.Shape {
  _sceneFunc(context) {
    var width = this.width(), height = this.height(), pointerDirection = this.pointerDirection(), pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), cornerRadius = this.cornerRadius();
    let topLeft = 0;
    let topRight = 0;
    let bottomLeft = 0;
    let bottomRight = 0;
    if (typeof cornerRadius === 'number') {
      topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
    } else {
      topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
      topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
      bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
      bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
    }
    context.beginPath();
    context.moveTo(topLeft, 0);
    if (pointerDirection === UP) {
      context.lineTo((width - pointerWidth) / 2, 0);
      context.lineTo(width / 2, -1 * pointerHeight);
      context.lineTo((width + pointerWidth) / 2, 0);
    }
    context.lineTo(width - topRight, 0);
    context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
    if (pointerDirection === RIGHT) {
      context.lineTo(width, (height - pointerHeight) / 2);
      context.lineTo(width + pointerWidth, height / 2);
      context.lineTo(width, (height + pointerHeight) / 2);
    }
    context.lineTo(width, height - bottomRight);
    context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
    if (pointerDirection === DOWN) {
      context.lineTo((width + pointerWidth) / 2, height);
      context.lineTo(width / 2, height + pointerHeight);
      context.lineTo((width - pointerWidth) / 2, height);
    }
    context.lineTo(bottomLeft, height);
    context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
    if (pointerDirection === LEFT) {
      context.lineTo(0, (height + pointerHeight) / 2);
      context.lineTo(-1 * pointerWidth, height / 2);
      context.lineTo(0, (height - pointerHeight) / 2);
    }
    context.lineTo(0, topLeft);
    context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getSelfRect() {
    var x = 0, y = 0, pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), direction = this.pointerDirection(), width = this.width(), height = this.height();
    if (direction === UP) {
      y -= pointerHeight;
      height += pointerHeight;
    } else if (direction === DOWN) {
      height += pointerHeight;
    } else if (direction === LEFT) {
      x -= pointerWidth * 1.5;
      width += pointerWidth;
    } else if (direction === RIGHT) {
      width += pointerWidth * 1.5;
    }
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  }
}
Tag.prototype.className = 'Tag';
_GlobalJs._registerNode(Tag);
_FactoryJs.Factory.addGetterSetter(Tag, 'pointerDirection', NONE);
_FactoryJs.Factory.addGetterSetter(Tag, 'pointerWidth', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Tag, 'pointerHeight', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Tag, 'cornerRadius', 0, _ValidatorsJs.getNumberOrArrayOfNumbersValidator(4));

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Group.js":"796CV","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4F7lt":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Rect", function () {
  return Rect;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _GlobalJs = require('../Global.js');
var _ValidatorsJs = require('../Validators.js');
class Rect extends _ShapeJs.Shape {
  _sceneFunc(context) {
    var cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
    context.beginPath();
    if (!cornerRadius) {
      context.rect(0, 0, width, height);
    } else {
      let topLeft = 0;
      let topRight = 0;
      let bottomLeft = 0;
      let bottomRight = 0;
      if (typeof cornerRadius === 'number') {
        topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
      } else {
        topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
        topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
        bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
        bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
      }
      context.moveTo(topLeft, 0);
      context.lineTo(width - topRight, 0);
      context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
      context.lineTo(width, height - bottomRight);
      context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
      context.lineTo(bottomLeft, height);
      context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
      context.lineTo(0, topLeft);
      context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
}
Rect.prototype.className = 'Rect';
_GlobalJs._registerNode(Rect);
_FactoryJs.Factory.addGetterSetter(Rect, 'cornerRadius', 0, _ValidatorsJs.getNumberOrArrayOfNumbersValidator(4));

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Global.js":"6qmUL","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"D0Yqr":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "RegularPolygon", function () {
  return RegularPolygon;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
class RegularPolygon extends _ShapeJs.Shape {
  _sceneFunc(context) {
    const points = this._getPoints();
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (var n = 1; n < points.length; n++) {
      context.lineTo(points[n].x, points[n].y);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
  _getPoints() {
    const sides = this.attrs.sides;
    const radius = this.attrs.radius || 0;
    const points = [];
    for (var n = 0; n < sides; n++) {
      points.push({
        x: radius * Math.sin(n * 2 * Math.PI / sides),
        y: -1 * radius * Math.cos(n * 2 * Math.PI / sides)
      });
    }
    return points;
  }
  getSelfRect() {
    const points = this._getPoints();
    var minX = points[0].x;
    var maxX = points[0].y;
    var minY = points[0].x;
    var maxY = points[0].y;
    points.forEach(point => {
      minX = Math.min(minX, point.x);
      maxX = Math.max(maxX, point.x);
      minY = Math.min(minY, point.y);
      maxY = Math.max(maxY, point.y);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    this.radius(width / 2);
  }
  setHeight(height) {
    this.radius(height / 2);
  }
}
RegularPolygon.prototype.className = 'RegularPolygon';
RegularPolygon.prototype._centroid = true;
RegularPolygon.prototype._attrsAffectingSize = ['radius'];
_GlobalJs._registerNode(RegularPolygon);
_FactoryJs.Factory.addGetterSetter(RegularPolygon, 'radius', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(RegularPolygon, 'sides', 0, _ValidatorsJs.getNumberValidator());

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"40VNr":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Ring", function () {
  return Ring;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
var PIx2 = Math.PI * 2;
class Ring extends _ShapeJs.Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.innerRadius(), 0, PIx2, false);
    context.moveTo(this.outerRadius(), 0);
    context.arc(0, 0, this.outerRadius(), PIx2, 0, true);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
}
Ring.prototype.className = 'Ring';
Ring.prototype._centroid = true;
Ring.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius'];
_GlobalJs._registerNode(Ring);
_FactoryJs.Factory.addGetterSetter(Ring, 'innerRadius', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Ring, 'outerRadius', 0, _ValidatorsJs.getNumberValidator());

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6uw1S":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Sprite", function () {
  return Sprite;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _AnimationJs = require('../Animation.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
class Sprite extends _ShapeJs.Shape {
  constructor(config) {
    super(config);
    this._updated = true;
    this.anim = new _AnimationJs.Animation(() => {
      var updated = this._updated;
      this._updated = false;
      return updated;
    });
    this.on('animationChange.konva', function () {
      this.frameIndex(0);
    });
    this.on('frameIndexChange.konva', function () {
      this._updated = true;
    });
    this.on('frameRateChange.konva', function () {
      if (!this.anim.isRunning()) {
        return;
      }
      clearInterval(this.interval);
      this._setInterval();
    });
  }
  _sceneFunc(context) {
    var anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), x = set[ix4 + 0], y = set[ix4 + 1], width = set[ix4 + 2], height = set[ix4 + 3], image = this.image();
    if (this.hasFill() || this.hasStroke()) {
      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }
    if (image) {
      if (offsets) {
        var offset = offsets[anim], ix2 = index * 2;
        context.drawImage(image, x, y, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
      } else {
        context.drawImage(image, x, y, width, height, 0, 0, width, height);
      }
    }
  }
  _hitFunc(context) {
    var anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), width = set[ix4 + 2], height = set[ix4 + 3];
    context.beginPath();
    if (offsets) {
      var offset = offsets[anim];
      var ix2 = index * 2;
      context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
    } else {
      context.rect(0, 0, width, height);
    }
    context.closePath();
    context.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(true);
  }
  _setInterval() {
    var that = this;
    this.interval = setInterval(function () {
      that._updateIndex();
    }, 1000 / this.frameRate());
  }
  start() {
    if (this.isRunning()) {
      return;
    }
    var layer = this.getLayer();
    this.anim.setLayers(layer);
    this._setInterval();
    this.anim.start();
  }
  stop() {
    this.anim.stop();
    clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var index = this.frameIndex(), animation = this.animation(), animations = this.animations(), anim = animations[animation], len = anim.length / 4;
    if (index < len - 1) {
      this.frameIndex(index + 1);
    } else {
      this.frameIndex(0);
    }
  }
}
Sprite.prototype.className = 'Sprite';
_GlobalJs._registerNode(Sprite);
_FactoryJs.Factory.addGetterSetter(Sprite, 'animation');
_FactoryJs.Factory.addGetterSetter(Sprite, 'animations');
_FactoryJs.Factory.addGetterSetter(Sprite, 'frameOffsets');
_FactoryJs.Factory.addGetterSetter(Sprite, 'image');
_FactoryJs.Factory.addGetterSetter(Sprite, 'frameIndex', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Sprite, 'frameRate', 17, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.backCompat(Sprite, {
  index: 'frameIndex',
  getIndex: 'getFrameIndex',
  setIndex: 'setFrameIndex'
});

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Animation.js":"4PMju","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"7sU9T":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Star", function () {
  return Star;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
class Star extends _ShapeJs.Shape {
  _sceneFunc(context) {
    var innerRadius = this.innerRadius(), outerRadius = this.outerRadius(), numPoints = this.numPoints();
    context.beginPath();
    context.moveTo(0, 0 - outerRadius);
    for (var n = 1; n < numPoints * 2; n++) {
      var radius = n % 2 === 0 ? outerRadius : innerRadius;
      var x = radius * Math.sin(n * Math.PI / numPoints);
      var y = -1 * radius * Math.cos(n * Math.PI / numPoints);
      context.lineTo(x, y);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
}
Star.prototype.className = 'Star';
Star.prototype._centroid = true;
Star.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius'];
_GlobalJs._registerNode(Star);
_FactoryJs.Factory.addGetterSetter(Star, 'numPoints', 5, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Star, 'innerRadius', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Star, 'outerRadius', 0, _ValidatorsJs.getNumberValidator());

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6fN4w":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "stringToArray", function () {
  return stringToArray;
});
_parcelHelpers.export(exports, "Text", function () {
  return Text;
});
var _UtilJs = require('../Util.js');
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
function stringToArray(string) {
  return Array.from(string);
}
var AUTO = 'auto', CENTER = 'center', JUSTIFY = 'justify', CHANGE_KONVA = 'Change.konva', CONTEXT_2D = '2d', DASH = '-', LEFT = 'left', TEXT = 'text', TEXT_UPPER = 'Text', TOP = 'top', BOTTOM = 'bottom', MIDDLE = 'middle', NORMAL = 'normal', PX_SPACE = 'px ', SPACE = ' ', RIGHT = 'right', WORD = 'word', CHAR = 'char', NONE = 'none', ELLIPSIS = '…', ATTR_CHANGE_LIST = ['fontFamily', 'fontSize', 'fontStyle', 'fontVariant', 'padding', 'align', 'verticalAlign', 'lineHeight', 'text', 'width', 'height', 'wrap', 'ellipsis', 'letterSpacing'], attrChangeListLen = ATTR_CHANGE_LIST.length;
function normalizeFontFamily(fontFamily) {
  return fontFamily.split(',').map(family => {
    family = family.trim();
    const hasSpace = family.indexOf(' ') >= 0;
    const hasQuotes = family.indexOf('"') >= 0 || family.indexOf("'") >= 0;
    if (hasSpace && !hasQuotes) {
      family = `"${family}"`;
    }
    return family;
  }).join(', ');
}
var dummyContext;
function getDummyContext() {
  if (dummyContext) {
    return dummyContext;
  }
  dummyContext = _UtilJs.Util.createCanvasElement().getContext(CONTEXT_2D);
  return dummyContext;
}
function _fillFunc(context) {
  context.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function _strokeFunc(context) {
  context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function checkDefaultFill(config) {
  config = config || ({});
  if (!config.fillLinearGradientColorStops && !config.fillRadialGradientColorStops && !config.fillPatternImage) {
    config.fill = config.fill || 'black';
  }
  return config;
}
class Text extends _ShapeJs.Shape {
  constructor(config) {
    super(checkDefaultFill(config));
    this._partialTextX = 0;
    this._partialTextY = 0;
    for (var n = 0; n < attrChangeListLen; n++) {
      this.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, this._setTextData);
    }
    this._setTextData();
  }
  _sceneFunc(context) {
    var textArr = this.textArr, textArrLen = textArr.length;
    if (!this.text()) {
      return;
    }
    var padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, verticalAlign = this.verticalAlign(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), fill = this.fill(), textDecoration = this.textDecoration(), shouldUnderline = textDecoration.indexOf('underline') !== -1, shouldLineThrough = textDecoration.indexOf('line-through') !== -1, n;
    var translateY = 0;
    var translateY = lineHeightPx / 2;
    var lineTranslateX = 0;
    var lineTranslateY = 0;
    context.setAttr('font', this._getContextFont());
    context.setAttr('textBaseline', MIDDLE);
    context.setAttr('textAlign', LEFT);
    if (verticalAlign === MIDDLE) {
      alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
    } else if (verticalAlign === BOTTOM) {
      alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
    }
    context.translate(padding, alignY + padding);
    for (n = 0; n < textArrLen; n++) {
      var lineTranslateX = 0;
      var lineTranslateY = 0;
      var obj = textArr[n], text = obj.text, width = obj.width, lastLine = n !== textArrLen - 1, spacesNumber, oneWord, lineWidth;
      context.save();
      if (align === RIGHT) {
        lineTranslateX += totalWidth - width - padding * 2;
      } else if (align === CENTER) {
        lineTranslateX += (totalWidth - width - padding * 2) / 2;
      }
      if (shouldUnderline) {
        context.save();
        context.beginPath();
        context.moveTo(lineTranslateX, translateY + lineTranslateY + Math.round(fontSize / 2));
        spacesNumber = text.split(' ').length - 1;
        oneWord = spacesNumber === 0;
        lineWidth = align === JUSTIFY && lastLine && !oneWord ? totalWidth - padding * 2 : width;
        context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY + Math.round(fontSize / 2));
        context.lineWidth = fontSize / 15;
        context.strokeStyle = fill;
        context.stroke();
        context.restore();
      }
      if (shouldLineThrough) {
        context.save();
        context.beginPath();
        context.moveTo(lineTranslateX, translateY + lineTranslateY);
        spacesNumber = text.split(' ').length - 1;
        oneWord = spacesNumber === 0;
        lineWidth = align === JUSTIFY && lastLine && !oneWord ? totalWidth - padding * 2 : width;
        context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY);
        context.lineWidth = fontSize / 15;
        context.strokeStyle = fill;
        context.stroke();
        context.restore();
      }
      if (letterSpacing !== 0 || align === JUSTIFY) {
        spacesNumber = text.split(' ').length - 1;
        var array = stringToArray(text);
        for (var li = 0; li < array.length; li++) {
          var letter = array[li];
          if (letter === ' ' && n !== textArrLen - 1 && align === JUSTIFY) {
            lineTranslateX += (totalWidth - padding * 2 - width) / spacesNumber;
          }
          this._partialTextX = lineTranslateX;
          this._partialTextY = translateY + lineTranslateY;
          this._partialText = letter;
          context.fillStrokeShape(this);
          lineTranslateX += this.measureSize(letter).width + letterSpacing;
        }
      } else {
        this._partialTextX = lineTranslateX;
        this._partialTextY = translateY + lineTranslateY;
        this._partialText = text;
        context.fillStrokeShape(this);
      }
      context.restore();
      if (textArrLen > 1) {
        translateY += lineHeightPx;
      }
    }
  }
  _hitFunc(context) {
    var width = this.getWidth(), height = this.getHeight();
    context.beginPath();
    context.rect(0, 0, width, height);
    context.closePath();
    context.fillStrokeShape(this);
  }
  setText(text) {
    var str = _UtilJs.Util._isString(text) ? text : text === null || text === undefined ? '' : text + '';
    this._setAttr(TEXT, str);
    return this;
  }
  getWidth() {
    var isAuto = this.attrs.width === AUTO || this.attrs.width === undefined;
    return isAuto ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var isAuto = this.attrs.height === AUTO || this.attrs.height === undefined;
    return isAuto ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    _UtilJs.Util.warn('text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.');
    return this.textHeight;
  }
  measureSize(text) {
    var _context = getDummyContext(), fontSize = this.fontSize(), metrics;
    _context.save();
    _context.font = this._getContextFont();
    metrics = _context.measureText(text);
    _context.restore();
    return {
      width: metrics.width,
      height: fontSize
    };
  }
  _getContextFont() {
    return this.fontStyle() + SPACE + this.fontVariant() + SPACE + (this.fontSize() + PX_SPACE) + normalizeFontFamily(this.fontFamily());
  }
  _addTextLine(line) {
    if (this.align() === JUSTIFY) {
      line = line.trim();
    }
    var width = this._getTextWidth(line);
    return this.textArr.push({
      text: line,
      width: width
    });
  }
  _getTextWidth(text) {
    var letterSpacing = this.letterSpacing();
    var length = text.length;
    return getDummyContext().measureText(text).width + (length ? letterSpacing * (length - 1) : 0);
  }
  _setTextData() {
    var lines = this.text().split('\n'), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== undefined, fixedHeight = height !== AUTO && height !== undefined, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), shouldWrap = wrap !== NONE, wrapAtWord = wrap !== CHAR && shouldWrap, shouldAddEllipsis = this.ellipsis();
    this.textArr = [];
    getDummyContext().font = this._getContextFont();
    var additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
    for (var i = 0, max = lines.length; i < max; ++i) {
      var line = lines[i];
      var lineWidth = this._getTextWidth(line);
      if (fixedWidth && lineWidth > maxWidth) {
        while (line.length > 0) {
          var low = 0, high = line.length, match = '', matchWidth = 0;
          while (low < high) {
            var mid = low + high >>> 1, substr = line.slice(0, mid + 1), substrWidth = this._getTextWidth(substr) + additionalWidth;
            if (substrWidth <= maxWidth) {
              low = mid + 1;
              match = substr;
              matchWidth = substrWidth;
            } else {
              high = mid;
            }
          }
          if (match) {
            if (wrapAtWord) {
              var wrapIndex;
              var nextChar = line[match.length];
              var nextIsSpaceOrDash = nextChar === SPACE || nextChar === DASH;
              if (nextIsSpaceOrDash && matchWidth <= maxWidth) {
                wrapIndex = match.length;
              } else {
                wrapIndex = Math.max(match.lastIndexOf(SPACE), match.lastIndexOf(DASH)) + 1;
              }
              if (wrapIndex > 0) {
                low = wrapIndex;
                match = match.slice(0, low);
                matchWidth = this._getTextWidth(match);
              }
            }
            match = match.trimRight();
            this._addTextLine(match);
            textWidth = Math.max(textWidth, matchWidth);
            currentHeightPx += lineHeightPx;
            if (!shouldWrap || fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
              var lastLine = this.textArr[this.textArr.length - 1];
              if (lastLine) {
                if (shouldAddEllipsis) {
                  var haveSpace = this._getTextWidth(lastLine.text + ELLIPSIS) < maxWidth;
                  if (!haveSpace) {
                    lastLine.text = lastLine.text.slice(0, lastLine.text.length - 3);
                  }
                  this.textArr.splice(this.textArr.length - 1, 1);
                  this._addTextLine(lastLine.text + ELLIPSIS);
                }
              }
              break;
            }
            line = line.slice(low);
            line = line.trimLeft();
            if (line.length > 0) {
              lineWidth = this._getTextWidth(line);
              if (lineWidth <= maxWidth) {
                this._addTextLine(line);
                currentHeightPx += lineHeightPx;
                textWidth = Math.max(textWidth, lineWidth);
                break;
              }
            }
          } else {
            break;
          }
        }
      } else {
        this._addTextLine(line);
        currentHeightPx += lineHeightPx;
        textWidth = Math.max(textWidth, lineWidth);
      }
      if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
        break;
      }
    }
    this.textHeight = fontSize;
    this.textWidth = textWidth;
  }
  getStrokeScaleEnabled() {
    return true;
  }
}
Text.prototype._fillFunc = _fillFunc;
Text.prototype._strokeFunc = _strokeFunc;
Text.prototype.className = TEXT_UPPER;
Text.prototype._attrsAffectingSize = ['text', 'fontSize', 'padding', 'wrap', 'lineHeight', 'letterSpacing'];
_GlobalJs._registerNode(Text);
_FactoryJs.Factory.overWriteSetter(Text, 'width', _ValidatorsJs.getNumberOrAutoValidator());
_FactoryJs.Factory.overWriteSetter(Text, 'height', _ValidatorsJs.getNumberOrAutoValidator());
_FactoryJs.Factory.addGetterSetter(Text, 'fontFamily', 'Arial');
_FactoryJs.Factory.addGetterSetter(Text, 'fontSize', 12, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Text, 'fontStyle', NORMAL);
_FactoryJs.Factory.addGetterSetter(Text, 'fontVariant', NORMAL);
_FactoryJs.Factory.addGetterSetter(Text, 'padding', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Text, 'align', LEFT);
_FactoryJs.Factory.addGetterSetter(Text, 'verticalAlign', TOP);
_FactoryJs.Factory.addGetterSetter(Text, 'lineHeight', 1, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Text, 'wrap', WORD);
_FactoryJs.Factory.addGetterSetter(Text, 'ellipsis', false, _ValidatorsJs.getBooleanValidator());
_FactoryJs.Factory.addGetterSetter(Text, 'letterSpacing', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Text, 'text', '', _ValidatorsJs.getStringValidator());
_FactoryJs.Factory.addGetterSetter(Text, 'textDecoration', '');

},{"../Util.js":"27sKe","../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"5nhrG":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "TextPath", function () {
  return TextPath;
});
var _UtilJs = require('../Util.js');
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _PathJs = require('./Path.js');
var _TextJs = require('./Text.js');
var _ValidatorsJs = require('../Validators.js');
var _GlobalJs = require('../Global.js');
var EMPTY_STRING = '', NORMAL = 'normal';
function _fillFunc(context) {
  context.fillText(this.partialText, 0, 0);
}
function _strokeFunc(context) {
  context.strokeText(this.partialText, 0, 0);
}
class TextPath extends _ShapeJs.Shape {
  constructor(config) {
    super(config);
    this.dummyCanvas = _UtilJs.Util.createCanvasElement();
    this.dataArray = [];
    this.dataArray = _PathJs.Path.parsePathData(this.attrs.data);
    this.on('dataChange.konva', function () {
      this.dataArray = _PathJs.Path.parsePathData(this.attrs.data);
      this._setTextData();
    });
    this.on('textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva', this._setTextData);
    this._setTextData();
  }
  _sceneFunc(context) {
    context.setAttr('font', this._getContextFont());
    context.setAttr('textBaseline', this.textBaseline());
    context.setAttr('textAlign', 'left');
    context.save();
    var textDecoration = this.textDecoration();
    var fill = this.fill();
    var fontSize = this.fontSize();
    var glyphInfo = this.glyphInfo;
    if (textDecoration === 'underline') {
      context.beginPath();
    }
    for (var i = 0; i < glyphInfo.length; i++) {
      context.save();
      var p0 = glyphInfo[i].p0;
      context.translate(p0.x, p0.y);
      context.rotate(glyphInfo[i].rotation);
      this.partialText = glyphInfo[i].text;
      context.fillStrokeShape(this);
      if (textDecoration === 'underline') {
        if (i === 0) {
          context.moveTo(0, fontSize / 2 + 1);
        }
        context.lineTo(fontSize, fontSize / 2 + 1);
      }
      context.restore();
    }
    if (textDecoration === 'underline') {
      context.strokeStyle = fill;
      context.lineWidth = fontSize / 20;
      context.stroke();
    }
    context.restore();
  }
  _hitFunc(context) {
    context.beginPath();
    var glyphInfo = this.glyphInfo;
    if (glyphInfo.length >= 1) {
      var p0 = glyphInfo[0].p0;
      context.moveTo(p0.x, p0.y);
    }
    for (var i = 0; i < glyphInfo.length; i++) {
      var p1 = glyphInfo[i].p1;
      context.lineTo(p1.x, p1.y);
    }
    context.setAttr('lineWidth', this.fontSize());
    context.setAttr('strokeStyle', this.colorKey);
    context.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    _UtilJs.Util.warn('text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.');
    return this.textHeight;
  }
  setText(text) {
    return _TextJs.Text.prototype.setText.call(this, text);
  }
  _getContextFont() {
    return _TextJs.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(text) {
    var dummyCanvas = this.dummyCanvas;
    var _context = dummyCanvas.getContext('2d');
    _context.save();
    _context.font = this._getContextFont();
    var metrics = _context.measureText(text);
    _context.restore();
    return {
      width: metrics.width,
      height: parseInt(this.attrs.fontSize, 10)
    };
  }
  _setTextData() {
    var that = this;
    var size = this._getTextSize(this.attrs.text);
    var letterSpacing = this.letterSpacing();
    var align = this.align();
    var kerningFunc = this.kerningFunc();
    this.textWidth = size.width;
    this.textHeight = size.height;
    var textFullWidth = Math.max(this.textWidth + ((this.attrs.text || '').length - 1) * letterSpacing, 0);
    this.glyphInfo = [];
    var fullPathWidth = 0;
    for (var l = 0; l < that.dataArray.length; l++) {
      if (that.dataArray[l].pathLength > 0) {
        fullPathWidth += that.dataArray[l].pathLength;
      }
    }
    var offset = 0;
    if (align === 'center') {
      offset = Math.max(0, fullPathWidth / 2 - textFullWidth / 2);
    }
    if (align === 'right') {
      offset = Math.max(0, fullPathWidth - textFullWidth);
    }
    var charArr = _TextJs.stringToArray(this.text());
    var spacesNumber = this.text().split(' ').length - 1;
    var p0, p1, pathCmd;
    var pIndex = -1;
    var currentT = 0;
    var getNextPathSegment = function () {
      currentT = 0;
      var pathData = that.dataArray;
      for (var j = pIndex + 1; j < pathData.length; j++) {
        if (pathData[j].pathLength > 0) {
          pIndex = j;
          return pathData[j];
        } else if (pathData[j].command === 'M') {
          p0 = {
            x: pathData[j].points[0],
            y: pathData[j].points[1]
          };
        }
      }
      return {};
    };
    var findSegmentToFitCharacter = function (c) {
      var glyphWidth = that._getTextSize(c).width + letterSpacing;
      if (c === ' ' && align === 'justify') {
        glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
      }
      var currLen = 0;
      var attempts = 0;
      p1 = undefined;
      while (Math.abs(glyphWidth - currLen) / glyphWidth > 0.01 && attempts < 20) {
        attempts++;
        var cumulativePathLength = currLen;
        while (pathCmd === undefined) {
          pathCmd = getNextPathSegment();
          if (pathCmd && cumulativePathLength + pathCmd.pathLength < glyphWidth) {
            cumulativePathLength += pathCmd.pathLength;
            pathCmd = undefined;
          }
        }
        if (pathCmd === ({}) || p0 === undefined) {
          return undefined;
        }
        var needNewSegment = false;
        switch (pathCmd.command) {
          case 'L':
            if (_PathJs.Path.getLineLength(p0.x, p0.y, pathCmd.points[0], pathCmd.points[1]) > glyphWidth) {
              p1 = _PathJs.Path.getPointOnLine(glyphWidth, p0.x, p0.y, pathCmd.points[0], pathCmd.points[1], p0.x, p0.y);
            } else {
              pathCmd = undefined;
            }
            break;
          case 'A':
            var start = pathCmd.points[4];
            var dTheta = pathCmd.points[5];
            var end = pathCmd.points[4] + dTheta;
            if (currentT === 0) {
              currentT = start + 0.00000001;
            } else if (glyphWidth > currLen) {
              currentT += Math.PI / 180.0 * dTheta / Math.abs(dTheta);
            } else {
              currentT -= Math.PI / 360.0 * dTheta / Math.abs(dTheta);
            }
            if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
              currentT = end;
              needNewSegment = true;
            }
            p1 = _PathJs.Path.getPointOnEllipticalArc(pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], currentT, pathCmd.points[6]);
            break;
          case 'C':
            if (currentT === 0) {
              if (glyphWidth > pathCmd.pathLength) {
                currentT = 0.00000001;
              } else {
                currentT = glyphWidth / pathCmd.pathLength;
              }
            } else if (glyphWidth > currLen) {
              currentT += (glyphWidth - currLen) / pathCmd.pathLength / 2;
            } else {
              currentT = Math.max(currentT - (currLen - glyphWidth) / pathCmd.pathLength / 2, 0);
            }
            if (currentT > 1.0) {
              currentT = 1.0;
              needNewSegment = true;
            }
            p1 = _PathJs.Path.getPointOnCubicBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], pathCmd.points[4], pathCmd.points[5]);
            break;
          case 'Q':
            if (currentT === 0) {
              currentT = glyphWidth / pathCmd.pathLength;
            } else if (glyphWidth > currLen) {
              currentT += (glyphWidth - currLen) / pathCmd.pathLength;
            } else {
              currentT -= (currLen - glyphWidth) / pathCmd.pathLength;
            }
            if (currentT > 1.0) {
              currentT = 1.0;
              needNewSegment = true;
            }
            p1 = _PathJs.Path.getPointOnQuadraticBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3]);
            break;
        }
        if (p1 !== undefined) {
          currLen = _PathJs.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
        }
        if (needNewSegment) {
          needNewSegment = false;
          pathCmd = undefined;
        }
      }
    };
    var testChar = 'C';
    var glyphWidth = that._getTextSize(testChar).width + letterSpacing;
    var lettersInOffset = offset / glyphWidth - 1;
    for (var k = 0; k < lettersInOffset; k++) {
      findSegmentToFitCharacter(testChar);
      if (p0 === undefined || p1 === undefined) {
        break;
      }
      p0 = p1;
    }
    for (var i = 0; i < charArr.length; i++) {
      findSegmentToFitCharacter(charArr[i]);
      if (p0 === undefined || p1 === undefined) {
        break;
      }
      var width = _PathJs.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
      var kern = 0;
      if (kerningFunc) {
        try {
          kern = kerningFunc(charArr[i - 1], charArr[i]) * this.fontSize();
        } catch (e) {
          kern = 0;
        }
      }
      p0.x += kern;
      p1.x += kern;
      this.textWidth += kern;
      var midpoint = _PathJs.Path.getPointOnLine(kern + width / 2.0, p0.x, p0.y, p1.x, p1.y);
      var rotation = Math.atan2(p1.y - p0.y, p1.x - p0.x);
      this.glyphInfo.push({
        transposeX: midpoint.x,
        transposeY: midpoint.y,
        text: charArr[i],
        rotation: rotation,
        p0: p0,
        p1: p1
      });
      p0 = p1;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    var points = [];
    this.glyphInfo.forEach(function (info) {
      points.push(info.p0.x);
      points.push(info.p0.y);
      points.push(info.p1.x);
      points.push(info.p1.y);
    });
    var minX = points[0] || 0;
    var maxX = points[0] || 0;
    var minY = points[1] || 0;
    var maxY = points[1] || 0;
    var x, y;
    for (var i = 0; i < points.length / 2; i++) {
      x = points[i * 2];
      y = points[i * 2 + 1];
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
    var fontSize = this.fontSize();
    return {
      x: minX - fontSize / 2,
      y: minY - fontSize / 2,
      width: maxX - minX + fontSize,
      height: maxY - minY + fontSize
    };
  }
}
TextPath.prototype._fillFunc = _fillFunc;
TextPath.prototype._strokeFunc = _strokeFunc;
TextPath.prototype._fillFuncHit = _fillFunc;
TextPath.prototype._strokeFuncHit = _strokeFunc;
TextPath.prototype.className = 'TextPath';
TextPath.prototype._attrsAffectingSize = ['text', 'fontSize', 'data'];
_GlobalJs._registerNode(TextPath);
_FactoryJs.Factory.addGetterSetter(TextPath, 'data');
_FactoryJs.Factory.addGetterSetter(TextPath, 'fontFamily', 'Arial');
_FactoryJs.Factory.addGetterSetter(TextPath, 'fontSize', 12, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(TextPath, 'fontStyle', NORMAL);
_FactoryJs.Factory.addGetterSetter(TextPath, 'align', 'left');
_FactoryJs.Factory.addGetterSetter(TextPath, 'letterSpacing', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(TextPath, 'textBaseline', 'middle');
_FactoryJs.Factory.addGetterSetter(TextPath, 'fontVariant', NORMAL);
_FactoryJs.Factory.addGetterSetter(TextPath, 'text', EMPTY_STRING);
_FactoryJs.Factory.addGetterSetter(TextPath, 'textDecoration', null);
_FactoryJs.Factory.addGetterSetter(TextPath, 'kerningFunc', null);

},{"../Util.js":"27sKe","../Factory.js":"2GdoH","../Shape.js":"4xDL7","./Path.js":"5Mvr2","./Text.js":"6fN4w","../Validators.js":"2KBE7","../Global.js":"6qmUL","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"30rm5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Transformer", function () {
  return Transformer;
});
var _UtilJs = require('../Util.js');
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ShapeJs = require('../Shape.js');
var _RectJs = require('./Rect.js');
var _GroupJs = require('../Group.js');
var _GlobalJs = require('../Global.js');
var _ValidatorsJs = require('../Validators.js');
var EVENTS_NAME = 'tr-konva';
var ATTR_CHANGE_LIST = ['resizeEnabledChange', 'rotateAnchorOffsetChange', 'rotateEnabledChange', 'enabledAnchorsChange', 'anchorSizeChange', 'borderEnabledChange', 'borderStrokeChange', 'borderStrokeWidthChange', 'borderDashChange', 'anchorStrokeChange', 'anchorStrokeWidthChange', 'anchorFillChange', 'anchorCornerRadiusChange', 'ignoreStrokeChange'].map(e => e + `.${EVENTS_NAME}`).join(' ');
var NODES_RECT = 'nodesRect';
var TRANSFORM_CHANGE_STR = ['widthChange', 'heightChange', 'scaleXChange', 'scaleYChange', 'skewXChange', 'skewYChange', 'rotationChange', 'offsetXChange', 'offsetYChange', 'transformsEnabledChange', 'strokeWidthChange'].map(e => e + `.${EVENTS_NAME}`).join(' ');
var ANGLES = {
  'top-left': -45,
  'top-center': 0,
  'top-right': 45,
  'middle-right': -90,
  'middle-left': 90,
  'bottom-left': -135,
  'bottom-center': 180,
  'bottom-right': 135
};
const TOUCH_DEVICE = ('ontouchstart' in _GlobalJs.Konva._global);
function getCursor(anchorName, rad) {
  if (anchorName === 'rotater') {
    return 'crosshair';
  }
  rad += _UtilJs.Util.degToRad(ANGLES[anchorName] || 0);
  var angle = (_UtilJs.Util.radToDeg(rad) % 360 + 360) % 360;
  if (_UtilJs.Util._inRange(angle, 315 + 22.5, 360) || _UtilJs.Util._inRange(angle, 0, 22.5)) {
    return 'ns-resize';
  } else if (_UtilJs.Util._inRange(angle, 45 - 22.5, 45 + 22.5)) {
    return 'nesw-resize';
  } else if (_UtilJs.Util._inRange(angle, 90 - 22.5, 90 + 22.5)) {
    return 'ew-resize';
  } else if (_UtilJs.Util._inRange(angle, 135 - 22.5, 135 + 22.5)) {
    return 'nwse-resize';
  } else if (_UtilJs.Util._inRange(angle, 180 - 22.5, 180 + 22.5)) {
    return 'ns-resize';
  } else if (_UtilJs.Util._inRange(angle, 225 - 22.5, 225 + 22.5)) {
    return 'nesw-resize';
  } else if (_UtilJs.Util._inRange(angle, 270 - 22.5, 270 + 22.5)) {
    return 'ew-resize';
  } else if (_UtilJs.Util._inRange(angle, 315 - 22.5, 315 + 22.5)) {
    return 'nwse-resize';
  } else {
    _UtilJs.Util.error('Transformer has unknown angle for cursor detection: ' + angle);
    return 'pointer';
  }
}
var ANCHORS_NAMES = ['top-left', 'top-center', 'top-right', 'middle-right', 'middle-left', 'bottom-left', 'bottom-center', 'bottom-right'];
var MAX_SAFE_INTEGER = 100000000;
function getCenter(shape) {
  return {
    x: shape.x + shape.width / 2 * Math.cos(shape.rotation) + shape.height / 2 * Math.sin(-shape.rotation),
    y: shape.y + shape.height / 2 * Math.cos(shape.rotation) + shape.width / 2 * Math.sin(shape.rotation)
  };
}
function rotateAroundPoint(shape, angleRad, point) {
  const x = point.x + (shape.x - point.x) * Math.cos(angleRad) - (shape.y - point.y) * Math.sin(angleRad);
  const y = point.y + (shape.x - point.x) * Math.sin(angleRad) + (shape.y - point.y) * Math.cos(angleRad);
  return Object.assign(Object.assign({}, shape), {
    rotation: shape.rotation + angleRad,
    x,
    y
  });
}
function rotateAroundCenter(shape, deltaRad) {
  const center = getCenter(shape);
  return rotateAroundPoint(shape, deltaRad, center);
}
function getSnap(snaps, newRotationRad, tol) {
  let snapped = newRotationRad;
  for (let i = 0; i < snaps.length; i++) {
    const angle = _GlobalJs.Konva.getAngle(snaps[i]);
    const absDiff = Math.abs(angle - newRotationRad) % (Math.PI * 2);
    const dif = Math.min(absDiff, Math.PI * 2 - absDiff);
    if (dif < tol) {
      snapped = angle;
    }
  }
  return snapped;
}
class Transformer extends _GroupJs.Group {
  constructor(config) {
    super(config);
    this._transforming = false;
    this._createElements();
    this._handleMouseMove = this._handleMouseMove.bind(this);
    this._handleMouseUp = this._handleMouseUp.bind(this);
    this.update = this.update.bind(this);
    this.on(ATTR_CHANGE_LIST, this.update);
    if (this.getNode()) {
      this.update();
    }
  }
  attachTo(node) {
    this.setNode(node);
    return this;
  }
  setNode(node) {
    _UtilJs.Util.warn('tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.');
    return this.setNodes([node]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  setNodes(nodes = []) {
    if (this._nodes && this._nodes.length) {
      this.detach();
    }
    this._nodes = nodes;
    if (nodes.length === 1 && this.useSingleNodeRotation()) {
      this.rotation(nodes[0].getAbsoluteRotation());
    } else {
      this.rotation(0);
    }
    this._nodes.forEach(node => {
      const additionalEvents = node._attrsAffectingSize.map(prop => prop + 'Change.' + EVENTS_NAME).join(' ');
      const onChange = () => {
        if (this.nodes().length === 1 && this.useSingleNodeRotation()) {
          this.rotation(this.nodes()[0].getAbsoluteRotation());
        }
        this._resetTransformCache();
        if (!this._transforming && !this.isDragging()) {
          this.update();
        }
      };
      node.on(additionalEvents, onChange);
      node.on(TRANSFORM_CHANGE_STR, onChange);
      node.on(`absoluteTransformChange.${EVENTS_NAME}`, onChange);
      node.on(`xChange.${EVENTS_NAME} yChange.${EVENTS_NAME}`, onChange);
      this._proxyDrag(node);
    });
    this._resetTransformCache();
    var elementsCreated = !!this.findOne('.top-left');
    if (elementsCreated) {
      this.update();
    }
    return this;
  }
  _proxyDrag(node) {
    let lastPos;
    node.on(`dragstart.${EVENTS_NAME}`, e => {
      lastPos = node.getAbsolutePosition();
      if (!this.isDragging() && node !== this.findOne('.back')) {
        this.startDrag(e, false);
      }
    });
    node.on(`dragmove.${EVENTS_NAME}`, e => {
      if (!lastPos) {
        return;
      }
      const abs = node.getAbsolutePosition();
      const dx = abs.x - lastPos.x;
      const dy = abs.y - lastPos.y;
      this.nodes().forEach(otherNode => {
        if (otherNode === node) {
          return;
        }
        if (otherNode.isDragging()) {
          return;
        }
        const otherAbs = otherNode.getAbsolutePosition();
        otherNode.setAbsolutePosition({
          x: otherAbs.x + dx,
          y: otherAbs.y + dy
        });
        otherNode.startDrag(e);
      });
      lastPos = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    if (this._nodes) {
      this._nodes.forEach(node => {
        node.off('.' + EVENTS_NAME);
      });
    }
    this._nodes = [];
    this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(NODES_RECT);
    this._clearCache('transform');
    this._clearSelfAndDescendantCache('absoluteTransform');
  }
  _getNodeRect() {
    return this._getCache(NODES_RECT, this.__getNodeRect);
  }
  __getNodeShape(node, rot = this.rotation(), relative) {
    var rect = node.getClientRect({
      skipTransform: true,
      skipShadow: true,
      skipStroke: this.ignoreStroke()
    });
    var absScale = node.getAbsoluteScale(relative);
    var absPos = node.getAbsolutePosition(relative);
    var dx = rect.x * absScale.x - node.offsetX() * absScale.x;
    var dy = rect.y * absScale.y - node.offsetY() * absScale.y;
    const rotation = (_GlobalJs.Konva.getAngle(node.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2);
    const box = {
      x: absPos.x + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
      y: absPos.y + dy * Math.cos(rotation) + dx * Math.sin(rotation),
      width: rect.width * absScale.x,
      height: rect.height * absScale.y,
      rotation: rotation
    };
    return rotateAroundPoint(box, -_GlobalJs.Konva.getAngle(rot), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    var node = this.getNode();
    if (!node) {
      return {
        x: -MAX_SAFE_INTEGER,
        y: -MAX_SAFE_INTEGER,
        width: 0,
        height: 0,
        rotation: 0
      };
    }
    const totalPoints = [];
    this.nodes().map(node => {
      const box = node.getClientRect({
        skipTransform: true,
        skipShadow: true,
        skipStroke: this.ignoreStroke()
      });
      var points = [{
        x: box.x,
        y: box.y
      }, {
        x: box.x + box.width,
        y: box.y
      }, {
        x: box.x + box.width,
        y: box.y + box.height
      }, {
        x: box.x,
        y: box.y + box.height
      }];
      var trans = node.getAbsoluteTransform();
      points.forEach(function (point) {
        var transformed = trans.point(point);
        totalPoints.push(transformed);
      });
    });
    const tr = new _UtilJs.Transform();
    tr.rotate(-_GlobalJs.Konva.getAngle(this.rotation()));
    var minX, minY, maxX, maxY;
    totalPoints.forEach(function (point) {
      var transformed = tr.point(point);
      if (minX === undefined) {
        minX = maxX = transformed.x;
        minY = maxY = transformed.y;
      }
      minX = Math.min(minX, transformed.x);
      minY = Math.min(minY, transformed.y);
      maxX = Math.max(maxX, transformed.x);
      maxY = Math.max(maxY, transformed.y);
    });
    tr.invert();
    const p = tr.point({
      x: minX,
      y: minY
    });
    return {
      x: p.x,
      y: p.y,
      width: maxX - minX,
      height: maxY - minY,
      rotation: _GlobalJs.Konva.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack();
    ANCHORS_NAMES.forEach((function (name) {
      this._createAnchor(name);
    }).bind(this));
    this._createAnchor('rotater');
  }
  _createAnchor(name) {
    var anchor = new _RectJs.Rect({
      stroke: 'rgb(0, 161, 255)',
      fill: 'white',
      strokeWidth: 1,
      name: name + ' _anchor',
      dragDistance: 0,
      draggable: true,
      hitStrokeWidth: TOUCH_DEVICE ? 10 : 'auto'
    });
    var self = this;
    anchor.on('mousedown touchstart', function (e) {
      self._handleMouseDown(e);
    });
    anchor.on('dragstart', e => {
      anchor.stopDrag();
      e.cancelBubble = true;
    });
    anchor.on('dragend', e => {
      e.cancelBubble = true;
    });
    anchor.on('mouseenter', () => {
      var rad = _GlobalJs.Konva.getAngle(this.rotation());
      var cursor = getCursor(name, rad);
      anchor.getStage().content && (anchor.getStage().content.style.cursor = cursor);
      this._cursorChange = true;
    });
    anchor.on('mouseout', () => {
      anchor.getStage().content && (anchor.getStage().content.style.cursor = '');
      this._cursorChange = false;
    });
    this.add(anchor);
  }
  _createBack() {
    var back = new _ShapeJs.Shape({
      name: 'back',
      width: 0,
      height: 0,
      draggable: true,
      sceneFunc(ctx) {
        var tr = this.getParent();
        var padding = tr.padding();
        ctx.beginPath();
        ctx.rect(-padding, -padding, this.width() + padding * 2, this.height() + padding * 2);
        ctx.moveTo(this.width() / 2, -padding);
        if (tr.rotateEnabled()) {
          ctx.lineTo(this.width() / 2, -tr.rotateAnchorOffset() * _UtilJs.Util._sign(this.height()) - padding);
        }
        ctx.fillStrokeShape(this);
      },
      hitFunc: (ctx, shape) => {
        if (!this.shouldOverdrawWholeArea()) {
          return;
        }
        var padding = this.padding();
        ctx.beginPath();
        ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
        ctx.fillStrokeShape(shape);
      }
    });
    this.add(back);
    this._proxyDrag(back);
    back.on('dragstart', e => {
      e.cancelBubble = true;
    });
    back.on('dragmove', e => {
      e.cancelBubble = true;
    });
    back.on('dragend', e => {
      e.cancelBubble = true;
    });
    this.on('dragmove', e => {
      this.update();
    });
  }
  _handleMouseDown(e) {
    this._movingAnchorName = e.target.name().split(' ')[0];
    var attrs = this._getNodeRect();
    var width = attrs.width;
    var height = attrs.height;
    var hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    this.sin = Math.abs(height / hypotenuse);
    this.cos = Math.abs(width / hypotenuse);
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', this._handleMouseMove);
      window.addEventListener('touchmove', this._handleMouseMove);
      window.addEventListener('mouseup', this._handleMouseUp, true);
      window.addEventListener('touchend', this._handleMouseUp, true);
    }
    this._transforming = true;
    var ap = e.target.getAbsolutePosition();
    var pos = e.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: pos.x - ap.x,
      y: pos.y - ap.y
    };
    this._fire('transformstart', {
      evt: e,
      target: this.getNode()
    });
    this._nodes.forEach(target => {
      target._fire('transformstart', {
        evt: e,
        target
      });
    });
  }
  _handleMouseMove(e) {
    var x, y, newHypotenuse;
    var anchorNode = this.findOne('.' + this._movingAnchorName);
    var stage = anchorNode.getStage();
    stage.setPointersPositions(e);
    const pp = stage.getPointerPosition();
    var newNodePos = {
      x: pp.x - this._anchorDragOffset.x,
      y: pp.y - this._anchorDragOffset.y
    };
    const oldAbs = anchorNode.getAbsolutePosition();
    anchorNode.setAbsolutePosition(newNodePos);
    const newAbs = anchorNode.getAbsolutePosition();
    if (oldAbs.x === newAbs.x && oldAbs.y === newAbs.y) {
      return;
    }
    if (this._movingAnchorName === 'rotater') {
      var attrs = this._getNodeRect();
      x = anchorNode.x() - attrs.width / 2;
      y = -anchorNode.y() + attrs.height / 2;
      let delta = Math.atan2(-y, x) + Math.PI / 2;
      if (attrs.height < 0) {
        delta -= Math.PI;
      }
      var oldRotation = _GlobalJs.Konva.getAngle(this.rotation());
      const newRotation = oldRotation + delta;
      const tol = _GlobalJs.Konva.getAngle(this.rotationSnapTolerance());
      const snappedRot = getSnap(this.rotationSnaps(), newRotation, tol);
      const diff = snappedRot - attrs.rotation;
      const shape = rotateAroundCenter(attrs, diff);
      this._fitNodesInto(shape, e);
      return;
    }
    var keepProportion = this.keepRatio() || e.shiftKey;
    var centeredScaling = this.centeredScaling() || e.altKey;
    if (this._movingAnchorName === 'top-left') {
      if (keepProportion) {
        var comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne('.bottom-right').x(),
          y: this.findOne('.bottom-right').y()
        };
        newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
        var reverseX = this.findOne('.top-left').x() > comparePoint.x ? -1 : 1;
        var reverseY = this.findOne('.top-left').y() > comparePoint.y ? -1 : 1;
        x = newHypotenuse * this.cos * reverseX;
        y = newHypotenuse * this.sin * reverseY;
        this.findOne('.top-left').x(comparePoint.x - x);
        this.findOne('.top-left').y(comparePoint.y - y);
      }
    } else if (this._movingAnchorName === 'top-center') {
      this.findOne('.top-left').y(anchorNode.y());
    } else if (this._movingAnchorName === 'top-right') {
      if (keepProportion) {
        var comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne('.bottom-left').x(),
          y: this.findOne('.bottom-left').y()
        };
        newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
        var reverseX = this.findOne('.top-right').x() < comparePoint.x ? -1 : 1;
        var reverseY = this.findOne('.top-right').y() > comparePoint.y ? -1 : 1;
        x = newHypotenuse * this.cos * reverseX;
        y = newHypotenuse * this.sin * reverseY;
        this.findOne('.top-right').x(comparePoint.x + x);
        this.findOne('.top-right').y(comparePoint.y - y);
      }
      var pos = anchorNode.position();
      this.findOne('.top-left').y(pos.y);
      this.findOne('.bottom-right').x(pos.x);
    } else if (this._movingAnchorName === 'middle-left') {
      this.findOne('.top-left').x(anchorNode.x());
    } else if (this._movingAnchorName === 'middle-right') {
      this.findOne('.bottom-right').x(anchorNode.x());
    } else if (this._movingAnchorName === 'bottom-left') {
      if (keepProportion) {
        var comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne('.top-right').x(),
          y: this.findOne('.top-right').y()
        };
        newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
        var reverseX = comparePoint.x < anchorNode.x() ? -1 : 1;
        var reverseY = anchorNode.y() < comparePoint.y ? -1 : 1;
        x = newHypotenuse * this.cos * reverseX;
        y = newHypotenuse * this.sin * reverseY;
        anchorNode.x(comparePoint.x - x);
        anchorNode.y(comparePoint.y + y);
      }
      pos = anchorNode.position();
      this.findOne('.top-left').x(pos.x);
      this.findOne('.bottom-right').y(pos.y);
    } else if (this._movingAnchorName === 'bottom-center') {
      this.findOne('.bottom-right').y(anchorNode.y());
    } else if (this._movingAnchorName === 'bottom-right') {
      if (keepProportion) {
        var comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne('.top-left').x(),
          y: this.findOne('.top-left').y()
        };
        newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
        var reverseX = this.findOne('.bottom-right').x() < comparePoint.x ? -1 : 1;
        var reverseY = this.findOne('.bottom-right').y() < comparePoint.y ? -1 : 1;
        x = newHypotenuse * this.cos * reverseX;
        y = newHypotenuse * this.sin * reverseY;
        this.findOne('.bottom-right').x(comparePoint.x + x);
        this.findOne('.bottom-right').y(comparePoint.y + y);
      }
    } else {
      console.error(new Error('Wrong position argument of selection resizer: ' + this._movingAnchorName));
    }
    var centeredScaling = this.centeredScaling() || e.altKey;
    if (centeredScaling) {
      var topLeft = this.findOne('.top-left');
      var bottomRight = this.findOne('.bottom-right');
      var topOffsetX = topLeft.x();
      var topOffsetY = topLeft.y();
      var bottomOffsetX = this.getWidth() - bottomRight.x();
      var bottomOffsetY = this.getHeight() - bottomRight.y();
      bottomRight.move({
        x: -topOffsetX,
        y: -topOffsetY
      });
      topLeft.move({
        x: bottomOffsetX,
        y: bottomOffsetY
      });
    }
    var absPos = this.findOne('.top-left').getAbsolutePosition();
    x = absPos.x;
    y = absPos.y;
    var width = this.findOne('.bottom-right').x() - this.findOne('.top-left').x();
    var height = this.findOne('.bottom-right').y() - this.findOne('.top-left').y();
    this._fitNodesInto({
      x: x,
      y: y,
      width: width,
      height: height,
      rotation: _GlobalJs.Konva.getAngle(this.rotation())
    }, e);
  }
  _handleMouseUp(e) {
    this._removeEvents(e);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(e) {
    if (this._transforming) {
      this._transforming = false;
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', this._handleMouseMove);
        window.removeEventListener('touchmove', this._handleMouseMove);
        window.removeEventListener('mouseup', this._handleMouseUp, true);
        window.removeEventListener('touchend', this._handleMouseUp, true);
      }
      var node = this.getNode();
      this._fire('transformend', {
        evt: e,
        target: node
      });
      if (node) {
        this._nodes.forEach(target => {
          target._fire('transformend', {
            evt: e,
            target
          });
        });
      }
      this._movingAnchorName = null;
    }
  }
  _fitNodesInto(newAttrs, evt) {
    var oldAttrs = this._getNodeRect();
    const minSize = 1;
    if (_UtilJs.Util._inRange(newAttrs.width, -this.padding() * 2 - minSize, minSize)) {
      this.update();
      return;
    }
    if (_UtilJs.Util._inRange(newAttrs.height, -this.padding() * 2 - minSize, minSize)) {
      this.update();
      return;
    }
    const allowNegativeScale = this.flipEnabled();
    var t = new _UtilJs.Transform();
    t.rotate(_GlobalJs.Konva.getAngle(this.rotation()));
    if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf('left') >= 0) {
      const offset = t.point({
        x: -this.padding() * 2,
        y: 0
      });
      newAttrs.x += offset.x;
      newAttrs.y += offset.y;
      newAttrs.width += this.padding() * 2;
      this._movingAnchorName = this._movingAnchorName.replace('left', 'right');
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      if (!allowNegativeScale) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf('right') >= 0) {
      const offset = t.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace('right', 'left');
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.width += this.padding() * 2;
      if (!allowNegativeScale) {
        this.update();
        return;
      }
    }
    if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf('top') >= 0) {
      const offset = t.point({
        x: 0,
        y: -this.padding() * 2
      });
      newAttrs.x += offset.x;
      newAttrs.y += offset.y;
      this._movingAnchorName = this._movingAnchorName.replace('top', 'bottom');
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.height += this.padding() * 2;
      if (!allowNegativeScale) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf('bottom') >= 0) {
      const offset = t.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace('bottom', 'top');
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.height += this.padding() * 2;
      if (!allowNegativeScale) {
        this.update();
        return;
      }
    }
    if (this.boundBoxFunc()) {
      const bounded = this.boundBoxFunc()(oldAttrs, newAttrs);
      if (bounded) {
        newAttrs = bounded;
      } else {
        _UtilJs.Util.warn('boundBoxFunc returned falsy. You should return new bound rect from it!');
      }
    }
    const baseSize = 10000000;
    const oldTr = new _UtilJs.Transform();
    oldTr.translate(oldAttrs.x, oldAttrs.y);
    oldTr.rotate(oldAttrs.rotation);
    oldTr.scale(oldAttrs.width / baseSize, oldAttrs.height / baseSize);
    const newTr = new _UtilJs.Transform();
    newTr.translate(newAttrs.x, newAttrs.y);
    newTr.rotate(newAttrs.rotation);
    newTr.scale(newAttrs.width / baseSize, newAttrs.height / baseSize);
    const delta = newTr.multiply(oldTr.invert());
    this._nodes.forEach(node => {
      var _a;
      const parentTransform = node.getParent().getAbsoluteTransform();
      const localTransform = node.getTransform().copy();
      localTransform.translate(node.offsetX(), node.offsetY());
      const newLocalTransform = new _UtilJs.Transform();
      newLocalTransform.multiply(parentTransform.copy().invert()).multiply(delta).multiply(parentTransform).multiply(localTransform);
      const attrs = newLocalTransform.decompose();
      node.setAttrs(attrs);
      this._fire('transform', {
        evt: evt,
        target: node
      });
      node._fire('transform', {
        evt: evt,
        target: node
      });
      (_a = node.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
    });
    this.rotation(_UtilJs.Util._getRotation(newAttrs.rotation));
    this._resetTransformCache();
    this.update();
    this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache();
    this.update();
  }
  _batchChangeChild(selector, attrs) {
    const anchor = this.findOne(selector);
    anchor.setAttrs(attrs);
  }
  update() {
    var _a;
    var attrs = this._getNodeRect();
    this.rotation(_UtilJs.Util._getRotation(attrs.rotation));
    var width = attrs.width;
    var height = attrs.height;
    var enabledAnchors = this.enabledAnchors();
    var resizeEnabled = this.resizeEnabled();
    var padding = this.padding();
    var anchorSize = this.anchorSize();
    this.find('._anchor').forEach(node => {
      node.setAttrs({
        width: anchorSize,
        height: anchorSize,
        offsetX: anchorSize / 2,
        offsetY: anchorSize / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    });
    this._batchChangeChild('.top-left', {
      x: 0,
      y: 0,
      offsetX: anchorSize / 2 + padding,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf('top-left') >= 0
    });
    this._batchChangeChild('.top-center', {
      x: width / 2,
      y: 0,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf('top-center') >= 0
    });
    this._batchChangeChild('.top-right', {
      x: width,
      y: 0,
      offsetX: anchorSize / 2 - padding,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf('top-right') >= 0
    });
    this._batchChangeChild('.middle-left', {
      x: 0,
      y: height / 2,
      offsetX: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf('middle-left') >= 0
    });
    this._batchChangeChild('.middle-right', {
      x: width,
      y: height / 2,
      offsetX: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf('middle-right') >= 0
    });
    this._batchChangeChild('.bottom-left', {
      x: 0,
      y: height,
      offsetX: anchorSize / 2 + padding,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf('bottom-left') >= 0
    });
    this._batchChangeChild('.bottom-center', {
      x: width / 2,
      y: height,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf('bottom-center') >= 0
    });
    this._batchChangeChild('.bottom-right', {
      x: width,
      y: height,
      offsetX: anchorSize / 2 - padding,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf('bottom-right') >= 0
    });
    this._batchChangeChild('.rotater', {
      x: width / 2,
      y: -this.rotateAnchorOffset() * _UtilJs.Util._sign(height) - padding,
      visible: this.rotateEnabled()
    });
    this._batchChangeChild('.back', {
      width: width,
      height: height,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    (_a = this.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      var anchorNode = this.findOne('.' + this._movingAnchorName);
      if (anchorNode) {
        anchorNode.stopDrag();
      }
    }
  }
  destroy() {
    if (this.getStage() && this._cursorChange) {
      this.getStage().content && (this.getStage().content.style.cursor = '');
    }
    _GroupJs.Group.prototype.destroy.call(this);
    this.detach();
    this._removeEvents();
    return this;
  }
  toObject() {
    return _NodeJs.Node.prototype.toObject.call(this);
  }
}
function validateAnchors(val) {
  if (!(val instanceof Array)) {
    _UtilJs.Util.warn('enabledAnchors value should be an array');
  }
  if (val instanceof Array) {
    val.forEach(function (name) {
      if (ANCHORS_NAMES.indexOf(name) === -1) {
        _UtilJs.Util.warn('Unknown anchor name: ' + name + '. Available names are: ' + ANCHORS_NAMES.join(', '));
      }
    });
  }
  return val || [];
}
Transformer.prototype.className = 'Transformer';
_GlobalJs._registerNode(Transformer);
_FactoryJs.Factory.addGetterSetter(Transformer, 'enabledAnchors', ANCHORS_NAMES, validateAnchors);
_FactoryJs.Factory.addGetterSetter(Transformer, 'flipEnabled', true, _ValidatorsJs.getBooleanValidator());
_FactoryJs.Factory.addGetterSetter(Transformer, 'resizeEnabled', true);
_FactoryJs.Factory.addGetterSetter(Transformer, 'anchorSize', 10, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Transformer, 'rotateEnabled', true);
_FactoryJs.Factory.addGetterSetter(Transformer, 'rotationSnaps', []);
_FactoryJs.Factory.addGetterSetter(Transformer, 'rotateAnchorOffset', 50, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Transformer, 'rotationSnapTolerance', 5, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Transformer, 'borderEnabled', true);
_FactoryJs.Factory.addGetterSetter(Transformer, 'anchorStroke', 'rgb(0, 161, 255)');
_FactoryJs.Factory.addGetterSetter(Transformer, 'anchorStrokeWidth', 1, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Transformer, 'anchorFill', 'white');
_FactoryJs.Factory.addGetterSetter(Transformer, 'anchorCornerRadius', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Transformer, 'borderStroke', 'rgb(0, 161, 255)');
_FactoryJs.Factory.addGetterSetter(Transformer, 'borderStrokeWidth', 1, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Transformer, 'borderDash');
_FactoryJs.Factory.addGetterSetter(Transformer, 'keepRatio', true);
_FactoryJs.Factory.addGetterSetter(Transformer, 'centeredScaling', false);
_FactoryJs.Factory.addGetterSetter(Transformer, 'ignoreStroke', false);
_FactoryJs.Factory.addGetterSetter(Transformer, 'padding', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Transformer, 'node');
_FactoryJs.Factory.addGetterSetter(Transformer, 'nodes');
_FactoryJs.Factory.addGetterSetter(Transformer, 'boundBoxFunc');
_FactoryJs.Factory.addGetterSetter(Transformer, 'shouldOverdrawWholeArea', false);
_FactoryJs.Factory.addGetterSetter(Transformer, 'useSingleNodeRotation', true);
_FactoryJs.Factory.backCompat(Transformer, {
  lineEnabled: 'borderEnabled',
  rotateHandlerOffset: 'rotateAnchorOffset',
  enabledHandlers: 'enabledAnchors'
});

},{"../Util.js":"27sKe","../Factory.js":"2GdoH","../Node.js":"5H2JD","../Shape.js":"4xDL7","./Rect.js":"4F7lt","../Group.js":"796CV","../Global.js":"6qmUL","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"52jtI":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Wedge", function () {
  return Wedge;
});
var _FactoryJs = require('../Factory.js');
var _ShapeJs = require('../Shape.js');
var _GlobalJs = require('../Global.js');
var _ValidatorsJs = require('../Validators.js');
class Wedge extends _ShapeJs.Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.radius(), 0, _GlobalJs.Konva.getAngle(this.angle()), this.clockwise());
    context.lineTo(0, 0);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    this.radius(width / 2);
  }
  setHeight(height) {
    this.radius(height / 2);
  }
}
Wedge.prototype.className = 'Wedge';
Wedge.prototype._centroid = true;
Wedge.prototype._attrsAffectingSize = ['radius'];
_GlobalJs._registerNode(Wedge);
_FactoryJs.Factory.addGetterSetter(Wedge, 'radius', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Wedge, 'angle', 0, _ValidatorsJs.getNumberValidator());
_FactoryJs.Factory.addGetterSetter(Wedge, 'clockwise', false);
_FactoryJs.Factory.backCompat(Wedge, {
  angleDeg: 'angle',
  getAngleDeg: 'getAngle',
  setAngleDeg: 'setAngle'
});

},{"../Factory.js":"2GdoH","../Shape.js":"4xDL7","../Global.js":"6qmUL","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"2Luqo":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Blur", function () {
  return Blur;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}
var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function filterGaussBlurRGBA(imageData, radius) {
  var pixels = imageData.data, width = imageData.width, height = imageData.height;
  var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
  var div = radius + radius + 1, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2, stackStart = new BlurStack(), stackEnd = null, stack = stackStart, stackIn = null, stackOut = null, mul_sum = mul_table[radius], shg_sum = shg_table[radius];
  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }
  stack.next = stackStart;
  yw = yi = 0;
  for (y = 0; y < height; y++) {
    r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }
    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[p + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++) {
      pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
      if (pa !== 0) {
        pa = 255 / pa;
        pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
        pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
        pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p];
      g_in_sum += stackIn.g = pixels[p + 1];
      b_in_sum += stackIn.b = pixels[p + 2];
      a_in_sum += stackIn.a = pixels[p + 3];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      a_sum += a_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;
      stackOut = stackOut.next;
      yi += 4;
    }
    yw += width;
  }
  for (x = 0; x < width; x++) {
    g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }
    yp = width;
    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;
      stack = stack.next;
      if (i < heightMinus1) {
        yp += width;
      }
    }
    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;
      if (pa > 0) {
        pa = 255 / pa;
        pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
        pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
        pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
      } else {
        pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p];
      g_sum += g_in_sum += stackIn.g = pixels[p + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p + 2];
      a_sum += a_in_sum += stackIn.a = pixels[p + 3];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }
}
const Blur = function Blur(imageData) {
  var radius = Math.round(this.blurRadius());
  if (radius > 0) {
    filterGaussBlurRGBA(imageData, radius);
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'blurRadius', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"3iEMA":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Brighten", function () {
  return Brighten;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const Brighten = function (imageData) {
  var brightness = this.brightness() * 255, data = imageData.data, len = data.length, i;
  for (i = 0; i < len; i += 4) {
    data[i] += brightness;
    data[i + 1] += brightness;
    data[i + 2] += brightness;
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'brightness', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"18bkP":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Contrast", function () {
  return Contrast;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const Contrast = function (imageData) {
  var adjust = Math.pow((this.contrast() + 100) / 100, 2);
  var data = imageData.data, nPixels = data.length, red = 150, green = 150, blue = 150, i;
  for (i = 0; i < nPixels; i += 4) {
    red = data[i];
    green = data[i + 1];
    blue = data[i + 2];
    red /= 255;
    red -= 0.5;
    red *= adjust;
    red += 0.5;
    red *= 255;
    green /= 255;
    green -= 0.5;
    green *= adjust;
    green += 0.5;
    green *= 255;
    blue /= 255;
    blue -= 0.5;
    blue *= adjust;
    blue += 0.5;
    blue *= 255;
    red = red < 0 ? 0 : red > 255 ? 255 : red;
    green = green < 0 ? 0 : green > 255 ? 255 : green;
    blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;
    data[i] = red;
    data[i + 1] = green;
    data[i + 2] = blue;
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'contrast', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"7gWC1":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Emboss", function () {
  return Emboss;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _UtilJs = require('../Util.js');
var _ValidatorsJs = require('../Validators.js');
const Emboss = function (imageData) {
  var strength = this.embossStrength() * 10, greyLevel = this.embossWhiteLevel() * 255, direction = this.embossDirection(), blend = this.embossBlend(), dirY = 0, dirX = 0, data = imageData.data, w = imageData.width, h = imageData.height, w4 = w * 4, y = h;
  switch (direction) {
    case 'top-left':
      dirY = -1;
      dirX = -1;
      break;
    case 'top':
      dirY = -1;
      dirX = 0;
      break;
    case 'top-right':
      dirY = -1;
      dirX = 1;
      break;
    case 'right':
      dirY = 0;
      dirX = 1;
      break;
    case 'bottom-right':
      dirY = 1;
      dirX = 1;
      break;
    case 'bottom':
      dirY = 1;
      dirX = 0;
      break;
    case 'bottom-left':
      dirY = 1;
      dirX = -1;
      break;
    case 'left':
      dirY = 0;
      dirX = -1;
      break;
    default:
      _UtilJs.Util.error('Unknown emboss direction: ' + direction);
  }
  do {
    var offsetY = (y - 1) * w4;
    var otherY = dirY;
    if (y + otherY < 1) {
      otherY = 0;
    }
    if (y + otherY > h) {
      otherY = 0;
    }
    var offsetYOther = (y - 1 + otherY) * w * 4;
    var x = w;
    do {
      var offset = offsetY + (x - 1) * 4;
      var otherX = dirX;
      if (x + otherX < 1) {
        otherX = 0;
      }
      if (x + otherX > w) {
        otherX = 0;
      }
      var offsetOther = offsetYOther + (x - 1 + otherX) * 4;
      var dR = data[offset] - data[offsetOther];
      var dG = data[offset + 1] - data[offsetOther + 1];
      var dB = data[offset + 2] - data[offsetOther + 2];
      var dif = dR;
      var absDif = dif > 0 ? dif : -dif;
      var absG = dG > 0 ? dG : -dG;
      var absB = dB > 0 ? dB : -dB;
      if (absG > absDif) {
        dif = dG;
      }
      if (absB > absDif) {
        dif = dB;
      }
      dif *= strength;
      if (blend) {
        var r = data[offset] + dif;
        var g = data[offset + 1] + dif;
        var b = data[offset + 2] + dif;
        data[offset] = r > 255 ? 255 : r < 0 ? 0 : r;
        data[offset + 1] = g > 255 ? 255 : g < 0 ? 0 : g;
        data[offset + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
      } else {
        var grey = greyLevel - dif;
        if (grey < 0) {
          grey = 0;
        } else if (grey > 255) {
          grey = 255;
        }
        data[offset] = data[offset + 1] = data[offset + 2] = grey;
      }
    } while (--x);
  } while (--y);
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'embossStrength', 0.5, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'embossWhiteLevel', 0.5, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'embossDirection', 'top-left', null, _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'embossBlend', false, null, _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Util.js":"27sKe","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"y2UaJ":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Enhance", function () {
  return Enhance;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
function remap(fromValue, fromMin, fromMax, toMin, toMax) {
  var fromRange = fromMax - fromMin, toRange = toMax - toMin, toValue;
  if (fromRange === 0) {
    return toMin + toRange / 2;
  }
  if (toRange === 0) {
    return toMin;
  }
  toValue = (fromValue - fromMin) / fromRange;
  toValue = toRange * toValue + toMin;
  return toValue;
}
const Enhance = function (imageData) {
  var data = imageData.data, nSubPixels = data.length, rMin = data[0], rMax = rMin, r, gMin = data[1], gMax = gMin, g, bMin = data[2], bMax = bMin, b, i;
  var enhanceAmount = this.enhance();
  if (enhanceAmount === 0) {
    return;
  }
  for (i = 0; i < nSubPixels; i += 4) {
    r = data[i + 0];
    if (r < rMin) {
      rMin = r;
    } else if (r > rMax) {
      rMax = r;
    }
    g = data[i + 1];
    if (g < gMin) {
      gMin = g;
    } else if (g > gMax) {
      gMax = g;
    }
    b = data[i + 2];
    if (b < bMin) {
      bMin = b;
    } else if (b > bMax) {
      bMax = b;
    }
  }
  if (rMax === rMin) {
    rMax = 255;
    rMin = 0;
  }
  if (gMax === gMin) {
    gMax = 255;
    gMin = 0;
  }
  if (bMax === bMin) {
    bMax = 255;
    bMin = 0;
  }
  var rMid, rGoalMax, rGoalMin, gMid, gGoalMax, gGoalMin, bMid, bGoalMax, bGoalMin;
  if (enhanceAmount > 0) {
    rGoalMax = rMax + enhanceAmount * (255 - rMax);
    rGoalMin = rMin - enhanceAmount * (rMin - 0);
    gGoalMax = gMax + enhanceAmount * (255 - gMax);
    gGoalMin = gMin - enhanceAmount * (gMin - 0);
    bGoalMax = bMax + enhanceAmount * (255 - bMax);
    bGoalMin = bMin - enhanceAmount * (bMin - 0);
  } else {
    rMid = (rMax + rMin) * 0.5;
    rGoalMax = rMax + enhanceAmount * (rMax - rMid);
    rGoalMin = rMin + enhanceAmount * (rMin - rMid);
    gMid = (gMax + gMin) * 0.5;
    gGoalMax = gMax + enhanceAmount * (gMax - gMid);
    gGoalMin = gMin + enhanceAmount * (gMin - gMid);
    bMid = (bMax + bMin) * 0.5;
    bGoalMax = bMax + enhanceAmount * (bMax - bMid);
    bGoalMin = bMin + enhanceAmount * (bMin - bMid);
  }
  for (i = 0; i < nSubPixels; i += 4) {
    data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
    data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
    data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'enhance', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4Sr0E":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Grayscale", function () {
  return Grayscale;
});
const Grayscale = function (imageData) {
  var data = imageData.data, len = data.length, i, brightness;
  for (i = 0; i < len; i += 4) {
    brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = brightness;
    data[i + 1] = brightness;
    data[i + 2] = brightness;
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"57uKB":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "HSL", function () {
  return HSL;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'hue', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'saturation', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'luminance', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);
const HSL = function (imageData) {
  var data = imageData.data, nPixels = data.length, v = 1, s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, l = this.luminance() * 127, i;
  var vsu = v * s * Math.cos(h * Math.PI / 180), vsw = v * s * Math.sin(h * Math.PI / 180);
  var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
  var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
  var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;
  var r, g, b, a;
  for (i = 0; i < nPixels; i += 4) {
    r = data[i + 0];
    g = data[i + 1];
    b = data[i + 2];
    a = data[i + 3];
    data[i + 0] = rr * r + rg * g + rb * b + l;
    data[i + 1] = gr * r + gg * g + gb * b + l;
    data[i + 2] = br * r + bg * g + bb * b + l;
    data[i + 3] = a;
  }
};

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6B1nN":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "HSV", function () {
  return HSV;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const HSV = function (imageData) {
  var data = imageData.data, nPixels = data.length, v = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, i;
  var vsu = v * s * Math.cos(h * Math.PI / 180), vsw = v * s * Math.sin(h * Math.PI / 180);
  var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
  var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
  var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;
  var r, g, b, a;
  for (i = 0; i < nPixels; i += 4) {
    r = data[i + 0];
    g = data[i + 1];
    b = data[i + 2];
    a = data[i + 3];
    data[i + 0] = rr * r + rg * g + rb * b;
    data[i + 1] = gr * r + gg * g + gb * b;
    data[i + 2] = br * r + bg * g + bb * b;
    data[i + 3] = a;
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'hue', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'saturation', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'value', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"7C9M1":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Invert", function () {
  return Invert;
});
const Invert = function (imageData) {
  var data = imageData.data, len = data.length, i;
  for (i = 0; i < len; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"7ipBg":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Kaleidoscope", function () {
  return Kaleidoscope;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _UtilJs = require('../Util.js');
var _ValidatorsJs = require('../Validators.js');
var ToPolar = function (src, dst, opt) {
  var srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2, i, x, y, r = 0, g = 0, b = 0, a = 0;
  var rad, rMax = Math.sqrt(xMid * xMid + yMid * yMid);
  x = xSize - xMid;
  y = ySize - yMid;
  rad = Math.sqrt(x * x + y * y);
  rMax = rad > rMax ? rad : rMax;
  var rSize = ySize, tSize = xSize, radius, theta;
  var conversion = 360 / tSize * Math.PI / 180, sin, cos;
  for (theta = 0; theta < tSize; theta += 1) {
    sin = Math.sin(theta * conversion);
    cos = Math.cos(theta * conversion);
    for (radius = 0; radius < rSize; radius += 1) {
      x = Math.floor(xMid + rMax * radius / rSize * cos);
      y = Math.floor(yMid + rMax * radius / rSize * sin);
      i = (y * xSize + x) * 4;
      r = srcPixels[i + 0];
      g = srcPixels[i + 1];
      b = srcPixels[i + 2];
      a = srcPixels[i + 3];
      i = (theta + radius * xSize) * 4;
      dstPixels[i + 0] = r;
      dstPixels[i + 1] = g;
      dstPixels[i + 2] = b;
      dstPixels[i + 3] = a;
    }
  }
};
var FromPolar = function (src, dst, opt) {
  var srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2, i, x, y, dx, dy, r = 0, g = 0, b = 0, a = 0;
  var rad, rMax = Math.sqrt(xMid * xMid + yMid * yMid);
  x = xSize - xMid;
  y = ySize - yMid;
  rad = Math.sqrt(x * x + y * y);
  rMax = rad > rMax ? rad : rMax;
  var rSize = ySize, tSize = xSize, radius, theta, phaseShift = opt.polarRotation || 0;
  var x1, y1;
  for (x = 0; x < xSize; x += 1) {
    for (y = 0; y < ySize; y += 1) {
      dx = x - xMid;
      dy = y - yMid;
      radius = Math.sqrt(dx * dx + dy * dy) * rSize / rMax;
      theta = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + phaseShift) % 360;
      theta = theta * tSize / 360;
      x1 = Math.floor(theta);
      y1 = Math.floor(radius);
      i = (y1 * xSize + x1) * 4;
      r = srcPixels[i + 0];
      g = srcPixels[i + 1];
      b = srcPixels[i + 2];
      a = srcPixels[i + 3];
      i = (y * xSize + x) * 4;
      dstPixels[i + 0] = r;
      dstPixels[i + 1] = g;
      dstPixels[i + 2] = b;
      dstPixels[i + 3] = a;
    }
  }
};
const Kaleidoscope = function (imageData) {
  var xSize = imageData.width, ySize = imageData.height;
  var x, y, xoff, i, r, g, b, a, srcPos, dstPos;
  var power = Math.round(this.kaleidoscopePower());
  var angle = Math.round(this.kaleidoscopeAngle());
  var offset = Math.floor(xSize * (angle % 360) / 360);
  if (power < 1) {
    return;
  }
  var tempCanvas = _UtilJs.Util.createCanvasElement();
  tempCanvas.width = xSize;
  tempCanvas.height = ySize;
  var scratchData = tempCanvas.getContext('2d').getImageData(0, 0, xSize, ySize);
  ToPolar(imageData, scratchData, {
    polarCenterX: xSize / 2,
    polarCenterY: ySize / 2
  });
  var minSectionSize = xSize / Math.pow(2, power);
  while (minSectionSize <= 8) {
    minSectionSize = minSectionSize * 2;
    power -= 1;
  }
  minSectionSize = Math.ceil(minSectionSize);
  var sectionSize = minSectionSize;
  var xStart = 0, xEnd = sectionSize, xDelta = 1;
  if (offset + minSectionSize > xSize) {
    xStart = sectionSize;
    xEnd = 0;
    xDelta = -1;
  }
  for (y = 0; y < ySize; y += 1) {
    for (x = xStart; x !== xEnd; x += xDelta) {
      xoff = Math.round(x + offset) % xSize;
      srcPos = (xSize * y + xoff) * 4;
      r = scratchData.data[srcPos + 0];
      g = scratchData.data[srcPos + 1];
      b = scratchData.data[srcPos + 2];
      a = scratchData.data[srcPos + 3];
      dstPos = (xSize * y + x) * 4;
      scratchData.data[dstPos + 0] = r;
      scratchData.data[dstPos + 1] = g;
      scratchData.data[dstPos + 2] = b;
      scratchData.data[dstPos + 3] = a;
    }
  }
  for (y = 0; y < ySize; y += 1) {
    sectionSize = Math.floor(minSectionSize);
    for (i = 0; i < power; i += 1) {
      for (x = 0; x < sectionSize + 1; x += 1) {
        srcPos = (xSize * y + x) * 4;
        r = scratchData.data[srcPos + 0];
        g = scratchData.data[srcPos + 1];
        b = scratchData.data[srcPos + 2];
        a = scratchData.data[srcPos + 3];
        dstPos = (xSize * y + sectionSize * 2 - x - 1) * 4;
        scratchData.data[dstPos + 0] = r;
        scratchData.data[dstPos + 1] = g;
        scratchData.data[dstPos + 2] = b;
        scratchData.data[dstPos + 3] = a;
      }
      sectionSize *= 2;
    }
  }
  FromPolar(scratchData, imageData, {
    polarRotation: 0
  });
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'kaleidoscopePower', 2, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'kaleidoscopeAngle', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Util.js":"27sKe","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"6JmYM":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Mask", function () {
  return Mask;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
function pixelAt(idata, x, y) {
  var idx = (y * idata.width + x) * 4;
  var d = [];
  d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
  return d;
}
function rgbDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
}
function rgbMean(pTab) {
  var m = [0, 0, 0];
  for (var i = 0; i < pTab.length; i++) {
    m[0] += pTab[i][0];
    m[1] += pTab[i][1];
    m[2] += pTab[i][2];
  }
  m[0] /= pTab.length;
  m[1] /= pTab.length;
  m[2] /= pTab.length;
  return m;
}
function backgroundMask(idata, threshold) {
  var rgbv_no = pixelAt(idata, 0, 0);
  var rgbv_ne = pixelAt(idata, idata.width - 1, 0);
  var rgbv_so = pixelAt(idata, 0, idata.height - 1);
  var rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);
  var thres = threshold || 10;
  if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {
    var mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);
    var mask = [];
    for (var i = 0; i < idata.width * idata.height; i++) {
      var d = rgbDistance(mean, [idata.data[i * 4], idata.data[i * 4 + 1], idata.data[i * 4 + 2]]);
      mask[i] = d < thres ? 0 : 255;
    }
    return mask;
  }
}
function applyMask(idata, mask) {
  for (var i = 0; i < idata.width * idata.height; i++) {
    idata.data[4 * i + 3] = mask[i];
  }
}
function erodeMask(mask, sw, sh) {
  var weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side / 2);
  var maskResult = [];
  for (var y = 0; y < sh; y++) {
    for (var x = 0; x < sw; x++) {
      var so = y * sw + x;
      var a = 0;
      for (var cy = 0; cy < side; cy++) {
        for (var cx = 0; cx < side; cx++) {
          var scy = y + cy - halfSide;
          var scx = x + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            var srcOff = scy * sw + scx;
            var wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a === 255 * 8 ? 255 : 0;
    }
  }
  return maskResult;
}
function dilateMask(mask, sw, sh) {
  var weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side / 2);
  var maskResult = [];
  for (var y = 0; y < sh; y++) {
    for (var x = 0; x < sw; x++) {
      var so = y * sw + x;
      var a = 0;
      for (var cy = 0; cy < side; cy++) {
        for (var cx = 0; cx < side; cx++) {
          var scy = y + cy - halfSide;
          var scx = x + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            var srcOff = scy * sw + scx;
            var wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a >= 255 * 4 ? 255 : 0;
    }
  }
  return maskResult;
}
function smoothEdgeMask(mask, sw, sh) {
  var weights = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side / 2);
  var maskResult = [];
  for (var y = 0; y < sh; y++) {
    for (var x = 0; x < sw; x++) {
      var so = y * sw + x;
      var a = 0;
      for (var cy = 0; cy < side; cy++) {
        for (var cx = 0; cx < side; cx++) {
          var scy = y + cy - halfSide;
          var scx = x + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            var srcOff = scy * sw + scx;
            var wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a;
    }
  }
  return maskResult;
}
const Mask = function (imageData) {
  var threshold = this.threshold(), mask = backgroundMask(imageData, threshold);
  if (mask) {
    mask = erodeMask(mask, imageData.width, imageData.height);
    mask = dilateMask(mask, imageData.width, imageData.height);
    mask = smoothEdgeMask(mask, imageData.width, imageData.height);
    applyMask(imageData, mask);
  }
  return imageData;
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'threshold', 0, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"5xzCG":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Noise", function () {
  return Noise;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const Noise = function (imageData) {
  var amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2, i;
  for (i = 0; i < nPixels; i += 4) {
    data[i + 0] += half - 2 * half * Math.random();
    data[i + 1] += half - 2 * half * Math.random();
    data[i + 2] += half - 2 * half * Math.random();
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'noise', 0.2, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"1YGv7":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Pixelate", function () {
  return Pixelate;
});
var _FactoryJs = require('../Factory.js');
var _UtilJs = require('../Util.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const Pixelate = function (imageData) {
  var pixelSize = Math.ceil(this.pixelSize()), width = imageData.width, height = imageData.height, x, y, i, red, green, blue, alpha, nBinsX = Math.ceil(width / pixelSize), nBinsY = Math.ceil(height / pixelSize), xBinStart, xBinEnd, yBinStart, yBinEnd, xBin, yBin, pixelsInBin, data = imageData.data;
  if (pixelSize <= 0) {
    _UtilJs.Util.error('pixelSize value can not be <= 0');
    return;
  }
  for (xBin = 0; xBin < nBinsX; xBin += 1) {
    for (yBin = 0; yBin < nBinsY; yBin += 1) {
      red = 0;
      green = 0;
      blue = 0;
      alpha = 0;
      xBinStart = xBin * pixelSize;
      xBinEnd = xBinStart + pixelSize;
      yBinStart = yBin * pixelSize;
      yBinEnd = yBinStart + pixelSize;
      pixelsInBin = 0;
      for (x = xBinStart; x < xBinEnd; x += 1) {
        if (x >= width) {
          continue;
        }
        for (y = yBinStart; y < yBinEnd; y += 1) {
          if (y >= height) {
            continue;
          }
          i = (width * y + x) * 4;
          red += data[i + 0];
          green += data[i + 1];
          blue += data[i + 2];
          alpha += data[i + 3];
          pixelsInBin += 1;
        }
      }
      red = red / pixelsInBin;
      green = green / pixelsInBin;
      blue = blue / pixelsInBin;
      alpha = alpha / pixelsInBin;
      for (x = xBinStart; x < xBinEnd; x += 1) {
        if (x >= width) {
          continue;
        }
        for (y = yBinStart; y < yBinEnd; y += 1) {
          if (y >= height) {
            continue;
          }
          i = (width * y + x) * 4;
          data[i + 0] = red;
          data[i + 1] = green;
          data[i + 2] = blue;
          data[i + 3] = alpha;
        }
      }
    }
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'pixelSize', 8, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Util.js":"27sKe","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4zntz":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Posterize", function () {
  return Posterize;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const Posterize = function (imageData) {
  var levels = Math.round(this.levels() * 254) + 1, data = imageData.data, len = data.length, scale = 255 / levels, i;
  for (i = 0; i < len; i += 1) {
    data[i] = Math.floor(data[i] / scale) * scale;
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'levels', 0.5, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4NR4h":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "RGB", function () {
  return RGB;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const RGB = function (imageData) {
  var data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), i, brightness;
  for (i = 0; i < nPixels; i += 4) {
    brightness = (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]) / 255;
    data[i] = brightness * red;
    data[i + 1] = brightness * green;
    data[i + 2] = brightness * blue;
    data[i + 3] = data[i + 3];
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'red', 0, function (val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'green', 0, function (val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'blue', 0, _ValidatorsJs.RGBComponent, _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"4hdBJ":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "RGBA", function () {
  return RGBA;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const RGBA = function (imageData) {
  var data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), alpha = this.alpha(), i, ia;
  for (i = 0; i < nPixels; i += 4) {
    ia = 1 - alpha;
    data[i] = red * alpha + data[i] * ia;
    data[i + 1] = green * alpha + data[i + 1] * ia;
    data[i + 2] = blue * alpha + data[i + 2] * ia;
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'red', 0, function (val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'green', 0, function (val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'blue', 0, _ValidatorsJs.RGBComponent, _FactoryJs.Factory.afterSetFilter);
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'alpha', 1, function (val) {
  this._filterUpToDate = false;
  if (val > 1) {
    return 1;
  } else if (val < 0) {
    return 0;
  } else {
    return val;
  }
});

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"5KTlJ":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Sepia", function () {
  return Sepia;
});
const Sepia = function (imageData) {
  var data = imageData.data, nPixels = data.length, i, r, g, b;
  for (i = 0; i < nPixels; i += 4) {
    r = data[i + 0];
    g = data[i + 1];
    b = data[i + 2];
    data[i + 0] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
    data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
    data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"X4fVa":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Solarize", function () {
  return Solarize;
});
const Solarize = function (imageData) {
  var data = imageData.data, w = imageData.width, h = imageData.height, w4 = w * 4, y = h;
  do {
    var offsetY = (y - 1) * w4;
    var x = w;
    do {
      var offset = offsetY + (x - 1) * 4;
      var r = data[offset];
      var g = data[offset + 1];
      var b = data[offset + 2];
      if (r > 127) {
        r = 255 - r;
      }
      if (g > 127) {
        g = 255 - g;
      }
      if (b > 127) {
        b = 255 - b;
      }
      data[offset] = r;
      data[offset + 1] = g;
      data[offset + 2] = b;
    } while (--x);
  } while (--y);
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"1wOja":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Threshold", function () {
  return Threshold;
});
var _FactoryJs = require('../Factory.js');
var _NodeJs = require('../Node.js');
var _ValidatorsJs = require('../Validators.js');
const Threshold = function (imageData) {
  var level = this.threshold() * 255, data = imageData.data, len = data.length, i;
  for (i = 0; i < len; i += 1) {
    data[i] = data[i] < level ? 0 : 255;
  }
};
_FactoryJs.Factory.addGetterSetter(_NodeJs.Node, 'threshold', 0.5, _ValidatorsJs.getNumberValidator(), _FactoryJs.Factory.afterSetFilter);

},{"../Factory.js":"2GdoH","../Node.js":"5H2JD","../Validators.js":"2KBE7","@parcel/transformer-js/lib/esmodule-helpers.js":"4Bc1D"}],"1nhTO":[function() {},{}],"64QUI":[function(require,module,exports) {
'use strict';
const strictUriEncode = require('strict-uri-encode');
const decodeComponent = require('decode-uri-component');
const splitOnFirst = require('split-on-first');
const filterObject = require('filter-obj');

const isNullOrUndefined = value => value === null || value === undefined;

const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
		case 'bracket-separator': {
			const keyValueSep = options.arrayFormat === 'bracket-separator' ?
				'[]=' :
				'=';

			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				// Translate null to an empty string so that it doesn't serialize as 'null'
				value = value === null ? '' : value;

				if (result.length === 0) {
					return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};
		}

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		case 'bracket-separator':
			return (key, value, accumulator) => {
				const isArray = /(\[\])$/.test(key);
				key = key.replace(/\[\]$/, '');

				if (!isArray) {
					accumulator[key] = value ? decode(value, options) : value;
					return;
				}

				const arrayValue = value === null ?
					[] :
					value.split(options.arrayFormatSeparator).map(item => decode(item, options));

				if (accumulator[key] === undefined) {
					accumulator[key] = arrayValue;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], arrayValue);
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
				return encode(key, options) + '[]';
			}

			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true,
		[encodeFragmentIdentifier]: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true,
		[encodeFragmentIdentifier]: false
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};

},{"strict-uri-encode":"5U32A","decode-uri-component":"0n6hJ","split-on-first":"47OKY","filter-obj":"2VABy"}],"5U32A":[function(require,module,exports) {
'use strict';
module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

},{}],"0n6hJ":[function(require,module,exports) {
'use strict';
var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};

},{}],"47OKY":[function(require,module,exports) {
'use strict';

module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};

},{}],"2VABy":[function(require,module,exports) {
'use strict';
module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};

},{}],"7rA65":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"4qfhW"}],"4qfhW":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"7J9rV","./helpers/bind":"78Fwk","./core/Axios":"26bz2","./core/mergeConfig":"42z1a","./defaults":"5j10E","./cancel/Cancel":"1Ql7i","./cancel/CancelToken":"hHamf","./cancel/isCancel":"3MAgn","./helpers/spread":"9FoXt","./helpers/isAxiosError":"1bzv8"}],"7J9rV":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

},{"./helpers/bind":"78Fwk"}],"78Fwk":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"26bz2":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../utils":"7J9rV","../helpers/buildURL":"25KfR","./InterceptorManager":"33sRR","./dispatchRequest":"1mCjo","./mergeConfig":"42z1a"}],"25KfR":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"7J9rV"}],"33sRR":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"7J9rV"}],"1mCjo":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"7J9rV","./transformData":"1ueU6","../cancel/isCancel":"3MAgn","../defaults":"5j10E"}],"1ueU6":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":"7J9rV"}],"3MAgn":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"5j10E":[function(require,module,exports) {
"use strict";
var process = require("process");
var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}
var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {}
    }
    return data;
  }],
  /**
  * A timeout in milliseconds to abort a request. If set to 0 (default) a
  * timeout is not created.
  */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"process":"1t7oE","./utils":"7J9rV","./helpers/normalizeHeaderName":"5yMqL","./adapters/xhr":"6pJqL","./adapters/http":"6pJqL"}],"1t7oE":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    // normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    // normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = '';
// empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

},{}],"5yMqL":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"7J9rV"}],"6pJqL":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"7J9rV","./../core/settle":"72M6J","./../helpers/cookies":"1m0F1","./../helpers/buildURL":"25KfR","../core/buildFullPath":"5fWja","./../helpers/parseHeaders":"1KizL","./../helpers/isURLSameOrigin":"6Gtz3","../core/createError":"7ETv1"}],"72M6J":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"7ETv1"}],"7ETv1":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"2O2Ud"}],"2O2Ud":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

},{}],"1m0F1":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"7J9rV"}],"5fWja":[function(require,module,exports) {
'use strict';

var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/isAbsoluteURL":"4FcN1","../helpers/combineURLs":"qMap4"}],"4FcN1":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"qMap4":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"1KizL":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"7J9rV"}],"6Gtz3":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"7J9rV"}],"42z1a":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

},{"../utils":"7J9rV"}],"1Ql7i":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"hHamf":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"1Ql7i"}],"9FoXt":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"1bzv8":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

},{}]},["2FQzm","5XPnV"], "5XPnV", "parcelRequire05a8")

//# sourceMappingURL=index.72166a09.js.map
