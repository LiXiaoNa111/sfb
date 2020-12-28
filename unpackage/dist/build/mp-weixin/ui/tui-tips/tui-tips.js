(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["ui/tui-tips/tui-tips"],{"4a6a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"tuiTips",props:{position:{type:String,default:"top"}},data:function(){return{timer:null,show:!1,msg:"无法连接到服务器~",type:"translucent"}},methods:{showTips:function(t){var n=this,e=t.type,i=void 0===e?"translucent":e,a=t.duration,u=void 0===a?2e3:a;clearTimeout(this.timer),this.show=!0,this.type=i,this.msg=t.msg,this.timer=setTimeout((function(){n.show=!1,clearTimeout(n.timer),n.timer=null}),u)}}};n.default=i},"6aa7":function(t,n,e){},aa6f:function(t,n,e){"use strict";var i=e("6aa7"),a=e.n(i);a.a},ac3e:function(t,n,e){"use strict";e.r(n);var i=e("daff"),a=e("c7b9");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("aa6f");var r,o=e("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1fa5d1fe",null,!1,i["a"],r);n["default"]=s.exports},c7b9:function(t,n,e){"use strict";e.r(n);var i=e("4a6a"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},daff:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'ui/tui-tips/tui-tips-create-component',
    {
        'ui/tui-tips/tui-tips-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ac3e"))
        })
    },
    [['ui/tui-tips/tui-tips-create-component']]
]);
