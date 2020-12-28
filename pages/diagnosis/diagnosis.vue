<!-- 首诊page -->
<template>
	<view>
		<myh5></myh5>
		<view class="all">
			<!-- #ifdef APP-PLUS -->
			<view class="main_status_bar"> -->
				<!-- 自适应状态栏 这里是状态栏 -->
			</view>
			<!-- #endif -->
			<view class="view-row1" v-if="islogin">
				<view class="ID" v-if="clinicName!=null">{{clinicName}}</view>
				<view class="ID" v-if="clinicName==null"></view>
				<image class="sm" mode="aspectFill" src="../../static/image/nav_icon_sm.png" @tap="scan"></image>
				<view class="tui-badge-item" @tap="toMessage()">
					<image class="news" src="../../static/image/nav_icon_news.png"></image>
					<tui-badge v-if="allMsgCount>0" type="danger" absolute :scaleRatio="0.8" translateX="40%" right="10rpx" top="-5rpx">{{allMsgCount}}</tui-badge>
				</view>
			</view>
			<view class="view-row1" v-if="!islogin"></view>

			<tui-tips ref="toast"></tui-tips>

			<view style="flex-grow: 1;overflow: scroll;">
				<load-refresh v-if="recommendList!=null" ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="10"
				 @refresh="refresh">
					<view v-if="recommendList!=null" slot="content-list">
						<!-- && islogin -->
						<view v-if="imgList " class="view-top" style="position: relative;background-color: #FFFFFF;">
							<image style="width: calc(100vh); height: 227rpx;" src="../../static/image/bg_img.png" mode="scaleToFill"></image>
							<view class="view-top" style=" position: absolute; top: 0rpx; left: 0rpx; ">

								<!-- 轮播 :disable-touch="imgListUrl.length==1?'true':'false'"-->
								<swiper class="card" autoplay="true" indicator-dots="true" circular="true" indicator-active-color="#fff">
									<swiper-item class="swiper-item " v-for="(banner,bannerIndex) in imgList" :key="bannerIndex" @tap="toBannerDetail(banner.id,banner.imgDescribe,banner.type)">
										<image mode="aspectFill" :src="banner.imgUrl"></image>
									</swiper-item>
								</swiper>

							</view>
						</view>

						<!-- 复诊管理 -->
						<view class="column" v-if="islogin" style="position: relative;">

							<view class="view-row" style="background-color: #FFFFFF;">
								<image mode="aspectFit" class="img-48" src="../../static/image/icon_fz.png"></image>
								<view class="fzgy">复诊购药</view>

								<view class="view-first-row" v-if="isFirstData">
									<view @tap="dropDownList()" class="view-check-patient">
										<view class="show-txt">{{mocity}}</view>
										<view class="tui-animation" :class="[dropdownShow?'tui-animation-show':'']">
											<tui-icon name="turningdown" :size="20"></tui-icon>
										</view>
									</view>

									<view class="column-lin"></view>
									<image mode="aspectFit" class="img-32" src="../../static/image/icon_gl.png"></image>
									<view class="gl" @tap="toAdministration()">管理</view>
								</view>
							</view>

							<!-- 状态为没有就诊人信息的时候 上传处方 -->
							<view class="dash-view" v-if="!isFirstData">
								<view class="solid-view" @tap="toId()">
									<!-- <view class="solid-view" @tap="toUpImage()"> -->
									<image style="width: 40rpx; height: 33rpx;" src="../../static/image/button_icon_upload.png" mode="aspectFill"></image>
									<view class="up-txt">上传处方</view>
								</view>
								<view class="sub-txt">请先上传在医疗机构首诊的处方</view>
							</view>

							<!-- 状态为有就诊人信息的时候 -->
							<view class="message-f9" v-if="isFirstData">
								<view class="message-card">

									<view class="cu-timeline">
										<view class="cu-item text-green" v-for="(data,index) in crrDetailList" :key="index">
											<view class="cu-title">{{data.content}}</view>
											<view class="cu-sub-title" v-if="data.symptom!=null">诊&#8195;断:{{data.symptom}}</view>
											<view class="cu-date">{{data.createTime}}</view>
										</view>
										<view class="view-more" v-if="ifFive" @tap="toMore">
											<view style="color: #AFAFAF;margin-right: 12rpx">查看所有</view>
											<image style="width: 35rpx;height: 35rpx;" src="../../static/image/icon_jrj.png" mode="aspectFill"></image>
										</view>
									</view>
								</view>
							</view>
							<!-- 下拉选择框 -->
							<view v-show="dropdownShow" class="view-pop-menu">
								<view class="txt-pop-menu" v-for="(data,index) in firstPatients" :key="index" @tap="checkDropdown(data)">
									{{data.name}}
								</view>
							</view>
						</view>

						<view class="nologin-view" v-if="!islogin">
							<image class="nologin-img" src="../../static/image/img_wdl.png" mode="scaleToFill"></image>
							<view class="nologin-txt">登录后即可查看复诊记录</view>
							<view class="nologin-button" @tap="toLogin">登录</view>
						</view>

						<view class="for-view">
							<image style="width: 30rpx; height: 24rpx;" src="../../static/image/icon_zs1.png" mode="aspectFill"></image>
							<view class="for-you">为你推荐</view>
							<image style="width: 30rpx; height: 24rpx;" src="../../static/image/icon_zs2.png" mode="aspectFill"></image>
						</view>
						<!-- 推荐list -->
						<view class="news-content" v-if="recommendList!=null" v-for="(recommend,index) in recommendList" :key="index">

							<!-- type0 轮播 暂时不会有数据-->
							<swiper class="swiper-content" autoplay="true" v-if="recommend.type==2">
								<swiper-item class="swiper-item" v-for="(banner,bannerIndex) in recommend.bannerList" :key="bannerIndex">
									<view class="swiper-title">{{banner.desc}}</view>
									<image mode="aspectFill" :src="banner.detail" style="border-radius:7rpx;"></image>
									<view class="swiper-num">{{bannerIndex+1}}/{{recommend.bannerList.length}}</view>
								</swiper-item>
							</swiper>

							<!-- type1 新闻 暂时不会有数据-->
							<view class="view-row-news" v-if="recommend.type==0  && recommend.news.type==2" @click="toDetail(recommend.news.detail)">
								<view class="type2-column">
									<text class="type1-title">{{ recommend.news.title}}</text>
									<view class="type1-little-time">{{ recommend.news.createTime}}</view>
								</view>
								<image mode="aspectFill" :src="recommend.news.desc" style=" border-radius:7rpx; width: 230rpx; height: 200rpx;"></image>
							</view>


							<!-- type2 视频 暂时不会有数据-->
							<view class="view-video-column" v-if="recommend.type==0  && recommend.news.type==3">
								<view class="view-row-start">
									<view class="view-label">视频</view>
									<view class="style-video-title">{{recommend.news.title}}</view>
								</view>
								<view style="width: 100%; height: auto;position: relative;" @tap="toVideo(recommend.news.detail,recommend.news.title)">
									<image :src="recommend.news.desc" style=" border-radius:7rpx; width: 100%; height: 300rpx;" mode="aspectFill"></image>
									<view style="width: 100%; height: 100%; position: absolute;top:0%; left: 0%;display: flex;flex-direction: column;align-items: center;justify-content: center;">
										<image style=" width: 50rpx; height:50rpx;" src="../../static/image/icon_play.png" mode="aspectFill"></image>
									</view>
								</view>
								<view class="type1-little-time">{{recommend.news.createTime}}</view>
							</view>


							<view class="view-news" v-if="recommend.type==0" @click="toNewsDetail(recommend.news.id)">
								<image mode="aspectFill" :src="recommend.news.img" style=" border-radius:7rpx; width: 100%; height: 350rpx"></image>
								<text class="type0-title">{{ recommend.news.title}}</text>
							</view>

							<!-- type3 glid-->
							<tui-grid :unlined="true">
								<block v-if="recommend.type==1" v-for="(good , goodIndex) in recommend.goods" :key="goodIndex">
									<tui-grid-item :bottom="false" :hover="false" :cell="2" @tap="toShopDetail(good.id)">
										<view class="good-column">
											<image mode="aspectFill" style=" border-radius:7rpx; height: 300rpx;" :src="good.img"></image>
											<view class="good-column-padding">
												<view class="godd-name">{{good.name}}</view>
												<view class="good-subtitle">{{good.subTitle}}</view>
												<view class="row-price">
													<view class="good-price">￥{{good.price}}</view>
													<tui-icon name="more-fill" :size="10"></tui-icon>
												</view>
											</view>
										</view>
									</tui-grid-item>
								</block>
							</tui-grid>
						</view>


						<!-- 无推荐 -->
						<view class="no-view" v-if="recommendList==null" style="margin-top: 100rpx; margin-bottom: 100rpx;">
							<image class="no-img" src="../../static/image/img_zwtjxx.png" mode="aspectFill"></image>
							<view class="no-txt">暂无推荐</view>
						</view>

					</view>
				</load-refresh>
			</view>
		</view>
	</view>
