(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bill-list-bill-list","pages-myh5-myh5"],{"169b":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-34a29ac7]{width:100%}",""]),t.exports=a},"1bd7":function(t,a,i){"use strict";var e=i("28ad"),n=i.n(e);n.a},"267a":function(t,a,i){"use strict";var e=i("b656"),n=i.n(e);n.a},"28ad":function(t,a,i){var e=i("169b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("1f0a7384",e,!0,{sourceMap:!1,shadowMode:!1})},"2da7":function(t,a,i){"use strict";var e=i("c12f"),n=i.n(e);n.a},"2dae":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var e={tuiModal:i("cbe5").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"h5-view"},[e("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:i("c5b9")}}),e("v-uni-view",{staticClass:"h5-column"},[e("v-uni-view",{staticStyle:{"font-size":"34rpx",color:"#595757","font-weight":"bold"}},[t._v("尚方宝")]),e("v-uni-view",{staticStyle:{"font-size":"28rpx",color:"#AFAFAF"}},[t._v("线上咨询、挂号、复诊、购药")])],1),e("v-uni-view",{staticStyle:{flex:"1"}}),e("v-uni-view",{staticClass:"h5-open",staticStyle:{"flex-shrink":"0"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.downloadApp.apply(void 0,arguments)}}},[t._v("打开")])],1),e("tui-modal",{attrs:{width:"100%",padding:"0rpx",radius:"0rpx",show:t.modal,custom:!0},on:{cancel:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick()}}},[e("v-uni-image",{staticStyle:{width:"100%",height:"calc(100vh)"},attrs:{src:"http://www.hzsysf.com/sfb/image/51816.png",mode:"aspectFill"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}})],1),t.loading?e("v-uni-web-view",{attrs:{"webview-styles":"APP",src:t.src}}):t._e()],1)},o=[]},3009:function(t,a,i){"use strict";i.r(a);var e=i("d134"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"30ea":function(t,a,i){"use strict";i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"tuiModal",props:{show:{type:Boolean,default:!1},width:{type:String,default:"84%"},padding:{type:String,default:"40rpx 64rpx"},radius:{type:String,default:"24rpx"},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},fadeIn:{type:Boolean,default:!1},custom:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var a=t.currentTarget.dataset;this.$emit("click",{index:Number(a.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};a.default=e},"54df":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'.tui-modal-box[data-v-25d1b3a9]{position:fixed;left:50%;top:50%;margin:auto;background-color:#fff;z-index:9999998;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;box-sizing:border-box;visibility:hidden}.tui-modal-scale[data-v-25d1b3a9]{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0)}.tui-modal-normal[data-v-25d1b3a9]{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.tui-modal-show[data-v-25d1b3a9]{opacity:1;visibility:visible}.tui-modal-mask[data-v-25d1b3a9]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:9999996;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-25d1b3a9]{visibility:visible;opacity:1}.tui-modal-title[data-v-25d1b3a9]{text-align:center;font-size:%?34?%;color:#333;padding-top:%?20?%;font-weight:700}.tui-modal-content[data-v-25d1b3a9]{text-align:center;color:#999;font-size:%?28?%;padding-top:%?20?%;padding-bottom:%?60?%}.tui-mtop[data-v-25d1b3a9]{margin-top:%?30?%}.tui-mbtm[data-v-25d1b3a9]{margin-bottom:%?30?%}.tui-modalBtn-box[data-v-25d1b3a9]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-flex-column[data-v-25d1b3a9]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.tui-modal-btn[data-v-25d1b3a9]{width:46%;height:%?68?%;line-height:%?68?%;position:relative;border-radius:%?10?%;font-size:%?26?%;overflow:visible;margin-left:0;margin-right:0}.tui-modal-btn[data-v-25d1b3a9]::after{content:" ";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);left:0;top:0;border-radius:%?20?%}.tui-btn-width[data-v-25d1b3a9]{width:80%!important}.tui-primary[data-v-25d1b3a9]{background:#5677fc;color:#fff}.tui-primary-hover[data-v-25d1b3a9]{background:#4a67d6;color:#e5e5e5}.tui-primary-outline[data-v-25d1b3a9]{color:#5677fc;background:transparent}.tui-primary-outline[data-v-25d1b3a9]::after{border:1px solid #5677fc}.tui-danger[data-v-25d1b3a9]{background:#ed3f14;color:#fff}.tui-danger-hover[data-v-25d1b3a9]{background:#d53912;color:#e5e5e5}.tui-danger-outline[data-v-25d1b3a9]{color:#ed3f14;background:transparent}.tui-danger-outline[data-v-25d1b3a9]::after{border:1px solid #ed3f14}.tui-red[data-v-25d1b3a9]{background:#e41f19;color:#fff}.tui-red-hover[data-v-25d1b3a9]{background:#c51a15;color:#e5e5e5}.tui-red-outline[data-v-25d1b3a9]{color:#e41f19;background:transparent}.tui-red-outline[data-v-25d1b3a9]::after{border:1px solid #e41f19}.tui-warning[data-v-25d1b3a9]{background:#ff7900;color:#fff}.tui-warning-hover[data-v-25d1b3a9]{background:#e56d00;color:#e5e5e5}.tui-warning-outline[data-v-25d1b3a9]{color:#ff7900;background:transparent}.tui-warning-outline[data-v-25d1b3a9]::after{border:1px solid #ff7900}.tui-green[data-v-25d1b3a9]{background:#19be6b;color:#fff}.tui-green-hover[data-v-25d1b3a9]{background:#16ab60;color:#e5e5e5}.tui-green-outline[data-v-25d1b3a9]{color:#19be6b;background:transparent}.tui-green-outline[data-v-25d1b3a9]::after{border:1px solid #19be6b}.tui-white[data-v-25d1b3a9]{background:#fff;color:#333}.tui-white-hover[data-v-25d1b3a9]{background:#f7f7f9;color:#666}.tui-white-outline[data-v-25d1b3a9]{color:#333;background:transparent}.tui-white-outline[data-v-25d1b3a9]::after{border:1px solid #333}.tui-gray[data-v-25d1b3a9]{background:#ededed;color:#999}.tui-gray-hover[data-v-25d1b3a9]{background:#d5d5d5;color:#898989}.tui-gray-outline[data-v-25d1b3a9]{color:#999;background:transparent}.tui-gray-outline[data-v-25d1b3a9]::after{border:1px solid #999}.tui-outline-hover[data-v-25d1b3a9]{opacity:.6}.tui-circle-btn[data-v-25d1b3a9]{border-radius:%?40?%!important}.tui-circle-btn[data-v-25d1b3a9]::after{border-radius:%?80?%!important}',""]),t.exports=a},"57aa":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a)}}},[i("v-uni-view",{staticClass:"tui-modal-box",class:[t.fadeIn||t.show?"tui-modal-normal":"tui-modal-scale",t.show?"tui-modal-show":""],style:{width:t.width,padding:t.padding,borderRadius:t.radius}},[t.custom?i("v-uni-view",[t._t("default")],2):i("v-uni-view",[t.title?i("v-uni-view",{staticClass:"tui-modal-title"},[t._v(t._s(t.title))]):t._e(),i("v-uni-view",{staticClass:"tui-modal-content",class:[t.title?"":"tui-mtop"],style:{color:t.color,fontSize:t.size+"rpx"}},[t._v(t._s(t.content))]),i("v-uni-view",{staticClass:"tui-modalBtn-box",class:[2!=t.button.length?"tui-flex-column":""]},[t._l(t.button,(function(a,e){return[i("v-uni-button",{key:e+"_0",staticClass:"tui-modal-btn",class:["tui-"+(a.type||"primary")+(a.plain?"-outline":""),2!=t.button.length?"tui-btn-width":"",t.button.length>2?"tui-mbtm":"","circle"==t.shape?"tui-circle-btn":""],attrs:{"hover-class":"tui-"+(a.plain?"outline":a.type||"primary")+"-hover","data-index":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._v(t._s(a.text||"确定"))])]}))],2)],1)],1),i("v-uni-view",{staticClass:"tui-modal-mask",class:[t.show?"tui-mask-show":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClickCancel.apply(void 0,arguments)}}})],1)},o=[]},"60b2":function(t,a,i){"use strict";i.r(a);var e=i("95d4"),n=i("3009");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("2da7");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"720adc37",null,!1,e["a"],r);a["default"]=d.exports},6697:function(t,a,i){"use strict";i.r(a);var e=i("fea0"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"95d4":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("myh5"),e("v-uni-view",{staticClass:"column"},[e("v-uni-view",{staticClass:"remind-view"},[t._v("请您先填写以下问诊单，以便于更准确掌握您用药之后的状况")]),t._l(t.questionData,(function(a,n){return e("v-uni-view",{key:n},[0==a.questionType?e("v-uni-view",[e("v-uni-view",{staticClass:"type-title"},[e("v-uni-image",{staticStyle:{width:"4rpx",height:"22rpx"},attrs:{src:i("ff32"),mode:"aspectFill"}}),e("v-uni-view",{staticClass:"title-txt"},[t._v(t._s(n+1)+".(单选题)"+t._s(a.content))])],1),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-radio-group",{on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.radioChange.apply(void 0,arguments)}}},t._l(t.answerData[n],(function(i,n){return e("v-uni-label",{key:n,staticClass:"uni-list-cell"},[e("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#10BE62",value:a.id+"/"+n}}),e("v-uni-view",[t._v(t._s(n)+":"+t._s(i))])],1)})),1)],1)],1):t._e(),1==a.questionType?e("v-uni-view",[e("v-uni-view",{staticClass:"type-title"},[e("v-uni-image",{staticStyle:{width:"4rpx",height:"22rpx"},attrs:{src:i("ff32"),mode:"aspectFill"}}),e("v-uni-view",{staticClass:"title-txt"},[t._v(t._s(n+1)+".(多选题)"+t._s(a.content))])],1),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-checkbox-group",{on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.moreAnswerData[n],(function(i,n,o){return e("v-uni-label",{key:i.value,staticClass:"tui-checkbox"},[e("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:a.id+"*"+n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.aaa(a.id)}}}),e("v-uni-view",[t._v(t._s(n)+":"+t._s(i))])],1)})),1)],1)],1):t._e(),2==a.questionType?e("v-uni-view",[e("v-uni-view",{staticClass:"type-title"},[e("v-uni-image",{staticStyle:{width:"4rpx",height:"22rpx"},attrs:{src:i("ff32"),mode:"aspectFill"}}),e("v-uni-view",{staticClass:"title-txt"},[t._v(t._s(n+1)+"."+t._s(a.content))])],1),e("v-uni-view",{staticClass:"type2-border"},[e("v-uni-input",{staticClass:"ipnoe-input",attrs:{type:"text",placeholder:"请在这里输入症状情况",maxlength:"300"},on:{blur:function(a){arguments[0]=a=t.$handleEvent(a),t.easyBlur.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.easyInput(a.id)}}})],1)],1):t._e()],1)})),e("v-uni-view",{staticClass:"update",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toUp()}}},[t._v("提交")])],2)],1)},o=[]},a231:function(t,a,i){"use strict";i.r(a);var e=i("30ea"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},aad7:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-720adc37]{background-color:#fff}.column[data-v-720adc37]{width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?24?%}.radio-img[data-v-720adc37]{width:%?40?%;height:%?40?%;margin-right:%?12?%}.remind-view[data-v-720adc37]{background-color:#fbf1e8;padding:%?40?%;font-size:%?26?%;color:#db7820;border-radius:%?14?%;margin-bottom:%?60?%}.type-title[data-v-720adc37]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.title-txt[data-v-720adc37]{font-size:%?30?%;color:#595757;margin-left:%?10?%}.update[data-v-720adc37]{margin-top:%?160?%;background-color:#10be62;padding-top:%?20?%;padding-bottom:%?20?%;width:%?703?%;font-size:%?34?%;color:#fff;border-radius:%?50?%;text-align:center}.type2-border[data-v-720adc37]{border:%?1?% solid #d1d1d1;width:100%;border-radius:%?14?%;padding:%?40?%;margin-top:%?30?%;margin-bottom:%?60?%}.ipnoe-input[data-v-720adc37]{font-size:%?30?%}.uni-list[data-v-720adc37]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:%?30?%;margin-bottom:%?60?%}.uni-list-cell[data-v-720adc37]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.tui-box-upload[data-v-720adc37]{margin-top:%?24?%;padding-left:%?25?%;box-sizing:border-box}body.?%PAGE?%[data-v-720adc37]{background-color:#fff}",""]),t.exports=a},b656:function(t,a,i){var e=i("54df");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("44c41b28",e,!0,{sourceMap:!1,shadowMode:!1})},c12f:function(t,a,i){var e=i("aad7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("b4718b3c",e,!0,{sourceMap:!1,shadowMode:!1})},c5b9:function(t,a,i){t.exports=i.p+"static/img/logo.e5d838af.png"},cbe5:function(t,a,i){"use strict";i.r(a);var e=i("57aa"),n=i("a231");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("267a");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"25d1b3a9",null,!1,e["a"],r);a["default"]=d.exports},d134:function(t,a,i){"use strict";var e=i("4ea4");i("a434"),i("ac1f"),i("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("f96d")),o={components:{myh5:n.default},onLoad:function(t){this.recordId=t.recordId,this.getQuesTionListData()},data:function(){return{recordId:"",questionData:"",data:"",current:0,answerData:[],moreAnswerData:[],tapQuestion:"",easyQuestion:"",paramList:[]}},methods:{aaa:function(t){this.tapQuestion=t},easyInput:function(t){this.easyQuestion=t},easyBlur:function(t){if(console.log("失去焦点"),console.log(this.easyQuestion),console.log(t),this.$u.test.isEmpty(t.detail.value))for(var a=0;a<this.paramList.length;a++)this.paramList[a].question==this.easyQuestion&&this.paramList.splice(a,1);else{var i={question:"",answer:""};if(i.question=this.easyQuestion,i.answer=t.detail.value,0==this.paramList.length)this.paramList.push(i);else{for(a=0;a<this.paramList.length;a++)this.paramList[a].question==i.question&&this.paramList.splice(a,1);this.paramList.push(i)}}},getQuesTionListData:function(){var t=this;uni.showLoading(),this.$u.get(this.questionInterDetailUrl,{batchNo:this.recordId}).then((function(a){if(console.log(a),uni.hideLoading(),0==a.status){t.data=a.data,t.questionData=a.data.questionVos;for(var i=0;i<t.questionData.length;i++)0==t.questionData[i].questionType?t.answerData.push(JSON.parse(t.questionData[i].answerChoose)):t.answerData.push(null),1==t.questionData[i].questionType?t.moreAnswerData.push(JSON.parse(t.questionData[i].answerChoose)):t.moreAnswerData.push(null)}})).catch((function(t){uni.hideLoading()}))},checkboxChange:function(t){var a=t.detail.value;if(this.$u.test.isEmpty(t.detail.value))for(var i=0;i<this.paramList.length;i++)this.paramList[i].question==this.tapQuestion&&this.paramList.splice(i,1);else{var e="",n="";for(i=0;i<a.length;i++){var o=a[i].split("*");e+=o[1],n=o[0]}var r={question:"",answer:""};if(r.question=n,r.answer=e,0==this.paramList.length)this.paramList.push(r);else{for(i=0;i<this.paramList.length;i++)this.paramList[i].question==r.question&&this.paramList.splice(i,1);this.paramList.push(r)}}},radioChange:function(t){var a=t.target.value,i=a.split("/"),e={question:"",answer:""};if(e.question=i[0],e.answer=i[1],0==this.paramList.length)this.paramList.push(e);else{for(var n=0;n<this.paramList.length;n++)this.paramList[n].question==e.question&&this.paramList.splice(n,1);this.paramList.push(e)}},toUp:function(){var t=this;if(this.data.answerFlag)this.$u.toast("请勿重复提交");else if(this.$u.test.isEmpty(this.paramList))this.$u.toast("请先回答问诊单问题");else{for(var a="",i=0;i<this.paramList.length;i++)i!=this.paramList.length-1?a+=this.paramList[i].question+":"+this.paramList[i].answer+"-":a+=this.paramList[i].question+":"+this.paramList[i].answer;console.log("要上传的问诊单id"+this.recordId),console.log("要上传的问题"+a),this.$u.get(this.questionInterAnswerUrl,{batchNo:this.recordId,param:a}).then((function(a){console.log("我走到成功了"),0==a.status&&(t.$u.toast(a.msg),uni.$emit(t.INFORMCHATLIST,""),uni.navigateBack())})).catch((function(a){1==a.data.status&&t.$u.toast(a.data.msg)}))}}}};a.default=o},f96d:function(t,a,i){"use strict";i.r(a);var e=i("2dae"),n=i("6697");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("1bd7");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"34a29ac7",null,!1,e["a"],r);a["default"]=d.exports},fea0:function(t,a,i){"use strict";i("ac1f"),i("466d"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"myh5",props:["docId"],data:function(){return{src:"",modal:!1,loading:!1}},onLoad:function(){console.log("的粉红色"+this.docI),this.docId&&this.downloadApp()},methods:{handleClick:function(){this.modal=!1},isWeiXinBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},download:function(){window.location.href=this.h5APPPath},download2:function(){this.loading=!0,this.src=this.AppStorePath},downloadApp:function(){var t=this;this.$u.get(this.VersionPlatformUrl).then((function(a){0==a.status&&("Android"==a.msg?t.download():"iPhone"==a.msg&&t.download2())}))}}};a.default=e},ff32:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAWAgMAAACagdV9AAAADFBMVEUQvmIQvmIQvmIQvmJqWSveAAAAA3RSTlPmSklSjzZ3AAAAE0lEQVQI12NoYrBh+E8YAlU5AgCrFhMqa+Z8EgAAAABJRU5ErkJggg=="}}]);