(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["ui/tui-upload/tui-upload"],{"0d21":function(t,e,n){"use strict";(function(t){function n(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=a(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){s=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw o}}}}function r(t){return u(t)||o(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return s(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={name:"tuiUpload",props:{value:{type:Array,default:function(){return[]}},forbidDel:{type:Boolean,default:!1},forbidAdd:{type:Boolean,default:!1},serverUrl:{type:String,default:""},limit:{type:Number,default:9},fileKeyName:{type:String,default:"file"}},data:function(){return{imageList:[],statusArr:[]}},created:function(){this.imageList=r(this.value);var t,e=n(this.imageList);try{for(e.s();!(t=e.n()).done;){t.value;this.statusArr.push("1")}}catch(i){e.e(i)}finally{e.f()}},computed:{isShowAdd:function(){var t=!0;return(this.forbidAdd||this.limit&&this.imageList.length>=this.limit)&&(t=!1),t}},methods:{reUpLoad:function(t){var e=this;this.$set(this.statusArr,t,"2"),this.change(),this.uploadImage(t,this.imageList[t]).then((function(){e.change()})).catch((function(){e.change()}))},change:function(){var t=~this.statusArr.indexOf("2")?2:1;2!=t&&~this.statusArr.indexOf("3")&&(t=3),this.$emit("complete",{status:t,imgArr:this.imageList})},chooseImage:function(){var e=this;t.chooseImage({count:e.limit-e.imageList.length,success:function(n){for(var r=[],i=0;i<n.tempFilePaths.length;i++){var a=e.imageList.length;if(a>=e.limit){t.showToast({title:"最多可上传".concat(e.limit,"张图片"),icon:"none"});break}var o=n.tempFilePaths[i];r.push(o),e.imageList.push(o),e.statusArr.push("2")}e.change();for(var u=e.imageList.length-r.length,s=0;s<r.length;s++){var c=u+s;e.serverUrl?e.uploadImage(c,r[s]).then((function(){e.change()})).catch((function(){e.change()})):(e.$set(e.statusArr,c,"1"),e.change())}}})},uploadImage:function(e,n){var r=this,i=this;return new Promise((function(a,o){t.uploadFile({url:r.serverUrl,name:r.fileKeyName,header:{},formData:{},filePath:n,success:function(t){console.log(t),200==t.statusCode?(t.data&&(i.imageList[e]=t.data),i.$set(i.statusArr,e,t.data?"1":"3"),a(e)):(i.$set(i.statusArr,e,"3"),o(e))},fail:function(t){i.$set(i.statusArr,e,"3"),o(e)}})}))},delImage:function(t){this.imageList.splice(t,1),this.statusArr.splice(t,1),this.$emit("remove",{index:t}),this.change()},previewImage:function(e){this.imageList.length&&t.previewImage({current:this.imageList[e],loop:!0,urls:this.imageList})}}};e.default=c}).call(this,n("543d")["default"])},"9e9b":function(t,e,n){},d6eb:function(t,e,n){"use strict";n.r(e);var r=n("0d21"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},ee38:function(t,e,n){"use strict";var r=n("9e9b"),i=n.n(r);i.a},f8b2:function(t,e,n){"use strict";n.r(e);var r=n("fe91"),i=n("d6eb");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("ee38");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"f8ba0e8c",null,!1,r["a"],o);e["default"]=s.exports},fe91:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'ui/tui-upload/tui-upload-create-component',
    {
        'ui/tui-upload/tui-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f8b2"))
        })
    },
    [['ui/tui-upload/tui-upload-create-component']]
]);
