(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/load-refresh/load-refresh"],{"0e7f":function(e,t,r){},2760:function(e,t,r){"use strict";var n=r("0e7f"),o=r.n(n);o.a},"3c3d":function(e,t,r){"use strict";r.r(t);var n=r("af25"),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},"763e":function(e,t,r){"use strict";r.r(t);var n=r("fd5c"),o=r("3c3d");for(var i in o)"default"!==i&&function(e){r.d(t,e,(function(){return o[e]}))}(i);r("2760");var s,a=r("f0c5"),f=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"17b5d1ff",null,!1,n["a"],s);t["default"]=f.exports},af25:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"loadRefresh",props:{isRefresh:{type:Boolean,defaule:!0},refreshTime:{type:Number,default:800},heightReduce:{type:Number,default:0},backgroundCover:{type:String,default:"white"},pageNo:{type:Number,default:0},totalPageNo:{type:Number,default:0}},data:function(){return{startY:0,moveY:0,hasMore:!0,moving:!1,refresh:!1,loading:!1,scrollTop:-1,coverTransform:"translateY(0px)",coverTransition:"0s",playState:"paused"}},computed:{getHeight:function(){var t=e.getSystemInfoSync().windowHeight-e.upx2px(0+this.heightReduce);return"height: ".concat(t,"px;")},loadText:function(){var e=this.pageNo,t=this.totalPageNo,r=this.loading;return r?"加载中...":e<t?"上拉加载更多":"已经到底啦~"}},watch:{refresh:function(e){e&&this.$emit("refresh")}},methods:{loadMore:function(){var e=this.pageNo,t=this.totalPageNo;e<t&&(this.loading=!0,console.log("11111111111111"),this.$emit("loadMore"))},loadOver:function(){this.loading=!1},coverTouchstart:function(e){this.isRefresh&&(this.coverTransition="transform .1s linear",this.startY=e.touches[0].clientY)},coverTouchmove:function(e){if(this.isRefresh&&!this.refresh){this.moveY=e.touches[0].clientY;var t=this.moveY-this.startY;t<0?this.moving=!1:(this.moving=!0,t>=60&&(this.refresh=!0,this.coverTransform="translateY(60px)",this.playState="running"))}},coverTouchend:function(){var e=this;this.isRefresh&&this.refresh&&setTimeout((function(){!1!==e.moving&&(e.moving=!1,e.refresh=!1,e.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",e.coverTransform="translateY(0px)",e.playState="paused")}),this.refreshTime)},runRefresh:function(){var e=this;this.scrollTop=0,this.refresh=!0,this.coverTransition="transform .1s linear",this.coverTransform="translateY(60px)",this.playState="running",setTimeout((function(){e.scrollTop=-1,e.refresh=!1,e.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",e.coverTransform="translateY(0px)",e.playState="paused"}),this.refreshTime)}}};t.default=r}).call(this,r("543d")["default"])},fd5c:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement;e._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/load-refresh/load-refresh-create-component',
    {
        'components/load-refresh/load-refresh-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("763e"))
        })
    },
    [['components/load-refresh/load-refresh-create-component']]
]);
