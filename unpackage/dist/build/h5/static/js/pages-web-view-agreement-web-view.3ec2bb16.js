(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-web-view-agreement-web-view"],{"988c":function(t,n,e){"use strict";e.r(n);var i=e("c47e"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},beb4:function(t,n,e){"use strict";e.r(n);var i=e("dcab"),a=e("988c");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var r,c=e("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"12c5f0d8",null,!1,i["a"],r);n["default"]=o.exports},c47e:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={onLoad:function(t){this.type=t.type,this.getHtml()},data:function(){return{type:"",src:""}},methods:{getHtml:function(){var t=this;uni.showLoading(),this.$u.get(this.VersionLawUrl,{type:this.type}).then((function(n){uni.hideLoading(),0==n.status&&(uni.setNavigationBarTitle({title:n.data.name}),t.src=n.data.content)})).catch((function(n){console.log("当前"+n.data.status),uni.hideLoading(),1==n.status&&t.$u.toast(n.data.msg)}))}}};n.default=i},dcab:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticStyle:{"padding-left":"24rpx","padding-right":"24rpx","padding-top":"12rpx","padding-bottom":"180rpx"}},[e("v-uni-rich-text",{attrs:{nodes:t.src}})],1)},u=[]}}]);