require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["ApagesA/address-add/address-add"],{"09db":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e("f96d"));function o(t){return t&&t.__esModule?t:{default:t}}var s=e("aae9"),a={components:{myh5:n.default},onLoad:function(i){var e=this;if(this.type=i.type,console.log("类型"),console.log(this.type),2==this.type){t.setNavigationBarTitle({title:"编辑地址"});var n=i.index,o=JSON.parse(decodeURIComponent(i.data));console.log("data类型"),console.log(o),this.id=o.id,this.name=o.receiver,this.phone=o.phone,this.province=o.province,this.city=o.city,this.area=o.area,this.address=o.detail,this.isShow=0==n}this.getNowAddress(),t.$on(this.UPDATEADDRESS,(function(t){e.address=t.address,e.province=t.province,e.city=t.city,e.area=t.area})),this.proviceArr=this.toArr(s.default),this.cityArr=this.toArr(s.default[0].city),this.districtArr=this.toArrTwo(s.default[0].city[0].area)},data:function(){return{type:1,name:"",phone:"",province:"请选择",city:"请选择",area:"请选择",address:"",isShow:!1,latitude:"",longitude:"",value:[0,0,0],proviceArr:[],cityArr:[],districtArr:[],id:0,payShow:!1}},methods:{payPopup:function(){this.payShow=!this.payShow},toArr:function(t){var i=[];for(var e in t)i.push(t[e].name);return i},toArrTwo:function(t){var i=[];for(var e in t)i.push(t[e]);return i},picker:function(t){this.address="";var i=this.value;s.default.length>0&&(this.province=s.default[i[0]].name,this.city=s.default[i[0]].city[i[1]].name,this.area=s.default[i[0]].city[i[1]].area[i[2]],this.payPopup())},columnPicker:function(t){var i=t.detail.value;this.value[0]!==i[0]?(this.proviceArr=this.proviceArr,this.cityArr=this.toArr(s.default[i[0]].city),this.districtArr=this.toArrTwo(s.default[i[0]].city[0].area),this.value=[i[0],0,0]):this.value[1]!==i[1]?(this.proviceArr=this.proviceArr,this.cityArr=this.cityArr,this.districtArr=this.toArrTwo(s.default[i[0]].city[i[1]].area),this.value=[i[0],i[1],0]):this.value=i},setShow:function(){var i=this;this.isShow=!this.isShow,2==this.type&&this.isShow&&this.$u.get(this.addressDefaultSetUrl,{addressId:this.id}).then((function(e){console.log(e),0==e.status&&(i.$u.toast("设为默认地址成功"),t.$emit(i.UPDATEADDRESSLIST,"收货列表更新"))}))},okRes:function(){this.$u.test.isEmpty(this.name)?this.$u.toast("请输入收货人真实姓名"):this.$u.test.isEmpty(this.phone)?this.$u.toast("请输入手机号"):this.$u.test.mobile(this.phone)?"请选择"!=this.province&&"请选择"!=this.city&&"请选择"!=this.area?this.$u.test.isEmpty(this.address)?this.$u.toast("请输入收货人详细地址"):this.getAddress():this.$u.toast("请选择收货人所在地区"):this.$u.toast("请输入正确的手机号")},getAddress:function(){var i=this;t.showLoading();var e=this.isShow?0:1;1==this.type||3==this.type||4==this.type?this.$u.get(this.addressAddUrl,{receiver:this.name,phone:this.phone,province:this.province,city:this.city,area:this.area,detail:this.address,defaultAddress:e}).then((function(e){t.hideLoading(),console.log(e),0==e.status&&(i.$u.toast("添加成功"),1==i.type?(t.$emit(i.UPDATEADDRESS,"收货列表更新"),t.navigateBack()):3==i.type?(t.$emit(i.ADDADDRESS,"我的处方-去下单-添加收货地址"),t.navigateBack()):4==i.type&&(t.$emit(i.CONFIRMADDRESS,"商品详情-立即购买-确认订单-添加收货地址"),t.navigateBack()))})).catch((function(i){t.hideLoading()})):2==this.type&&this.$u.get(this.addressUpdateUrl,{id:this.id,receiver:this.name,phone:this.phone,province:this.province,city:this.city,area:this.area,detail:this.address}).then((function(e){console.log(e),t.hideLoading(),0==e.status&&(i.$u.toast("编辑成功"),t.$emit(i.UPDATEADDRESSLIST,"收货列表更新"),t.navigateBack())})).catch((function(i){t.hideLoading()}))},getNowAddress:function(){t.getLocation({type:"wgs84",geocode:!0,success:function(t){this.latitude=t.latitude,this.longitude=t.longitude,console.log("精度："+t.latitude),console.log("维度："+t.longitude)},fail:function(t){console.log("当前位置获取失败："),console.log(t)}})},toMap:function(){t.navigateTo({url:"../../pages/location/location"})}}};i.default=a}).call(this,e("543d")["default"])},"18ba":function(t,i,e){"use strict";e.r(i);var n=e("09db"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=o.a},"2e27":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={tuiBottomPopup:function(){return e.e("ui/tui-bottom-popup/tui-bottom-popup").then(e.bind(null,"54a2"))}},o=function(){var t=this,i=t.$createElement;t._self._c},s=[]},6697:function(t,i,e){"use strict";e.r(i);var n=e("c000"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=o.a},"670e":function(t,i,e){"use strict";var n=e("84a2"),o=e.n(n);o.a},"6a12":function(t,i,e){"use strict";e.r(i);var n=e("2e27"),o=e("18ba");for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);e("d169");var a,r=e("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);i["default"]=u.exports},7748:function(t,i,e){},"84a2":function(t,i,e){},c000:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"myh5",props:["docId"],data:function(){return{src:"",modal:!1,loading:!1}},onLoad:function(){console.log("的粉红色"+this.docI),this.docId&&this.downloadApp()},methods:{handleClick:function(){this.modal=!1},isWeiXinBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},download:function(){window.location.href=this.h5APPPath},download2:function(){this.loading=!0,this.src=this.AppStorePath},downloadApp:function(){var t=this;this.$u.get(this.VersionPlatformUrl).then((function(i){0==i.status&&("Android"==i.msg?t.download():"iPhone"==i.msg&&t.download2())}))}}};i.default=n},d169:function(t,i,e){"use strict";var n=e("7748"),o=e.n(n);o.a},d1b7:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement;t._self._c},s=[]},f449:function(t,i,e){"use strict";(function(t){e("77c6");n(e("66fd"));var i=n(e("6a12"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},f96d:function(t,i,e){"use strict";e.r(i);var n=e("d1b7"),o=e("6697");for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);e("670e");var a,r=e("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);i["default"]=u.exports}},[["f449","common/runtime","common/vendor","ApagesA/common/vendor"]]]);