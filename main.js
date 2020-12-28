import Vue from 'vue'
import App from './App'
import io from "myjs/uni-socket.io.js"

Vue.config.productionTip = false

App.mpType = 'app'
import uView from 'myjs'
Vue.use(uView);

import uViewa from 'uview-ui';
Vue.use(uViewa);

import {
	dianji
} from 'myjs/common.js'
Vue.prototype.$dianji = dianji;
Vue.prototype.onoff = true //处理多次点击



// 存储用户的个人信息
Vue.prototype.NAME = "name"
Vue.prototype.ID = "id" //用户id
Vue.prototype.ISLOGIN = "isLogin" //是否登录
Vue.prototype.READ = "read" //记住同意阅读
Vue.prototype.IPHONE = "iPhone" //手机号
Vue.prototype.TOKEN = "token"
Vue.prototype.IDCARD = "idCard"
Vue.prototype.ISID = "isId" //是否身份认证
Vue.prototype.HEADIMG = "headImg" //头像
Vue.prototype.DDD = "dds"
Vue.prototype.CLINICNAME = "clinicName" //账号绑定门店
Vue.prototype.SEARCHSECORD = "searchRecord" //搜索记录
Vue.prototype.MESSAGELIST = "messageList" //消息列表
Vue.prototype.MYDOCTORLIST = "myDoctorList" //我的医生列表
Vue.prototype.SORTLIST = "sortList" //商城-科室
Vue.prototype.TYPELIST = "typeList" //商城-分类
Vue.prototype.GOODSLIST = "goodsList" //商城-推荐商品第一页
Vue.prototype.DEVICETYPE = "deviceType" //平台
Vue.prototype.SESSIONKEY = "sessionKey" //微信小程序sessionKey
Vue.prototype.KFCHATID = "kfChatId" //客服聊天室id唯一

/*********************socket*******************/
// Vue.prototype.hzSocketTask=''//患者socket
// Vue.prototype.kfSocketTask=''//客服socket
/*********************end*******************/

