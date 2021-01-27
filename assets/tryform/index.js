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
  tryForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1715ugoDJMEqBTzJV1Pj5r", "tryForm");
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
    var tryBase_1 = require("../../script/framework/ui/tryBase");
    var Common_1 = require("../../script/framework/utils/Common");
    var SkinCfg_1 = require("../../sheets/vo/SkinCfg");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tryForm = function(_super) {
      __extends(tryForm, _super);
      function tryForm() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      tryForm.prototype.changeSkin = function() {
        var _this = this;
        Lite.resource.loadAsset("skin/" + this.mTrySkin.ID + "/7", cc.SpriteFrame, function(err, spriteFrame) {
          if (err) return;
          _this.logo.spriteFrame = spriteFrame;
        });
      };
      tryForm.prototype.showTrySkin = function() {
        var skinAll = SkinCfg_1.SkinCfg.getAll();
        var skinArr = [];
        skinAll.forEach(function(item) {
          var userSkin = Lite.data.getUserSkinById(item.ID);
          userSkin || skinArr.push(item);
        });
        if (0 == skinArr.length) {
          this.closeTry();
          return;
        }
        var tryIndex = Common_1.default.randomNumBoth(0, skinArr.length - 1);
        this.mTrySkin = skinArr[tryIndex];
        this.changeSkin();
      };
      tryForm = __decorate([ ccclass ], tryForm);
      return tryForm;
    }(tryBase_1.default);
    exports.default = tryForm;
    cc._RF.pop();
  }, {
    "../../script/framework/ui/tryBase": void 0,
    "../../script/framework/utils/Common": void 0,
    "../../sheets/vo/SkinCfg": void 0
  } ]
}, {}, [ "tryForm" ]);