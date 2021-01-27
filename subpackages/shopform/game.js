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
  skinForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "876b4Uj+eZN9IS8HJAERNSS", "skinForm");
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
    var UIForms_1 = require("../../script/config/UIForms");
    var AD_POSITION_1 = require("../../script/framework/AD_POSITION");
    var UIForm_1 = require("../../script/framework/ui/UIForm");
    var Common_1 = require("../../script/framework/utils/Common");
    var FrameworkEvent_1 = require("../../script/framework/utils/FrameworkEvent");
    var SkinCfg_1 = require("../../sheets/vo/SkinCfg");
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
        moosnow.platform.showBanner(false, function() {}, moosnow.BANNER_HORIZONTAL.CENTER, moosnow.BANNER_VERTICAL.BOTTOM);
        moosnow.platform.hideBlock();
        moosnow.form.hideAd(function() {});
      };
      skinForm.prototype.willHide = function() {
        moosnow.platform.showBlock(moosnow.BLOCK_HORIZONTAL.CENTER, moosnow.BLOCK_VERTICAL.TOP, 1, 5);
        this.removeListener();
        if (moosnow.APP_PLATFORM.WX == moosnow.getAppPlatform()) {
          moosnow.platform.hideBanner();
          moosnow.form.showAd(AD_POSITION_1.AD_POSITION.BANNER, function() {});
        } else {
          moosnow.platform.hideBanner();
          moosnow.platform.showBanner(false, function() {}, moosnow.BANNER_HORIZONTAL.CENTER, moosnow.BANNER_VERTICAL.BOTTOM);
        }
      };
      skinForm.prototype.initSkin = function() {
        var _this = this;
        Lite.entity.hideAllEntity("skinItem");
        var arr = SkinCfg_1.SkinCfg.getAll();
        arr.forEach(function(item) {
          Lite.entity.showEntity("skinItem", _this.skinLayout.node, __assign({}, Common_1.default.deepCopy(item)));
        });
      };
      skinForm.prototype.addListener = function() {
        this.btnBack.on(cc.Node.EventType.TOUCH_END, this.onBack, this);
        this.btnVideo.on(cc.Node.EventType.TOUCH_END, this.onUnlock, this);
        this.btnCoin.on(cc.Node.EventType.TOUCH_END, this.onCoinUnlock, this);
        moosnow.event.addListener(FrameworkEvent_1.default.SKIN_SELECT, this, this.onSkinChange);
      };
      skinForm.prototype.removeListener = function() {
        this.btnBack.off(cc.Node.EventType.TOUCH_END, this.onBack, this);
        this.btnVideo.off(cc.Node.EventType.TOUCH_END, this.onUnlock, this);
        this.btnCoin.on(cc.Node.EventType.TOUCH_END, this.onCoinUnlock, this);
        moosnow.event.removeListener(FrameworkEvent_1.default.SKIN_SELECT, this);
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
        var selectSkin = SkinCfg_1.SkinCfg.get(selectSkinId);
        var coin = Lite.data.getCoin();
        if (selectSkin.coinNum <= coin) {
          Lite.data.setCoin(coin - selectSkin.coinNum);
          Lite.data.saveCoin();
          Lite.data.addUserSkinCoin(selectSkinId);
          Lite.data.setCurrentSkinId(selectSkinId);
          moosnow.event.sendEventImmediately(FrameworkEvent_1.default.SKIN_CHANGE, selectSkinId);
          this.onSkinChange();
        } else Lite.ui.showToast("\u91d1\u5e01\u4e0d\u8db3");
      };
      skinForm.prototype.onUnlock = function() {
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
          } else res == moosnow.VIDEO_STATUS.ERR ? Lite.ui.showToast(moosnow.VIDEO_MSG.ERR) : Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND);
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
    "../../script/config/UIForms": void 0,
    "../../script/framework/AD_POSITION": void 0,
    "../../script/framework/ui/UIForm": void 0,
    "../../script/framework/utils/Common": void 0,
    "../../script/framework/utils/FrameworkEvent": void 0,
    "../../sheets/vo/SkinCfg": void 0
  } ]
}, {}, [ "skinForm" ]);