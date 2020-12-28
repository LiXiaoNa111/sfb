(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!**************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/main.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
var _uniSocketIo = _interopRequireDefault(__webpack_require__(/*! myjs/uni-socket.io.js */ 11));




var _myjs = _interopRequireDefault(__webpack_require__(/*! myjs */ 12));


var _uviewUi = _interopRequireDefault(__webpack_require__(/*! uview-ui */ 37));


var _common = __webpack_require__(/*! myjs/common.js */ 66);










































































































































































































































































































































































































































































































var _interceptor = _interopRequireDefault(__webpack_require__(/*! @/myjs/interceptor.js */ 67));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.config.productionTip = false;_App.default.mpType = 'app';_vue.default.use(_myjs.default);_vue.default.use(_uviewUi.default);_vue.default.prototype.$dianji = _common.dianji;_vue.default.prototype.onoff = true; //处理多次点击
// 存储用户的个人信息
_vue.default.prototype.NAME = "name";_vue.default.prototype.ID = "id"; //用户id
_vue.default.prototype.ISLOGIN = "isLogin"; //是否登录
_vue.default.prototype.READ = "read"; //记住同意阅读
_vue.default.prototype.IPHONE = "iPhone"; //手机号
_vue.default.prototype.TOKEN = "token";_vue.default.prototype.IDCARD = "idCard";_vue.default.prototype.ISID = "isId"; //是否身份认证
_vue.default.prototype.HEADIMG = "headImg"; //头像
_vue.default.prototype.DDD = "dds";_vue.default.prototype.CLINICNAME = "clinicName"; //账号绑定门店
_vue.default.prototype.SEARCHSECORD = "searchRecord"; //搜索记录
_vue.default.prototype.MESSAGELIST = "messageList"; //消息列表
_vue.default.prototype.MYDOCTORLIST = "myDoctorList"; //我的医生列表
_vue.default.prototype.SORTLIST = "sortList"; //商城-科室
_vue.default.prototype.TYPELIST = "typeList"; //商城-分类
_vue.default.prototype.GOODSLIST = "goodsList"; //商城-推荐商品第一页
_vue.default.prototype.DEVICETYPE = "deviceType"; //平台
_vue.default.prototype.SESSIONKEY = "sessionKey"; //微信小程序sessionKey
_vue.default.prototype.KFCHATID = "kfChatId"; //客服聊天室id唯一
/*********************socket*******************/ // Vue.prototype.hzSocketTask=''//患者socket
// Vue.prototype.kfSocketTask=''//客服socket
/*********************end*******************/ //发送通知更新标识
//【注意】移除监听
_vue.default.prototype.PUSHMSG = "pushMsg"; //极光推送信息点击跳转页面标识
_vue.default.prototype.PUSHRECEIVE = "pushReceive"; //极光推送信息接收到通知的时候
_vue.default.prototype.UPDATEID = "updateId"; //身份认证通知
_vue.default.prototype.UPPATIENT = "upPatient"; //上传处方-就诊人选择
_vue.default.prototype.UPDATEUSER = "updateUser"; //上传需求单-就诊人选择
_vue.default.prototype.SUBMITNEED = "submitNeed"; //提交需求单/提交需支付的需求单-通知商品详情需求单个数和需求单列表
_vue.default.prototype.UPDATEUSERADDRESS = "updateUserAddress"; //支付需求单-收货地址选择
_vue.default.prototype.UPDATEADDRESS = "updateAddress"; //添加收货地址定位
_vue.default.prototype.UPDATEADDRESSLIST = "updateAddressList"; //添加收货地址成功列表更新
_vue.default.prototype.ISSHOWFIRSTDATA = "isShowFirstData"; //首页-上传处方-更新首页展示
_vue.default.prototype.UPADMINISTRATIONLIST = "upAdministrationList"; //首页-管理-上传处方/首页-管理-复诊购药-提交复诊单(通知管理列表)
_vue.default.prototype.UPADDRESS = "upAddress"; //我的处方-提交订单-收货地址选择
_vue.default.prototype.UPCARTADDRESS = "upCartAddress"; //商城-商品详情-购物车-提交订单-收货地址选择
_vue.default.prototype.ADDADDRESS = "addAddress"; //我的处方-提交订单-没收货地址去添加
_vue.default.prototype.CONFIRMADDRESS = "confirmAddress"; //商品详情-立即购买-确认订单-添加收货地址
_vue.default.prototype.ADDPATIENT = "addPatient"; //我的处方-提交订单-没就诊人去添加
_vue.default.prototype.NEEDADDPATIENT = "needAddPatient"; //需求单列表-提交需求单(无支付)-没就诊人去添加
_vue.default.prototype.ADDPEOPLE = "addPeople"; //我的-就诊人管理-添加就诊人
_vue.default.prototype.PRESCRIPTIONPATIENT = "prescriptionPatient"; //我的处方-提交订单-就诊人选择(通知提交订单页面)
_vue.default.prototype.PRESCRIPTIONPATIENTT = "prescriptionPatientT"; //我的处方-提交订单-就诊人选择(通知我的处方页面)
_vue.default.prototype.UPRESULTPATIENT = "upResultPatient"; //我的挂号-挂号结果-更换就诊人(通知挂号结果页面)
_vue.default.prototype.UPRESULTPATIENTT = "upResultPatientT"; //我的挂号-挂号结果-更换就诊人（通知我的挂号页面）
_vue.default.prototype.UPIPHONE = "upIphone"; //我的-更换绑定手机号
_vue.default.prototype.INFORMGOODSLIST = "informGoodsList"; //待付款-订单详情-取消订单（通知待付款列表）
_vue.default.prototype.INFORMGOODSLISTADRESS = "informGoodsListAddress"; //待付款-订单详情-修改地址
_vue.default.prototype.INFORMGOODSLISTPAY = "informGoodsListPay"; //待付款-订单详情-付款完成（通知待付款列表）
_vue.default.prototype.INFORMTAKE = "informTake"; //待付款-订单详情-确认收货（通知待付款列表）
_vue.default.prototype.INFORMORDERDELETE = "informOrderDelete"; //待付款-订单详情-删除订单（通知待付款列表）
_vue.default.prototype.INFORMORDERREASONS = "informOrderReasons"; //待付款-订单详情-申请退款成功（通知待付款列表）
_vue.default.prototype.INFORMREGISTRATION = "informRegistration"; //我的挂号单-挂号单结果-退号(通知我的挂号单)
_vue.default.prototype.INFORMORDERREFUNND = "informOrderRefund"; //待付款-售后-退款详情-提交快递信息(通知待付款)
_vue.default.prototype.INFORMNOREAD = "informNoRead"; //消息列表-聊天室(通知消息列表未读消息更新)
_vue.default.prototype.INFORMXTNOREAD = "informXtNoRead"; //消息列表-消息助手列表 已读/全部已读(通知消息列表未读消息更新)
_vue.default.prototype.INFORMNEEDCOUNT = "informNeedCount"; //商城-需求单列表-删除全部需求单后(通知商品详情需求单个数)
_vue.default.prototype.INFORMCHATLIST = "informChatList"; //消息记录-提交问诊单(通知消息记录)
_vue.default.prototype.INFORMCHATGOODS = "informChatGoods"; //商品详情-购物车-删除商品(通知详情购物车中商品个数)
_vue.default.prototype.INFORMCHATUPGOODS = "informChatUpGoods"; //商品详情-购物车-提交商品(通知详情购物车中商品个数和购物车列表)
_vue.default.prototype.INFORMLOGIN = "informLogin"; //登录成功通知登录状态
_vue.default.prototype.INFORMBACKLOGIN = "informBackLogin"; //挂号进入登录页面返回通知(app)
_vue.default.prototype.INFORMBACKLOGINWX = "informBackLoginWX"; //挂号进入登录页面返回通知(微信小程序)
_vue.default.prototype.INFORMBACKLOGINME = "informBackLoginMe"; //我的进入登录页面返回通知(app)
_vue.default.prototype.INFORMBACKLOGINWXME = "informBackLoginWXMe"; //我的进入登录页面返回通知(微信小程序)
_vue.default.prototype.LOGINSOCKET = "loginSocket"; //登录成功连接socket
_vue.default.prototype.SOCKETKFCHAT = "SocketKfChat"; //客服接收到消息通知聊天记录
_vue.default.prototype.SOCKETCHAT = "SocketChat"; //患者接收到消息通知聊天记录
// baseurl
// Vue.prototype.ServerUrl = "http://feiyang.nat300.top/mall/"
// Vue.prototype.ServerUrl = "http://192.168.10.25:8084/mall/"
// Vue.prototype.ServerUrl = "http://47.103.104.99/mall/"
_vue.default.prototype.ServerUrl = "https://www.hzsysf.com/mall/"; //商品分享微信打开路径
_vue.default.prototype.shopDetailPath = "https://www.hzsysf.com/sfb/#/pages/shop-details/shop-details?id="; //h5手机版下载地址 （固定的）
_vue.default.prototype.h5APPPath = "https://www.hzsysf.com/download/sfb.apk"; //ios引导用户去应用商店 (id刚换当前应用idbug)
_vue.default.prototype.AppStorePath = "https://itunes.apple.com/cn/app/shangyishangfang/id1538912306"; //获取那个平台Android还是ios 用于h5去下载应用
_vue.default.prototype.VersionPlatformUrl = "version/platform"; // (一)小程序登录获取sessionkey
_vue.default.prototype.miniWXKeyUrl = "mini/wx1ff35ed99cbee82d/key"; //（二）小程序登录获取用户信息
_vue.default.prototype.miniWXInfoUrl = "mini/wx1ff35ed99cbee82d/info"; //（三）小程序登录获取手机号
_vue.default.prototype.miniWXPhoneUrl = "mini/wx1ff35ed99cbee82d/phone"; //（四）小程序登录绑定手机号
_vue.default.prototype.customerWXPhoneUrl = "customer/mini/phone"; //(1)苹果登录
_vue.default.prototype.appleLoginUrl = "customer/login/apple"; //用户协议/隐私政策
_vue.default.prototype.VersionLawUrl = "version/law"; //获取患者信息 
_vue.default.prototype.CustomerInfoUrl = "customer/info"; //客服电话
_vue.default.prototype.appKfUrl = "app/kf"; // 获取验证码
_vue.default.prototype.getCodeUrl = "phone/code"; // 登录
_vue.default.prototype.loginUrl = "customer/login"; //微信登录
_vue.default.prototype.WXLoginUrl = "customer/login/wx"; // 首诊-为你推荐
_vue.default.prototype.recommendUrl = "recommend/list"; // 挂号-我的医生列表
_vue.default.prototype.myDoctorListUrl = "doc/list/my"; //根据城市和科室搜索医生
_vue.default.prototype.doctorListUrl = "doc/list"; //挂号-我的医生详情 docId
_vue.default.prototype.myDoctorDetailUrl = "doc/detail"; // 首诊-患者身份认证
_vue.default.prototype.customerAuthUrl = "customer/auth"; //获取首诊病例列表 复诊管理
_vue.default.prototype.firstListUrl = "first/list"; //获取首诊病例医生或者推荐医生?=1
_vue.default.prototype.firstDocsUrl = "first/docs"; //挂号 医生地址 科室 
_vue.default.prototype.docAddressUrl = "doc/address"; //设置首诊病历是否在主页显示
_vue.default.prototype.firstShowUrl = "first/show"; // Vue.prototype.hzSocket = 'wss://www.hzsysf.com/socket?user='
// Vue.prototype.hzSocket = "http://47.103.104.99:8077?user="
_vue.default.prototype.socket = ''; // socket.io通讯实现聊天
_vue.default.prototype.socketLocal = function (id) {_vue.default.prototype.socket = (0, _uniSocketIo.default)("http://47.103.104.99:8077?user=" + id, { transports: ['websocket'] });return _vue.default.prototype.socket;}; //聊天发送消息 
_vue.default.prototype.sendChatUrl = _vue.default.prototype.ServerUrl + "send/chat"; //获取消息列表 
_vue.default.prototype.customerMsgChatsUrl = "customer/msg/chats"; //删除聊天室
_vue.default.prototype.customerMsgChatDeleteUrl = "customer/msg/chat/delete"; //获取聊天记录
_vue.default.prototype.customerMsgRecordUrl = "customer/msg/record"; //获取未读消息总数 
_vue.default.prototype.customerMsgCountUrl = "customer/msg/count"; //获取商品科室分类列表
_vue.default.prototype.departmentSortListUrl = "department/sort/list"; //商品列表
_vue.default.prototype.goodsListUrl = "goods/list"; //商品详情 
_vue.default.prototype.goodsDetailUrl = "goods/detail"; //获取商品主页商品目录
_vue.default.prototype.goodsSortUrl = "goods/sort"; //购物车列表 
_vue.default.prototype.cartListUrl = "cart/list"; //加入购物车
_vue.default.prototype.cartAddUrl = "cart/add"; //获取购物车中商品总数
_vue.default.prototype.cartCountUrl = "cart/count"; //购物车改变商品数量
_vue.default.prototype.cartUpdateUrl = "cart/update"; //选中或取消选中某一商品
_vue.default.prototype.cartSelectUrl = "cart/select"; //购物车全选、全不选
_vue.default.prototype.cartSelectAllUrl = "cart/select/all"; //需求单列表
_vue.default.prototype.needListUrl = "need/list"; //需求单角标数量
_vue.default.prototype.needCountUrl = "need/count"; //更新需求单商品数量
_vue.default.prototype.needUpdateUrl = "need/update"; //删除需求单中的商品
_vue.default.prototype.needDeleteUrl = "need/delete"; //加入需求单
_vue.default.prototype.needAddUrl = "need/add"; //提交需求单（一）没有处方笺提交症状等待系统医生开具处方
_vue.default.prototype.needSubmitSymptomUrl = "need/submit/symptom"; //提交需求单(二) 支付。患者上传处方后直接支付需求单费用
_vue.default.prototype.needSubmitPayUrl = "need/submit/pay"; //就诊人列表
_vue.default.prototype.patientListUrl = "patient/list"; //获取默认就诊人
_vue.default.prototype.patientDefaultUrl = "patient/default"; //添加就诊人
_vue.default.prototype.patientAddUrl = "patient/add"; //上传文件
_vue.default.prototype.utilUploadUrl = _vue.default.prototype.ServerUrl + "util/upload"; //获取默认收货地址
_vue.default.prototype.addressDefaultUrl = "address/default"; //收货地址列表
_vue.default.prototype.addressListUrl = "address/list"; //添加收货地址
_vue.default.prototype.addressAddUrl = "address/add"; //设置默认收货地址
_vue.default.prototype.addressDefaultSetUrl = "address/default/set"; //删除/编辑收货地址
_vue.default.prototype.addressUpdateUrl = "address/update"; //我的处方列表
_vue.default.prototype.caseListUrl = "case/list"; //获取未下单处方详情（去下单）
_vue.default.prototype.caseDetailUrl = "case/detail"; //设置处方取货方式及是否代煎（代煎为中药饮片专有）
_vue.default.prototype.caseSetDetailUrl = "case/set/detail"; //设置处方的就诊人
_vue.default.prototype.caseSetPatientUrl = "case/set/patient"; //处方订单提交支付
_vue.default.prototype.orderCaseSubmitUrl = "order/case/submit"; //获取未读消息总数
_vue.default.prototype.customerMsgCountUrl = "customer/msg/count"; //获取首诊病历列表
_vue.default.prototype.firstListUrl = "first/list"; //上传首诊病历
_vue.default.prototype.firstUploadUrl = _vue.default.prototype.ServerUrl + "first/upload"; //购物车提交订单
_vue.default.prototype.orderCartCreateUrl = "order/cart/create"; //复诊单问题 
_vue.default.prototype.questionDetailUrl = "question/detail"; //提交复诊单
_vue.default.prototype.questionSubmitUrl = "question/submit"; //复诊单详情
_vue.default.prototype.reviewDetailUrl = "review/detail"; //复诊记录
_vue.default.prototype.reviewListUrl = "review/list"; //删除复诊记录
_vue.default.prototype.reviewDeleteUrl = "review/delete"; //撤销复诊记录
_vue.default.prototype.reviewCancelUrl = "review/cancel"; //首页就诊人选择列表
_vue.default.prototype.firstPatientsUrl = "first/patients"; //尚方宝助手消息记录
_vue.default.prototype.customerMsgBroadcastUrl = "customer/msg/broadcast"; //去挂号支付
_vue.default.prototype.payAliRegistrationUrl = "pay/registration"; //免费挂号
_vue.default.prototype.freeRegistrationUrl = "registration/free"; //挂号结果
_vue.default.prototype.resultRegistrationUrl = "registration/result"; //更换或添加挂号就诊人信息
_vue.default.prototype.patientRegistrationUrl = "registration/patient"; //我的挂号列表
_vue.default.prototype.listRegistrationUrl = "registration/list"; //首页轮播图 imgType= 1启动页 2主页滚动 3引导页 4 挂号页  5找医生
_vue.default.prototype.imgListUrl = "img/list"; //轮播详情
_vue.default.prototype.imgDetailUrl = "img/detail"; //设置头像
_vue.default.prototype.customerAvatarUrl = _vue.default.prototype.ServerUrl + "customer/avatar"; //获取更换手机号验证码
_vue.default.prototype.customerPhoneCodeUrl = "customer/phone/code"; //更换绑定手机号
_vue.default.prototype.customerPhoneUrl = "customer/phone"; //立即购买
_vue.default.prototype.orderGoodsCreateUrl = "order/goods/create"; //获取创建订单结果页
_vue.default.prototype.orderResultUrl = "order/result"; //订单结果页去支付
_vue.default.prototype.orderPayUrl = "order/pay"; //微信登录绑定手机号
_vue.default.prototype.customerBindPhoneUrl = "customer/bind/phone"; //需求单提交记录列表
_vue.default.prototype.needSubmitListUrl = "need/submit/list"; //扫码
_vue.default.prototype.scanContentUrl = "scan/content"; //订单列表
_vue.default.prototype.orderListUrl = "order/list"; //订单详情
_vue.default.prototype.orderDetailUrl = "order/detail"; //申请退款售后
_vue.default.prototype.orderRefundApplyUrl = "order/refund/apply"; //查询物流
_vue.default.prototype.expressDetailUrl = "express/detail"; //取消订单
_vue.default.prototype.orderCancelUrl = "order/cancel"; //删除订单
_vue.default.prototype.orderDeleteUrl = "order/delete"; //提醒发货
_vue.default.prototype.orderSendTipUrl = "order/send/tip"; //修改收货地址
_vue.default.prototype.orderAddressUrl = "order/address"; //查看物流
_vue.default.prototype.expressDetailUrl = "express/detail"; //确认收货
_vue.default.prototype.orderReceiveUrl = "order/receive"; //售后原因列表
_vue.default.prototype.orderReasonsUrl = "order/reasons"; //申请售后
_vue.default.prototype.orderRefundApplyUrl = "order/refund/apply"; //（首页）复诊购药记录
_vue.default.prototype.crrDetailUrl = "crr/detail"; //获取热门搜索
_vue.default.prototype.searchListUrl = "search/list"; //挂号单撤单
_vue.default.prototype.registrationRefundUrl = "registration/refund"; //按症找药分类
_vue.default.prototype.symptomListUrl = "symptom/list"; //售后中填写退货快递信息
_vue.default.prototype.orderRefundExpressUrl = "order/refund/express"; //获取快递公司列表
_vue.default.prototype.expressListUrl = "express/list"; //售后详情
_vue.default.prototype.orderRefundDetailUrl = "order/refund/detail"; //助手信息
_vue.default.prototype.customerMsgHelpsUrl = "customer/msg/helps"; //助手信息为已读
_vue.default.prototype.customerMsgReadUrl = "customer/msg/read"; //助手信息全部已读
_vue.default.prototype.customerMsgReadsUrl = "customer/msg/reads"; //订单统计
_vue.default.prototype.orderCountUrl = "order/count"; //获取问诊单详情
_vue.default.prototype.questionInterDetailUrl = "question/inter/detail"; //提交问诊单
_vue.default.prototype.questionInterAnswerUrl = "question/inter/answer"; //删除复诊单
_vue.default.prototype.reviewDeleteUrl = "review/delete"; //撤销复诊单
_vue.default.prototype.reviewCancelUrl = "review/cancel"; //删除购物车中商品
_vue.default.prototype.cartDeleteUrl = "cart/delete"; //查看处方笺
_vue.default.prototype.caseCaseBillUrl = "case/case/bill"; //医生信息
_vue.default.prototype.docInfoUrl = "doc/info"; //获取APP版本更新信息
_vue.default.prototype.versionUrl = "version"; //扫门店码，查询坐诊医生列表
_vue.default.prototype.docSelectDocByClinicUrl = "doc/selectDocByClinic"; //首页为你推荐中新闻详情
_vue.default.prototype.newsDetailUrl = "recommend/newsDetail"; //绑定医患关系
_vue.default.prototype.bindUserSourceUrl = "scan/bindUserSource"; //----------------------------------客服聊天--------------------------------------
//socket通讯
_vue.default.prototype.websocketUrl = "ws://192.168.10.254:8085/kf/websocket/app/";_vue.default.prototype.kfServerUrl = "http://192.168.10.254:8085/kf/"; //医生/患者端获取房间id
_vue.default.prototype.chattingIdUrl = _vue.default.prototype.kfServerUrl + "websocket/getChattingId"; //医生/患者聊天记录
_vue.default.prototype.ChattingChatRecordUrl = _vue.default.prototype.kfServerUrl + "Chatting/chatRecord"; //患者医生发送消息
_vue.default.prototype.websocketOtherSendUrl = _vue.default.prototype.kfServerUrl + "websocket/otherSend"; //---------------------------------------end----------------------------------------
var app = new _vue.default(_objectSpread({}, _App.default)); // http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
_vue.default.use(_interceptor.default, app);createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!**************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/App.vue ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 6);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 8);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!***************************************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 7);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/uniapp/sfb/sysf_customer_before/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  onLaunch: function onLaunch() {var _this = this;
    console.log('App Launch');

    //判断平台 用于支付	0APP 1小程序 2H5







    uni.setStorageSync(this.DEVICETYPE, 1);


    // 竖屏 ios







    //全局初始化一次 如果登录的话 就初始一次socket 没登录的话 就在登录的时候初始
    //由于在引导页检测是否登录中已经初始化socket 所以这个地方没必要再初始化 一样的性质
    var isLogin = uni.getStorageSync(this.ISLOGIN);
    if (isLogin) {
      this.goSocket();
    }
    uni.$on(this.LOGINSOCKET, function (data) {
      console.log("登录成功来连接socket");
      _this.goSocket();
    });





































    //热更新

































































  },
  data: function data() {
    return {
      kfSocketTask: '' };

  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onUnload: function onUnload() {
    //从应用中去登录成功后给通知更换用户的登录状态
    //由于通知有好几处 所以到当前页面收到通知之后不能立即移除监听
    uni.$off(this.INFORMLOGIN);
    uni.$off(this.LOGINSOCKET);
    //断开socket连接
    this.kfSocketTask.close();
    this.socket.disconnect();
  },
  methods: {
    goSocket: function goSocket() {
      var me = this;
      var id = 'customer_' + uni.getStorageSync(this.ID);
      console.log('患者WebSocket连接id:' + id);
      this.socketLocal(id);
      this.socket.on("chat", function (message) {
        console.log('患者app患者收到服务器内容：' + message);

        var pages = getCurrentPages();
        var page = pages[pages.length - 1];
        console.log(page.route);
        if (page.route == "pages/chat/chat") {
          uni.$emit(me.SOCKETCHAT, message);
        } else {
          uni.$emit(me.INFORMNOREAD, '');
        }
        uni.vibrateLong();
      });

      this.getCustomerId();

    },
    getCustomerId: function getCustomerId() {
      var me = this;
      uni.request({
        url: this.chattingIdUrl,
        data: {
          type: 2,
          id: uni.getStorageSync(this.ID) },

        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'token': uni.getStorageSync('token') },

        method: 'POST',
        success: function success(res) {
          me.id = res.data.data.id;
          console.log("获取聊天室id" + me.id);
          uni.setStorageSync(me.KFCHATID, me.id);
          console.log("连接客服的socket：" + me.websocketUrl + me.id + "customer");
          me.kfSocketTask = uni.connectSocket({
            url: me.websocketUrl + me.id + "customer",
            complete: function complete() {} });



          /* ********************客服*********************/
          me.kfSocketTask.onOpen(function (res) {
            console.log('客服WebSocket连接已打开！');
          });

          me.kfSocketTask.onError(function (res) {
            console.log('客服WebSocket连接打开失败，请检查！');
            console.log(JSON.stringify(res));
          });

          me.kfSocketTask.onMessage(function (res) {
            console.log('客服app患者收到服务器内容：' + res.data);
            //如果当前页面是聊天页就去通知kfchat 否则刷新未读消息数
            var pages = getCurrentPages();
            var page = pages[pages.length - 1];
            console.log(page.route);
            if (page.route == "pages/chat/kf-chat") {
              uni.$emit(me.SOCKETKFCHAT, res.data);
            } else {
              uni.$emit(me.INFORMNOREAD, '');
            }
            uni.vibrateLong();
          });

          me.kfSocketTask.onClose(function (res) {
            console.log('客服WebSocket 已关闭！');
          });
        },
        fail: function fail(ex) {
          console.log("获取客服聊天室id error");
          console.log(ex);
        } });

    } },

  onHide: function onHide() {
    console.log('App Hide');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 8 */
/*!***********************************************************************************!*\
  !*** F:/uniapp/sfb/sysf_customer_before/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 9);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/uniapp/sfb/sysf_customer_before/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map