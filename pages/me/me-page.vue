<template>
	<view>
		<myh5></myh5>
		<tui-tips ref="toast"></tui-tips>
		<!-- 顶部导引 -->
		<!-- #ifdef APP-PLUS -->
		<tui-navigation-bar splitLine @init="initNavigation" @change="opcityChange" :scrollTop="scrollTop" title="我的"
		 backgroundColor="255,255,255" color="#333">
		</tui-navigation-bar>
		<!-- #endif -->

		<view v-if="islogin">
			<!-- #ifdef APP-PLUS -->
			<view class="top-bag" style="position: relative;">
				<!-- #endif -->
				<!-- #ifndef APP-PLUS -->
				<view v-if="islogin" class="top-bag2" style="position: relative;">
					<!-- #endif -->

					<!-- #ifdef APP-PLUS -->
					<image style="width: calc(100vh); height: 250rpx;" src="../../static/image/bg_img_wd.png" mode="scaleToFill"></image>
					<!-- #endif -->
					<!-- #ifndef APP-PLUS -->
					<image style="width: calc(100vh); height: 150rpx;" src="../../static/image/bg_img_wd.png" mode="scaleToFill"></image>
					<!-- #endif -->

					<!-- #ifdef APP-PLUS -->
					<view style="display: flex;flex-direction: row; width: 100%; height: 250rpx; position: absolute; top: 130rpx; left: 0rpx;">
						<!-- #endif -->
						<!-- #ifndef APP-PLUS -->
						<view style="display: flex;flex-direction: row; width: 100%; height: 250rpx; position: absolute; top: 45rpx; left: 0rpx;">
							<!-- #endif -->
							<view style="width: 24rpx; height: 250rpx;"></view>
							<view class="user-card">
								<image mode="aspectFill" style="width: 120rpx; height: 120rpx; border-radius: 100rpx;" :src="imageUrl==null ?'../../static/image/icon_tx_nor.png':imageUrl"
								 @tap="updateImg()"></image>
								<view class="card-column">
									<view class="card-row">
										<view class="uesr-name" v-if="isId">{{userName}}</view>
										<view class="uesr-name" v-if="!isId">姓名</view>
										<image mode="aspectFill" style="width: 30rpx; height: 30rpx;" :src="isId?'../../static/image/icon_rz.png':'../../static/image/icon_wrz.png'"></image>
										<view class="user-rz" v-if="isId">已实名认证</view>
										<view class="user-rz" style="color: #AFAFAF;" v-if="!isId" @tap="toId()">去进行身份认证</view>
									</view>
									<view v-if="userIphone!=null" class="user-phone" @tap="toBinding()">{{userIphone}}(点击可更换)</view>
									<view v-if="userIphone==null" class="user-phone" @tap="toBinding()">去绑定手机号</view>
								</view>
							</view>
							<view style="width: 24rpx; height: 250rpx;"></view>

						</view>
					</view>
					<view class="view-dd">
						<view class="view-row-qb" @tap="toGoodsDetail(0)">
							<view class="style-dd">我的订单</view>
							<view class="style-qb">查看全部</view>
							<image src="../../static/image/icon_more.png" style="width: 38rpx; height: 28rpx;margin-left: 12rpx;" mode="aspectFill"></image>
						</view>
						<view class="view-line-one"></view>
						<view class="card-row">
							<view class="card-item" @tap="toGoodsDetail(1)">
								<view class="tui-badge-item">
									<image style="width: 40rpx; height: 36rpx;" src="../../static/image/icon_df.png" mode="scaleToFill"></image>
									<tui-badge v-if="orderCountData.noPayNum>0" type="danger" absolute :scaleRatio="0.8" translateX="40%" right="-10rpx"
									 top="-20rpx">{{orderCountData.noPayNum}}</tui-badge>
								</view>
								<view class="card-item-txt">待付款</view>
							</view>
							<view class="card-item" @tap="toGoodsDetail(2)">
								<view class="tui-badge-item">
									<image style="width: 40rpx; height: 36rpx;" src="../../static/image/icon_fh.png" mode="scaleToFill"></image>
									<tui-badge v-if="orderCountData.noSendNum>0" type="danger" absolute :scaleRatio="0.8" translateX="40%" right="-10rpx"
									 top="-20rpx">{{orderCountData.noSendNum}}</tui-badge>
								</view>
								<view class="card-item-txt">待发货</view>
							</view>
							<view class="card-item" @tap="toGoodsDetail(3)">
								<view class="tui-badge-item">
									<image style="width: 40rpx; height: 36rpx;" src="../../static/image/icon_sh.png" mode="scaleToFill"></image>
									<tui-badge v-if="orderCountData.noReceiveNum>0" type="danger" absolute :scaleRatio="0.8" translateX="40%"
									 right="-10rpx" top="-20rpx">{{orderCountData.noReceiveNum}}</tui-badge>
								</view>
								<view class="card-item-txt">待收货</view>
							</view>
							<view class="card-item" @tap="toGoodsDetail(4)">
								<view class="tui-badge-item">
									<image style="width: 40rpx; height: 36rpx;" src="../../static/image/icon_wc.png" mode="scaleToFill"></image>
									<tui-badge v-if="orderCountData.completeNum>0" type="danger" absolute :scaleRatio="0.8" translateX="40%" right="-10rpx"
									 top="-20rpx">{{orderCountData.completeNum}}</tui-badge>
								</view>
								<view class="card-item-txt">已完成</view>
							</view>
						</view>
					</view>

					<view class="view-line-ten"></view>

					<view class="fff">
						<view class="list-column" @tap="toMyPrescription()">
							<view class="list-row">
								<image style="width: 40rpx; height: 33rpx;" mode="aspectFill" src="../../static/image/list_icon_wd.png"></image>
								<view class="list-row-item ">
									<view class="list-title">我的处方</view>
									<image style="width: 14rpx; height: 24rpx;" mode="aspectFill" src="../../static/image/icon_more_36.png"></image>
								</view>
							</view>
							<view class="view-line-one"></view>
						</view>

						<view class="list-column" @tap="toMyRegistration()">
							<view class="list-row">
								<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/list_icon_gh_47.png"></image>
								<view class="list-row-item ">
									<view class="list-title">我的挂号</view>
									<image style="width: 14rpx; height: 24rpx;" mode="aspectFill" src="../../static/image/icon_more_36.png"></image>
								</view>
							</view>
							<view class="view-line-one"></view>
						</view>
						<view  class="list-column" @tap="toNeedRecord()">
							<view class="list-row">
								<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/list_icon_xqd.png"></image>
								<view class="list-row-item ">
									<view class="list-title">我的需求单</view>
									<image style="width: 14rpx; height: 24rpx;" mode="aspectFill" src="../../static/image/icon_more_36.png"></image>
								</view>
							</view>
						</view>
						<view class="view-line-ten"></view>
						<view class="list-row" @tap="toAddress()">
							<image style="width: 40rpx; height: 42rpx;" mode="aspectFill" src="../../static/image/list_icon_sh.png"></image>
							<view class="list-row-item ">
								<view class="list-title">地址管理</view>
								<image style="width: 14rpx; height: 24rpx;" mode="aspectFill" src="../../static/image/icon_more_36.png"></image>
							</view>
						</view>
						<view class="view-line-one"></view>
						<view class="list-row" @tap="toAddPeople()">
							<image style="width: 40rpx; height: 42rpx;" mode="aspectFill" src="../../static/image/list_icon_jzrgl.png"></image>
							<view class="list-row-item ">
								<view class="list-title">就诊人管理</view>
								<image style="width: 14rpx; height: 24rpx;" mode="aspectFill" src="../../static/image/icon_more_36.png"></image>
							</view>
						</view>

						<view class="view-line-ten"></view>
						<view class="list-column">
							<view class="list-row">
								<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/list_icon_yh.png"></image>
								<view class="list-row-item ">
									<!-- <jyf-parser class="list-title" :html="yhHtml" ref="article"></jyf-parser> -->
									<view class="list-title" @tap="toService">用户服务协议</view>
									<image style="width: 14rpx; height: 24rpx;" mode="aspectFill" src="../../static/image/icon_more_36.png"></image>
								</view>
							</view>
							<view class="view-line-one"></view>
						</view>
						<view class="list-column">
							<view class="list-row">
								<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/list_icon_ys_68.png"></image>
								<view class="list-row-item ">
									<!-- <jyf-parser class="list-title" :html="ysHtml" ref="article"></jyf-parser> -->
									<view class="list-title" @tap="toPrivacy">隐私政策</view>
									<image style="width: 14rpx; height: 24rpx;" mode="aspectFill" src="../../static/image/icon_more_36.png"></image>
								</view>
							</view>
							<view class="view-line-one"></view>
						</view>

						<!-- #ifdef APP-PLUS -->
						<view class="list-column">
							<view class="list-row">
								<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/list_icon_dq.png"></image>
								<view class="list-row-item ">
									<view class="list-title">当前版本</view>
									<view class="list-phone" v-if="version!=null">v{{version}}</view>
								</view>
							</view>
							<view class="view-line-one"></view>
						</view>
						<!-- #endif -->

						<view class="list-column">
							<view class="list-row" @tap="call">
								<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/list_icon_kf.png"></image>
								<view class="list-row-item ">
									<view class="list-title">客服电话</view>
									<view class="list-phone">{{showPhone}}</view>
								</view>
							</view>
							<view class="view-line-one"></view>
						</view>

						<!-- #ifndef MP-WEIXIN -->
						<view class="view-line-ten"></view>
						<view class="go-out" @click="show()">退出登录</view>
						<view class="view-line-ten"></view>
						<!-- #endif -->

						<view class="bottom-view">
							<view class="txt-26-d">Copyright©2019-2021</view>
							<view class="txt-26-d">上医尚方(杭州)健康管理有限公司</view>
						</view>
					</view>

					<!-- 退出账号提醒 -->
					<!-- <tui-modal :show="modal" @click="handleClick" @cancel="hide" content="确定退出登录吗？" 
					color="#333" :size="32"></tui-modal> -->
				<tui-modal-me :show="modal" :custom="true">
					<view class="modal-view-login">
						<image style="width: 530rpx; height: 686rpx;" src="http://www.hzsysf.com/sfb/image/51806.png" class="tui-tips-img"></image>
						<view class="modal-view-goout-login">
							<view class="modal-edit-40">确定退出登录吗？</view>
							<view class="modal-goout-buttom">
								<view class="modal-goout-cancel" @tap="hide">取消</view>
								<view class="modal-goout-confirm" @tap="goOut">确定</view>
							</view>
						</view>
					</view>
				</tui-modal-me>
				
				</view>
				<view class="nologin-view" v-if="!islogin">
					<image class="nologin-img" src="../../static/image/img_wdl.png" mode="scaleToFill"></image>
					<view class="nologin-txt">登录后即可查看我的信息</view>
					<view class="nologin-button" @tap='intoLogin'>登录</view>
				</view>

				<tui-modal-me :show="modal2" :custom="true" :maskClosable="false">
					<view class="modal-view-login">
						<image style="width: 530rpx; height: 686rpx;" src="http://www.hzsysf.com/sfb/image/51821.png" class="tui-tips-img"></image>
						<view class="modal-sub-view-login">
							<view class="modal-edit">您还未登录</view>
							<view class="modal-edit-sub">请先登录再进行操作</view>
							<view class="modal-confirm-login" @tap="intoLogin">去登录</view>
						</view>
					</view>
				</tui-modal-me>
			</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad() {
			this.toLoad();

			//更新登录状态
			uni.$on(this.INFORMLOGIN, data => {
				console.log("接收到更新登录状态的通知我的");
				console.log(uni.getStorageSync(this.ISLOGIN));
				if(this.modal2){
					this.modal2=false;
				}
				this.toLoad();
			});
			uni.$on(this.UPDATEID, data => {
				this.userName = uni.getStorageSync(this.NAME);
				this.isId = uni.getStorageSync(this.ISID);
			});
			uni.$on(this.UPIPHONE, data => {
				this.originalPhone = uni.getStorageSync(this.IPHONE);
				this.userIphone = this.originalPhone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
			});
			uni.$on(this.INFORMBACKLOGINME, data => {
				uni.switchTab({
					url: "/pages/shop/shop-page",
				})
			})
			uni.$on(this.INFORMBACKLOGINWXME, data => {
				uni.switchTab({
					url: "/pages/shop/shop-page"
				})
			})
		},
		onUnload() {
			uni.$off(this.INFORMBACKLOGINME);
			uni.$off(this.INFORMBACKLOGINWXME);
		},
		// onTabItemTap() {
		// 	console.log("tabbar的点击事件监听");
		// 	this.intoLogin();
		// },
		onShow() {
			var me = this;
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
			//监听网络状态发生改变的时候
			uni.onNetworkStatusChange(function(res) {
				console.log("网络状态监测222222");
				console.log(res.isConnected); //当前是否有网络连接
				console.log(res.networkType); //网络类型
				if (res.isConnected) {
					me.showTop(0);
					me.getOrderCount();
				} else {
					me.showTop(1);
				}
			});
			this.getOrderCount();
		},
		onUnload() {
			uni.$off(this.UPDATEID);
			uni.$off(this.UPIPHONE);
		},
		data() {
			return {
				islogin: '', //是否登录
				isId: '',
				userName: '',
				userIphone: '',
				originalPhone: '',
				imageUrl: null,
				yhHtml: '<a href="https://www.baidu.com/">用户服务协议</a>',
				ysHtml: '<a href="https://www.baidu.com/">隐私政策</a>',
				modal: false,
				version: '', //应用版本号
				phone: '', //客服电话
				showPhone: '', //**电话
				orderCountData: '',
				// start顶部导引
				top: 0, //标题图标距离顶部距离
				opcity: 0,
				scrollTop: 0.5,
				// end
				basicData: [{
					type: "green",
					msg: "网络恢复连接~"
				}, {
					type: "danger",
					msg: "网络无连接~"
				}],
				modal2: false,
			}
		},
		methods: {
			show2() {
				this.modal2 = true;
			},
			hide2() {
				this.modal2 = false;
			},
			toLoad() {
				this.islogin = uni.getStorageSync(this.ISLOGIN);
				if (!this.islogin) {
					this.show2();
					console.log("我的未登录呀");
				}
				this.isId = uni.getStorageSync(this.ISID);
				this.userName = uni.getStorageSync(this.NAME);
				this.originalPhone = uni.getStorageSync(this.IPHONE);
				if (this.$u.test.isEmpty(this.originalPhone)) {
					this.userIphone = null;
				} else {
					this.userIphone = this.originalPhone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
				}
				var image = uni.getStorageSync(this.HEADIMG);
				if (this.$u.test.isEmpty(image)) {
					this.imageUrl = null;
				} else {
					this.imageUrl = image;
				}

				this.getOrderCount();
				this.getPhone();
				// #ifdef APP-PLUS
				this.version = plus.runtime.version; //应用版本号
				// #endif
				// #ifdef MP-WEIXIN
				this.version = wx.getAccountInfoSync().miniProgram.envVersion;
				// #endif

				console.log("应用版本号" + this.version);
			},
			intoLogin() {
				// #ifndef MP-WEIXIN
				uni.navigateTo({
					url: "../welcome/login/login?type=2"
				})
				// #endif
				// #ifdef MP-WEIXIN
				uni.navigateTo({
					url: "../welcome/wx-authorization/wx-authorization?type=2"
				})
				// #endif
			},
			getPhone() {
				if (!this.islogin) {
					return;
				}
				this.$u.get(this.appKfUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.phone = res.data.value;
						this.showPhone = this.phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
						console.log("客服电话" + this.showPhone);
					}
				})
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
			toAddPeople() {
				uni.navigateTo({
					url: "../people-my/people-my"
				})
			},
			getOrderCount() {
				if (!this.islogin) {
					return;
				}
				this.$u.get(this.orderCountUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.orderCountData = res.data;
					}
				})
			},
			// start顶部导引
			initNavigation(e) {
				this.opcity = e.opcity;
				this.top = e.top;
			},
			opcityChange(e) {
				this.opcity = e.opcity;
			},
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			// end
			call() {
				uni.makePhoneCall({
					phoneNumber: this.phone
				});
			},
			toNeedRecord() {
				uni.navigateTo({
					url: "../need-record/need-record"
				})
			},
			toBinding() {
				uni.navigateTo({
					url: "../binding-phone/binding-phone?type=1"
				})
			},
			toService() {
				//	1 尚方宝用户协议 2尚方宝隐私政策 3上医云用户协议 4上医云隐私政策
				uni.navigateTo({
					url: "../web-view/agreement-web-view?type=1"
				})
			},
			toPrivacy() {
				uni.navigateTo({
					url: "../web-view/agreement-web-view?type=2"
				})
			},
			toGoodsDetail(flag) {
				uni.navigateTo({
					url: "../my-goods/my-goods?flag=" + flag
				})
			},
			toMyPrescription() {
				uni.navigateTo({
					url: "../prescription-my/prescription-my"
				})
			},
			toMyRegistration() {
				uni.navigateTo({
					url: "../registration-my/registration-my"
				})
			},
			toAddress() {
				uni.navigateTo({
					url: "../address-my/address-my"
				})
			},
			toId() {
				uni.navigateTo({
					url: "../../ApagesA/authentication/authentication?type=1"
				})
			},
			updateImg() {
				//照相机
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					// sourceType: ['album'], //从相册选择
					success: (res) => {
						// console.log("回调图片路径");

						console.log(JSON.stringify(res.tempFilePaths[0])); //要上传的图片路径
						this.PostImg(res.tempFilePaths[0]);
					}
				});
			},
			//上传头像
			PostImg(path) {
				let me = this;
				uni.uploadFile({
					url: this.customerAvatarUrl,
					method: "POST",
					filePath: path,
					name: 'file',
					header: {
						"token": uni.getStorageSync('token')
					},
					success: (res) => {
						this.$u.toast("上传头像成功");
						var data = JSON.parse(res.data);
						if (data.status == 0) {
							me.imageUrl = data.data;
							uni.setStorageSync(me.HEADIMG, me.imageUrl);
						}
					}
				})
			},
			show() {
				this.modal = true;
			},
			hide() {
				this.modal = false;
			},
			goOut() {
				try {
					uni.clearStorageSync();
					uni.setStorageSync(this.READ, true);
					uni.setStorageSync(this.IPHONE, this.originalPhone);
				} catch (e) {
					// error
					console.log("11111111111111" + e)
				}
				uni.reLaunch({
					url: "../welcome/login/login"
				})
			}
		}
	}
</script>

<style>
	@import url("me-page.css");
</style>
