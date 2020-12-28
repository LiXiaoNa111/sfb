<!-- 挂号page -->
<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar" style="flex-shrink: 0;">
			<!-- 自适应状态栏 这里是状态栏 -->
		</view>
		<!-- #endif -->
		<myh5></myh5>
		<view v-if="islogin" class="column-fff">
			<view class="view-top">
				<view class="top-title">挂号</view>
				<view class="top-row" @tap="toFindDoctor">
					<image style="width: 36rpx; height: 36rpx;" src="../../static/image/icon_zys.png" mode="aspectFill"></image>
					<view class="find-txt">找医生</view>
				</view>
			</view>

			<u-swiper v-if="imgList!=null" :list="imgList" :effect3d=true name="imgUrl" bgColor="#ffffff" @click="selectedBanner"></u-swiper>

			<tui-tips ref="toast"></tui-tips>
			<view class="text-doctor row-doctor">我的医生</view>
			<view class="view-line-one"></view>

			<view class="my-card" v-if="myDoctorList!=null" v-for="(doctor,index) in myDoctorList " :key="index">
				<view class="doctor-item">
					<image class="grow" mode="aspectFill" :src="doctor.avatar!=null?doctor.avatar+'?x-oss-process=image/resize,l_150':'../../static/image/icon_tx.png' "></image>
					<view class="item-column">
						<view class="item-row1">
							<view class="doctor-name" v-if="doctor.name!=null">{{doctor.name}}</view>
							<view class="doctor-department" v-if="doctor.department!=null">{{doctor.department}}</view>
							<view class="doctor-title" v-if="doctor.title!=null">{{doctor.title}}</view>
							<!-- 	0可挂号 1不可挂号 -->
							<view class="doctor-have" v-if="doctor.state==0">有号</view>
							<view class="doctor-no-have" v-if="doctor.state==1">没号</view>
						</view>
						<view class="txt-doc">{{doctor.hospital}}</view>

						<!-- <view class="txt-sc-string" v-if="myDocLabelList[index]!=null">擅长:{{myDocLabelList[index]}}</view> -->
						<view class="txt-sc-string" v-if="doctor.label.length">擅长:{{doctor.label.join(',')}}</view>

						<view class="item-row">
							<view class="doctor-price" v-if="doctor.price==0  || doctor.price==null ">免费</view>
							<view class="doctor-price2" v-if="doctor.price!=0 && doctor.price!=null ">¥{{doctor.price}}</view>
							<view class="button">
								<image style="width: 36rpx; height: 34rpx;" src="../../static/image/icon_gh.png" mode="aspectFill"></image>
								<view class="doctor-gh" @click="toDetail(doctor.docId,doctor.price)">挂号</view>
							</view>
							<view class="button" style="margin-left: 30rpx;">
								<image style=" width: 36rpx; height: 36rpx;" src="../../static/image/icon_lxys.png" mode="aspectFill"></image>
								<view class="doctor-gh" @tap="toChat(doctor.name,doctor.docId,doctor.avatar)">联系</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="myDoctorList==null" class="column">
				<image style="width: 110rpx; height: 110rpx;" src="../../static/image/img_zwgh.png" mode="aspectFill"></image>
				<view class="">暂无医生</view>
			</view>
		</view>
		<view class="nologin-view" v-if="!islogin">
			<image class="nologin-img" src="../../static/image/img_wdl.png" mode="scaleToFill"></image>
			<view class="nologin-txt">登录后即可挂号</view>
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


			var list = uni.getStorageSync(this.MYDOCTORLIST);
			console.log('获取缓存医生列表');
			console.log(list);
			this.getLoad();
			//更新登录状态
			uni.$on(this.INFORMLOGIN, data => {
				console.log("接收到更新登录状态的通知挂号");
				console.log(uni.getStorageSync(this.ISLOGIN));
				if (this.modal2) {
					this.modal2 = false;
				}
				this.getLoad();
			});
			if (!this.$u.test.isEmpty(list)) {
				this.myDoctorList = list;
			}
			uni.$on(this.INFORMBACKLOGIN, data => {
				console.log("收到通知");
				uni.switchTab({
					url: "/pages/shop/shop-page",
				})
			})
			uni.$on(this.INFORMBACKLOGINWX, data => {
				console.log("收到通知wx");
				uni.switchTab({
					url: "/pages/shop/shop-page"
				})
			})
		},
		onHide() {
			this.show = false;
		},
		onUnload() {
			uni.$off(this.INFORMBACKLOGIN);
			uni.$off(this.INFORMBACKLOGINWX);
		},
		onTabItemTap() {
			this.islogin = uni.getStorageSync(this.ISLOGIN);
			if (this.islogin) {
				this.getMyDoctorList();
			}
		},
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
					me.getLoad();
				} else {
					me.showTop(1);
				}
			});
		},
		data() {
			return {
				islogin: '', //是否登录
				myDoctorList: [], //我的医生列表
				findDoctorList: '', //发现医生列表
				myDocLabelList: [], //标签列表
				basicData: [{
					type: "green",
					msg: "网络恢复连接~"
				}, {
					type: "danger",
					msg: "网络无连接~"
				}],
				imgList: [],
				modal2: false,
			}
		},
		methods: {
			intoLogin() {
				// #ifndef MP-WEIXIN
				uni.navigateTo({
					url: "../welcome/login/login?type=1"
				})
				// #endif
				// #ifdef MP-WEIXIN
				uni.navigateTo({
					url: "../welcome/wx-authorization/wx-authorization?type=1"
				})
				// #endif
			},
			show2() {
				this.modal2 = true;
			},
			hide2() {
				this.modal2 = false;
			},
			//获取顶部轮播数据
			getMsgData() {
				this.$u.get(this.imgListUrl, {
					imgType: 4
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.imgList = res.data;
					}
				}).catch(ex => {
					this.imgList = null;
				})
			},
			selectedBanner(index) {
				console.log("点击" + index);
				var item = this.imgList[index];
				console.log(item);
				/**
				 * //TODO
				 * 需要增加判断   类型为纯图片的时候不允许点击
				 * 有详情页才会执行下面的方法
				 */
				uni.navigateTo({
					url: "../diagnosis/banner-detail?id=" + item.id + "&imgDescribe=" + item.imgDescribe + "&type=" + item.type
				})
			},
			getLoad() {
				this.islogin = uni.getStorageSync(this.ISLOGIN);
				if (this.islogin) {
					this.getMyDoctorList();
					this.getMsgData();
				} else {
					this.show2();
					console.log("挂号未登录啊");
				}
			},
			toFindDoctor() {
				uni.navigateTo({
					url: "../../ApagesA/registrstion-find/registrstion-find",
					fail(ex) {
						console.log("跳转失败：" + ex);
					}
				})
			},
			getMyDoctorList() {
				this.$u.get(this.myDoctorListUrl).then(res => {
					console.log("我的医生列表");
					console.log(res)
					this.myDoctorList = res.data;

					// for (var i = 0; i < res.data.length; i++) {
					// 	var docLabelList = res.data[i].docLabelList;
					// 	let itemString = "";
					// 	for (var i = 0; i < docLabelList.length; i++) {
					// 		if (i != docLabelList.length - 1) {
					// 			itemString += docLabelList[i].labelName + "、"
					// 		} else {
					// 			itemString += docLabelList[i].labelName
					// 		}
					// 	}
					// 	this.myDocLabelList.push(itemString);
					// }
					this.ddd(res.data);

					uni.setStorageSync(this.MYDOCTORLIST, this.myDoctorList);
					console.log('去缓存医生列表');
					console.log(this.myDoctorList);
				}).catch(ex => {
					this.myDoctorList = null;
				})
			},
			ddd(data) {
				for (let i = 0; i < data.length; i++) {
					data[i].label = []
					if (data[i].docLabelList.length) {
						for (let n = 0; n < data[i].docLabelList.length; n++) {
							data[i].label.push(data[i].docLabelList[n].labelName)
						}
						console.log(data[i])
					}
				}
			},
			//跳转携带参数
			toDetail(doctorId, price) {
				uni.navigateTo({
					url: '/pages/registrstion-details/registrstion-details?doctorId=' + doctorId + "&price=" + price,
				});
			},
			//跳转聊天
			toChat(name, account, img) {
				uni.navigateTo({
					url: "../chat/chat?name=" + name + "&account=doc_" + account + "&img=" + encodeURIComponent(JSON.stringify(img))
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
		}
	}
</script>

<style>
	@import url("registrstion-page.css");
</style>
