<template>
	<view>
		<myh5></myh5>
		<view class="fff">
			<view class="view-remind">提示：处方上传并支付成功，平台将核查处方真实有效性，若处方笺无效或者与需求药品不符，平台将会做退款处理</view>
			<view class="view-top" v-if="1==2">
				<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_jzr.png" mode="aspectFill"></image>
				<view class="title">就诊人</view>
				<view class="view-top" @tap="upUser">
					<image style="width: 34rpx; height: 36rpx;" src="../../static/image/icon_qh.png" mode="aspectFill"></image>
					<view>更换</view>
				</view>
			</view>
			<view class="view-f9f9" v-if="1==2">
				<view class="view-top">
					<view class="txt-title">姓名</view>
					<view class="txt-content">{{patientData.name}}</view>
				</view>
				<view class="view-top" style="margin-top: 24rpx; margin-bottom: 24rpx;">
					<view class="txt-title">性别</view>
					<view class="txt-content" v-if="patientData.sex==2">女</view>
					<view class="txt-content" v-if="patientData.sex==1">男</view>
				</view>
				<view class="view-top">
					<view class="txt-title">年龄</view>
					<view class="txt-content">{{patientData.age}}</view>
				</view>
			</view>

			<view class="view-top" style="margin-top: 24rpx;">
				<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_need_sc.png" mode="aspectFill"></image>
				<view class="title">上传处方单</view>
			</view>
			<view class="div">
				<image v-if="!isShow " @tap="goRegistration()" class="add-img" src="../../static/image/icon_need_add.png" mode="aspectFill"></image>
				<view v-if="isShow">
					<image class="img-set" :src="imageUrl" mode="aspectFit"></image>
					<image class="img-dele" @tap="clean()" src="../../static/image/delete.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="view-top">
				<view class="view-sub">没有处方？</view>
				<view class="view-sub-txt" @tap="toUpNeed">找医生开具处方</view>
			</view>
		</view>
		<view class=" fff" style="margin-top: 19rpx;">
			<view class="view-top">
				<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_need_sh.png" mode="aspectFill"></image>
				<view class="title">收货信息</view>
				<view class="view-top" @tap="toAddress">
					<image style="width: 34rpx; height: 36rpx;" src="../../static/image/icon_qh.png" mode="aspectFill"></image>
					<view>更换</view>
				</view>
			</view>
			<view class="view-top" style="padding-left: 22rpx; padding-top: 64rpx;">
				<image style="width: 26rpx; height: 36rpx;" src="../../static/image/icon_address.png" mode="aspectFill"></image>
				<view class="txt-name">{{addressData.receiver}}&emsp;{{addressData.phone}}</view>
			</view>
			<view class="txt-address">{{addressData.province}}{{addressData.city}}{{addressData.area}}</view>
		</view>

		<view style="padding-left: 24rpx;padding-right: 24rpx;">
			<view class="button" @tap="ifImage">去支付</view>
		</view>

		<!-- 确认支付 -->
		<tui-bottom-popup :show="payShow" @close="payPopup">
			<view class="tui-share add-view">
				<view class="bottom-top">
					<view class="p-title">支付方式选择</view>
				</view>
				<view class="b-item-row">
					<image style="width: 60rpx; height: 60rpx;" src="../../static/image/icon_wx.png" mode="aspectFill"></image>
					<view class="b-item-title">微信</view>
					<image style="width: 50rpx; height: 50rpx;" @tap="checkPay(!payType)" :src="!payType?'../../static/image/icon_yes.png':'../../static/image/icon_no.png'"
					 mode="aspectFill"></image>
				</view>
				<!-- #ifndef MP-WEIXIN -->
				<view class="b-item-row">
					<image style="width: 60rpx; height: 60rpx;" src="../../static/image/icon_zfb.png" mode="aspectFill"></image>
					<view class="b-item-title">支付宝</view>
					<image style="width: 50rpx; height: 50rpx;" @tap="checkPay(payType)" :src="payType?'../../static/image/icon_yes.png':'../../static/image/icon_no.png'"
					 mode="aspectFill"></image>
				</view>
				<!-- #endif -->
				<view class="view-b">
					<view class="p-button" @tap="handleHiddenShare">立即付款</view>
				</view>
			</view>
		</tui-bottom-popup>
	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad() {
			this.getPatientDefault();
			this.getAddressDefault();
			uni.$on(this.UPDATEUSER, data => {
				this.patientData = data;
			});
			uni.$on(this.UPDATEUSERADDRESS, data => {
				this.addressData = data;
			})
		},
		onUnload() {
			uni.$off(this.UPDATEUSER);
			uni.$off(this.UPDATEUSERADDRESS);
		},
		data() {
			return {
				isShow: false,
				imageUrl: '',
				patientData: {},
				addressData: '',
				payShow: false,
				payType: false, //false微信 true支付宝
			}
		},
		methods: {
			toAddress() {
				//解决传参过长
				uni.navigateTo({
					url: "../need-update-address/need-update-address?type=1&addressData=" + encodeURIComponent(JSON.stringify(this.addressData))
				})
			},
			upUser() {
				//解决传参过长
				uni.navigateTo({
					url: "../need-update-user/need-update-user?type=1&userData=" + encodeURIComponent(JSON.stringify(this.patientData))
				})
			},
			handleHiddenShare() {
				this.ifImage();
				//#ifdef H5
				    this.payShow =false;
				    this.$u.toast("请先下载应用方可付款，点击顶部'打开'");
				    return;
				    //#endif
				
				var platForm = this.payType ? 1 : 2; //1支付宝 2微信
				console.log("上传信息");
				console.log(this.patientData.id);
				console.log(this.addressData.id);
				console.log(platForm);
				console.log(this.imageUrl);

				this.$u.get(this.needSubmitPayUrl, {
					// 'patientId': this.patientData.id,
					'addressId': this.addressData.id,
					'platForm': platForm,
					'url': this.imageUrl,
					'deviceType': uni.getStorageSync(this.DEVICETYPE)
				}).then(res => {
					console.log(res)
					this.payPopup();
					if (res.status == 0) {
						if (this.payType) {
							this.zfbApi(res.data.body);
						} else {
							// #ifndef MP-WEIXIN
							this.wxApi(res.data);
							// #endif
							// #ifdef MP-WEIXIN
							this.wxPay(res.data);
							// #endif
						}
					}
				})
			},
			//微信小程序支付
			wxPay(data) {
				let me = this;
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: data.timestamp,
					nonceStr: data.noncestr,
					package: data.packagevalue,
					signType: 'MD5',
					paySign: data.sign,
					success: function(res) {
						console.log("微信支付成功回调");
						uni.$emit(me.SUBMITNEED,"提交需求单通知")
						uni.navigateTo({
							url: "../need-record/need-record"
						})
					},
					fail: function(err) {
						console.log('微信支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			//微信api
			wxApi(info) {
				let me = this;
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo: info, //微信、支付宝订单数据
					success: function(res) {
						uni.$emit(me.SUBMITNEED,"提交需求单通知")
						uni.navigateTo({
							url: "../need-record/need-record"
						})
					},
					fail: function(err) {
						console.log('微信支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			//支付宝api
			zfbApi(info) {
				let me = this;
				uni.requestPayment({
					provider: 'alipay',
					orderInfo: info, //微信、支付宝订单数据
					success: function(res) {
						uni.$emit(me.SUBMITNEED,"提交需求单通知")
						uni.navigateTo({
							url: "../need-record/need-record"
						})
					},
					fail: function(err) {
						console.log('支付宝支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			ifImage() {
				if (this.$u.test.isEmpty(this.imageUrl)) {
					this.$u.toast("请先上传处方单");
					return;
				}
				this.payPopup();
			},
			checkPay(pay) {
				if (!pay) {
					this.payType = !this.payType;
				}
			},
			payPopup() {
				this.payShow = !this.payShow;
			},
			getPatientDefault() {
				this.$u.get(this.patientDefaultUrl).then(res => {
					console.log("默认就诊人")
					console.log(res)
					if (res.status == 0) {
						this.patientData = res.data;
					}
				})
			},
			getAddressDefault() {
				this.$u.get(this.addressDefaultUrl).then(res => {
					if (res.status == 0) {
						this.addressData = res.data;
					}
				})
			},
			toUpNeed() {
				uni.navigateBack()
			},
			goRegistration() {
				var me = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						console.log("回调图片路径");
						console.log(JSON.stringify(res.tempFilePaths[0])); //要上传的图片路径
						console.log(me.utilUploadUrl); //要上传的图片路径

						uni.uploadFile({
							url: me.utilUploadUrl,
							method: "POST",
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (res) => {
								console.log(res);
								if (res.statusCode == 200) {
									console.log("上传圖片成功");
									me.imageUrl = res.data;
									me.isShow = true;
								}
							},
							fail: (ex) => {
								console.log("上传圖片失败");
								console.log(ex);
							}
						})
					}
				});
			},
			clean() {
				this.isShow = false;
				this.imageUrl = "";
			}
		}
	}
</script>

<style>
	@import url("need-pay.css");
</style>
