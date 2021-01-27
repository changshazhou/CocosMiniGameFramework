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
  homeForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd20f+RMBZA2K3r9fr4ixs7", "homeForm");
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
    var AD_POSITION_1 = require("../../script/framework/AD_POSITION");
    var homeBase_1 = require("../../script/framework/ui/homeBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HomeForm = function(_super) {
      __extends(HomeForm, _super);
      function HomeForm() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HomeForm.prototype.onShow = function(data) {
        _super.prototype.onShow.call(this, data);
        moosnow.form.showAd(AD_POSITION_1.AD_POSITION.FLOAT | AD_POSITION_1.AD_POSITION.BANNER, function() {}, [ cc.v2(0, 0) ], [ "adFloatLeftItem1" ], cc.macro.MAX_ZINDEX, "\u6d6e\u52a8", "\u9996\u9875");
        moosnow.platform.showBanner(false, function() {}, moosnow.BANNER_HORIZONTAL.LEFT, moosnow.BANNER_VERTICAL.BOTTOM);
      };
      HomeForm.prototype.loadNextLevel = function() {
        var level = Lite.data.getCurrentLevel();
      };
      HomeForm = __decorate([ ccclass ], HomeForm);
      return HomeForm;
    }(homeBase_1.default);
    exports.default = HomeForm;
    cc._RF.pop();
  }, {
    "../../script/framework/AD_POSITION": void 0,
    "../../script/framework/ui/homeBase": void 0
  } ]
}, {}, [ "homeForm" ]);