//发送通知更新标识
//【注意】移除监听
Vue.prototype.PUSHMSG = "pushMsg" //极光推送信息点击跳转页面标识
Vue.prototype.PUSHRECEIVE = "pushReceive" //极光推送信息接收到通知的时候
Vue.prototype.UPDATEID = "updateId" //身份认证通知
Vue.prototype.UPPATIENT = "upPatient" //上传处方-就诊人选择
Vue.prototype.UPDATEUSER = "updateUser" //上传需求单-就诊人选择
Vue.prototype.SUBMITNEED = "submitNeed" //提交需求单/提交需支付的需求单-通知商品详情需求单个数和需求单列表
Vue.prototype.UPDATEUSERADDRESS = "updateUserAddress" //支付需求单-收货地址选择
Vue.prototype.UPDATEADDRESS = "updateAddress" //添加收货地址定位
Vue.prototype.UPDATEADDRESSLIST = "updateAddressList" //添加收货地址成功列表更新
Vue.prototype.ISSHOWFIRSTDATA = "isShowFirstData" //首页-上传处方-更新首页展示
Vue.prototype.UPADMINISTRATIONLIST = "upAdministrationList" //首页-管理-上传处方/首页-管理-复诊购药-提交复诊单(通知管理列表)
Vue.prototype.UPADDRESS = "upAddress" //我的处方-提交订单-收货地址选择
Vue.prototype.UPCARTADDRESS = "upCartAddress" //商城-商品详情-购物车-提交订单-收货地址选择
Vue.prototype.ADDADDRESS = "addAddress" //我的处方-提交订单-没收货地址去添加
Vue.prototype.CONFIRMADDRESS = "confirmAddress" //商品详情-立即购买-确认订单-添加收货地址
Vue.prototype.ADDPATIENT = "addPatient" //我的处方-提交订单-没就诊人去添加
Vue.prototype.NEEDADDPATIENT = "needAddPatient" //需求单列表-提交需求单(无支付)-没就诊人去添加
Vue.prototype.ADDPEOPLE = "addPeople" //我的-就诊人管理-添加就诊人
Vue.prototype.PRESCRIPTIONPATIENT = "prescriptionPatient" //我的处方-提交订单-就诊人选择(通知提交订单页面)
Vue.prototype.PRESCRIPTIONPATIENTT = "prescriptionPatientT" //我的处方-提交订单-就诊人选择(通知我的处方页面)
Vue.prototype.UPRESULTPATIENT = "upResultPatient" //我的挂号-挂号结果-更换就诊人(通知挂号结果页面)
Vue.prototype.UPRESULTPATIENTT = "upResultPatientT" //我的挂号-挂号结果-更换就诊人（通知我的挂号页面）
Vue.prototype.UPIPHONE = "upIphone" //我的-更换绑定手机号
Vue.prototype.INFORMGOODSLIST = "informGoodsList" //待付款-订单详情-取消订单（通知待付款列表）
Vue.prototype.INFORMGOODSLISTADRESS = "informGoodsListAddress" //待付款-订单详情-修改地址
Vue.prototype.INFORMGOODSLISTPAY = "informGoodsListPay" //待付款-订单详情-付款完成（通知待付款列表）
Vue.prototype.INFORMTAKE = "informTake" //待付款-订单详情-确认收货（通知待付款列表）
Vue.prototype.INFORMORDERDELETE = "informOrderDelete" //待付款-订单详情-删除订单（通知待付款列表）
Vue.prototype.INFORMORDERREASONS = "informOrderReasons" //待付款-订单详情-申请退款成功（通知待付款列表）
Vue.prototype.INFORMREGISTRATION = "informRegistration" //我的挂号单-挂号单结果-退号(通知我的挂号单)
Vue.prototype.INFORMORDERREFUNND = "informOrderRefund" //待付款-售后-退款详情-提交快递信息(通知待付款)
Vue.prototype.INFORMNOREAD = "informNoRead" //消息列表-聊天室(通知消息列表未读消息更新)
Vue.prototype.INFORMXTNOREAD = "informXtNoRead" //消息列表-消息助手列表 已读/全部已读(通知消息列表未读消息更新)
Vue.prototype.INFORMNEEDCOUNT = "informNeedCount" //商城-需求单列表-删除全部需求单后(通知商品详情需求单个数)
Vue.prototype.INFORMCHATLIST = "informChatList" //消息记录-提交问诊单(通知消息记录)
Vue.prototype.INFORMCHATGOODS = "informChatGoods" //商品详情-购物车-删除商品(通知详情购物车中商品个数)
Vue.prototype.INFORMCHATUPGOODS = "informChatUpGoods" //商品详情-购物车-提交商品(通知详情购物车中商品个数和购物车列表)
Vue.prototype.INFORMLOGIN = "informLogin" //登录成功通知登录状态
Vue.prototype.INFORMBACKLOGIN = "informBackLogin" //挂号进入登录页面返回通知(app)
Vue.prototype.INFORMBACKLOGINWX = "informBackLoginWX" //挂号进入登录页面返回通知(微信小程序)
Vue.prototype.INFORMBACKLOGINME = "informBackLoginMe" //我的进入登录页面返回通知(app)
Vue.prototype.INFORMBACKLOGINWXME = "informBackLoginWXMe" //我的进入登录页面返回通知(微信小程序)
Vue.prototype.LOGINSOCKET = "loginSocket" //登录成功连接socket
Vue.prototype.SOCKETKFCHAT = "SocketKfChat" //客服接收到消息通知聊天记录
Vue.prototype.SOCKETCHAT = "SocketChat" //患者接收到消息通知聊天记录

// baseurl
// Vue.prototype.ServerUrl = "http://feiyang.nat300.top/mall/"
// Vue.prototype.ServerUrl = "http://192.168.10.25:8084/mall/"
// Vue.prototype.ServerUrl = "http://47.103.104.99/mall/"
Vue.prototype.ServerUrl = "https://www.hzsysf.com/mall/"

//商品分享微信打开路径
Vue.prototype.shopDetailPath = "https://www.hzsysf.com/sfb/#/pages/shop-details/shop-details?id="

//h5手机版下载地址 （固定的）
Vue.prototype.h5APPPath ="https://www.hzsysf.com/download/sfb.apk";