</template>

<script>
	import bage from "@/components/u-badge/u-badge.vue";
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			bage,
			myh5
		},
		onLoad() {

			this.islogin = uni.getStorageSync(this.ISLOGIN);

			var me = this;
			this.getLoad();
			this.isSf = uni.getStorageSync(this.ISID);
			this.clinicName = uni.getStorageSync(this.CLINICNAME);
			//更新登录状态
			uni.$on(this.INFORMLOGIN, data => {
				this.islogin = uni.getStorageSync(this.ISLOGIN);
				this.getLoad();
			});
			//身份认证
			uni.$on(this.UPDATEID, data => {
				this.isSf = uni.getStorageSync(this.ISID);
			});
			//上传处方/复诊管理列表设置开关是否在首页显示
			uni.$on(this.ISSHOWFIRSTDATA, data => {
				console.log("接收到首页就诊人列表更新");
				this.isFirstData = true;
				this.getFirstPatients();
			});
			//未读消息
			uni.$on(this.INFORMNOREAD, data => {
				this.getMsgCount();
			});
			uni.$on(this.INFORMXTNOREAD, data => {
				this.getMsgCount();
			});

			//监听网络状态变化
			uni.getNetworkType({
				success: function(res) {
					console.log("网络状态监测111111");
					console.log(res.networkType);
					if (res.networkType == 'none') {
						console.log('无网络');
						me.showTop(1);
					}
				}
			});
			//接收到通知
			uni.$on(this.PUSHRECEIVE, data => {
				this.getMsgCount();
			});
			/**data.payload.type
			 * -1 	系统通知推送
			 * 0    聊天消息推送
			 * 1000 订单信息推送
			 * 2000 处方信息推送
			 * 3000 挂号信息推送
			 * 4000 需求单信息推送
			 * 5000 新闻推送
			 * 6000 网页推送
			 * 7000 首诊单识别通知
			 * 10002  患者极光
			 */
			uni.$on(this.PUSHMSG, data => {
				console.log("收到通知点击事件 消息");
				console.log(data)
				var type = data.payload.type;
				if (type == 2000) { //处方信息推送
					uni.navigateTo({
						url: "../prescription-submit-cen/prescription-submit-cen?caseId=" + data.payload.param
					})
				} else if (type == 0) { //聊天消息推送
					var param = data.payload.param;
					console.log(param);
					console.log(param.includes('doc'));
					if (param.includes('doc')) {
						uni.navigateTo({
							url: "../chat/chat?name=" + data.payload.msg.userName + "&account=" + data.payload.param + "&img=" +
								encodeURIComponent(JSON.stringify(data.payload.msg.avatar))
						})
					} else if (param.includes('kf')) {
						uni.navigateTo({
							url: "../chat/chat?name=" + data.payload.msg.userName + "&account=" + data.payload.param + "&img=" +
								encodeURIComponent(JSON.stringify(data.payload.msg.img))
						})
					}
				} else if (type == 1000) { //处方详情
					uni.navigateTo({
						url: "../order-details/order-details?id=" + data.payload.param
					})
				} else if (type == 3000) { //挂号列表
					uni.navigateTo({
						url: "../registration-my/registration-my"
					})
				} else if (type == 4000) { //需求单
					uni.navigateTo({
						url: "../need-record/need-record"
					})
				} else if (type == 5000) {

				} else if (type == 6000) {

				} else if (type == 7000) {
					uni.navigateTo({
						// url: "../administration/administration"
						url: "../../ApagesA/administration/administration"
					})
				} else if (type == 8000) {
					uni.navigateTo({
						url: "../prescription-up/prescription-up?type=2"
					})
				} else if (type == 10002) {
					this.$u.toast("点击客服发送的消息");
				}
			})
		},
		onUnload() {
			uni.$off(this.UPDATEID);
			uni.$off(this.ISSHOWFIRSTDATA);
			uni.$off(this.PUSHMSG);
			uni.$off(this.INFORMNOREAD);
			uni.$off(this.INFORMXTNOREAD);
		},
		onHide() {
			this.dropdownShow = false;
		},
		onShow() {
			var me = this;
			//监听网络状态发生改变的时候
			uni.onNetworkStatusChange(function(res) {
				console.log("网络状态监测222222");
				console.log(res.isConnected); //当前是否有网络连接
				console.log(res.networkType); //网络类型
				if (res.isConnected) {
					me.showTop(0);
					me.getLoad();
				} else {
					me.showTop(1);
				}
			});
		},
		data() {
			return {
				islogin: '', //是否登录
				token: '',
				type: 1,
				clinicName: '',
				recommendList: null,
				msgList: [],
				isSf: '',
				allMsgCount: 0,
				imgList: '',
				isFirstData: false, //标识是否有首诊病例
				firstPatients: '', //就诊人数据
				mocity: '', //默认就诊人（当前展示就诊人的信息）
				moid: '', //默认就诊人id（当前展示就诊人的信息）

				dropdownShow: false,
				totalPage: 1, //模拟总页数
				crrDetailList: [], //就诊人进度
				backgroundColor: "#10BE62",
				isConnected: '',
				basicData: [{
					type: "green",
					msg: "网络恢复连接~"
				}, {
					type: "danger",
					msg: "网络无连接~"
				}],
				ifFive: false,
			}
		},
		methods: {
			toNewsDetail(id) {
				uni.navigateTo({
					url: "../news-details/news-details?id=" + id
				})
			},
			toLogin() {
				// #ifndef MP-WEIXIN
				uni.navigateTo({
					url: "../welcome/login/login"
				})
				// #endif
				// #ifdef MP-WEIXIN
				uni.navigateTo({
					url: "../welcome/wx-authorization/wx-authorization"
				})
				// #endif
			},
			toMore() {
				uni.navigateTo({
					url: "../crr-detail-list/crr-detail-list?name=" + this.mocity + "&id=" + this.moid
				})
			},
			toBannerDetail(id, imgDescribe, type) {
				uni.navigateTo({
					url: "banner-detail?id=" + id + "&imgDescribe=" + imgDescribe + "&type=" + type,
				})
			},
			getLoad() {
				this.getData();//为你推荐
				if (this.islogin) {
					this.getMsgData(); //获取顶部轮播数据
					this.getMsgCount();
					this.getFirstListData(); //获取首诊病例
					this.getFirstPatients(); //获取就诊人信息
				}
			},
			showTop(index) {
				console.log("打印index");
				let options = {
					msg: this.basicData[index].msg,
					duration: this.basicData[index].duration || 2000,
					type: this.basicData[index].type
				};
				console.log(index);
				this.$refs.toast.showTips(options);
			},
			//扫码
			scan() {

				let me = this;
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {
						console.log('条码：');
						console.log(JSON.stringify(res));
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						me.getScan(res.result);
						// me.getScan('http://47.103.104.99/download/syy.apk?caseTemplateId_1094');
					}
				});
			},
			getScan(result) {
				this.$u.get(this.scanContentUrl, {
					'content': result
				}).then(res => {
					if (res.status == 0) {
						if (result.includes('docId')) {
							var resultList = result.split("=");
							// 关注医生页面
							uni.navigateTo({
								// url: "../attention-doctor/attention-doctor?data=" + encodeURIComponent(JSON.stringify(res.data))
								url: "../attention-doctor/attention-doctor?docId=" + resultList[1]
							})
						} else if (result.includes('caseId')) {
							var resultList = result.split("=");
							//跳转处方 去下单
							uni.navigateTo({
								url: "../prescription-submit-cen/prescription-submit-cen?caseId=" + resultList[1]
							})
						} else if (result.includes('caseTemplateId')) {
							//跳转处方 去下单
							uni.navigateTo({
								url: "../prescription-submit-cen/prescription-submit-cen?caseId=" + res.data
							})
						} else if (result.includes('clinicId')) {
							uni.navigateTo({
								url: "../clinic-doctor/clinic-doctor?id=" + res.data.id + "&name=" + res.data.clinicName,
								fail(ex) {
									console.log("跳转失败");
									console.log(ex);
								}
							})
						}
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						console.log("baocuo");
						this.$u.toast(ex.data.msg);
					}
				})
			},
			//获取顶部轮播数据
			getMsgData() {
				this.$u.get(this.imgListUrl, {
					imgType: 2
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.imgList = res.data;
					}
				})
			},
			//获取就诊人信息
			getFirstPatients() {
				this.$u.get(this.firstPatientsUrl).then(res => {
					console.log("就诊人列表");
					console.log(res)
					if (res.status == 0) {
						this.firstPatients = res.data;
						this.mocity = res.data[0].name;
						this.moid = res.data[0].id;
						this.getCrrDetail();
					}
				})
			},
			//获取就诊人进度
			getCrrDetail() {
				this.crrDetailList = [];
				var me = this;
				this.$u.get(this.crrDetailUrl, {
					'patientId': this.moid
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						if (res.data.length > 5) {
							me.ifFive = true;
							for (var i = 0; i < 5; i++) {
								me.crrDetailList.push(res.data[i])
							}
						} else {
							me.ifFive = false;
							me.crrDetailList = res.data;
						}
					}
				})
			},
			//获取首诊病例
			getFirstListData() {
				this.$u.get(this.firstListUrl).then(res => {
					console.log("获取首诊病例1")
					console.log(res)
					if (res.status == 0) {
						this.isFirstData = true;
					}
				}).catch(ex => {
					console.log("获取首诊病例2")
					console.log(ex)
					if (ex.status == 4) {
						this.isFirstData = false;
					}
				})
			},
			getMsgCount() {
				this.$u.get(this.customerMsgCountUrl, {}).then(res => {
					console.log("未读消息总数")
					console.log(res)
					if (res.status == 0) {
						this.allMsgCount = res.data;
						//桌面图标角标
						// #ifdef APP-PLUS
						plus.runtime.setBadgeNumber(this.allMsgCount);
						// #endif
					}
				})
			},
			toId() {
				if (this.isSf) {
					uni.navigateTo({
						url: "../prescription-up/prescription-up?type=1"
					})
				} else {
					uni.navigateTo({
						url:"../../ApagesA/authentication/authentication?type=1"
					})
				}
			},
			toMessage() {
				uni.navigateTo({
					url: "../message-list/message-list"
				})
			},
			toAdministration() {
				uni.navigateTo({
					// url: "../administration/administration"
					url: "../../ApagesA/administration/administration"
				})
			},
			//商品的点击事件
			toShopDetail(id) {
				uni.navigateTo({
					url: "../shop-details/shop-details?id=" + id
				})
			},
			// // 上划加载更多
			// loadMore() {
			// 	this.pageNum += 1;
			// 	this.$u.get(this.recommendUrl, {
			// 		'pageNum': this.pageNum,
			// 	}).then(res => {
			// 		console.log(res)
			// 		if (res.status == 0) {
			// 			for (var i = 0; i < res.data.length; i++) {
			// 				this.recommendList.push(res.data[i]);
			// 			}
			// 			this.$refs.loadRefresh.loadOver();
			// 		}
			// 	}).catch(ex => {
			// 		if (ex.data.status == 4) {
			// 			this.totalPage = 0;
			// 			this.$refs.loadRefresh.loadOver();
			// 		}
			// 	})
			// },
			// 下拉刷新数据列表
			refresh() {
				var isLogin = uni.getStorageSync(this.ISLOGIN);
				if (isLogin) {
					this.getMsgData(); //获取顶部轮播数据
					this.getFirstPatients();
				}
				this.getData();
			},
			getData() {
				this.$u.get(this.recommendUrl).then(res => {
					// console.log("为你推荐");
					this.recommendList = res.data;
					// this.$refs.loadRefresh.loadOver();
				}).catch(ex => {
					if (ex.data.status == 4) {
						this.recommendList = null;
						// this.$refs.loadRefresh.loadOver();
					}
				})
			},
			toDetail(html) {
				uni.navigateTo({
					url: "../web-view/web-view?html=" + html
				})
			},
			toVideo(url, title) {
				console.log("视频路径")
				console.log(url)
				uni.navigateTo({
					url: "../video/video?videoUrl=" + url + "&title=" + title
				})
			},
			checkDropdown(data) {
				this.mocity = data.name;
				this.moid = data.id;
				this.dropDownList();
				//adsadcs
				this.getCrrDetail(data.id);
			},
			dropDownList() {
				this.dropdownShow = !this.dropdownShow
			},
		}
	}
</script>

<style>
	@import url("diagnosis.css");
</style>
