(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-confirm-shop-confirm","pages-myh5-myh5"],{"169b":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-34a29ac7]{width:100%}",""]),t.exports=i},"1bd7":function(t,i,a){"use strict";var e=a("28ad"),o=a.n(e);o.a},"267a":function(t,i,a){"use strict";var e=a("b656"),o=a.n(e);o.a},"28ad":function(t,i,a){var e=a("169b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("1f0a7384",e,!0,{sourceMap:!1,shadowMode:!1})},"2dae":function(t,i,a){"use strict";a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var e={tuiModal:a("cbe5").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"h5-view"},[e("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:a("c5b9")}}),e("v-uni-view",{staticClass:"h5-column"},[e("v-uni-view",{staticStyle:{"font-size":"34rpx",color:"#595757","font-weight":"bold"}},[t._v("尚方宝")]),e("v-uni-view",{staticStyle:{"font-size":"28rpx",color:"#AFAFAF"}},[t._v("线上咨询、挂号、复诊、购药")])],1),e("v-uni-view",{staticStyle:{flex:"1"}}),e("v-uni-view",{staticClass:"h5-open",staticStyle:{"flex-shrink":"0"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.downloadApp.apply(void 0,arguments)}}},[t._v("打开")])],1),e("tui-modal",{attrs:{width:"100%",padding:"0rpx",radius:"0rpx",show:t.modal,custom:!0},on:{cancel:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick()}}},[e("v-uni-image",{staticStyle:{width:"100%",height:"calc(100vh)"},attrs:{src:"http://www.hzsysf.com/sfb/image/51816.png",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick.apply(void 0,arguments)}}})],1),t.loading?e("v-uni-web-view",{attrs:{"webview-styles":"APP",src:t.src}}):t._e()],1)},n=[]},"30ea":function(t,i,a){"use strict";a("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"tuiModal",props:{show:{type:Boolean,default:!1},width:{type:String,default:"84%"},padding:{type:String,default:"40rpx 64rpx"},radius:{type:String,default:"24rpx"},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},fadeIn:{type:Boolean,default:!1},custom:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var i=t.currentTarget.dataset;this.$emit("click",{index:Number(i.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};i.default=e},"3b12":function(t,i,a){var e=a("5403");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("2072686e",e,!0,{sourceMap:!1,shadowMode:!1})},4297:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAllBMVEUAAAAarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsarOsZugwUAAAAMXRSTlMA+9U4aacTCwdLzhfJHbMnLxD17sG3224z88SuoZSQRbt6YCGaUufjdnJXPImDZal8r9wb9wAAAr5JREFUSMetl+l6ojAUhg/YAmERRAFlF3Gr1jb3f3PTgJqEpMRh5v1HeL4nOWtOQIZlOtWpnae2rrvz9lw5JrzKIjiloYYpWrg6+4tXpAaqsQQtQoZSurfxb7hofPdZhMfIgpFtT1iBlvy2ufeF1eSeVLt28SusfJm5MX4NWzQ8oFqleri35+LXSR0+H+f4b8gsVvyNZcyLosilf86sszQso8tH6Z9NQA9dYynENE918A8sx6NiAfQoQR3L2QHA7rd43Ut8zznpjUL+m8w3F5Kqt3jFrn2AiNS8eWd1wB/nnUK8bTDfNldgPtl4i7HCZjkJMYqeWu1t7twmgLMZEY/tvFwAoOHidfbDmmARq2YPWjzgAkBNVvg7F40W1w76gLbP/wMeUAJEWEUJhEbMbwBlF1giojXF2qwBhMTWep7fsdGdeileAgAxr1xGnw1C6HaNjvf7KgLCSVIbg52P3wa9KYMkO26wlpCvnS2KXc5mbe6AtXB+MO4FZ6J81XW7m6yDc97OLAMV6TEMD3aeBAZQfFvWTdg4656TsqdK/Oedjg6aLIQ0w7StNaiRTbl+bB+UuuDuhMntg1+Jt+Ienuzf9XCY285jxZYkUepx80ZSx1xV0Xq2xS7q7rr8mDGeu6ZLWs+0k8SOHw5i0WnRMvxk5LDP9d5ktoeFDXxyOd0avaOJ6zi5t41+Fn1g+5C7sArt6aq699VbePf89QIMVVFa/TmYwDXZkSjjr1v3b1cygbtWILKIn5EGgMtte2qCPjkbdxD3aqyZt8zZvCYTb8dCkJs1LauiWTum4V/eSror70ZEheL9HK+i2j6OdJacyBWTwYg88/5hJomM6dPQygCe9YQ5bMIE6AbTZ8/Unz71th7IMbbqeducPOnP15PfGLb6ieKoXzfqd5XGCDe18l3Fv+jOxf1FV5AXnQX/nT+LsJ14JAEDUgAAAABJRU5ErkJggg=="},"44e9":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAIVBMVEUAAAB0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHTSxkjpAAAACnRSTlMAwhUZbLgiukgvLY69JwAAAHBJREFUKM9jGHDA5gyhmd1gIizLFcC04hKYCLNUEYhikhKGazNcaAAlQQAqC1IphGS2IlDacCHYNIQiqBKEoqWtECUIRVGrgtBcOWvVBAZMNWjmtEPNwbQL0z2YbkYoYUAoAsui+Z1lITx8MMNwEAIAuiQXIeNFlCkAAAAASUVORK5CYII="},5403:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-1c120d18]{background-color:#f9f9f9}.view[data-v-1c120d18]{padding-left:%?24?%;padding-right:%?24?%}.card[data-v-1c120d18]{background-color:#fff;border-radius:%?20?%;padding-top:%?40?%;padding-bottom:%?40?%;padding-left:%?30?%;padding-right:%?30?%;width:%?700?%;margin-top:%?24?%}.row[data-v-1c120d18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.column[data-v-1c120d18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.center-column[data-v-1c120d18]{margin-left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative}.item-row[data-v-1c120d18]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.item-row2[data-v-1c120d18]{position:absolute;top:80%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.shop-title[data-v-1c120d18]{font-size:%?30?%;color:#575757;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-line-clamp:3; /*可设置显示的行数\r\n */line-clamp:3;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis; /*省略号\r\n */display:-webkit-box;-webkit-box-orient:vertical}.shop-price[data-v-1c120d18]{-webkit-flex-shrink:0;flex-shrink:0;font-size:%?30?%;color:#575757;margin-left:%?30?%}.shop-spec[data-v-1c120d18]{font-size:%?26?%;color:#595757;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.shop-num[data-v-1c120d18]{font-size:%?26?%;color:#afafaf}.center-row[data-v-1c120d18]{margin-top:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.txt-26[data-v-1c120d18]{font-size:%?26?%;color:#595757}.txt-30-pricre[data-v-1c120d18]{font-size:%?30?%;color:#ec5353;font-weight:700}.view-top[data-v-1c120d18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.txt-name[data-v-1c120d18]{margin-left:%?22?%;font-size:%?30?%;color:#595757}.txt-address[data-v-1c120d18]{margin-left:%?50?%;font-size:%?30?%;color:#afafaf;margin-top:%?15?%}.bottom-view[data-v-1c120d18]{height:%?100?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-top:#f9f9f9 %?2?% solid}.back[data-v-1c120d18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh);width:100%;background-color:#f9f9f9}.button[data-v-1c120d18]{font-size:%?30?%;background-color:#10be62;border-radius:%?50?%;height:%?60?%;color:#fff;padding-left:%?24?%;padding-right:%?24?%;margin-left:%?24?%;margin-right:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.txt-22[data-v-1c120d18]{font-size:%?22?%;color:#afafaf}.txt-26-af[data-v-1c120d18]{font-size:%?26?%;color:#afafaf;margin-right:%?24?%}\r\n/* start底部弹出框支付方式选择 */.bottom-top[data-v-1c120d18]{background-color:#fff;border-top-left-radius:%?24?%;border-top-right-radius:%?24?%;position:relative;border:%?1?% solid #f9f9f9;padding-left:%?24?%;padding-right:%?24?%;padding-top:%?40?%;padding-bottom:%?40?%}.p-title[data-v-1c120d18]{font-size:%?30?%;color:#595757;font-weight:700;width:100%;text-align:center}.b-delete[data-v-1c120d18]{width:%?40?%;height:%?40?%;top:%?0?%;margin-left:%?24?%;margin-top:%?40?%;left:%?0?%;position:absolute}.line[data-v-1c120d18]{background-color:#f9f9f9;height:%?2?%;width:100%}.p-price[data-v-1c120d18]{font-size:%?44?%;color:#f1374d;width:100%;text-align:center;margin-top:%?110?%;margin-bottom:%?110?%}.p-way[data-v-1c120d18]{font-size:%?26?%;color:#afafaf;margin-left:%?24?%}.b-item-row[data-v-1c120d18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?45?%;margin-right:%?45?%;margin-top:%?30?%}.b-item-title[data-v-1c120d18]{font-size:%?28?%;color:#595757;margin-left:%?24?%;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.view-b[data-v-1c120d18]{padding-left:%?24?%;padding-right:%?24?%;padding-top:%?50?%;padding-bottom:%?40?%}.p-button[data-v-1c120d18]{width:%?700?%;font-size:%?34?%;color:#fff;background-color:#10be62;border-radius:%?50?%;text-align:center;padding:%?21?%;-webkit-align-self:center;align-self:center}\r\n/* end 底部弹出框支付方式选择 */.clinic-txt[data-v-1c120d18]{font-size:%?32?%;color:#000;font-weight:700}body.?%PAGE?%[data-v-1c120d18]{background-color:#f9f9f9}",""]),t.exports=i},"54a2":function(t,i,a){"use strict";a.r(i);var e=a("552a"),o=a("a594");for(var n in o)"default"!==n&&function(t){a.d(i,t,(function(){return o[t]}))}(n);a("5748");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"413dcc8c",null,!1,e["a"],r);i["default"]=d.exports},"54df":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'.tui-modal-box[data-v-25d1b3a9]{position:fixed;left:50%;top:50%;margin:auto;background-color:#fff;z-index:9999998;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;box-sizing:border-box;visibility:hidden}.tui-modal-scale[data-v-25d1b3a9]{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0)}.tui-modal-normal[data-v-25d1b3a9]{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.tui-modal-show[data-v-25d1b3a9]{opacity:1;visibility:visible}.tui-modal-mask[data-v-25d1b3a9]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:9999996;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-25d1b3a9]{visibility:visible;opacity:1}.tui-modal-title[data-v-25d1b3a9]{text-align:center;font-size:%?34?%;color:#333;padding-top:%?20?%;font-weight:700}.tui-modal-content[data-v-25d1b3a9]{text-align:center;color:#999;font-size:%?28?%;padding-top:%?20?%;padding-bottom:%?60?%}.tui-mtop[data-v-25d1b3a9]{margin-top:%?30?%}.tui-mbtm[data-v-25d1b3a9]{margin-bottom:%?30?%}.tui-modalBtn-box[data-v-25d1b3a9]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-flex-column[data-v-25d1b3a9]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.tui-modal-btn[data-v-25d1b3a9]{width:46%;height:%?68?%;line-height:%?68?%;position:relative;border-radius:%?10?%;font-size:%?26?%;overflow:visible;margin-left:0;margin-right:0}.tui-modal-btn[data-v-25d1b3a9]::after{content:" ";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);left:0;top:0;border-radius:%?20?%}.tui-btn-width[data-v-25d1b3a9]{width:80%!important}.tui-primary[data-v-25d1b3a9]{background:#5677fc;color:#fff}.tui-primary-hover[data-v-25d1b3a9]{background:#4a67d6;color:#e5e5e5}.tui-primary-outline[data-v-25d1b3a9]{color:#5677fc;background:transparent}.tui-primary-outline[data-v-25d1b3a9]::after{border:1px solid #5677fc}.tui-danger[data-v-25d1b3a9]{background:#ed3f14;color:#fff}.tui-danger-hover[data-v-25d1b3a9]{background:#d53912;color:#e5e5e5}.tui-danger-outline[data-v-25d1b3a9]{color:#ed3f14;background:transparent}.tui-danger-outline[data-v-25d1b3a9]::after{border:1px solid #ed3f14}.tui-red[data-v-25d1b3a9]{background:#e41f19;color:#fff}.tui-red-hover[data-v-25d1b3a9]{background:#c51a15;color:#e5e5e5}.tui-red-outline[data-v-25d1b3a9]{color:#e41f19;background:transparent}.tui-red-outline[data-v-25d1b3a9]::after{border:1px solid #e41f19}.tui-warning[data-v-25d1b3a9]{background:#ff7900;color:#fff}.tui-warning-hover[data-v-25d1b3a9]{background:#e56d00;color:#e5e5e5}.tui-warning-outline[data-v-25d1b3a9]{color:#ff7900;background:transparent}.tui-warning-outline[data-v-25d1b3a9]::after{border:1px solid #ff7900}.tui-green[data-v-25d1b3a9]{background:#19be6b;color:#fff}.tui-green-hover[data-v-25d1b3a9]{background:#16ab60;color:#e5e5e5}.tui-green-outline[data-v-25d1b3a9]{color:#19be6b;background:transparent}.tui-green-outline[data-v-25d1b3a9]::after{border:1px solid #19be6b}.tui-white[data-v-25d1b3a9]{background:#fff;color:#333}.tui-white-hover[data-v-25d1b3a9]{background:#f7f7f9;color:#666}.tui-white-outline[data-v-25d1b3a9]{color:#333;background:transparent}.tui-white-outline[data-v-25d1b3a9]::after{border:1px solid #333}.tui-gray[data-v-25d1b3a9]{background:#ededed;color:#999}.tui-gray-hover[data-v-25d1b3a9]{background:#d5d5d5;color:#898989}.tui-gray-outline[data-v-25d1b3a9]{color:#999;background:transparent}.tui-gray-outline[data-v-25d1b3a9]::after{border:1px solid #999}.tui-outline-hover[data-v-25d1b3a9]{opacity:.6}.tui-circle-btn[data-v-25d1b3a9]{border-radius:%?40?%!important}.tui-circle-btn[data-v-25d1b3a9]::after{border-radius:%?80?%!important}',""]),t.exports=i},"552a":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i)}}},[a("v-uni-view",{staticClass:"tui-popup-class tui-bottom-popup",class:{"tui-hidden":!t.show,"tui-popup-show":t.show,"tui-popup-radius":t.radius},style:{backgroundColor:t.backgroundColor,height:t.height?t.height+"rpx":"auto"}},[t._t("default")],2),t.mask?a("v-uni-view",{staticClass:"tui-popup-mask",class:[t.show?"tui-mask-show":""],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClose.apply(void 0,arguments)}}}):t._e()],1)},n=[]},"55e6":function(t,i,a){"use strict";a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var e={tuiBottomPopup:a("54a2").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"back"},[e("v-uni-view",{staticStyle:{flex:"1",overflow:"scroll","padding-bottom":"24rpx"}},[e("myh5"),null!=t.addressData?e("v-uni-view",{staticClass:"view"},[e("v-uni-view",{staticClass:"card row",staticStyle:{"align-items":"center"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toUpAddress.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"column"},[e("v-uni-view",{staticClass:"view-top"},[e("v-uni-image",{staticStyle:{width:"26rpx",height:"36rpx"},attrs:{src:a("a9a5"),mode:"aspectFill"}}),e("v-uni-view",{staticClass:"txt-name"},[t._v(t._s(t.addressData.receiver)+" "+t._s(t.addressData.phone))])],1),e("v-uni-view",{staticClass:"txt-address"},[t._v(t._s(t.addressData.province)+t._s(t.addressData.city)+t._s(t.addressData.area)+t._s(t.addressData.detail))])],1),e("v-uni-view",{staticStyle:{"flex-grow":"1"}}),e("v-uni-image",{staticStyle:{width:"48rpx",height:"52rpx"},attrs:{src:a("a2f2"),mode:"aspectFill"}})],1)],1):t._e(),null==t.addressData?e("v-uni-view",{staticClass:"view",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addAddress.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"card row",staticStyle:{"align-items":"center"}},[e("v-uni-view",[t._v("请添加收货地址")]),e("v-uni-view",{staticStyle:{"flex-grow":"1"}}),e("v-uni-image",{staticStyle:{width:"48rpx",height:"52rpx"},attrs:{src:a("a2f2"),mode:"aspectFill"}})],1)],1):t._e(),e("v-uni-view",{staticClass:"view"},t._l(t.detailData.list,(function(i,a){return e("v-uni-view",{key:a,staticClass:" card column"},[e("v-uni-view",{staticClass:"clinic-txt"},[t._v(t._s(i.clinicName))]),t._l(i.goodsVos,(function(i,a){return e("v-uni-view",{key:a,staticClass:"center-row"},[e("v-uni-image",{staticStyle:{"flex-shrink":"0",width:"170rpx",height:"170rpx","border-radius":"8rpx"},attrs:{src:i.goodsImg,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"center-column"},[e("v-uni-view",{staticClass:"item-row"},[e("v-uni-view",{staticClass:"shop-title"},[t._v(t._s(i.goodsName))]),e("v-uni-view",{staticClass:"shop-price"},[t._v("¥"+t._s(i.goodsPrice))])],1),e("v-uni-view",{staticClass:"item-row2"},[e("v-uni-view",{staticClass:"shop-spec"},[t._v(t._s(i.goodsSpecs))]),e("v-uni-view",{staticClass:"shop-num"},[t._v("x"+t._s(i.num))])],1)],1)],1)})),e("v-uni-view",{staticClass:"row",staticStyle:{"margin-top":"50rpx"}},[e("v-uni-view",{staticClass:"txt-26",staticStyle:{"flex-grow":"1"}},[t._v("配送费")]),0!=i.expressPrice?e("v-uni-view",{staticClass:"txt-26"},[t._v("¥"+t._s(i.expressPrice))]):e("v-uni-view",{staticClass:"txt-26"},[t._v("快递免邮")])],1),e("v-uni-view",{staticClass:"row",staticStyle:{"margin-top":"50rpx"}},[e("v-uni-view",{staticClass:"txt-26",staticStyle:{"flex-grow":"1"}},[t._v("商品个数")]),e("v-uni-view",{staticClass:"txt-26"},[t._v("x"+t._s(i.goodsNum))])],1),e("v-uni-view",{staticClass:"row",staticStyle:{"margin-top":"40rpx"}},[e("v-uni-view",{staticClass:"txt-26",staticStyle:{"flex-grow":"1"}},[t._v("商品金额")]),e("v-uni-view",{staticClass:"txt-30-pricre"},[t._v("¥"+t._s(i.totalPrice))])],1)],2)})),1)],1),e("v-uni-view",{staticClass:"bottom-view"},[e("v-uni-view",{staticStyle:{"flex-grow":"1"}}),e("v-uni-view",{staticClass:"txt-26-af"},[t._v("共"+t._s(t.detailData.allNum)+"件")]),e("v-uni-view",{staticClass:"column"},[e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"txt-26"},[t._v("总计:")]),e("v-uni-view",{staticClass:"txt-30-pricre"},[t._v(t._s(t.detailData.allPayPrice))])],1),0!=t.detailData.allExpressPrice?e("v-uni-view",{staticClass:"txt-22"},[t._v("快递费："+t._s(t.detailData.allExpressPrice))]):e("v-uni-view",{staticClass:"txt-22"},[t._v("快递费：免邮")])],1),e("v-uni-view",{staticClass:"button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.payPopup.apply(void 0,arguments)}}},[t._v("提交订单")])],1),e("tui-bottom-popup",{attrs:{show:t.payShow},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.payPopup.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-share add-view"},[e("v-uni-view",{staticClass:"bottom-top"},[e("v-uni-view",{staticClass:"p-title"},[t._v("付款详情")]),e("v-uni-image",{staticClass:"b-delete",attrs:{src:a("44e9"),mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.payPopup.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"p-price"},[t._v("¥"+t._s(t.detailData.allPayPrice))]),e("v-uni-view",{staticClass:"p-way"},[t._v("支付方式选择")]),e("v-uni-view",{staticClass:"b-item-row"},[e("v-uni-image",{staticStyle:{width:"60rpx",height:"60rpx"},attrs:{src:a("9d18"),mode:"aspectFill"}}),e("v-uni-view",{staticClass:"b-item-title"},[t._v("微信")]),e("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx"},attrs:{src:t.payType?"../../static/image/icon_no.png":"../../static/image/icon_yes.png",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkPay(!t.payType)}}})],1),e("v-uni-view",{staticClass:"b-item-row"},[e("v-uni-image",{staticStyle:{width:"60rpx",height:"60rpx"},attrs:{src:a("4297"),mode:"aspectFill"}}),e("v-uni-view",{staticClass:"b-item-title"},[t._v("支付宝")]),e("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx"},attrs:{src:t.payType?"../../static/image/icon_yes.png":"../../static/image/icon_no.png",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkPay(t.payType)}}})],1),e("v-uni-view",{staticClass:"view-b"},[e("v-uni-view",{staticClass:"p-button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleHiddenShare.apply(void 0,arguments)}}},[t._v("立即付款")])],1)],1)],1)],1)},n=[]},5748:function(t,i,a){"use strict";var e=a("adde"),o=a.n(e);o.a},"57aa":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i)}}},[a("v-uni-view",{staticClass:"tui-modal-box",class:[t.fadeIn||t.show?"tui-modal-normal":"tui-modal-scale",t.show?"tui-modal-show":""],style:{width:t.width,padding:t.padding,borderRadius:t.radius}},[t.custom?a("v-uni-view",[t._t("default")],2):a("v-uni-view",[t.title?a("v-uni-view",{staticClass:"tui-modal-title"},[t._v(t._s(t.title))]):t._e(),a("v-uni-view",{staticClass:"tui-modal-content",class:[t.title?"":"tui-mtop"],style:{color:t.color,fontSize:t.size+"rpx"}},[t._v(t._s(t.content))]),a("v-uni-view",{staticClass:"tui-modalBtn-box",class:[2!=t.button.length?"tui-flex-column":""]},[t._l(t.button,(function(i,e){return[a("v-uni-button",{key:e+"_0",staticClass:"tui-modal-btn",class:["tui-"+(i.type||"primary")+(i.plain?"-outline":""),2!=t.button.length?"tui-btn-width":"",t.button.length>2?"tui-mbtm":"","circle"==t.shape?"tui-circle-btn":""],attrs:{"hover-class":"tui-"+(i.plain?"outline":i.type||"primary")+"-hover","data-index":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick.apply(void 0,arguments)}}},[t._v(t._s(i.text||"确定"))])]}))],2)],1)],1),a("v-uni-view",{staticClass:"tui-modal-mask",class:[t.show?"tui-mask-show":""],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClickCancel.apply(void 0,arguments)}}})],1)},n=[]},6697:function(t,i,a){"use strict";a.r(i);var e=a("fea0"),o=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=o.a},7945:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".tui-bottom-popup[data-v-413dcc8c]{width:100%;position:fixed;left:0;right:0;bottom:0;z-index:99999;\n\t/* visibility: hidden; */opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;min-height:%?20?%}.tui-popup-radius[data-v-413dcc8c]{border-top-left-radius:%?24?%;border-top-right-radius:%?24?%;padding-bottom:env(safe-area-inset-bottom);overflow:hidden}.tui-popup-show[data-v-413dcc8c]{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1\n\t/* visibility: visible; */}.tui-popup-mask[data-v-413dcc8c]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:99996;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-413dcc8c]{opacity:1;visibility:visible}",""]),t.exports=i},"90e0":function(t,i,a){"use strict";a.r(i);var e=a("9a0f"),o=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=o.a},"9a0f":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e(a("f96d")),n={components:{myh5:o.default},onLoad:function(t){var i=this;this.type=t.type,1==this.type&&uni.$emit(this.INFORMCHATUPGOODS,""),this.orderNo=t.orderNo,console.log("接收到订单编号为："+this.orderNo),this.getData(),uni.$on(this.UPCARTADDRESS,(function(t){i.addressData=t,console.log("回调的地址信息"),console.log(i.addressData),i.getAddressData()})),uni.$on(this.CONFIRMADDRESS,(function(t){i.getData()}))},onUnload:function(){uni.$off(this.UPCARTADDRESS),uni.$off(this.CONFIRMADDRESS)},data:function(){return{type:"",orderNo:"",detailData:"",addressData:"",payShow:!1,payType:!1}},methods:{addAddress:function(){uni.navigateTo({url:"../../ApagesA/address-add/address-add?type=4"})},handleHiddenShare:function(){this.payPopup(),this.$u.toast("请先下载应用方可付款，点击顶部'打开'")},wxPay:function(t){uni.requestPayment({provider:"wxpay",timeStamp:t.timestamp,nonceStr:t.noncestr,package:t.packagevalue,signType:"MD5",paySign:t.sign,success:function(t){console.log("微信支付成功回调"),me.notification()},fail:function(t){console.log("微信支付失败回调:"+JSON.stringify(t))}})},wxApi:function(t){var i=this;uni.requestPayment({provider:"wxpay",orderInfo:t,success:function(t){console.log("微信支付成功回调"),i.notification()},fail:function(t){console.log("微信支付失败回调:"+JSON.stringify(t))}})},zfbApi:function(t){var i=this;uni.requestPayment({provider:"alipay",orderInfo:t,success:function(t){console.log("支付宝支付成功回调"),i.notification()},fail:function(t){console.log("支付宝支付失败回调:"+JSON.stringify(t))}})},notification:function(){3==this.type?(uni.$emit(me.INFORMGOODSLISTPAY,""),uni.navigateBack()):1!=this.type&&2!=this.type||(uni.navigateTo({url:"../my-goods/my-goods?flag=2"}),uni.navigateBack())},toUpAddress:function(){uni.navigateTo({url:"../need-update-address/need-update-address?type=3&addressData="+encodeURIComponent(JSON.stringify(this.addressData))})},getData:function(){var t=this;uni.showLoading(),this.$u.get(this.orderResultUrl,{orderNo:this.orderNo}).then((function(i){uni.hideLoading(),console.log("请求手段聚而奋斗元话费"),console.log(i),0==i.status&&(t.detailData=i.data,t.addressData=t.detailData.list[0].customerAddress)})).catch((function(i){uni.hideLoading(),4==i.data.status&&t.$u.toast(i.data.msg)}))},getAddressData:function(){var t=this;uni.showLoading(),this.$u.get(this.orderResultUrl,{orderNo:this.orderNo,address:this.addressData.id}).then((function(i){uni.hideLoading(),console.log("请求手"),console.log(i),0==i.status&&(t.detailData=i.data,t.addressData=t.detailData.list[0].customerAddress)})).catch((function(i){uni.hideLoading(),4==i.data.status&&t.$u.toast(i.data.msg)}))},checkPay:function(t){t||(this.payType=!this.payType)},payPopup:function(){this.payShow=!this.payShow}}};i.default=n},"9d18":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAnFBMVEUAAAAqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUqpRUIp2+iAAAAM3RSTlMA/AYYCugpbQ7aqPLC+OO7lHMltdBSOC/sZplDgR9K1cuPilstFOtYPDTt3a+IYKyepHq/67ybAAAC9ElEQVRIx61X6ZqqMAwVsewgsgoIF9fR0VFn8v7vdqGUVqAdHD/PH1B6CElOknbyfsy0SHX9UnccvfRdNdJmzzKncmggSQIKSUJGKE+fMap8LYGD5Zcyal5ZSyCAtFZ+pcqqCb/AVGUxN57DCOaxiPtxgFEsP/hBXsBTWPDCvoInsRpymd1x2wN/pefJUs/vHYI/AMUdWVnwJ1izocMvue19doVk3b9Wq03qn4XkT4+S3c4n/RREhNopMWwB26XF8LDiX5J3lFNc+GRbIQs2QGHsJj1oglrZNEKTWf2m2mSI0OGKXG4eMrv8ci+43SHEOTaAINjjtZlbtDZXGb4mwNC1pKE2Q1u8cosAHfGdikD38Pt5UUO1ixHNUROCNQA0r6k/qTGdAQdR/f5eqXk38HPSWJbfmli+avUgJfeH1tO9sm9bmldxT4vUuOgcclqtaPuWvptwoJaolpCEHGnQz6rHQastb0jNShPANq5xLsv57up3xFpWC/TW8rAxJqiirj2afc27P9jXq3+c1uewz91+Vt9TTDuFXzDvneo3EjW22AEIBkNiV9JEU8s0zwwXAIcTxPjfg+WAVpnaWRQdQEqakk2O9XunxySur1eTqJmkihfvjQQBlkh+Bvtah96EQzZhjDkWCYW/fyBbAD/YkVMtCFIeCc69TUWiAsNFZuTKtahR3F2f13eer99y7PWZyjPqNDAaoakO0L6KXKc50W9AC0NDj+z1o2XBNNYCWpIzAxjsrArQEVeGD6DwycqZtZ0QGG4TeWuBftv8LEqAK5+c4FyF/QYoudm8Uzdc+KQB9lqv5HTH4ZHHDU3WelnTZxgqlsE7k6ZPx40I6wFXtsi4YYNOzO6NgZPFBt34iPWLDpnkdfHkcDe/E69ZlB1bD61Zp0gR/ILA/05TY46cex4hvK14aUMTuDre0Ly4lbKxw69v4t61fWTYmiAGG6UCnMa3zKc3b9YZFFd8THCVtx1QxEejw8jRaPxQFtSHsoAcyt6O/xTuZDbzeKKcAAAAAElFTkSuQmCC"},a231:function(t,i,a){"use strict";a.r(i);var e=a("30ea"),o=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=o.a},a2f2:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAWlBMVEUAAAAQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmJ3Ll08AAAAHXRSTlMA9Qu+FYlQPiDq4tvPs6qjm5NqWUY1LigG1H56X0mzVMIAAABwSURBVDjL5dNJDoAgEERRUZznCXCo+1/TG/hNXBl7/UIKqI6+O7YgEScNGZuo9niMKkemVblSnk4mJ9PLLGQGKSMzik0qzWR2oymAaSR7Lw6jKaYsJ6d9e+cBX7enPwqdypy6UK3YOkel2/yDDfjHXP1oBfCxbPXuAAAAAElFTkSuQmCC"},a594:function(t,i,a){"use strict";a.r(i);var e=a("d27c"),o=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=o.a},a9a5:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAhFBMVEUAAAAQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmIQvmJlX8qCAAAAK3RSTlMA/PLVVOydFQX45x3PxoZmTioQtpeRW0sH4NrKwKt5RUAhqHE3Gq1+ZDIKKzumoAAAATtJREFUOMvlkteSgzAMRRVsML0FQnogZZv+//92EGXNIMrz5rz5+qDRXAz/AFvFmW8app/Fyl5w1dXdYMPGvapZt/RRR5QzrjRwiCEn3Ru5Q/sGPJ7AMcLjewh7w3RN7AhtdnAniEyWMhPdIhUnR21jVkrH1Go7jDj50rp90NofnHxsdnj1gRKUHDnZoMG5luQ02uDk5manJTv63uFkl0qLtSSmfg6cvKUxkd6PU0dbTn5gjaUlFiUPTk7oyk3+ApeShJP3W7o7ed0fPdH5vAeOAolA0kkGSEhgSX0knEt4DS8OEkcFPDGO2cEEaTByhYIpivWDqZAhQQrTPDdDuYA5woFr2bOy52vuIYF5pCZHsICd9+59D0tUp26Jb1imcJD4gjV8kpvbq+Sfe/0yX7COKkDxhLXczhLekl/b6kjHCmnkhgAAAABJRU5ErkJggg=="},adde:function(t,i,a){var e=a("7945");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("f9c5a742",e,!0,{sourceMap:!1,shadowMode:!1})},b35e:function(t,i,a){"use strict";var e=a("3b12"),o=a.n(e);o.a},b656:function(t,i,a){var e=a("54df");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("44c41b28",e,!0,{sourceMap:!1,shadowMode:!1})},c5b9:function(t,i,a){t.exports=a.p+"static/img/logo.e5d838af.png"},cbe5:function(t,i,a){"use strict";a.r(i);var e=a("57aa"),o=a("a231");for(var n in o)"default"!==n&&function(t){a.d(i,t,(function(){return o[t]}))}(n);a("267a");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"25d1b3a9",null,!1,e["a"],r);i["default"]=d.exports},d27c:function(t,i,a){"use strict";a("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"tuiBottomPopup",props:{mask:{type:Boolean,default:!0},show:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#fff"},height:{type:Number,default:0},radius:{type:Boolean,default:!0}},methods:{handleClose:function(){this.show&&this.$emit("close",{})}}};i.default=e},d4d4:function(t,i,a){"use strict";a.r(i);var e=a("55e6"),o=a("90e0");for(var n in o)"default"!==n&&function(t){a.d(i,t,(function(){return o[t]}))}(n);a("b35e");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"1c120d18",null,!1,e["a"],r);i["default"]=d.exports},f96d:function(t,i,a){"use strict";a.r(i);var e=a("2dae"),o=a("6697");for(var n in o)"default"!==n&&function(t){a.d(i,t,(function(){return o[t]}))}(n);a("1bd7");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"34a29ac7",null,!1,e["a"],r);i["default"]=d.exports},fea0:function(t,i,a){"use strict";a("ac1f"),a("466d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"myh5",props:["docId"],data:function(){return{src:"",modal:!1,loading:!1}},onLoad:function(){console.log("的粉红色"+this.docI),this.docId&&this.downloadApp()},methods:{handleClick:function(){this.modal=!1},isWeiXinBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},download:function(){window.location.href=this.h5APPPath},download2:function(){this.loading=!0,this.src=this.AppStorePath},downloadApp:function(){var t=this;this.$u.get(this.VersionPlatformUrl).then((function(i){0==i.status&&("Android"==i.msg?t.download():"iPhone"==i.msg&&t.download2())}))}}};i.default=e}}]);