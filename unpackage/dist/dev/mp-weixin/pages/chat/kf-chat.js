(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/kf-chat"],{

/***/ 168:
/*!************************************************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/main.js?{"page":"pages%2Fchat%2Fkf-chat"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _kfChat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/kf-chat.vue */ 169));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_kfChat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 169:
/*!*****************************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/pages/chat/kf-chat.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kf-chat.vue?vue&type=template&id=24cd9768& */ 170);
/* harmony import */ var _kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kf-chat.vue?vue&type=script&lang=js& */ 172);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _kf_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kf-chat.vue?vue&type=style&index=0&lang=scss& */ 174);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__["render"],
  _kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/kf-chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 170:
/*!************************************************************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/pages/chat/kf-chat.vue?vue&type=template&id=24cd9768& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kf-chat.vue?vue&type=template&id=24cd9768& */ 171);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_template_id_24cd9768___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 171:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/uniapp/sfb/sysf_customer_before/pages/chat/kf-chat.vue?vue&type=template&id=24cd9768& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.messageList, function(row, index) {
    var $orig = _vm.__get_orig(row)

    var g0 =
      row.creator == 0 && row.type == 1
        ? row.message.replace(/\n/g, "<br>")
        : null
    return {
      $orig: $orig,
      g0: g0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 172:
/*!******************************************************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/pages/chat/kf-chat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kf-chat.vue?vue&type=script&lang=js& */ 173);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 173:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/uniapp/sfb/sysf_customer_before/pages/chat/kf-chat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 45));



























































































































































