(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/need-up/need-up"],{"17cc":function(t,n,e){"use strict";e.r(n);var a=e("fb91"),o=e("6bd5");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("8005");var u,r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},"4b6a":function(t,n,e){"use strict";(function(t){e("77c6");a(e("66fd"));var n=a(e("17cc"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},6697:function(t,n,e){"use strict";e.r(n);var a=e("c000"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"670e":function(t,n,e){"use strict";var a=e("84a2"),o=e.n(a);o.a},"68cd":function(t,n,e){},"6bd5":function(t,n,e){"use strict";e.r(n);var a=e("f50c"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},8005:function(t,n,e){"use strict";var a=e("68cd"),o=e.n(a);o.a},"84a2":function(t,n,e){},c000:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"myh5",props:["docId"],data:function(){return{src:"",modal:!1,loading:!1}},onLoad:function(){console.log("的粉红色"+this.docI),this.docId&&this.downloadApp()},methods:{handleClick:function(){this.modal=!1},isWeiXinBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},download:function(){window.location.href=this.h5APPPath},download2:function(){this.loading=!0,this.src=this.AppStorePath},downloadApp:function(){var t=this;this.$u.get(this.VersionPlatformUrl).then((function(n){0==n.status&&("Android"==n.msg?t.download():"iPhone"==n.msg&&t.download2())}))}}};n.default=a},d1b7:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},f50c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("f96d"));function o(t){return t&&t.__esModule?t:{default:t}}var i={components:{myh5:a.default},onLoad:function(n){var e=this;this.getPatientDefault(),t.$on(this.UPDATEUSER,(function(t){e.patientData=t})),t.$on(this.NEEDADDPATIENT,(function(t){e.getPatientDefault()}))},onUnload:function(){t.$off(this.UPDATEUSER)},data:function(){return{otherState:!1,symptom:"",patientData:{}}},methods:{toPerson:function(){t.navigateTo({url:"../../ApagesA/authentication/authentication?type=4"})},upUser:function(){t.navigateTo({url:"../need-update-user/need-update-user?type=1&userData="+encodeURIComponent(JSON.stringify(this.patientData))})},getPatientDefault:function(){var t=this;this.$u.get(this.patientDefaultUrl).then((function(n){console.log("默认就诊人"),console.log(n),0==n.status&&(t.patientData=n.data)})).catch((function(n){4==n.data.status&&(t.patientData=null)}))},isState:function(t){t||(this.otherState=!this.otherState)},toPay:function(){t.navigateTo({url:"../need-pay/need-pay"})},confirmUp:function(){var n=this;if(this.$u.test.isEmpty(this.symptom))this.$u.toast("请输入您的症状");else{var e=this.otherState?1:0;this.$u.get(this.needSubmitSymptomUrl,{patientId:this.patientData.id,symptom:this.symptom,otherState:e}).then((function(e){console.log(e),0==e.status&&(n.$u.toast(e.msg),t.$emit(n.SUBMITNEED,"提交需求单通知"),t.navigateTo({url:"../need-record/need-record"}))})).catch((function(t){n.$u.toast(t.data.msg)}))}}}};n.default=i}).call(this,e("543d")["default"])},f96d:function(t,n,e){"use strict";e.r(n);var a=e("d1b7"),o=e("6697");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("670e");var u,r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},fb91:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement;t._self._c},i=[]}},[["4b6a","common/runtime","common/vendor"]]]);