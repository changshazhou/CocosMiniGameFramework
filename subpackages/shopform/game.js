window.__require=function o(t,n,e){function i(s,c){if(!n[s]){if(!t[s]){var a=s.split("/");if(a=a[a.length-1],!t[a]){var f="function"==typeof __require&&__require;if(!c&&f)return f(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+s+"'")}s=a}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(o){return i(t[s][1][o]||o)},u,u.exports,o,t,n,e)}return n[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<e.length;s++)i(e[s]);return i}({skinForm:[function(o,t,n){"use strict";cc._RF.push(t,"876b4Uj+eZN9IS8HJAERNSS","skinForm");var e,i=this&&this.__extends||(e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var n in t)t.hasOwnProperty(n)&&(o[n]=t[n])})(o,t)},function(o,t){function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=this&&this.__assign||function(){return(r=Object.assign||function(o){for(var t,n=1,e=arguments.length;n<e;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);return o}).apply(this,arguments)},s=this&&this.__decorate||function(o,t,n,e){var i,r=arguments.length,s=r<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(o,t,n,e);else for(var c=o.length-1;c>=0;c--)(i=o[c])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var c=o("../../script/config/UIForms"),a=o("../../script/framework/AD_POSITION"),f=o("../../script/framework/ui/UIForm"),u=o("../../script/framework/utils/Common"),p=o("../../script/framework/utils/FrameworkEvent"),d=o("../../sheets/vo/SkinCfg"),l=cc._decorator,h=l.ccclass,m=l.property,k=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.skinView=null,t.skinLayout=null,t.btnBack=null,t.btnVideo=null,t.btnCoin=null,t.isMask=!0,t}return i(t,o),t.prototype.willShow=function(){this.initSkin(),this.addListener(),this.onSkinChange(),moosnow.platform.showBanner(!1,function(){},moosnow.BANNER_HORIZONTAL.CENTER,moosnow.BANNER_VERTICAL.BOTTOM),moosnow.platform.hideBlock(),moosnow.form.hideAd(function(){})},t.prototype.willHide=function(){moosnow.platform.showBlock(moosnow.BLOCK_HORIZONTAL.CENTER,moosnow.BLOCK_VERTICAL.TOP,1,5),this.removeListener(),moosnow.APP_PLATFORM.WX==moosnow.getAppPlatform()?(moosnow.platform.hideBanner(),moosnow.form.showAd(a.AD_POSITION.BANNER,function(){})):(moosnow.platform.hideBanner(),moosnow.platform.showBanner(!1,function(){},moosnow.BANNER_HORIZONTAL.CENTER,moosnow.BANNER_VERTICAL.BOTTOM))},t.prototype.initSkin=function(){var o=this;Lite.entity.hideAllEntity("skinItem"),d.SkinCfg.getAll().forEach(function(t){Lite.entity.showEntity("skinItem",o.skinLayout.node,r({},u.default.deepCopy(t)))})},t.prototype.addListener=function(){this.btnBack.on(cc.Node.EventType.TOUCH_END,this.onBack,this),this.btnVideo.on(cc.Node.EventType.TOUCH_END,this.onUnlock,this),this.btnCoin.on(cc.Node.EventType.TOUCH_END,this.onCoinUnlock,this),moosnow.event.addListener(p.default.SKIN_SELECT,this,this.onSkinChange)},t.prototype.removeListener=function(){this.btnBack.off(cc.Node.EventType.TOUCH_END,this.onBack,this),this.btnVideo.off(cc.Node.EventType.TOUCH_END,this.onUnlock,this),this.btnCoin.on(cc.Node.EventType.TOUCH_END,this.onCoinUnlock,this),moosnow.event.removeListener(p.default.SKIN_SELECT,this)},t.prototype.onSkinChange=function(){var o=Lite.data.getSelectSkin(),t=Lite.data.getUserSkinById(o);this.btnCoin.active=!t,this.btnVideo.active=!t},t.prototype.onBack=function(){Lite.ui.hideUIForm(c.default.SkinForm,null)},t.prototype.onCoinUnlock=function(){var o=Lite.data.getSelectSkin(),t=d.SkinCfg.get(o),n=Lite.data.getCoin();t.coinNum<=n?(Lite.data.setCoin(n-t.coinNum),Lite.data.saveCoin(),Lite.data.addUserSkinCoin(o),Lite.data.setCurrentSkinId(o),moosnow.event.sendEventImmediately(p.default.SKIN_CHANGE,o),this.onSkinChange()):Lite.ui.showToast("\u91d1\u5e01\u4e0d\u8db3")},t.prototype.onUnlock=function(){var o=this;moosnow.platform.showVideo(function(t){if(t==moosnow.VIDEO_STATUS.END){var n=Lite.data.getSelectSkin();Lite.data.addUserSkinVideo(n);var e=Lite.data.getUserSkinById(n);d.SkinCfg.get(n).videoNum<=e.videoNum&&(Lite.data.setCurrentSkinId(n),moosnow.event.sendEventImmediately(p.default.SKIN_CHANGE,n),o.onSkinChange())}else t==moosnow.VIDEO_STATUS.ERR?Lite.ui.showToast(moosnow.VIDEO_MSG.ERR):Lite.ui.showToast(moosnow.VIDEO_MSG.NOTEND)})},s([m(cc.ScrollView)],t.prototype,"skinView",void 0),s([m(cc.Layout)],t.prototype,"skinLayout",void 0),s([m(cc.Node)],t.prototype,"btnBack",void 0),s([m(cc.Node)],t.prototype,"btnVideo",void 0),s([m(cc.Node)],t.prototype,"btnCoin",void 0),s([h],t)}(f.default);n.default=k,cc._RF.pop()},{"../../script/config/UIForms":void 0,"../../script/framework/AD_POSITION":void 0,"../../script/framework/ui/UIForm":void 0,"../../script/framework/utils/Common":void 0,"../../script/framework/utils/FrameworkEvent":void 0,"../../sheets/vo/SkinCfg":void 0}]},{},["skinForm"]);