var _permission = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/wa-permission/permission.js */ 165));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  data: function data() {
    return {
      platform: '', //平台
      isJurisdiction: '', //录音权限
      account: '', //对方账号
      id: '', //聊天室id
      img: '', //对方头像
      name: '', //对方用户名称
      pageNum: 1, //页数
      pageSize: 15, //每页条数
      imageUrl: null, //自己头像
      messageList: [],
      //文字消息
      textMsg: '',
      //消息列表
      isHistoryLoading: false,
      scrollAnimation: true,
      scrollTop: 0,
      scrollToView: '',
      msgList: [],
      msgImgList: [],
      myuid: 0,

      //录音相关参数

      //H5不能录音
      RECORDER: uni.getRecorderManager(),

      isVoice: false,
      voiceTis: '按住 说话',
      recordTis: "手指上滑 取消发送",
      recording: false,
      willStop: false,
      initPoint: {
        identifier: 0,
        Y: 0 },

      recordTimer: null,
      recordLength: 0,

      //播放语音相关参数
      AUDIO: uni.createInnerAudioContext(),
      playMsgid: null,
      VoiceTimer: null,
      // 抽屉参数
      popupLayerClass: '',
      // more参数
      hideMore: true,
      focus: false };

  },
  onLoad: function onLoad(option) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var mess, me;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              _this.id = uni.getStorageSync(_this.KFCHATID);
              _this.getMessageData();
              _this.name = option.name; //对方姓名
              _this.img = JSON.parse(decodeURIComponent(option.img)); //对方头像
              //自己头像
              console.log("自己头像" + uni.getStorageSync(_this.HEADIMG));
              // if (uni.getStorageSync(this.HEADIMG).length == 0) {
              // 	this.imageUrl = null
              // } else {
              _this.imageUrl = uni.getStorageSync(_this.HEADIMG);
              // }
              console.log("接收：" + _this.name + _this.img);
              uni.setNavigationBarTitle({
                title: _this.name });


              mess = uni.getStorageSync(_this.id + "");
              if (!_this.$u.test.isEmpty(mess)) {
                _this.messageList = mess;
                console.log("获取到缓存的数据2");
                console.log(_this.messageList);
                // 滚动到底部
                _this.$nextTick(function () {
                  //进入页面滚动到底部
                  this.scrollTop = 9999;
                  this.$nextTick(function () {
                    this.scrollAnimation = true;
                  });
                });
              }

              //语音自然播放结束
              _this.AUDIO.onEnded(function (res) {
                _this.playMsgid = null;
              });

              //初始获取录音权限状态
              _this.platform = uni.getSystemInfoSync().platform;
              if (_this.platform == 'ios') {
                console.log('我是iOS');
                //有权限返回true，否则返回false
                _this.isJurisdiction = _permission.default.judgeIosPermission("record");
              } else if (_this.platform == 'android') {
                console.log('我是安卓');
                /* 获取当前手机是否有录音权限 */











                /* 获取当前手机是否有录音权限 */
              }


              //录音开始事件
              _this.RECORDER.onStart(function (e) {
                //没有权限情况 申请权限弹框 
                // Android会在允许权限之后重新赋值isJurisdiction为true 所以直接跳过了当前的if
                //ios则需要重新新获取权限的状态
                if (!_this.isJurisdiction && _this.platform == 'ios') {
                  _this.isJurisdiction = _permission.default.judgeIosPermission("record");
                }
                if (_this.isJurisdiction) {
                  _this.recordBegin(e);
                }
              });
              //录音结束事件
              _this.RECORDER.onStop(function (e) {
                if (_this.isJurisdiction) {
                  _this.recordEnd(e);
                }
              });


              me = _this;
              uni.$on(_this.SOCKETKFCHAT, function (data) {
                console.log('kf患者收到服务器通知：' + data);
                var oneMessageData = JSON.parse(data);
                if (oneMessageData[0].creator == 0) {
                  console.log('当前集合：' + me.messageList);
                  me.messageList = me.messageList.concat(oneMessageData); //数据拼接
                  console.log("滚动到最下面的id");
                  console.log(oneMessageData[0].id);
                  me.$nextTick(function () {
                    //进入页面滚动到底部
                    me.scrollToView = 'msg' + oneMessageData[0].id;
                    me.$nextTick(function () {
                      me.scrollAnimation = true;
                    });
                  });
                  // 获取消息中的图片,并处理显示尺寸
                  if (oneMessageData[0].type == 2) {
                    me.msgImgList.push(oneMessageData[0].content);
                  }
                }
              });

              uni.onKeyboardHeightChange(function (res) {
                console.log("软键盘高度监听" + res.height);
                //监听软键盘的高度 
                //当点击软键盘自带的收起按钮的时候也就是会隐藏软键盘 这时候监听到的软键盘的高度就是0 、
                //让输入框取消焦点 这时候再去输入内容的时候 输入框就会弹起
                if (res.height == 0) {
                  _this.focus = false;
                  _this.hideDrawer();
                }
              });case 18:case "end":return _context.stop();}}}, _callee);}))();
  },
  onShow: function onShow() {
    this.scrollTop = 9999999;
  },
  onHide: function onHide() {
    this.hideDrawer();
  },
  onUnload: function onUnload() {
    uni.$off(this.SOCKETKFCHAT);
  },
  methods: {
    //获取聊天信息列表 加载初始页面消息
    getMessageData: function getMessageData() {var _this2 = this;
      this.$u.get(this.ChattingChatRecordUrl, {
        'id': this.id,
        'pageNum': this.pageNum,
        'pageSize': this.pageSize }).
      then(function (res) {
        if (!_this2.$u.test.isEmpty(res.data.list)) {
          var newData = res.data.list.reverse();
          _this2.messageList = newData; //数组翻转
          console.log("去22缓存的数据");
          console.log(_this2.id + _this2.messageList);
          uni.setStorageSync(_this2.id + "", _this2.messageList);
          console.log("去缓存的数据");
          console.log(_this2.messageList);
          // 获取消息中的图片,并处理显示尺寸
          for (var i = 0; i < newData.length; i++) {
            if (newData[i].type == 2) {
              _this2.msgImgList.push(newData[i].message);
            }
          }

          // 滚动到底部
          _this2.$nextTick(function () {
            //进入页面滚动到底部
            this.scrollTop = 9999;
            this.$nextTick(function () {
              this.scrollAnimation = true;
            });
          });
        }
      }).catch(function (ex) {
        if (ex.data.status == 1) {
          console.log(ex.data.msg);
          _this2.isHistoryLoading = false;
        }
      });
    },
    toVideo: function toVideo(url) {
      uni.navigateTo({
        url: "../video/big-video?videoUrl=" + url + "&title=" + "视频" });

    },
    getVideo: function getVideo() {var _this3 = this;
      this.hideDrawer();
      // 上传视频
      uni.chooseVideo({
        maxDuration: 60,
        count: 1,
        success: function success(responent) {
          var videoFile = responent.tempFilePath;
          console.log("要上传的视频");
          console.log(videoFile);
          //对原视频先进行本地压缩
          _this3.postVideo(videoFile);
        } });

    },
    postVideo: function postVideo(videoFile) {var _this4 = this;
      var me = this;
      uni.showLoading();
      uni.uploadFile({
        url: this.websocketOtherSendUrl,
        filePath: videoFile,
        name: 'file',
        header: {
          'Content-Type': 'application/json',
          'token': uni.getStorageSync('token') },

        formData: {
          "type": 4,
          "chattingId": me.id },

        success: function success(uploadFileRes) {
          uni.hideLoading();
          console.log("成功");
          console.log(uploadFileRes);
          console.log(JSON.parse(uploadFileRes.data));
          var res = JSON.parse(uploadFileRes.data);
          if (res.status == 0) {
            console.log('上传视频成功');
            me.getNewData();
          } else if (res.status == 1) {
            _this4.$u.toast(res.msg);
          }
        } });

    },
    //触发滑动到顶部(加载历史信息记录)
    loadHistory: function loadHistory(e) {var _this5 = this;
      if (this.isHistoryLoading) {
        return;
      }
      this.pageNum++;
      this.isHistoryLoading = true; //参数作为进入请求标识，防止重复请求
      this.scrollAnimation = false; //关闭滑动动画
      var Viewid = this.messageList[0].id; //记住第一个信息ID
      this.$u.get(this.ChattingChatRecordUrl, {
        'id': this.id,
        'pageNum': this.pageNum,
        'pageSize': this.pageSize }).
      then(function (res) {
        _this5.isHistoryLoading = false;
        var newData = res.data.list;
        // .reverse()
        // this.messageList=newData.concat(this.messageList);//数组翻转
        // 获取消息中的图片,并处理显示尺寸
        for (var i = 0; i < newData.length; i++) {
          if (newData[i].type == 2) {
            _this5.msgImgList.push(newData[i].content);
          }
          _this5.messageList.unshift(newData[i]);
        }
        console.log("所有消息");
        console.log(_this5.messageList);
        //这段代码很重要，不然每次加载历史数据都会跳到顶部
        _this5.$nextTick(function () {
          this.scrollToView = 'msg' + Viewid; //跳转上次的第一行信息位置
          // uni.pageScrollTo({         //回到下拉之前，多展示一条消息
          // 	scrollTop: 'msg'+ Viewid,
          // 	duration: 0
          // });
          this.$nextTick(function () {
            this.scrollAnimation = true; //恢复滚动动画
          });
        });
      }).catch(function (ex) {
        if (ex.data.status == 4) {
          _this5.$u.toast("已加载全部消息");
          _this5.isHistoryLoading = false;
        }
      });
    },
    //更多功能(点击+弹出) 
    showMore: function showMore() {
      this.isVoice = false;
      if (this.hideMore) {
        this.hideMore = false;
        this.openDrawer();
      } else {
        this.hideDrawer();
      }
    },
    // 打开抽屉
    openDrawer: function openDrawer() {
      this.popupLayerClass = 'showLayer';
    },
    // 隐藏抽屉
    hideDrawer: function hideDrawer() {var _this6 = this;
      this.popupLayerClass = '';
      setTimeout(function () {
        _this6.hideMore = true;
      }, 150);
    },
    //选照片 or 拍照
    getImage: function getImage() {
      this.hideDrawer();
      var me = this;
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['compressed'],
        success: function success(res) {
          console.log(JSON.stringify(res.tempFilePaths[0]));
          console.log(me.id);
          me.sendImg(res.tempFilePaths[0]);
        } });

    },
    //发送图片
    sendImg: function sendImg(path) {var _this7 = this;
      var me = this;
      uni.showLoading();
      uni.uploadFile({
        url: this.websocketOtherSendUrl,
        filePath: path,
        name: 'file',
        header: {
          'Content-Type': 'application/json',
          'token': uni.getStorageSync('token') },

        formData: {
          "type": 2,
          "chattingId": me.id },

        success: function success(uploadFileRes) {
          uni.hideLoading();
          console.log("成功");
          console.log(uploadFileRes);
          console.log(JSON.parse(uploadFileRes.data));
          var res = JSON.parse(uploadFileRes.data);
          if (res.status == 0) {
            console.log('上传成功');
            me.getNewData();
          } else if (res.status == 1) {
            _this7.$u.toast(res.msg);
          }
        } });

    },
    //获取焦点,则关闭抽屉
    textareaFocus: function textareaFocus() {
      this.focus = true;
      if (this.popupLayerClass == 'showLayer') {
        this.hideDrawer();
      }
    },
    // 发送文字消息
    sendText: function sendText() {
      if (!this.textMsg) {
        return;
      }
      this.sendMsg(this.textMsg);
      this.textMsg = ''; //清空输入框
    },
    // 发送消息 请求接口
    sendMsg: function sendMsg(content) {var _this8 = this;
      //1文字 2图片 3语音 4视频
      console.log("要发送的信息");
      console.log(content);
      this.$u.post(this.websocketOtherSendUrl, {
        message: content,
        type: 1,
        chattingId: this.id }).
      then(function (res) {
        _this8.getNewData();
        console.log("发送消息成功");
        console.log(res);
      }).catch(function (ex) {
        _this8.$u.toast(ex.data.msg);
      });
    },
    //发送消息之后网络获取最新一条数据拼接在整个消息数据的后面
    getNewData: function getNewData() {var _this9 = this;
      console.log("开始获取第一条消息");
      this.$u.get(this.ChattingChatRecordUrl, {
        'id': this.id,
        'pageNum': 1,
        'pageSize': 1 }).
      then(function (res) {
        uni.hideLoading();
        var oneMessageData = res.data.list;
        console.log("最新获取到的消息");
        console.log(oneMessageData);
        _this9.messageList = _this9.messageList.concat(oneMessageData); //数据拼接
        console.log("滚动到最下面的id");
        console.log(oneMessageData[0].id);
        //滚动到底部
        _this9.$nextTick(function () {
          //进入页面滚动到底部
          this.scrollToView = 'msg' + oneMessageData[0].id;
          this.$nextTick(function () {
            this.scrollAnimation = true;
          });
        });
        // 获取消息中的图片,并处理显示尺寸
        if (oneMessageData[0].type == 2) {
          _this9.msgImgList.push(oneMessageData[0].message);
        }
        //非自己的消息震动 0为客服消息 1为用户消息
        if (oneMessageData[0].creator == 0) {
          uni.vibrateLong();
        }
      });
    },
    // 预览图片 点击放大图
    showPic: function showPic(msg) {
      uni.previewImage({
        indicator: "none",
        current: msg,
        urls: this.msgImgList });

    },
    // 播放语音
    playVoice: function playVoice(msg, id) {
      this.playMsgid = id;
      this.AUDIO.src = msg;
      this.$nextTick(function () {
        this.AUDIO.play();
      });
    },
    // 录音开始
    voiceBegin: function voiceBegin(e) {
      console.log("开始录制");
      console.log(e);
      if (e.touches.length > 1) {
        return;
      }
      this.initPoint.Y = e.touches[0].clientY;
      this.initPoint.identifier = e.touches[0].identifier;
      this.RECORDER.start({ format: "mp3" }); //录音开始,
    },
    //录音开始UI效果
    recordBegin: function recordBegin(e) {var _this10 = this;
      this.recording = true;
      this.voiceTis = '松开 结束';
      this.recordLength = 0;
      this.recordTimer = setInterval(function () {
        _this10.recordLength++;
      }, 1000);
    },
    // 录音被打断
    voiceCancel: function voiceCancel() {
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.willStop = true; //不发送录音
      this.RECORDER.stop(); //录音结束
    },
    // 录音中(判断是否触发上滑取消发送)
    voiceIng: function voiceIng(e) {
      if (!this.recording) {
        return;
      }
      var touche = e.touches[0];
      //上滑一个导航栏的高度触发上滑取消发送
      if (this.initPoint.Y - touche.clientY >= uni.upx2px(100)) {
        this.willStop = true;
        this.recordTis = '松开手指 取消发送';
      } else {
        this.willStop = false;
        this.recordTis = '手指上滑 取消发送';
      }
    },
    // 结束录音
    voiceEnd: function voiceEnd(e) {
      if (!this.recording) {
        return;
      }
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.RECORDER.stop(); //录音结束
    },
    //录音结束(回调文件)
    recordEnd: function recordEnd(e) {var _this11 = this;
      var me = this;
      clearInterval(this.recordTimer);
      if (!this.willStop) {
        console.log("要上传的语音");
        console.log(e.tempFilePath);
        console.log("要上传语音的时长");
        console.log(this.recordLength);
        if (this.recordLength < 1) {
          this.$u.toast("时间过短，请重新录制");
          return;
        }
        //上传文件
        uni.uploadFile({
          url: this.websocketOtherSendUrl,
          method: "POST",
          filePath: e.tempFilePath,
          name: 'file',
          header: {
            'Content-Type': 'application/json',
            'token': uni.getStorageSync('token') },

          formData: {
            "type": 3,
            "chattingId": me.id },

          success: function success(uploadFileRes) {
            uni.hideLoading();
            console.log("成功");
            console.log(uploadFileRes);
            console.log(JSON.parse(uploadFileRes.data));
            var res = JSON.parse(uploadFileRes.data);
            if (res.status == 0) {
              console.log('上传语音成功');
              me.getNewData();
            } else if (res.status == 1) {
              _this11.$u.toast(res.msg);
            }
          } });

      } else {
        console.log('取消发送录音');
      }
      this.willStop = false;
    },
    // 切换语音/文字输入
    switchVoice: function switchVoice() {
      this.hideDrawer();
      this.isVoice = this.isVoice ? false : true;
    },
    discard: function discard() {
      return;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 174:
/*!***************************************************************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/pages/chat/kf-chat.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./kf-chat.vue?vue&type=style&index=0&lang=scss& */ 175);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_kf_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 175:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/uniapp/sfb/sysf_customer_before/pages/chat/kf-chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[168,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/kf-chat.js.map