(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message-list/message-list"],{3587:function(t,n,e){"use strict";(function(t){e("77c6");a(e("66fd"));var n=a(e("a628"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"5d5e":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=s(e("f96d"));function s(t){return t&&t.__esModule?t:{default:t}}var o={components:{myh5:a.default},onLoad:function(){var n=this;this.getHelpData(),this.messageList=t.getStorageSync(this.MESSAGELIST),console.log("获取到缓存的数据"),console.log(this.messageList),this.getMessageData(),t.$on(this.INFORMNOREAD,(function(t){console.log("接受到通知未读消息"),n.getMessageData2()})),t.$on(this.INFORMXTNOREAD,(function(t){console.log("接受到系统通知未读消息"),n.getHelpData()}))},onUnload:function(){},data:function(){return{messageList:[],kfMessageList:[],helpData:null,actions:[{name:"删除",color:"#fff",fontsize:30,width:70,background:"#FD3B31"}]}},methods:{getHelpData:function(){var t=this;this.$u.get(this.customerMsgHelpsUrl).then((function(n){console.log(n),0==n.status&&(t.helpData=n.data)}))},deleteId:function(t){var n=this;this.messageList=[],this.$u.get(this.customerMsgChatDeleteUrl,{id:t}).then((function(t){console.log(t);for(var e=0;e<t.data.length;e++)t.data[e].account.includes("kf")||n.messageList.push(t.data[e])})).catch((function(t){1==t.data.status&&n.$u.toast(t.data.msg)}))},toHelper:function(){t.navigateTo({url:"../helper/helper"})},getMessageData:function(){var n=this;this.kfMessageList=[],this.messageList=[],this.$u.get(this.customerMsgChatsUrl).then((function(e){for(var a=0;a<e.data.length;a++)e.data[a].account.includes("kf")?n.kfMessageList.push(e.data[a]):n.messageList.push(e.data[a]);t.setStorageSync(n.MESSAGELIST,n.messageList),console.log("去缓存的数据"),console.log(n.messageList)}))},getMessageData2:function(){var t=this;this.kfMessageList=[],this.messageList=[],this.$u.get(this.customerMsgChatsUrl).then((function(n){for(var e=0;e<n.data.length;e++)n.data[e].account.includes("kf")?t.kfMessageList.push(n.data[e]):t.messageList.push(n.data[e])}))},toChat:function(n,e,a){t.navigateTo({url:"../chat/chat?type=1&name="+n+"&account="+e+"&img="+encodeURIComponent(JSON.stringify(a))})},toKfChat:function(n,e){t.navigateTo({url:"../chat/kf-chat?name="+n+"&img="+encodeURIComponent(JSON.stringify(e))})}}};n.default=o}).call(this,e("543d")["default"])},"63b4":function(t,n,e){"use strict";e.r(n);var a=e("5d5e"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=s.a},6697:function(t,n,e){"use strict";e.r(n);var a=e("c000"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=s.a},"670e":function(t,n,e){"use strict";var a=e("84a2"),s=e.n(a);s.a},"686d":function(t,n,e){"use strict";var a=e("a84d"),s=e.n(a);s.a},7667:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={tuiBadge:function(){return e.e("ui/tui-badge/tui-badge").then(e.bind(null,"6d05"))},tuiSwipeAction:function(){return e.e("ui/tui-swipe-action/tui-swipe-action").then(e.bind(null,"8d43"))}},s=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"84a2":function(t,n,e){},a628:function(t,n,e){"use strict";e.r(n);var a=e("7667"),s=e("63b4");for(var o in s)"default"!==o&&function(t){e.d(n,t,(function(){return s[t]}))}(o);e("686d");var i,u=e("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=c.exports},a84d:function(t,n,e){},c000:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"myh5",props:["docId"],data:function(){return{src:"",modal:!1,loading:!1}},onLoad:function(){console.log("的粉红色"+this.docI),this.docId&&this.downloadApp()},methods:{handleClick:function(){this.modal=!1},isWeiXinBrowser:function(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},download:function(){window.location.href=this.h5APPPath},download2:function(){this.loading=!0,this.src=this.AppStorePath},downloadApp:function(){var t=this;this.$u.get(this.VersionPlatformUrl).then((function(n){0==n.status&&("Android"==n.msg?t.download():"iPhone"==n.msg&&t.download2())}))}}};n.default=a},d1b7:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var s=function(){var t=this,n=t.$createElement;t._self._c},o=[]},f96d:function(t,n,e){"use strict";e.r(n);var a=e("d1b7"),s=e("6697");for(var o in s)"default"!==o&&function(t){e.d(n,t,(function(){return s[t]}))}(o);e("670e");var i,u=e("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=c.exports}},[["3587","common/runtime","common/vendor"]]]);