(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-confirm/shop-confirm"],{5022:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=e(n("f96d"));function e(t){return t&&t.__esModule?t:{default:t}}var i={components:{myh5:a.default},onLoad:function(o){var n=this;this.type=o.type,1==this.type&&t.$emit(this.INFORMCHATUPGOODS,""),this.orderNo=o.orderNo,console.log("接收到订单编号为："+this.orderNo),this.getData(),t.$on(this.UPCARTADDRESS,(function(t){n.addressData=t,console.log("回调的地址信息"),console.log(n.addressData),n.getAddressData()})),t.$on(this.CONFIRMADDRESS,(function(t){n.getData()}))},onUnload:function(){t.$off(this.UPCARTADDRESS),t.$off(this.CONFIRMADDRESS)},data:function(){return{type:"",orderNo:"",detailData:"",addressData:"",payShow:!1,payType:!1}},methods:{addAddress:function(){t.navigateTo({url:"../../ApagesA/address-add/address-add?type=4"})},handleHiddenShare:function(){var o=this;if(this.payPopup(),null!=this.addressData){console.log("上传地址信息"),console.log(this.addressData);var n=this.payType?1:2;this.$u.get(this.orderPayUrl,{orderNo:this.orderNo,addressId:this.addressData.id,platform:n,deviceType:t.getStorageSync(this.DEVICETYPE)}).then((function(t){console.log("请求支付"),console.log(t),0==t.status&&(o.payType?o.zfbApi(t.data.body):o.wxPay(t.data))})).catch((function(t){o.$u.toast(t.data.msg)}))}else this.$u.toast("请先添加收货地址！")},wxPay:function(o){t.requestPayment({provider:"wxpay",timeStamp:o.timestamp,nonceStr:o.noncestr,package:o.packagevalue,signType:"MD5",paySign:o.sign,success:function(t){console.log("微信支付成功回调"),me.notification()},fail:function(t){console.log("微信支付失败回调:"+JSON.stringify(t))}})},wxApi:function(o){var n=this;t.requestPayment({provider:"wxpay",orderInfo:o,success:function(t){console.log("微信支付成功回调"),n.notification()},fail:function(t){console.log("微信支付失败回调:"+JSON.stringify(t))}})},zfbApi:function(o){var n=this;t.requestPayment({provider:"alipay",orderInfo:o,success:function(t){console.log("支付宝支付成功回调"),n.notification()},fail:function(t){console.log("支付宝支付失败回调:"+JSON.stringify(t))}})},notification:function(){3==this.type?(t.$emit(me.INFORMGOODSLISTPAY,""),t.navigateBack()):1!=this.type&&2!=this.type||(t.navigateTo({url:"../my-goods/my-goods?flag=2"}),t.navigateBack())},toUpAddress:function(){t.navigateTo({url:"../need-update-address/need-update-address?type=3&addressData="+encodeURIComponent(JSON.stringify(this.addressData))})},getData:function(){var o=this;t.showLoading(),this.$u.get(this.orderResultUrl,{orderNo:this.orderNo}).then((function(n){t.hideLoading(),console.log("请求手段聚而奋斗元话费"),console.log(n),0==n.status&&(o.detailData=n.data,o.addressData=o.detailData.list[0].customerAddress)})).catch((function(n){t.hideLoading(),4==n.data.status&&o.$u.toast(n.data.msg)}))},getAddressData:function(){var o=this;t.showLoading(),this.$u.get(this.orderResultUrl,{orderNo:this.orderNo,address:this.addressData.id}).then((function(n){t.hideLoading(),console.log("请求手"),console.log(n),0==n.status&&(o.detailData=n.data,o.addressData=o.detailData.list[0].customerAddress)})).catch((function(n){t.hideLoading(),4==n.data.status&&o.$u.toast(n.data.msg)}))},checkPay:function(t){t||(this.payType=!this.payType)},payPopup:function(){this.payShow=!this.payShow}}};o.default=i}).call(this,n("543d")["default"])},6697:function(t,o,n){"use strict";n.r(o);var a=n("c000"),e=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(o,t,(function(){return a[t]}))}(i);o["default"]=e.a},"670e":function(t,o,n){"use strict";var a=n("84a2"),e=n.n(a);e.a},7692:function(t,o,n){},"84a2":function(t,o,n){},"90e0":function(t,o,n){"use strict";n.r(o);var a=n("5022"),e=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(o,t,(function(){return a[t]}))}(i);o["default"]=e.a},"95d7":function(t,o,n){"use strict";(function(t){n("77c6");a(n("66fd"));var o=a(n("d4d4"));function a(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("543d")["createPage"])},b037:function(t,o,n){"use strict";var a=n("7692"),e=n.n(a);e.a},b1df:function(t,o,n){"use strict";n.d(o,"b",(function(){return e})),n.d(o,"c",(function(){return i})),n.d(o,"a",(function(){return a}));var a={tuiBottomPopup:function(){return n.e("ui/tui-bottom-popup/tui-bottom-popup").then(n.bind(null,"54a2"))}},e=function(){var t=this,o=t.$createElement;t._self._c},i=[]},c000:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a={name:"myh5",props:["docId"],data:function(){return{src:"",modal:!1,loading:!1}},onLoad:function(){console.log("的粉红色"+this.docI),this.docId&&this.downloadApp()},methods:{handleClick:function(){this.modal=!1},isWeiXinBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},download:function(){window.location.href=this.h5APPPath},download2:function(){this.loading=!0,this.src=this.AppStorePath},downloadApp:function(){var t=this;this.$u.get(this.VersionPlatformUrl).then((function(o){0==o.status&&("Android"==o.msg?t.download():"iPhone"==o.msg&&t.download2())}))}}};o.default=a},d1b7:function(t,o,n){"use strict";var a;n.d(o,"b",(function(){return e})),n.d(o,"c",(function(){return i})),n.d(o,"a",(function(){return a}));var e=function(){var t=this,o=t.$createElement;t._self._c},i=[]},d4d4:function(t,o,n){"use strict";n.r(o);var a=n("b1df"),e=n("90e0");for(var i in e)"default"!==i&&function(t){n.d(o,t,(function(){return e[t]}))}(i);n("b037");var s,d=n("f0c5"),r=Object(d["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);o["default"]=r.exports},f96d:function(t,o,n){"use strict";n.r(o);var a=n("d1b7"),e=n("6697");for(var i in e)"default"!==i&&function(t){n.d(o,t,(function(){return e[t]}))}(i);n("670e");var s,d=n("f0c5"),r=Object(d["a"])(e["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);o["default"]=r.exports}},[["95d7","common/runtime","common/vendor"]]]);