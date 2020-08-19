window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AppConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e35fiNgTpPT720Pxf2rArY", "AppConfig");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseModule_1 = require("./BaseModule");
    var AppConfig = function(_super) {
      __extends(AppConfig, _super);
      function AppConfig() {
        var _this = _super.call(this) || this;
        _this.avatarUrl = "https://moyun-1257000992.cos.ap-guangzhou.myqcloud.com/avatar/";
        _this.mLayoutConfig = {};
        _this.respawnNum = "0";
        _this.comboTime = "1";
        _this.killCoin = "10";
        _this.comboCoin = {};
        _this.killEnergy = "10";
        _this.respawnTime = "10";
        _this.coinPricePr = "0";
        _this.coinRewardTotalTime = "0";
        _this.coinRewardPr = "0";
        _this.coinRewardTime = "0";
        _this.comboVibrate = "0";
        _this.respawnSkillCF = "0";
        _this.killTips = {};
        _this.changeCoinCF = "0";
        _this.getDiamond = "0";
        _this.mapWidth = 3600;
        _this.mapHeight = 3600;
        _this.showInviteDelayTime = "2";
        _this.gameEndVideoChecked = "0";
        _this.showAdForm = "0";
        _this.showTryingForm = "0";
        _this.tryingLevel = [];
        _this.tryingMode = "0";
        _this.bg = "bg0";
        _this.bgArr = [ "bg0", "bg1" ];
        _this.isOpenVideo = false;
        _this.attackId = 0;
        _this.playerAttackId = 0;
        return _this;
      }
      Object.defineProperty(AppConfig.prototype, "layoutConfig", {
        get: function() {
          return this.mLayoutConfig;
        },
        set: function(value) {
          this.mLayoutConfig = value;
        },
        enumerable: true,
        configurable: true
      });
      AppConfig.prototype.onEnable = function() {};
      AppConfig.prototype.onDisable = function() {};
      AppConfig.resUrl = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Game/Truckload2/1.2.2/";
      return AppConfig;
    }(BaseModule_1.default);
    exports.default = AppConfig;
    cc._RF.pop();
  }, {
    "./BaseModule": "BaseModule"
  } ],
  ArrayUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "318a7hxC4hEX61QK69AYWmB", "ArrayUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ArrayUtil = function() {
      function ArrayUtil() {}
      ArrayUtil.prototype.shuffle = function(array) {
        var iLength = array.length, i = iLength, mTemp, iRandom;
        while (i--) if (i !== (iRandom = Math.floor(Math.random() * iLength))) {
          mTemp = array[i];
          array[i] = array[iRandom];
          array[iRandom] = mTemp;
        }
        return array;
      };
      ArrayUtil.prototype.indexOf = function(searchArray, searchElement) {
        var result = -1;
        for (var i = 0, length = searchArray.length; i < length; i++) if (searchArray[i] == searchElement) {
          result = i;
          break;
        }
        return result;
      };
      ArrayUtil.prototype.replace = function(replaceArray, fromIndex, toIndex) {
        var from = replaceArray[fromIndex];
        var to = replaceArray[toIndex];
        replaceArray[toIndex] = from;
        replaceArray[fromIndex] = to;
      };
      ArrayUtil.prototype.merge = function(mergefrom, mergeto) {
        for (var i = 0, length = mergefrom.length; i < length; i++) mergeto.push(mergefrom[i]);
        return mergeto;
      };
      ArrayUtil.clone = function(from) {
        var newarray = new Array();
        newarray = from.slice(0);
        return newarray;
      };
      ArrayUtil.remove = function(origin, item) {
        for (var i = 0; i < origin.length; i++) if (origin[i] == item) {
          origin.splice(i, 1);
          i--;
          return;
        }
      };
      return ArrayUtil;
    }();
    exports.default = ArrayUtil;
    cc._RF.pop();
  }, {} ],
  AudioModule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "755d365qBJHeKetwOxL4m/A", "AudioModule");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseModule_1 = require("./BaseModule");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AudioModule = function(_super) {
      __extends(AudioModule, _super);
      function AudioModule() {
        var _this = _super.call(this) || this;
        _this.gameMusic = null;
        _this.btnSound = null;
        _this.openDoor = null;
        _this.loaderJump = null;
        _this.truckSignal = null;
        _this.truckEngineOn = null;
        _this.truckEngineWorking = null;
        _this.boxHit = null;
        _this.loaderMagnet = null;
        _this.menuMusic = null;
        _this.blast = null;
        _this.shutter = null;
        _this.IS_MUTE = "isMute";
        _this.IS_MUTE_MUSIC = "isMuteMusic";
        _this.IS_MUTE_SOUND = "isMuteSound";
        _this.VOLUME_MUSIC = "volumeMusic";
        _this.VOLUME_SOUND = "volumeSound";
        _this._volumeMusic = 1;
        _this._volumeSound = 1;
        _this._isMuteMusic = false;
        _this._isMuteSound = false;
        _this._isMute = false;
        _this.gameCoinTime = 0;
        _this.mMusicId = null;
        _this.magnetId = null;
        _this.getSave();
        return _this;
      }
      AudioModule.prototype.onEnable = function() {
        Lite.audio = this;
      };
      AudioModule.prototype.start = function() {};
      Object.defineProperty(AudioModule.prototype, "MusicId", {
        get: function() {
          return this.mMusicId;
        },
        enumerable: true,
        configurable: true
      });
      AudioModule.prototype.playGameMusic = function() {
        this.mMusicId = this.playMusic(this.gameMusic);
      };
      AudioModule.prototype.playMainMusic = function() {
        this.mMusicId = this.playMusic(this.menuMusic);
      };
      AudioModule.prototype.playBossMusic = function() {
        this.mMusicId = this.playMusic(this.gameMusic);
      };
      AudioModule.prototype.playClickEffect = function() {
        this.playSound(this.btnSound);
      };
      AudioModule.prototype.playDoorEffect = function() {
        this.playSound(this.openDoor);
      };
      AudioModule.prototype.playJump = function() {
        this.playSound(this.loaderJump);
      };
      AudioModule.prototype.playTruckSignal = function() {
        this.playSound(this.truckSignal);
      };
      AudioModule.prototype.playTruckEngineOn = function() {
        var _this = this;
        this.playSound(this.truckEngineOn, false, function() {
          _this.playTruckEngineWorking();
        });
      };
      AudioModule.prototype.playBoxHit = function() {
        this.playSound(this.boxHit);
      };
      AudioModule.prototype.playShutter = function() {
        this.playSound(this.shutter);
      };
      AudioModule.prototype.playRespawnEffect = function(complete) {
        complete && complete();
      };
      AudioModule.prototype.playLoaderMagnet = function() {
        this.magnetId = this.playSound(this.loaderMagnet, true);
      };
      AudioModule.prototype.stopLoaderMagnet = function() {
        this.magnetId && cc.audioEngine.stopEffect(this.magnetId);
      };
      AudioModule.prototype.playBlast = function() {
        this.playSound(this.blast);
      };
      AudioModule.prototype.playTruckEngineWorking = function() {
        this.playSound(this.truckEngineWorking);
      };
      AudioModule.prototype.playGameCoinEffect = function() {
        var now = Date.now();
        now - this.gameCoinTime >= 100 && (this.gameCoinTime = now);
      };
      AudioModule.prototype.destroySound = function(url) {};
      AudioModule.prototype.stopAll = function() {};
      AudioModule.prototype.stopAllSound = function() {};
      AudioModule.prototype.stopMusic = function() {
        this.mMusicId && cc.audioEngine.stop(this.mMusicId);
      };
      AudioModule.prototype.playSound = function(audioClip, loops, complete, soundClass, startTime) {
        void 0 === loops && (loops = false);
        void 0 === complete && (complete = null);
        void 0 === soundClass && (soundClass = null);
        void 0 === startTime && (startTime = 0);
        if (this.isMute) return;
        var soundId = cc.audioEngine.playEffect(audioClip, loops);
        cc.audioEngine.setFinishCallback(soundId, function(res) {
          complete && complete(res);
          loops || cc.audioEngine.stop(soundId);
        });
        return soundId;
      };
      AudioModule.prototype.playMusic = function(audioClip, loops, complete, startTime) {
        void 0 === loops && (loops = true);
        void 0 === complete && (complete = null);
        void 0 === startTime && (startTime = 0);
        if (this.isMute) return;
        var soundId = cc.audioEngine.playMusic(audioClip, loops);
        return soundId;
      };
      Object.defineProperty(AudioModule.prototype, "volumeMusic", {
        get: function() {
          return this._volumeMusic;
        },
        set: function(value) {
          this._volumeMusic = value;
          this.save();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(AudioModule.prototype, "volumeSound", {
        get: function() {
          return this._volumeSound;
        },
        set: function(value) {
          this._volumeSound = value;
          this.save();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(AudioModule.prototype, "isMuteMusic", {
        get: function() {
          return this._isMuteMusic;
        },
        set: function(value) {
          this._isMuteMusic = value;
          this.save();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(AudioModule.prototype, "isMuteSound", {
        get: function() {
          return this._isMuteSound;
        },
        set: function(value) {
          this._isMuteSound = value;
          this.save();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(AudioModule.prototype, "isMute", {
        get: function() {
          return this._isMute;
        },
        set: function(value) {
          this._isMute = value;
          this.save();
        },
        enumerable: true,
        configurable: true
      });
      AudioModule.prototype.save = function() {
        cc.sys.localStorage.setItem(this.IS_MUTE, "" + this.isMute);
        cc.sys.localStorage.setItem(this.IS_MUTE_MUSIC, "" + this.isMuteMusic);
        cc.sys.localStorage.setItem(this.IS_MUTE_SOUND, "" + this.isMuteSound);
      };
      AudioModule.prototype.getSave = function() {
        this.isMute = "true" == cc.sys.localStorage.getItem(this.IS_MUTE);
        this.isMuteMusic = "true" == cc.sys.localStorage.getItem(this.IS_MUTE_MUSIC);
        this.isMuteSound = "true" == cc.sys.localStorage.getItem(this.IS_MUTE_SOUND);
      };
      AudioModule.prototype.onDisable = function() {};
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "gameMusic", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "btnSound", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "openDoor", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "loaderJump", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "truckSignal", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "truckEngineOn", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "truckEngineWorking", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "boxHit", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "loaderMagnet", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "menuMusic", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "blast", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "shutter", void 0);
      AudioModule = __decorate([ ccclass ], AudioModule);
      return AudioModule;
    }(BaseModule_1.default);
    exports.default = AudioModule;
    cc._RF.pop();
  }, {
    "./BaseModule": "BaseModule"
  } ],
  BaseModule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32467evvihFDoJEB0n0C/Xm", "BaseModule");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseModule = function(_super) {
      __extends(BaseModule, _super);
      function BaseModule() {
        var _this = _super.call(this) || this;
        _this.moduleName = "";
        return _this;
      }
      BaseModule.prototype.onEnable = function() {};
      BaseModule.prototype.onDisable = function() {};
      BaseModule = __decorate([ ccclass ], BaseModule);
      return BaseModule;
    }(cc.Component);
    exports.default = BaseModule;
    cc._RF.pop();
  }, {} ],
  Common: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8b10NknwBFGqyF+RuufBW3", "Common");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventType_1 = require("./EventType");
    var Common = function() {
      function Common() {}
      Common.getRandomArr = function(min, max, xs) {
        void 0 === xs && (xs = 0);
        var arr = [];
        var center = (max - min) / 2;
        var maxNum = 0;
        for (var i = 0; i <= max - min; i++) {
          arr[i] = 1;
          var num = Math.abs(i - center);
          for (var j = 0; j < num; j++) arr[i] *= xs;
          maxNum += arr[i];
        }
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i] / maxNum;
          i - 1 >= 0 && (arr[i] = arr[i] + arr[i - 1]);
        }
        var randomNum = Math.random();
        var relNum = 0;
        for (var i = 0; i < arr.length; i++) if (randomNum <= arr[i]) {
          relNum = i;
          break;
        }
        return relNum + min;
      };
      Common.convertSpeedByDelta = function(speed, delta) {
        delta > 167 && (delta = 16.67);
        return speed * (delta / 1e3);
      };
      Common.convertRotationByDelta = function(rotation, delta) {
        delta > 167 && (delta = 16.67);
        return rotation * (delta / 1e3);
      };
      Common.titleCase = function(s) {
        var i, ss = s.toLowerCase().split(/\s+/);
        for (i = 0; i < ss.length; i++) ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
        return ss.join(" ");
      };
      Common.numFixed = function(num, len) {
        return parseFloat(parseFloat(num).toFixed(len));
      };
      Common.parseMoney = function(value) {
        if (isNaN(value)) return 0;
        return parseFloat(parseFloat(value).toFixed(2));
      };
      Common.formatMoney = function(value) {
        var retValue = "0";
        isNaN(value) && (value = 0);
        retValue = value < 9999 ? parseInt("" + value) : value < 9999999 ? parseFloat("" + value / 1e3).toFixed(2) + "K" : value < 9999999999 ? parseFloat("" + value / 1e6).toFixed(2) + "M" : value < 9999999999999 ? parseFloat("" + value / 1e9).toFixed(2) + "G" : value < 1e16 ? parseFloat("" + value / 1e12).toFixed(2) + "T" : value < 1e19 ? parseFloat("" + value / 1e15).toFixed(2) + "P" : value < 1e22 ? parseFloat("" + value / 1e18).toFixed(2) + "E" : parseFloat("" + value / 1e21).toFixed(2) + "B";
        return retValue;
      };
      Common.formatDiamond = function(value) {
        var retValue = "0";
        isNaN(value) && (value = 0);
        retValue = value < 9999 ? parseFloat(value).toFixed(0) : value < 9999999 ? parseFloat("" + value / 1e3).toFixed(0) + "K" : parseFloat("" + value / 1e6).toFixed(0) + "M";
        return retValue;
      };
      Common.formatAttack = function(value) {
        var retValue = "0";
        isNaN(value) && (value = 0);
        retValue = value < 9999 ? "" + value : value < 9999999 ? parseFloat("" + value / 1e3).toFixed(0) + "K" : value < 9999999999 ? parseFloat("" + value / 1e6).toFixed(0) + "M" : value < 9999999999999 ? parseFloat("" + value / 1e9).toFixed(0) + "G" : value < 1e16 ? parseFloat("" + value / 1e12).toFixed(0) + "T" : value < 1e19 ? parseFloat("" + value / 1e15).toFixed(0) + "P" : value < 1e22 ? parseFloat("" + value / 1e18).toFixed(0) + "E" : parseFloat("" + value / 1e21).toFixed(0) + "B";
        return retValue;
      };
      Common.objKeySort = function(obj) {
        var newkey = Object.keys(obj).sort();
        var newObj = {};
        for (var i = 0; i < newkey.length; i++) newObj[newkey[i]] = obj[newkey[i]];
        return newObj;
      };
      Common.isWeChat = function() {
        return !!window["wx"];
      };
      Common.isQQPlay = function() {
        return false;
      };
      Common.isObject = function(x) {
        var type = typeof x;
        return null !== x && ("object" === type || "function" === type);
      };
      Common.object2Query = function(obj) {
        var args = [];
        for (var k in obj) args.push(k + "=" + obj[k]);
        return args.join("&");
      };
      Common.format = function() {
        var str = arguments[0];
        if ("undefined" == typeof str || null == str || "" == str || "undefined" == str) return str;
        for (var i = 1; i < arguments.length; i++) {
          var re = new RegExp("\\{" + (i - 1) + "\\}", "gm");
          str = str.replace(re, arguments[i]);
        }
        return str;
      };
      Common.isFunction = function(fun) {
        if ("function" == typeof fun) return true;
        return false;
      };
      Common.isEmpty = function(obj) {
        if ("object" == typeof obj) {
          var name;
          for (name in obj) return false;
          return true;
        }
        if (null === obj || void 0 === obj || "null" === obj || "undefined" === obj || "" === obj) return true;
        return false;
      };
      Common.dateFtt = function(fmt, date) {
        var o = {
          "M+": date.getMonth() + 1,
          "d+": date.getDate(),
          "h+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds(),
          "q+": Math.floor((date.getMonth() + 3) / 3),
          S: date.getMilliseconds()
        };
        /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var k in o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
      };
      Common.formatTime = function(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return [ year, month, day ].map(this.formatNumber).join("/");
      };
      Common.millisecondToDate = function(msd) {
        return this.secondToDate(msd / 1e3);
      };
      Common.secondToDate = function(time) {
        var retValue = "";
        if (time) {
          time < 60 && (retValue = this.formatNumber(0) + ":" + this.formatNumber(time));
          if (time > 60 && time < 3600) {
            var minute = parseInt("" + time / 60);
            var second = time - 60 * minute;
            retValue = this.formatNumber(minute) + ":" + this.formatNumber(second);
          }
        }
        return retValue;
      };
      Common.getzf = function(num) {
        var retValue = "";
        retValue = parseInt("" + num) < 10 ? "0" + num : "" + num;
        return retValue;
      };
      Common.formatNumber = function(n) {
        n = n.toString();
        return n[1] ? n : "0" + n;
      };
      Common.colorRGB2Hex = function(color) {
        var rgb = color.split(",");
        var r = parseInt(rgb[0].split("(")[1]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2].split(")")[0]);
        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
      };
      Common.copy = function(from, target) {
        for (var k in from) target[k] = from[k];
      };
      Common.deepCopy = function(obj) {
        var objClone = Array.isArray(obj) ? [] : {};
        if (obj && "object" === typeof obj) for (var key in obj) obj.hasOwnProperty(key) && (obj[key] && "object" === typeof obj[key] ? objClone[key] = this.deepCopy(obj[key]) : objClone[key] = obj[key]);
        return objClone;
      };
      Common.randomNumBoth = function(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
      };
      Common.randomToRatio = function(start, end, range) {
        var num = this.randomNumBoth(start, end);
        if (num <= range) return true;
        return false;
      };
      Common.randName = function() {
        var names = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
        var randName = "";
        for (var int = 0; int < 8; int++) {
          var rand = names[this.randomNumBoth(0, names.length - 1)];
          rand && (randName += rand);
        }
        randName += this.randomNumBoth(100, 999);
        return randName;
      };
      Common.generateUUID = function() {
        var d = new Date().getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          var r = (d + 16 * Math.random()) % 16 | 0;
          d = Math.floor(d / 16);
          return ("x" == c ? r : 3 & r | 8).toString(16);
        });
        return uuid;
      };
      Common.isNumber = function(obj) {
        return "number" == typeof obj || "[object Number]" == Object.prototype.toString.call(obj);
      };
      Common.isArray = function(obj) {
        return "[object Array]" == Object.prototype.toString.call(obj);
      };
      Common.isString = function(obj) {
        return "[object String]" === Object.prototype.toString.call(obj);
      };
      Common.popOpenAnim = function(node) {
        var _this = this;
        return new Promise(function(resolve) {
          node.scale = .8;
          node.runAction(cc.sequence(cc.scaleTo(.1, 1.2, 1.2), cc.scaleTo(.1, 1, 1), cc.callFunc(function() {
            resolve();
          }, _this)));
        });
      };
      Common.popCloseAnim = function(node) {
        var _this = this;
        return new Promise(function(resolve) {
          node.scale = 1;
          node.runAction(cc.sequence(cc.scaleTo(.1, 0, 0), cc.callFunc(function() {
            resolve();
          }, _this)));
        });
      };
      Common.addCoin = function(parent, coinNum, callback) {
        var _this = this;
        var _loop_1 = function(i) {
          var delayTime = Common.randomNumBoth(0, 100) / 200;
          var logic = Lite.entity.showEntity("coin", parent, {
            x: Common.randomNumBoth(-100, 100),
            y: Common.randomNumBoth(-100, 100)
          });
          console.log("addCoin", logic.node.x, logic.node.y, logic.node.active);
          logic.node.runAction(cc.sequence(cc.delayTime(delayTime), cc.spawn(cc.moveTo(1, -530, 315), cc.fadeOut(1), cc.sequence(cc.scaleTo(.8, 1.2, 1.2), cc.scaleTo(.8, .8, 9.8))), cc.callFunc(function() {
            Lite.entity.hideEntity(logic, null, true);
          })));
        };
        for (var i = 0; i < 30; i++) _loop_1(i);
        var t = setTimeout(function() {
          Lite.data.addCoin(coinNum);
          Lite.data.saveCoin();
          moosnow.event.sendEventImmediately(EventType_1.default.COIN_CHANGED, null);
          clearTimeout(t);
          _this.isFunction(callback) && callback();
        }, 2100);
      };
      return Common;
    }();
    exports.default = Common;
    cc._RF.pop();
  }, {
    "./EventType": "EventType"
  } ],
  ConfigData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1386HytD9EyIBXroe5OUvv", "ConfigData");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/utils/SheetManager");
    var ConfigData = function(_super) {
      __extends(ConfigData, _super);
      function ConfigData() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ConfigData.init = function() {
        var obj = SheetManager_1.SheetManager.getList("ConfigData");
        console.log("ConfigData", obj);
        var vo;
        for (var key in obj) {
          "keys" != key && (vo = ConfigData.get(key));
          vo && (this[vo.name] = vo.value, vo = null);
        }
      };
      ConfigData.get = function(id) {
        if (this[id]) return this[id];
        return SheetManager_1.SheetManager.get("ConfigData", id, ConfigData);
      };
      return ConfigData;
    }(Sheets_1.ConfigDataBase);
    exports.ConfigData = ConfigData;
    cc._RF.pop();
  }, {
    "../../script/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  Delay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "efc2baB0I9Af7MyCBRLxWXZ", "Delay");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Delay = function() {
      function Delay() {}
      Delay.clearAll = function() {};
      Delay.delay = function(time) {
        return new Promise(function(resolve) {
          if (0 == time) {
            resolve();
            return;
          }
          cc.Canvas.instance.scheduleOnce(function() {
            resolve(true);
          }, time);
        });
      };
      Delay.delay1 = function(time) {
        return new Promise(function(resolve) {
          if (0 == time) {
            resolve();
            return;
          }
          setTimeout(function() {
            resolve(true);
          }, time);
        });
      };
      Delay.delayTo = function(time, parm) {
        return new Promise(function(resolve) {
          cc.Canvas.instance.schedule(function() {
            resolve(parm);
          }, time);
        });
      };
      return Delay;
    }();
    exports.Delay = Delay;
    cc._RF.pop();
  }, {} ],
  EasterEggAnim: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e5d11kSxBL07hS0x/MFv0f", "EasterEggAnim");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForms_1 = require("../config/UIForms");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EasterEggAnim = function(_super) {
      __extends(EasterEggAnim, _super);
      function EasterEggAnim() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.egg = null;
        _this.light = null;
        return _this;
      }
      EasterEggAnim.prototype.onEnable = function() {
        this.light.runAction(cc.rotateBy(3, 360).repeatForever());
        this.egg.runAction(cc.sequence(cc.moveBy(.5, new cc.Vec2(0, 10)), cc.moveBy(.5, new cc.Vec2(0, -10))).repeatForever());
        this.addListener();
      };
      EasterEggAnim.prototype.onDisable = function() {
        this.removeListener();
      };
      EasterEggAnim.prototype.openEasterEggForm = function() {
        moosnow.ui.pushUIForm(UIForms_1.default.EasterEggForm, null);
      };
      EasterEggAnim.prototype.addListener = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.openEasterEggForm, this);
      };
      EasterEggAnim.prototype.removeListener = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.openEasterEggForm, this);
      };
      __decorate([ property(cc.Node) ], EasterEggAnim.prototype, "egg", void 0);
      __decorate([ property(cc.Node) ], EasterEggAnim.prototype, "light", void 0);
      EasterEggAnim = __decorate([ ccclass ], EasterEggAnim);
      return EasterEggAnim;
    }(cc.Component);
    exports.default = EasterEggAnim;
    cc._RF.pop();
  }, {
    "../config/UIForms": "UIForms"
  } ],
  EasterEgg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89fe325KxlMW43YSpkTKtDn", "EasterEgg");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/utils/SheetManager");
    var EasterEgg = function(_super) {
      __extends(EasterEgg, _super);
      function EasterEgg() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EasterEgg.get = function(id) {
        if (this[id]) return this[id];
        return SheetManager_1.SheetManager.get("EasterEgg", id, EasterEgg);
      };
      EasterEgg.getAll = function() {
        var obj = SheetManager_1.SheetManager.getList("EasterEgg");
        var a = [];
        var vo;
        for (var key in obj) {
          "keys" != key && (vo = EasterEgg.get(key));
          vo && (a.push(vo), vo = null);
        }
        return a;
      };
      return EasterEgg;
    }(Sheets_1.EasterEggBase);
    exports.EasterEgg = EasterEgg;
    cc._RF.pop();
  }, {
    "../../script/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  EntityData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79c58CLqqBBF6JWDqOsHcEy", "EntityData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EntityData = function() {
      function EntityData(position, rotation, scale) {
        this.position = null;
        this.scale = null;
        this.rotation = null;
        this.data = null;
        position && this.positionEmpty();
        rotation && this.rotationEmpty();
        scale && this.scaleEmpty();
      }
      Object.defineProperty(EntityData, "empty", {
        get: function() {
          var data = new EntityData();
          return data;
        },
        enumerable: true,
        configurable: true
      });
      EntityData.prototype.positionEmpty = function() {
        this.position = {
          x: 0,
          y: 0,
          z: 0
        };
      };
      EntityData.prototype.scaleEmpty = function() {
        this.scale = {
          x: 1,
          y: 1,
          z: 1
        };
      };
      EntityData.prototype.rotationEmpty = function() {
        this.rotation = {
          x: 0,
          y: 0,
          z: 0
        };
      };
      return EntityData;
    }();
    exports.EntityData = EntityData;
    cc._RF.pop();
  }, {} ],
  EntityLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7873cLAw99GBrJeY+Edgg2R", "EntityLogic");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EntityLogic = function(_super) {
      __extends(EntityLogic, _super);
      function EntityLogic() {
        var _this = _super.call(this) || this;
        _this.poolName = "";
        return _this;
      }
      EntityLogic.prototype.onEnable = function() {};
      EntityLogic.prototype.start = function() {};
      Object.defineProperty(EntityLogic.prototype, "LogicData", {
        get: function() {
          return this.mLogicData;
        },
        enumerable: true,
        configurable: true
      });
      EntityLogic.prototype.willShow = function(data) {
        this.mLogicData = data;
        if (data) {
          data.x && (this.node.x = data.x);
          data.y && (this.node.y = data.y);
        }
      };
      EntityLogic.prototype.onShow = function(data) {};
      EntityLogic.prototype.onFwUpdate = function(delta) {};
      EntityLogic.prototype.willHide = function(data) {};
      EntityLogic.prototype.onHide = function(data) {};
      EntityLogic.prototype.onCollision = function(other) {};
      EntityLogic.prototype.unuse = function() {};
      EntityLogic.prototype.reuse = function() {};
      EntityLogic.prototype.pause = function() {};
      EntityLogic.prototype.resume = function() {};
      EntityLogic.prototype.onDisable = function() {};
      return EntityLogic;
    }(cc.Component);
    exports.default = EntityLogic;
    cc._RF.pop();
  }, {} ],
  EntityModule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96f5fl0pJ1IpLMNSvab7Du2", "EntityModule");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EntityLogic_1 = require("../entity/EntityLogic");
    var BaseModule_1 = require("./BaseModule");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EntityModule = function(_super) {
      __extends(EntityModule, _super);
      function EntityModule() {
        var _this = _super.call(this) || this;
        _this.adFloatLeftItem1 = null;
        _this.adFloatLeftItem2 = null;
        _this.adFloatLeftItem3 = null;
        _this.adListBannerItem = null;
        _this.adListCenterItem = null;
        _this.adListEndItem = null;
        _this.adListExportItem = null;
        _this.adListLeftItem = null;
        _this.coin = null;
        _this.easterEggItem = null;
        _this.gameCountdown = null;
        _this.inviteBox = null;
        _this.level1 = null;
        _this.level2 = null;
        _this.level3 = null;
        _this.level4 = null;
        _this.level5 = null;
        _this.level6 = null;
        _this.level7 = null;
        _this.level8 = null;
        _this.level9 = null;
        _this.level10 = null;
        _this.level11 = null;
        _this.level12 = null;
        _this.level13 = null;
        _this.level14 = null;
        _this.level15 = null;
        _this.level16 = null;
        _this.level17 = null;
        _this.level18 = null;
        _this.level19 = null;
        _this.level20 = null;
        _this.level21 = null;
        _this.level22 = null;
        _this.level23 = null;
        _this.level24 = null;
        _this.level25 = null;
        _this.level26 = null;
        _this.level27 = null;
        _this.level28 = null;
        _this.level29 = null;
        _this.level30 = null;
        _this.mapItem = null;
        _this.nativeAd = null;
        _this.nativeAdVIVO = null;
        _this.nativeSmallAdVIVO = null;
        _this.openBoxItem = null;
        _this.packingBigBox = null;
        _this.packingBox = null;
        _this.packingCircle = null;
        _this.packingLongBox = null;
        _this.packingUpwardBigBox = null;
        _this.packingUpwardBox = null;
        _this.packingUpwardLongBox = null;
        _this.playerBoom = null;
        _this.playerCar = null;
        _this.playerCarPart = null;
        _this.skinItem = null;
        _this.truckLoader = null;
        _this.entityLogics = [];
        _this._serializeId = 0;
        _this.paused = true;
        _this.prefabPath = "prefab/entity/";
        _this.entityPools = [];
        _this.mIsSlow = true;
        _this.entityLogics = [];
        _this._serializeId = 0;
        _this._serializeId = 0;
        return _this;
      }
      EntityModule.prototype.start = function() {
        Lite.entity = this;
        this.resume();
      };
      EntityModule.prototype.update = function(dt) {
        if (this.paused) return;
        for (var i = 0; i < this.entityLogics.length; i++) {
          var element = this.entityLogics[i];
          element.onFwUpdate(dt);
        }
      };
      EntityModule.prototype.pause = function() {
        this.paused = true;
      };
      EntityModule.prototype.resume = function() {
        this.paused = false;
      };
      EntityModule.prototype.getAllEntity = function(name) {
        return this.entityLogics.filter(function(item) {
          return item.poolName == name;
        });
      };
      EntityModule.prototype.showEntity = function(name, parentNode, data) {
        var logic = this._showEntity(name);
        logic.id = this._serializeId--;
        logic.node.parent = parentNode;
        logic.willShow(data);
        logic.node.active = true;
        logic.node.zIndex = logic.id;
        logic.onShow(data);
        this.entityLogics.push(logic);
        return logic;
      };
      EntityModule.prototype.hideEntity = function(logic, data, isDestory) {
        void 0 === isDestory && (isDestory = false);
        this._hideEntity(logic, data, isDestory);
      };
      EntityModule.prototype.hideAllEntity = function(name, isDestory) {
        void 0 === isDestory && (isDestory = false);
        for (var i = 0; i < this.entityLogics.length; i++) {
          var item = this.entityLogics[i];
          if (item.poolName == name) {
            this.hideEntity(item, null, isDestory);
            i--;
          }
        }
      };
      EntityModule.prototype._showEntity = function(name) {
        var pool = this._getOrNewEntityPool(name);
        var entity = pool.get();
        null == entity && (entity = this._createEntity(name));
        var logic = entity.getComponent(EntityLogic_1.default);
        logic.poolName = pool.name;
        return logic;
      };
      EntityModule.prototype._hideEntity = function(logic, data, isDestory) {
        void 0 === isDestory && (isDestory = false);
        if (isDestory) {
          logic.willHide(data);
          logic.node.active = false;
          logic.onHide(data);
          logic.destroy();
        } else {
          var pool = this._getOrNewEntityPool(logic.poolName);
          logic.willHide(data);
          pool.put(logic.node);
          logic.node.active = false;
          logic.onHide(data);
        }
        cc.js.array.remove(this.entityLogics, logic);
      };
      EntityModule.prototype._createEntity = function(name) {
        var prefab = this._getPrefabByName(name);
        return cc.instantiate(prefab);
      };
      EntityModule.prototype._getPrefabByName = function(name) {
        return this[name];
      };
      EntityModule.prototype._getOrNewEntityPool = function(name) {
        var pool = this._getEntityPool(name);
        null == pool && (pool = this._newEntityPool(name));
        return pool;
      };
      EntityModule.prototype._getEntityPool = function(name) {
        for (var i = 0; i < this.entityPools.length; i++) {
          var pool = this.entityPools[i];
          if (pool.name === name) return pool;
        }
        return null;
      };
      EntityModule.prototype._newEntityPool = function(name) {
        var pool = new cc.NodePool(name);
        pool.name = name;
        this.entityPools.push(pool);
        return pool;
      };
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "adFloatLeftItem1", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "adFloatLeftItem2", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "adFloatLeftItem3", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "adListBannerItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "adListCenterItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "adListEndItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "adListExportItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "adListLeftItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "coin", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "easterEggItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "gameCountdown", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "inviteBox", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level1", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level2", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level3", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level4", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level5", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level6", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level7", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level8", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level9", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level10", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level11", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level12", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level13", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level14", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level15", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level16", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level17", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level18", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level19", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level20", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level21", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level22", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level23", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level24", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level25", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level26", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level27", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level28", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level29", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "level30", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "mapItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "nativeAd", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "nativeAdVIVO", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "nativeSmallAdVIVO", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "openBoxItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "packingBigBox", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "packingBox", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "packingCircle", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "packingLongBox", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "packingUpwardBigBox", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "packingUpwardBox", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "packingUpwardLongBox", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "playerBoom", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "playerCar", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "playerCarPart", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "skinItem", void 0);
      __decorate([ property(cc.Prefab) ], EntityModule.prototype, "truckLoader", void 0);
      EntityModule = __decorate([ ccclass ], EntityModule);
      return EntityModule;
    }(BaseModule_1.default);
    exports.default = EntityModule;
    cc._RF.pop();
  }, {
    "../entity/EntityLogic": "EntityLogic",
    "./BaseModule": "BaseModule"
  } ],
  Entitys: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3918bLsqGdEqbUk+ioPm3hm", "Entitys");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIMapping_1 = require("./UIMapping");
    var Entitys = function(_super) {
      __extends(Entitys, _super);
      function Entitys() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(Entitys, "mapping", {
        get: function() {
          var _a;
          return {
            nativeAd: (_a = {}, _a[moosnow.APP_PLATFORM.OPPO] = "nativeAd", _a[moosnow.APP_PLATFORM.OPPO_ZS] = "nativeAd", 
            _a[moosnow.APP_PLATFORM.VIVO] = "nativeAdVIVO", _a)
          };
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Entitys, "nativeAd", {
        get: function() {
          return this.convertUIName(this.mapping.nativeAd);
        },
        enumerable: true,
        configurable: true
      });
      return Entitys;
    }(UIMapping_1.default);
    exports.default = Entitys;
    cc._RF.pop();
  }, {
    "./UIMapping": "UIMapping"
  } ],
  EventType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84144IDHxFCyKrGLYLIXVsv", "EventType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventType = function() {
      function EventType() {}
      EventType.GAME_STATE_START = "GAME_STATE_START";
      EventType.GAME_STATE_OVER = "GAME_STATE_OVER";
      EventType.GAME_STATE_END = "GAME_STATE_END";
      EventType.GAME_STATE_RESPAWN = "GAME_STATE_RESPAWN";
      EventType.GAME_STATE_PAUSE = "GAME_STATE_PAUSE";
      EventType.GAME_STATE_RESUME = "GAME_STATE_RESUME";
      EventType.GAME_STATE_NEXT = "GAME_STATE_NEXT";
      EventType.GAME_STATE_REPLAY = "GAME_STATE_REPLAY";
      EventType.GAME_STATE_CANCEL = "GAME_STATE_CANCEL";
      EventType.GAME_STATE_FAST_END = "GAME_STATE_FAST_END";
      EventType.VIBRATESWITCH_CHANGED = "VIBRATESWITCH_CHANGED";
      EventType.SOUNDSWITCH_CHANGED = "SOUNDSWITCH_CHANGED";
      EventType.MUSICSWITCH_CHANGED = "MUSICSWITCH_CHANGED";
      EventType.ON_PLATFORM_SHOW = "ON_PLATFORM_SHOW";
      EventType.ON_PLATFORM_HIDE = "ON_PLATFORM_HIDE";
      EventType.GAME_TIME_OUT = "GAME_TIME_OUT";
      EventType.AD_VIEW_CHANGE = "AD_VIEW_CHANGE";
      EventType.ADFORM_CHANGE = "ADFORM_CHANGE";
      EventType.SKIN_CHANGE = "SKIN_CHANGE";
      EventType.SKIN_UNLOCK = "SKIN_UNLOCK";
      EventType.SKIN_SELECT = "SKIN_SELECT";
      EventType.GAME_STATE_RESPAWN_COMPLETED = "GAME_STATE_RESPAWN_COMPLETED";
      EventType.GAME_PROGRESS = "GAME_PROGRESS";
      EventType.TRUCK_MOVE_OUT = "TRUCK_MOVE_OUT";
      EventType.TOUCH_UP = "TOUCH_UP";
      EventType.TOUCH_MOVE = "TOUCH_MOVE";
      EventType.TOUCH_DOWN = "TOUCH_DOWN";
      EventType.ROCKER_MOVE = "ROCKER_MOVE";
      EventType.ROCKER_END = "ROCKER_END";
      EventType.SCENE_LOADED = "SCENE_LOADED";
      EventType.LEVEL_CHANGED = "LEVEL_CHANGED";
      EventType.COIN_CHANGED = "LEVEL_CHANGED";
      EventType.DIAMOND_CHANGED = "DIAMOND_CHANGED";
      EventType.GOTO_HOME = "GOTO_HOME";
      EventType.PLAYER_DIED = "PLAYER_DIED";
      EventType.TRYING = "TRYING";
      EventType.LAYOUT_LOADED = "LAYOUT_LOADED";
      EventType.GAME_LOGIN = "GAMELOGIN";
      EventType.CAMERA_FOLLOW_FRIENDLY = "CAMERA_FOLLOW_FRIENDLY";
      EventType.RELOAD_LEVEL = "RELOAD_LEVEL";
      EventType.LEVEL_FINAL = "LEVEL_FINAL";
      EventType.ROLE_MOVE = "ROLE_MOVE";
      EventType.CLAW_MOVE = "CLAW_MOVE";
      EventType.AD_LOADED = "AD_LOADED";
      EventType.DOOR_MOVE = "DOOR_MOVE";
      EventType.JUMP = "JUMP";
      EventType.SUCKER_START = "SUCKER_START";
      EventType.SUCKER_END = "SUCKER_END";
      EventType.BOX_STOP = "BOX_STOP";
      EventType.PRIZE_BOX_UNLOCAK = "PRIZE_BOX_UNLOCAK";
      EventType.EGG_TIP = "EGG_TIP";
      EventType.EGG_SKIN_USE = "EGG_SKIN_USE";
      return EventType;
    }();
    exports.default = EventType;
    cc._RF.pop();
  }, {} ],
  GameDataCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20893XGhcFIXq/Eim7yIV/L", "GameDataCenter");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseModule_1 = require("../framework/modules/BaseModule");
    var EventType_1 = require("../utils/EventType");
    var Common_1 = require("../utils/Common");
    var LevelCfg_1 = require("../../sheets/vo/LevelCfg");
    var Skin_1 = require("../../sheets/vo/Skin");
    var GameDataCenter = function(_super) {
      __extends(GameDataCenter, _super);
      function GameDataCenter() {
        var _this = _super.call(this) || this;
        _this.CURRENT_NEW_USER = "CURRENT_NEW_USER";
        _this.VIBRATE_SWITCH = "VIBRATE_SWITCH";
        _this.CURRENT_LEVEL = "CURRENT_LEVEL";
        _this.TOKEN = "token";
        _this.OPEN_ID = "OPEN_ID";
        _this.USER_LEVEL = "USER_LEVEL";
        _this.COIN = "COIN";
        _this.DIAMOND = "DIAMOND";
        _this.SIGN_NUM = "SIGN_NUM";
        _this.SIGN_DATE = "SIGN_DATE";
        _this.TRYING_DATE = "TRYING_DATE";
        _this.TRYING_GUN = "TRYING_GUN";
        _this.EGG_SKIN = "EGG_SKIN";
        _this.USE_EGG_SKIN = "USE_EGG_SKIN";
        _this.SIGN_VIDEO_DATE = "SIGN_VIDEO_DATE";
        _this.COIN_ADD = "COIN_ADD";
        _this.AIR_DROP_NUM = "AIR_DROP_NUM";
        _this.BENEFITS_TIME = "BENEFITS_TIME";
        _this.CURRENT_SKIN = "CURRENT_SKIN";
        _this.USER_SKIN = "USER_SKIN";
        _this.USER_PRIZE_BOX = "USER_PRIZE_BOX";
        _this.USER_PRIZE_KEY = "USER_PRIZE_KEY";
        _this.MIS_TOUCH_POS_COUNT = "MIS_TOUCH_POS_COUNT";
        _this.mCurrentMisTouchCount = 0;
        _this.mUserLevel = null;
        _this.mCoin = 0;
        _this.mDiamond = 0;
        _this.mMistouchTag = 1;
        _this.initNewData();
        return _this;
      }
      GameDataCenter.prototype.getCurrentMisTouchCount = function() {
        return this.mCurrentMisTouchCount;
      };
      GameDataCenter.prototype.setCurrentMisTouchCount = function(num) {
        this.mCurrentMisTouchCount = num;
      };
      GameDataCenter.prototype.getCoinAdd = function() {
        return moosnow.setting.getInt(this.COIN_ADD, 1);
      };
      GameDataCenter.prototype.setCoinAdd = function(num) {
        moosnow.setting.setValue(this.COIN_ADD, num);
      };
      GameDataCenter.prototype.getIsNew = function() {
        return moosnow.setting.getBool(this.CURRENT_NEW_USER, true);
      };
      GameDataCenter.prototype.setIsNew = function(on) {
        moosnow.setting.setBool(this.CURRENT_NEW_USER, on);
      };
      GameDataCenter.prototype.getToken = function() {
        return moosnow.setting.getString(this.TOKEN, "");
      };
      GameDataCenter.prototype.setToken = function(v) {
        moosnow.setting.setValue(this.TOKEN, v);
      };
      GameDataCenter.prototype.getOpenid = function() {
        return moosnow.setting.getString(this.OPEN_ID, "");
      };
      GameDataCenter.prototype.setOpenid = function(v) {
        moosnow.setting.setValue(this.OPEN_ID, v);
      };
      GameDataCenter.prototype.getVibrateSetting = function() {
        return moosnow.setting.getBool(this.VIBRATE_SWITCH, true);
      };
      GameDataCenter.prototype.setVibrateSetting = function(on) {
        moosnow.setting.setBool(this.VIBRATE_SWITCH, on);
        moosnow.event.sendEventImmediately(EventType_1.default.VIBRATESWITCH_CHANGED, on);
      };
      GameDataCenter.prototype.initNewData = function() {
        if (this.getToken()) return;
        moosnow.setting.setValue(this.CURRENT_LEVEL, 0);
        moosnow.setting.setValue(this.COIN, 500);
        moosnow.setting.setObject(this.USER_SKIN, {
          10001: {
            coinNum: 1e3
          }
        });
      };
      GameDataCenter.prototype.getAirdropNum = function() {
        return moosnow.setting.getInt(this.AIR_DROP_NUM, 10);
      };
      GameDataCenter.prototype.setAirdropNum = function(value) {
        void 0 === value && (value = 1);
        var v = moosnow.setting.setValue(this.AIR_DROP_NUM, value);
      };
      GameDataCenter.prototype.getBenefitsTime = function() {
        return moosnow.setting.getInt(this.BENEFITS_TIME, 0);
      };
      GameDataCenter.prototype.setBenefitsTime = function(num) {
        moosnow.setting.setValue(this.BENEFITS_TIME, num);
      };
      GameDataCenter.prototype.getCurrentLevel = function() {
        if (!this.mCurrentLevel) return moosnow.setting.getInt(this.CURRENT_LEVEL, 0);
        return this.mCurrentLevel;
      };
      GameDataCenter.prototype.setCurrentLevel = function(value) {
        this.mCurrentLevel = value;
        return moosnow.setting.getInt(this.CURRENT_LEVEL, value);
      };
      GameDataCenter.prototype.addCurrentLevel = function(value) {
        void 0 === value && (value = 1);
        var v = moosnow.setting.appendInt(this.CURRENT_LEVEL, value);
        this.mCurrentLevel = v;
        moosnow.event.sendEventImmediately(EventType_1.default.LEVEL_CHANGED, v);
      };
      GameDataCenter.prototype.getUserLevel = function() {
        this.mUserLevel || (this.mUserLevel = moosnow.setting.getObject(this.USER_LEVEL, "{}"));
        return this.mUserLevel;
      };
      GameDataCenter.prototype.getMaxLevel = function() {
        var maxLevel = 0;
        var userLevel = Lite.data.getUserLevel();
        for (var k in userLevel) parseInt(k) > maxLevel && (maxLevel = parseInt(k));
        return maxLevel + 1;
      };
      GameDataCenter.prototype.initUserLevel = function() {
        var all = LevelCfg_1.LevelCfg.getAll();
        var playerLevel = this.getUserLevel();
        if (Common_1.default.isEmpty(playerLevel)) {
          for (var i = 0; i < all.length; i++) {
            var prefab = all[i].prefab;
            playerLevel[i] = {
              time: 0,
              prefab: prefab
            };
          }
          moosnow.setting.setObject(this.USER_LEVEL, this.mUserLevel);
        }
      };
      GameDataCenter.prototype.setUserLevel = function(level, time) {
        void 0 === time && (time = 0);
        var playerLevel = this.getUserLevel();
        playerLevel[level] && (playerLevel[level].time = time);
        moosnow.setting.setObject(this.USER_LEVEL, this.mUserLevel);
      };
      GameDataCenter.prototype.getNextLevel = function() {
        var playerLevel = this.getUserLevel();
        var nextLv = this.getCurrentLevel();
        for (var lv in playerLevel) 0 == playerLevel[lv].time && parseInt(lv) < nextLv && (nextLv = parseInt(lv));
        return nextLv;
      };
      GameDataCenter.prototype.getCoin = function() {
        0 == this.mCoin && (this.mCoin = moosnow.setting.getInt(this.COIN, 0));
        return this.mCoin;
      };
      GameDataCenter.prototype.subCoin = function(v) {
        this.mCoin -= v;
        moosnow.event.sendEventImmediately(EventType_1.default.COIN_CHANGED, this.mCoin);
      };
      GameDataCenter.prototype.addCoin = function(v) {
        this.mCoin += v;
        moosnow.event.sendEventImmediately(EventType_1.default.COIN_CHANGED, this.mCoin);
      };
      GameDataCenter.prototype.setCoin = function(v) {
        this.mCoin = v;
        moosnow.event.sendEventImmediately(EventType_1.default.COIN_CHANGED, this.mCoin);
      };
      GameDataCenter.prototype.saveCoin = function() {
        moosnow.setting.setValue(this.COIN, this.mCoin);
      };
      GameDataCenter.prototype.getDiamond = function() {
        0 == this.mDiamond && (this.mDiamond = moosnow.setting.getInt(this.DIAMOND, 0));
        return this.mDiamond;
      };
      GameDataCenter.prototype.subDiamond = function(v) {
        this.mDiamond -= v;
        moosnow.event.sendEventImmediately(EventType_1.default.DIAMOND_CHANGED, this.mDiamond);
      };
      GameDataCenter.prototype.addDiamond = function(v) {
        this.mDiamond += v;
        moosnow.event.sendEventImmediately(EventType_1.default.DIAMOND_CHANGED, this.mDiamond);
      };
      GameDataCenter.prototype.setDiamond = function(v) {
        this.mDiamond = v;
        moosnow.event.sendEventImmediately(EventType_1.default.DIAMOND_CHANGED, this.mDiamond);
      };
      GameDataCenter.prototype.saveDiamond = function() {
        moosnow.setting.setValue(this.DIAMOND, this.mDiamond);
      };
      GameDataCenter.prototype.getSignNum = function() {
        return moosnow.setting.getInt(this.SIGN_NUM, 0);
      };
      GameDataCenter.prototype.addSignNum = function() {
        moosnow.setting.appendInt(this.SIGN_NUM, 1);
        moosnow.setting.setValue(this.SIGN_DATE, Common_1.default.formatTime(new Date()));
      };
      GameDataCenter.prototype.setVideoSign = function() {
        moosnow.setting.setValue(this.SIGN_VIDEO_DATE, Common_1.default.formatTime(new Date()));
      };
      GameDataCenter.prototype.getIsSign = function() {
        var now = Common_1.default.formatTime(new Date());
        return now == moosnow.setting.getString(this.SIGN_DATE, "");
      };
      GameDataCenter.prototype.getIsVideoSign = function() {
        var now = Common_1.default.formatTime(new Date());
        return now == moosnow.setting.getString(this.SIGN_VIDEO_DATE, "");
      };
      GameDataCenter.prototype.getCurrentSkinId = function() {
        this.mCurrentSkinId || (this.mCurrentSkinId = moosnow.setting.getInt(this.CURRENT_SKIN, 10001));
        return this.mCurrentSkinId;
      };
      GameDataCenter.prototype.setCurrentSkinId = function(skinId) {
        this.mCurrentSkinId = skinId;
        moosnow.setting.setValue(this.CURRENT_SKIN, skinId);
        return this.mCurrentSkinId;
      };
      GameDataCenter.prototype.getUserSkin = function() {
        this.mUserSkin || (this.mUserSkin = moosnow.setting.getObject(this.USER_SKIN, "{}"));
        return this.mUserSkin;
      };
      GameDataCenter.prototype.addUserSkinCoin = function(skinId) {
        var userSkin = this.getUserSkin();
        var addSkin = Skin_1.Skin.get(skinId);
        userSkin[skinId] || (userSkin[skinId] = {
          coinNum: addSkin.coinNum
        });
        this.mUserSkin = userSkin;
        moosnow.setting.setObject(this.USER_SKIN, this.mUserSkin);
        return this.mUserSkin;
      };
      GameDataCenter.prototype.addUserSkinVideo = function(skinId) {
        var userSkin = this.getUserSkin();
        userSkin[skinId] ? userSkin[skinId].videoNum += 1 : userSkin[skinId] = {
          videoNum: 1
        };
        this.mUserSkin = userSkin;
        moosnow.setting.setObject(this.USER_SKIN, this.mUserSkin);
        return this.mUserSkin;
      };
      GameDataCenter.prototype.getUserSkinById = function(skinId) {
        var userSkin = this.getUserSkin();
        return userSkin[skinId];
      };
      GameDataCenter.prototype.addTrying = function(tryingId) {
        moosnow.setting.setValue(this.TRYING_GUN, tryingId);
        moosnow.setting.setValue(this.TRYING_DATE, Common_1.default.formatTime(new Date()));
      };
      GameDataCenter.prototype.getIsTrying = function() {
        var now = Common_1.default.formatTime(new Date());
        return now == moosnow.setting.getString(this.TRYING_DATE, "");
      };
      GameDataCenter.prototype.getTrying = function() {
        return moosnow.setting.getInt(this.TRYING_GUN, 0);
      };
      GameDataCenter.prototype.getSelectSkin = function() {
        this.mSelectSkin || (this.mSelectSkin = this.getCurrentSkinId());
        return this.mSelectSkin;
      };
      GameDataCenter.prototype.setSelectSkin = function(value) {
        this.mSelectSkin = value;
      };
      GameDataCenter.prototype.getMistouchTag = function() {
        return this.mMistouchTag;
      };
      GameDataCenter.prototype.setMistouchTag = function(value) {
        this.mMistouchTag = value;
      };
      GameDataCenter.prototype.getPrizeBox = function() {
        this.mPrizeBox || (this.mPrizeBox = {});
        return this.mPrizeBox;
      };
      GameDataCenter.prototype.clearPrizeBox = function() {
        this.mPrizeBox = {};
      };
      GameDataCenter.prototype.lockPrizeBox = function(prizeId, type, coinNum) {
        void 0 === coinNum && (coinNum = 0);
        var userBox = this.getPrizeBox();
        userBox[prizeId] = {
          prizeId: prizeId,
          type: 0 == type ? 0 : 1,
          coinNum: coinNum
        };
        this.mPrizeBox = userBox;
      };
      GameDataCenter.prototype.getUserPrizeBoxById = function(prizeId) {
        var userBox = this.getPrizeBox();
        return userBox[prizeId];
      };
      GameDataCenter.prototype.getPrizeKey = function() {
        null == this.mPrizeKey && (this.mPrizeKey = 3);
        return this.mPrizeKey;
      };
      GameDataCenter.prototype.addPrizeKey = function(keyNum) {
        this.mPrizeKey += keyNum;
      };
      GameDataCenter.prototype.clearPrizeKey = function() {
        this.mPrizeKey = null;
        moosnow.setting.setValue(this.USER_PRIZE_KEY, "");
      };
      GameDataCenter.prototype.getEggSkin = function() {
        this.mEggSkin || (this.mEggSkin = moosnow.setting.getObject(this.EGG_SKIN, "{}"));
        return this.mEggSkin;
      };
      GameDataCenter.prototype.hasEggSkin = function(id) {
        var eggSkin = this.getEggSkin();
        return !!eggSkin[id];
      };
      GameDataCenter.prototype.unlockEggSkin = function(id) {
        var eggSkin = this.getEggSkin();
        eggSkin[id] = true;
        moosnow.setting.setObject(this.EGG_SKIN, eggSkin);
      };
      GameDataCenter.prototype.useEggSkin = function(id) {
        moosnow.setting.setValue(this.USE_EGG_SKIN, id);
      };
      GameDataCenter.prototype.getUseEggSkin = function() {
        return moosnow.setting.getInt(this.USE_EGG_SKIN, 0);
      };
      GameDataCenter.prototype.clearUseEggSkin = function() {
        moosnow.setting.setValue(this.USE_EGG_SKIN, "0");
      };
      return GameDataCenter;
    }(BaseModule_1.default);
    exports.default = GameDataCenter;
    cc._RF.pop();
  }, {
    "../../sheets/vo/LevelCfg": "LevelCfg",
    "../../sheets/vo/Skin": "Skin",
    "../framework/modules/BaseModule": "BaseModule",
    "../utils/Common": "Common",
    "../utils/EventType": "EventType"
  } ],
  GameLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3372cAZdgVPy5M0W6kKU1nw", "GameLogic");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameLogic = function() {
      function GameLogic() {}
      return GameLogic;
    }();
    exports.default = GameLogic;
    cc._RF.pop();
  }, {} ],
  GameState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68601zqxg1I85/LwCfGqT+t", "GameState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseModule_1 = require("./BaseModule");
    var UIForms_1 = require("../../config/UIForms");
    var EventType_1 = require("../../utils/EventType");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameState = function(_super) {
      __extends(GameState, _super);
      function GameState() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gamePause = true;
        _this.gameStarted = false;
        _this.isBoss = false;
        _this.mBeginTime = 0;
        return _this;
      }
      GameState.prototype.start = function() {
        var _this = this;
        Lite.myGame = this;
        moosnow.event.addListener(EventType_1.default.GAME_STATE_START, this, this.startGame);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_OVER, this, this.gameOver);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_RESPAWN, this, this.respawn);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_RESUME, this, this.resumeGame);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_PAUSE, this, this.pauseGame);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_NEXT, this, this.nextGame);
        moosnow.event.addListener(EventType_1.default.RELOAD_LEVEL, this, this.onLevelReload);
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_PLATFORM_HIDE, this, function(res) {
          console.log("game state  ON_PLATFORM_HIDE ", res);
          Lite.audio.stopMusic();
          Lite.audio.stopLoaderMagnet();
        });
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_PLATFORM_SHOW, this, function(res) {
          console.log("game state  ON_PLATFORM_SHOW ", res);
          moosnow.platform.videoPlaying || _this.playBgMusic();
        });
      };
      GameState.prototype.playBgMusic = function() {
        this.isBoss ? Lite.audio.playBossMusic() : Lite.audio.playGameMusic();
      };
      GameState.prototype.startGame = function(lvIndex) {
        var _this = this;
        this.mBeginTime = Date.now();
        this.isBoss = false;
        Lite.audio.stopMusic();
        Lite.ui.hideUIForm(UIForms_1.default.HomeForm, null, function() {
          _this.playBgMusic();
          _this.resumeGame();
          moosnow.platform.startRecord();
          _this.gameStarted = true;
          console.log("\u6e38\u620f\u5173\u5361 ", lvIndex);
          var gameForm = Lite.ui.getUIFrom(UIForms_1.default.GameForm);
          gameForm || Lite.ui.pushUIForm(UIForms_1.default.GameForm, {
            lvIndex: lvIndex,
            beginTime: _this.mBeginTime
          });
        });
        moosnow.http.startGame(lvIndex);
      };
      GameState.prototype.onGameCancel = function() {
        Lite.ui.hideUIForm(UIForms_1.default.GameForm, null);
        Lite.ui.pushUIForm(UIForms_1.default.HomeForm);
      };
      GameState.prototype.onLevelReload = function() {
        this.resumeGame();
      };
      GameState.prototype.pauseGame = function() {
        this.gamePause = true;
        Lite.entity.pause();
      };
      GameState.prototype.resumeGame = function() {
        this.gamePause = false;
        Lite.entity.resume();
      };
      GameState.prototype.respawn = function() {
        var _this = this;
        Lite.audio.playRespawnEffect(function() {
          _this.playBgMusic();
        });
        this.resumeGame();
      };
      GameState.prototype.gameOver = function(e) {
        if (!this.gameStarted) return;
        this.pauseGame();
        this.gameStarted = false;
        Lite.audio.stopMusic();
        var respawnNum = parseInt(Lite.config.respawnNum);
        var level = Lite.data.getCurrentLevel();
        var t = Date.now() - this.mBeginTime;
        var curApp = moosnow.getAppPlatform();
        if (curApp == moosnow.APP_PLATFORM.BYTEDANCE) {
          Lite.ui.hideUIForm(UIForms_1.default.GameForm, null);
          Lite.ui.pushUIForm(UIForms_1.default.ShareForm, {
            isWin: e.isWin,
            fail: e.fail,
            level: e.level,
            useTime: t
          }, function() {
            if (e.isWin) {
              Lite.data.setUserLevel(e.level, t);
              e.level == level && Lite.data.addCurrentLevel();
            }
            moosnow.http.endGame(e.isWin, e.level);
          });
        } else if (curApp == moosnow.APP_PLATFORM.QQ) {
          Lite.ui.hideUIForm(UIForms_1.default.GameForm, null);
          moosnow.http.getMisTouchNum(function(val) {
            0 == val ? Lite.ui.pushUIForm(UIForms_1.default.TotalForm, {
              isWin: e.isWin,
              fail: e.fail,
              level: e.level,
              useTime: t
            }, function() {
              if (e.isWin) {
                Lite.data.setUserLevel(e.level, t);
                e.level == level && Lite.data.addCurrentLevel();
              }
              moosnow.http.endGame(e.isWin, e.level);
            }) : Lite.ui.pushUIForm(UIForms_1.default.MistouchForm, {
              mistouchType: 4,
              isWin: e.isWin,
              fail: e.fail,
              level: e.level,
              useTime: t
            }, function() {
              if (e.isWin) {
                Lite.data.setUserLevel(e.level, t);
                e.level == level && Lite.data.addCurrentLevel();
              }
              moosnow.http.endGame(e.isWin, e.level);
            });
          });
        } else if (curApp == moosnow.APP_PLATFORM.OPPO || curApp == moosnow.APP_PLATFORM.OPPO_ZS || curApp == moosnow.APP_PLATFORM.VIVO) {
          Lite.ui.hideUIForm(UIForms_1.default.GameForm, null);
          Lite.ui.pushUIForm(UIForms_1.default.TotalForm, {
            isWin: e.isWin,
            fail: e.fail,
            level: e.level,
            useTime: t
          }, function() {
            if (e.isWin) {
              Lite.data.setUserLevel(e.level, t);
              e.level == level && Lite.data.addCurrentLevel();
            }
            moosnow.http.endGame(e.isWin, e.level);
          });
        } else {
          moosnow.platform.hideBanner();
          moosnow.form.showAd(moosnow.AD_POSITION.CENTER | moosnow.AD_POSITION.BACK | moosnow.AD_POSITION.WAIT, function() {
            Lite.ui.hideUIForm(UIForms_1.default.GameForm, null);
            Lite.ui.pushUIForm(UIForms_1.default.EndForm, {
              isWin: e.isWin,
              fail: e.fail,
              level: e.level,
              useTime: t
            }, function() {
              if (e.isWin) {
                Lite.data.setUserLevel(e.level, t);
                e.level == level && Lite.data.addCurrentLevel();
              }
              moosnow.http.endGame(e.isWin, e.level);
            });
          });
        }
      };
      GameState.prototype.nextGame = function(isOpen) {
        if (this.gameStarted) return;
        this.gameStarted = true;
        this.resumeGame();
        this.playBgMusic();
        var lv = Lite.data.getCurrentLevel();
        this.mBeginTime = Date.now();
        var gameForm = Lite.ui.getUIFrom(UIForms_1.default.GameForm);
        gameForm || Lite.ui.pushUIForm(UIForms_1.default.GameForm, {
          lvIndex: lv,
          beginTime: this.mBeginTime
        });
      };
      GameState = __decorate([ ccclass ], GameState);
      return GameState;
    }(BaseModule_1.default);
    exports.default = GameState;
    cc._RF.pop();
  }, {
    "../../config/UIForms": "UIForms",
    "../../utils/EventType": "EventType",
    "./BaseModule": "BaseModule"
  } ],
  Helloworld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Helloworld = function(_super) {
      __extends(Helloworld, _super);
      function Helloworld() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.videoPath = "";
        return _this;
      }
      Helloworld.prototype.start = function() {
        this.label.string = this.text;
        this.scheduleOnce(function() {
          moosnow.http.getAllConfig(function(res) {
            console.log("\u6240\u6709\u914d\u7f6e", res);
          });
        }, 5);
        moosnow.form.preloadAd();
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_PLATFORM_HIDE, this, function(res) {
          console.log("\u5e73\u53f0\u9690\u85cf\u65f6", res);
        });
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_PLATFORM_SHOW, this, function(res) {
          console.log("\u5e73\u53f0\u663e\u793a\u65f6", res);
        });
      };
      Helloworld.prototype.showToast = function() {
        moosnow.form.showToast("\u8fd9\u662f\u4e00\u4e2aToast\u6d88\u606f");
      };
      Helloworld.prototype.testHttp = function() {
        moosnow.http.request("https://cdn.liteplay.com.cn/config/wxeb720d78f75a425f.json", {}, "GET", function(res) {
          console.log("testHttp success ", res);
        }, function(res) {
          console.log("testHttp error ", res);
        });
      };
      Helloworld.prototype.showMistouch = function() {
        var options = new moosnow.showOptions.touchOptions();
        options.type = 2;
        options.callback = function() {};
        moosnow.form.showMistouch(options);
      };
      Helloworld.prototype.showCoin = function() {
        var options = new moosnow.showOptions.coinOptions();
        options.coinNum = 500;
        options.callback = function() {
          console.log("\u91d1\u5e01\u52a8\u753b\u5b8c\u6210");
        };
        moosnow.form.showCoin(options);
      };
      Helloworld.prototype.showShare = function() {
        var coinOptions = new moosnow.showOptions.coinOptions();
        coinOptions.coinNum = 500;
        coinOptions.endVec = {
          x: 800,
          y: 300
        };
        coinOptions.callback = function() {
          console.log("\u91d1\u5e01\u52a8\u753b\u5b8c\u62103");
        };
        var options = new moosnow.showOptions.shareOptions();
        options.shareCoinNum = 500;
        options.shareCallback = function(shared) {
          console.log("\u5206\u4eab", shared);
          moosnow.form.showCoin(coinOptions);
        };
        options.videoCallback = function() {
          console.log("\u89c6\u9891\u7ed3\u675f");
          moosnow.form.showCoin(coinOptions);
        };
        options.callback = function() {
          console.log("\u7ed3\u675f");
          moosnow.form.showCoin(coinOptions);
        };
        moosnow.form.showShare(options);
      };
      Helloworld.prototype.showPrize = function() {
        var coinOptions = new moosnow.showOptions.coinOptions();
        coinOptions.coinNum = 500;
        coinOptions.callback = function() {
          console.log("\u91d1\u5e01\u52a8\u753b\u5b8c\u62102");
        };
        var options = new moosnow.showOptions.prizeOptions();
        options.callback = function() {
          console.log("\u5956\u52b1\u5b8c\u6210");
        };
        options.showCoinAnim = true;
        options.coinOptions = coinOptions;
        moosnow.form.showPrize(options);
      };
      Helloworld.prototype.showPrize2 = function() {
        var options = new moosnow.showOptions.prizeOptions();
        options.callback = function() {
          console.log("\u5956\u52b1\u5b8c\u6210");
        };
        options.showCoinAnim = false;
        moosnow.form.showPrize(options);
      };
      Helloworld.prototype.showAd4 = function() {
        moosnow.form.showAd(moosnow.AD_POSITION.TOP, function() {});
      };
      Helloworld.prototype.showAd3 = function() {
        moosnow.form.showAd(moosnow.AD_POSITION.EXPORT_FIXED | moosnow.AD_POSITION.MASK | moosnow.AD_POSITION.WAIT | moosnow.AD_POSITION.BACK, function() {
          moosnow.form.showAd(moosnow.AD_POSITION.BANNER | moosnow.AD_POSITION.FLOAT | moosnow.AD_POSITION.SIDE, function() {});
        });
      };
      Helloworld.prototype.showAd2 = function() {
        moosnow.form.showAd(moosnow.AD_POSITION.CENTER | moosnow.AD_POSITION.MASK | moosnow.AD_POSITION.WAIT | moosnow.AD_POSITION.BACK, function() {
          moosnow.form.showAd(moosnow.AD_POSITION.BANNER | moosnow.AD_POSITION.FLOAT | moosnow.AD_POSITION.SIDE, function() {});
        });
      };
      Helloworld.prototype.showAd = function() {
        moosnow.form.showAd(moosnow.AD_POSITION.EXPORT | moosnow.AD_POSITION.MASK | moosnow.AD_POSITION.WAIT | moosnow.AD_POSITION.BACK, function() {
          moosnow.form.showAd(moosnow.AD_POSITION.BANNER | moosnow.AD_POSITION.FLOAT | moosnow.AD_POSITION.SIDE, function() {});
        });
      };
      Helloworld.prototype.showTotal = function() {
        var touchOptions = new moosnow.showOptions.touchOptions();
        touchOptions.type = 1;
        touchOptions.callback = function() {
          console.log("\u8bef\u89e6\u9875-\u7ed3\u675f");
        };
        var coinOptions = new moosnow.showOptions.coinOptions();
        coinOptions.endVec = {
          x: 500,
          y: 500
        };
        coinOptions.starVec = {
          x: 0,
          y: 0
        };
        var endOptions = new moosnow.showOptions.endOptions();
        endOptions.isWin = true;
        endOptions.onReceive = function() {
          console.log("\u7ed3\u675f\u9875-\u70b9\u4e86\u9886\u53d6");
        };
        endOptions.onVideoReceive = function() {
          console.log("\u7ed3\u675f\u9875-\u70b9\u4e86\u9886\u53d6");
        };
        var options = new moosnow.showOptions.totalOptions();
        options.coinNum = 500;
        options.videoNum = 1e3;
        options.shareCoinNum = 1500;
        options.onReceive = function() {
          console.log("\u7ed3\u675f\u9875-\u70b9\u4e86\u9886\u53d6");
        };
        options.onVideoReceive = function() {
          console.log("\u7ed3\u675f\u9875-\u70b9\u4e86\u89c6\u9891\u9886\u53d6");
        };
        options.onMore = function() {
          console.log("\u70b9\u4e86\u66f4\u591a\u6e38\u620f");
        };
        options.endOptions = endOptions;
        options.coinOptions = coinOptions;
        options.touchOptions = touchOptions;
        moosnow.form.showTotal(options);
      };
      Helloworld.prototype.showRespawn = function() {
        moosnow.ui.pushUIForm(moosnow.formSetting.RespawnForm, {
          coin: 500,
          shareCoin: 1e3
        });
      };
      Helloworld.prototype.hideAd = function() {
        moosnow.form.showAd(moosnow.AD_POSITION.NONE, null);
      };
      Helloworld.prototype.showVideo = function() {
        moosnow.platform.showVideo(function(res) {
          switch (res) {
           case moosnow.VIDEO_STATUS.NOTEND:
            console.log("\u89c6\u9891\u672a\u89c2\u770b\u5b8c\u6210 ");
            break;

           case moosnow.VIDEO_STATUS.ERR:
            console.log("\u83b7\u53d6\u89c6\u9891\u9519\u8bef ");
            break;

           case moosnow.VIDEO_STATUS.END:
            console.log("\u89c2\u770b\u89c6\u9891\u7ed3\u675f ");
          }
        });
      };
      Helloworld.prototype.showBanner = function() {
        moosnow.platform.showBanner();
      };
      Helloworld.prototype.showBottomBanner = function() {
        moosnow.platform.showBanner(false, function() {}, moosnow.BANNER_POSITION.BOTTOM);
      };
      Helloworld.prototype.showCenterBanner = function() {
        moosnow.platform.showBanner(false, function() {}, moosnow.BANNER_POSITION.CENTER);
      };
      Helloworld.prototype.showTopBanner = function() {
        moosnow.platform.showBanner(false, function() {}, moosnow.BANNER_POSITION.TOP);
      };
      Helloworld.prototype.showAutoBanner = function() {
        moosnow.platform.showAutoBanner();
      };
      Helloworld.prototype.showIntervalBanner = function() {
        moosnow.platform.showIntervalBanner();
      };
      Helloworld.prototype.hideBanner = function() {
        moosnow.platform.hideBanner();
        moosnow.platform.clearIntervalBanner();
      };
      Helloworld.prototype.showBox = function() {
        moosnow.platform.showAppBox(function() {
          console.log("\u5173\u95ed\u76d2\u5b50");
        });
      };
      Helloworld.prototype.showNativeBanner = function() {};
      Helloworld.prototype.startRecord = function() {
        moosnow.platform.startRecord();
      };
      Helloworld.prototype.stopRecord = function() {
        var _this = this;
        moosnow.platform.stopRecord(function(res) {
          res.videoPath && (_this.videoPath = res.videoPath);
        });
      };
      Helloworld.prototype.shareRecord = function() {
        moosnow.platform.share({
          channel: moosnow.SHARE_CHANNEL.VIDEO
        }, function(res) {
          console.log("\u5206\u4eab\u7ed3\u675f", res);
        }, function(err) {
          console.log("\u89c6\u9891\u592a\u77ed", err);
        });
      };
      Helloworld.prototype.showInter = function() {
        moosnow.platform.showInter();
      };
      Helloworld.prototype.navigate2Mini = function() {};
      __decorate([ property(cc.Label) ], Helloworld.prototype, "label", void 0);
      __decorate([ property ], Helloworld.prototype, "text", void 0);
      Helloworld = __decorate([ ccclass ], Helloworld);
      return Helloworld;
    }(cc.Component);
    exports.default = Helloworld;
    cc._RF.pop();
  }, {} ],
  LevelCfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd1cdykPRVLR6MRisEmvYlK", "LevelCfg");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/utils/SheetManager");
    var LevelCfg = function(_super) {
      __extends(LevelCfg, _super);
      function LevelCfg() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LevelCfg.get = function(id) {
        if (this[id]) return this[id];
        return SheetManager_1.SheetManager.get("LevelCfg", id, LevelCfg);
      };
      LevelCfg.getAll = function() {
        var obj = SheetManager_1.SheetManager.getList("LevelCfg");
        var a = [];
        var vo;
        for (var key in obj) {
          "keys" != key && (vo = LevelCfg.get(key));
          vo && (a.push(vo), vo = null);
        }
        return a;
      };
      return LevelCfg;
    }(Sheets_1.LevelCfgBase);
    exports.LevelCfg = LevelCfg;
    cc._RF.pop();
  }, {
    "../../script/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  LoaderManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28dbb2QCG9AGZYT7pySYoSZ", "LoaderManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LoaderManager = function() {
      function LoaderManager() {}
      LoaderManager.preLoad3D = function(urls) {
        var _this = this;
        return new Promise(function(resolve) {
          0 == urls.length ? resolve() : Laya.Sprite3D.load(urls, Laya.Handler.create(_this, function() {
            resolve();
          }, null, false));
        });
      };
      LoaderManager.preLoad = function(urls) {
        var _this = this;
        return new Promise(function(resolve) {
          0 == urls.length ? resolve() : Laya.loader.load(urls, Laya.Handler.create(_this, function() {
            resolve();
          }, null, false));
        });
      };
      LoaderManager.preLoadTexture2D = function(urls) {
        var _this = this;
        return new Promise(function(resolve) {
          _this.load(urls, resolve);
        });
      };
      LoaderManager.load = function(urls, resolve) {
        var _this = this;
        var url = urls.pop();
        url ? Laya.Texture2D.load(url, Laya.Handler.create(this, function(r) {
          _this.load(urls, resolve);
        }, null, false)) : resolve();
      };
      LoaderManager.get3D = function(url, name, clone) {
        void 0 === clone && (clone = true);
        var sp = Laya.loader.getRes(url);
        if (!clone) return sp.getChildByName(name);
        return sp.getChildByName(name).clone();
      };
      LoaderManager.get3DTo = function(url, name) {
        var sp = Laya.loader.getRes(url);
        var cSp = sp.getChildByName(name);
        var souce = new Laya.Sprite3D();
        souce = cSp.clone();
        return souce;
      };
      LoaderManager.getCamera = function(url, name, clone) {
        void 0 === clone && (clone = true);
        var sp = Laya.loader.getRes(url);
        var camera = sp.getChildByName(name);
        if (!clone) return camera;
        return camera.clone();
      };
      LoaderManager.getLight = function(url, name) {
        var sp = Laya.loader.getRes(url);
        var light = sp.getChildByName(name);
        return light;
      };
      LoaderManager.loadSounds = function(urls) {
        var _this = this;
        return new Promise(function(resovle) {
          _this.preDownFlie(urls, resovle);
        });
      };
      LoaderManager.preDownFlie = function(urls, resovle) {
        var _this = this;
        var url = urls.pop();
        if (!url) {
          resovle();
          return;
        }
        url = this.soundBaseUrl + url;
        if (Laya["BMiniAdapter"]) Laya["BMiniAdapter"].downLoadFile(url, "sound", Laya.Handler.create(this, function() {
          _this.preDownFlie(urls, resovle);
        })); else if (Laya.MiniAdpter) {
          !window["tt"];
          Laya.MiniAdpter.downLoadFile(url, "sound", Laya.Handler.create(this, function() {
            _this.preDownFlie(urls, resovle);
          }));
        } else Laya.loader.load(url, Laya.Handler.create(this, function() {
          _this.preDownFlie(urls, resovle);
        }), null, Laya.Loader.SOUND);
      };
      LoaderManager.registerFont = function(fontUrl, fontName) {
        var _this = this;
        return new Promise(function(resolve) {
          var mBitmapFont = new Laya.BitmapFont();
          mBitmapFont.loadFont(fontUrl, Laya.Handler.create(_this, function() {
            Laya.Text.registerBitmapFont(fontName, mBitmapFont);
            resolve();
          }));
        });
      };
      LoaderManager.preLoadJson = function(urls) {
        var _this = this;
        return new Promise(function(resolve) {
          0 == urls.length ? resolve() : Laya.loader.load(urls, Laya.Handler.create(_this, function() {
            resolve();
          }), null, Laya.Loader.JSON);
        });
      };
      LoaderManager.soundBaseUrl = "";
      return LoaderManager;
    }();
    exports.LoaderManager = LoaderManager;
    cc._RF.pop();
  }, {} ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d34dTxE1JBhYgn1JhZxyWL", "Loading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SheetManager_1 = require("./utils/SheetManager");
    var ConfigData_1 = require("../sheets/vo/ConfigData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loading = function(_super) {
      __extends(Loading, _super);
      function Loading() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.progressBar = null;
        _this.isLogin = false;
        _this.preloadSeceneFinish = false;
        _this.preloadSceneProgress = 0;
        _this.preloadUI = false;
        _this.preloadUIProgress = 0;
        _this.preloadEntity = false;
        _this.preloadEntityProgress = 0;
        _this.preloadCfg = false;
        _this.preloadCfgProgress = 0;
        _this.subNum = 2;
        _this.curNum = 0;
        return _this;
      }
      Loading.prototype.start = function() {
        var _this = this;
        moosnow.platform.login();
        if (moosnow.getAppPlatform() == moosnow.APP_PLATFORM.WX && window["wx"] || moosnow.getAppPlatform() == moosnow.APP_PLATFORM.QQ && window["qq"] || moosnow.getAppPlatform() == moosnow.APP_PLATFORM.VIVO && window["qg"]) {
          cc.loader.downloader.loadSubpackage("gameres", function(err) {
            if (err) return console.error(err);
            console.log("load subpackage successfully.");
            _this.loadMainpackage();
          });
          console.log("load subpackage.");
        } else {
          this.loadMainpackage();
          console.log("load main package.");
        }
      };
      Loading.prototype.subpackageLoad = function() {
        this.curNum++;
        this.curNum == this.subNum && this.loadMainpackage();
      };
      Loading.prototype.loadMainpackage = function() {
        var _this = this;
        var cfg = "data/cfg";
        console.log("load cfg json ");
        SheetManager_1.SheetManager.loadDB("" + cfg, function() {
          ConfigData_1.ConfigData.init();
          Lite.data.initUserLevel();
          _this.preloadCfg = true;
          _this.preloadCfgProgress = 100;
          _this.showProgress();
          console.log("preload config completed");
          _this.preloadUIProgress = 100;
          console.log("preloadUI completed");
          _this.preloadUIProgress = 100;
          _this.preloadUI = true;
          Lite.resource.loadAssetDir("prefab/entity", cc.Prefab, function(precent) {
            _this.preloadEntityProgress = precent;
            _this.showProgress();
          }, function() {
            console.log("preloadEntity completed");
            _this.preloadEntityProgress = 100;
            _this.preloadEntity = true;
            cc.director.preloadScene("Main", function(completedCount, totalCount, item) {
              var precent = completedCount / totalCount * 100;
              _this.preloadSceneProgress = isNaN(precent) ? 0 : precent;
              _this.showProgress();
            }, function(error, asset) {
              _this.preloadSeceneFinish = true;
              _this.showProgress();
              _this.loadScene();
              console.log("error", error, " SceneAsset ", asset);
            });
          });
        });
      };
      Loading.prototype.onLoad = function() {
        this.isLogin = false;
        this.preloadSeceneFinish = false;
      };
      Loading.prototype.showProgress = function() {
        var val = .1 + .1 * this.preloadCfgProgress + .3 * this.preloadEntityProgress + .3 * this.preloadUIProgress + .2 * this.preloadSceneProgress;
        isNaN(val) ? this.label.string = "0%" : this.label.string = val + "%";
        this.progressBar.progress = val / 100;
        this.node.on(cc.Node.EventType.TOUCH_END, function() {}, this);
      };
      Loading.prototype.loadScene = function() {
        cc.director.loadScene("Main");
      };
      __decorate([ property(cc.Label) ], Loading.prototype, "label", void 0);
      __decorate([ property(cc.ProgressBar) ], Loading.prototype, "progressBar", void 0);
      Loading = __decorate([ ccclass ], Loading);
      return Loading;
    }(cc.Component);
    exports.default = Loading;
    cc._RF.pop();
  }, {
    "../sheets/vo/ConfigData": "ConfigData",
    "./utils/SheetManager": "SheetManager"
  } ],
  Logger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10f57ztvEpOELo4eqeZii3N", "Logger");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Logger = function() {
      function Logger() {}
      Logger.log = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        console.log.apply(console, args);
      };
      Logger.trace = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        console.log.apply(console, args);
      };
      return Logger;
    }();
    exports.default = Logger;
    cc._RF.pop();
  }, {} ],
  MainView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16c71vktUdFL5Wn6IeMhW9F", "MainView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForms_1 = require("./config/UIForms");
    var EventType_1 = require("./utils/EventType");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainView = function(_super) {
      __extends(MainView, _super);
      function MainView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.background = null;
        _this.bg1 = null;
        _this.bg2 = null;
        return _this;
      }
      MainView.prototype.start = function() {
        moosnow.event.addListener(EventType_1.default.GAME_STATE_NEXT, this, this.changeBg);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_OVER, this, this.changeBg);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_CANCEL, this, this.changeBg);
      };
      MainView.prototype.onEnable = function() {
        this.changeBg();
        moosnow.http.finishLoading();
        moosnow.form.loadAd({
          hideForm: true,
          callback: function() {
            Lite.ui.pushUIForm(UIForms_1.default.HomeForm, null, function() {});
          }
        });
        moosnow.platform.reportMonitor();
      };
      MainView.prototype.showPrize = function() {
        moosnow.APP_PLATFORM.BYTEDANCE == moosnow.getAppPlatform() && Lite.data.getCurrentLevel() > 1 && Lite.ui.pushUIForm(UIForms_1.default.PrizeForm, null);
      };
      MainView.prototype.changeBg = function() {
        var bgArr = [ this.bg1, this.bg2 ];
        this.background.spriteFrame = bgArr[Math.random() > .5 ? 0 : 1];
      };
      __decorate([ property(cc.Sprite) ], MainView.prototype, "background", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainView.prototype, "bg1", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainView.prototype, "bg2", void 0);
      MainView = __decorate([ ccclass ], MainView);
      return MainView;
    }(cc.Component);
    exports.default = MainView;
    cc._RF.pop();
  }, {
    "./config/UIForms": "UIForms",
    "./utils/EventType": "EventType"
  } ],
  MathUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dcce1MonZFGOba8lwIy196V", "MathUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MathUtils = function() {
      function MathUtils() {}
      MathUtils.getAngle = function(radian) {
        return 180 * radian / Math.PI;
      };
      MathUtils.getRadian = function(angle) {
        return angle / 180 * Math.PI;
      };
      MathUtils.getRadianByPoint = function(pointA, pointB) {
        return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x);
      };
      MathUtils.getAngleByPoint = function(pointA, pointB) {
        return 180 * this.getRadianByPoint(pointA, pointB) / Math.PI;
      };
      MathUtils.detectCollision = function(rect, circle) {
        var cx, cy;
        cx = circle.x < rect.x ? rect.x : circle.x > rect.x + rect.w ? rect.x + rect.w : circle.x;
        cy = circle.y < rect.y ? rect.y : circle.y > rect.y + rect.h ? rect.y + rect.h : circle.y;
        function distance(x1, y1, x2, y2) {
          return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }
        if (distance(circle.x, circle.y, cx, cy) < circle.r) return true;
        return false;
      };
      MathUtils.vecRotate = function(vec, angle) {
        var radians = MathUtils.getRadian(angle);
        var sin = Math.sin(radians);
        var cos = Math.cos(radians);
        var x1 = cos * vec.x - sin * vec.y;
        var y1 = sin * vec.x + cos * vec.y;
        return new cc.Vec2(x1, y1);
      };
      MathUtils.getRadianTwoPoint = function(p1, p2) {
        var xdis = p2.x - p1.x;
        var ydis = p2.y - p1.y;
        return Math.atan2(ydis, xdis);
      };
      MathUtils.getAngleTwoPoint = function(p1, p2) {
        var vy = p2.y - p1.y;
        var vx = p2.x - p1.x;
        var ang;
        if (0 == vy) {
          if (vx < 0) return 180;
          return 0;
        }
        if (0 == vx) {
          vy > 0 ? ang = 90 : vy < 0 && (ang = 270);
          return ang;
        }
        ang = this.getAngle(Math.atan(Math.abs(vy) / Math.abs(vx)));
        vx > 0 ? vy < 0 && (ang = 360 - ang) : ang = vy > 0 ? 180 - ang : 180 + ang;
        return ang;
      };
      MathUtils.getAngleTwoVec = function(p1, p2) {
        var radian = Math.atan2(p2.y, p2.x) - Math.atan2(p1.y, p1.x);
        return this.getAngle(radian);
      };
      MathUtils.getDistance = function(p1, p2) {
        var disX = p2.x - p1.x;
        var disY = p2.y - p1.y;
        var disQ = Math.pow(disX, 2) + Math.pow(disY, 2);
        return Math.sqrt(disQ);
      };
      MathUtils.exactCount = function(exactValue, count) {
        void 0 === count && (count = 0);
        var num = Math.pow(10, count);
        var value = exactValue * num | 0;
        return value / num;
      };
      MathUtils.getBezierCutAngle = function(p0, p1, p2, t) {
        var _x = 2 * (p0.x * (t - 1) + p1.x * (1 - 2 * t) + p2.x * t);
        var _y = 2 * (p0.y * (t - 1) + p1.y * (1 - 2 * t) + p2.y * t);
        var angle = this.getAngle(Math.atan2(_y, _x));
        return angle;
      };
      MathUtils.randomNumBoth = function(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
      };
      MathUtils.probabilityCanHappen = function(num) {
        var random = MathUtils.randomNumBoth(0, 100);
        return random <= num;
      };
      MathUtils.rectCollision = function(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y;
      };
      return MathUtils;
    }();
    exports.default = MathUtils;
    cc._RF.pop();
  }, {} ],
  ModelMapping: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55ffcKqJ31KQKAsirESywWS", "ModelMapping");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ModelMapping = function() {
      function ModelMapping() {}
      ModelMapping.getList = function() {
        var arr = [];
        for (var key in ModelMapping) arr.push(new ModelMapping[key]().url);
        return arr;
      };
      return ModelMapping;
    }();
    exports.default = ModelMapping;
    cc._RF.pop();
  }, {} ],
  PhysicsSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f730GsdGROgpx/sEkKeJIs", "PhysicsSetting");
    cc.game.on(cc.game.EVENT_ENGINE_INITED, function() {
      var physicsManager = cc.director.getPhysicsManager();
      physicsManager.enabled = true;
    });
    cc._RF.pop();
  }, {} ],
  PrizeBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a2b9LO8xZFppnJTyYibSPi", "PrizeBox");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/utils/SheetManager");
    var PrizeBox = function(_super) {
      __extends(PrizeBox, _super);
      function PrizeBox() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PrizeBox.get = function(id) {
        if (this[id]) return this[id];
        return SheetManager_1.SheetManager.get("prizeBox", id, PrizeBox);
      };
      PrizeBox.getAll = function() {
        var obj = SheetManager_1.SheetManager.getList("prizeBox");
        var a = [];
        var vo;
        for (var key in obj) {
          "keys" != key && (vo = PrizeBox.get(key));
          vo && (a.push(vo), vo = null);
        }
        return a;
      };
      return PrizeBox;
    }(Sheets_1.PrizeBoxBase);
    exports.PrizeBox = PrizeBox;
    cc._RF.pop();
  }, {
    "../../script/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  ResourceModule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "625c74Q2O9HApOzeuzwGx1+", "ResourceModule");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseModule_1 = require("./BaseModule");
    var ResourceModule = function(_super) {
      __extends(ResourceModule, _super);
      function ResourceModule() {
        return _super.call(this) || this;
      }
      ResourceModule.prototype.onEnable = function() {};
      ResourceModule.prototype.loadAsset = function(url, assetType, callback) {
        var res = cc.loader.getRes(url, assetType);
        if (res) {
          callback && callback(null, res);
          return;
        }
        cc.loader.loadRes(url, assetType, function(err, asset) {
          callback && callback(err, asset);
        });
      };
      ResourceModule.prototype.loadAssetDir = function(dir, type, progressCallback, completeCallback) {
        cc.loader.loadResDir(dir, type, function(completedCount, totalCount, item) {
          var precent = completedCount / totalCount * 100;
          precent = Math.ceil(precent);
          progressCallback && progressCallback(precent);
        }, function(err, res) {
          completeCallback && completeCallback(err, res);
        });
      };
      ResourceModule.prototype.onDisable = function() {};
      return ResourceModule;
    }(BaseModule_1.default);
    exports.default = ResourceModule;
    cc._RF.pop();
  }, {
    "./BaseModule": "BaseModule"
  } ],
  SheetManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75c8dJgBUhLAq8lAxh3UiqE", "SheetManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SheetManager = function() {
      function SheetManager() {}
      SheetManager.loadDB = function(url, callback) {
        var _this = this;
        cc.loader.loadRes(url, cc.JsonAsset, function(err, res) {
          err && console.warn("loadDB err ", err);
          console.log("load db ", res.json);
          _this.data = res.json;
          callback();
        });
      };
      SheetManager.get = function(table, id, clz) {
        var value = this.data[table][id];
        if (!value) return;
        var keys = this.getKeys(this.data[table].keys);
        var v;
        var vo = new clz();
        for (var i = 0; i < keys.length; i++) {
          v = this.data.dic[value[i]];
          vo[keys[i]] = "null" !== v ? v : null;
        }
        clz[id] = vo;
        return vo;
      };
      SheetManager.getKeys = function(indexs) {
        var keys = [];
        for (var i = 0; i < indexs.length; i++) {
          var index = indexs[i];
          keys.push(this.data.dic[index]);
        }
        return keys;
      };
      SheetManager.getTableLength = function(tableName) {
        var obj = this.data[tableName];
        if (obj.length) return obj.length;
        var count = 0;
        for (var key in obj) count++;
        obj.length = count - 1;
        return count - 1;
      };
      SheetManager.getList = function(table) {
        return this.data[table];
      };
      SheetManager.getComplexLength = function(table, id) {
        return this.data[table][id].length;
      };
      SheetManager.getComplex = function(table, id, cls) {
        var arr = this.getList(table)[id];
        var keys = this.getKeys(this.data[table].keys);
        var vos = [];
        for (var j = 0; j < arr.length; j++) {
          var v;
          var vo = new cls();
          for (var i = 0; i < keys.length; i++) {
            v = this.data.dic[arr[j][i]];
            vo[keys[i]] = "null" !== v ? v : null;
          }
          vos.push(vo);
        }
        return vos;
      };
      SheetManager.getAllSheets = function(table, clz) {
        var obj = this.getList(table);
        var arr = [];
        for (var key in obj) "keys" != key && arr.push(this.get(table, key, clz));
        return arr;
      };
      return SheetManager;
    }();
    exports.SheetManager = SheetManager;
    cc._RF.pop();
  }, {} ],
  Sheets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15d36gXNE9MgbwoQwqki+J4", "Sheets");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LevelCfgBase = function() {
      function LevelCfgBase() {}
      return LevelCfgBase;
    }();
    exports.LevelCfgBase = LevelCfgBase;
    var PrizeBoxBase = function() {
      function PrizeBoxBase() {}
      return PrizeBoxBase;
    }();
    exports.PrizeBoxBase = PrizeBoxBase;
    var EasterEggBase = function() {
      function EasterEggBase() {}
      return EasterEggBase;
    }();
    exports.EasterEggBase = EasterEggBase;
    var SignBase = function() {
      function SignBase() {}
      return SignBase;
    }();
    exports.SignBase = SignBase;
    var SkinBase = function() {
      function SkinBase() {}
      return SkinBase;
    }();
    exports.SkinBase = SkinBase;
    var SignVoBase = function() {
      function SignVoBase() {}
      return SignVoBase;
    }();
    exports.SignVoBase = SignVoBase;
    var ConfigDataBase = function() {
      function ConfigDataBase() {}
      return ConfigDataBase;
    }();
    exports.ConfigDataBase = ConfigDataBase;
    cc._RF.pop();
  }, {} ],
  SignVo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93cbeahkN5KrI5K5wpxr3Rx", "SignVo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/utils/SheetManager");
    var SignVo = function(_super) {
      __extends(SignVo, _super);
      function SignVo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SignVo.get = function(id) {
        if (this[id]) return this[id];
        return SheetManager_1.SheetManager.get("SignVo", id, SignVo);
      };
      return SignVo;
    }(Sheets_1.SignVoBase);
    exports.SignVo = SignVo;
    cc._RF.pop();
  }, {
    "../../script/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  Sign: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf9a2eOQVdAtaPBkJuybhoo", "Sign");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/utils/SheetManager");
    var Sign = function(_super) {
      __extends(Sign, _super);
      function Sign() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Sign.get = function(id) {
        if (this[id]) return this[id];
        return SheetManager_1.SheetManager.get("Sign", id, Sign);
      };
      return Sign;
    }(Sheets_1.SignBase);
    exports.Sign = Sign;
    cc._RF.pop();
  }, {
    "../../script/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  SkinItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cc3eqfWm1DF4M7rkK3aNGR", "SkinItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventType_1 = require("../utils/EventType");
    var Skin_1 = require("../../sheets/vo/Skin");
    var Common_1 = require("../utils/Common");
    var EntityLogic_1 = require("../framework/entity/EntityLogic");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SkinItem = function(_super) {
      __extends(SkinItem, _super);
      function SkinItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logo = null;
        _this.locked = null;
        _this.checked = null;
        _this.coinNum = null;
        return _this;
      }
      SkinItem.prototype.start = function() {
        this.addListener();
      };
      SkinItem.prototype.addListener = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          Lite.data.setSelectSkin(_this.LogicData.ID);
          Lite.data.getUserSkinById(_this.LogicData.ID) && Lite.data.setCurrentSkinId(_this.LogicData.ID);
          moosnow.event.sendEventImmediately(EventType_1.default.SKIN_SELECT, _this.LogicData.ID);
        }, this);
        moosnow.event.addListener(EventType_1.default.SKIN_SELECT, this, function(skinId) {
          _this.LogicData.ID != skinId ? _this.checked.active = false : _this.checked.active = true;
        });
        moosnow.event.addListener(EventType_1.default.SKIN_CHANGE, this, function(skinId) {
          _this.showLocked(skinId);
        });
      };
      SkinItem.prototype.willShow = function(data) {
        var _this = this;
        _super.prototype.willShow.call(this, data);
        var showSkin = Skin_1.Skin.get(this.LogicData.ID);
        var curSkinId = Lite.data.getCurrentSkinId();
        this.checked.active = false;
        this.locked.node.active = true;
        this.showLocked(curSkinId);
        this.coinNum.string = "" + Common_1.default.formatMoney(showSkin.coinNum);
        Lite.resource.loadAsset("skin/" + this.LogicData.ID + "/7.png", cc.SpriteFrame, function(err, spriteFrame) {
          if (err) return;
          _this.logo.spriteFrame = spriteFrame;
        });
      };
      SkinItem.prototype.showLocked = function(curSkinId) {
        var showSkin = Skin_1.Skin.get(this.LogicData.ID);
        var userSkin = Lite.data.getUserSkin();
        if (curSkinId == showSkin.ID) {
          this.checked.active = true;
          this.locked.node.active = false;
        } else for (var k in userSkin) k == this.LogicData.ID && (userSkin[k].videoNum >= showSkin.videoNum || 0 != userSkin[k].coinNum) && (this.locked.node.active = false);
      };
      __decorate([ property(cc.Sprite) ], SkinItem.prototype, "logo", void 0);
      __decorate([ property(cc.Sprite) ], SkinItem.prototype, "locked", void 0);
      __decorate([ property(cc.Node) ], SkinItem.prototype, "checked", void 0);
      __decorate([ property(cc.Label) ], SkinItem.prototype, "coinNum", void 0);
      SkinItem = __decorate([ ccclass ], SkinItem);
      return SkinItem;
    }(EntityLogic_1.default);
    exports.default = SkinItem;
    cc._RF.pop();
  }, {
    "../../sheets/vo/Skin": "Skin",
    "../framework/entity/EntityLogic": "EntityLogic",
    "../utils/Common": "Common",
    "../utils/EventType": "EventType"
  } ],
  Skin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e8e7+vQ+1A7r5qhhYH2HJX", "Skin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/utils/SheetManager");
    var Skin = function(_super) {
      __extends(Skin, _super);
      function Skin() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Skin.get = function(id) {
        if (this[id]) return this[id];
        return SheetManager_1.SheetManager.get("Skin", id, Skin);
      };
      Skin.getAll = function() {
        var obj = SheetManager_1.SheetManager.getList("Skin");
        var a = [];
        var vo;
        for (var key in obj) {
          "keys" != key && (vo = Skin.get(key));
          vo && (a.push(vo), vo = null);
        }
        return a;
      };
      return Skin;
    }(Sheets_1.SkinBase);
    exports.Skin = Skin;
    cc._RF.pop();
  }, {
    "../../script/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  ToastForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ae66kORoZKrL8ETytD9nMr", "ToastForm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForm_1 = require("../../framework/ui/UIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ToastForm = function(_super) {
      __extends(ToastForm, _super);
      function ToastForm() {
        var _this = _super.call(this) || this;
        _this.msgText = null;
        return _this;
      }
      ToastForm.prototype.start = function() {
        _super.prototype.start.call(this);
      };
      ToastForm.prototype.show = function(msg) {
        this.node.zIndex = 9999;
        this.msgText.getComponent(cc.Label).string = msg;
        this.node.active = true;
        this.node.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1)));
        this.scheduleOnce(this.hide, 1);
      };
      ToastForm.prototype.hide = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Node) ], ToastForm.prototype, "msgText", void 0);
      ToastForm = __decorate([ ccclass ], ToastForm);
      return ToastForm;
    }(UIForm_1.default);
    exports.default = ToastForm;
    cc._RF.pop();
  }, {
    "../../framework/ui/UIForm": "UIForm"
  } ],
  TouchManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab5eeq9eshHcY+EXJeklBPK", "TouchManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventType_1 = require("../utils/EventType");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchManager = function(_super) {
      __extends(TouchManager, _super);
      function TouchManager() {
        var _this = _super.call(this) || this;
        _this.mListen = [ "HomeForm" ];
        return _this;
      }
      TouchManager.prototype.start = function() {
        this.addListener();
      };
      TouchManager.prototype.addListener = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.mouseDown, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.mouseMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.mouseUp, this);
      };
      TouchManager.prototype.mouseDown = function(e) {
        moosnow.event.sendEventImmediately(EventType_1.default.TOUCH_DOWN, e);
      };
      TouchManager.prototype.mouseMove = function(e) {
        moosnow.event.sendEventImmediately(EventType_1.default.TOUCH_MOVE, e);
      };
      TouchManager.prototype.mouseUp = function(e) {
        moosnow.event.sendEventImmediately(EventType_1.default.TOUCH_UP, e);
      };
      TouchManager.prototype.removeListener = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.mouseDown, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.mouseMove, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.mouseUp, this);
      };
      TouchManager.prototype.onDisable = function() {
        this.removeListener();
      };
      TouchManager = __decorate([ ccclass ], TouchManager);
      return TouchManager;
    }(cc.Component);
    exports.default = TouchManager;
    cc._RF.pop();
  }, {
    "../utils/EventType": "EventType"
  } ],
  UIForms: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d61daDJKXZM+7VmEImeGFsh", "UIForms");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIMapping_1 = require("./UIMapping");
    var UIForms = function(_super) {
      __extends(UIForms, _super);
      function UIForms() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(UIForms, "mapping", {
        get: function() {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
          return {
            adForm: (_a = {}, _a[moosnow.APP_PLATFORM.WX] = "adForm", _a[moosnow.APP_PLATFORM.OPPO] = "adFormOPPO", 
            _a[moosnow.APP_PLATFORM.OPPO_ZS] = "adFormOPPO", _a[moosnow.APP_PLATFORM.VIVO] = "adFormQQ", 
            _a[moosnow.APP_PLATFORM.QQ] = "adFormQQ", _a[moosnow.APP_PLATFORM.BYTEDANCE] = "adFormTT", 
            _a),
            pauseForm: (_b = {}, _b[moosnow.APP_PLATFORM.WX] = "pauseForm", _b[moosnow.APP_PLATFORM.BYTEDANCE] = "pauseFormTT", 
            _b[moosnow.APP_PLATFORM.OPPO] = "pauseFormOPPO", _b[moosnow.APP_PLATFORM.OPPO_ZS] = "pauseFormOPPO", 
            _b[moosnow.APP_PLATFORM.VIVO] = "pauseFormVIVO", _b[moosnow.APP_PLATFORM.QQ] = "pauseFormTT", 
            _b),
            respawnForm: (_c = {}, _c[moosnow.APP_PLATFORM.WX] = "respawnForm", _c[moosnow.APP_PLATFORM.BYTEDANCE] = "respawnFormTT", 
            _c[moosnow.APP_PLATFORM.OPPO] = "respawnFormOPPO", _c[moosnow.APP_PLATFORM.OPPO_ZS] = "respawnFormOPPO", 
            _c[moosnow.APP_PLATFORM.VIVO] = "respawnFormOPPO", _c[moosnow.APP_PLATFORM.QQ] = "respawnFormQQ", 
            _c),
            endForm: (_d = {}, _d[moosnow.APP_PLATFORM.WX] = "endForm", _d[moosnow.APP_PLATFORM.BYTEDANCE] = "endFormTT", 
            _d[moosnow.APP_PLATFORM.OPPO] = "endFormOPPO", _d[moosnow.APP_PLATFORM.OPPO_ZS] = "endFormOPPO", 
            _d[moosnow.APP_PLATFORM.VIVO] = "endFormVIVO", _d),
            totalForm: (_e = {}, _e[moosnow.APP_PLATFORM.WX] = "totalForm", _e[moosnow.APP_PLATFORM.BYTEDANCE] = "totalFormTT", 
            _e[moosnow.APP_PLATFORM.QQ] = "totalFormQQ", _e[moosnow.APP_PLATFORM.OPPO] = "totalFormOPPO", 
            _e[moosnow.APP_PLATFORM.OPPO_ZS] = "totalFormOPPO", _e[moosnow.APP_PLATFORM.VIVO] = "totalFormVIVO", 
            _e),
            tryForm: (_f = {}, _f[moosnow.APP_PLATFORM.WX] = "tryForm", _f[moosnow.APP_PLATFORM.BYTEDANCE] = "tryFormTT", 
            _f[moosnow.APP_PLATFORM.QQ] = "tryFormTT", _f),
            mistouchForm: (_g = {}, _g[moosnow.APP_PLATFORM.WX] = "mistouchForm", _g[moosnow.APP_PLATFORM.QQ] = "mistouchFormQQ", 
            _g[moosnow.APP_PLATFORM.BYTEDANCE] = "mistouchFormTT", _g),
            prizeForm: (_h = {}, _h[moosnow.APP_PLATFORM.BYTEDANCE] = "prizeFormTT", _h[moosnow.APP_PLATFORM.QQ] = "prizeForm", 
            _h),
            shareForm: (_j = {}, _j[moosnow.APP_PLATFORM.WX] = "shareFormTT", _j[moosnow.APP_PLATFORM.BYTEDANCE] = "shareFormTT", 
            _j),
            openBoxForm: (_k = {}, _k[moosnow.APP_PLATFORM.WX] = "openBoxFormTT", _k[moosnow.APP_PLATFORM.BYTEDANCE] = "openBoxFormTT", 
            _k),
            easterEggForm: (_l = {}, _l[moosnow.APP_PLATFORM.WX] = "easterEggFormTT", _l[moosnow.APP_PLATFORM.BYTEDANCE] = "easterEggFormTT", 
            _l)
          };
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "AdForm", {
        get: function() {
          return this.convertUIName(this.mapping.adForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "ShareForm", {
        get: function() {
          return this.convertUIName(this.mapping.shareForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "TotalForm", {
        get: function() {
          return this.convertUIName(this.mapping.totalForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "EasterEggForm", {
        get: function() {
          return this.convertUIName(this.mapping.easterEggForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "EndForm", {
        get: function() {
          return this.convertUIName(this.mapping.endForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "PauseForm", {
        get: function() {
          return this.convertUIName(this.mapping.pauseForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "RespawnForm", {
        get: function() {
          return this.convertUIName(this.mapping.respawnForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "PrizeForm", {
        get: function() {
          return this.convertUIName(this.mapping.prizeForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "MistouchForm", {
        get: function() {
          return this.convertUIName(this.mapping.mistouchForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "TryForm", {
        get: function() {
          return this.convertUIName(this.mapping.tryForm);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UIForms, "OpenBoxForm", {
        get: function() {
          return this.convertUIName(this.mapping.openBoxForm);
        },
        enumerable: true,
        configurable: true
      });
      UIForms.HomeForm = "homeForm";
      UIForms.SkinForm = "skinForm";
      UIForms.GameForm = "gameForm";
      UIForms.CoinForm = "coinForm";
      UIForms.PrevHomeForm = "prevHomeForm";
      UIForms.ToastForm = "toastForm";
      UIForms.SetForm = "setForm";
      return UIForms;
    }(UIMapping_1.default);
    exports.default = UIForms;
    cc._RF.pop();
  }, {
    "./UIMapping": "UIMapping"
  } ],
  UIForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f40ewXlJlF2pZzMVgqh8Ot", "UIForm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForm = function(_super) {
      __extends(UIForm, _super);
      function UIForm() {
        var _this = _super.call(this) || this;
        _this.isPopEffect = false;
        _this.isMask = false;
        _this.fullView = true;
        _this.formName = "";
        _this.maskName = "img_mask";
        _this.formName = "";
        return _this;
      }
      UIForm.prototype.start = function() {
        this.isMask && this.addMask();
      };
      UIForm.prototype.addMask = function() {
        var _this = this;
        var childMask = this.node.getChildByName(this.maskName);
        if (childMask) {
          childMask.width = cc.Canvas.instance.node.width;
          childMask.height = cc.Canvas.instance.node.height;
          this.node.active = true;
          return;
        }
        var skin = "texture/game/img_mask";
        var maskNode = new cc.Node();
        var sprite = maskNode.addComponent(cc.Sprite);
        var widget = maskNode.addComponent(cc.Widget);
        widget.isAlignLeft = widget.isAlignTop = widget.isAlignRight = widget.isAlignBottom = true;
        widget.left = widget.top = widget.right = widget.bottom = 0;
        Lite.resource.loadAsset(skin, cc.SpriteFrame, function(err, spriteFrame) {
          sprite.spriteFrame = spriteFrame;
          sprite.type = cc.Sprite.Type.SLICED;
          sprite.spriteFrame.insetBottom = 1;
          sprite.spriteFrame.insetTop = 1;
          sprite.spriteFrame.insetLeft = 1;
          sprite.spriteFrame.insetRight = 1;
          _this.schedule(_this.fullMask, .1);
        });
        maskNode.zIndex = -1;
        maskNode.on(cc.Node.EventType.TOUCH_START, this.onMaskMouseDown, this);
        maskNode.width = cc.Canvas.instance.node.width;
        maskNode.height = cc.Canvas.instance.node.height;
        this.node.addChild(maskNode);
        this.maskNode = maskNode;
      };
      UIForm.prototype.fullMask = function() {
        this.maskNode.width == cc.Canvas.instance.node.width && this.maskNode.height == cc.Canvas.instance.node.height && this.unschedule(this.fullMask);
        this.maskNode.width = cc.Canvas.instance.node.width;
        this.maskNode.height = cc.Canvas.instance.node.height;
        console.log("fullMask");
      };
      UIForm.prototype.removeMask = function() {
        if (this.node.getChildByName(this.maskName)) {
          this.node.active = false;
          return;
        }
      };
      UIForm.prototype.onMaskMouseDown = function(e) {
        e.stopPropagation();
      };
      UIForm.prototype.hide = function() {};
      Object.defineProperty(UIForm.prototype, "FormData", {
        get: function() {
          return this.mFormData;
        },
        enumerable: true,
        configurable: true
      });
      UIForm.prototype.willShow = function(data) {
        this.mFormData = data;
      };
      UIForm.prototype.onShow = function(data) {};
      UIForm.prototype.willHide = function(data) {};
      UIForm.prototype.onHide = function(data) {};
      UIForm.prototype.onEnable = function() {};
      UIForm.prototype.onDisable = function() {};
      UIForm.prototype.hideAnim = function(cb) {
        cb();
      };
      return UIForm;
    }(cc.Component);
    exports.default = UIForm;
    cc._RF.pop();
  }, {} ],
  UIMapping: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e042GcQQtOk55gw65Q4pdC", "UIMapping");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIMapping = function() {
      function UIMapping() {}
      UIMapping.convertUIName = function(mappingForm) {
        if (!mappingForm) {
          console.warn("convertUIName fail  mappingForm is null ");
          return null;
        }
        var curApp = moosnow.getAppPlatform();
        if (mappingForm[curApp]) return mappingForm[curApp];
        if (mappingForm[moosnow.APP_PLATFORM.WX]) return mappingForm[moosnow.APP_PLATFORM.WX];
        console.warn("convertUIName fail ", mappingForm);
        return null;
      };
      return UIMapping;
    }();
    exports.default = UIMapping;
    cc._RF.pop();
  }, {} ],
  UIModule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7cdd0bL36NEArchOk+SSNnb", "UIModule");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FormModel = function() {
      function FormModel() {
        this.name = "";
        this.node = null;
        this.UIForm = null;
        this.zIndex = 0;
        this.name = "";
        this.node = null;
        this.UIForm = null;
        this.zIndex = 0;
      }
      return FormModel;
    }();
    var BaseModule_1 = require("./BaseModule");
    var UIForm_1 = require("../ui/UIForm");
    var ToastForm_1 = require("../ui/ToastForm");
    var Common_1 = require("../../utils/Common");
    var UIModule = function(_super) {
      __extends(UIModule, _super);
      function UIModule() {
        var _this = _super.call(this) || this;
        _this.rootCanvas = null;
        _this.adForm = null;
        _this.adFormOPPO = null;
        _this.adFormQQ = null;
        _this.adFormTT = null;
        _this.coinForm = null;
        _this.easterEggFormTT = null;
        _this.endForm = null;
        _this.endFormOPPO = null;
        _this.endFormTT = null;
        _this.endFormVIVO = null;
        _this.gameForm = null;
        _this.homeForm = null;
        _this.mistouchForm = null;
        _this.mistouchFormQQ = null;
        _this.mistouchFormTT = null;
        _this.openBoxFormTT = null;
        _this.pauseForm = null;
        _this.pauseFormOPPO = null;
        _this.pauseFormTT = null;
        _this.pauseFormVIVO = null;
        _this.prevHomeForm = null;
        _this.prizeForm = null;
        _this.prizeFormTT = null;
        _this.respawnForm = null;
        _this.respawnFormOPPO = null;
        _this.respawnFormQQ = null;
        _this.respawnFormTT = null;
        _this.setForm = null;
        _this.shareFormTT = null;
        _this.skinForm = null;
        _this.toastForm = null;
        _this.totalForm = null;
        _this.totalFormOPPO = null;
        _this.totalFormVIVO = null;
        _this.totalFormQQ = null;
        _this.totalFormTT = null;
        _this.tryForm = null;
        _this.tryFormTT = null;
        _this.layerIndex = 0;
        _this.UIRoot = "";
        _this.UIFormStack = [];
        _this.cachedUIForms = [];
        _this.mToastForm = null;
        _this.layerIndex = 0;
        _this.UIRoot = "prefab/ui/";
        _this.UIFormStack = [];
        _this.cachedUIForms = [];
        _this.toastForm = null;
        return _this;
      }
      UIModule.prototype.start = function() {
        this.rootCanvas = cc.Canvas.instance.node;
        Lite.ui = this;
      };
      UIModule.prototype.showToast = function(msg) {
        var _this = this;
        null == this.mToastForm ? this._createUINode("toastForm", 1e3, function(node, index) {
          cc.Canvas.instance.node.addChild(node);
          _this.mToastForm = node.getComponent(ToastForm_1.default);
          node.zIndex = index;
          _this.mToastForm.show(msg);
        }) : this.mToastForm.show(msg);
      };
      UIModule.prototype.showLoading = function(title) {
        window["wx"], moosnow.platform.showLoading(title);
      };
      UIModule.prototype.hideLoading = function() {
        window["wx"] && moosnow.platform.hideLoading();
      };
      UIModule.prototype.showModal = function(title, content, cancelTitle, confirmTitle, confirm) {
        window["wx"] && moosnow.platform.showModal(title, content, cancelTitle, confirmTitle, confirm);
      };
      UIModule.prototype.showModalWithoutCancel = function(title, content, confirmTitle, confirm) {
        window["wx"] && moosnow.platform.showModalWithoutCancel(title, content, confirmTitle, confirm);
      };
      UIModule.prototype.pushUIForm = function(name, data, callback) {
        var self = this;
        var cachedFormModel = this._getUINodeFromCacheByName(name);
        if (null == cachedFormModel) this._createUIFormModel(name, function(formModel) {
          self._showUIForm(formModel, data);
          callback && callback(formModel, data);
        }); else {
          cachedFormModel.zIndex = this.layerIndex++;
          this.UIFormStack.push(cachedFormModel);
          this._showUIForm(cachedFormModel, data);
          callback && callback(cachedFormModel, data);
        }
      };
      UIModule.prototype.pop = function(destroy, cb) {
        void 0 === destroy && (destroy = false);
        if (0 == this.UIFormStack.length) return;
        var formModel = this.UIFormStack.pop();
        destroy ? this._destroyUIForm(formModel, null) : this._hideUIForm(formModel, null, cb);
      };
      UIModule.prototype.getUIFrom = function(name) {
        for (var i = 0; i < this.UIFormStack.length; i++) {
          var formModel = this.UIFormStack[i];
          if (formModel.name == name) return formModel.UIForm;
        }
      };
      UIModule.prototype.hideUIForm = function(name, data, cb) {
        for (var i = 0; i < this.UIFormStack.length; i++) {
          var formModel = this.UIFormStack[i];
          formModel.name == name && this._hideUIForm(formModel, data, cb);
        }
      };
      UIModule.prototype.hideAllUIForm = function() {
        for (var i = this.UIFormStack.length - 1; i >= 0; i--) {
          var formModel = this.UIFormStack[i];
          this._hideUIForm(formModel, null);
        }
      };
      UIModule.prototype.destroyUIForm = function(name, data) {
        for (var i = 0; i < this.UIFormStack.length; i++) {
          var formModel = this.UIFormStack[i];
          formModel.name == name && this._destroyUIForm(formModel, data);
        }
      };
      UIModule.prototype._formatUIFormName = function(name) {
        return name.replace(/\//g, "_");
      };
      UIModule.prototype._createUINode = function(name, formId, callback) {
        var formNode = cc.instantiate(this[name]);
        callback && callback(formNode, formId);
      };
      UIModule.prototype._createUIFormModel = function(name, callback) {
        var _this = this;
        var self = this;
        var formModel = new FormModel();
        formModel.name = name;
        var formId = this.layerIndex++;
        formModel.zIndex = formId;
        this.UIFormStack.push(formModel);
        this._createUINode(name, formId, function(node, index) {
          for (var i = 0; i < self.UIFormStack.length; i++) {
            var tempFormModel = self.UIFormStack[i];
            if (tempFormModel.zIndex == index && tempFormModel.name == node.name) {
              if (null == node) {
                _this._removeStack(i);
                return;
              }
              var form = node.getComponent(UIForm_1.default);
              form.formName = name;
              tempFormModel.UIForm = form;
              tempFormModel.node = node;
              callback && callback(formModel);
              return;
            }
          }
        });
      };
      UIModule.prototype._getUINodeFromCacheByName = function(name) {
        for (var i = 0; i < this.cachedUIForms.length; i++) {
          var element = this.cachedUIForms[i];
          if (null != element.node && element.name == name) {
            this.cachedUIForms.splice(i, 1);
            return element;
          }
        }
        return null;
      };
      UIModule.prototype._showUIForm = function(formModel, data) {
        cc.Canvas.instance.node.addChild(formModel.node);
        formModel.UIForm.willShow(data);
        formModel.node.active = true;
        data && !isNaN(data.zIndex) ? formModel.node.zIndex = data.zIndex : formModel.node.zIndex = formModel.zIndex;
        formModel.UIForm.onShow(data);
        if (formModel.UIForm.isPopEffect) {
          var owner = formModel.node;
          Common_1.default.popOpenAnim(owner);
        }
      };
      UIModule.prototype._hideUIForm = function(formModel, data, cb) {
        formModel.UIForm.willHide(data);
        formModel.UIForm.onHide(data);
        this._removeStack(formModel);
        this.cachedUIForms.push(formModel);
        if (formModel.UIForm.isPopEffect) {
          var owner = formModel.node;
          Common_1.default.popCloseAnim(owner).then(function() {
            formModel.node.active = false;
            formModel.node.removeFromParent(false);
            cb && cb();
          });
        } else formModel.UIForm.hideAnim(function() {
          formModel.node.active = false;
          formModel.node.removeFromParent(false);
          cb && cb();
        });
      };
      UIModule.prototype._destroyUIForm = function(formModel, data) {
        formModel.UIForm.willHide(data);
        formModel.node.removeFromParent();
        formModel.UIForm.onHide(data);
        formModel.node.active = false;
        this._removeStack(formModel);
        formModel.node.destroy();
      };
      UIModule.prototype._removeStack = function(removeItem) {
        var _this = this;
        isNaN(removeItem) ? this.UIFormStack.forEach(function(item, idx) {
          item == removeItem && _this.UIFormStack.splice(idx, 1);
        }) : this.UIFormStack.splice(removeItem, 1);
      };
      __decorate([ property(cc.Node) ], UIModule.prototype, "rootCanvas", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "adForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "adFormOPPO", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "adFormQQ", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "adFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "coinForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "easterEggFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "endForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "endFormOPPO", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "endFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "endFormVIVO", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "gameForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "homeForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "mistouchForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "mistouchFormQQ", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "mistouchFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "openBoxFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "pauseForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "pauseFormOPPO", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "pauseFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "pauseFormVIVO", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "prevHomeForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "prizeForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "prizeFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "respawnForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "respawnFormOPPO", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "respawnFormQQ", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "respawnFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "setForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "shareFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "skinForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "toastForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "totalForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "totalFormOPPO", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "totalFormVIVO", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "totalFormQQ", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "totalFormTT", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "tryForm", void 0);
      __decorate([ property(cc.Prefab) ], UIModule.prototype, "tryFormTT", void 0);
      UIModule = __decorate([ ccclass ], UIModule);
      return UIModule;
    }(BaseModule_1.default);
    exports.UIModule = UIModule;
    cc._RF.pop();
  }, {
    "../../utils/Common": "Common",
    "../ui/ToastForm": "ToastForm",
    "../ui/UIForm": "UIForm",
    "./BaseModule": "BaseModule"
  } ],
  Utils3D: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9069ev5EyNPCJEfP+ealmqy", "Utils3D");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils3D = function() {
      function Utils3D() {}
      Utils3D.distance3D = function(v1, v2) {
        var num = 0;
        num = Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2) + Math.pow(v1.z - v2.z, 2));
        return num;
      };
      Object.defineProperty(Utils3D, "defalutVec3", {
        get: function() {
          var vect = this.mDefalutVec3 || (this.mDefalutVec3 = new Laya.Vector3());
          vect.toDefault();
          return vect;
        },
        enumerable: true,
        configurable: true
      });
      Utils3D.setToVec3 = function(vec3, x, y, z) {
        vec3.x = x;
        vec3.y = y;
        vec3.z = z;
        return vec3;
      };
      Utils3D.position = function(target, x, y, z) {
        var vec3 = target.transform.position;
        vec3.x = x;
        vec3.y = y;
        vec3.z = z;
        target.transform.position = vec3;
      };
      Utils3D.localPosition = function(target, x, y, z) {
        var vec3 = target.transform.localPosition;
        vec3.x = x;
        vec3.y = y;
        vec3.z = z;
        target.transform.localPosition = target.transform.localPosition;
      };
      Utils3D.localPositionByVec3 = function(target, vec3) {
        var vec3_1 = target.transform.localPosition;
        vec3_1.x = vec3.x;
        vec3_1.y = vec3.y;
        vec3_1.z = vec3.z;
        target.transform.localPosition = target.transform.localPosition;
      };
      Utils3D.rotation = function(target, x, y, z) {
        var vec3 = this.setToVec3(this.defalutVec3, x, y, z);
        var a = 180 / Math.PI;
        Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, target.transform.localRotation);
        target.transform.localRotation = target.transform.localRotation;
      };
      Utils3D.rotationByVec3 = function(target, vec3) {
        var a = 180 / Math.PI;
        Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, target.transform.localRotation);
        target.transform.localRotation = target.transform.localRotation;
      };
      Utils3D.positionX = function(target, x) {
        var vec3 = target.transform.position;
        vec3.x = x;
        target.transform.position = target.transform.position;
      };
      Utils3D.positionY = function(target, y) {
        var vec3 = target.transform.position;
        vec3.y = y;
        target.transform.position = target.transform.position;
      };
      Utils3D.positionZ = function(target, z) {
        var vec3 = target.transform.position;
        vec3.z = z;
        target.transform.position = target.transform.position;
        return vec3.z;
      };
      Utils3D.localPositionX = function(target, x) {
        var vec3 = target.transform.localPosition;
        vec3.x = x;
        target.transform.localPosition = target.transform.localPosition;
      };
      Utils3D.localPositionY = function(target, y) {
        var vec3 = target.transform.localPosition;
        vec3.y = y;
        target.transform.localPosition = target.transform.localPosition;
      };
      Utils3D.localPositionZ = function(target, z) {
        var vec3 = target.transform.localPosition;
        vec3.z = z;
        target.transform.localPosition = target.transform.localPosition;
        return vec3.z;
      };
      Utils3D.rotationX = function(target, x) {
        var vec3 = this.setToVec3(this.defalutVec3, x, 0, 0);
        var a = 180 / Math.PI;
        Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, target.transform.localRotation);
        target.transform.localRotation = target.transform.localRotation;
      };
      Utils3D.rotationY = function(target, y) {
        var transform = target.transform || target["_transform"];
        var vec3 = this.setToVec3(this.defalutVec3, 0, y, 0);
        var a = 180 / Math.PI;
        Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, transform.localRotation);
        transform.localRotation = transform.localRotation;
      };
      Utils3D.rotationYBy = function(target, y) {
        var transform = target.transform || target["_transform"];
        var _y = transform.position.y;
        var vec3 = this.setToVec3(this.defalutVec3, 0, y + _y, 0);
        var a = 180 / Math.PI;
        Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, transform.localRotation);
        transform.localRotation = transform.localRotation;
      };
      Utils3D.rotationZ = function(target, z) {
        var vec3 = this.setToVec3(this.defalutVec3, 0, 0, z);
        var a = 180 / Math.PI;
        Laya.Quaternion.createFromYawPitchRoll(vec3.y / a, vec3.x / a, vec3.z / a, target.transform.localRotation);
        target.transform.localRotation = target.transform.localRotation;
      };
      Utils3D.tweenScale = function(target, timer, x, y, z, tx, ty, tz, ease) {
        var _this = this;
        void 0 === ease && (ease = null);
        return new Promise(function(reslove) {
          var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
          _this.setToVec3(vect, x, y, z);
          var tween = Laya.Tween.to(vect, {
            x: tx,
            y: ty,
            z: tz
          }, timer, Laya.Ease.bounceOut, Laya.Handler.create(_this, function() {
            reslove();
          }), 0, false, true);
          tween.update = Laya.Handler.create(_this, function() {
            if (!target.transform) {
              reslove();
              return;
            }
            _this.scale(target, vect.x, vect.y, vect.z);
          }, null, false);
        });
      };
      Utils3D.scale = function(target, x, y, z) {
        var scale = target.transform.scale;
        scale.x = x;
        scale.y = y;
        scale.z = z;
        target.transform.scale = scale;
      };
      Utils3D.scaleByVec3 = function(target, vec3) {
        target.transform.scale = vec3;
      };
      Utils3D.scaleX = function(target, x) {
        target.transform.scale.x = x;
        target.transform.scale = target.transform.scale;
      };
      Utils3D.scaleY = function(target, y) {
        target.transform.scale.y = y;
        target.transform.scale = target.transform.scale;
      };
      Utils3D.scaleZ = function(target, z) {
        target.transform.scale.z = z;
        target.transform.scale = target.transform.scale;
      };
      Utils3D.tweenRotate = function(target, timer, x, y, z, tx, ty, tz) {};
      Utils3D.rotateEuler = function(target, timer, x, y, z, tx, ty, tz) {
        var _this = this;
        return new Promise(function(reslove) {
          var vect = new Laya.Vector3();
          _this.setToVec3(vect, x, y, z);
          Laya.Tween.to(vect, {
            x: tx,
            y: ty,
            z: tz
          }, timer, null, Laya.Handler.create(_this, function() {
            reslove();
          })).update = new Laya.Handler(_this, function() {
            if (!target.transform) return;
            target.transform.rotationEuler = vect;
          }, null, false);
        });
      };
      Utils3D.tweenRotateByLayTween = function(target, timer, x, y, z, tx, ty, tz) {
        var _this = this;
        var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
        this.setToVec3(vect, x, y, z);
        Laya.Tween.to(vect, {
          x: tx,
          y: ty,
          z: tz
        }, timer).update = new Laya.Handler(this, function() {
          if (!target.transform) return;
          _this.rotationByVec3(target, vect);
        }, null, false);
      };
      Utils3D.tweenLocalRotate = function(target, timer, x, y, z, tx, ty, tz) {};
      Utils3D.tweenLocalPosition = function(target, timer, x, y, z, tx, ty, tz, ease) {
        var _this = this;
        void 0 === ease && (ease = null);
        var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
        this.setToVec3(vect, x, y, z);
        var tween = Laya.Tween.to(vect, {
          x: tx,
          y: ty,
          z: tz
        }, timer, ease);
        tween.update = Laya.Handler.create(this, function() {
          if (!target.transform) return;
          _this.localPosition(target, vect.x, vect.y, vect.z);
        }, null, false);
      };
      Utils3D.tweenLocalPositionPromise = function(target, timer, x, y, z, tx, ty, tz, ease) {
        var _this = this;
        void 0 === ease && (ease = null);
        return new Promise(function(resolve) {
          var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
          _this.setToVec3(vect, x, y, z);
          var tween = Laya.Tween.to(vect, {
            x: tx,
            y: ty,
            z: tz
          }, timer, ease, Laya.Handler.create(_this, function() {
            resolve();
          }), 0, false, true);
          tween.update = Laya.Handler.create(_this, function() {
            if (!target.transform) {
              resolve();
              return;
            }
            _this.localPosition(target, vect.x, vect.y, vect.z);
          }, null, false);
        });
      };
      Utils3D.tweenPosition = function(target, timer, x, y, z, tx, ty, tz, ease, update) {
        var _this = this;
        void 0 === ease && (ease = null);
        void 0 === update && (update = null);
        return new Promise(function(reslove) {
          var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
          _this.setToVec3(vect, x, y, z);
          var tween = Laya.Tween.to(vect, {
            x: tx,
            y: ty,
            z: tz
          }, timer, ease, Laya.Handler.create(_this, function() {
            reslove();
          }), 0, false, true);
          tween.update = Laya.Handler.create(_this, function() {
            if (!target.transform) {
              reslove();
              return;
            }
            _this.position(target, vect.x, vect.y, vect.z);
            update && update.runWith(vect);
          }, null, false);
        });
      };
      Utils3D.tweenRotationY = function(target, timer, y, ty, ease, update) {
        var _this = this;
        void 0 === ease && (ease = null);
        void 0 === update && (update = null);
        return new Promise(function(reslove) {
          var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
          _this.setToVec3(vect, 0, y, 0);
          var tween = Laya.Tween.to(vect, {
            x: 0,
            y: ty,
            z: 0
          }, timer, ease, Laya.Handler.create(_this, function() {
            reslove();
          }));
          tween.update = Laya.Handler.create(_this, function() {
            if (!target.transform) return;
            _this.rotationY(target, vect.y);
          }, null, false);
        });
      };
      Utils3D.tweenRotationX = function(target, timer, x, tx, ease, update) {
        var _this = this;
        void 0 === ease && (ease = null);
        void 0 === update && (update = null);
        return new Promise(function(reslove) {
          var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
          _this.setToVec3(vect, x, 0, 0);
          var tween = Laya.Tween.to(vect, {
            x: tx,
            y: 0,
            z: 0
          }, timer, ease, Laya.Handler.create(_this, function() {
            reslove();
          }));
          tween.update = Laya.Handler.create(_this, function() {
            if (!target.transform) return;
            _this.rotationX(target, vect.y);
          }, null, false);
        });
      };
      Utils3D.tweenRotation = function(target, timer, x, y, z, tx, ty, tz, ease, update) {
        var _this = this;
        void 0 === ease && (ease = null);
        void 0 === update && (update = null);
        var vect = Laya.Pool.getItemByClass("Vector3", Laya.Vector3);
        this.setToVec3(vect, x, y, z);
        var tween = Laya.Tween.to(vect, {
          x: tx,
          y: ty,
          z: tz
        }, timer, ease);
        tween.update = Laya.Handler.create(this, function() {
          if (!target.transform) return;
          _this.rotation(target, vect.x, vect.y, vect.z);
        }, null, false);
      };
      return Utils3D;
    }();
    exports.Utils3D = Utils3D;
    cc._RF.pop();
  }, {} ],
  gameEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84e36k0/UhEprj3VbtKYlWY", "gameEntry");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AppConfig_1 = require("./AppConfig");
    var AudioModule_1 = require("./AudioModule");
    var ResourceModule_1 = require("./ResourceModule");
    var GameDataCenter_1 = require("../GameDataCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameEntry = function(_super) {
      __extends(gameEntry, _super);
      function gameEntry() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mConfig = new AppConfig_1.default();
        _this.mResource = new ResourceModule_1.default();
        return _this;
      }
      gameEntry.prototype.start = function() {
        window["Lite"] = this;
        this.mData = new GameDataCenter_1.default();
        this.mAudio = new AudioModule_1.default();
        cc.game.addPersistRootNode(this.node);
      };
      Object.defineProperty(gameEntry.prototype, "myGame", {
        get: function() {
          return this.mMyGame;
        },
        set: function(value) {
          this.mMyGame = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "data", {
        get: function() {
          return this.mData;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "config", {
        get: function() {
          return this.mConfig;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "audio", {
        get: function() {
          return this.mAudio;
        },
        set: function(value) {
          this.mAudio = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "ui", {
        get: function() {
          return this.mUi;
        },
        set: function(value) {
          this.mUi = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "resource", {
        get: function() {
          return this.mResource;
        },
        enumerable: true,
        configurable: true
      });
      gameEntry.prototype.update = function(dt) {};
      gameEntry = __decorate([ ccclass ], gameEntry);
      return gameEntry;
    }(cc.Component);
    exports.default = gameEntry;
    cc._RF.pop();
  }, {
    "../GameDataCenter": "GameDataCenter",
    "./AppConfig": "AppConfig",
    "./AudioModule": "AudioModule",
    "./ResourceModule": "ResourceModule"
  } ],
  gameForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d266bZl6a1L9ZiopfqloYco", "gameForm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForm_1 = require("../../framework/ui/UIForm");
    var EventType_1 = require("../../utils/EventType");
    var Common_1 = require("../../utils/Common");
    var LevelCfg_1 = require("../../../sheets/vo/LevelCfg");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameForm = function(_super) {
      __extends(gameForm, _super);
      function gameForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.clawControl = null;
        _this.actionBox = null;
        _this.suckerCtlNode = null;
        _this.jumpCtlNode = null;
        _this.levelTxt = null;
        _this.timeTxt = null;
        _this.star1 = null;
        _this.star2 = null;
        _this.star3 = null;
        _this.star = null;
        _this.starActive = null;
        _this.sucker = null;
        _this.suckerActive = null;
        _this.btnNext = null;
        _this.mBeginTime = 0;
        _this.mTotalTime = 0;
        _this.isSucker = false;
        _this.mCurrentLevel = 0;
        _this.mGameLevel = 0;
        return _this;
      }
      gameForm.prototype.start = function() {
        moosnow.event.addListener(EventType_1.default.GAME_STATE_OVER, this, this.onGameOver);
        moosnow.event.addListener(EventType_1.default.RELOAD_LEVEL, this, this.onReload);
        moosnow.event.addListener(EventType_1.default.GAME_TIME_OUT, this, this.onHideRocker);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_END, this, this.onHideRocker);
        moosnow.event.addListener(EventType_1.default.PLAYER_DIED, this, this.onHideRocker);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_START, this, this.onShowRocker);
        moosnow.event.addListener(EventType_1.default.GAME_STATE_RESPAWN, this, this.onShowRocker);
        this.suckerCtlNode.on(cc.Node.EventType.TOUCH_START, this.onSucker, this);
        this.jumpCtlNode.on(cc.Node.EventType.TOUCH_START, this.onJump, this);
        this.btnNext.on(cc.Node.EventType.TOUCH_END, this.onNext, this);
        this.actionBox.width = cc.Canvas.instance.node.width / 2;
        this.node.width = cc.Canvas.instance.node.width;
        this.node.height = cc.Canvas.instance.node.height;
      };
      gameForm.prototype.onNext = function() {
        moosnow.platform.showVideo(function(res) {
          res == moosnow.VIDEO_STATUS.END ? moosnow.event.sendEventImmediately(EventType_1.default.GAME_STATE_FAST_END, null) : res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
        });
      };
      gameForm.prototype.onJump = function() {
        Lite.audio.playJump();
        moosnow.event.sendEventImmediately(EventType_1.default.JUMP, true);
      };
      gameForm.prototype.onHideRocker = function() {};
      gameForm.prototype.onShowRocker = function() {};
      gameForm.prototype.displayLevel = function(lvIndex) {
        this.levelTxt.getComponent(cc.Label).string = "\u7b2c" + (lvIndex + 1) + "\u5173";
      };
      gameForm.prototype.update = function(dt) {
        this.mTotalTime += 1e3 * dt;
        var minutes = Math.floor((this.mTotalTime - this.mBeginTime) / 1e3 / 60);
        var seconds = parseInt("" + (this.mTotalTime - this.mBeginTime) / 1e3 % 60);
        this.timeTxt.string = Common_1.default.formatNumber(minutes) + ":" + Common_1.default.formatNumber(seconds);
        this.showStar(this.mTotalTime - this.mBeginTime);
      };
      gameForm.prototype.onSucker = function() {
        this.isSucker = !this.isSucker;
        var sucker = this.suckerCtlNode.getComponent(cc.Sprite);
        if (this.isSucker) {
          sucker.spriteFrame = this.sucker;
          Lite.audio.playLoaderMagnet();
        } else {
          sucker.spriteFrame = this.suckerActive;
          Lite.audio.stopLoaderMagnet();
        }
        moosnow.event.sendEventImmediately(EventType_1.default.SUCKER_START, this.isSucker);
      };
      gameForm.prototype.onReload = function() {
        this.loadLevel(this.mCurrentLevel);
      };
      gameForm.prototype.onGameOver = function() {
        Lite.audio.stopLoaderMagnet();
      };
      gameForm.prototype.willShow = function(data) {
        console.log("gameForm", data);
        this.mBeginTime = this.mTotalTime = data.beginTime;
        this.mCurrentLevel = parseInt(data.lvIndex);
        this.mGameLevel = data.lvIndex;
        this.loadLevel(this.mCurrentLevel);
        this.displayLevel(this.mCurrentLevel);
      };
      gameForm.prototype.onShow = function() {
        this.node.zIndex = 3;
      };
      gameForm.prototype.loadLevel = function(lvIndex) {
        var playerLevel = Lite.data.getUserLevel();
        for (var i = 1; i <= 20; i++) Lite.entity.hideAllEntity("level" + i, true);
        Lite.entity.showEntity("level" + playerLevel[lvIndex].prefab, this.node, {
          level: lvIndex
        });
      };
      gameForm.prototype.showStar = function(useTime) {
        var lvCfg = LevelCfg_1.LevelCfg.get(this.mGameLevel + 1);
        var userLv = Lite.data.getUserLevel();
        var num = 0;
        num = useTime < 1e3 * lvCfg.star3 ? 3 : useTime < 1e3 * lvCfg.star2 ? 2 : 1;
        for (var i = 0; i < 3; i++) this["star" + (i + 1)].getComponent(cc.Sprite).spriteFrame = this.star;
        for (var i = num; i > 0; i--) this["star" + i].getComponent(cc.Sprite).spriteFrame = this.starActive;
      };
      __decorate([ property(cc.Node) ], gameForm.prototype, "clawControl", void 0);
      __decorate([ property(cc.Node) ], gameForm.prototype, "actionBox", void 0);
      __decorate([ property(cc.Node) ], gameForm.prototype, "suckerCtlNode", void 0);
      __decorate([ property(cc.Node) ], gameForm.prototype, "jumpCtlNode", void 0);
      __decorate([ property(cc.Node) ], gameForm.prototype, "levelTxt", void 0);
      __decorate([ property(cc.Label) ], gameForm.prototype, "timeTxt", void 0);
      __decorate([ property(cc.Node) ], gameForm.prototype, "star1", void 0);
      __decorate([ property(cc.Node) ], gameForm.prototype, "star2", void 0);
      __decorate([ property(cc.Node) ], gameForm.prototype, "star3", void 0);
      __decorate([ property(cc.SpriteFrame) ], gameForm.prototype, "star", void 0);
      __decorate([ property(cc.SpriteFrame) ], gameForm.prototype, "starActive", void 0);
      __decorate([ property(cc.SpriteFrame) ], gameForm.prototype, "sucker", void 0);
      __decorate([ property(cc.SpriteFrame) ], gameForm.prototype, "suckerActive", void 0);
      __decorate([ property(cc.Node) ], gameForm.prototype, "btnNext", void 0);
      gameForm = __decorate([ ccclass ], gameForm);
      return gameForm;
    }(UIForm_1.default);
    exports.default = gameForm;
    cc._RF.pop();
  }, {
    "../../../sheets/vo/LevelCfg": "LevelCfg",
    "../../framework/ui/UIForm": "UIForm",
    "../../utils/Common": "Common",
    "../../utils/EventType": "EventType"
  } ],
  homeForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2047aYRcnhB/qNUJByawJ75", "homeForm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForms_1 = require("../../config/UIForms");
    var EventType_1 = require("../../utils/EventType");
    var Common_1 = require("../../utils/Common");
    var UIForm_1 = require("../../framework/ui/UIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var homeForm = function(_super) {
      __extends(homeForm, _super);
      function homeForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnStar = null;
        _this.btnPrev = null;
        _this.btnNext = null;
        _this.mapContainer = null;
        _this.mapPoints = null;
        _this.chapterTxt = null;
        _this.shutter = null;
        _this.btnSet = null;
        _this.btnGarage = null;
        _this.coinNum = null;
        _this.qqAppBox = null;
        _this.ttAppBox = null;
        _this.easterEggContainer = null;
        _this.mMapPos = [];
        _this.mChapterBig = 0;
        _this.mChapterSmall = 10;
        return _this;
      }
      homeForm.prototype.start = function() {};
      homeForm.prototype.showPrize = function() {
        moosnow.APP_PLATFORM.BYTEDANCE == moosnow.getAppPlatform() && Lite.data.getCurrentLevel() > 1 && Lite.ui.pushUIForm(UIForms_1.default.PrizeForm, null);
      };
      homeForm.prototype.onShow = function(data) {};
      homeForm.prototype.showCoin = function() {
        this.coinNum.string = "" + Common_1.default.formatMoney(Lite.data.getCoin());
      };
      homeForm.prototype.addListener = function() {
        this.btnSet.on(cc.Node.EventType.TOUCH_END, this.onSet, this);
        this.btnPrev.on(cc.Node.EventType.TOUCH_END, this.onPrevChapterBigChange, this);
        this.btnNext.on(cc.Node.EventType.TOUCH_END, this.onNextChapterBigChange, this);
        this.btnGarage.on(cc.Node.EventType.TOUCH_END, this.onGarage, this);
        this.qqAppBox.on(cc.Node.EventType.TOUCH_END, this.onShowAppBox, this);
        this.ttAppBox.on(cc.Node.EventType.TOUCH_END, this.onShowAppBox, this);
        moosnow.event.addListener(EventType_1.default.SKIN_CHANGE, this, this.showCoin);
        moosnow.event.addListener(EventType_1.default.COIN_CHANGED, this, this.showCoin);
      };
      homeForm.prototype.onMoreGame = function() {};
      homeForm.prototype.onShowAppBox = function() {
        moosnow.platform.showAppBox(function() {}, false);
      };
      homeForm.prototype.onGarage = function() {
        Lite.ui.pushUIForm(UIForms_1.default.SkinForm);
      };
      homeForm.prototype.initPosition = function() {
        var _this = this;
        if (0 == this.mMapPos.length) {
          this.mMapPos = [];
          this.mapPoints.children.forEach(function(item) {
            item.active = false;
            _this.mMapPos.push(item.position.clone());
          });
        }
      };
      homeForm.prototype.displayButton = function() {
        this.mChapterBig <= 0 ? this.btnPrev.active = false : this.btnPrev.active = true;
        var maxLevel = Lite.data.getMaxLevel();
        var maxChapterBig = Math.ceil(maxLevel / this.mChapterSmall);
        this.mChapterBig >= maxChapterBig - 1 ? this.btnNext.active = false : this.btnNext.active = true;
      };
      homeForm.prototype.onSet = function() {
        var setForm = Lite.ui.getUIFrom(UIForms_1.default.SetForm);
        setForm ? Lite.ui.hideUIForm(UIForms_1.default.SetForm, null) : Lite.ui.pushUIForm(UIForms_1.default.SetForm);
      };
      homeForm.prototype.onPrevChapterBigChange = function() {
        this.mChapterBig--;
        this.mChapterBig <= 0 && (this.mChapterBig = 0);
        this.displayLevel();
        this.displayButton();
        this.runShutter();
      };
      homeForm.prototype.onNextChapterBigChange = function() {
        this.mChapterBig++;
        var maxLevel = Lite.data.getMaxLevel();
        var maxChapterBig = Math.ceil(maxLevel / this.mChapterSmall);
        this.mChapterBig >= maxChapterBig && (this.mChapterBig = maxChapterBig);
        this.displayLevel();
        this.displayButton();
        this.runShutter();
      };
      homeForm.prototype.runShutter = function() {
        Lite.audio.playShutter();
        this.shutter.runAction(cc.sequence(cc.fadeIn(0), cc.fadeOut(.5)));
      };
      homeForm.prototype.displayLevel = function() {};
      homeForm.prototype.willHide = function() {};
      homeForm.prototype.willShow = function() {
        Lite.audio.playMainMusic();
      };
      __decorate([ property(cc.Node) ], homeForm.prototype, "btnStar", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "btnPrev", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "btnNext", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "mapContainer", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "mapPoints", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "chapterTxt", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "shutter", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "btnSet", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "btnGarage", void 0);
      __decorate([ property(cc.Label) ], homeForm.prototype, "coinNum", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "qqAppBox", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "ttAppBox", void 0);
      __decorate([ property(cc.Node) ], homeForm.prototype, "easterEggContainer", void 0);
      homeForm = __decorate([ ccclass ], homeForm);
      return homeForm;
    }(UIForm_1.default);
    exports.default = homeForm;
    cc._RF.pop();
  }, {
    "../../config/UIForms": "UIForms",
    "../../framework/ui/UIForm": "UIForm",
    "../../utils/Common": "Common",
    "../../utils/EventType": "EventType"
  } ],
  skinForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5c50RVGQlB0bl2Vk1FUmhj", "skinForm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = this && this.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForm_1 = require("../../framework/ui/UIForm");
    var Skin_1 = require("../../../sheets/vo/Skin");
    var Common_1 = require("../../utils/Common");
    var EventType_1 = require("../../utils/EventType");
    var UIForms_1 = require("../../config/UIForms");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var skinForm = function(_super) {
      __extends(skinForm, _super);
      function skinForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.skinView = null;
        _this.skinLayout = null;
        _this.btnBack = null;
        _this.btnVideo = null;
        _this.btnCoin = null;
        _this.isMask = true;
        return _this;
      }
      skinForm.prototype.willShow = function() {
        this.initSkin();
        this.addListener();
        this.onSkinChange();
        moosnow.platform.showBanner(false);
        moosnow.event.sendEventImmediately(EventType_1.default.ADFORM_CHANGE, {});
      };
      skinForm.prototype.willHide = function() {
        this.removeListener();
        if (moosnow.APP_PLATFORM.WX == moosnow.getAppPlatform()) {
          moosnow.platform.hideBanner();
          moosnow.form.showAd(moosnow.AD_POSITION.BANNER | moosnow.AD_POSITION.FLOAT, function() {});
        } else moosnow.platform.showBanner(false);
      };
      skinForm.prototype.initSkin = function() {
        var _this = this;
        Lite.entity.hideAllEntity("skinItem");
        var arr = Skin_1.Skin.getAll();
        arr.forEach(function(item) {
          Lite.entity.showEntity("skinItem", _this.skinLayout.node, __assign({}, Common_1.default.deepCopy(item)));
        });
      };
      skinForm.prototype.addListener = function() {
        this.btnBack.on(cc.Node.EventType.TOUCH_END, this.onBack, this);
        this.btnVideo.on(cc.Node.EventType.TOUCH_END, this.onUnlock, this);
        this.btnCoin.on(cc.Node.EventType.TOUCH_END, this.onCoinUnlock, this);
        moosnow.event.addListener(EventType_1.default.SKIN_SELECT, this, this.onSkinChange);
      };
      skinForm.prototype.removeListener = function() {
        this.btnBack.off(cc.Node.EventType.TOUCH_END, this.onBack, this);
        this.btnVideo.off(cc.Node.EventType.TOUCH_END, this.onUnlock, this);
        this.btnCoin.on(cc.Node.EventType.TOUCH_END, this.onCoinUnlock, this);
        moosnow.event.removeListener(EventType_1.default.SKIN_SELECT, this);
      };
      skinForm.prototype.onSkinChange = function() {
        var selectSkinId = Lite.data.getSelectSkin();
        var userSkin = Lite.data.getUserSkinById(selectSkinId);
        this.btnCoin.active = !!!userSkin;
        this.btnVideo.active = !!!userSkin;
      };
      skinForm.prototype.onBack = function() {
        Lite.ui.hideUIForm(UIForms_1.default.SkinForm, null);
      };
      skinForm.prototype.onCoinUnlock = function() {
        var selectSkinId = Lite.data.getSelectSkin();
        var selectSkin = Skin_1.Skin.get(selectSkinId);
        var coin = Lite.data.getCoin();
        if (selectSkin.coinNum <= coin) {
          Lite.data.setCoin(coin - selectSkin.coinNum);
          Lite.data.saveCoin();
          Lite.data.addUserSkinCoin(selectSkinId);
          Lite.data.setCurrentSkinId(selectSkinId);
          moosnow.event.sendEventImmediately(EventType_1.default.SKIN_CHANGE, selectSkinId);
          this.onSkinChange();
        } else moosnow.form.showToast("\u91d1\u5e01\u4e0d\u8db3");
      };
      skinForm.prototype.onUnlock = function() {
        var _this = this;
        moosnow.platform.showVideo(function(res) {
          if (res == moosnow.VIDEO_STATUS.END) {
            var selectSkinId = Lite.data.getSelectSkin();
            Lite.data.addUserSkinVideo(selectSkinId);
            var userSkin = Lite.data.getUserSkinById(selectSkinId);
            var selectSkin = Skin_1.Skin.get(selectSkinId);
            if (selectSkin.videoNum <= userSkin.videoNum) {
              Lite.data.setCurrentSkinId(selectSkinId);
              moosnow.event.sendEventImmediately(EventType_1.default.SKIN_CHANGE, selectSkinId);
              _this.onSkinChange();
            }
          } else res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
        });
      };
      __decorate([ property(cc.ScrollView) ], skinForm.prototype, "skinView", void 0);
      __decorate([ property(cc.Layout) ], skinForm.prototype, "skinLayout", void 0);
      __decorate([ property(cc.Node) ], skinForm.prototype, "btnBack", void 0);
      __decorate([ property(cc.Node) ], skinForm.prototype, "btnVideo", void 0);
      __decorate([ property(cc.Node) ], skinForm.prototype, "btnCoin", void 0);
      skinForm = __decorate([ ccclass ], skinForm);
      return skinForm;
    }(UIForm_1.default);
    exports.default = skinForm;
    cc._RF.pop();
  }, {
    "../../../sheets/vo/Skin": "Skin",
    "../../config/UIForms": "UIForms",
    "../../framework/ui/UIForm": "UIForm",
    "../../utils/Common": "Common",
    "../../utils/EventType": "EventType"
  } ]
}, {}, [ "Helloworld", "Loading", "MainView", "PhysicsSetting", "Entitys", "ModelMapping", "UIForms", "UIMapping", "EasterEggAnim", "SkinItem", "GameDataCenter", "TouchManager", "EntityData", "EntityLogic", "AppConfig", "AudioModule", "BaseModule", "EntityModule", "GameLogic", "GameState", "ResourceModule", "UIModule", "gameEntry", "ToastForm", "UIForm", "gameForm", "homeForm", "skinForm", "ArrayUtil", "Common", "Delay", "EventType", "LoaderManager", "Logger", "MathUtils", "SheetManager", "Utils3D", "ConfigData", "EasterEgg", "LevelCfg", "PrizeBox", "Sheets", "Sign", "SignVo", "Skin" ]);