//ios引导用户去应用商店 (id刚换当前应用idbug)
Vue.prototype.AppStorePath ="https://itunes.apple.com/cn/app/shangyishangfang/id1538912306";

//获取那个平台Android还是ios 用于h5去下载应用
Vue.prototype.VersionPlatformUrl ="version/platform";

// (一)小程序登录获取sessionkey
Vue.prototype.miniWXKeyUrl ="mini/wx1ff35ed99cbee82d/key";

//（二）小程序登录获取用户信息
Vue.prototype.miniWXInfoUrl ="mini/wx1ff35ed99cbee82d/info";

//（三）小程序登录获取手机号
Vue.prototype.miniWXPhoneUrl ="mini/wx1ff35ed99cbee82d/phone";

//（四）小程序登录绑定手机号
Vue.prototype.customerWXPhoneUrl ="customer/mini/phone";

//(1)苹果登录
Vue.prototype.appleLoginUrl ="customer/login/apple";

//用户协议/隐私政策
Vue.prototype.VersionLawUrl ="version/law";

//获取患者信息 
Vue.prototype.CustomerInfoUrl ="customer/info";

//客服电话
Vue.prototype.appKfUrl ="app/kf";

// 获取验证码
Vue.prototype.getCodeUrl = "phone/code"

// 登录
Vue.prototype.loginUrl = "customer/login"

//微信登录
Vue.prototype.WXLoginUrl = "customer/login/wx"

// 首诊-为你推荐
Vue.prototype.recommendUrl = "recommend/list"

// 挂号-我的医生列表
Vue.prototype.myDoctorListUrl = "doc/list/my"

//根据城市和科室搜索医生
Vue.prototype.doctorListUrl = "doc/list"

//挂号-我的医生详情 docId
Vue.prototype.myDoctorDetailUrl = "doc/detail"

// 首诊-患者身份认证
Vue.prototype.customerAuthUrl = "customer/auth"

//获取首诊病例列表 复诊管理
Vue.prototype.firstListUrl = "first/list"

//获取首诊病例医生或者推荐医生?=1
Vue.prototype.firstDocsUrl = "first/docs"

//挂号 医生地址 科室 
Vue.prototype.docAddressUrl = "doc/address"

//设置首诊病历是否在主页显示
Vue.prototype.firstShowUrl = "first/show"

// Vue.prototype.hzSocket = 'wss://www.hzsysf.com/socket?user='
// Vue.prototype.hzSocket = "http://47.103.104.99:8077?user="

Vue.prototype.socket = ''
// socket.io通讯实现聊天
Vue.prototype.socketLocal = function(id) {
	Vue.prototype.socket = io(`http://47.103.104.99:8077?user=`+id, {
		transports: ['websocket']
	});
	return Vue.prototype.socket
}

//聊天发送消息 
Vue.prototype.sendChatUrl = Vue.prototype.ServerUrl + "send/chat"

//获取消息列表 
Vue.prototype.customerMsgChatsUrl = "customer/msg/chats"

//删除聊天室
Vue.prototype.customerMsgChatDeleteUrl = "customer/msg/chat/delete"

//获取聊天记录
Vue.prototype.customerMsgRecordUrl = "customer/msg/record"

//获取未读消息总数 
Vue.prototype.customerMsgCountUrl = "customer/msg/count"

//获取商品科室分类列表
Vue.prototype.departmentSortListUrl = "department/sort/list"

//商品列表
Vue.prototype.goodsListUrl = "goods/list"

//商品详情 
Vue.prototype.goodsDetailUrl = "goods/detail"

//获取商品主页商品目录
Vue.prototype.goodsSortUrl = "goods/sort"

//购物车列表 
Vue.prototype.cartListUrl = "cart/list"

//加入购物车
Vue.prototype.cartAddUrl = "cart/add"

//获取购物车中商品总数
Vue.prototype.cartCountUrl = "cart/count"

//购物车改变商品数量
Vue.prototype.cartUpdateUrl = "cart/update"

//选中或取消选中某一商品
Vue.prototype.cartSelectUrl = "cart/select"

//购物车全选、全不选
Vue.prototype.cartSelectAllUrl = "cart/select/all"

//需求单列表
Vue.prototype.needListUrl = "need/list"

