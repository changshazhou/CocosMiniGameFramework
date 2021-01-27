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
  adForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8733kEJu9LFpyyVBtzAMun", "adForm");
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
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIForms_1 = require("../../script/config/UIForms");
    var AD_POSITION_1 = require("../../script/framework/AD_POSITION");
    var UIForm_1 = require("../../script/framework/ui/UIForm");
    var Common_1 = require("../../script/framework/utils/Common");
    var adViewItem_1 = require("./adViewItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdForm = function(_super) {
      __extends(AdForm, _super);
      function AdForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.endContainer = null;
        _this.endContainer_layout = null;
        _this.exportContainer = null;
        _this.exportContainer_scroll = null;
        _this.exportContainer_layout = null;
        _this.btnExportClose = null;
        _this.recommendContainer = null;
        _this.recommendContainer_scroll = null;
        _this.recommendContainer_layout = null;
        _this.recommendClose = null;
        _this.formMask = null;
        _this.btnBack = null;
        _this.floatContainer = null;
        _this.floatFull = null;
        _this.bannerContainer = null;
        _this.bannerContainer_scroll = null;
        _this.bannerContainer_layout = null;
        _this.topContainer = null;
        _this.topContainer_scroll = null;
        _this.topContainer_layout = null;
        _this.leftContainer = null;
        _this.leftContainer_scroll = null;
        _this.leftContainer_layout = null;
        _this.rightContainer = null;
        _this.rightContainer_scroll = null;
        _this.rightContainer_layout = null;
        _this.rotateContainer = null;
        _this.rotateContainer_layout = null;
        _this.hotContainer = null;
        _this.hotContainer_scroll = null;
        _this.hotContainer_layout = null;
        _this.hotClose = null;
        _this.centerContainer = null;
        _this.centerContainer_scroll = null;
        _this.centerContainer_layout = null;
        _this.centerClose = null;
        _this.sideContainer = null;
        _this.sideView = null;
        _this.sideLayout = null;
        _this.btnSideShow = null;
        _this.btnSideHide = null;
        _this.replaceContainer = null;
        _this.replaceLayout = null;
        _this.mShowAd = AD_POSITION_1.AD_POSITION.NONE;
        _this.mPrevShowAd = AD_POSITION_1.AD_POSITION.NONE;
        _this.mScrollVec = [];
        _this.mEndLogic = [];
        _this.mMoveSpeed = 2;
        _this.mFloatIndex = 0;
        _this.mFloatRefresh = 3;
        _this.mFloatCache = {};
        _this.localAdFromTag = "";
        _this.clickTime = 0;
        _this.mAdItemList = [];
        _this.floatRuning = false;
        _this.mUserScrolling = false;
        _this.preloadIndex = -1;
        _this.flashBanner01 = 0;
        _this.gameCenterWudian = 0;
        _this.gGPopWudian = 0;
        return _this;
      }
      AdForm.prototype.addListener = function() {
        var _this = this;
        this.btnBack.on(cc.Node.EventType.TOUCH_START, this.onBack, this);
        this.btnExportClose.on(cc.Node.EventType.TOUCH_START, this.onExportClose, this);
        this.recommendClose.on(cc.Node.EventType.TOUCH_START, this.onRecommendClose, this);
        this.centerClose.on(cc.Node.EventType.TOUCH_START, this.onCenterClose, this);
        this.hotClose.on(cc.Node.EventType.TOUCH_START, this.onHotClose, this);
        this.btnSideShow.on(cc.Node.EventType.TOUCH_START, this.sideOut, this);
        this.btnSideHide.on(cc.Node.EventType.TOUCH_START, this.sideIn, this);
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.AD_VIEW_CHANGE, this, this.onAdChange);
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_BANNER_ERROR, this, this.onBannerError);
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_FLASH_BANNER_HIDE, this, this.onHideFlashBanner);
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE, this, function() {
          _this.onHideFlashBanner();
        });
      };
      AdForm.prototype.removeListener = function() {
        this.btnBack.off(cc.Node.EventType.TOUCH_START, this.onBack, this);
        this.btnExportClose.on(cc.Node.EventType.TOUCH_START, this.onExportClose, this);
        this.recommendClose.off(cc.Node.EventType.TOUCH_START, this.onRecommendClose, this);
        this.centerClose.off(cc.Node.EventType.TOUCH_START, this.onCenterClose, this);
        this.hotClose.off(cc.Node.EventType.TOUCH_START, this.onHotClose, this);
        this.btnSideShow.off(cc.Node.EventType.TOUCH_START, this.sideOut, this);
        this.btnSideHide.off(cc.Node.EventType.TOUCH_START, this.sideIn, this);
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.AD_VIEW_CHANGE, this);
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.ON_BANNER_ERROR, this);
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.ON_FLASH_BANNER_HIDE, this);
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.ON_BANNER_HIDE, this);
      };
      AdForm.prototype.onHideFlashBanner = function() {
        console.log("\u9690\u85cf\u95ea\u73b0banner");
        this.replaceContainer.active = false;
      };
      AdForm.prototype.onBannerError = function(e) {
        var x = 0;
        var y = 0;
        var sources = [];
        if (!this.mAdData) return;
        if (!this.mAdData.indexLeft) return;
        sources = this.hasAd(AD_POSITION_1.AD_POSITION.EXPORT) || Lite.ui.hasUIForm(UIForms_1.default.HomeForm) || Lite.ui.hasUIForm(UIForms_1.default.EndForm) ? this.setPosition(this.mAdData.indexLeft, "\u66ff\u6362\u5e73\u53f0\u7684Banner", this.onAdCancel, true) : this.setPosition(this.mAdData.indexLeft, "\u66ff\u6362\u5e73\u53f0\u7684Banner", null, true);
        e.horizontal == moosnow.BANNER_HORIZONTAL.LEFT ? x = -cc.winSize.width / 2 + this.replaceContainer.width / 2 : e.horizontal == moosnow.BANNER_HORIZONTAL.CENTER ? x = 0 : e.horizontal == moosnow.BANNER_HORIZONTAL.RIGHT && (x = cc.winSize.width / 2 - this.replaceContainer.width / 2);
        e.vertical == moosnow.BLOCK_VERTICAL.TOP ? y = cc.winSize.height / 2 - this.replaceContainer.height / 2 : e.vertical == moosnow.BLOCK_VERTICAL.CENTER ? y = 0 : e.vertical == moosnow.BLOCK_VERTICAL.BOTTOM && (y = -cc.winSize.height / 2 + this.replaceContainer.height / 2);
        this.replaceContainer.active = true;
        this.replaceContainer.x = x;
        this.replaceContainer.y = y;
        for (var i = 0; i < this.replaceLayout.children.length; i++) {
          var logic = this.replaceLayout.children[i].getComponent(adViewItem_1.default);
          if (logic) {
            Lite.entity.hideEntity(logic, null);
            i--;
          }
        }
        this.initFiexdView(this.replaceLayout, 3, "\u66ff\u6362\u5e73\u53f0banner", "adReplaceBannerItem");
      };
      AdForm.prototype.onAdChange = function(data) {
        this.mUserScrolling = false;
        for (var i = 0; i < this.mScrollVec.length; i++) this.mScrollVec[i].isScrollNavigate && (this.mScrollVec[i].hasScrollNavigate = false);
        Lite.data.adFormTag = data.formName;
        this.displayAd(false);
        this.updateAd(data);
      };
      AdForm.prototype.updateAd = function(data) {
        data && data.points && (this.mTempPoints = data.points);
        data && data.templetes && (this.mTempTempletes = data.templetes);
        if (!this.mShowAd) {
          this.mShowAd = data.showAd;
          this.mBackCall = data.callback;
        }
        if (data.showAd != AD_POSITION_1.AD_POSITION.RECOVER) {
          this.mPrevShowAd = this.mShowAd;
          this.mPrevBackCall = this.mBackCall;
          this.mPrevPoints = this.mTempPoints;
          this.mPrevTempletes = this.mTempTempletes;
        }
        if (data.showAd == AD_POSITION_1.AD_POSITION.RECOVER) {
          data.showAd = this.mPrevShowAd;
          data.callback = this.mPrevBackCall;
          this.mTempPoints = this.mPrevPoints;
          this.mTempTempletes = this.mTempTempletes;
        }
        this.displayChange(data.showAd, data.callback);
        isNaN(data.zIndex) ? this.node.zIndex = cc.macro.MAX_ZINDEX : this.node.zIndex = data.zIndex;
        true;
        console.log("ad form zindex ", this.node.zIndex);
      };
      AdForm.prototype.onBack = function() {
        if (this.mBackCall) {
          moosnow.platform.hideBanner();
          this.mBackCall();
        }
      };
      AdForm.prototype.onAdCancel = function() {
        if (1 != Lite.config.getKey("CancelToSkip")) return;
        moosnow.form.showAd(AD_POSITION_1.AD_POSITION.CENTER | AD_POSITION_1.AD_POSITION.MASK | AD_POSITION_1.AD_POSITION.BACK, function() {
          moosnow.form.showAd(AD_POSITION_1.AD_POSITION.RECOVER, function() {});
        });
      };
      AdForm.prototype.onRandomNavigate = function(success, fail) {
        var sources = this.setPosition(__spreadArrays(this.mAdData.indexLeft), Lite.data.adFormTag + "-" + this.localAdFromTag + "-\u968f\u673a\u8df3\u8f6c", function() {});
        var item = sources[Common_1.default.randomNumBoth(0, sources.length - 1)];
        moosnow.platform.navigate2Mini(item, success, fail);
      };
      AdForm.prototype.onNavigate = function() {};
      AdForm.prototype.canNext = function() {
        if (Date.now() - this.clickTime > 2e3) {
          this.clickTime = Date.now();
          return true;
        }
        return false;
      };
      AdForm.prototype.onExportClose = function() {
        if (!this.canNext()) return;
        if (2 == this.flashBanner01) {
          this.showFlashBanner();
          this.flashBanner01 = 0;
        } else {
          this.exportContainer.active = false;
          this.onBack();
        }
      };
      AdForm.prototype.onRecommendClose = function() {
        if (!this.canNext()) return;
        if (2 == this.gGPopWudian) {
          this.showFlashBanner();
          this.gGPopWudian = 0;
        } else {
          this.recommendContainer.active = false;
          this.onBack();
        }
      };
      AdForm.prototype.onCenterClose = function() {
        if (!this.canNext()) return;
        if (2 == this.gameCenterWudian) {
          this.showFlashBanner();
          this.gameCenterWudian = 0;
        } else {
          this.centerContainer.active = false;
          this.onBack();
        }
      };
      AdForm.prototype.onHotClose = function() {
        this.hotContainer.active = false;
        this.onBack();
      };
      AdForm.prototype.showFlashBanner = function() {
        var _this = this;
        console.log("\u95ea\u73b0banner");
        moosnow.platform.showFlashBanner(moosnow.BANNER_HORIZONTAL.CENTER, moosnow.BANNER_VERTICAL.BOTTOM, this.preloadIndex);
        moosnow.http.getAllConfig(function(res) {
          var flashBannerDelayTime = res && !isNaN(res.FlashBannerDelayTime) ? res.FlashBannerDelayTime : 0;
          var flashBannerContinueTime = res && !isNaN(res.FlashBannerContinueTime) ? parseFloat(res.FlashBannerContinueTime) : 1.5;
          _this.unschedule(_this.onHideFlashBanner);
          _this.scheduleOnce(_this.onHideFlashBanner, flashBannerDelayTime + flashBannerContinueTime);
        });
      };
      AdForm.prototype.sideOut = function() {
        var _this = this;
        var wxsys = moosnow.platform.getSystemInfoSync();
        var statusBarHeight = 0;
        var notchHeight = 0;
        if (wxsys) {
          statusBarHeight = wxsys.statusBarHeight || 0;
          notchHeight = wxsys.notchHeight || 0;
        }
        this.sideView.runAction(cc.sequence(cc.moveTo(1, statusBarHeight + notchHeight + this.sideView.width + 20, 0), cc.callFunc(function() {
          _this.btnSideShow.active = false;
          _this.btnSideHide.active = true;
        })));
      };
      AdForm.prototype.sideIn = function() {
        var _this = this;
        this.sideView.runAction(cc.sequence(cc.moveTo(1, 0, 0), cc.callFunc(function() {
          _this.btnSideShow.active = true;
          _this.btnSideHide.active = false;
        })));
      };
      AdForm.prototype.pushScroll = function(scrollView, layout, isScrollNavigate) {
        void 0 === isScrollNavigate && (isScrollNavigate = false);
        var item = {
          scrollView: scrollView,
          move2Up: null,
          move2Left: null,
          isScrollNavigate: isScrollNavigate,
          hasScrollNavigate: false,
          scrollXBegin: null,
          scrollXEnd: null,
          scrollYBegin: null,
          scrollYEnd: null
        };
        layout.type == cc.Layout.Type.GRID ? scrollView.vertical ? item.move2Up = false : item.move2Left = false : layout.type == cc.Layout.Type.HORIZONTAL ? item.move2Left = false : layout.type == cc.Layout.Type.VERTICAL && (item.move2Up = false);
        this.mScrollVec.push(item);
      };
      AdForm.prototype.addAd = function(ad) {
        this.mShowAd |= ad;
      };
      AdForm.prototype.removeAd = function(ad) {
        this.hasAd(ad) && (this.mShowAd ^= ad);
      };
      AdForm.prototype.hasAd = function(ad) {
        return (this.mShowAd & ad) == ad;
      };
      AdForm.prototype.setPosition = function(source, position, callback, refresh, ratio) {
        void 0 === position && (position = "");
        void 0 === refresh && (refresh = false);
        void 0 === ratio && (ratio = 0);
        var retValue = Common_1.default.deepCopy(source);
        retValue.forEach(function(item) {
          item.position = position;
          item.onCancel = callback;
          item.refresh = refresh;
          item.ratio = ratio;
        });
        return retValue;
      };
      AdForm.prototype.initFloatAd = function(callback) {
        var _this = this;
        if (!this.mAdData) return;
        if (0 == this.mAdData.indexLeft.length) return;
        var source = this.setPosition(this.mAdData.indexLeft, "\u6d6e\u52a8ICON", callback, true);
        var showIds = [];
        var points = this.mTempPoints || this.FormData.floatPositon;
        var templetes = this.mTempTempletes || this.FormData.floatTempletes;
        var showIndex = Common_1.default.randomNumBoth(0, source.length - 1);
        if (!points) return;
        points.forEach(function(point, idx) {
          var nowIdx = (showIndex + idx) % (source.length - 1);
          var adRow = source[nowIdx];
          showIds.push({
            appid: adRow.appid,
            position: adRow.position,
            index: nowIdx
          });
          var templateName = templetes.length - 1 > idx ? templetes[idx] : templetes[0];
          console.log("initFloatAd", point.x, point.y);
          adRow.x = point.x;
          adRow.y = point.y;
          adRow.source = source;
          adRow.showIds = showIds;
          adRow.index = idx;
          Lite.entity.showEntity(templateName, _this.floatContainer, adRow);
        });
        this.updateFloat();
        this.schedule(this.updateFloat, this.mFloatRefresh);
        this.floatAnim();
        this.floatRuning = false;
      };
      AdForm.prototype.removeFloatAd = function() {
        this.floatContainer.children.forEach(function(floatNode) {
          floatNode.stopAllActions();
        });
        if (!this.FormData) return;
        var templetes = this.FormData.floatTempletes;
        templetes && templetes.forEach(function(tempName) {
          Lite.entity.hideAllEntity(tempName);
        });
        this.mTempTempletes && this.mTempTempletes.forEach(function(tempName) {
          Lite.entity.hideAllEntity(tempName);
        });
        this.unschedule(this.updateFloat);
      };
      AdForm.prototype.floatAnim = function() {
        if (this.floatRuning) return;
        var templetes = this.mTempTempletes || this.FormData.floatTempletes;
        this.floatContainer.childrenCount >= templetes.length && (this.floatRuning = true);
        this.floatContainer.children.forEach(function(floatNode) {
          floatNode.stopAllActions();
          floatNode.runAction(cc.sequence(cc.rotateTo(.3, 10), cc.rotateTo(.6, -10), cc.rotateTo(.3, 0), cc.scaleTo(.3, .8), cc.scaleTo(.3, 1)).repeatForever());
        });
      };
      AdForm.prototype.updateFloat = function() {
        var _this = this;
        var templetes = this.mTempTempletes || this.FormData.floatTempletes;
        templetes && templetes.forEach(function(tempName) {
          var allFloat = Lite.entity.getAllEntity(tempName);
          allFloat.forEach(function(item) {
            item.LogicData.index = (item.LogicData.index + _this.floatContainer.childrenCount) % (_this.mAdData.indexLeft.length - 1);
            item.refreshImg(__assign(__assign({}, _this.mAdData.indexLeft[item.LogicData.index]), {
              position: item.LogicData.position,
              onCancel: item.LogicData.onCancel
            }));
          });
        });
      };
      AdForm.prototype.initFiexdView = function(layout, num, position, templateName, callback) {
        if (!this.mAdData) return;
        layout.children.forEach(function(item) {
          var logic = item.getComponent(adViewItem_1.default);
          Lite.entity.hideEntity(logic, null);
        });
        var banner = this.setPosition(this.mAdData.indexLeft, position, callback, true);
        var endAd = [];
        var showIds = [];
        for (var i = 0; i < num; i++) {
          var item = banner.length > i ? banner[i] : banner[0];
          showIds.push({
            appid: item.appid,
            position: item.position,
            index: i
          });
          endAd.push(item);
        }
        endAd.forEach(function(item) {
          var adRow = __assign(__assign({}, item), {
            showIds: showIds,
            source: banner
          });
          Lite.entity.showEntity(templateName, layout, adRow);
        });
      };
      AdForm.prototype.initView = function(scrollView, layout, position, templateName, callback, source, hasScroll, scrollNavigate) {
        void 0 === hasScroll && (hasScroll = true);
        void 0 === scrollNavigate && (scrollNavigate = false);
        this.hideAllAdNode(templateName, layout);
        source || (source = this.setPosition(this.mAdData.indexLeft, position, callback));
        source.forEach(function(item, idx) {
          Lite.entity.showEntity(templateName, layout, item);
        });
        hasScroll && this.pushScroll(scrollView, layout.getComponent(cc.Layout), scrollNavigate);
      };
      AdForm.prototype.hideAllAdNode = function(templateName, node) {
        if (!node) return;
        for (var i = 0; i < node.childrenCount; i++) {
          Lite.entity.hideEntity(node.children[i].getComponent(adViewItem_1.default), null);
          i--;
        }
      };
      AdForm.prototype.update = function() {
        this.scrollMove();
        this.checkUserScrolling();
      };
      AdForm.prototype.checkUserScrolling = function() {
        var _this = this;
        if (this.mShowAd == AD_POSITION_1.AD_POSITION.NONE) return;
        if (1 != Lite.config.getKey("SliceSkip")) return;
        if (this.mUserScrolling) return;
        for (var i = 0; i < this.mScrollVec.length; i++) {
          if (this.mUserScrolling) return;
          var item = this.mScrollVec[i];
          if (item.isScrollNavigate && !item.hasScrollNavigate) {
            var scrollView = item.scrollView;
            if (scrollView.isScrolling()) {
              var contentPos = scrollView.getContentPosition();
              this.mScrollVec[i].scrollXBegin ? this.mScrollVec[i].scrollXEnd = contentPos.x : this.mScrollVec[i].scrollXBegin = contentPos.x;
              this.mScrollVec[i].scrollYBegin ? this.mScrollVec[i].scrollYEnd = contentPos.y : this.mScrollVec[i].scrollXBegin = contentPos.y;
              if (Math.abs(this.mScrollVec[i].scrollYEnd - this.mScrollVec[i].scrollYBegin) > 100 || Math.abs(this.mScrollVec[i].scrollXEnd - this.mScrollVec[i].scrollXBegin) > 100) {
                console.log("\u7528\u6237\u6ed1\u52a8-\u8df3\u8f6c");
                this.mScrollVec[i].hasScrollNavigate = true;
                this.localAdFromTag = "\u7528\u6237\u6ed1\u52a8";
                this.onRandomNavigate(function() {
                  _this.mUserScrolling = false;
                }, function() {
                  _this.mUserScrolling = false;
                });
              }
            } else {
              this.mScrollVec[i].scrollXBegin = null;
              this.mScrollVec[i].scrollXEnd = 0;
              this.mScrollVec[i].scrollYBegin = null;
              this.mScrollVec[i].scrollYEnd = 0;
            }
          }
        }
      };
      AdForm.prototype.scrollMove = function() {
        for (var i = 0; i < this.mScrollVec.length; i++) {
          var item = this.mScrollVec[i];
          var scrollView = item.scrollView;
          if (scrollView.isScrolling()) continue;
          var scrollOffset = scrollView.getMaxScrollOffset();
          var maxH = scrollOffset.y / 2 + 20;
          var maxW = scrollOffset.x / 2 + 20;
          var contentPos = scrollView.getContentPosition();
          if (true == item.move2Up) {
            contentPos.y > maxH && (item.move2Up = false);
            item.scrollView.setContentPosition(new cc.Vec2(contentPos.x, contentPos.y + this.mMoveSpeed));
          } else if (false == item.move2Up) {
            contentPos.y < -maxH && (item.move2Up = true);
            item.scrollView.setContentPosition(new cc.Vec2(contentPos.x, contentPos.y - this.mMoveSpeed));
          }
          if (true == item.move2Left) {
            contentPos.x > maxW && (item.move2Left = false);
            item.scrollView.setContentPosition(new cc.Vec2(contentPos.x + this.mMoveSpeed, contentPos.y));
          } else if (false == item.move2Left) {
            contentPos.x < -maxW && (item.move2Left = true);
            item.scrollView.setContentPosition(new cc.Vec2(contentPos.x - this.mMoveSpeed, contentPos.y));
          }
        }
      };
      AdForm.prototype.willShow = function(data) {
        _super.prototype.willShow.call(this, data);
        this.floatRuning = false;
        this.addListener();
        this.mAdItemList = [];
        this.mScrollVec = [];
        Lite.data.adFormTag = "loading";
        this.node.zIndex = cc.macro.MAX_ZINDEX;
        data && data.showAd && this.displayChange(data.showAd, data.callback);
      };
      AdForm.prototype.willHide = function() {
        _super.prototype.willShow.call(this);
        this.removeListener();
      };
      AdForm.prototype.displayChange = function(data, callback) {
        void 0 === callback && (callback = null);
        this.mShowAd = data;
        this.displayAd(true);
        this.mBackCall = callback;
      };
      AdForm.prototype.showExport = function(visible) {
        this.exportContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.EXPORT);
        if (!this.exportContainer.active) return;
        this.flashBanner01 = Lite.config.getKey("FlashBanner01");
        3 == this.flashBanner01 && (this.flashBanner01 = Common_1.default.randomNumBoth(1, 2));
        1 == this.flashBanner01 && this.showFlashBanner();
        var forceSkip01 = Lite.config.getKey("ForceSkip01");
        if (1 == forceSkip01) {
          this.localAdFromTag = "\u597d\u53cb\u70ed\u73a9";
          this.unschedule(this.onRandomNavigate);
          this.scheduleOnce(this.onRandomNavigate, .5);
        }
        moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570", {
          name: "\u597d\u53cb\u70ed\u73a9"
        });
      };
      AdForm.prototype.showCenter = function(visible) {
        this.centerContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.CENTER);
        this.leftContainer.active = this.rightContainer.active = visible && (this.hasAd(AD_POSITION_1.AD_POSITION.LEFTRIGHT) || this.hasAd(AD_POSITION_1.AD_POSITION.CENTER));
        if (!this.centerContainer.active) return;
        this.gameCenterWudian = Lite.config.getKey("GameCenterWudian");
        3 == this.gameCenterWudian && (this.gameCenterWudian = Common_1.default.randomNumBoth(1, 2));
        1 == this.gameCenterWudian && this.showFlashBanner();
        var forceSkip02 = Lite.config.getKey("ForceSkip02");
        if (1 == forceSkip02) {
          this.localAdFromTag = "\u6e38\u620f\u4e2d\u5fc3";
          this.unschedule(this.onRandomNavigate);
          this.scheduleOnce(this.onRandomNavigate, .5);
        }
        moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570", {
          name: "\u6e38\u620f\u4e2d\u5fc3"
        });
      };
      AdForm.prototype.showRecommend = function(visible) {
        var _this = this;
        this.recommendClose.active = false;
        this.recommendContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.RECOMMEND);
        if (!this.recommendContainer.active) return;
        this.gGPopWudian = Lite.config.getKey("GGPopWudian");
        3 == this.gameCenterWudian && (this.gameCenterWudian = Common_1.default.randomNumBoth(1, 2));
        1 == this.gameCenterWudian && this.showFlashBanner();
        moosnow.http.point("\u9875\u9762\u6253\u5f00\u6b21\u6570", {
          name: "\u7cbe\u54c1\u6e38\u620f"
        });
        this.scheduleOnce(function() {
          _this.recommendClose.active = true;
        }, 1);
      };
      AdForm.prototype.preload = function(visible) {
        visible && (this.hasAd(AD_POSITION_1.AD_POSITION.RECOMMEND) || this.hasAd(AD_POSITION_1.AD_POSITION.CENTER) || this.hasAd(AD_POSITION_1.AD_POSITION.EXPORT)) && (this.preloadIndex = moosnow.platform.preloadBanner());
      };
      AdForm.prototype.displayAd = function(visible) {
        this.replaceContainer.active = false;
        this.endContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.EXPORT_FIXED);
        this.endContainer.active && this.initEnd();
        this.showExport(visible);
        this.showCenter(visible);
        this.showRecommend(visible);
        this.preload(visible);
        this.hotContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.HOT);
        this.bannerContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.BANNER);
        this.topContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.TOP);
        this.floatContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.FLOAT);
        this.floatContainer.active && this.initFloatAd(this.onAdCancel);
        this.floatContainer.active || this.removeFloatAd();
        this.rotateContainer.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.ROTATE);
        this.rotateContainer.active && this.initRotate(this.initRotate);
        !this.rotateContainer.active && this.disableRotate();
        this.formMask.active = visible && this.hasAd(AD_POSITION_1.AD_POSITION.MASK);
      };
      AdForm.prototype.onShow = function(data) {
        var _this = this;
        _super.prototype.onShow.call(this, data);
        var adScrollViewSpeed = Lite.config.getKey("adScrollViewSpeed");
        isNaN(adScrollViewSpeed) || (this.mMoveSpeed = parseFloat("" + adScrollViewSpeed));
        moosnow.ad.getAd(function(res) {
          _this.mAdData = res;
          _this.initBanner();
          _this.initTop();
          _this.initHot();
          _this.initExport();
          _this.initCenter();
          _this.initLeftRight();
          _this.initRecommend();
          _this.initFloatAd(_this.onAdCancel);
          _this.FormData && _this.FormData.callback && _this.FormData.callback();
        });
      };
      AdForm.prototype.initBanner = function() {
        var layout = this.bannerContainer_layout.getComponent(cc.Layout);
        var scrollView = this.bannerContainer_scroll.getComponent(cc.ScrollView);
        layout.type = cc.Layout.Type.HORIZONTAL;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        this.initView(scrollView, this.bannerContainer_layout, "banner", "adListBannerItem", this.onAdCancel, null, true, true);
      };
      AdForm.prototype.initTop = function() {
        var layout = this.topContainer_layout.getComponent(cc.Layout);
        var scrollView = this.topContainer_scroll.getComponent(cc.ScrollView);
        layout.type = cc.Layout.Type.HORIZONTAL;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        this.initView(scrollView, this.topContainer_layout, "top", "adListBannerItem", this.onAdCancel);
      };
      AdForm.prototype.initHot = function() {
        var layout = this.hotContainer_layout.getComponent(cc.Layout);
        var scrollView = this.hotContainer_scroll.getComponent(cc.ScrollView);
        this.initView(scrollView, this.hotContainer_layout, "\u70ed\u95e8\u6e38\u620f", "adHottem", this.onAdCancel);
      };
      AdForm.prototype.initLeftRight = function(templateName) {
        void 0 === templateName && (templateName = "adListLeftItem");
        this.leftContainer_layout.children.forEach(function(item) {
          var itemCtl = item.getComponent(adViewItem_1.default);
          Lite.entity.hideEntity(itemCtl, null);
        });
        this.rightContainer_layout.children.forEach(function(item) {
          var itemCtl = item.getComponent(adViewItem_1.default);
          Lite.entity.hideEntity(itemCtl, null);
        });
        if (0 == this.mAdData.indexLeft.length) return;
        var source = Common_1.default.deepCopy(this.mAdData.indexLeft);
        var endNum = source.length / 2;
        var right = source.slice(0, endNum);
        var left = source.slice(endNum, source.length);
        var leftLayout = this.leftContainer_layout.getComponent(cc.Layout);
        leftLayout.type = cc.Layout.Type.VERTICAL;
        leftLayout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        var rightLayout = this.rightContainer_layout.getComponent(cc.Layout);
        rightLayout.type = cc.Layout.Type.VERTICAL;
        rightLayout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        var leftView = this.leftContainer_scroll.getComponent(cc.ScrollView);
        leftView.horizontal = false;
        leftView.vertical = true;
        var rightView = this.rightContainer_scroll.getComponent(cc.ScrollView);
        rightView.horizontal = false;
        rightView.vertical = true;
        var newLeft = this.setPosition(left, "left", this.onAdCancel);
        var newRight = this.setPosition(right, "right", this.onAdCancel);
        this.initView(leftView, this.leftContainer_layout, "left", templateName, this.onAdCancel, newLeft);
        this.initView(rightView, this.rightContainer_layout, "right", templateName, this.onAdCancel, newRight);
      };
      AdForm.prototype.initEnd = function() {
        var layout = this.endContainer_layout.getComponent(cc.Layout);
        layout.type = cc.Layout.Type.GRID;
        layout.resizeMode = cc.Layout.ResizeMode.NONE;
        this.initFiexdView(this.endContainer_layout, 8, "8\u4e2a\u56fa\u5b9a\u5927\u5bfc\u51fa", "adFiexdItem", this.onAdCancel);
      };
      AdForm.prototype.initExport = function() {
        var layout = this.exportContainer_layout.getComponent(cc.Layout);
        var scrollView = this.exportContainer_scroll.getComponent(cc.ScrollView);
        layout.type = cc.Layout.Type.GRID;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        this.initView(scrollView, this.exportContainer_layout, "\u597d\u53cb\u70ed\u73a9", "adListExportItem", this.onAdCancel);
      };
      AdForm.prototype.initRecommend = function() {
        var layout = this.recommendContainer_layout.getComponent(cc.Layout);
        var scrollView = this.recommendContainer_scroll.getComponent(cc.ScrollView);
        layout.type = cc.Layout.Type.GRID;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        var recommendSources = this.setPosition(this.mAdData.indexLeft, "\u7cbe\u54c1\u6e38\u620f", null, true, 50);
        var num = 7;
        var sources = recommendSources.slice(0, num);
        this.initView(scrollView, this.recommendContainer_layout, "\u7cbe\u54c1\u6e38\u620f", "adRecommendItem", null, sources, false);
        if (this.mAdData.indexLeft.length > num) {
          var row = recommendSources.slice(num, num + 1)[0];
          row.nologo = true;
          Lite.entity.showEntity("adRecommendCloseItem", this.recommendContainer_layout, row);
        }
      };
      AdForm.prototype.initCenter = function() {
        var layout = this.centerContainer_layout.getComponent(cc.Layout);
        var scrollView = this.centerContainer_scroll.getComponent(cc.ScrollView);
        var itemWidth = 172;
        var sideWidth = 246;
        var itemNum = Math.floor((cc.winSize.width - 2 * sideWidth) / (itemWidth + 20));
        var totalWidth = itemNum * (itemWidth + 20);
        this.centerContainer_scroll.width = totalWidth;
        console.log("initCenter ~  this.centerContainer_scroll.width", this.centerContainer_scroll.width);
        var centerSources = this.setPosition(this.mAdData.indexLeft, "\u6e38\u620f\u4e2d\u5fc3", function() {}, true, 30);
        this.initView(scrollView, this.centerContainer_layout, "\u6e38\u620f\u4e2d\u5fc3", "adListCenterItem", null, centerSources, true, false);
      };
      AdForm.prototype.disableRotate = function() {
        var tempName = "adRotateItem";
        Lite.entity.hideAllEntity(tempName, null);
      };
      AdForm.prototype.initRotate = function(callback) {
        var _this = this;
        if (!this.mAdData) return;
        var source = this.setPosition(this.mAdData.indexLeft, "\u65cb\u8f6c\u5bfc\u51fa", callback, true);
        var beginIdx = Common_1.default.randomNumBoth(0, source.length - 1);
        var tempName = "adRotateItem";
        var showIds = [];
        var endAd = [];
        for (var i = 0; i < 4; i++) {
          if (0 == source.length) break;
          var rowIndex = Common_1.default.randomNumBoth(0, source.length - 1);
          var adRow = source.splice(rowIndex, 1)[0];
          showIds.push({
            appid: adRow.appid,
            position: adRow.position,
            index: i
          });
          endAd.push(adRow);
        }
        endAd.forEach(function(adRow) {
          adRow.source = source;
          adRow.showIds = showIds;
          Lite.entity.showEntity(tempName, _this.rotateContainer_layout, adRow);
        });
      };
      __decorate([ property(cc.Node) ], AdForm.prototype, "endContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "endContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "exportContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "exportContainer_scroll", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "exportContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "btnExportClose", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "recommendContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "recommendContainer_scroll", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "recommendContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "recommendClose", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "formMask", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "btnBack", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "floatContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "floatFull", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "bannerContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "bannerContainer_scroll", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "bannerContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "topContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "topContainer_scroll", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "topContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "leftContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "leftContainer_scroll", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "leftContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "rightContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "rightContainer_scroll", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "rightContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "rotateContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "rotateContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "hotContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "hotContainer_scroll", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "hotContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "hotClose", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "centerContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "centerContainer_scroll", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "centerContainer_layout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "centerClose", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "sideContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "sideView", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "sideLayout", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "btnSideShow", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "btnSideHide", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "replaceContainer", void 0);
      __decorate([ property(cc.Node) ], AdForm.prototype, "replaceLayout", void 0);
      AdForm = __decorate([ ccclass ], AdForm);
      return AdForm;
    }(UIForm_1.default);
    exports.default = AdForm;
    cc._RF.pop();
  }, {
    "../../script/config/UIForms": void 0,
    "../../script/framework/AD_POSITION": void 0,
    "../../script/framework/ui/UIForm": void 0,
    "../../script/framework/utils/Common": void 0,
    "./adViewItem": "adViewItem"
  } ],
  adHotViewItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2aaa39+odpAVqLmDbH1eaVh", "adHotViewItem");
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
    var Common_1 = require("../../script/framework/utils/Common");
    var adViewItem_1 = require("./adViewItem");
    var memo1 = [ "\u7ecf\u5178\u73a9\u6cd5\uff0c\u723d\u5feb\u6218\u6597\uff01", "\u4e0e\u5144\u5f1f\u4e00\u8d77\uff0c\u5171\u540c\u5f81\u6218\u6d2a\u8352\u4e16\u754c\uff01", "\u4ee5\u7231\u4e4b\u540d\uff0c\u8fd8\u539f\u56fd\u6c11\u68a6\u60f3", "\u9177\u70ab\u6280\u80fd\uff0c\u611f\u53d7\u9163\u7545\u6218\u6597", "\u5e7f\u79ef\u7cae\uff0c\u7b51\u9ad8\u5899\uff0c\u597d\u53cb\u9f50\u79f0\u738b\uff01", "\u6211\u8fd9\u4e00\u5200\u4e0b\u53bb\uff0cBOSS\u90fd\u8981\u98de\uff01", "\u5168\u6c11\u738b\u8005\uff0c\u9707\u98a4\u4e16\u754c", "\u738b\u603b\u558a\u4f60\u4e00\u8d77\u6253\u5996\u602a\u5566", "\u4f60\u7684\u8001\u677f\u53eb\u4f60\u4e0a\u7ebf\u6253\u602a", "\u4f60\u7684\u540c\u5b66\u6b63\u5728\u5077\u4f60\u5bb6\u83dc", "\u9694\u58c1\u8001\u738b\u73a9\u4e86\u90fd\u8bf4\u597d\uff01", "\u8fc7\u4e94\u5173\u65a9\u516d\u5c06\uff0c\u4f60\u7684\u597d\u53cb\u8981\u4f60\u4e00\u8d77\u6765\u6218", "\u71c3\u70b8\uff01\u6839\u672c\u505c\u4e0d\u4e0b\u6765", "\u6fc0\u723d\u6218\u6597\uff01\u4e00\u5200\u4e00\u4e2a\u5c0f\u670b\u53cb" ];
    var memo2 = [ "\u6700\u706b\u7206\u7684", "\u672c\u5e74\u5ea6\u6700\u4f73", "\u672c\u6708\u4eba\u6c14\u6700\u9ad8", "\u4eba\u6c14\u98d9\u5347\u7684", "\u670b\u53cb\u6b63\u5728\u70ed\u73a9\u7684", "\u706b\u7206\u670b\u53cb\u5708\u7684", "\u8d85\u723d\u5feb\u7684", "\u98ce\u9761\u5168\u7403\u7684", "\u5168\u65b0\u73a9\u6cd5\u7684", "\u5b98\u65b9\u6b63\u7248", "\u8f7b\u677e\u7b80\u5355\u7684" ];
    var memo3 = [ "\u5c0f\u6e38\u620f", "\u52a8\u4f5c\u6e38\u620f", "\u5c04\u51fb\u6e38\u620f", "\u5361\u724c\u6e38\u620f", "\u6a21\u62df\u7ecf\u8425\u6e38\u620f", "\u5267\u60c5\u6e38\u620f", "\u7b56\u7565\u6218\u6597\u6e38\u620f", "\u771f\u4eba\u5bf9\u6218\u6e38\u620f", "\u76ca\u667a\u6e38\u620f" ];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdHotViewItem = function(_super) {
      __extends(AdHotViewItem, _super);
      function AdHotViewItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerNum = null;
        _this.starNum = null;
        _this.memo = null;
        _this.btnPlay = null;
        return _this;
      }
      AdHotViewItem.prototype.addListener = function() {
        _super.prototype.addListener.call(this);
        this.btnPlay.on(cc.Node.EventType.TOUCH_START, this.onClickAd, this);
      };
      AdHotViewItem.prototype.removeListener = function() {
        _super.prototype.addListener.call(this);
        this.btnPlay.off(cc.Node.EventType.TOUCH_START, this.onClickAd, this);
      };
      AdHotViewItem.prototype.updateUI = function() {
        _super.prototype.updateUI.call(this);
        var memoStr = "";
        memoStr = Math.random() > .5 ? memo1[Common_1.default.randomNumBoth(0, memo1.length - 1)] : memo2[Common_1.default.randomNumBoth(0, memo2.length - 1)] + memo3[Common_1.default.randomNumBoth(0, memo3.length - 1)];
        this.memo.string = memoStr;
        this.starNum.string = "" + Common_1.default.numFixed(Common_1.default.randomNumBoth(80, 100) / 10, 2);
        this.playerNum.string = Common_1.default.randomNumBoth(30, 200) + "\u4e07";
      };
      AdHotViewItem.prototype.update = function(dt) {};
      __decorate([ property(cc.Label) ], AdHotViewItem.prototype, "playerNum", void 0);
      __decorate([ property(cc.Label) ], AdHotViewItem.prototype, "starNum", void 0);
      __decorate([ property(cc.Label) ], AdHotViewItem.prototype, "memo", void 0);
      __decorate([ property(cc.Node) ], AdHotViewItem.prototype, "btnPlay", void 0);
      AdHotViewItem = __decorate([ ccclass ], AdHotViewItem);
      return AdHotViewItem;
    }(adViewItem_1.default);
    exports.default = AdHotViewItem;
    cc._RF.pop();
  }, {
    "../../script/framework/utils/Common": void 0,
    "./adViewItem": "adViewItem"
  } ],
  adViewItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e482fDqWsFOkKTB1y3IlvJw", "adViewItem");
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
    var Bundles_1 = require("../../script/framework/config/Bundles");
    var EntityLogic_1 = require("../../script/framework/entity/EntityLogic");
    var Common_1 = require("../../script/framework/utils/Common");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdViewItem = function(_super) {
      __extends(AdViewItem, _super);
      function AdViewItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logo = null;
        _this.title = null;
        _this.animLogo = null;
        _this.nameBg = null;
        _this.redpoint = null;
        _this.randomBg = true;
        return _this;
      }
      AdViewItem.prototype.addListener = function() {
        this.logo.on(cc.Node.EventType.TOUCH_START, this.onClickAd, this);
      };
      AdViewItem.prototype.removeListener = function() {
        this.logo.off(cc.Node.EventType.TOUCH_START, this.onClickAd, this);
      };
      AdViewItem.prototype.initPosition = function(data) {};
      AdViewItem.prototype.willShow = function(cell) {
        _super.prototype.willShow.call(this, cell);
        this.mAdItem = cell;
        this.addListener();
      };
      AdViewItem.prototype.refreshImg = function(cell) {
        this.mAdItem = cell;
        this.updateUI();
      };
      AdViewItem.prototype.updateUI = function() {
        var _this = this;
        var _a = this.logo, width = _a.width, height = _a.height;
        this.mAdItem.nologo || moosnow.nodeHelper.changeSrc(this.logo, {
          url: this.mAdItem.img,
          width: width,
          height: height
        }, function() {
          _this.logo.width = width;
          _this.logo.height = height;
        });
        this.redpoint && (this.redpoint.active = Common_1.default.randomToRatio(0, 100, this.mAdItem.ratio ? this.mAdItem.ratio : 0));
        this.randomBg && this.nameBg && Lite.resource.loadBundle(Bundles_1.default.ad, function(err1, bundle) {
          if (err1) return;
          bundle.load("texture/ad-item-bg" + Common_1.default.randomNumBoth(1, 3), cc.SpriteFrame, function(err2, spriteFrame) {
            if (err2) return;
            _this.nameBg.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        });
        moosnow.nodeHelper.changeText(this.title, this.mAdItem.title);
      };
      AdViewItem.prototype.onClickAd = function() {
        var _this = this;
        var openAd = this.mAdItem;
        if (this.LogicData && this.LogicData.refresh) {
          var nextAd = this.findNextAd();
          if (nextAd) {
            nextAd.refresh && moosnow.event.sendEventImmediately(moosnow.PLATFORM_EVENT.AD_VIEW_REFRESH, {
              current: openAd,
              next: nextAd
            });
            this.refreshImg(nextAd);
          }
        }
        moosnow.platform.navigate2Mini(__assign(__assign({}, openAd), {
          position: Lite.data.adFormTag + "-" + openAd.position
        }), function() {}, function() {
          _this.mAdItem && _this.mAdItem.onCancel && _this.mAdItem.onCancel(openAd);
        });
      };
      AdViewItem.prototype.findNextAd = function() {
        if (!this.LogicData.source) return null;
        if (!this.LogicData.showIds) return null;
        for (var i = 0; i < this.LogicData.source.length; i++) {
          var isShow = false;
          for (var j = 0; j < this.LogicData.showIds.length; j++) this.LogicData.showIds[j].appid == this.LogicData.source[i].appid && this.LogicData.showIds[j].position == this.LogicData.source[i].position && (isShow = true);
          if (!isShow) return this.LogicData.source[i];
        }
        return null;
      };
      AdViewItem.prototype.onAdViewChange = function(e) {
        if (!this.LogicData.showIds) return;
        if (!this.LogicData.source) return;
        var current = e.current, next = e.next;
        var showApps = this.LogicData.showIds;
        var sourceApps = this.LogicData.source;
        for (var i = 0; i < showApps.length; i++) current.appid == showApps[i].appid && current.position == showApps[i].position && (this.LogicData.showIds[i] = next.appid);
        for (var i = 0; i < sourceApps.length; i++) if (next.appid == sourceApps[i].appid) {
          this.LogicData.source.splice(i, 1);
          this.LogicData.source.push(current);
          break;
        }
      };
      AdViewItem.prototype.onShow = function(data) {
        _super.prototype.onShow.call(this, data);
        this.updateUI();
        moosnow.event.addListener(moosnow.PLATFORM_EVENT.AD_VIEW_REFRESH, this, this.onAdViewChange);
      };
      AdViewItem.prototype.onHide = function(data) {
        _super.prototype.onHide.call(this, data);
        this.mAdItem && (this.mAdItem.onCancel = null);
        this.removeListener();
        moosnow.event.removeListener(moosnow.PLATFORM_EVENT.AD_VIEW_REFRESH, this);
      };
      AdViewItem.prototype.update = function(dt) {};
      __decorate([ property(cc.Node) ], AdViewItem.prototype, "logo", void 0);
      __decorate([ property(cc.Node) ], AdViewItem.prototype, "title", void 0);
      __decorate([ property(cc.Node) ], AdViewItem.prototype, "animLogo", void 0);
      __decorate([ property(cc.Node) ], AdViewItem.prototype, "nameBg", void 0);
      __decorate([ property(cc.Node) ], AdViewItem.prototype, "redpoint", void 0);
      __decorate([ property ], AdViewItem.prototype, "randomBg", void 0);
      AdViewItem = __decorate([ ccclass ], AdViewItem);
      return AdViewItem;
    }(EntityLogic_1.default);
    exports.default = AdViewItem;
    cc._RF.pop();
  }, {
    "../../script/framework/config/Bundles": void 0,
    "../../script/framework/entity/EntityLogic": void 0,
    "../../script/framework/utils/Common": void 0
  } ]
}, {}, [ "adForm", "adHotViewItem", "adViewItem" ]);