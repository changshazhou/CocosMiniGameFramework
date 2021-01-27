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
        o = b;
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
  AD_POSITION: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ff91vdUjJNfLckiEbdK28z", "AD_POSITION");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AD_POSITION = void 0;
    exports.AD_POSITION = {
      NONE: 0,
      BANNER: 1,
      FLOAT: 2,
      SIDE: 4,
      CENTER: 8,
      EXPORT: 16,
      BACK: 32,
      MASK: 64,
      WAIT: 128,
      LEFTRIGHT: 256,
      EXPORT_FIXED: 512,
      ROTATE: 1024,
      RECOMMEND: 2048,
      HOT: 4096,
      EXTEND4: 8192,
      TOP: 32768,
      RECOVER: 16384
    };
    cc._RF.pop();
  }, {} ],
  ActionControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "690f7HAhfhHxLJ9Ej9J+9mD", "ActionControl");
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
    var ROLE_ATTACK_1 = require("../enum/ROLE_ATTACK");
    var FrameworkEvent_1 = require("../framework/utils/FrameworkEvent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ActionControl = function(_super) {
      __extends(ActionControl, _super);
      function ActionControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnLeft = null;
        _this.btnRight = null;
        _this.btnJump = null;
        _this.btnAttack1 = null;
        _this.btnAttack2 = null;
        _this.btnAttack3 = null;
        return _this;
      }
      ActionControl.prototype.start = function() {
        this.btnAttack1.on(cc.Node.EventType.TOUCH_START, this.onAttack1, this);
        this.btnAttack2.on(cc.Node.EventType.TOUCH_START, this.onAttack2, this);
        this.btnAttack3.on(cc.Node.EventType.TOUCH_START, this.onAttack3, this);
        this.btnJump.on(cc.Node.EventType.TOUCH_START, this.onJump, this);
        this.btnLeft.on(cc.Node.EventType.TOUCH_START, this.onLeft, this);
        this.btnLeft.on(cc.Node.EventType.TOUCH_END, this.onStop, this);
        this.btnLeft.on(cc.Node.EventType.TOUCH_MOVE, this.onLeft, this);
        this.btnLeft.on(cc.Node.EventType.TOUCH_CANCEL, this.onStop, this);
        this.btnRight.on(cc.Node.EventType.TOUCH_START, this.onRight, this);
        this.btnRight.on(cc.Node.EventType.TOUCH_END, this.onStop, this);
        this.btnRight.on(cc.Node.EventType.TOUCH_MOVE, this.onRight, this);
        this.btnRight.on(cc.Node.EventType.TOUCH_CANCEL, this.onStop, this);
      };
      ActionControl.prototype.onTouchDown = function(e) {
        this.isCollision(e, this.btnLeft) ? this.onLeft() : this.isCollision(e, this.btnRight) ? this.onRight() : this.onStop();
      };
      ActionControl.prototype.onTouchMove = function(e) {
        this.isCollision(e, this.btnLeft) ? this.onLeft() : this.isCollision(e, this.btnRight) ? this.onRight() : this.onStop();
      };
      ActionControl.prototype.onTouchUp = function(e) {
        this.onStop();
      };
      ActionControl.prototype.isCollision = function(e, node) {
        var globalPos = e.touch.getLocation();
        var pos = this.node.convertToNodeSpaceAR(globalPos);
        if (pos.x >= node.x && pos.x <= node.x + node.width / 2) {
          if (pos.y >= node.y && pos.y <= node.y + this.node.height / 2) return true;
          if (pos.y < node.y && pos.y > node.y - node.height / 2) return true;
        }
        if (pos.x < node.x && pos.x > node.x - node.width / 2) {
          if (pos.y >= node.y && pos.y <= node.y + node.height / 2) return true;
          if (pos.y < node.y && pos.y > node.y - node.height / 2) return true;
        }
        return false;
      };
      ActionControl.prototype.onLeft = function() {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.ROCKER_MOVE, {
          x: -1,
          y: 0
        });
      };
      ActionControl.prototype.onRight = function() {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.ROCKER_MOVE, {
          x: 1,
          y: 0
        });
      };
      ActionControl.prototype.onStop = function() {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.ROCKER_MOVE, {
          x: 0,
          y: 0
        });
      };
      ActionControl.prototype.onJump = function(e) {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.ROCKER_JUMP, {
          x: 1,
          y: 0
        });
      };
      ActionControl.prototype.onAttack1 = function(e) {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.ROCKER_ATTACK, {
          attack: ROLE_ATTACK_1.ROLE_ATTACK.ATTACK1
        });
      };
      ActionControl.prototype.onAttack2 = function(e) {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.ROCKER_ATTACK, {
          attack: ROLE_ATTACK_1.ROLE_ATTACK.ATTACK2
        });
      };
      ActionControl.prototype.onAttack3 = function(e) {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.ROCKER_ATTACK, {
          attack: ROLE_ATTACK_1.ROLE_ATTACK.ATTACK3
        });
      };
      ActionControl.prototype.update = function(dt) {};
      __decorate([ property(cc.Node) ], ActionControl.prototype, "btnLeft", void 0);
      __decorate([ property(cc.Node) ], ActionControl.prototype, "btnRight", void 0);
      __decorate([ property(cc.Node) ], ActionControl.prototype, "btnJump", void 0);
      __decorate([ property(cc.Node) ], ActionControl.prototype, "btnAttack1", void 0);
      __decorate([ property(cc.Node) ], ActionControl.prototype, "btnAttack2", void 0);
      __decorate([ property(cc.Node) ], ActionControl.prototype, "btnAttack3", void 0);
      ActionControl = __decorate([ ccclass ], ActionControl);
      return ActionControl;
    }(cc.Component);
    exports.default = ActionControl;
    cc._RF.pop();
  }, {
    "../enum/ROLE_ATTACK": "ROLE_ATTACK",
    "../framework/utils/FrameworkEvent": "FrameworkEvent"
  } ],
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
    var Common_1 = require("../utils/Common");
    var BaseModule_1 = require("./BaseModule");
    var AppConfig = function(_super) {
      __extends(AppConfig, _super);
      function AppConfig() {
        var _this = _super.call(this) || this;
        _this.avatarUrl = "https://moyun-1257000992.cos.ap-guangzhou.myqcloud.com/avatar/";
        _this.site01 = [];
        _this.site02 = [];
        _this.site03 = [];
        _this.site04 = [];
        return _this;
      }
      AppConfig.prototype.addConfig = function(config) {
        for (var k in config) this[k] = config[k];
      };
      AppConfig.prototype.getKey = function(keyName, defValue) {
        void 0 === defValue && (defValue = void 0);
        var val = this[keyName];
        (true, val) || console.log("\u53d6\u914d\u7f6e" + keyName + " \u503c " + val + " ");
        Common_1.default.isEmpty(val) && (val = defValue);
        return val;
      };
      AppConfig.resUrl = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/Game/tomato/";
      return AppConfig;
    }(BaseModule_1.default);
    exports.default = AppConfig;
    cc._RF.pop();
  }, {
    "../utils/Common": "Common",
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
        _this.menuMusic = null;
        _this.win = null;
        _this.fail = null;
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
        _this.localCache = {};
        return _this;
      }
      AudioModule.prototype.playRespawnEffect = function(complete) {
        complete && complete();
      };
      AudioModule.prototype.onEnable = function() {};
      AudioModule.prototype.start = function() {
        Lite.audio = this;
        moosnow.audio.btnSound = this.btnSound;
        this.getSave();
      };
      Object.defineProperty(AudioModule.prototype, "MusicId", {
        get: function() {
          return this.mMusicId;
        },
        enumerable: false,
        configurable: true
      });
      AudioModule.prototype.playGameMusic = function() {
        var audioState = cc.audioEngine.getState(this.mMusicId);
        if (audioState == cc.audioEngine.AudioState.PLAYING) return;
        if (audioState == cc.audioEngine.AudioState.PAUSED) {
          cc.audioEngine.resumeMusic();
          return;
        }
        this.mMusicId = this.playMusic(this.gameMusic);
      };
      AudioModule.prototype.playMainMusic = function() {
        this.mMusicId = this.playMusic(this.menuMusic);
      };
      AudioModule.prototype.playClickEffect = function() {
        this.playSound(this.btnSound);
      };
      AudioModule.prototype.playWin = function() {
        this.playSound(this.win);
      };
      AudioModule.prototype.playFail = function() {
        this.playSound(this.fail);
      };
      AudioModule.prototype.stopAll = function() {};
      AudioModule.prototype.stopSound = function(musicId) {
        cc.audioEngine.stop(musicId);
      };
      AudioModule.prototype.stopMusic = function() {
        isNaN(this.mMusicId) || cc.audioEngine.stop(this.mMusicId);
      };
      AudioModule.prototype.pauseMusic = function() {
        cc.audioEngine.pauseMusic();
      };
      AudioModule.prototype.resumeMusic = function() {
        cc.audioEngine.resumeMusic();
      };
      AudioModule.prototype.addAudio = function(audioClip) {
        this.localCache[audioClip.name] = audioClip;
      };
      AudioModule.prototype.playAudio = function(name, loops, complete, soundClass, startTime) {
        void 0 === loops && (loops = false);
        void 0 === complete && (complete = null);
        void 0 === soundClass && (soundClass = null);
        void 0 === startTime && (startTime = 0);
        this.localCache[name] instanceof cc.AudioClip && this.playSound(this.localCache[name], loops, complete, soundClass, startTime);
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
      });
      AudioModule.prototype.save = function() {
        moosnow.setting.setBool(this.IS_MUTE, this.isMute);
        moosnow.setting.setBool(this.IS_MUTE_MUSIC, this.isMuteMusic);
        moosnow.setting.setBool(this.IS_MUTE_SOUND, this.isMuteSound);
      };
      AudioModule.prototype.getSave = function() {
        this.isMute = moosnow.setting.getBool(this.IS_MUTE, false);
        this.isMuteMusic = moosnow.setting.getBool(this.IS_MUTE_MUSIC, true);
        this.isMuteSound = moosnow.setting.getBool(this.IS_MUTE_SOUND, true);
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
      }) ], AudioModule.prototype, "menuMusic", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "win", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioModule.prototype, "fail", void 0);
      AudioModule = __decorate([ ccclass ], AudioModule);
      return AudioModule;
    }(BaseModule_1.default);
    exports.default = AudioModule;
    cc._RF.pop();
  }, {
    "./BaseModule": "BaseModule"
  } ],
  BUFFER: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f326bSdUo1FAqgqj9zFDkxr", "BUFFER");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BUFFER = void 0;
    var BUFFER;
    (function(BUFFER) {
      BUFFER[BUFFER["NONE"] = 0] = "NONE";
      BUFFER[BUFFER["HEAL"] = 1] = "HEAL";
      BUFFER[BUFFER["QUICKEN"] = 2] = "QUICKEN";
      BUFFER[BUFFER["ZOOMIN"] = 4] = "ZOOMIN";
      BUFFER[BUFFER["MAGNET"] = 8] = "MAGNET";
      BUFFER[BUFFER["UNRIVALLED"] = 16] = "UNRIVALLED";
      BUFFER[BUFFER["SLOWDOWN"] = 32] = "SLOWDOWN";
      BUFFER[BUFFER["REDUCEHEALTH"] = 64] = "REDUCEHEALTH";
      BUFFER[BUFFER["ZOOMOUT"] = 128] = "ZOOMOUT";
      BUFFER[BUFFER["HITRECOVER"] = 512] = "HITRECOVER";
      BUFFER[BUFFER["COIN"] = 1024] = "COIN";
    })(BUFFER = exports.BUFFER || (exports.BUFFER = {}));
    cc._RF.pop();
  }, {} ],
  BaseControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66f02BLKYtJCaShAPWVMd8g", "BaseControl");
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
    var EntityLogic_1 = require("../framework/entity/EntityLogic");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseControl = function(_super) {
      __extends(BaseControl, _super);
      function BaseControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logo = null;
        return _this;
      }
      Object.defineProperty(BaseControl.prototype, "LogicData", {
        get: function() {
          return this.mLogicData;
        },
        enumerable: false,
        configurable: true
      });
      BaseControl.prototype.willShow = function(data) {
        _super.prototype.willShow.call(this, data);
        this.initAnim(data);
      };
      BaseControl.prototype.initAnim = function(data) {};
      BaseControl.prototype.refreshImage = function(url) {
        moosnow.nodeHelper.changeSrc(this.logo || this.node, {
          url: url,
          width: this.node.width,
          height: this.node.height
        });
      };
      BaseControl.prototype.refreshCollider = function(data) {
        var boxCollider = this.node.getComponent(cc.PhysicsCollider);
        if (boxCollider) {
          boxCollider instanceof cc.PhysicsBoxCollider ? boxCollider.size = new cc.Size(data.width, data.height) : boxCollider instanceof cc.PhysicsCircleCollider ? boxCollider.radius = data.radius : boxCollider instanceof cc.PhysicsPolygonCollider ? boxCollider.points = data.points : boxCollider instanceof cc.PhysicsChainCollider && (boxCollider.points = data.points);
          boxCollider.apply();
        }
      };
      BaseControl.prototype.refreshOffset = function(x, y) {
        void 0 === x && (x = 0);
        void 0 === y && (y = 0);
        var boxCollider = this.node.getComponent(cc.PhysicsCollider);
        if (boxCollider) {
          boxCollider instanceof cc.PhysicsBoxCollider ? boxCollider.offset = cc.v2(x, y) : boxCollider instanceof cc.PhysicsCircleCollider ? boxCollider.offset = cc.v2(x, y) : boxCollider instanceof cc.PhysicsPolygonCollider ? boxCollider.offset = cc.v2(x, y) : boxCollider instanceof cc.PhysicsChainCollider && (boxCollider.offset = cc.v2(x, y));
          boxCollider.apply();
        }
      };
      __decorate([ property({
        type: cc.Node,
        override: true
      }) ], BaseControl.prototype, "logo", void 0);
      BaseControl = __decorate([ ccclass ], BaseControl);
      return BaseControl;
    }(EntityLogic_1.default);
    exports.default = BaseControl;
    cc._RF.pop();
  }, {
    "../framework/entity/EntityLogic": "EntityLogic"
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
  BundleMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "168aavqUQRMPqAfo27Aq6p8", "BundleMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Bundles_1 = require("./config/Bundles");
    var Common_1 = require("./utils/Common");
    var cacheItem = function() {
      function cacheItem() {
        this.hasLoadAd = true;
        this.loaded = false;
        this.callback = [];
      }
      return cacheItem;
    }();
    var BundleMgr = function() {
      function BundleMgr() {}
      BundleMgr.loadBundleOnce = function(nameOrUrl, onProgress, onComplete, entityDir, showLoading) {
        var _this = this;
        void 0 === entityDir && (entityDir = "entity");
        void 0 === showLoading && (showLoading = true);
        if (this.loadCache[nameOrUrl]) this.loadCache[nameOrUrl].loaded ? onComplete(this.loadCache[nameOrUrl].hasLoadAd) : this.loadCache[nameOrUrl].callback.push(onComplete); else {
          this.loadCache[nameOrUrl] = new cacheItem();
          this.loadCache[nameOrUrl].callback.push(onComplete);
          Lite.resource.loadSubEntity(nameOrUrl, function(precent) {
            Common_1.default.isFunction(onProgress) && onProgress(precent);
          }, function() {
            Lite.resource.loadBundleSound(nameOrUrl, null, function() {
              _this.loadCache[nameOrUrl].loaded = true;
              _this.loadCache[nameOrUrl].callback.forEach(function(call) {
                call(_this.loadCache[nameOrUrl].hasLoadAd);
              });
              _this.loadCache[nameOrUrl].callback = [];
            });
          }, entityDir, showLoading);
        }
      };
      BundleMgr.loadAdBundle = function(callback, onProgress, showLoading) {
        void 0 === showLoading && (showLoading = true);
        this.loadBundleOnce(Bundles_1.default.ad, onProgress, callback, void 0, showLoading);
      };
      BundleMgr.loadHomeBundle = function(callback, onProgress, showLoading) {
        void 0 === showLoading && (showLoading = true);
        this.loadBundleOnce(Bundles_1.default.homeform, onProgress, callback, void 0, showLoading);
      };
      BundleMgr.loadGameBundle = function(callback, onProgress, showLoading) {
        void 0 === showLoading && (showLoading = true);
        this.loadBundleOnce(Bundles_1.default.gameform, onProgress, callback, void 0, showLoading);
      };
      BundleMgr.loadEndBundle = function(callback, onProgress, showLoading) {
        void 0 === showLoading && (showLoading = true);
        this.loadBundleOnce(Bundles_1.default.endform, onProgress, callback, void 0, showLoading);
      };
      BundleMgr.loadMistouchBundle = function(callback, onProgress, showLoading) {
        void 0 === showLoading && (showLoading = true);
        this.loadBundleOnce(Bundles_1.default.mistouch, onProgress, callback, void 0, showLoading);
      };
      BundleMgr.loadTryBundle = function(callback, onProgress, showLoading) {
        void 0 === showLoading && (showLoading = true);
        this.loadBundleOnce(Bundles_1.default.tryform, onProgress, callback, void 0, showLoading);
      };
      BundleMgr.loadCache = {};
      return BundleMgr;
    }();
    exports.default = BundleMgr;
    cc._RF.pop();
  }, {
    "./config/Bundles": "Bundles",
    "./utils/Common": "Common"
  } ],
  Bundles: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a24e0CoPQZJJbbVQReGVHhp", "Bundles");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Bundles = function() {
      function Bundles() {}
      Bundles.ad = "ad";
      Bundles.homeform = "homeform";
      Bundles.gameform = "gameform";
      Bundles.endform = "endform";
      Bundles.shopform = "shopform";
      Bundles.mistouch = "mistouch";
      Bundles.tryform = "tryform";
      return Bundles;
    }();
    exports.default = Bundles;
    cc._RF.pop();
  }, {} ],
  ButtonEx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35926TG53ZO0JDRZX+i2pzs", "ButtonEx");
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
    exports.clickQueneItem = void 0;
    var clickQueneItem = function() {
      function clickQueneItem() {
        this.stopPropagation = true;
        this.once = true;
        this.clicking = false;
      }
      return clickQueneItem;
    }();
    exports.clickQueneItem = clickQueneItem;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ButtonEx = function(_super) {
      __extends(ButtonEx, _super);
      function ButtonEx() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.enableEffect = true;
        _this.enableMusic = true;
        _this.autoScale = false;
        _this.autoSwing = false;
        _this.zoomTime = 1;
        _this.scaleMax = 1;
        _this.scaleMin = .8;
        _this.enableLogPoint = false;
        _this.logPointName = "";
        _this.mDownEffect = false;
        _this.mSwingAction = cc.sequence(cc.rotateTo(.3, 10), cc.rotateTo(.6, -10), cc.rotateTo(.3, 0), cc.scaleTo(.3, .8), cc.scaleTo(.3, 1)).repeatForever();
        return _this;
      }
      ButtonEx.prototype.runAnim = function() {
        this.autoScale ? this.autoScaleZoomOut() : this.autoSwing && this.node.runAction(this.mSwingAction);
      };
      ButtonEx.prototype.onEnable = function() {
        this.runAnim();
        this.node.scale = 1;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.mouseUpEffect, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.mouseUpEffect, this);
      };
      ButtonEx.prototype.onMouseDown = function() {
        if (this.mDownEffect) return;
        this.mDownEffect = true;
        Lite.audio.playClickEffect();
        this.enableEffect && this.mouseDownEffect();
      };
      ButtonEx.prototype.removeMouseEffect = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.mouseDownEffect, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.mouseUpEffect, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.mouseUpEffect, this);
      };
      ButtonEx.prototype.mouseDownEffect = function() {
        this.node.scale = 1;
        this.node.runAction(cc.sequence(cc.scaleTo(.1, .7, .7), cc.callFunc(function() {}, this)));
      };
      ButtonEx.prototype.mouseUpEffect = function() {
        var _this = this;
        this.runAnim();
        this.node.scale = .7;
        this.node.runAction(cc.sequence(cc.scaleTo(.1, 1, 1), cc.callFunc(function() {
          _this.mDownEffect = false;
        }, this)));
      };
      ButtonEx.prototype.autoScaleZoomOut = function() {
        var _this = this;
        this.node.runAction(cc.sequence(cc.scaleTo(this.zoomTime, this.scaleMin, this.scaleMin), cc.callFunc(function() {
          _this.autoScaleZoomIn();
        }, this)));
      };
      ButtonEx.prototype.autoScaleZoomIn = function() {
        var _this = this;
        this.node.runAction(cc.sequence(cc.scaleTo(this.zoomTime, this.scaleMax, this.scaleMax), cc.callFunc(function() {
          _this.autoScaleZoomOut();
        }, this)));
      };
      ButtonEx.prototype.onDisable = function() {
        this.node.stopAllActions();
        this.node.scale = 1;
        this.removeMouseEffect();
      };
      ButtonEx.downAnim = function(node) {
        node.scale = 1;
        node.runAction(cc.sequence(cc.scaleTo(.1, .7, .7), cc.callFunc(function() {}, this)));
      };
      ButtonEx.upAnim = function(node, callback) {
        var _this = this;
        node.stopAllActions();
        node.scale = .7;
        node.runAction(cc.sequence(cc.scaleTo(.1, 1, 1), cc.callFunc(function() {
          _this.mDowning = false;
          callback && callback();
        }, this)));
      };
      ButtonEx.getClickQueneItem = function(e) {
        var queneId = e.getCurrentTarget().uuid;
        var retVal = this.mClickQuene[queneId];
        return retVal || null;
      };
      ButtonEx.setClickQueneItem = function(e, clicking) {
        var queneId = e.getCurrentTarget().uuid;
        this.mClickQuene[queneId] && (this.mClickQuene[queneId].clicking = clicking);
      };
      ButtonEx.onTouchStart = function(e) {
        var quene = this.getClickQueneItem(e);
        if (!quene) return;
        if (quene.once && quene.clicking) return;
        Lite.audio.playClickEffect();
        this.downAnim(quene.node);
        if (this.mDowning) return;
        this.mDowning = true;
      };
      ButtonEx.onTouchEnd = function(e) {
        var _this = this;
        var quene = this.getClickQueneItem(e);
        if (!quene) return;
        if (quene.once && quene.clicking) return;
        this.setClickQueneItem(e, true);
        console.log("onTouchEnd");
        this.upAnim(quene.node, function() {
          quene && quene.callback && quene.callback();
          _this.setClickQueneItem(e, false);
        });
        quene && quene.stopPropagation && e.stopPropagation();
      };
      ButtonEx.onTouchCancel = function(e) {
        var _this = this;
        var quene = this.getClickQueneItem(e);
        if (!quene) return;
        console.log("onTouchCancel");
        this.upAnim(quene.node, function() {
          _this.setClickQueneItem(e, false);
        });
      };
      ButtonEx.applyClickAnim = function(node, callback, stopPropagation, once) {
        void 0 === stopPropagation && (stopPropagation = false);
        void 0 === once && (once = true);
        if (node && node.uuid) {
          this.mClickQuene[node.uuid] = {
            node: node,
            stopPropagation: stopPropagation,
            callback: callback,
            once: once,
            clicking: false
          };
          node.on(this.TOUCH_START, this.onTouchStart, this);
          node.on(this.TOUCH_END, this.onTouchEnd, this);
          node.on(this.TOUCH_CANCEL, this.onTouchCancel, this);
        } else console.log("\u7f3a\u5c11\u5bf9\u8c61\uff0c\u65e0\u6cd5\u7ed1\u5b9a\u4e8b\u4ef6");
      };
      ButtonEx.removeClickAnim = function(node) {
        if (node && node.uuid) {
          this.mClickQuene[node.uuid] = null;
          delete this.mClickQuene[node.uuid];
          node.off(this.TOUCH_START, this.onTouchStart, this);
          node.off(this.TOUCH_END, this.onTouchEnd, this);
          node.off(this.TOUCH_CANCEL, this.onTouchCancel, this);
        }
      };
      ButtonEx.TOUCH_START = cc.Node.EventType.TOUCH_START;
      ButtonEx.TOUCH_END = cc.Node.EventType.TOUCH_END;
      ButtonEx.TOUCH_CANCEL = cc.Node.EventType.TOUCH_CANCEL;
      ButtonEx.mDowning = false;
      ButtonEx.mClickQuene = {};
      __decorate([ property ], ButtonEx.prototype, "enableEffect", void 0);
      __decorate([ property ], ButtonEx.prototype, "enableMusic", void 0);
      __decorate([ property ], ButtonEx.prototype, "autoScale", void 0);
      __decorate([ property ], ButtonEx.prototype, "autoSwing", void 0);
      __decorate([ property ], ButtonEx.prototype, "zoomTime", void 0);
      __decorate([ property ], ButtonEx.prototype, "scaleMax", void 0);
      __decorate([ property ], ButtonEx.prototype, "scaleMin", void 0);
      __decorate([ property ], ButtonEx.prototype, "enableLogPoint", void 0);
      __decorate([ property ], ButtonEx.prototype, "logPointName", void 0);
      ButtonEx = __decorate([ ccclass ], ButtonEx);
      return ButtonEx;
    }(cc.Component);
    exports.default = ButtonEx;
    cc._RF.pop();
  }, {} ],
  CameraControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a97e41sKtJL6Cl43MNYdqh", "CameraControl");
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
    var FrameworkEvent_1 = require("../framework/utils/FrameworkEvent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CameraControl = function(_super) {
      __extends(CameraControl, _super);
      function CameraControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mCamera = null;
        return _this;
      }
      CameraControl.prototype.onLoad = function() {
        var _this = this;
        this.mCamera = this.node.getComponent(cc.Camera);
        moosnow.event.addListener(FrameworkEvent_1.default.CAMERA_CHANGED, this, function(vec) {
          _this.node.x = vec.x;
          _this.node.y = vec.y;
        });
      };
      CameraControl.prototype.lateUpdate = function() {
        if (!this.mCamera) return;
        if (!Lite.myGame.role) return;
        if (Lite.myGame.role.currentHp <= 0) return;
        if (!Lite.myGame.role.node.active) return;
        var globalRolePos = Lite.myGame.role.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var endPos = this.node.parent.convertToNodeSpaceAR(globalRolePos);
        var curPos = this.node.position.clone();
        var x = cc.misc.lerp(curPos.x, endPos.x, .1);
        var y = cc.misc.lerp(curPos.y, endPos.y, .1);
        this.node.x = x;
        this.node.y = y;
        var ratio = endPos.y / cc.winSize.height;
        this.mCamera.zoomRatio = 1 + .5 * (.5 - ratio);
      };
      CameraControl = __decorate([ ccclass ], CameraControl);
      return CameraControl;
    }(cc.Component);
    exports.default = CameraControl;
    cc._RF.pop();
  }, {
    "../framework/utils/FrameworkEvent": "FrameworkEvent"
  } ],
  CheckboxEx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f43ce7XQuFI0ItOD+Q/Yc0B", "CheckboxEx");
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
    var CheckboxEx = function(_super) {
      __extends(CheckboxEx, _super);
      function CheckboxEx() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.checked = null;
        _this.unchecked = null;
        _this.text = null;
        return _this;
      }
      CheckboxEx.prototype.reset = function(checked, msg) {
        this.checked.active = checked;
        msg && (this.text.string = msg);
      };
      CheckboxEx.prototype.getChecked = function() {
        return this.checked.active;
      };
      CheckboxEx.prototype.start = function() {
        var _this = this;
        moosnow.form.applyClickAnim(this.unchecked, function() {
          _this.checked.active && moosnow.http.getAllConfig(function(res) {
            res && res.checkBoxMistouch > 0 && moosnow.platform.showVideo(function(res) {
              res == moosnow.VIDEO_STATUS.END ? Lite.data.addVideoSp() : res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
            });
          });
          _this.checked.active = !_this.checked.active;
        });
      };
      __decorate([ property(cc.Node) ], CheckboxEx.prototype, "checked", void 0);
      __decorate([ property(cc.Node) ], CheckboxEx.prototype, "unchecked", void 0);
      __decorate([ property(cc.Label) ], CheckboxEx.prototype, "text", void 0);
      CheckboxEx = __decorate([ ccclass ], CheckboxEx);
      return CheckboxEx;
    }(cc.Component);
    exports.default = CheckboxEx;
    cc._RF.pop();
  }, {} ],
  Common: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8b10NknwBFGqyF+RuufBW3", "Common");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameworkEvent_1 = require("./FrameworkEvent");
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
      Common.getQueryVariable = function(variable) {
        if (window && window.location && window.location.search) {
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) return pair[1];
          }
        }
        return false;
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
        if (isNaN(time)) retValue = "00:00"; else {
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
          moosnow.event.sendEventImmediately(FrameworkEvent_1.default.COIN_CHANGED, null);
          clearTimeout(t);
          _this.isFunction(callback) && callback();
        }, 2100);
      };
      Common.isRemote = function(url) {
        return -1 != url.indexOf("http");
      };
      Common.pointInPolygonCollider = function(collider, newGlobalPos) {
        var stopPos = collider.node.convertToNodeSpaceAR(newGlobalPos);
        var points = [];
        collider.points.forEach(function(item) {
          points.push(cc.v2(item.x + collider.offset.x, item.y + collider.offset.y));
        });
        return cc.Intersection.pointInPolygon(stopPos, points);
      };
      Common.pointMinDistancePolygon = function(collider, newGlobalPos) {
        var stopPos = collider.node.convertToNodeSpaceAR(newGlobalPos);
        var points = [];
        collider.points.forEach(function(item) {
          points.push(cc.v2(item.x + collider.offset.x, item.y + collider.offset.y));
        });
        var minimalDis;
        for (var i = 0; i < points.length; i++) {
          var end = points.length - 1 == i ? points[0] : points[i + 1];
          var dis = cc.Intersection.pointLineDistance(stopPos, points[i], end, true);
          (this.isEmpty(minimalDis) || dis < minimalDis) && (minimalDis = dis);
        }
        return minimalDis;
      };
      return Common;
    }();
    exports.default = Common;
    cc._RF.pop();
  }, {
    "./FrameworkEvent": "FrameworkEvent"
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
    exports.ConfigData = void 0;
    var SheetManager_1 = require("../../script/framework/utils/SheetManager");
    var Sheets_1 = require("./Sheets");
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
    "../../script/framework/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  DelayEx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a8b7YCZhxAPa8MuKT925SK", "DelayEx");
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
    var DelayEx = function(_super) {
      __extends(DelayEx, _super);
      function DelayEx() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.delayNode = null;
        return _this;
      }
      DelayEx.prototype.start = function() {};
      DelayEx.prototype.onEnable = function() {};
      DelayEx.prototype.onShow = function() {
        var _this = this;
        moosnow.http.getAllConfig(function(res) {
          var delayTime = res && !isNaN(res.delayShow) ? parseFloat(res.delayShow) : 0;
          if (delayTime > 0) {
            _this.delayNode.active = false;
            _this.scheduleOnce(function() {
              _this.delayNode.active = true;
            }, delayTime);
          }
        });
      };
      __decorate([ property(cc.Node) ], DelayEx.prototype, "delayNode", void 0);
      DelayEx = __decorate([ ccclass ], DelayEx);
      return DelayEx;
    }(cc.Component);
    exports.default = DelayEx;
    cc._RF.pop();
  }, {} ],
  DelayMove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f830VbCrtI7LOsqdbHhjnF", "DelayMove");
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
    var enum_1 = require("../enum/enum");
    var Common_1 = require("../utils/Common");
    var BANNER_HORIZONTAL;
    (function(BANNER_HORIZONTAL) {
      BANNER_HORIZONTAL[BANNER_HORIZONTAL["NONE"] = 0] = "NONE";
      BANNER_HORIZONTAL[BANNER_HORIZONTAL["LEFT"] = 1] = "LEFT";
      BANNER_HORIZONTAL[BANNER_HORIZONTAL["RIGHT"] = 2] = "RIGHT";
      BANNER_HORIZONTAL[BANNER_HORIZONTAL["CENTER"] = 8] = "CENTER";
    })(BANNER_HORIZONTAL || (BANNER_HORIZONTAL = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DelayMove = function(_super) {
      __extends(DelayMove, _super);
      function DelayMove() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.moveNode = null;
        _this.distince = -100;
        _this.showBanner = true;
        _this.moveType = enum_1.DELAY_MOVE_TYPE.NONE;
        _this.horizontal = BANNER_HORIZONTAL.CENTER;
        _this.mMoveNum = 0;
        _this.mContinueTime = 0;
        _this.mDelayTime = 1.5;
        _this.preloadIndex = -1;
        return _this;
      }
      DelayMove.prototype.start = function() {};
      DelayMove.prototype.initCfg = function() {
        this.mContinueTime = parseFloat(Lite.config.getKey("OffsetBannerContinueTime", 0) + "");
        this.mDelayTime = parseFloat(Lite.config.getKey("OffsetBannerDelayTime", 0) + "");
        this.moveType == enum_1.DELAY_MOVE_TYPE.SKIN ? this.mMoveNum = Lite.config.getKey("SkinWudian") : this.moveType == enum_1.DELAY_MOVE_TYPE.END_GAME && (this.mMoveNum = Lite.config.getKey("RewardOffsetBanner"));
        3 == this.mMoveNum && (this.mMoveNum = Common_1.default.randomNumBoth(1, 2));
      };
      DelayMove.prototype.onEnable = function() {
        var _this = this;
        this.initCfg();
        this.initPosition();
        moosnow.platform.hideBanner();
        moosnow.form.hideAd(null);
        console.warn("tempNode runAction this.mMoveNum", this.mMoveNum, "mDelayTime", this.mDelayTime);
        if (0 == this.mMoveNum) {
          this.moveNode.active = true;
          this.moveNode.x = this.pos1.x;
          this.moveNode.y = this.pos1.y;
          this.createBanner();
        } else if (1 == this.mMoveNum) {
          this.showBanner && (this.preloadIndex = moosnow.platform.preloadBanner());
          this.createDelayBanner(this.mDelayTime);
          this.moveNode.active = false;
          var tempNode_1 = this.createTempNode();
          this.scheduleOnce(function() {
            console.log("tempNode runAction");
            tempNode_1.runAction(cc.sequence(cc.moveTo(1.5, cc.v2(_this.pos1.x, _this.pos1.y)), cc.callFunc(function() {
              _this.moveNode.active = true;
              _this.removeTemp();
            })));
          }, this.mDelayTime + this.mContinueTime);
        } else {
          this.showBanner && (this.preloadIndex = moosnow.platform.preloadBanner());
          this.moveNode.active = false;
          var tempNode_2 = this.createTempNode();
          tempNode_2.once(cc.Node.EventType.TOUCH_END, function() {
            _this.createDelayBanner(_this.mDelayTime);
            _this.scheduleOnce(function() {
              tempNode_2.runAction(cc.sequence(cc.moveTo(1.5, cc.v2(_this.pos1.x, _this.pos1.y)), cc.callFunc(function() {
                _this.moveNode.active = true;
                _this.removeTemp();
              })));
            }, _this.mDelayTime + _this.mContinueTime);
          }, this);
        }
      };
      DelayMove.prototype.createDelayBanner = function(delay) {
        void 0 === delay && (delay = 0);
        this.showBanner && this.scheduleOnce(this.createBanner, delay);
      };
      DelayMove.prototype.createBanner = function() {
        this.moveType == enum_1.DELAY_MOVE_TYPE.SKIN ? this.horizontal == moosnow.BANNER_HORIZONTAL.LEFT ? moosnow.platform.showBanner(true, null, moosnow.BANNER_HORIZONTAL.LEFT, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadIndex) : this.horizontal == moosnow.BANNER_HORIZONTAL.CENTER ? moosnow.platform.showBanner(true, null, moosnow.BANNER_HORIZONTAL.CENTER, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadIndex) : this.horizontal == moosnow.BANNER_HORIZONTAL.RIGHT ? moosnow.platform.showBanner(true, null, moosnow.BANNER_HORIZONTAL.RIGHT, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadIndex) : console.log(" DelayMove ~ createBanner \u4f4d\u7f6e\u9519\u8bef ", this.horizontal) : this.horizontal == moosnow.BANNER_HORIZONTAL.LEFT ? moosnow.platform.showFlashBanner(moosnow.BANNER_HORIZONTAL.LEFT, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadIndex) : this.horizontal == moosnow.BANNER_HORIZONTAL.CENTER ? moosnow.platform.showFlashBanner(moosnow.BANNER_HORIZONTAL.CENTER, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadIndex) : this.horizontal == moosnow.BANNER_HORIZONTAL.RIGHT ? moosnow.platform.showFlashBanner(moosnow.BANNER_HORIZONTAL.RIGHT, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadIndex) : console.log(" DelayMove ~ createBanner \u4f4d\u7f6e\u9519\u8bef ", this.horizontal);
      };
      DelayMove.prototype.initPosition = function() {
        if (!this.pos1) {
          this.pos1 = this.moveNode.position.clone();
          this.pos2 = this.pos1.clone().add(new cc.Vec2(0, this.distince));
        }
        this.moveNode.active = false;
      };
      DelayMove.prototype.createTempNode = function() {
        var tempButtom = cc.instantiate(this.moveNode);
        tempButtom.active = true;
        this.moveNode.parent.addChild(tempButtom);
        tempButtom.x = this.pos2.x;
        tempButtom.y = this.pos2.y;
        this.mTempButtom = tempButtom;
        return tempButtom;
      };
      DelayMove.prototype.removeTemp = function() {
        this.mTempButtom.active = false;
        this.mTempButtom.removeFromParent();
        this.mTempButtom.destroy();
      };
      DelayMove.prototype.onDisable = function() {
        moosnow.platform.hideBanner();
        moosnow.form.hideAd(null);
        this.unschedule(this.createBanner);
      };
      __decorate([ property({
        tooltip: "\u79fb\u52a8\u7684\u8282\u70b9",
        type: cc.Node
      }) ], DelayMove.prototype, "moveNode", void 0);
      __decorate([ property({
        tooltip: "Y\u8f74\u79fb\u52a8\u5230\u76ee\u524d\u70b9\u7684\u8ddd\u79bb"
      }) ], DelayMove.prototype, "distince", void 0);
      __decorate([ property({
        tooltip: "\u662f\u5426\u663e\u793abanner"
      }) ], DelayMove.prototype, "showBanner", void 0);
      __decorate([ property({
        type: cc.Enum(enum_1.DELAY_MOVE_TYPE)
      }) ], DelayMove.prototype, "moveType", void 0);
      __decorate([ property({
        type: cc.Enum(BANNER_HORIZONTAL)
      }) ], DelayMove.prototype, "horizontal", void 0);
      DelayMove = __decorate([ ccclass ], DelayMove);
      return DelayMove;
    }(cc.Component);
    exports.default = DelayMove;
    cc._RF.pop();
  }, {
    "../enum/enum": "enum",
    "../utils/Common": "Common"
  } ],
  Delay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "efc2baB0I9Af7MyCBRLxWXZ", "Delay");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Delay = void 0;
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
    exports.EasterEgg = void 0;
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/framework/utils/SheetManager");
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
    "../../script/framework/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  EntityData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79c58CLqqBBF6JWDqOsHcEy", "EntityData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EntityData = void 0;
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
      });
      EntityLogic.prototype.willShow = function(data) {
        this.mLogicData = data;
        if (data) {
          isNaN(data.x) || (this.node.x = data.x);
          isNaN(data.y) || (this.node.y = data.y);
          isNaN(data.width) || (this.node.width = data.width);
          isNaN(data.height) || (this.node.height = data.height);
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
        _this.entityLogics = [];
        _this._serializeId = 0;
        _this.paused = true;
        _this.prefabPath = "prefab/entity/";
        _this.entityPools = [];
        _this.mIsSlow = true;
        _this.levelKeyQuene = [];
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
      EntityModule.prototype.addLevelKey = function(level, name) {
        var levelName = this.levelKey(level, name);
        0 == this.levelKeyQuene.filter(function(item) {
          return item == levelName;
        }).length && this.levelKeyQuene.push(levelName);
      };
      EntityModule.prototype.levelKey = function(level, name) {
        return "level" + level + "_" + name;
      };
      EntityModule.prototype.addPrefab = function(name, prefab, replace) {
        void 0 === replace && (replace = true);
        replace ? this[name] = prefab : this[name] ? console.error("\u5df2\u7ecf\u5b58\u5728\u540c\u540d prefab", this[name]) : this[name] = prefab;
      };
      EntityModule.prototype.addLevelPrefab = function(level, name, prefab, replace) {
        void 0 === replace && (replace = true);
        this.addLevelKey(level, name);
        var levelName = this.levelKey(level, name);
        this.addPrefab(levelName, prefab, replace);
      };
      EntityModule.prototype.showLevelEntity = function(level, name, parentNode, data) {
        this.showEntity(this.levelKey(level, name), parentNode, data);
      };
      EntityModule.prototype.getAllLevelEntityByName = function(level, name) {
        var levelName = this.levelKey(level, name);
        return this.entityLogics.filter(function(item) {
          return item.poolName == levelName;
        });
      };
      EntityModule.prototype.getAllLevelEntity = function(level) {
        var levelName = this.levelKey(level, "");
        return this.entityLogics.filter(function(item) {
          return -1 != item.poolName.indexOf(levelName);
        });
      };
      EntityModule.prototype.getAllEntity = function(name) {
        return this.entityLogics.filter(function(item) {
          return item.poolName == name;
        });
      };
      EntityModule.prototype.showEntity = function(name, parentNode, data) {
        var logic = this._showEntity(name);
        logic.id = this._serializeId++;
        logic.node.parent = parentNode;
        logic.node.active = false;
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
        if (!entity) {
          debugger;
          console.warn(name);
        }
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
          logic.node.destroy();
        } else {
          var pool = this._getOrNewEntityPool(logic.poolName);
          logic.willHide(data);
          pool.put(logic.node);
          logic.node.active = false;
          logic.onHide(data);
          logic.node.removeFromParent();
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entitys = function() {
      function Entitys() {}
      Entitys.mapItem = "mapItem";
      Entitys.end = "end";
      Entitys.beautifyScene = "beautify";
      Entitys.road = "road";
      Entitys.buffer = "buffer";
      Entitys.side = "side";
      Entitys.role = "role";
      Entitys.trap = "trap";
      Entitys.roleBullet = "rolebullet";
      Entitys.enemy = "enemy";
      Entitys.enemyBullet = "enemybullet";
      return Entitys;
    }();
    exports.default = Entitys;
    cc._RF.pop();
  }, {} ],
  FrameworkEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84144IDHxFCyKrGLYLIXVsv", "FrameworkEvent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventType = function() {
      function EventType() {}
      EventType.GAME_STATE_START = "GAME_STATE_START";
      EventType.GAME_STATE_OVER = "GAME_STATE_OVER";
      EventType.GAME_CUT_END = "GAME_CUT_END";
      EventType.GAME_REFRESH_CUT_NUM = "GAME_REFRESH_CUT_NUM";
      EventType.GAME_LEVEL_END = "GAME_LEVEL_END";
      EventType.GAME_STATE_RESPAWN = "GAME_STATE_RESPAWN";
      EventType.GAME_STATE_PAUSE = "GAME_STATE_PAUSE";
      EventType.GAME_STATE_RESUME = "GAME_STATE_RESUME";
      EventType.GAME_STATE_NEXT = "GAME_STATE_NEXT";
      EventType.GAME_STATE_REPLAY = "GAME_STATE_REPLAY";
      EventType.GAME_STATE_CANCEL = "GAME_STATE_CANCEL";
      EventType.GAME_STATE_FAST_END = "GAME_STATE_FAST_END";
      EventType.REPLAY_LEVEL = "REPLAY_LEVEL";
      EventType.SHOW_TRANSITION = "SHOW_TRANSITION";
      EventType.HIDE_TRANSITION = "HIDE_TRANSITION";
      EventType.VIBRATESWITCH_CHANGED = "VIBRATESWITCH_CHANGED";
      EventType.SOUNDSWITCH_CHANGED = "SOUNDSWITCH_CHANGED";
      EventType.MUSICSWITCH_CHANGED = "MUSICSWITCH_CHANGED";
      EventType.ON_PLATFORM_SHOW = "ON_PLATFORM_SHOW";
      EventType.ON_PLATFORM_HIDE = "ON_PLATFORM_HIDE";
      EventType.SKIN_CHANGE = "SKIN_CHANGE";
      EventType.SKIN_UNLOCK = "SKIN_UNLOCK";
      EventType.SKIN_SELECT = "SKIN_SELECT";
      EventType.TOUCH_UP = "TOUCH_UP";
      EventType.TOUCH_MOVE = "TOUCH_MOVE";
      EventType.TOUCH_DOWN = "TOUCH_DOWN";
      EventType.ROCKER_MOVE = "ROCKER_MOVE";
      EventType.ROCKER_JUMP = "ROCKER_JUMP";
      EventType.ROCKER_ATTACK = "ROCKER_ATTACK";
      EventType.LEVEL_CHANGED = "LEVEL_CHANGED";
      EventType.COIN_CHANGED = "LEVEL_CHANGED";
      EventType.DIAMOND_CHANGED = "DIAMOND_CHANGED";
      EventType.ROLE_HP_CHANGED = "ROLE_HP_CHANGED";
      EventType.CLEAR_ALL_MAP = "CLEAR_ALL_MAP";
      EventType.RECEIVE_RAIN = "RECEIVE_RAIN";
      EventType.SP_NUM_CHANGED = "SP_NUM_CHANGED";
      EventType.FOLLOW_CHANGED = "FOLLOW_CHANGED";
      EventType.CAMERA_CHANGED = "CAMERA_CHANGED";
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
    var FrameworkEvent_1 = require("../framework/utils/FrameworkEvent");
    var Common_1 = require("../framework/utils/Common");
    var LevelCfg_1 = require("../../sheets/vo/LevelCfg");
    var SkinCfg_1 = require("../../sheets/vo/SkinCfg");
    var GameDataCenter = function(_super) {
      __extends(GameDataCenter, _super);
      function GameDataCenter() {
        var _this = _super.call(this) || this;
        _this.CURRENT_NEW_USER = "CURRENT_NEW_USER";
        _this.VIBRATE_SWITCH = "VIBRATE_SWITCH";
        _this.CURRENT_LEVEL = "CURRENT_LEVEL";
        _this.TOKEN = "token";
        _this.OPEN_ID = "OPEN_ID";
        _this.SP_NUM = "SP_NUM";
        _this.SP_DATE = "SP_DATE";
        _this.FOLLOW_TAG = "FOLLOW_TAG";
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
        _this.USER_PRIZE_KEY = "USER_PRIZE_KEY";
        _this.mCurrentMisTouchCount = 0;
        _this.AD_FORM_TAG = "";
        _this.mUserLevel = null;
        _this.mCoin = 0;
        _this.mDiamond = 0;
        _this.mMistouchTag = 1;
        _this.mCutNum = 0;
        _this.initNewData();
        return _this;
      }
      Object.defineProperty(GameDataCenter.prototype, "adFormTag", {
        get: function() {
          return this.AD_FORM_TAG;
        },
        set: function(value) {
          this.AD_FORM_TAG = value;
        },
        enumerable: false,
        configurable: true
      });
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
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.VIBRATESWITCH_CHANGED, on);
      };
      GameDataCenter.prototype.initNewData = function() {
        if (this.getToken()) return;
        moosnow.setting.setValue(this.CURRENT_LEVEL, 1);
        moosnow.setting.setValue(this.COIN, 500);
        moosnow.setting.setObject(this.USER_SKIN, {
          10001: {
            coinNum: 1e3
          }
        });
        this.addSp(3);
        this.setToken(Common_1.default.generateUUID());
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
        if (!this.mCurrentLevel) return moosnow.setting.getInt(this.CURRENT_LEVEL, 1);
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
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.LEVEL_CHANGED, v);
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
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.COIN_CHANGED, this.mCoin);
      };
      GameDataCenter.prototype.addCoin = function(v) {
        this.mCoin += v;
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.COIN_CHANGED, this.mCoin);
      };
      GameDataCenter.prototype.setCoin = function(v) {
        this.mCoin = v;
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.COIN_CHANGED, this.mCoin);
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
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.DIAMOND_CHANGED, this.mDiamond);
      };
      GameDataCenter.prototype.addDiamond = function(v) {
        this.mDiamond += v;
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.DIAMOND_CHANGED, this.mDiamond);
      };
      GameDataCenter.prototype.setDiamond = function(v) {
        this.mDiamond = v;
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.DIAMOND_CHANGED, this.mDiamond);
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
        var addSkin = SkinCfg_1.SkinCfg.get(skinId);
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
      GameDataCenter.prototype.clearCutNum = function() {
        this.mCutNum = 0;
      };
      GameDataCenter.prototype.addCutNum = function(num) {
        this.mCutNum += num;
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_REFRESH_CUT_NUM, this.mCutNum);
      };
      GameDataCenter.prototype.getCutNum = function() {
        return this.mCutNum;
      };
      GameDataCenter.prototype.addFollowSp = function() {
        this.getSpNum();
        this.mSpNum += 5;
        moosnow.setting.setValue(this.SP_NUM, this.mSpNum);
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SP_NUM_CHANGED, this.mSpNum);
      };
      GameDataCenter.prototype.addVideoSp = function() {
        this.addSp(5);
      };
      GameDataCenter.prototype.getSpTime = function() {
        return moosnow.setting.getInt(this.SP_DATE, 0);
      };
      GameDataCenter.prototype.addChangeTag = function() {
        moosnow.setting.setValue(this.FOLLOW_TAG, Date.now());
      };
      GameDataCenter.prototype.getChangeTag = function() {
        return moosnow.setting.getInt(this.FOLLOW_TAG, 0);
      };
      GameDataCenter.prototype.addTimeSp = function() {
        this.addSp(1);
        moosnow.setting.setValue(this.SP_DATE, Date.now());
      };
      GameDataCenter.prototype.addSp = function(value) {
        this.getSpNum();
        this.mSpNum += value;
        this.mSpNum > 10 && (this.mSpNum = 10);
        this.mSpNum <= 0 && (this.mSpNum = 0);
        moosnow.setting.setValue(this.SP_NUM, this.mSpNum);
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SP_NUM_CHANGED, this.mSpNum);
      };
      GameDataCenter.prototype.getSpNum = function() {
        this.mSpNum || (this.mSpNum = moosnow.setting.getInt(this.SP_NUM, 0));
        this.mSpNum < 0 && (this.mSpNum = 0);
        return this.mSpNum;
      };
      return GameDataCenter;
    }(BaseModule_1.default);
    exports.default = GameDataCenter;
    cc._RF.pop();
  }, {
    "../../sheets/vo/LevelCfg": "LevelCfg",
    "../../sheets/vo/SkinCfg": "SkinCfg",
    "../framework/modules/BaseModule": "BaseModule",
    "../framework/utils/Common": "Common",
    "../framework/utils/FrameworkEvent": "FrameworkEvent"
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
    var FrameworkEvent_1 = require("../../framework/utils/FrameworkEvent");
    var LevelCfg_1 = require("../../../sheets/vo/LevelCfg");
    var SiteMgr_1 = require("../SiteMgr");
    var BundleMgr_1 = require("../BundleMgr");
    var Bundles_1 = require("../config/Bundles");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameState = function(_super) {
      __extends(GameState, _super);
      function GameState() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gamePause = true;
        _this.gameStarted = false;
        _this.role = null;
        _this.gameLevel = 1;
        _this.gameCoin = 0;
        _this.isBoss = false;
        _this.mBeginTime = 0;
        return _this;
      }
      GameState.prototype.start = function() {
        Lite.myGame = this;
        moosnow.event.addListener(FrameworkEvent_1.default.GAME_STATE_START, this, this.startGame);
        moosnow.event.addListener(FrameworkEvent_1.default.GAME_STATE_OVER, this, this.gameOver);
        moosnow.event.addListener(FrameworkEvent_1.default.GAME_STATE_RESPAWN, this, this.respawn);
        moosnow.event.addListener(FrameworkEvent_1.default.GAME_STATE_RESUME, this, this.resumeGame);
        moosnow.event.addListener(FrameworkEvent_1.default.GAME_STATE_PAUSE, this, this.pauseGame);
        moosnow.event.addListener(FrameworkEvent_1.default.GAME_STATE_NEXT, this, this.nextGame);
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_PLATFORM_HIDE, this, function(res) {
          console.log("game state  ON_PLATFORM_HIDE ", res);
          Lite.audio.pauseMusic();
        });
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_PLATFORM_SHOW, this, function(res) {
          console.log("game state  ON_PLATFORM_SHOW ", res);
          moosnow.platform.videoPlaying || Lite.audio.resumeMusic();
        });
      };
      GameState.prototype.playBgMusic = function() {
        Lite.audio.playGameMusic();
      };
      GameState.prototype.startGame = function(level) {
        var _this = this;
        if (this.gameStarted) return;
        this.gameStarted = true;
        this.mBeginTime = Date.now();
        this.isBoss = false;
        moosnow.form.hideAd(function() {});
        BundleMgr_1.default.loadGameBundle(function() {
          SiteMgr_1.default.show(Lite.config.site02, function() {
            _this.startGameLogic(level);
          });
        });
      };
      GameState.prototype.startGameLogic = function(level) {
        Lite.audio.stopMusic();
        this.playBgMusic();
        this.resumeGame();
        moosnow.platform.startRecord();
        Lite.myGame.gameLevel = level;
        console.log("\u6e38\u620f\u5173\u5361 ", level);
        Lite.ui.hasUIForm(UIForms_1.default.HomeForm) ? Lite.ui.hideUIForm(UIForms_1.default.HomeForm, null, function() {
          Lite.ui.hasUIForm(UIForms_1.default.GameForm) || Lite.ui.pushUIForm(UIForms_1.default.GameForm, {}, null, Bundles_1.default.gameform);
        }) : Lite.ui.hasUIForm(UIForms_1.default.GameForm) || Lite.ui.pushUIForm(UIForms_1.default.GameForm, {}, null, Bundles_1.default.gameform);
        moosnow.http.startGame(level);
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
      GameState.prototype.replay = function(e) {};
      GameState.prototype.gameOver = function(e) {
        var _this = this;
        if (!this.gameStarted) return;
        this.gameStarted = false;
        var mistouchTag = Lite.data.getMistouchTag();
        Lite.data.setMistouchTag(mistouchTag + 1);
        BundleMgr_1.default.loadEndBundle(function() {
          SiteMgr_1.default.show(Lite.config.site03, function() {
            _this.gameOverLogic(e);
          });
        });
      };
      GameState.prototype.gameOverLogic = function(e) {
        this.pauseGame();
        Lite.audio.stopMusic();
        var level = Lite.data.getCurrentLevel();
        var t = Date.now() - this.mBeginTime;
        moosnow.http.endGame(e.level, e.isWin);
        if (e.isWin) {
          Lite.data.setUserLevel(e.level, t);
          e.level == level && e.level < LevelCfg_1.LevelCfg.getAll().length && Lite.data.addCurrentLevel();
        }
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SHOW_TRANSITION, null);
        Lite.ui.pushUIForm(UIForms_1.default.EndForm, {
          isWin: e.isWin,
          level: e.level
        }, function() {
          moosnow.event.sendEventImmediately(FrameworkEvent_1.default.HIDE_TRANSITION, null);
          console.log("\u7ed3\u675f\u9875\u5173\u95ed\u8fc7\u6e21\u9875");
        }, Bundles_1.default.endform);
      };
      GameState.prototype.nextGame = function(isOpen) {
        if (this.gameStarted) return;
        this.gameStarted = true;
        this.resumeGame();
        this.playBgMusic();
        var lv = Lite.data.getCurrentLevel();
        this.mBeginTime = Date.now();
        Lite.ui.hasUIForm(UIForms_1.default.GameForm) || Lite.ui.pushUIForm(UIForms_1.default.GameForm, {
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
    "../../../sheets/vo/LevelCfg": "LevelCfg",
    "../../config/UIForms": "UIForms",
    "../../framework/utils/FrameworkEvent": "FrameworkEvent",
    "../BundleMgr": "BundleMgr",
    "../SiteMgr": "SiteMgr",
    "../config/Bundles": "Bundles",
    "./BaseModule": "BaseModule"
  } ],
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
    exports.LevelCfg = void 0;
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/framework/utils/SheetManager");
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
    "../../script/framework/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  LoadingBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d34dTxE1JBhYgn1JhZxyWL", "LoadingBase");
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
    var ConfigData_1 = require("../../../sheets/vo/ConfigData");
    var BundleMgr_1 = require("../BundleMgr");
    var SiteMgr_1 = require("../SiteMgr");
    var Common_1 = require("../utils/Common");
    var SheetManager_1 = require("../utils/SheetManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadingBase = function(_super) {
      __extends(LoadingBase, _super);
      function LoadingBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.txtProgress = null;
        _this.txtVersion = null;
        _this.progressBar = null;
        _this.memo = null;
        _this.virtual1Progress = 0;
        _this.virtual1MaxProgress = 80;
        _this.virtual1Time = 0;
        _this.virtual1MaxTime = 2;
        _this.virtual2Progress = 0;
        _this.virtual2MaxProgress = 15;
        _this.virtual2Time = 0;
        _this.virtual2MaxTime = 2;
        _this.real1Progress = 0;
        _this.real2Progress = 0;
        _this.real3Progress = 0;
        _this.real1MaxProgress = 20;
        _this.real2MaxProgress = 50;
        _this.real3MaxProgress = 20;
        _this.openScene = false;
        _this.adProgress = 1;
        _this.adMaxProgress = 10;
        _this.txtAnimIndex = 0;
        return _this;
      }
      LoadingBase.prototype.start = function() {};
      LoadingBase.prototype.loadRes = function() {
        var _this = this;
        var cfg = "data/cfg.json";
        console.log("load cfg json ");
        SheetManager_1.SheetManager.loadDB("" + cfg, function() {
          ConfigData_1.ConfigData.init();
          Lite.data.initUserLevel();
          Lite.resource.loadAssetDir("prefab/entity", cc.Prefab, function(precent) {
            _this.real1Progress = (isNaN(precent) ? 0 : precent) / 100;
          }, function(err, res) {
            res.forEach(function(item) {
              Lite.entity.addPrefab(item.name, item, true);
            });
            _this.real1Progress = 1;
          });
          if (Lite.config.site01.length > 0) {
            _this.adProgress = 0;
            SiteMgr_1.default.loadNextSite(Lite.config.site01, 0, function(precent) {
              _this.adProgress = precent / 100;
            }, function() {
              _this.adProgress = 1;
            }, false);
          }
          _this.real3Progress = 1;
          if (1 == Lite.data.getCurrentLevel()) {
            _this.real3Progress = 0;
            BundleMgr_1.default.loadGameBundle(function() {
              _this.real3Progress = 1;
            }, function(precent) {
              _this.real3Progress = precent / 100;
            }, false);
          } else {
            _this.real3Progress = 0;
            BundleMgr_1.default.loadHomeBundle(function() {
              _this.real3Progress = 1;
            }, function(precent) {
              _this.real3Progress = precent / 100;
            }, false);
          }
          Lite.resource.preloadScene("Main", function(completedCount, totalCount, item) {
            var precent = completedCount / totalCount;
            _this.real2Progress = isNaN(precent) ? 0 : precent;
          }, function(error) {
            _this.real2Progress = 1;
          });
        });
      };
      LoadingBase.prototype.txtAnim = function() {
        var _this = this;
        var node = this.memo.children[this.txtAnimIndex % this.memo.childrenCount];
        var prevNode;
        this.txtAnimIndex > 0 && (prevNode = this.memo.children[(this.txtAnimIndex - 1) % this.memo.childrenCount]);
        var x = node.x;
        var y = node.y;
        node.runAction(cc.sequence(cc.moveTo(.2, cc.v2(x, y + 20)), cc.callFunc(function() {
          _this.txtAnimIndex++;
          _this.txtAnim();
        })));
        if (prevNode) {
          var prevX = prevNode.x;
          var prevY = prevNode.y;
          prevNode.runAction(cc.sequence(cc.moveTo(.2, cc.v2(prevX, 0)), cc.callFunc(function() {})));
        }
      };
      LoadingBase.prototype.onLoad = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.txtAnim();
          moosnow.platform.login();
          moosnow.http.getAllConfig(function(res) {
            Lite.config.addConfig(res);
            _this.loadRes();
          });
          _this.virtual1Progress = 0;
          _this.virtual2Progress = 0;
          _this.txtVersion.string = "version " + moosnow.Common.config.version;
          moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570", {
            name: "Loading\u9875"
          });
        }, 0);
      };
      LoadingBase.prototype.update = function(dt) {
        this.virtual1Time += dt;
        this.virtual1Time > this.virtual1MaxTime && (this.virtual1Time = this.virtual1MaxTime);
        this.virtual1Progress = this.virtual1Time / this.virtual1MaxTime * this.virtual1MaxProgress;
        if (this.virtual1Time = this.virtual1MaxTime) {
          this.virtual2Time += dt;
          this.virtual2Time > this.virtual2MaxTime && (this.virtual2Time = this.virtual2MaxTime);
          this.virtual2Progress = this.virtual2Time / this.virtual2MaxTime * this.virtual2MaxProgress;
        }
        this.progressChange();
      };
      LoadingBase.prototype.progressChange = function() {
        if (this.openScene) return;
        var virtualProgress = this.virtual1Progress + this.virtual2Progress;
        var realProgress = this.real1Progress * this.real1MaxProgress + this.real2Progress * this.real2MaxProgress + this.real3Progress * this.real3MaxProgress + this.adProgress * this.adMaxProgress;
        var progress = virtualProgress > realProgress ? virtualProgress : realProgress;
        isNaN(progress) ? this.txtProgress.string = Common_1.default.numFixed(0, 1) + "%" : this.txtProgress.string = Common_1.default.numFixed(progress, 1) + "%";
        this.progressBar.progress = progress / 100;
        progress >= 100 && this.loadScene();
      };
      LoadingBase.prototype.loadScene = function() {
        if (this.openScene) return;
        this.openScene = true;
        Lite.resource.loadScene("Main");
      };
      __decorate([ property(cc.Label) ], LoadingBase.prototype, "txtProgress", void 0);
      __decorate([ property(cc.Label) ], LoadingBase.prototype, "txtVersion", void 0);
      __decorate([ property(cc.ProgressBar) ], LoadingBase.prototype, "progressBar", void 0);
      __decorate([ property(cc.Node) ], LoadingBase.prototype, "memo", void 0);
      LoadingBase = __decorate([ ccclass ], LoadingBase);
      return LoadingBase;
    }(cc.Component);
    exports.default = LoadingBase;
    cc._RF.pop();
  }, {
    "../../../sheets/vo/ConfigData": "ConfigData",
    "../BundleMgr": "BundleMgr",
    "../SiteMgr": "SiteMgr",
    "../utils/Common": "Common",
    "../utils/SheetManager": "SheetManager"
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
  MainBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16c71vktUdFL5Wn6IeMhW9F", "MainBase");
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
    var BundleMgr_1 = require("../BundleMgr");
    var Bundles_1 = require("../config/Bundles");
    var SiteMgr_1 = require("../SiteMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainBase = function(_super) {
      __extends(MainBase, _super);
      function MainBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.background = null;
        _this.bg1 = null;
        _this.bg2 = null;
        _this.adProgress = 1;
        _this.adMaxProgress = .1;
        return _this;
      }
      MainBase.prototype.start = function() {
        moosnow.http.finishLoading();
        moosnow.platform.reportMonitor();
      };
      MainBase.prototype.onLoad = function() {
        var _this = this;
        BundleMgr_1.default.loadAdBundle(function() {
          if (Lite.ui.hasUIForm(UIForms_1.default.AdForm)) {
            moosnow.form.hideAd(function() {});
            _this.openNextForm();
          } else Lite.ui.pushUIForm(UIForms_1.default.AdForm, {
            showAd: moosnow.AD_POSITION.NONE,
            zIndex: cc.macro.MAX_ZINDEX
          }, function() {
            _this.openNextForm();
          }, Bundles_1.default.ad);
        });
      };
      MainBase.prototype.openNextForm = function() {
        SiteMgr_1.default.show(Lite.config.site01, function() {
          BundleMgr_1.default.loadHomeBundle(function() {
            Lite.ui.pushUIForm(UIForms_1.default.HomeForm, null, function() {}, Bundles_1.default.homeform);
          });
        });
      };
      __decorate([ property(cc.Sprite) ], MainBase.prototype, "background", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainBase.prototype, "bg1", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainBase.prototype, "bg2", void 0);
      MainBase = __decorate([ ccclass ], MainBase);
      return MainBase;
    }(cc.Component);
    exports.default = MainBase;
    cc._RF.pop();
  }, {
    "../../config/UIForms": "UIForms",
    "../BundleMgr": "BundleMgr",
    "../SiteMgr": "SiteMgr",
    "../config/Bundles": "Bundles"
  } ],
  MapControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5b832rPCpK4K/gUHrrW7Vo", "MapControl");
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
    var EntityLogic_1 = require("../framework/entity/EntityLogic");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MapControl = function(_super) {
      __extends(MapControl, _super);
      function MapControl() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MapControl = __decorate([ ccclass ], MapControl);
      return MapControl;
    }(EntityLogic_1.default);
    exports.default = MapControl;
    cc._RF.pop();
  }, {
    "../framework/entity/EntityLogic": "EntityLogic"
  } ],
  MapItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a605uHkK5IeYQ4cu6SyPF0", "MapItem");
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
    var EntityLogic_1 = require("../framework/entity/EntityLogic");
    var UIForms_1 = require("../config/UIForms");
    var FrameworkEvent_1 = require("../framework/utils/FrameworkEvent");
    var Common_1 = require("../framework/utils/Common");
    var SkinCfg_1 = require("../../sheets/vo/SkinCfg");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MapItem = function(_super) {
      __extends(MapItem, _super);
      function MapItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logo = null;
        _this.player = null;
        _this.locked = null;
        _this.memo = null;
        _this.skinFrame = null;
        _this.mOpening = false;
        return _this;
      }
      MapItem.prototype.addListener = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onOpendLevel, this);
        moosnow.event.addListener(FrameworkEvent_1.default.REPLAY_LEVEL, this, this.onReplay);
      };
      MapItem.prototype.removeListener = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onOpendLevel, this);
        moosnow.form.removeClickAnim(this.node);
      };
      MapItem.prototype.onReplay = function(e) {
        this.LogicData.level == e.level && this.onOpendLevel(true);
      };
      MapItem.prototype.onOpendLevel = function(isReplay) {
        var _this = this;
        void 0 === isReplay && (isReplay = false);
        if (this.mOpening) return;
        if (this.LogicData.level > Lite.data.getCurrentLevel()) {
          Lite.ui.showToast("\u8981\u4f9d\u6b21\u901a\u5173\u54e6!");
          return;
        }
        if (Lite.data.getSpNum() <= 0) {
          Lite.ui.pushUIForm(UIForms_1.default.spForm, null);
          return;
        }
        this.mOpening = true;
        moosnow.platform.hideBanner();
        var mistouchTag = Lite.data.getMistouchTag();
        moosnow.http.getAllConfig(function(res) {
          moosnow.http.getMisTouchNum(function(misNum) {
            Lite.data.setMistouchTag(mistouchTag + 1);
            moosnow.form.hideAd(function() {});
            _this.mOpening = false;
            if (0 == misNum) moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_STATE_START, _this.LogicData.level); else {
              var mistouchInterval = res && res.mistouchInterval ? parseInt(res.mistouchInterval) : 2;
              if (mistouchTag % mistouchInterval == 0) Lite.ui.pushUIForm(UIForms_1.default.MistouchForm, {
                isReplay: isReplay,
                level: _this.LogicData.level
              }, function() {
                _this.mOpening = false;
              }); else {
                _this.mOpening = false;
                moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_STATE_START, _this.LogicData.level);
              }
            }
          });
        });
      };
      MapItem.prototype.openTryForm = function() {
        var skinAll = SkinCfg_1.SkinCfg.getAll();
        var skinArr = [];
        skinAll.forEach(function(item) {
          var userSkin = Lite.data.getUserSkinById(item.ID);
          userSkin || skinArr.push(item);
        });
        moosnow.form.hideAd(function() {});
        if (0 == skinArr.length) {
          moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_STATE_START, this.LogicData.level);
          return;
        }
        Lite.ui.pushUIForm(UIForms_1.default.TryForm, Common_1.default.deepCopy(this.LogicData));
        return;
      };
      MapItem.prototype.willShow = function(data) {
        _super.prototype.willShow.call(this, data);
        this.mOpening = false;
        this.node.setPosition(data.x, data.y);
        this.memo.getComponent(cc.Label).string = data.memo;
        var curLv = Lite.data.getCurrentLevel();
        this.player.active = false;
        this.locked.active = false;
        if (data.level > curLv) {
          this.logo.active = false;
          this.locked.active = true;
        } else if (data.level < curLv) {
          this.locked.active = false;
          this.logo.active = true;
          this.showStar(data.prefab);
        } else this.player.active = true;
        this.addListener();
      };
      MapItem.prototype.showStar = function(level) {};
      MapItem.prototype.willHide = function() {
        this.removeListener();
      };
      __decorate([ property(cc.Node) ], MapItem.prototype, "logo", void 0);
      __decorate([ property(cc.Node) ], MapItem.prototype, "player", void 0);
      __decorate([ property(cc.Node) ], MapItem.prototype, "locked", void 0);
      __decorate([ property(cc.Node) ], MapItem.prototype, "memo", void 0);
      __decorate([ property(cc.SpriteFrame) ], MapItem.prototype, "skinFrame", void 0);
      MapItem = __decorate([ ccclass ], MapItem);
      return MapItem;
    }(EntityLogic_1.default);
    exports.default = MapItem;
    cc._RF.pop();
  }, {
    "../../sheets/vo/SkinCfg": "SkinCfg",
    "../config/UIForms": "UIForms",
    "../framework/entity/EntityLogic": "EntityLogic",
    "../framework/utils/Common": "Common",
    "../framework/utils/FrameworkEvent": "FrameworkEvent"
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
  MoveUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9043dW+tUdOVI6hocX3RwVh", "MoveUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ArrayUtil_1 = require("./ArrayUtil");
    var MoveTaskItem = function() {
      function MoveTaskItem(v, t, interval, accel, callback) {
        this.mV = 3;
        this.mT = 0;
        this.mInterval = .01;
        this.mAccel = 5;
        this.mV = v;
        this.mT = t;
        this.mInterval = interval;
        this.mAccel = accel;
        this.mCallback = callback;
      }
      return MoveTaskItem;
    }();
    var MoveTaskItem2 = function() {
      function MoveTaskItem2(startPoint, endPoint, height, xSpeed, callback) {
        void 0 === height && (height = 100);
        void 0 === xSpeed && (xSpeed = 1);
        this.height = .01;
        this.xSpeed = 5;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.height = height;
        this.xSpeed = xSpeed;
        this.mCallback = callback;
      }
      return MoveTaskItem2;
    }();
    var MoveUtil = function() {
      function MoveUtil() {
        this.mTaskId = 0;
        this.mTask = [];
        this.mTask2 = [];
      }
      MoveUtil.prototype.addTask = function(v, t, interval, accel, callback) {
        this.mTask.push(new MoveTaskItem(v, t, interval, accel, callback));
      };
      MoveUtil.prototype.addTask2 = function(startPoint, endPoint, height, xSpeed, callback) {
        void 0 === height && (height = 100);
        void 0 === xSpeed && (xSpeed = 1);
        var x1 = startPoint.x;
        var y1 = startPoint.y;
        var x3 = endPoint.x;
        var y3 = endPoint.y;
        var width = Math.abs(x3 - x1);
        var x2 = x1 + width / 2;
        var y2 = y1 - height;
        var b = ((y1 - y3) * (x1 * x1 - x2 * x2) - (y1 - y2) * (x1 * x1 - x3 * x3)) / ((x1 - x3) * (x1 * x1 - x2 * x2) - (x1 - x2) * (x1 * x1 - x3 * x3));
        var a = (y1 - y2 - b * (x1 - x2)) / (x1 * x1 - x2 * x2);
        var c = y1 - a * x1 * x1 - b * x1;
        var item = new MoveTaskItem2(startPoint, endPoint, height, xSpeed, callback);
        item.a = a;
        item.b = b;
        item.c = c;
        item.vx = width / xSpeed;
        this.mTask2.push(item);
      };
      MoveUtil.prototype.onUpdate = function(dt) {
        for (var i = 0; i < this.mTask.length; i++) {
          var taskParam = this.mTask[i];
          taskParam.mT += taskParam.mInterval;
          var nextPoint = taskParam.mV * taskParam.mT + taskParam.mAccel * Math.pow(taskParam.mT, 2) / 2;
          this.mTask[i] = taskParam;
          false == taskParam.mCallback(nextPoint) && ArrayUtil_1.default.remove(this.mTask, taskParam);
        }
        for (var i = 0; i < this.mTask2.length; i++) {
          var taskParam = this.mTask2[i];
          var x = dt * taskParam.xSpeed;
          var y = taskParam.a * x ^ 2 + taskParam.b * x + taskParam.c;
          false == taskParam.mCallback(cc.v2(x, y)) && ArrayUtil_1.default.remove(this.mTask2, taskParam);
        }
      };
      return MoveUtil;
    }();
    exports.default = MoveUtil;
    cc._RF.pop();
  }, {
    "./ArrayUtil": "ArrayUtil"
  } ],
  PhysicsSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f730GsdGROgpx/sEkKeJIs", "PhysicsSetting");
    cc.game.on(cc.game.EVENT_ENGINE_INITED, function() {
      var physicsManager = cc.director.getPhysicsManager();
      physicsManager.enabled = true;
      physicsManager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
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
    exports.PrizeBox = void 0;
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/framework/utils/SheetManager");
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
    "../../script/framework/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  ROLE_ATTACK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "602a3i8oiZKobna2vDSEYGy", "ROLE_ATTACK");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ROLE_ATTACK = void 0;
    var ROLE_ATTACK;
    (function(ROLE_ATTACK) {
      ROLE_ATTACK[ROLE_ATTACK["ATTACK1"] = 1] = "ATTACK1";
      ROLE_ATTACK[ROLE_ATTACK["ATTACK2"] = 2] = "ATTACK2";
      ROLE_ATTACK[ROLE_ATTACK["ATTACK3"] = 4] = "ATTACK3";
    })(ROLE_ATTACK = exports.ROLE_ATTACK || (exports.ROLE_ATTACK = {}));
    cc._RF.pop();
  }, {} ],
  ROLE_MOVE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1eed8lQKi1F6a1TXMWcq5E0", "ROLE_MOVE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ROLE_MOVE = void 0;
    var ROLE_MOVE;
    (function(ROLE_MOVE) {
      ROLE_MOVE[ROLE_MOVE["LEFT"] = 1] = "LEFT";
      ROLE_MOVE[ROLE_MOVE["RIGHT"] = 2] = "RIGHT";
    })(ROLE_MOVE = exports.ROLE_MOVE || (exports.ROLE_MOVE = {}));
    cc._RF.pop();
  }, {} ],
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
    var Common_1 = require("../utils/Common");
    var FrameworkEvent_1 = require("../utils/FrameworkEvent");
    var BaseModule_1 = require("./BaseModule");
    var ResourceModule = function(_super) {
      __extends(ResourceModule, _super);
      function ResourceModule() {
        return _super.call(this) || this;
      }
      ResourceModule.prototype.loadAsset = function(url, assetType, callback) {
        if (cc.resources && cc.resources.load) cc.resources.load(url, assetType, function(err, asset) {
          callback && callback(err, asset);
        }); else {
          var res = cc.loader.getRes(url, assetType);
          if (res) {
            callback && callback(null, res);
            return;
          }
          cc.loader.loadRes(url, assetType, function(err, asset) {
            callback && callback(err, asset);
          });
        }
      };
      ResourceModule.prototype.loadAssetDir = function(dir, type, progressCallback, completeCallback) {
        cc.resources && cc.resources.loadDir ? cc.resources.loadDir(dir, type, function(completedCount, totalCount, item) {
          var precent = completedCount / totalCount * 100;
          precent = Math.ceil(precent);
          progressCallback && progressCallback(precent);
        }, function(err, res) {
          completeCallback && completeCallback(err, res);
        }) : cc.loader.loadResDir(dir, type, function(completedCount, totalCount, item) {
          var precent = completedCount / totalCount * 100;
          precent = Math.ceil(precent);
          progressCallback && progressCallback(precent);
        }, function(err, res) {
          completeCallback && completeCallback(err, res);
        });
      };
      ResourceModule.prototype.preloadScene = function(sceneName, onProgress, onLoaded) {
        cc.director.preloadScene(sceneName, onProgress, onLoaded);
      };
      ResourceModule.prototype.loadScene = function(sceneName) {
        cc.director.loadScene(sceneName);
      };
      ResourceModule.prototype.loadBundle = function(nameOrUrl, completed) {
        cc.assetManager.loadBundle(nameOrUrl, function(err, bundle) {
          completed(err, bundle);
        });
      };
      ResourceModule.prototype.loadBundleRes = function(bundleName, prefabName, type, callback) {
        this.loadBundle(bundleName, function(err, bundle) {
          bundle.load(prefabName, type, function(err, res) {
            callback(err, res);
          });
        });
      };
      ResourceModule.prototype.loadSubEntity = function(nameOrUrl, onProgress, onComplete, entityDir, showLoading) {
        void 0 === entityDir && (entityDir = "entity");
        void 0 === showLoading && (showLoading = true);
        showLoading && moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SHOW_TRANSITION, null);
        this.loadBundle(nameOrUrl, function(err, bundle) {
          bundle.loadDir(entityDir, cc.Prefab, function(finish, total) {
            var precent = finish / total * 100;
            Common_1.default.isFunction(onProgress) && onProgress(precent);
          }, function(err, prefabs) {
            showLoading && moosnow.event.sendEventImmediately(FrameworkEvent_1.default.HIDE_TRANSITION, null);
            if (err) {
              console.warn("loadSubEntity err ", err);
              onComplete();
              return;
            }
            prefabs.forEach(function(prefab) {
              Lite.entity.addPrefab(prefab.name, prefab, true);
            });
            Common_1.default.isFunction(onComplete) && onComplete();
          });
        });
      };
      ResourceModule.prototype.loadBundleSound = function(nameOrUrl, onProgress, onComplete, soundDir, showLoading) {
        void 0 === soundDir && (soundDir = "sound");
        void 0 === showLoading && (showLoading = true);
        showLoading && moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SHOW_TRANSITION, null);
        this.loadBundle(nameOrUrl, function(err, bundle) {
          bundle.loadDir(soundDir, cc.AudioClip, function(finish, total) {
            var precent = finish / total * 100;
            Common_1.default.isFunction(onProgress) && onProgress(precent);
          }, function(err, audios) {
            showLoading && moosnow.event.sendEventImmediately(FrameworkEvent_1.default.HIDE_TRANSITION, null);
            if (err) {
              console.warn("loadSound err ", err);
              onComplete();
              return;
            }
            audios.forEach(function(audio) {
              Lite.audio.addAudio(audio);
            });
            Common_1.default.isFunction(onComplete) && onComplete();
          });
        });
      };
      return ResourceModule;
    }(BaseModule_1.default);
    exports.default = ResourceModule;
    cc._RF.pop();
  }, {
    "../utils/Common": "Common",
    "../utils/FrameworkEvent": "FrameworkEvent",
    "./BaseModule": "BaseModule"
  } ],
  RoleControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20ab0OIcbZIIL85O/5cH36a", "RoleControl");
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
    var FrameworkEvent_1 = require("../framework/utils/FrameworkEvent");
    var ROLE_MOVE_1 = require("../enum/ROLE_MOVE");
    var ROLE_ATTACK_1 = require("../enum/ROLE_ATTACK");
    var BaseControl_1 = require("./BaseControl");
    var SkinCfg_1 = require("../../sheets/vo/SkinCfg");
    var BUFFER_1 = require("../enum/BUFFER");
    var Entitys_1 = require("../config/Entitys");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoleControl = function(_super) {
      __extends(RoleControl, _super);
      function RoleControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logo = null;
        _this.mMaxHp = 0;
        _this.mCurHp = 0;
        _this.maxJumps = 2;
        _this.jumps = 2;
        _this.acceleration = 1500;
        _this.jumpSpeed = 200;
        _this.drag = 1200;
        _this.mBeUp = false;
        _this.mUp = false;
        _this.mMoveFlags = 0;
        _this.maxSpeed = 500;
        _this.quickSpeed = 1.5;
        _this.slowSpeed = .3;
        _this.scaleMax = 1.5;
        _this.scaleMin = .3;
        _this.mBuffer = BUFFER_1.BUFFER.NONE;
        _this.mBufferQuene = [];
        return _this;
      }
      Object.defineProperty(RoleControl.prototype, "currentHp", {
        get: function() {
          return this.mCurHp;
        },
        set: function(value) {
          console.log("\u66f4\u65b0\u8840\u91cf", value);
          if (this.mCurHp != value) {
            value < this.mCurHp && this.fadeAnim();
            value > this.mMaxHp && (value = this.mMaxHp);
            moosnow.event.sendEventImmediately(FrameworkEvent_1.default.ROLE_HP_CHANGED, {
              hp: value,
              max: this.mMaxHp
            });
          }
          if (this.mCurHp != value && value <= 0) {
            this.logo.stopAllActions();
            moosnow.platform.vibrateShort();
            this.stopMove();
            moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_STATE_OVER, {
              isWin: false
            });
          }
          this.mCurHp = value;
        },
        enumerable: false,
        configurable: true
      });
      RoleControl.prototype.start = function() {
        Lite.myGame.role = this;
        this.mMoveFlags = 0;
        this.mUp = false;
        this.mBody = this.node.getComponent(cc.RigidBody);
      };
      RoleControl.prototype.fadeAnim = function() {
        this.logo.stopAllActions();
        this.logo.runAction(cc.sequence(cc.fadeTo(.1, 100), cc.fadeTo(.1, 255)).repeat(10));
      };
      RoleControl.prototype.addListener = function() {
        moosnow.event.addListener(FrameworkEvent_1.default.ROCKER_MOVE, this, this.onRoleMove);
        moosnow.event.addListener(FrameworkEvent_1.default.ROCKER_JUMP, this, this.onJump);
        moosnow.event.addListener(FrameworkEvent_1.default.ROCKER_ATTACK, this, this.onAttack);
      };
      RoleControl.prototype.removeListener = function() {
        moosnow.event.removeListener(FrameworkEvent_1.default.ROCKER_MOVE, this);
        moosnow.event.removeListener(FrameworkEvent_1.default.ROCKER_JUMP, this);
        moosnow.event.removeListener(FrameworkEvent_1.default.ROCKER_ATTACK, this);
      };
      RoleControl.prototype.onRoleMove = function(vec) {};
      RoleControl.prototype.reset = function() {
        if (this.mBody) {
          this.mBody.enabled = true;
          this.mBody.type = cc.RigidBodyType.Dynamic;
        }
      };
      RoleControl.prototype.stopMove = function() {
        this.mMoveFlags &= ~ROLE_MOVE_1.ROLE_MOVE.LEFT;
        this.mMoveFlags &= ~ROLE_MOVE_1.ROLE_MOVE.RIGHT;
        this.mBody.linearVelocity = cc.v2(0, 0);
      };
      RoleControl.prototype.onJump = function() {
        this.hasBuffer(BUFFER_1.BUFFER.HITRECOVER) || this.jumps > 0 && this.jumps <= this.maxJumps && (this.mUp = true);
      };
      RoleControl.prototype.beJump = function() {
        this.mBeUp = true;
      };
      RoleControl.prototype.onAttack = function(e) {
        if (e.attack == ROLE_ATTACK_1.ROLE_ATTACK.ATTACK1) (!this.attack1Time || Date.now() - this.attack1Time > 1e3 * this.mCurrentSkinCfg.attack1CD) && (this.attack1Time = Date.now()); else if (e.attack == ROLE_ATTACK_1.ROLE_ATTACK.ATTACK2) {
          if (!this.attack2Time || Date.now() - this.attack2Time > 1e3 * this.mCurrentSkinCfg.attack2CD) {
            this.attack2Time = Date.now();
            this.createFire2(this.mCurrentSkinCfg.attack2Num);
          }
        } else if (e.attack == ROLE_ATTACK_1.ROLE_ATTACK.ATTACK3 && (!this.attack3Time || Date.now() - this.attack3Time > 1e3 * this.mCurrentSkinCfg.attack3CD)) {
          this.attack3Time = Date.now();
          this.createFire3(this.mCurrentSkinCfg.attack2Num);
        }
      };
      RoleControl.prototype.createFire2 = function(attackNum) {
        var bulletData = {
          x: this.node.x,
          y: this.node.y,
          attackNum: attackNum,
          xSpeed: this.node.scaleX
        };
        var logic = Lite.entity.showEntity(Entitys_1.default.roleBullet, this.node.parent, bulletData);
      };
      RoleControl.prototype.createFire3 = function(attackNum) {
        var bulletData = {
          x: this.node.x,
          y: this.node.y,
          attackNum: attackNum,
          xSpeed: this.node.scaleX,
          ySpeed: 10
        };
        var logic = Lite.entity.showEntity(Entitys_1.default.roleBullet, this.node.parent, bulletData);
      };
      RoleControl.prototype.beAttacked = function(num) {
        console.log("\u89d2\u8272\u88ab\u653b\u51fb", num);
        this.hasBuffer(BUFFER_1.BUFFER.UNRIVALLED) || (this.currentHp -= num);
      };
      RoleControl.prototype.beKilled = function() {
        if (!this.hasBuffer(BUFFER_1.BUFFER.UNRIVALLED)) {
          console.log("\u89d2\u8272\u88ab\u51fb\u6740");
          0 != this.currentHp && (this.currentHp = 0);
          this.stopMove();
          this.removeListener();
          this.mBody.enabled = false;
          this.node.active = false;
          this.mBody.type = cc.RigidBodyType.Static;
          this.node.active = true;
        }
      };
      RoleControl.prototype.addBuffer = function(buffer, time, interval, num) {
        if (this.hasBuffer(BUFFER_1.BUFFER.UNRIVALLED) && -1 != [ BUFFER_1.BUFFER.REDUCEHEALTH, BUFFER_1.BUFFER.SLOWDOWN, BUFFER_1.BUFFER.HITRECOVER ].indexOf(buffer)) return;
        if (buffer == BUFFER_1.BUFFER.UNRIVALLED) {
          this.removeBuffer(BUFFER_1.BUFFER.REDUCEHEALTH);
          this.removeBuffer(BUFFER_1.BUFFER.SLOWDOWN);
          this.removeBuffer(BUFFER_1.BUFFER.HITRECOVER);
        }
        buffer == BUFFER_1.BUFFER.ZOOMOUT && this.removeBuffer(BUFFER_1.BUFFER.ZOOMIN);
        buffer == BUFFER_1.BUFFER.ZOOMIN && this.removeBuffer(BUFFER_1.BUFFER.ZOOMOUT);
        this.mBuffer |= buffer;
        this.mBufferQuene.push({
          buffer: buffer,
          time: 0,
          num: num,
          maxTime: time,
          maxNum: num,
          interval: interval
        });
      };
      RoleControl.prototype.removeBuffer = function(buffer) {
        this.hasBuffer(buffer) && (this.mBuffer ^= buffer);
      };
      RoleControl.prototype.hasBuffer = function(buffer) {
        return (this.mBuffer & buffer) == buffer;
      };
      RoleControl.prototype.willShow = function(data) {
        _super.prototype.willShow.call(this, data);
        this.initRole();
        this.initRoleAnim(data);
        this.addListener();
        this.addBuffer(BUFFER_1.BUFFER.UNRIVALLED, 3, 0, 0);
        this.fadeAnim();
        this.reset();
      };
      RoleControl.prototype.onShow = function() {
        this.node.zIndex = cc.macro.MAX_ZINDEX;
      };
      RoleControl.prototype.willHide = function() {
        this.removeListener();
      };
      RoleControl.prototype.initRoleAnim = function(data) {};
      RoleControl.prototype.initRole = function() {
        var skin = SkinCfg_1.SkinCfg.get(Lite.data.getCurrentSkinId());
        this.acceleration = skin.acceleration;
        this.maxJumps = skin.maxJumps;
        this.jumps = skin.maxJumps;
        this.jumpSpeed = skin.jumpSpeed;
        this.mMaxHp = skin.maxHp;
        this.currentHp = skin.maxHp;
        this.maxSpeed = skin.maxSpeed;
        this.mCurrentSkinCfg = skin;
        this.node.scaleX = 1;
      };
      RoleControl.prototype.applyMove = function(dt) {
        if (!this.mBody) return;
        var speed = this.mBody.linearVelocity.clone();
        if (this.hasBuffer(BUFFER_1.BUFFER.HITRECOVER)) {
          this.stopMove();
          return;
        }
        if (this.mMoveFlags === ROLE_MOVE_1.ROLE_MOVE.LEFT) {
          this.node.scaleX > 0 && (this.node.scaleX *= -1);
          speed.x -= this.acceleration * dt;
          speed.x < -this.maxSpeed && (speed.x = -this.maxSpeed);
        } else if (this.mMoveFlags === ROLE_MOVE_1.ROLE_MOVE.RIGHT) {
          this.node.scaleX < 0 && (this.node.scaleX *= -1);
          speed.x += this.acceleration * dt;
          speed.x > this.maxSpeed && (speed.x = this.maxSpeed);
        } else {
          if (0 != speed.x) {
            var d = this.drag * dt;
            Math.abs(speed.x) <= d ? speed.x = 0 : speed.x -= speed.x > 0 ? d : -d;
          }
          speed.x = 0;
        }
        Math.abs(speed.y) < 1 && this.jumps <= 0 && (this.jumps = this.maxJumps);
        if (this.jumps > 0 && this.mUp || this.mBeUp) {
          speed.y = this.jumpSpeed;
          this.mBeUp ? this.mBeUp = false : this.jumps--;
        }
        this.mUp = false;
        this.mBody.linearVelocity = speed;
      };
      RoleControl.prototype.addHP = function(num) {
        this.currentHp += num;
      };
      RoleControl.prototype.applyBuffer = function(dt) {
        for (var i = 0; i < this.mBufferQuene.length; i++) {
          this.mBufferQuene[i].time += dt;
          var bufferItem = this.mBufferQuene[i];
          if (bufferItem.buffer == BUFFER_1.BUFFER.HEAL) {
            this.addHP(bufferItem.maxNum);
            this.mBufferQuene.splice(i, 1);
            i--;
          } else if (bufferItem.buffer == BUFFER_1.BUFFER.REDUCEHEALTH) {
            this.addHP(-bufferItem.maxNum);
            this.mBufferQuene.splice(i, 1);
            i--;
          } else if (this.mBufferQuene[i].time >= this.mBufferQuene[i].maxTime) {
            this.removeBuffer(this.mBufferQuene[i].buffer);
            this.mBufferQuene.splice(i, 1);
            i--;
          }
        }
      };
      RoleControl.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        console.log("\u89d2\u8272\u78b0\u5230\u4e86", otherCollider.node.group);
      };
      RoleControl.prototype.applySpeed = function(dt) {
        if (this.hasBuffer(BUFFER_1.BUFFER.QUICKEN)) {
          this.maxSpeed = this.mCurrentSkinCfg.maxSpeed * this.quickSpeed;
          var speed = this.mBody.linearVelocity.clone();
          speed.x = this.maxSpeed;
          console.log("RoleControl -> applySpeed ->QUICKEN maxSpeed", this.maxSpeed);
        } else if (this.hasBuffer(BUFFER_1.BUFFER.SLOWDOWN)) {
          this.maxSpeed = this.mCurrentSkinCfg.maxSpeed * this.slowSpeed;
          var speed = this.mBody.linearVelocity.clone();
          speed.x = this.maxSpeed;
          console.log("RoleControl -> applySpeed ->SLOWDOWN maxSpeed", this.maxSpeed);
        } else this.maxSpeed = this.mCurrentSkinCfg.maxSpeed;
      };
      RoleControl.prototype.applyScale = function(dt) {
        var vec = this.node.scale / Math.abs(this.node.scale);
        if (this.hasBuffer(BUFFER_1.BUFFER.ZOOMIN)) if (this.node.scaleX < this.scaleMax) {
          this.node.scaleX += vec / 60;
          this.node.scaleY += 1 / 60;
        } else {
          this.node.scaleX = this.scaleMax * vec;
          this.node.scaleY = this.scaleMax;
        } else if (this.hasBuffer(BUFFER_1.BUFFER.ZOOMOUT)) if (this.node.scaleX > this.scaleMin) {
          this.node.scaleX -= vec / 60;
          this.node.scaleY -= 1 / 60;
        } else {
          this.node.scaleX = this.scaleMin * vec;
          this.node.scaleY = this.scaleMin;
        } else {
          this.node.scaleX = vec;
          this.node.scaleY = 1;
        }
      };
      RoleControl.prototype.checkTrap = function() {};
      RoleControl.prototype.onFwUpdate = function(dt) {
        this.applyMove(dt);
        this.applyBuffer(dt);
        this.applyScale(dt);
        this.applySpeed(dt);
      };
      __decorate([ property({
        type: cc.Node,
        override: true
      }) ], RoleControl.prototype, "logo", void 0);
      RoleControl = __decorate([ ccclass ], RoleControl);
      return RoleControl;
    }(BaseControl_1.default);
    exports.default = RoleControl;
    cc._RF.pop();
  }, {
    "../../sheets/vo/SkinCfg": "SkinCfg",
    "../config/Entitys": "Entitys",
    "../enum/BUFFER": "BUFFER",
    "../enum/ROLE_ATTACK": "ROLE_ATTACK",
    "../enum/ROLE_MOVE": "ROLE_MOVE",
    "../framework/utils/FrameworkEvent": "FrameworkEvent",
    "./BaseControl": "BaseControl"
  } ],
  SPControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bda3lRG09B+avMjRPaStDk", "SPControl");
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
    var Common_1 = require("../../framework/utils/Common");
    var FrameworkEvent_1 = require("../../framework/utils/FrameworkEvent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SPControl = function(_super) {
      __extends(SPControl, _super);
      function SPControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.txtSp = null;
        _this.txtTime = null;
        return _this;
      }
      SPControl.prototype.start = function() {
        var _this = this;
        moosnow.event.addListener(FrameworkEvent_1.default.SP_NUM_CHANGED, this, function(num) {
          _this.txtSp.string = num;
        });
        this.txtSp.string = "" + Lite.data.getSpNum();
        var curTime = Lite.data.getSpTime();
        0 == curTime && (curTime = Date.now());
        var maxTime = 90;
        var useTime = 0;
        var val = Math.floor(parseInt("" + (curTime - Date.now()) / 1e3 / maxTime));
        val > 0 && Lite.data.addSp(val);
        this.schedule(function() {
          useTime++;
          _this.txtTime.string = Common_1.default.secondToDate(maxTime - useTime);
          if (maxTime - useTime == 0) {
            useTime = 0;
            Lite.data.addTimeSp();
          }
        }, 1);
      };
      __decorate([ property(cc.Label) ], SPControl.prototype, "txtSp", void 0);
      __decorate([ property(cc.Label) ], SPControl.prototype, "txtTime", void 0);
      SPControl = __decorate([ ccclass ], SPControl);
      return SPControl;
    }(cc.Component);
    exports.default = SPControl;
    cc._RF.pop();
  }, {
    "../../framework/utils/Common": "Common",
    "../../framework/utils/FrameworkEvent": "FrameworkEvent"
  } ],
  SheetManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75c8dJgBUhLAq8lAxh3UiqE", "SheetManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SheetManager = void 0;
    var SheetManager = function() {
      function SheetManager() {}
      SheetManager.loadDB = function(url, callback) {
        var _this = this;
        -1 == url.indexOf("http") ? cc.loader.loadRes(url, function(err, res) {
          err && console.warn("loadDB err ", err);
          console.log("load db ", res);
          _this.data = res.json;
          callback();
        }) : cc.loader.load(url, function(err, res) {
          err && console.warn("loadDB err ", err);
          console.log("load db ", res);
          _this.data = res;
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
    exports.ConfigDataBase = exports.SignVoBase = exports.SkinCfgBase = exports.SignBase = exports.EasterEggBase = exports.PrizeBoxBase = exports.LevelCfgBase = void 0;
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
    var SkinCfgBase = function() {
      function SkinCfgBase() {}
      return SkinCfgBase;
    }();
    exports.SkinCfgBase = SkinCfgBase;
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
    exports.SignVo = void 0;
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/framework/utils/SheetManager");
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
    "../../script/framework/utils/SheetManager": "SheetManager",
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
    exports.Sign = void 0;
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/framework/utils/SheetManager");
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
    "../../script/framework/utils/SheetManager": "SheetManager",
    "./Sheets": "Sheets"
  } ],
  SiteMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c064vrIgtE8YflEzhpGJsO", "SiteMgr");
    "use strict";
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForms_1 = require("../config/UIForms");
    var AD_POSITION_1 = require("./AD_POSITION");
    var BundleMgr_1 = require("./BundleMgr");
    var Bundles_1 = require("./config/Bundles");
    var Common_1 = require("./utils/Common");
    var SiteMgr = function() {
      function SiteMgr() {}
      SiteMgr.show = function(site, callback) {
        this.siteShowIdx = 0;
        this.siteCompleted = callback;
        if (Common_1.default.isEmpty(site)) {
          callback();
          return;
        }
        if (site instanceof Array) {
          if (0 == site.length) {
            callback();
            return;
          }
          this.cacheSite = site;
          this.showNextSite();
        } else callback();
      };
      SiteMgr.loadNextSite = function(site, idx, callback, completed, showLoading) {
        void 0 === showLoading && (showLoading = true);
        if (idx >= site.length) return;
        var cfg = this.mSiteConfig[site[idx]];
        if (!cfg) {
          Common_1.default.isFunction(completed) && completed();
          return;
        }
        console.log("\u63d0\u524d\u52a0\u8f7d", cfg);
        cfg.form == UIForms_1.default.MistouchForm ? BundleMgr_1.default.loadMistouchBundle(function() {
          Common_1.default.isFunction(completed) && completed();
        }, function(pers) {
          Common_1.default.isFunction(callback) && callback(pers);
        }, showLoading) : cfg.form == UIForms_1.default.TryForm ? BundleMgr_1.default.loadTryBundle(function() {
          Common_1.default.isFunction(completed) && completed();
        }, function(pers) {
          Common_1.default.isFunction(callback) && callback(pers);
        }, showLoading) : cfg.form == UIForms_1.default.AdForm && BundleMgr_1.default.loadAdBundle(function() {
          Common_1.default.isFunction(completed) && completed();
        }, function(pers) {
          Common_1.default.isFunction(callback) && callback(pers);
        }, showLoading);
      };
      SiteMgr.showNextSite = function() {
        if (!this.cacheSite[this.siteShowIdx]) {
          Common_1.default.isFunction(this.siteCompleted) && this.siteCompleted();
          return;
        }
        var cfg = this.mSiteConfig[this.cacheSite[this.siteShowIdx]];
        if (!cfg) {
          Common_1.default.isFunction(this.siteCompleted) && this.siteCompleted();
          return;
        }
        this.loadNextSite(this.cacheSite, this.siteShowIdx + 1, function() {}, function() {}, false);
        cfg.form == UIForms_1.default.MistouchForm ? this.showMistouch(cfg) : cfg.form == UIForms_1.default.TryForm ? this.showTry(cfg) : cfg.form == UIForms_1.default.AdForm && this.showAd(cfg);
      };
      SiteMgr.showMistouch = function(cfg) {
        var _this = this;
        var mistouchNum = Lite.config.getKey("mistouchNum", 0);
        var crazyWudian = Lite.config.getKey("CrazyWudian", 0);
        var crazyStartLevel = Lite.config.getKey("CrazyStartLevel", 0);
        var crazySpace = Lite.config.getKey("mistouchInterval", 2);
        var mistouchTag = Lite.data.getMistouchTag();
        if ((crazyWudian > 0 || mistouchNum > 0) && Lite.data.getCurrentLevel() >= crazyStartLevel && mistouchTag % crazySpace == 0) BundleMgr_1.default.loadMistouchBundle(function() {
          Lite.ui.pushUIForm(UIForms_1.default.MistouchForm, __assign(__assign({}, cfg.params), {
            callback: function() {
              _this.siteShowIdx++;
              _this.showNextSite();
            }
          }), function() {}, Bundles_1.default.mistouch);
        }); else {
          this.siteShowIdx++;
          this.showNextSite();
        }
      };
      SiteMgr.showAd = function(cfg) {
        var _this = this;
        moosnow.platform.hideBanner();
        BundleMgr_1.default.loadAdBundle(function() {
          Lite.ui.hasUIForm(UIForms_1.default.AdForm) ? moosnow.form.showAd(cfg.params, function() {
            moosnow.form.showAd(AD_POSITION_1.AD_POSITION.NONE, function() {});
            _this.siteShowIdx++;
            _this.showNextSite();
          }) : Lite.ui.pushUIForm(UIForms_1.default.AdForm, {
            showAd: moosnow.AD_POSITION.NONE
          }, function() {
            moosnow.form.showAd(cfg.params, function() {
              moosnow.form.showAd(AD_POSITION_1.AD_POSITION.NONE, function() {});
              _this.siteShowIdx++;
              _this.showNextSite();
            }, [], []);
          }, Bundles_1.default.ad);
        });
      };
      SiteMgr.showTry = function(cfg) {
        var _this = this;
        BundleMgr_1.default.loadTryBundle(function() {
          Lite.ui.pushUIForm(UIForms_1.default.TryForm, {
            callback: function() {
              _this.siteShowIdx++;
              _this.showNextSite();
            }
          }, function() {}, Bundles_1.default.tryform);
        });
      };
      SiteMgr.mSiteConfig = {
        1: {
          form: UIForms_1.default.AdForm,
          params: AD_POSITION_1.AD_POSITION.EXPORT | AD_POSITION_1.AD_POSITION.MASK | AD_POSITION_1.AD_POSITION.BACK
        },
        2: {
          form: UIForms_1.default.AdForm,
          params: AD_POSITION_1.AD_POSITION.CENTER | AD_POSITION_1.AD_POSITION.MASK | AD_POSITION_1.AD_POSITION.BACK
        },
        3: {
          form: UIForms_1.default.TryForm,
          params: []
        },
        4: {
          form: UIForms_1.default.AdForm,
          params: AD_POSITION_1.AD_POSITION.RECOMMEND | AD_POSITION_1.AD_POSITION.MASK | AD_POSITION_1.AD_POSITION.BACK
        },
        5: {
          form: UIForms_1.default.AdForm,
          params: AD_POSITION_1.AD_POSITION.HOT | AD_POSITION_1.AD_POSITION.MASK | AD_POSITION_1.AD_POSITION.BACK
        },
        6: {
          form: UIForms_1.default.MistouchForm,
          params: ""
        }
      };
      SiteMgr.siteShowIdx = 0;
      SiteMgr.cacheSite = [];
      SiteMgr.siteLoadIdx = 0;
      return SiteMgr;
    }();
    exports.default = SiteMgr;
    cc._RF.pop();
  }, {
    "../config/UIForms": "UIForms",
    "./AD_POSITION": "AD_POSITION",
    "./BundleMgr": "BundleMgr",
    "./config/Bundles": "Bundles",
    "./utils/Common": "Common"
  } ],
  SkinCfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3478fbykHVGHK42V14nxqYF", "SkinCfg");
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
    exports.SkinCfg = void 0;
    var Sheets_1 = require("./Sheets");
    var SheetManager_1 = require("../../script/framework/utils/SheetManager");
    var SkinCfg = function(_super) {
      __extends(SkinCfg, _super);
      function SkinCfg() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SkinCfg.get = function(id) {
        if (this[id]) return this[id];
        return SheetManager_1.SheetManager.get("SkinCfg", id, SkinCfg);
      };
      SkinCfg.getAll = function() {
        var obj = SheetManager_1.SheetManager.getList("SkinCfg");
        var a = [];
        var vo;
        for (var key in obj) {
          "keys" != key && (vo = SkinCfg.get(key));
          vo && (a.push(vo), vo = null);
        }
        return a;
      };
      return SkinCfg;
    }(Sheets_1.SkinCfgBase);
    exports.SkinCfg = SkinCfg;
    cc._RF.pop();
  }, {
    "../../script/framework/utils/SheetManager": "SheetManager",
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
    var FrameworkEvent_1 = require("../framework/utils/FrameworkEvent");
    var SkinCfg_1 = require("../../sheets/vo/SkinCfg");
    var Common_1 = require("../framework/utils/Common");
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
          moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SKIN_SELECT, _this.LogicData.ID);
        }, this);
        moosnow.event.addListener(FrameworkEvent_1.default.SKIN_SELECT, this, function(skinId) {
          _this.LogicData.ID != skinId ? _this.checked.active = false : _this.checked.active = true;
        });
        moosnow.event.addListener(FrameworkEvent_1.default.SKIN_CHANGE, this, function(skinId) {
          _this.showLocked(skinId);
        });
      };
      SkinItem.prototype.willShow = function(data) {
        var _this = this;
        _super.prototype.willShow.call(this, data);
        var showSkin = SkinCfg_1.SkinCfg.get(this.LogicData.ID);
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
        var showSkin = SkinCfg_1.SkinCfg.get(this.LogicData.ID);
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
    "../../sheets/vo/SkinCfg": "SkinCfg",
    "../framework/entity/EntityLogic": "EntityLogic",
    "../framework/utils/Common": "Common",
    "../framework/utils/FrameworkEvent": "FrameworkEvent"
  } ],
  StopPropagation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bea5Y6jPxNHY/T+J8TCyv9", "StopPropagation");
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
    var StopPropagation = function(_super) {
      __extends(StopPropagation, _super);
      function StopPropagation() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StopPropagation.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMaskMouseDown, this);
      };
      StopPropagation.prototype.onMaskMouseDown = function(e) {
        e.stopPropagation();
      };
      StopPropagation = __decorate([ ccclass ], StopPropagation);
      return StopPropagation;
    }(cc.Component);
    exports.default = StopPropagation;
    cc._RF.pop();
  }, {} ],
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
    var FrameworkEvent_1 = require("../framework/utils/FrameworkEvent");
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
        this.node.on(cc.Node.EventType.TOUCH_END, this.mouseUp, this);
      };
      TouchManager.prototype.mouseDown = function(e) {
        console.log("mouseDown ", e.getTouches()[0]);
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.TOUCH_DOWN, e);
      };
      TouchManager.prototype.mouseMove = function(e) {
        console.log("move e.target.name", e.target.name);
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.TOUCH_MOVE, e);
      };
      TouchManager.prototype.mouseUp = function(e) {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.TOUCH_UP, e);
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
    "../framework/utils/FrameworkEvent": "FrameworkEvent"
  } ],
  TransitionBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72c49hshoBHxq+fu6fL83dN", "TransitionBase");
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
    var FrameworkEvent_1 = require("../utils/FrameworkEvent");
    var UIForm_1 = require("./UIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TransitionBase = function(_super) {
      __extends(TransitionBase, _super);
      function TransitionBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bar = null;
        _this.rate = 5;
        _this.currentRate = 0;
        _this.showIndex = 0;
        _this.showNum = 0;
        return _this;
      }
      TransitionBase.prototype.onEnable = function() {
        var _this = this;
        this.currentRate = 0;
        this.showIndex = 0;
        moosnow.event.addListener(FrameworkEvent_1.default.SHOW_TRANSITION, this, function() {
          console.log("\u663e\u793a\u52a0\u8f7d\u8fc7\u6e21\u9875");
          _this.node.active = true;
          _this.node.zIndex = cc.macro.MAX_ZINDEX;
          _this.showNum++;
        });
        moosnow.event.addListener(FrameworkEvent_1.default.HIDE_TRANSITION, this, function() {
          _this.showNum--;
          if (_this.showNum <= 0) {
            _this.showNum = 0;
            _this.node.active = false;
          }
        });
      };
      TransitionBase.prototype.onDisable = function() {
        moosnow.event.removeListener(FrameworkEvent_1.default.SHOW_TRANSITION, this);
        moosnow.event.removeListener(FrameworkEvent_1.default.HIDE_TRANSITION, this);
      };
      TransitionBase.prototype.update = function(dt) {
        this.currentRate += 1;
        if (this.currentRate == this.rate) {
          this.showIndex += 1;
          this.currentRate = 0;
          this.showIndex > this.bar.childrenCount - 1 && (this.showIndex = 0);
        }
        this.bar.children.forEach(function(item) {
          item.active = false;
        });
        this.bar.children[this.showIndex].active = true;
      };
      __decorate([ property(cc.Node) ], TransitionBase.prototype, "bar", void 0);
      TransitionBase = __decorate([ ccclass ], TransitionBase);
      return TransitionBase;
    }(UIForm_1.default);
    exports.default = TransitionBase;
    cc._RF.pop();
  }, {
    "../utils/FrameworkEvent": "FrameworkEvent",
    "./UIForm": "UIForm"
  } ],
  UIForms: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d61daDJKXZM+7VmEImeGFsh", "UIForms");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForms = function() {
      function UIForms() {}
      UIForms.AdForm = "adForm";
      UIForms.LoadingForm = "loadingForm";
      UIForms.HomeForm = "homeForm";
      UIForms.SkinForm = "skinForm";
      UIForms.GameForm = "gameForm";
      UIForms.CoinForm = "coinForm";
      UIForms.videoForm = "videoForm";
      UIForms.spForm = "spForm";
      UIForms.ShareForm = "shareForm";
      UIForms.MistouchForm = "mistouchForm";
      UIForms.FollowForm = "followForm";
      UIForms.TotalForm = "totalForm";
      UIForms.EndForm = "endForm";
      UIForms.ToastForm = "toastForm";
      UIForms.PauseForm = "PauseForm";
      UIForms.RespawnForm = "RespawnForm";
      UIForms.SetForm = "setForm";
      UIForms.PrizeForm = "PrizeForm";
      UIForms.TryForm = "tryForm";
      return UIForms;
    }();
    exports.default = UIForms;
    cc._RF.pop();
  }, {} ],
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
    var DelayEx_1 = require("../extends/DelayEx");
    var UIForm = function(_super) {
      __extends(UIForm, _super);
      function UIForm() {
        var _this = _super.call(this) || this;
        _this.isPopEffect = false;
        _this.isMask = false;
        _this.fullView = true;
        _this.formName = "";
        _this.maskName = "img_mask";
        _this.texture = null;
        _this.formName = "";
        return _this;
      }
      UIForm.prototype.start = function() {
        this.isMask && this.addMask();
      };
      UIForm.prototype.getSingleTexture = function() {
        if (this.texture) return this.texture;
        var data = new Uint8Array(16);
        for (var i = 0; i < 2; i++) for (var j = 0; j < 2; j++) {
          data[2 * i * 4 + 4 * j + 0] = 255;
          data[2 * i * 4 + 4 * j + 1] = 255;
          data[2 * i * 4 + 4 * j + 2] = 255;
          data[2 * i * 4 + 4 * j + 3] = 255;
        }
        var texture = new cc.Texture2D();
        texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, 2, 2);
        texture.handleLoadedTexture();
        this.texture = texture;
        return this.texture;
      };
      UIForm.prototype.addMask = function() {
        if (this.node.getChildByName(this.maskName)) {
          this.node.active = true;
          return;
        }
        var mask = new cc.Node();
        var sprite = mask.addComponent(cc.Sprite);
        var widget = mask.addComponent(cc.Widget);
        widget.isAlignLeft = widget.isAlignTop = widget.isAlignRight = widget.isAlignBottom = true;
        widget.left = widget.top = widget.right = widget.bottom = 0;
        var maskTexture = this.getSingleTexture();
        sprite.spriteFrame = new cc.SpriteFrame(maskTexture);
        mask.color = new cc.Color(0, 0, 0);
        mask.opacity = 204;
        mask.active = true;
        sprite.type = cc.Sprite.Type.SLICED;
        sprite.spriteFrame.insetBottom = 1;
        sprite.spriteFrame.insetTop = 1;
        sprite.spriteFrame.insetLeft = 1;
        sprite.spriteFrame.insetRight = 1;
        mask.width = this.node.width;
        mask.height = this.node.height;
        this.node.addChild(mask);
        mask.name = this.maskName;
        mask.zIndex = -1;
        mask.on(cc.Node.EventType.TOUCH_START, this.onMaskMouseDown, this);
      };
      UIForm.prototype.showDelay = function() {
        var dex = this.getComponent(DelayEx_1.default);
        dex && dex.onShow();
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
        enumerable: false,
        configurable: true
      });
      UIForm.prototype.willShow = function(data) {
        this.mFormData = data;
        this.showDelay();
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
  }, {
    "../extends/DelayEx": "DelayEx"
  } ],
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
    exports.UIModule = void 0;
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
    var Common_1 = require("../utils/Common");
    var UIModule = function(_super) {
      __extends(UIModule, _super);
      function UIModule() {
        var _this = _super.call(this) || this;
        _this.layerIndex = 0;
        _this.UIRoot = "";
        _this.UIFormStack = [];
        _this.cachedUIForms = [];
        _this.mToastForm = null;
        _this.layerIndex = 0;
        _this.UIRoot = "prefab/ui/";
        _this.UIFormStack = [];
        _this.cachedUIForms = [];
        return _this;
      }
      UIModule.prototype.start = function() {
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
      UIModule.prototype.pushUIForm = function(name, data, callback, nameOrUrl) {
        var _this = this;
        void 0 === data && (data = {});
        var cachedFormModel = this._getUINodeFromCacheByName(name);
        if (null == cachedFormModel) this._createUIFormModel(name, function(formModel) {
          _this._showUIForm(formModel, data);
          callback && callback(formModel, data);
        }, nameOrUrl); else {
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
      UIModule.prototype.getFormModel = function(name) {
        for (var i = 0; i < this.UIFormStack.length; i++) {
          var formModel = this.UIFormStack[i];
          if (formModel.name == name) return formModel;
        }
      };
      UIModule.prototype.getUIForm = function(name) {
        var fm = this.getFormModel(name);
        if (fm) return fm.UIForm;
        return null;
      };
      UIModule.prototype.hasUIForm = function(name) {
        return !!this.getFormModel(name);
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
      UIModule.prototype._createUINode = function(name, formId, callback, nameOrUrl) {
        void 0 === nameOrUrl && (nameOrUrl = "");
        if (Common_1.default.isEmpty(nameOrUrl)) {
          var path = this.UIRoot + name;
          Lite.resource.loadAsset(path, cc.Prefab, function(err, prefab) {
            var formNode = cc.instantiate(prefab);
            callback && callback(formNode, formId);
          });
        } else Lite.resource.loadBundleRes(nameOrUrl, name, cc.Prefab, function(err, prefab) {
          var formNode = cc.instantiate(prefab);
          callback && callback(formNode, formId);
        });
      };
      UIModule.prototype._createUIFormModel = function(name, callback, nameOrUrl) {
        var _this = this;
        void 0 === nameOrUrl && (nameOrUrl = "");
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
        }, nameOrUrl);
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
      UIModule = __decorate([ ccclass ], UIModule);
      return UIModule;
    }(BaseModule_1.default);
    exports.UIModule = UIModule;
    cc._RF.pop();
  }, {
    "../ui/ToastForm": "ToastForm",
    "../ui/UIForm": "UIForm",
    "../utils/Common": "Common",
    "./BaseModule": "BaseModule"
  } ],
  Utils3D: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9069ev5EyNPCJEfP+ealmqy", "Utils3D");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Utils3D = void 0;
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
        enumerable: false,
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
  endBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5af93BBOU5FFJKeogtt5W1+", "endBase");
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
    var LevelCfg_1 = require("../../../sheets/vo/LevelCfg");
    var UIForms_1 = require("../../config/UIForms");
    var CheckboxEx_1 = require("../../framework/extends/CheckboxEx");
    var SiteMgr_1 = require("../../framework/SiteMgr");
    var UIForm_1 = require("../../framework/ui/UIForm");
    var AD_POSITION_1 = require("../AD_POSITION");
    var BundleMgr_1 = require("../BundleMgr");
    var Bundles_1 = require("../config/Bundles");
    var Common_1 = require("../utils/Common");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var endBase = function(_super) {
      __extends(endBase, _super);
      function endBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.winContainer = null;
        _this.failContainer = null;
        _this.checkboxContainer = null;
        _this.btnWinNext = null;
        _this.btnWinHome = null;
        _this.txtWinCoin = null;
        _this.txtVideoWinCoin = null;
        _this.btnFailNext = null;
        _this.btnFailHome = null;
        _this.txtFailCoin = null;
        _this.txtVideoFailCoin = null;
        _this.videoMultiple = 3;
        _this.isMask = true;
        _this.hasBack = false;
        return _this;
      }
      endBase.prototype.start = function() {
        moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570", {
          name: "\u7ed3\u7b97\u9875"
        });
      };
      endBase.prototype.willShow = function(e) {
        _super.prototype.willShow.call(this, e);
        this.winContainer.active = e && e.isWin;
        this.failContainer.active = !this.winContainer.active;
        this.addListener();
        var cex = this.checkboxContainer.getComponent(CheckboxEx_1.default);
        cex.reset(true);
        moosnow.platform.stopRecord(function() {});
        this.hasBack = false;
        moosnow.nodeHelper.changeText(this.txtWinCoin, Common_1.default.formatMoney(Lite.myGame.gameCoin));
        moosnow.nodeHelper.changeText(this.txtVideoWinCoin, Common_1.default.formatMoney(Lite.myGame.gameCoin * this.videoMultiple));
        moosnow.nodeHelper.changeText(this.txtFailCoin, Common_1.default.formatMoney(Lite.myGame.gameCoin));
        moosnow.nodeHelper.changeText(this.txtVideoFailCoin, Common_1.default.formatMoney(Lite.myGame.gameCoin * this.videoMultiple));
        moosnow.form.showAd(AD_POSITION_1.AD_POSITION.ROTATE, function() {});
      };
      endBase.prototype.onWinNext = function() {
        var _this = this;
        moosnow.platform.showVideo(function(res) {
          if (res == moosnow.VIDEO_STATUS.END) {
            Lite.data.addVideoSp();
            Lite.data.addCoin(Lite.myGame.gameCoin * _this.videoMultiple);
            _this.onGameNext();
          } else res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
        });
      };
      endBase.prototype.onFailNext = function() {
        var _this = this;
        moosnow.platform.showVideo(function(res) {
          if (res == moosnow.VIDEO_STATUS.END) {
            Lite.data.addCoin(Lite.myGame.gameCoin * _this.videoMultiple);
            _this.on2NextLevel();
            _this.onGameNext();
          } else res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
        });
      };
      endBase.prototype.onFailHome = function() {
        Lite.data.addCoin(Lite.myGame.gameCoin);
        this.backHome();
      };
      endBase.prototype.addListener = function() {
        this.btnWinNext.on(cc.Node.EventType.TOUCH_END, this.onWinNext, this);
        this.btnWinHome.on(cc.Node.EventType.TOUCH_END, this.on2Home, this);
        this.btnFailNext.on(cc.Node.EventType.TOUCH_END, this.onFailNext, this);
        this.btnFailHome.on(cc.Node.EventType.TOUCH_END, this.onFailHome, this);
      };
      endBase.prototype.remoteListener = function() {
        this.btnWinNext.off(cc.Node.EventType.TOUCH_END, this.onWinNext, this);
        this.btnWinHome.off(cc.Node.EventType.TOUCH_END, this.on2Home, this);
        this.btnFailNext.off(cc.Node.EventType.TOUCH_END, this.onFailNext, this);
        this.btnFailHome.off(cc.Node.EventType.TOUCH_END, this.onFailHome, this);
      };
      endBase.prototype.on2NextLevel = function() {
        Lite.data.setUserLevel(this.FormData.level, 0);
        this.FormData.level < LevelCfg_1.LevelCfg.getAll().length && Lite.data.addCurrentLevel();
      };
      endBase.prototype.onGameNext = function() {
        this.backHome();
      };
      endBase.prototype.on2Home = function() {
        Lite.data.addCoin(Lite.myGame.gameCoin);
        this.backHome();
      };
      endBase.prototype.backHome = function() {
        if (this.hasBack) return;
        this.hasBack = true;
        moosnow.form.hideAd(function() {});
        BundleMgr_1.default.loadHomeBundle(function() {
          SiteMgr_1.default.show(Lite.config.site04, function() {
            Lite.ui.hideUIForm(UIForms_1.default.GameForm, null);
            Lite.ui.hideUIForm(UIForms_1.default.EndForm, null);
            Lite.ui.pushUIForm(UIForms_1.default.HomeForm, null, function() {}, Bundles_1.default.homeform);
          });
        });
      };
      endBase.prototype.willHide = function() {
        this.remoteListener();
      };
      __decorate([ property(cc.Node) ], endBase.prototype, "winContainer", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "failContainer", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "checkboxContainer", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "btnWinNext", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "btnWinHome", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "txtWinCoin", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "txtVideoWinCoin", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "btnFailNext", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "btnFailHome", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "txtFailCoin", void 0);
      __decorate([ property(cc.Node) ], endBase.prototype, "txtVideoFailCoin", void 0);
      endBase = __decorate([ ccclass ], endBase);
      return endBase;
    }(UIForm_1.default);
    exports.default = endBase;
    cc._RF.pop();
  }, {
    "../../../sheets/vo/LevelCfg": "LevelCfg",
    "../../config/UIForms": "UIForms",
    "../../framework/SiteMgr": "SiteMgr",
    "../../framework/extends/CheckboxEx": "CheckboxEx",
    "../../framework/ui/UIForm": "UIForm",
    "../AD_POSITION": "AD_POSITION",
    "../BundleMgr": "BundleMgr",
    "../config/Bundles": "Bundles",
    "../utils/Common": "Common"
  } ],
  enum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93618XO6K9NkbkE0odERCZf", "enum");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DELAY_MOVE_TYPE = void 0;
    var DELAY_MOVE_TYPE;
    (function(DELAY_MOVE_TYPE) {
      DELAY_MOVE_TYPE[DELAY_MOVE_TYPE["NONE"] = 0] = "NONE";
      DELAY_MOVE_TYPE[DELAY_MOVE_TYPE["SKIN"] = 1] = "SKIN";
      DELAY_MOVE_TYPE[DELAY_MOVE_TYPE["END_GAME"] = 2] = "END_GAME";
    })(DELAY_MOVE_TYPE = exports.DELAY_MOVE_TYPE || (exports.DELAY_MOVE_TYPE = {}));
    cc._RF.pop();
  }, {} ],
  gameBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d266bZl6a1L9ZiopfqloYco", "gameBase");
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
    var FrameworkEvent_1 = require("../../framework/utils/FrameworkEvent");
    var LevelCfg_1 = require("../../../sheets/vo/LevelCfg");
    var BundleMgr_1 = require("../../framework/BundleMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameBase = function(_super) {
      __extends(GameBase, _super);
      function GameBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnReplay = null;
        _this.btnPause = null;
        _this.txtLevel = null;
        _this.mapNode = null;
        _this.bgNode = null;
        _this.hpBar = null;
        _this.hpTxt = null;
        _this.mCurrentLevel = 0;
        _this.mGameLevel = 0;
        return _this;
      }
      GameBase.prototype.start = function() {
        moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570", {
          name: "\u6e38\u620f\u4e2d"
        });
        this.bgNode.width = cc.winSize.width;
        this.bgNode.height = cc.winSize.height;
        this.bgNode.children.forEach(function(item) {
          item.width = cc.winSize.width;
        });
      };
      GameBase.prototype.addListener = function() {
        moosnow.event.addListener(FrameworkEvent_1.default.GAME_STATE_OVER, this, this.onGameOver);
        moosnow.event.addListener(FrameworkEvent_1.default.ROLE_HP_CHANGED, this, this.onChangeHP);
        this.btnPause.on(cc.Node.EventType.TOUCH_END, this.onPause, this);
        this.btnPause.on(cc.Node.EventType.TOUCH_END, this.onReplay, this);
      };
      GameBase.prototype.removeListener = function() {
        moosnow.event.removeListener(FrameworkEvent_1.default.GAME_STATE_OVER, this);
        moosnow.event.removeListener(FrameworkEvent_1.default.ROLE_HP_CHANGED, this);
        this.btnPause.off(cc.Node.EventType.TOUCH_END, this.onPause, this);
        this.btnPause.off(cc.Node.EventType.TOUCH_END, this.onReplay, this);
      };
      GameBase.prototype.onChangeHP = function(e) {
        this.hpBar.progress = e.hp / e.max;
        this.hpTxt.string = e.hp + "/" + e.max;
      };
      GameBase.prototype.displayLevel = function() {
        moosnow.nodeHelper.changeText(this.txtLevel, "\u7b2c" + (Lite.myGame.gameLevel + 1) + "\u5173");
      };
      GameBase.prototype.onPause = function() {};
      GameBase.prototype.onReplay = function() {
        var _this = this;
        moosnow.platform.showVideo(function(res) {
          res == moosnow.VIDEO_STATUS.END ? moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_STATE_OVER, {
            isWin: true,
            level: _this.mCurrentLevel
          }) : res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
        });
      };
      GameBase.prototype.onGameOver = function() {};
      GameBase.prototype.willShow = function(data) {
        _super.prototype.willShow.call(this, data);
        this.addListener();
        var levelNum = LevelCfg_1.LevelCfg.getAll().length;
        Lite.myGame.gameLevel > levelNum ? Lite.myGame.gameLevel = levelNum : Lite.myGame.gameLevel = data.level;
        this.btnPause.active = true;
        var lvCfg = LevelCfg_1.LevelCfg.get(Lite.myGame.gameLevel);
        moosnow.nodeHelper.changeText(this.txtLevel, "" + Lite.myGame.gameLevel);
      };
      GameBase.prototype.onShow = function(data) {
        this.loadLevel();
        this.displayLevel();
        this.scheduleOnce(function() {
          BundleMgr_1.default.loadEndBundle(function() {}, function() {});
        }, 0);
        moosnow.platform.showAutoBanner(moosnow.BANNER_HORIZONTAL.CENTER, moosnow.BANNER_VERTICAL.BOTTOM);
      };
      GameBase.prototype.loadLevel = function() {};
      GameBase.prototype.willHide = function() {
        this.removeListener();
        moosnow.platform.clearIntervalBanner();
      };
      GameBase.prototype.failGame = function() {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_STATE_OVER, {
          isWin: false
        });
      };
      GameBase.prototype.endGame = function() {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_STATE_OVER, {
          isWin: true
        });
      };
      __decorate([ property(cc.Node) ], GameBase.prototype, "btnReplay", void 0);
      __decorate([ property(cc.Node) ], GameBase.prototype, "btnPause", void 0);
      __decorate([ property(cc.Node) ], GameBase.prototype, "txtLevel", void 0);
      __decorate([ property(cc.Node) ], GameBase.prototype, "mapNode", void 0);
      __decorate([ property(cc.Node) ], GameBase.prototype, "bgNode", void 0);
      __decorate([ property(cc.ProgressBar) ], GameBase.prototype, "hpBar", void 0);
      __decorate([ property(cc.Label) ], GameBase.prototype, "hpTxt", void 0);
      GameBase = __decorate([ ccclass ], GameBase);
      return GameBase;
    }(UIForm_1.default);
    exports.default = GameBase;
    cc._RF.pop();
  }, {
    "../../../sheets/vo/LevelCfg": "LevelCfg",
    "../../framework/BundleMgr": "BundleMgr",
    "../../framework/ui/UIForm": "UIForm",
    "../../framework/utils/FrameworkEvent": "FrameworkEvent"
  } ],
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
    var MoveUtil_1 = require("../utils/MoveUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameEntry = function(_super) {
      __extends(gameEntry, _super);
      function gameEntry() {
        var _this = _super.call(this) || this;
        _this.mConfig = new AppConfig_1.default();
        _this.mResource = new ResourceModule_1.default();
        _this.mMoveUtil = new MoveUtil_1.default();
        return _this;
      }
      gameEntry.prototype.start = function() {
        this.mData = new GameDataCenter_1.default();
        this.mAudio = new AudioModule_1.default();
        window["Lite"] = this;
        cc.game.addPersistRootNode(this.node);
      };
      Object.defineProperty(gameEntry.prototype, "myGame", {
        get: function() {
          return this.mMyGame;
        },
        set: function(value) {
          this.mMyGame = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "data", {
        get: function() {
          return this.mData;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "config", {
        get: function() {
          return this.mConfig;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "audio", {
        get: function() {
          return this.mAudio;
        },
        set: function(value) {
          this.mAudio = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "ui", {
        get: function() {
          return this.mUi;
        },
        set: function(value) {
          this.mUi = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "resource", {
        get: function() {
          return this.mResource;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(gameEntry.prototype, "moveUtil", {
        get: function() {
          return this.mMoveUtil;
        },
        enumerable: false,
        configurable: true
      });
      gameEntry.prototype.update = function(dt) {
        this.moveUtil.onUpdate(dt);
      };
      gameEntry = __decorate([ ccclass ], gameEntry);
      return gameEntry;
    }(cc.Component);
    exports.default = gameEntry;
    cc._RF.pop();
  }, {
    "../GameDataCenter": "GameDataCenter",
    "../utils/MoveUtil": "MoveUtil",
    "./AppConfig": "AppConfig",
    "./AudioModule": "AudioModule",
    "./ResourceModule": "ResourceModule"
  } ],
  homeBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2047aYRcnhB/qNUJByawJ75", "homeBase");
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
    var FrameworkEvent_1 = require("../../framework/utils/FrameworkEvent");
    var UIForm_1 = require("../../framework/ui/UIForm");
    var Common_1 = require("../../framework/utils/Common");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HomeBase = function(_super) {
      __extends(HomeBase, _super);
      function HomeBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnStar = null;
        _this.chapterTxt = null;
        _this.coinNum = null;
        _this.btnSoundOn = null;
        _this.btnSoundOff = null;
        return _this;
      }
      HomeBase.prototype.onEnable = function() {};
      HomeBase.prototype.onShow = function(data) {
        this.addListener();
        this.showAudioButton();
        this.loadNextLevel();
      };
      HomeBase.prototype.loadNextLevel = function() {};
      HomeBase.prototype.showAudioButton = function() {
        this.btnSoundOff.active = Lite.audio.isMute;
      };
      HomeBase.prototype.starGame = function() {
        moosnow.event.sendEventImmediately(FrameworkEvent_1.default.GAME_STATE_START, Lite.data.getCurrentLevel());
      };
      HomeBase.prototype.showCoin = function() {
        this.coinNum.string = "" + Common_1.default.formatMoney(Lite.data.getCoin());
      };
      HomeBase.prototype.addListener = function() {
        this.btnStar.on(cc.Node.EventType.TOUCH_END, this.starGame, this);
        this.btnSoundOn.on(cc.Node.EventType.TOUCH_END, this.onSoundChange, this);
        moosnow.event.addListener(FrameworkEvent_1.default.SKIN_CHANGE, this, this.showCoin);
        moosnow.event.addListener(FrameworkEvent_1.default.COIN_CHANGED, this, this.showCoin);
        moosnow.event.addListener(FrameworkEvent_1.default.FOLLOW_CHANGED, this, this.onFollowChanged);
      };
      HomeBase.prototype.onFollowChanged = function() {};
      HomeBase.prototype.removeListener = function() {
        this.btnStar.off(cc.Node.EventType.TOUCH_END, this.starGame, this);
        this.btnSoundOn.off(cc.Node.EventType.TOUCH_END, this.onSoundChange, this);
        moosnow.event.removeListener(FrameworkEvent_1.default.SKIN_CHANGE, this);
        moosnow.event.removeListener(FrameworkEvent_1.default.COIN_CHANGED, this);
      };
      HomeBase.prototype.onSoundChange = function() {
        Lite.audio.isMute = !Lite.audio.isMute;
        this.btnSoundOff.active = Lite.audio.isMute;
        Lite.audio.isMute ? Lite.audio.stopMusic() : Lite.audio.playMainMusic();
      };
      HomeBase.prototype.willHide = function() {
        this.removeListener();
      };
      __decorate([ property(cc.Node) ], HomeBase.prototype, "btnStar", void 0);
      __decorate([ property(cc.Node) ], HomeBase.prototype, "chapterTxt", void 0);
      __decorate([ property(cc.Label) ], HomeBase.prototype, "coinNum", void 0);
      __decorate([ property(cc.Node) ], HomeBase.prototype, "btnSoundOn", void 0);
      __decorate([ property(cc.Node) ], HomeBase.prototype, "btnSoundOff", void 0);
      HomeBase = __decorate([ ccclass ], HomeBase);
      return HomeBase;
    }(UIForm_1.default);
    exports.default = HomeBase;
    cc._RF.pop();
  }, {
    "../../framework/ui/UIForm": "UIForm",
    "../../framework/utils/Common": "Common",
    "../../framework/utils/FrameworkEvent": "FrameworkEvent"
  } ],
  mistouchBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6102X0ZB9IoY1D225xW3Wt", "mistouchBase");
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
    var UIForm_1 = require("../../../script/framework/ui/UIForm");
    var UIForms_1 = require("../../config/UIForms");
    var Common_1 = require("../../framework/utils/Common");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MistouchBase = function(_super) {
      __extends(MistouchBase, _super);
      function MistouchBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.clickProgress = null;
        _this.jumpBg1 = null;
        _this.jumpBg2 = null;
        _this.btnJump = null;
        _this.logo = null;
        _this.rewardNum = 200;
        _this.winContainer = null;
        _this.btnWinClose = null;
        _this.txtReward = null;
        _this.clickSound = null;
        _this.winSound = null;
        _this.isMask = true;
        _this.mMaxNum = 10;
        _this.mCurrentNum = 10;
        _this.mNavigateIndex = 0;
        _this.mBannerShow = false;
        _this.mShowTime = 0;
        _this.preloadIdx = 0;
        _this.mBannerClickType = 2;
        _this.isWin = false;
        return _this;
      }
      MistouchBase.prototype.willShow = function(data) {
        _super.prototype.willShow.call(this, data);
        this.winContainer.active = false;
        this.btnJump.active = true;
        this.mBeginPos = this.logo.position.clone();
        this.mEndPos = this.mBeginPos.add(new cc.Vec3(0, 50));
        this.mCurrentNum = this.mMaxNum;
        this.mNavigateIndex = Common_1.default.randomNumBoth(3, this.mMaxNum - 2);
        this.addListener();
        this.schedule(this.subProgress, .1);
        this.mBannerShow = false;
        this.mBannerClickType = Lite.config.getKey("mistouchNum", 0);
        this.txtReward.string = Common_1.default.formatMoney(this.rewardNum);
        moosnow.platform.preloadBanner(this.preloadIdx);
      };
      MistouchBase.prototype.willHide = function() {
        this.unschedule(this.subProgress);
        this.unschedule(this.resetProgress);
        this.removeListener();
      };
      MistouchBase.prototype.onShow = function() {
        this.reset();
      };
      MistouchBase.prototype.subProgress = function() {
        this.mCurrentNum < this.mMaxNum && (this.mCurrentNum += .1);
      };
      MistouchBase.prototype.addListener = function() {
        this.btnJump.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.btnJump.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.btnJump.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.stopPropagation, this);
        this.btnWinClose.on(cc.Node.EventType.TOUCH_START, this.onReceiveReward, this);
      };
      MistouchBase.prototype.removeListener = function() {
        this.btnJump.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.btnJump.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.btnJump.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.stopPropagation, this);
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.ON_PLATFORM_HIDE, this);
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.NAVIGATE_TO_MINI, this);
      };
      MistouchBase.prototype.onAnimAttackCompleted = function() {
        this.mAnim && this.mAnim.play("stand");
      };
      MistouchBase.prototype.onReceiveReward = function() {
        Lite.ui.hideUIForm(UIForms_1.default.MistouchForm, null);
        this.winContainer.active = false;
        Lite.data.addCoin(this.rewardNum);
        Common_1.default.isFunction(this.FormData.callback) && this.FormData.callback();
      };
      MistouchBase.prototype.reset = function() {
        this.mAnim = this.getComponent(cc.Animation);
        this.mAttackTime = this.mAnim.getAnimationState("attack").duration;
        this.winContainer.active = false;
        this.isWin = false;
        this.mCurrentNum = this.mMaxNum;
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.NAVIGATE_TO_MINI, this);
      };
      MistouchBase.prototype.openReward = function() {
        this.unschedule(this.onHideBanner);
        this.unschedule(this.resetProgress);
        this.unschedule(this.subProgress);
        this.isWin = true;
        this.mAnim.play("win");
        Lite.audio.playSound(this.winSound);
      };
      MistouchBase.prototype.onAnimWinCompleted = function() {
        this.winContainer.active = true;
      };
      MistouchBase.prototype.openBannerCallback = function(isOpend) {
        if (isOpend) {
          this.unschedule(this.onHideBanner);
          this.unschedule(this.resetProgress);
          moosnow.platform.hideBanner();
          moosnow.form.hideAd(null);
          this.mBannerShow = false;
          this.openReward();
        }
      };
      MistouchBase.prototype.stopPropagation = function(e) {
        e.stopPropagation();
      };
      MistouchBase.prototype.onTouchEnd = function() {
        this.btnJump.getComponent(cc.Sprite).spriteFrame = this.jumpBg2;
      };
      MistouchBase.prototype.checkAttack = function() {
        if (this.isWin) return;
        this.prevTouchTime && (Date.now() - this.prevTouchTime) / 1e3 > this.mAttackTime && this.mAnim.play("stand");
      };
      MistouchBase.prototype.onTouchStart = function() {
        var _this = this;
        this.btnJump.getComponent(cc.Sprite).spriteFrame = this.jumpBg1;
        if (this.isWin) return;
        this.prevTouchTime = Date.now();
        this.mAnim.play("attack");
        Lite.audio.playSound(this.clickSound, false);
        this.mCurrentNum -= 1.5;
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.NAVIGATE_TO_MINI, this);
        if (this.mCurrentNum >= this.mNavigateIndex && !this.mBannerShow) {
          this.mShowTime = Date.now();
          this.mBannerShow = true;
          moosnow.event.addListener(moosnow.PLATFORM_EVENT.NAVIGATE_TO_MINI, this, function(e) {
            _this.openBannerCallback(true);
            moosnow.event.removeListener(moosnow.PLATFORM_EVENT.NAVIGATE_TO_MINI, _this);
          });
          this.mNavigateIndex = Common_1.default.randomNumBoth(3, this.mMaxNum - 2);
          moosnow.platform.showBanner(true, function(e) {
            console.log("banner click callback ", e);
            _this.openBannerCallback(e);
          }, moosnow.BANNER_HORIZONTAL.RIGHT, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadIdx);
          if (1 == this.mBannerClickType) {
            this.unschedule(this.resetProgress);
            this.scheduleOnce(this.resetProgress, 2);
          } else if (2 == this.mBannerClickType) {
            this.unschedule(this.onHideBanner);
            this.scheduleOnce(this.onHideBanner, 2);
          }
        }
        if (this.mCurrentNum <= 0) {
          moosnow.form.hideAd(null);
          moosnow.platform.hideBanner();
          this.mBannerShow = false;
          this.openReward();
        }
      };
      MistouchBase.prototype.resetProgress = function() {
        this.mCurrentNum = this.mMaxNum;
        moosnow.platform.hideBanner();
        moosnow.form.hideAd(null);
        this.mBannerShow = false;
      };
      MistouchBase.prototype.onHideBanner = function() {
        moosnow.platform.hideBanner();
        moosnow.form.hideAd(null);
      };
      MistouchBase.prototype.update = function() {
        this.checkAttack();
        this.clickProgress.progress = this.mCurrentNum / this.mMaxNum;
      };
      __decorate([ property(cc.ProgressBar) ], MistouchBase.prototype, "clickProgress", void 0);
      __decorate([ property(cc.SpriteFrame) ], MistouchBase.prototype, "jumpBg1", void 0);
      __decorate([ property(cc.SpriteFrame) ], MistouchBase.prototype, "jumpBg2", void 0);
      __decorate([ property(cc.Node) ], MistouchBase.prototype, "btnJump", void 0);
      __decorate([ property(cc.Node) ], MistouchBase.prototype, "logo", void 0);
      __decorate([ property ], MistouchBase.prototype, "rewardNum", void 0);
      __decorate([ property(cc.Node) ], MistouchBase.prototype, "winContainer", void 0);
      __decorate([ property(cc.Node) ], MistouchBase.prototype, "btnWinClose", void 0);
      __decorate([ property(cc.Label) ], MistouchBase.prototype, "txtReward", void 0);
      __decorate([ property(cc.AudioClip) ], MistouchBase.prototype, "clickSound", void 0);
      __decorate([ property(cc.AudioClip) ], MistouchBase.prototype, "winSound", void 0);
      MistouchBase = __decorate([ ccclass ], MistouchBase);
      return MistouchBase;
    }(UIForm_1.default);
    exports.default = MistouchBase;
    cc._RF.pop();
  }, {
    "../../../script/framework/ui/UIForm": "UIForm",
    "../../config/UIForms": "UIForms",
    "../../framework/utils/Common": "Common"
  } ],
  shareForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83ed17cPFFNybtL8yKyvXEW", "shareForm");
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
    var UIForm_1 = require("../../framework/ui/UIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var spForm = function(_super) {
      __extends(spForm, _super);
      function spForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.btnConfirm = null;
        _this.txtSp = null;
        _this.btnNo = null;
        _this.isMask = true;
        return _this;
      }
      spForm.prototype.start = function() {
        _super.prototype.start.call(this);
        moosnow.form.applyClickAnim(this.btnClose, function() {
          Lite.ui.hideUIForm(UIForms_1.default.ShareForm, null);
        });
        moosnow.form.applyClickAnim(this.btnNo, function() {
          Lite.ui.hideUIForm(UIForms_1.default.ShareForm, null);
        });
        moosnow.form.applyClickAnim(this.btnConfirm, function() {
          var isShort = false;
          moosnow.platform.share({
            channel: moosnow.SHARE_CHANNEL.VIDEO
          }, function(shared) {
            if (shared) {
              Lite.data.addSp(2);
              Lite.ui.hideUIForm(UIForms_1.default.ShareForm, null);
            } else isShort || Lite.ui.showToast("\u5206\u4eab\u5931\u8d25");
          }, function() {
            isShort = true;
            Lite.ui.showToast("\u5f55\u5c4f\u65f6\u95f4\u592a\u77ed\uff0c\u65e0\u6cd5\u5206\u4eab");
          });
        });
      };
      __decorate([ property(cc.Node) ], spForm.prototype, "btnClose", void 0);
      __decorate([ property(cc.Node) ], spForm.prototype, "btnConfirm", void 0);
      __decorate([ property(cc.Label) ], spForm.prototype, "txtSp", void 0);
      __decorate([ property(cc.Node) ], spForm.prototype, "btnNo", void 0);
      spForm = __decorate([ ccclass ], spForm);
      return spForm;
    }(UIForm_1.default);
    exports.default = spForm;
    cc._RF.pop();
  }, {
    "../../config/UIForms": "UIForms",
    "../../framework/ui/UIForm": "UIForm"
  } ],
  shopBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5c50RVGQlB0bl2Vk1FUmhj", "shopBase");
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
    var SkinCfg_1 = require("../../../sheets/vo/SkinCfg");
    var Common_1 = require("../../framework/utils/Common");
    var FrameworkEvent_1 = require("../../framework/utils/FrameworkEvent");
    var UIForms_1 = require("../../config/UIForms");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var shopBase = function(_super) {
      __extends(shopBase, _super);
      function shopBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.skinView = null;
        _this.skinLayout = null;
        _this.btnBack = null;
        _this.btnVideo = null;
        _this.btnCoin = null;
        _this.isMask = true;
        return _this;
      }
      shopBase.prototype.willShow = function() {
        this.initSkin();
        this.addListener();
        this.onSkinChange();
        moosnow.platform.showBanner(false);
      };
      shopBase.prototype.willHide = function() {
        this.removeListener();
        if (moosnow.APP_PLATFORM.WX == moosnow.getAppPlatform()) {
          moosnow.platform.hideBanner();
          moosnow.form.showAd(moosnow.AD_POSITION.BANNER | moosnow.AD_POSITION.FLOAT, function() {});
        } else moosnow.platform.showBanner(false);
      };
      shopBase.prototype.initSkin = function() {
        var _this = this;
        Lite.entity.hideAllEntity("skinItem");
        var arr = SkinCfg_1.SkinCfg.getAll();
        arr.forEach(function(item) {
          Lite.entity.showEntity("skinItem", _this.skinLayout.node, __assign({}, Common_1.default.deepCopy(item)));
        });
      };
      shopBase.prototype.addListener = function() {
        this.btnBack.on(cc.Node.EventType.TOUCH_END, this.onBack, this);
        this.btnVideo.on(cc.Node.EventType.TOUCH_END, this.onUnlock, this);
        this.btnCoin.on(cc.Node.EventType.TOUCH_END, this.onCoinUnlock, this);
        moosnow.event.addListener(FrameworkEvent_1.default.SKIN_SELECT, this, this.onSkinChange);
      };
      shopBase.prototype.removeListener = function() {
        this.btnBack.off(cc.Node.EventType.TOUCH_END, this.onBack, this);
        this.btnVideo.off(cc.Node.EventType.TOUCH_END, this.onUnlock, this);
        this.btnCoin.on(cc.Node.EventType.TOUCH_END, this.onCoinUnlock, this);
        moosnow.event.removeListener(FrameworkEvent_1.default.SKIN_SELECT, this);
      };
      shopBase.prototype.onSkinChange = function() {
        var selectSkinId = Lite.data.getSelectSkin();
        var userSkin = Lite.data.getUserSkinById(selectSkinId);
        this.btnCoin.active = !!!userSkin;
        this.btnVideo.active = !!!userSkin;
      };
      shopBase.prototype.onBack = function() {
        Lite.ui.hideUIForm(UIForms_1.default.SkinForm, null);
      };
      shopBase.prototype.onCoinUnlock = function() {
        var selectSkinId = Lite.data.getSelectSkin();
        var selectSkin = SkinCfg_1.SkinCfg.get(selectSkinId);
        var coin = Lite.data.getCoin();
        if (selectSkin.coinNum <= coin) {
          Lite.data.setCoin(coin - selectSkin.coinNum);
          Lite.data.saveCoin();
          Lite.data.addUserSkinCoin(selectSkinId);
          Lite.data.setCurrentSkinId(selectSkinId);
          moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SKIN_CHANGE, selectSkinId);
          this.onSkinChange();
        } else moosnow.form.showToast("\u91d1\u5e01\u4e0d\u8db3");
      };
      shopBase.prototype.onUnlock = function() {
        var _this = this;
        moosnow.platform.showVideo(function(res) {
          if (res == moosnow.VIDEO_STATUS.END) {
            var selectSkinId = Lite.data.getSelectSkin();
            Lite.data.addUserSkinVideo(selectSkinId);
            var userSkin = Lite.data.getUserSkinById(selectSkinId);
            var selectSkin = SkinCfg_1.SkinCfg.get(selectSkinId);
            if (selectSkin.videoNum <= userSkin.videoNum) {
              Lite.data.setCurrentSkinId(selectSkinId);
              moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SKIN_CHANGE, selectSkinId);
              _this.onSkinChange();
            }
          } else res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
        });
      };
      __decorate([ property(cc.ScrollView) ], shopBase.prototype, "skinView", void 0);
      __decorate([ property(cc.Layout) ], shopBase.prototype, "skinLayout", void 0);
      __decorate([ property(cc.Node) ], shopBase.prototype, "btnBack", void 0);
      __decorate([ property(cc.Node) ], shopBase.prototype, "btnVideo", void 0);
      __decorate([ property(cc.Node) ], shopBase.prototype, "btnCoin", void 0);
      shopBase = __decorate([ ccclass ], shopBase);
      return shopBase;
    }(UIForm_1.default);
    exports.default = shopBase;
    cc._RF.pop();
  }, {
    "../../../sheets/vo/SkinCfg": "SkinCfg",
    "../../config/UIForms": "UIForms",
    "../../framework/ui/UIForm": "UIForm",
    "../../framework/utils/Common": "Common",
    "../../framework/utils/FrameworkEvent": "FrameworkEvent"
  } ],
  spForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7faa4ne1/VHaKq+hV9TdTKV", "spForm");
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
    var UIForm_1 = require("../../framework/ui/UIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var spForm = function(_super) {
      __extends(spForm, _super);
      function spForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.btnConfirm = null;
        _this.txtSp = null;
        _this.isMask = true;
        return _this;
      }
      spForm.prototype.start = function() {
        _super.prototype.start.call(this);
        moosnow.form.applyClickAnim(this.btnClose, function() {
          Lite.ui.hideUIForm(UIForms_1.default.spForm, null);
        });
        moosnow.form.applyClickAnim(this.btnConfirm, function() {
          moosnow.platform.showVideo(function(res) {
            if (res == moosnow.VIDEO_STATUS.END) {
              Lite.data.addVideoSp();
              Lite.ui.hideUIForm(UIForms_1.default.spForm, null);
            } else res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
          });
        });
      };
      __decorate([ property(cc.Node) ], spForm.prototype, "btnClose", void 0);
      __decorate([ property(cc.Node) ], spForm.prototype, "btnConfirm", void 0);
      __decorate([ property(cc.Label) ], spForm.prototype, "txtSp", void 0);
      spForm = __decorate([ ccclass ], spForm);
      return spForm;
    }(UIForm_1.default);
    exports.default = spForm;
    cc._RF.pop();
  }, {
    "../../config/UIForms": "UIForms",
    "../../framework/ui/UIForm": "UIForm"
  } ],
  totalForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d02a2m1n5NDtLANi3x3IHMU", "totalForm");
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
    var LevelCfg_1 = require("../../../sheets/vo/LevelCfg");
    var Common_1 = require("../../framework/utils/Common");
    var UIForms_1 = require("../../config/UIForms");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var totalForm = function(_super) {
      __extends(totalForm, _super);
      function totalForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.checked = null;
        _this.unchecked = null;
        _this.btnReceive = null;
        _this.levelCoin = null;
        _this.isMask = true;
        _this.mCheckedVideo = true;
        _this.mLevelCoinNum = 0;
        _this.mLevelShareCoinNum = 0;
        return _this;
      }
      totalForm.prototype.addEvent = function() {
        this.unchecked.node.on(cc.Node.EventType.TOUCH_END, this.onShareChange, this);
        this.btnReceive.node.on(cc.Node.EventType.TOUCH_END, this.onReceive, this);
      };
      totalForm.prototype.removeEvent = function() {
        this.unchecked.node.off(cc.Node.EventType.TOUCH_END, this.onShareChange, this);
        this.btnReceive.node.off(cc.Node.EventType.TOUCH_END, this.onReceive, this);
      };
      totalForm.prototype.onReceive = function() {
        var _this = this;
        this.mCheckedVideo ? moosnow.platform.showVideo(function(res) {
          res == moosnow.VIDEO_STATUS.END ? _this.openEnd(5 * _this.mLevelCoinNum) : res == moosnow.VIDEO_STATUS.ERR ? Lite.ui.showToast(moosnow.VIDEO_MSG.ERR) : Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
        }) : this.openEnd(this.mLevelCoinNum);
      };
      totalForm.prototype.openEnd = function(coin) {
        Lite.ui.hideUIForm(UIForms_1.default.TotalForm, null);
        Lite.ui.pushUIForm(UIForms_1.default.EndForm, __assign({
          coin: coin,
          level: this.FormData.level,
          levelShareCoinNum: this.mLevelShareCoinNum
        }, this.FormData));
      };
      totalForm.prototype.onShareChange = function() {
        this.mCheckedVideo = !this.mCheckedVideo;
        this.showBtn();
      };
      totalForm.prototype.showBtn = function() {
        this.mCheckedVideo ? this.checked.node.active = true : this.checked.node.active = false;
      };
      totalForm.prototype.onShow = function(data) {
        var lvCfg = LevelCfg_1.LevelCfg.get(this.FormData.level + 1);
        this.mLevelCoinNum = lvCfg.coin;
        this.mLevelShareCoinNum = lvCfg.shareCoin;
        this.levelCoin.string = "" + Common_1.default.formatMoney(this.mLevelCoinNum);
        this.addEvent();
        this.showBtn();
        this.mCheckedVideo = true;
        this.showBtn();
        moosnow.platform.stopRecord();
        moosnow.platform.showBanner(false);
      };
      totalForm.prototype.willHide = function() {
        this.removeEvent();
        moosnow.platform.hideBanner();
      };
      __decorate([ property(cc.Sprite) ], totalForm.prototype, "checked", void 0);
      __decorate([ property(cc.Sprite) ], totalForm.prototype, "unchecked", void 0);
      __decorate([ property(cc.Sprite) ], totalForm.prototype, "btnReceive", void 0);
      __decorate([ property(cc.Label) ], totalForm.prototype, "levelCoin", void 0);
      totalForm = __decorate([ ccclass ], totalForm);
      return totalForm;
    }(UIForm_1.default);
    exports.default = totalForm;
    cc._RF.pop();
  }, {
    "../../../sheets/vo/LevelCfg": "LevelCfg",
    "../../config/UIForms": "UIForms",
    "../../framework/ui/UIForm": "UIForm",
    "../../framework/utils/Common": "Common"
  } ],
  tryBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86e2a4UKVtPnpNiSf1JmWGi", "tryBase");
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
    var Common_1 = require("../utils/Common");
    var UIForm_1 = require("./UIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tryBase = function(_super) {
      __extends(tryBase, _super);
      function tryBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logo = null;
        _this.light = null;
        _this.btnVideo = null;
        _this.btnNext = null;
        _this.isMask = true;
        _this.preloadIndex = -1;
        return _this;
      }
      tryBase.prototype.willShow = function(data) {
        _super.prototype.willShow.call(this, data);
        moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570", {
          name: "\u76ae\u80a4\u8bd5\u7528\u9875"
        });
        this.addListener();
        this.showTrySkin();
        this.light.stopAllActions();
        this.light.runAction(cc.sequence(cc.rotateBy(3, 180), cc.callFunc(function() {})).repeatForever());
        this.preloadIndex = moosnow.platform.preloadBanner();
      };
      tryBase.prototype.willHide = function() {
        this.removeListener();
      };
      tryBase.prototype.changeSkin = function() {};
      tryBase.prototype.showTrySkin = function() {};
      tryBase.prototype.addListener = function() {
        this.btnNext.node.on(cc.Node.EventType.TOUCH_END, this.closeTry, this);
        this.btnVideo.node.on(cc.Node.EventType.TOUCH_END, this.openVideo, this);
      };
      tryBase.prototype.removeListener = function() {
        this.btnNext.node.off(cc.Node.EventType.TOUCH_END, this.closeTry, this);
        this.btnVideo.node.off(cc.Node.EventType.TOUCH_END, this.openVideo, this);
      };
      tryBase.prototype.closeTry = function() {
        var _this = this;
        if (1 == Lite.config.getKey("SkinForceAd", 0)) moosnow.platform.showVideo(function(res) {
          _this.closeTryForm();
        }); else {
          Lite.data.addTrying(0);
          this.closeTryForm();
        }
      };
      tryBase.prototype.openVideo = function() {
        var _this = this;
        moosnow.platform.showVideo(function(res) {
          switch (res) {
           case moosnow.VIDEO_STATUS.NOTEND:
            Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
            break;

           case moosnow.VIDEO_STATUS.ERR:
            Lite.ui.showToast(moosnow.VIDEO_MSG.ERR);
            break;

           case moosnow.VIDEO_STATUS.END:
            Lite.data.addTrying(_this.mTrySkin.ID);
            _this.closeTryForm();
          }
        });
      };
      tryBase.prototype.closeTryForm = function() {
        Lite.ui.hideUIForm(UIForms_1.default.TryForm, null);
        moosnow.platform.hideBanner();
        Common_1.default.isFunction(this.FormData.callback) && this.FormData.callback();
      };
      __decorate([ property(cc.Sprite) ], tryBase.prototype, "logo", void 0);
      __decorate([ property(cc.Node) ], tryBase.prototype, "light", void 0);
      __decorate([ property(cc.Sprite) ], tryBase.prototype, "btnVideo", void 0);
      __decorate([ property(cc.Sprite) ], tryBase.prototype, "btnNext", void 0);
      tryBase = __decorate([ ccclass ], tryBase);
      return tryBase;
    }(UIForm_1.default);
    exports.default = tryBase;
    cc._RF.pop();
  }, {
    "../../config/UIForms": "UIForms",
    "../utils/Common": "Common",
    "./UIForm": "UIForm"
  } ],
  videoForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4fd522RANRNH7eUxGIsNmtu", "videoForm");
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
    var UIForm_1 = require("../../framework/ui/UIForm");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var videoForm = function(_super) {
      __extends(videoForm, _super);
      function videoForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.btnConfirm = null;
        _this.isMask = true;
        return _this;
      }
      videoForm.prototype.start = function() {
        var _this = this;
        _super.prototype.start.call(this);
        moosnow.form.applyClickAnim(this.btnClose, function() {
          Lite.ui.hideUIForm(UIForms_1.default.videoForm, null);
        });
        moosnow.form.applyClickAnim(this.btnConfirm, function() {
          moosnow.platform.showVideo(function(res) {
            res == moosnow.VIDEO_STATUS.END ? _this.FormData && _this.FormData.completed && _this.FormData.completed() : res == moosnow.VIDEO_STATUS.ERR ? moosnow.form.showToast(moosnow.VIDEO_MSG.ERR) : moosnow.form.showToast(moosnow.VIDEO_MSG.NOTEND);
          });
        });
      };
      __decorate([ property(cc.Node) ], videoForm.prototype, "btnClose", void 0);
      __decorate([ property(cc.Node) ], videoForm.prototype, "btnConfirm", void 0);
      videoForm = __decorate([ ccclass ], videoForm);
      return videoForm;
    }(UIForm_1.default);
    exports.default = videoForm;
    cc._RF.pop();
  }, {
    "../../config/UIForms": "UIForms",
    "../../framework/ui/UIForm": "UIForm"
  } ]
}, {}, [ "Entitys", "UIForms", "ActionControl", "BaseControl", "CameraControl", "MapControl", "MapItem", "RoleControl", "SkinItem", "BUFFER", "ROLE_ATTACK", "ROLE_MOVE", "AD_POSITION", "BundleMgr", "GameDataCenter", "PhysicsSetting", "SiteMgr", "TouchManager", "Bundles", "EntityData", "EntityLogic", "enum", "ButtonEx", "CheckboxEx", "DelayEx", "DelayMove", "StopPropagation", "AppConfig", "AudioModule", "BaseModule", "EntityModule", "GameLogic", "GameState", "ResourceModule", "UIModule", "gameEntry", "LoadingBase", "MainBase", "SPControl", "ToastForm", "TransitionBase", "UIForm", "endBase", "gameBase", "homeBase", "mistouchBase", "shareForm", "shopBase", "spForm", "totalForm", "tryBase", "videoForm", "ArrayUtil", "Common", "Delay", "FrameworkEvent", "Logger", "MathUtils", "MoveUtil", "SheetManager", "Utils3D", "ConfigData", "EasterEgg", "LevelCfg", "PrizeBox", "Sheets", "Sign", "SignVo", "SkinCfg" ]);