//需求单角标数量
Vue.prototype.needCountUrl = "need/count"

//更新需求单商品数量
Vue.prototype.needUpdateUrl = "need/update"

//删除需求单中的商品
Vue.prototype.needDeleteUrl = "need/delete"

//加入需求单
Vue.prototype.needAddUrl = "need/add"

//提交需求单（一）没有处方笺提交症状等待系统医生开具处方
Vue.prototype.needSubmitSymptomUrl = "need/submit/symptom"

//提交需求单(二) 支付。患者上传处方后直接支付需求单费用
Vue.prototype.needSubmitPayUrl = "need/submit/pay"

//就诊人列表
Vue.prototype.patientListUrl = "patient/list"

//获取默认就诊人
Vue.prototype.patientDefaultUrl = "patient/default"

//添加就诊人
Vue.prototype.patientAddUrl = "patient/add"

//上传文件
Vue.prototype.utilUploadUrl = Vue.prototype.ServerUrl + "util/upload"

//获取默认收货地址
Vue.prototype.addressDefaultUrl = "address/default"

//收货地址列表
Vue.prototype.addressListUrl = "address/list"

//添加收货地址
Vue.prototype.addressAddUrl = "address/add"

//设置默认收货地址
Vue.prototype.addressDefaultSetUrl = "address/default/set"

//删除/编辑收货地址
Vue.prototype.addressUpdateUrl = "address/update"

//我的处方列表
Vue.prototype.caseListUrl = "case/list"

//获取未下单处方详情（去下单）
Vue.prototype.caseDetailUrl = "case/detail"

//设置处方取货方式及是否代煎（代煎为中药饮片专有）
Vue.prototype.caseSetDetailUrl = "case/set/detail"

//设置处方的就诊人
Vue.prototype.caseSetPatientUrl = "case/set/patient"

//处方订单提交支付
Vue.prototype.orderCaseSubmitUrl = "order/case/submit"

//获取未读消息总数
Vue.prototype.customerMsgCountUrl = "customer/msg/count"

//获取首诊病历列表
Vue.prototype.firstListUrl = "first/list"

//上传首诊病历
Vue.prototype.firstUploadUrl = Vue.prototype.ServerUrl + "first/upload"

//购物车提交订单
Vue.prototype.orderCartCreateUrl = "order/cart/create"

//复诊单问题 
Vue.prototype.questionDetailUrl = "question/detail"

//提交复诊单
Vue.prototype.questionSubmitUrl = "question/submit"

//复诊单详情
Vue.prototype.reviewDetailUrl = "review/detail"

//复诊记录
Vue.prototype.reviewListUrl = "review/list"

//删除复诊记录
Vue.prototype.reviewDeleteUrl = "review/delete"

//撤销复诊记录
Vue.prototype.reviewCancelUrl = "review/cancel"

//首页就诊人选择列表
Vue.prototype.firstPatientsUrl = "first/patients"

//尚方宝助手消息记录
Vue.prototype.customerMsgBroadcastUrl = "customer/msg/broadcast"

//去挂号支付
Vue.prototype.payAliRegistrationUrl = "pay/registration"

//免费挂号
Vue.prototype.freeRegistrationUrl = "registration/free"

//挂号结果
Vue.prototype.resultRegistrationUrl = "registration/result"

//更换或添加挂号就诊人信息
Vue.prototype.patientRegistrationUrl = "registration/patient"

//我的挂号列表
Vue.prototype.listRegistrationUrl = "registration/list"

//首页轮播图 imgType= 1启动页 2主页滚动 3引导页 4 挂号页  5找医生
Vue.prototype.imgListUrl = "img/list"

//轮播详情
Vue.prototype.imgDetailUrl = "img/detail"

//设置头像
Vue.prototype.customerAvatarUrl = Vue.prototype.ServerUrl + "customer/avatar"

//获取更换手机号验证码
Vue.prototype.customerPhoneCodeUrl = "customer/phone/code"

//更换绑定手机号
Vue.prototype.customerPhoneUrl = "customer/phone"

//立即购买
Vue.prototype.orderGoodsCreateUrl = "order/goods/create"

//获取创建订单结果页
Vue.prototype.orderResultUrl = "order/result"

