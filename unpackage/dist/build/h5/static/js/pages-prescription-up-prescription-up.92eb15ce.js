(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-prescription-up-prescription-up","pages-myh5-myh5"],{"169b":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-34a29ac7]{width:100%}",""]),t.exports=a},"1bd7":function(t,a,i){"use strict";var e=i("28ad"),n=i.n(e);n.a},"267a":function(t,a,i){"use strict";var e=i("b656"),n=i.n(e);n.a},"28ad":function(t,a,i){var e=i("169b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("1f0a7384",e,!0,{sourceMap:!1,shadowMode:!1})},"2dae":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var e={tuiModal:i("cbe5").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"h5-view"},[e("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:i("c5b9")}}),e("v-uni-view",{staticClass:"h5-column"},[e("v-uni-view",{staticStyle:{"font-size":"34rpx",color:"#595757","font-weight":"bold"}},[t._v("尚方宝")]),e("v-uni-view",{staticStyle:{"font-size":"28rpx",color:"#AFAFAF"}},[t._v("线上咨询、挂号、复诊、购药")])],1),e("v-uni-view",{staticStyle:{flex:"1"}}),e("v-uni-view",{staticClass:"h5-open",staticStyle:{"flex-shrink":"0"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.downloadApp.apply(void 0,arguments)}}},[t._v("打开")])],1),e("tui-modal",{attrs:{width:"100%",padding:"0rpx",radius:"0rpx",show:t.modal,custom:!0},on:{cancel:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick()}}},[e("v-uni-image",{staticStyle:{width:"100%",height:"calc(100vh)"},attrs:{src:"http://www.hzsysf.com/sfb/image/51816.png",mode:"aspectFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}})],1),t.loading?e("v-uni-web-view",{attrs:{"webview-styles":"APP",src:t.src}}):t._e()],1)},o=[]},"30ea":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"tuiModal",props:{show:{type:Boolean,default:!1},width:{type:String,default:"84%"},padding:{type:String,default:"40rpx 64rpx"},radius:{type:String,default:"24rpx"},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},fadeIn:{type:Boolean,default:!1},custom:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var a=t.currentTarget.dataset;this.$emit("click",{index:Number(a.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};a.default=e},"32d8":function(t,a,i){"use strict";i.r(a);var e=i("b393"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"44e9":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAIVBMVEUAAAB0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHTSxkjpAAAACnRSTlMAwhUZbLgiukgvLY69JwAAAHBJREFUKM9jGHDA5gyhmd1gIizLFcC04hKYCLNUEYhikhKGazNcaAAlQQAqC1IphGS2IlDacCHYNIQiqBKEoqWtECUIRVGrgtBcOWvVBAZMNWjmtEPNwbQL0z2YbkYoYUAoAsui+Z1lITx8MMNwEAIAuiQXIeNFlCkAAAAASUVORK5CYII="},"538a":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAKlBMVEUQvmIAAAAQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIocpWUAAAADXRSTlMaAOsYEQgM7Xooo/ShioJZpQAAAVdJREFUSMetlj1Ow0AQhZ+wEwRUVrwSJaJEFBuFA6yFKOhiCVGnoecCFHSUFBwAcQJuQ7V3wYodxzNr502RV1nWp52fnZ0ZFELP9yus7l7kT8E8ebTKHiYYF7BXXo8xzmOobA8hQVIIypAwp5gNUs0lU2JMlWDCKJMPmQXGtRwwfoLJekYfow9C4k3qEVRQWlXHrDGtWcfgkFqmVB4EbQza1NnHpzYGnZzz+K1ThMJB6CL+QqguoBN4Gl91GqEjP4lXOnoUgTB5w4AwDeEoU6OkTIUFZZZYU2ZmYjaUmSNQJodXVd4wPmHoOVnPPP5cb/UW/9qPm6+e2ekyar1jJ8+ZaVu3vS2Tz4HHbsmh5S6Ode+WGrPUqqnm+duxvUH+lo09gfcW3qPMvY73TN57eQ+3zwI+U/hs4jOOz0r7zOWzm+8AfJfgOwnfbcw7kn3XGsp1O1st/v4DnE6GafzYofYAAAAASUVORK5CYII="},"54df":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.tui-modal-box[data-v-25d1b3a9]{position:fixed;left:50%;top:50%;margin:auto;background-color:#fff;z-index:9999998;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;box-sizing:border-box;visibility:hidden}.tui-modal-scale[data-v-25d1b3a9]{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0)}.tui-modal-normal[data-v-25d1b3a9]{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.tui-modal-show[data-v-25d1b3a9]{opacity:1;visibility:visible}.tui-modal-mask[data-v-25d1b3a9]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:9999996;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-25d1b3a9]{visibility:visible;opacity:1}.tui-modal-title[data-v-25d1b3a9]{text-align:center;font-size:%?34?%;color:#333;padding-top:%?20?%;font-weight:700}.tui-modal-content[data-v-25d1b3a9]{text-align:center;color:#999;font-size:%?28?%;padding-top:%?20?%;padding-bottom:%?60?%}.tui-mtop[data-v-25d1b3a9]{margin-top:%?30?%}.tui-mbtm[data-v-25d1b3a9]{margin-bottom:%?30?%}.tui-modalBtn-box[data-v-25d1b3a9]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-flex-column[data-v-25d1b3a9]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.tui-modal-btn[data-v-25d1b3a9]{width:46%;height:%?68?%;line-height:%?68?%;position:relative;border-radius:%?10?%;font-size:%?26?%;overflow:visible;margin-left:0;margin-right:0}.tui-modal-btn[data-v-25d1b3a9]::after{content:" ";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);left:0;top:0;border-radius:%?20?%}.tui-btn-width[data-v-25d1b3a9]{width:80%!important}.tui-primary[data-v-25d1b3a9]{background:#5677fc;color:#fff}.tui-primary-hover[data-v-25d1b3a9]{background:#4a67d6;color:#e5e5e5}.tui-primary-outline[data-v-25d1b3a9]{color:#5677fc;background:transparent}.tui-primary-outline[data-v-25d1b3a9]::after{border:1px solid #5677fc}.tui-danger[data-v-25d1b3a9]{background:#ed3f14;color:#fff}.tui-danger-hover[data-v-25d1b3a9]{background:#d53912;color:#e5e5e5}.tui-danger-outline[data-v-25d1b3a9]{color:#ed3f14;background:transparent}.tui-danger-outline[data-v-25d1b3a9]::after{border:1px solid #ed3f14}.tui-red[data-v-25d1b3a9]{background:#e41f19;color:#fff}.tui-red-hover[data-v-25d1b3a9]{background:#c51a15;color:#e5e5e5}.tui-red-outline[data-v-25d1b3a9]{color:#e41f19;background:transparent}.tui-red-outline[data-v-25d1b3a9]::after{border:1px solid #e41f19}.tui-warning[data-v-25d1b3a9]{background:#ff7900;color:#fff}.tui-warning-hover[data-v-25d1b3a9]{background:#e56d00;color:#e5e5e5}.tui-warning-outline[data-v-25d1b3a9]{color:#ff7900;background:transparent}.tui-warning-outline[data-v-25d1b3a9]::after{border:1px solid #ff7900}.tui-green[data-v-25d1b3a9]{background:#19be6b;color:#fff}.tui-green-hover[data-v-25d1b3a9]{background:#16ab60;color:#e5e5e5}.tui-green-outline[data-v-25d1b3a9]{color:#19be6b;background:transparent}.tui-green-outline[data-v-25d1b3a9]::after{border:1px solid #19be6b}.tui-white[data-v-25d1b3a9]{background:#fff;color:#333}.tui-white-hover[data-v-25d1b3a9]{background:#f7f7f9;color:#666}.tui-white-outline[data-v-25d1b3a9]{color:#333;background:transparent}.tui-white-outline[data-v-25d1b3a9]::after{border:1px solid #333}.tui-gray[data-v-25d1b3a9]{background:#ededed;color:#999}.tui-gray-hover[data-v-25d1b3a9]{background:#d5d5d5;color:#898989}.tui-gray-outline[data-v-25d1b3a9]{color:#999;background:transparent}.tui-gray-outline[data-v-25d1b3a9]::after{border:1px solid #999}.tui-outline-hover[data-v-25d1b3a9]{opacity:.6}.tui-circle-btn[data-v-25d1b3a9]{border-radius:%?40?%!important}.tui-circle-btn[data-v-25d1b3a9]::after{border-radius:%?80?%!important}',""]),t.exports=a},"57aa":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a)}}},[i("v-uni-view",{staticClass:"tui-modal-box",class:[t.fadeIn||t.show?"tui-modal-normal":"tui-modal-scale",t.show?"tui-modal-show":""],style:{width:t.width,padding:t.padding,borderRadius:t.radius}},[t.custom?i("v-uni-view",[t._t("default")],2):i("v-uni-view",[t.title?i("v-uni-view",{staticClass:"tui-modal-title"},[t._v(t._s(t.title))]):t._e(),i("v-uni-view",{staticClass:"tui-modal-content",class:[t.title?"":"tui-mtop"],style:{color:t.color,fontSize:t.size+"rpx"}},[t._v(t._s(t.content))]),i("v-uni-view",{staticClass:"tui-modalBtn-box",class:[2!=t.button.length?"tui-flex-column":""]},[t._l(t.button,(function(a,e){return[i("v-uni-button",{key:e+"_0",staticClass:"tui-modal-btn",class:["tui-"+(a.type||"primary")+(a.plain?"-outline":""),2!=t.button.length?"tui-btn-width":"",t.button.length>2?"tui-mbtm":"","circle"==t.shape?"tui-circle-btn":""],attrs:{"hover-class":"tui-"+(a.plain?"outline":a.type||"primary")+"-hover","data-index":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._v(t._s(a.text||"确定"))])]}))],2)],1)],1),i("v-uni-view",{staticClass:"tui-modal-mask",class:[t.show?"tui-mask-show":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClickCancel.apply(void 0,arguments)}}})],1)},o=[]},6697:function(t,a,i){"use strict";i.r(a);var e=i("fea0"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"7c28":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-2757b814]{background-color:#fff}.column[data-v-2757b814]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.line[data-v-2757b814]{width:100%;height:%?2?%;background-color:#f9f9f9}.top-row[data-v-2757b814]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding-left:%?24?%;padding-right:%?24?%;padding-top:%?52?%;-webkit-align-self:flex-start;align-self:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.txt-name[data-v-2757b814]{font-size:%?30?%;color:#595757;margin-left:%?10?%}.div[data-v-2757b814]{width:%?700?%;height:%?334?%;position:relative;border:%?1?% dashed #f0f0f0;border-radius:%?10?%;margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.update[data-v-2757b814]{margin-top:%?400?%;background-color:#10be62;padding-top:%?20?%;padding-bottom:%?20?%;width:%?703?%;font-size:%?34?%;color:#fff;border-radius:%?50?%;text-align:center}.add-img[data-v-2757b814]{width:%?72?%;height:%?72?%}.img-set[data-v-2757b814]{width:%?600?%;height:%?300?%}.img-dele[data-v-2757b814]{width:%?40?%;position:absolute;top:%?10?%;left:%?650?%;height:%?40?%}body.?%PAGE?%[data-v-2757b814]{background-color:#fff}",""]),t.exports=a},8538:function(t,a,i){var e=i("7c28");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("2d9ee12f",e,!0,{sourceMap:!1,shadowMode:!1})},a231:function(t,a,i){"use strict";i.r(a);var e=i("30ea"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},a7fe:function(t,a,i){"use strict";var e=i("8538"),n=i.n(e);n.a},b393:function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("f96d")),o={components:{myh5:n.default},onLoad:function(t){var a=this;this.type=t.type,this.getPatient(),uni.$on(this.UPPATIENT,(function(t){a.patientData=t}))},onUnload:function(){uni.$off(this.UPPATIENT)},data:function(){return{type:"",isShow:!1,imageUrl:"",patientData:""}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"../need-update-user/need-update-user?type=3&userData="+encodeURIComponent(JSON.stringify(this.patientData))})},methods:{upPrescription:function(){this.$u.test.isEmpty(this.imageUrl)?this.$u.toast("请先上传图片"):this.upImg()},upImg:function(){var t=this,a=this;uni.showLoading(),uni.uploadFile({url:a.firstUploadUrl,method:"POST",header:{"Content-Type":"multipart/form-data",token:uni.getStorageSync("token")},filePath:this.imageUrl,name:"firstCaseFile",formData:{patientId:this.patientData.id},success:function(i){uni.hideLoading(),console.log("上传成功"),console.log(i),1==a.type?(uni.$emit(t.ISSHOWFIRSTDATA,"首页存在病例更新展示"),uni.navigateBack()):2==a.type&&(uni.$emit(t.UPADMINISTRATIONLIST,"更新复诊管理列表"),uni.navigateBack())},fail:function(){uni.hideLoading()}})},getPatient:function(){var t=this;this.$u.get(this.patientDefaultUrl).then((function(a){console.log("默认就诊人"),console.log(a),0==a.status&&(t.patientData=a.data)}))},goRegistration:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],success:function(a){t.isShow=!0,console.log("回调图片路径"),t.imageUrl=a.tempFilePaths[0],console.log(JSON.stringify(a.tempFilePaths[0]))}})},clean:function(){this.isShow=!1,this.imageUrl=""}}};a.default=o},b656:function(t,a,i){var e=i("54df");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("44c41b28",e,!0,{sourceMap:!1,shadowMode:!1})},c5b9:function(t,a,i){t.exports=i.p+"static/img/logo.e5d838af.png"},cbe5:function(t,a,i){"use strict";i.r(a);var e=i("57aa"),n=i("a231");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("267a");var r,d=i("f0c5"),l=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"25d1b3a9",null,!1,e["a"],r);a["default"]=l.exports},ee24:function(t,a,i){"use strict";i.r(a);var e=i("efdc"),n=i("32d8");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("a7fe");var r,d=i("f0c5"),l=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"2757b814",null,!1,e["a"],r);a["default"]=l.exports},efdc:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("myh5"),e("v-uni-view",{staticClass:"column"},[e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"top-row"},[e("v-uni-image",{staticStyle:{width:"4rpx",height:"22rpx"},attrs:{mode:"aspectFill",src:i("ff32")}}),e("v-uni-view",{staticClass:"txt-name"},[t._v("请上传"+t._s(t.patientData.name)+"在医疗机构的首诊处方单")])],1),e("v-uni-view",{staticClass:"div"},[t.isShow?t._e():e("v-uni-image",{staticClass:"add-img",attrs:{src:i("538a"),mode:"aspectFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goRegistration()}}}),t.isShow?e("v-uni-view",[e("v-uni-image",{staticClass:"img-set",attrs:{src:t.imageUrl,mode:"aspectFit"}}),e("v-uni-image",{staticClass:"img-dele",attrs:{src:i("44e9"),mode:"aspectFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clean()}}})],1):t._e()],1),e("v-uni-view",{staticClass:"update",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.$dianji(t.upPrescription)}}},[t._v("提交")])],1)],1)},o=[]},f96d:function(t,a,i){"use strict";i.r(a);var e=i("2dae"),n=i("6697");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("1bd7");var r,d=i("f0c5"),l=Object(d["a"])(n["default"],e["b"],e["c"],!1,null,"34a29ac7",null,!1,e["a"],r);a["default"]=l.exports},fea0:function(t,a,i){"use strict";i("ac1f"),i("466d"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"myh5",props:["docId"],data:function(){return{src:"",modal:!1,loading:!1}},onLoad:function(){console.log("的粉红色"+this.docI),this.docId&&this.downloadApp()},methods:{handleClick:function(){this.modal=!1},isWeiXinBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},download:function(){window.location.href=this.h5APPPath},download2:function(){this.loading=!0,this.src=this.AppStorePath},downloadApp:function(){var t=this;this.$u.get(this.VersionPlatformUrl).then((function(a){0==a.status&&("Android"==a.msg?t.download():"iPhone"==a.msg&&t.download2())}))}}};a.default=e},ff32:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAWAgMAAACagdV9AAAADFBMVEUQvmIQvmIQvmIQvmJqWSveAAAAA3RSTlPmSklSjzZ3AAAAE0lEQVQI12NoYrBh+E8YAlU5AgCrFhMqa+Z8EgAAAABJRU5ErkJggg=="}}]);