(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-details/shop-details"],{"1cad":function(t,o,n){"use strict";var e=n("d69d"),i=n.n(e);i.a},"3fef":function(t,o,n){"use strict";n.r(o);var e=n("fe66"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(o,t,(function(){return e[t]}))}(s);o["default"]=i.a},6697:function(t,o,n){"use strict";n.r(o);var e=n("c000"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(o,t,(function(){return e[t]}))}(s);o["default"]=i.a},"670e":function(t,o,n){"use strict";var e=n("84a2"),i=n.n(e);i.a},"711f":function(t,o,n){"use strict";(function(t){n("77c6");e(n("66fd"));var o=e(n("e4bb"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("543d")["createPage"])},"84a2":function(t,o,n){},"91fb":function(t,o,n){"use strict";n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return s})),n.d(o,"a",(function(){return e}));var e={jyfParser:function(){return Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(n.bind(null,"d0a6"))},tuiBadge:function(){return n.e("ui/tui-badge/tui-badge").then(n.bind(null,"6d05"))},tuiBottomPopup:function(){return n.e("ui/tui-bottom-popup/tui-bottom-popup").then(n.bind(null,"54a2"))},tuiNumberbox:function(){return n.e("ui/tui-numberbox/tui-numberbox").then(n.bind(null,"8b3e"))}},i=function(){var t=this,o=t.$createElement;t._self._c},s=[]},c000:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={name:"myh5",props:["docId"],data:function(){return{src:"",modal:!1,loading:!1}},onLoad:function(){console.log("的粉红色"+this.docI),this.docId&&this.downloadApp()},methods:{handleClick:function(){this.modal=!1},isWeiXinBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},download:function(){window.location.href=this.h5APPPath},download2:function(){this.loading=!0,this.src=this.AppStorePath},downloadApp:function(){var t=this;this.$u.get(this.VersionPlatformUrl).then((function(o){0==o.status&&("Android"==o.msg?t.download():"iPhone"==o.msg&&t.download2())}))}}};o.default=e},d1b7:function(t,o,n){"use strict";var e;n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return s})),n.d(o,"a",(function(){return e}));var i=function(){var t=this,o=t.$createElement;t._self._c},s=[]},d69d:function(t,o,n){},e4bb:function(t,o,n){"use strict";n.r(o);var e=n("91fb"),i=n("3fef");for(var s in i)"default"!==s&&function(t){n.d(o,t,(function(){return i[t]}))}(s);n("1cad");var u,a=n("f0c5"),r=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);o["default"]=r.exports},f96d:function(t,o,n){"use strict";n.r(o);var e=n("d1b7"),i=n("6697");for(var s in i)"default"!==s&&function(t){n.d(o,t,(function(){return i[t]}))}(s);n("670e");var u,a=n("f0c5"),r=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);o["default"]=r.exports},fe66:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=i(n("f96d"));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(n("d0a6"))}.bind(null,n)).catch(n.oe)},u={components:{myh5:e.default,jyfParser:s},onLoad:function(o){var n=this;this.islogin=t.getStorageSync(this.ISLOGIN),this.goodsId=o.id,console.log("商品id："+this.goodsId),this.getGoodsDetailData(),this.islogin&&(this.getAllCountNum(),this.getNeedCount()),t.$on(this.INFORMLOGIN,(function(o){n.islogin=t.getStorageSync(n.ISLOGIN)})),t.$on(this.INFORMNEEDCOUNT,(function(t){n.getNeedCount()})),t.$on(this.INFORMCHATGOODS,(function(t){console.log("接受到更新购物车数量更新"),n.getAllCountNum()})),t.$on(this.INFORMCHATUPGOODS,(function(t){n.getAllCountNum()})),t.$on(this.SUBMITNEED,(function(t){n.getNeedCount()})),console.log(t.getStorageSync("token"))},onUnload:function(){t.$off(this.INFORMNEEDCOUNT),t.$off(this.INFORMCHATUPGOODS),t.$off(this.SUBMITNEED)},onNavigationBarButtonTap:function(){this.goShare()},onShareAppMessage:function(){return{title:this.shopDetail.name,imageUrl:this.shopDetail.img,path:"/pages/shop-details/shop-details?id="+this.shopDetail.id}},data:function(){return{islogin:"",goodsId:0,allNum:0,needCount:0,shopDetail:[],detailImgList:[],shopShow:!1,popupShow:!1,shopNum:1,addShopType:"",needShow:!1,needNum:1,noSelected:"",noAttributeVos:"",noGrugStock:"",noGrugPrice:"",noGrugId:""}},methods:{tapIcon:function(o){t.pageScrollTo({scrollTop:0,duration:150})},goShare:function(){t.share({provider:"weixin",scene:"WXSceneSession",type:0,href:this.shopDetailPath+this.shopDetail.id,title:this.shopDetail.name,summary:this.shopDetail.subTitle,imageUrl:this.shopDetail.img,success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))}})},addNeed:function(){var o=this;this.needPopup(),this.islogin?this.$u.get(this.needAddUrl,{goodsId:this.shopDetail.id,num:this.needNum}).then((function(t){console.log(t),0==t.status&&(o.$u.toast(t.msg),o.getNeedCount())})):t.navigateTo({url:"../welcome/wx-authorization/wx-authorization"})},needPopup:function(){this.needShow=!this.needShow},checkTypePopup:function(t){this.addShopType=t,this.popup()},popup:function(){this.popupShow=!this.popupShow},shopPopup:function(){this.shopShow=!this.shopShow},checkCartBuy:function(){this.popup(),this.islogin?1==this.addShopType?this.addCart():2==this.addShopType&&this.buyNow():t.navigateTo({url:"../welcome/wx-authorization/wx-authorization"})},buyNow:function(){var o=this;this.$u.get(this.orderGoodsCreateUrl,{goodsId:this.shopDetail.id,goodsSpecId:this.noGrugId,num:this.shopNum}).then((function(o){console.log(o),0==o.status&&t.navigateTo({url:"../shop-confirm/shop-confirm?type=2&orderNo="+o.msg})})).catch((function(t){1==t.data.status&&o.$u.toast(t.data.msg)}))},addCart:function(){var t=this;console.log("添加购物车"),console.log(this.shopDetail.id),console.log(this.noGrugId),console.log(this.shopNum),this.$u.get(this.cartAddUrl,{goodsId:this.shopDetail.id,goodsSpecStockId:this.noGrugId,num:this.shopNum}).then((function(o){console.log(o),0==o.status&&(t.$u.toast("添加成功"),t.getAllCountNum())})).catch((function(o){1==o.data.status&&t.$u.toast(o.data.msg)}))},change2:function(t){this.shopNum=t.value},changeNeed:function(t){this.needNum=t.value},getAllCountNum:function(){var t=this;this.$u.get(this.cartCountUrl).then((function(o){console.log("商品总数"),console.log(o.data),t.allNum=o.data}))},getNeedCount:function(){var t=this;this.$u.get(this.needCountUrl,{}).then((function(o){console.log("需求单总数"+o.data),console.log(o),0==o.status&&(t.needCount=o.data)}))},toNeed:function(){0!=this.needCount?t.navigateTo({url:"../need-list/need-list"}):this.$u.toast("需求单暂无数据请先添加")},toCart:function(){0!=this.allNum?t.navigateTo({url:"../shop-cart/shop-cart"}):this.$u.toast("暂无数据请先添加")},goBack:function(){t.navigateBack()},getGoodsDetailData:function(){var o=this;t.showLoading(),this.$u.get(this.goodsDetailUrl,{goodsId:this.goodsId}).then((function(n){o.shopDetail=n.data,t.hideLoading(),0==o.shopDetail.isDrug?(o.detailImgList=o.shopDetail.drugParameter.subImg.split(","),o.noSelected="已选:"+o.shopDetail.drugParameter.spec,o.noGrugStock=o.shopDetail.drugParameter.stock,null!=o.shopDetail.priceArea?o.noGrugPrice=o.shopDetail.priceArea:o.noGrugPrice=o.shopDetail.price):1==o.shopDetail.isDrug&&(o.detailImgList=n.data.goodsDetail.subImg.split(",")),1==o.shopDetail.isOtc&&1==o.shopDetail.isDrug&&(o.noAttributeVos=o.shopDetail.goodsSpecStockList[0],o.ddd())})).catch((function(n){t.hideLoading(),o.$u.toast(n.data.msg)}))},upNoDrugSpec:function(t){this.noAttributeVos=t,this.ddd()},ddd:function(){this.noSelected="已选:"+this.noAttributeVos.specsStr,this.noGrugStock=this.noAttributeVos.stock,this.noGrugPrice=this.noAttributeVos.price,this.noGrugId=this.noAttributeVos.id}}};o.default=u}).call(this,n("543d")["default"])}},[["711f","common/runtime","common/vendor"]]]);