//订单结果页去支付
Vue.prototype.orderPayUrl = "order/pay"

//微信登录绑定手机号
Vue.prototype.customerBindPhoneUrl = "customer/bind/phone"

//需求单提交记录列表
Vue.prototype.needSubmitListUrl = "need/submit/list"

//扫码
Vue.prototype.scanContentUrl = "scan/content"

//订单列表
Vue.prototype.orderListUrl = "order/list"

//订单详情
Vue.prototype.orderDetailUrl = "order/detail"

//申请退款售后
Vue.prototype.orderRefundApplyUrl = "order/refund/apply"

//查询物流
Vue.prototype.expressDetailUrl = "express/detail"

//取消订单
Vue.prototype.orderCancelUrl = "order/cancel"

//删除订单
Vue.prototype.orderDeleteUrl = "order/delete"

//提醒发货
Vue.prototype.orderSendTipUrl = "order/send/tip"

//修改收货地址
Vue.prototype.orderAddressUrl = "order/address"

//查看物流
Vue.prototype.expressDetailUrl = "express/detail"

//确认收货
Vue.prototype.orderReceiveUrl = "order/receive"

//售后原因列表
Vue.prototype.orderReasonsUrl = "order/reasons"

//申请售后
Vue.prototype.orderRefundApplyUrl = "order/refund/apply"

//（首页）复诊购药记录
Vue.prototype.crrDetailUrl = "crr/detail"

//获取热门搜索
Vue.prototype.searchListUrl = "search/list"

//挂号单撤单
Vue.prototype.registrationRefundUrl = "registration/refund"

//按症找药分类
Vue.prototype.symptomListUrl = "symptom/list"

//售后中填写退货快递信息
Vue.prototype.orderRefundExpressUrl = "order/refund/express"

//获取快递公司列表
Vue.prototype.expressListUrl = "express/list"

//售后详情
Vue.prototype.orderRefundDetailUrl = "order/refund/detail"

//助手信息
Vue.prototype.customerMsgHelpsUrl = "customer/msg/helps"

//助手信息为已读
Vue.prototype.customerMsgReadUrl = "customer/msg/read"

//助手信息全部已读
Vue.prototype.customerMsgReadsUrl = "customer/msg/reads"

//订单统计
Vue.prototype.orderCountUrl = "order/count"

//获取问诊单详情
Vue.prototype.questionInterDetailUrl = "question/inter/detail"

//提交问诊单
Vue.prototype.questionInterAnswerUrl = "question/inter/answer"

//删除复诊单
Vue.prototype.reviewDeleteUrl = "review/delete"

//撤销复诊单
Vue.prototype.reviewCancelUrl = "review/cancel"

//删除购物车中商品
Vue.prototype.cartDeleteUrl = "cart/delete"

//查看处方笺
Vue.prototype.caseCaseBillUrl = "case/case/bill"

//医生信息
Vue.prototype.docInfoUrl = "doc/info"

//获取APP版本更新信息
Vue.prototype.versionUrl = "version"

//扫门店码，查询坐诊医生列表
Vue.prototype.docSelectDocByClinicUrl = "doc/selectDocByClinic"

//首页为你推荐中新闻详情
Vue.prototype.newsDetailUrl = "recommend/newsDetail"

//绑定医患关系
Vue.prototype.bindUserSourceUrl = "scan/bindUserSource"

//----------------------------------客服聊天--------------------------------------

//socket通讯
Vue.prototype.websocketUrl = "ws://192.168.10.254:8085/kf/websocket/app/"

Vue.prototype.kfServerUrl = "http://192.168.10.254:8085/kf/"

//医生/患者端获取房间id
Vue.prototype.chattingIdUrl = Vue.prototype.kfServerUrl +"websocket/getChattingId"

//医生/患者聊天记录
Vue.prototype.ChattingChatRecordUrl =Vue.prototype.kfServerUrl + "Chatting/chatRecord"

//患者医生发送消息
Vue.prototype.websocketOtherSendUrl = Vue.prototype.kfServerUrl +"websocket/otherSend"

//---------------------------------------end----------------------------------------

const app = new Vue({
	...App
})


// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/myjs/interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)


app.$mount()
