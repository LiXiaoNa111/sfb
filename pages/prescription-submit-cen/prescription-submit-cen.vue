<template>
	<view>
		<myh5 :docId="true"></myh5>
		<!-- <view  style="position:fiexd;z-index:10; display: flex; flex-direction: column; overflow: scroll; height: calc(100vh - 120rpx);"> -->
		<scroll-view scroll-y="true" style="display: flex; flex-direction: column; height: calc(100vh - 120rpx);">
			<!-- detailData.medType==0 中药  分快递和到店自取 -->
			<view class="view-top-relative" v-if="detailData.medType==0">
				<view style="height: 30rpx;"></view>
				<view class="view-top-absolute">
					<view class="view-top-back">
						<view :class="takeType==1?'view-flag-true':'view-flag-false'" @tap="setTakeOne">快递邮寄</view>
						<view :class="takeType==0?'view-flag-true':'view-flag-false'" @tap="setTakeZero">到店自取</view>
					</view>
				</view>
				<!-- 快递 有地址 -->
				<view v-if="takeType==1 && detailData.customerAddress!=null" class="view-user-back">
					<view class="view-top" style=" padding-left: 48rpx; padding-right: 24rpx;">
						<image style="width: 26rpx; height: 36rpx;" src="../../static/image/icon_address.png" mode="aspectFill"></image>
						<view class="txt-name">{{detailData.customerAddress.receiver}}&emsp;{{detailData.customerAddress.phone}}</view>
						<view style="flex: 1;"></view>
						<view class="view-top" @tap="updateAddress">
							<image style="width: 34rpx; height: 36rpx;" src="../../static/image/icon_qh.png" mode="aspectFill"></image>
							<view>更换</view>
						</view>
					</view>
					<view class="txt-address">{{detailData.customerAddress.province}}{{detailData.customerAddress.city}}{{detailData.customerAddress.area}}{{detailData.customerAddress.detail}}</view>
				</view>
				<!-- 快递 没地址 去添加 -->
				<view v-if="takeType==1 && detailData.customerAddress==null" class="view-user-back">
					<view class="view-top-no" @tap="addAddress">
						<view style="color: #10BE62;font-weight: bold;">去添加收货地址</view>
						<image style=" width: 30rpx; height: 30rpx;" src="../../static/image/icon_jrj.png" mode="aspectFill"></image>
					</view>
				</view>
				<!-- 自取 -->
				<view v-if="takeType==0" class="view-user-back">
					<view class="txt-address">{{detailData.clinicAddress}}</view>
				</view>
			</view>
			<!-- detailData.medType==1 西药 只可快递 -->
			<view style="background-color: #FFFFFF; border-top-right-radius: 8rpx; border-top-left-radius: 8rpx; margin-top: 30rpx;"
			 v-if="detailData.medType==1">
				<view class="row" style="margin-left: 24rpx;">
					<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
					<view style="margin-left: 12rpx; color: #595757;font-size: 34rpx;">快递信息</view>
				</view>

				<!-- 有地址 -->
				<view v-if=" detailData.customerAddress!=null" class="view-user-back-west">
					<view class="view-top" style=" padding-left: 48rpx; padding-right: 24rpx;">
						<image style="width: 26rpx; height: 36rpx;" src="../../static/image/icon_address.png" mode="aspectFill"></image>
						<view class="txt-name">{{detailData.customerAddress.receiver}}&emsp;{{detailData.customerAddress.phone}}</view>
						<view style="flex: 1;"></view>
						<view class="view-top" @tap="updateAddress">
							<image style="width: 34rpx; height: 36rpx;" src="../../static/image/icon_qh.png" mode="aspectFill"></image>
							<view>更换</view>
						</view>
					</view>
					<view class="txt-address">{{detailData.customerAddress.province}}{{detailData.customerAddress.city}}{{detailData.customerAddress.area}}{{detailData.customerAddress.detail}}</view>
				</view>
				<!-- 没地址 去添加 -->
				<view v-if=" detailData.customerAddress==null" class="view-user-back-west">
					<view class="view-top-no" @tap="addAddress">
						<view style="color: #10BE62;font-weight: bold;">去添加收货地址</view>
						<image style=" width: 30rpx; height: 30rpx;" src="../../static/image/icon_jrj.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>

			<view class="ten-line"></view>
			<view class="row-padding">
				<view class="txt-34">就诊人信息</view>
				<view class="view-remind">{{detailData.medTypeDesc}}</view>
			</view>
			<view class="line"></view>
			<!-- 存在默认就诊人 -->
			<view class="row-padding" v-if="detailData.patient!=null">
				<view class="txt-name2">{{detailData.patient.name}}</view>
				<view class="title-view">
					<image style="width: 23rpx; height: 27rpx;" :src="detailData.patient.sex==1?'../../static/image/icon_nan.png':'../../static/image/icon_nv.png'"
					 mode="aspectFill"></image>
					<view class="txt-content" v-if="detailData.patient.sex==1">男</view>
					<view class="txt-content" v-if="detailData.patient.sex==2">女</view>
				</view>
				<view class="title-view">
					<image style="width: 28rpx; height: 23rpx;" src="../../static/image/icon_nl.png" mode="aspectFill"></image>
					<view class="txt-content">{{detailData.patient.age}}</view>
				</view>
				<view style="flex: 1;"></view>
				<view class="view-top" @tap="updateUser">
					<image style="width: 34rpx; height: 36rpx;" src="../../static/image/icon_qh.png" mode="aspectFill"></image>
					<view>更换</view>
				</view>
			</view>
			<!-- 沒有默认就诊人 去添加 -->
			<view class="row-padding" v-if="detailData.patient==null">
				<view class="view-top-no" @tap="toAddPatient">
					<view style="color: #10BE62;font-weight: bold;">去添加就诊人</view>
					<image style=" width: 50rpx; height: 50rpx;" src="../../static/image/icon_jrj.png" mode="aspectFill"></image>
				</view>
			</view>

			<view class="column-padding" style="padding-top: 0rpx;">
				<view class="txt-30">诊断</view>
				<view class="view-content">{{detailData.symptom}}</view>
				<view class="txt-30" v-if="!this.$u.test.isEmpty(detailData.remark)">医嘱</view>
				<view class="view-content" v-if="!this.$u.test.isEmpty(detailData.remark)">{{detailData.remark}}</view>
			</view>

			<view class="column-padding" style="padding-top: 0rpx;" v-if="detailData.medType==0">
				<view class="txt-30">用药方法</view>
				<view class="view-content">{{detailData.medMethod}}</view>
				<view class="txt-30">剂数</view>
				<view class="view-row-content">
					<view class="txt-28">共</view>
					<view class="txt-orange">{{detailData.plural}}</view>
					<view class="txt-28" style="flex-grow: 1;">剂；</view>
					<view class="txt-28">{{detailData.freq}}</view>
				</view>
			</view>

			<view class="column-padding" style="padding-top: 0rpx;" v-if="detailData.medType==1 && detailData.goodsMedVos!=null">
				<view class="txt-30">Rp</view>
				<view class="row-padding" style="align-items: flex-start;" v-for="(data,index) in detailData.goodsMedVos" :key="index">
					<image style="width: 110rpx; height: 110rpx; border-radius: 12rpx;" :src="data.img" mode="aspectFill"></image>
					<view class="column">
						<view class="row2">
							<view class="txt-28-57">{{data.name}}</view>
							<view class="txt-28-57" style="margin-left: 24rpx; flex-grow: 1;">x{{data.num}}</view>
							<view class="txt-28-57">￥{{data.totalPrice}}</view>
						</view>
						<view class="txt-24" style="color: #AFAFAF;">{{data.method}}</view>
					</view>
				</view>
			</view>

			<!-- <view class="ten-line"></view>
			<view class="row-padding" v-if="detailData.formulationId==19">
				<view style="font-size: 34rpx;color: #595757;">代煎服务</view>
				<view class="row" style="flex: 1;justify-content: space-around;">
					<view class="row" @tap="setGenerationYes">
						<image style="width: 34rpx; height: 34rpx; margin-right: 12rpx;" :src="generation==0?'../../static/image/icon_sel.png':'../../static/image/icon_nor.png'"
						 mode="aspectFill"></image>
						<view class="txt-30">代煎</view>
					</view>
					<view class="row" @tap="setGenerationNo">
						<image style="width: 34rpx; height: 34rpx; margin-right: 12rpx;" :src="generation==1?'../../static/image/icon_sel.png':'../../static/image/icon_nor.png'"
						 mode="aspectFill"></image>
						<view class="txt-30">不代煎</view>
					</view>
				</view>
			</view> -->
			<view class="ten-line"></view>
			<view class="column-padding">
				<view class="txt-30">费用</view>
				<view class="line" style="margin-top: 24rpx;"></view>
				<view v-if="detailData.medPrice!=0" class="row-padding" style="margin-left: 24rpx; border-bottom: 2rpx dashed #e3e3e3;">
					<view class="txt-30-grow">药费</view>
					<view class="txt-30">¥{{detailData.medPrice}}</view>
				</view>
				<view v-if="detailData.takeType==1 && detailData.expressPrice!=0" class="row-padding" style="margin-left: 24rpx; border-bottom: 2rpx dashed #e3e3e3;">
					<view class="txt-30-grow">快递费</view>
					<view class="txt-30">¥{{detailData.expressPrice}}</view>
				</view>
				<!-- 西药处方的时候才展示诊金 中药处方的诊金包含在药费中了 -->
				<view v-if="detailData.medType==1 && detailData.fee!=0 " class="row-padding" style="margin-left: 24rpx; border-bottom: 2rpx dashed #e3e3e3;">
					<view class="txt-30-grow">诊金</view>
					<view class="txt-30">¥{{detailData.fee}}</view>
				</view>

				<view class="row-padding" style="margin-left: 24rpx; border-bottom: 2rpx dashed #e3e3e3;" v-if="detailData.formulationId==19 && (detailData.workPrice!=0 || detailData.generationPrice!=0)">
					<view class="txt-30-grow">代煎费/加工费</view>
					<view class="txt-30" v-if="detailData.generationPrice!=0">¥{{detailData.generationPrice}}</view>
					<view class="txt-30" v-if="detailData.workPrice!=0">¥{{detailData.workPrice}}</view>
				</view>
			</view>
			<view style="background-color: #F9F9F9;padding: 12rpx;font-size: 28rpx; color: #AFAFAF;" v-if="detailData.medType==0">备注:详细信息付款之后可见(非保密处方)</view>
		</scroll-view>


		<view class="row-padding2">
			<view class="txt-26">合计:</view>
			<view class="txt-red">¥{{detailData.totalPrice}}</view>
			<view class="button" @tap="isHaveAddress">提交订单</view>
		</view>

		<!-- 确认支付 -->
		<tui-bottom-popup :show="payShow" @close="payPopup">
			<view class="tui-share add-view">
				<view class="bottom-top">
					<view class="p-title">付款详情</view>
					<image class="b-delete" src="../../static/image/delete.png" mode="aspectFill" @tap="payPopup"></image>
				</view>
				<view class="line"></view>
				<view class="p-price">¥{{detailData.totalPrice}}</view>
				<view class="p-way">支付方式选择</view>
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
		onLoad(option) {
			if (option.scene) {
				console.log("has scene");
				var scene = decodeURIComponent(option.scene);
				//scene为参数&拼接 由于这里仅传递了一个参数所以直接split “=”
				console.log("scene is ", scene);
				var arr = scene.split("=");
				console.log("setStorageSync:", arr[0], "=", arr[1]);
				this.id = arr[1];
				this.getDetailData();
			} else {
				console.log("no scene");
				console.log("处方i" + JSON.stringify(option));
				//当前位置的if判断是用在非患者端进行扫码时候的
				if (JSON.stringify(option).includes("caseTemplateId")) {
					this.$u.get(this.scanContentUrl, {
						'content': "?caseTemplateId_" + option.caseTemplateId
					}).then(res => {
						if (res.status == 0) {
							this.id = res.data;
							this.getDetailData();
						}
					})
				} else {
					this.id = option.caseId;
					this.getDetailData();
				}
			}
			this.takeType = this.detailData.takeType;
			//更换就诊人
			uni.$on(this.PRESCRIPTIONPATIENT, data => {
				this.updatePatient(data.id);
			});
			// 更换收货地址
			uni.$on(this.UPADDRESS, data => {
				console.log("更换收货地址");
				console.log(data.id);
				this.getUpdateAddress(data.id);
			});
			// 无收货地址 去添加成功回调
			uni.$on(this.ADDADDRESS, data => {
				this.getMoAddress();
			});
			// 无就诊人 去添加成功回调
			uni.$on(this.ADDPATIENT, data => {
				this.getDetailData();
			});
		},
		onUnload() {
			uni.$off(this.PRESCRIPTIONPATIENT);
			uni.$off(this.UPADDRESS);
			uni.$off(this.ADDADDRESS);
			uni.$off(this.ADDPATIENT);
		},
		data() {
			return {
				id: '',
				detailData: '',
				payShow: false,
				payType: false, //false微信 true支付宝
				takeType: '', //0自取 1快递
			}
		},
		methods: {
			//提交订单
			handleHiddenShare() {
				var me = this;
				//#ifdef H5
				this.payPopup();
				this.$u.toast("请先下载应用方可付款，点击顶部'打开'");
				return;
				//#endif
				//1支付宝 2微信
				let platform = this.payType ? 1 : 2;
				this.$u.get(this.orderCaseSubmitUrl, {
					'caseId': this.id,
					'platform': platform,
					'deviceType': uni.getStorageSync(this.DEVICETYPE)
				}).then(res => {
					console.log("提交订单");
					console.log(res);
					if (res.status == 0) {
						// res.data;//为要提交的信息
						if (this.payType) { //支付宝支付成功
							me.zfbApi(res.data.body);
						} else { //微信支付成功
							// #ifndef MP-WEIXIN
							me.wxApi(res.data);
							// #endif
							// #ifdef MP-WEIXIN
							me.wxPay(res.data);
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
					},
					fail: function(err) {
						console.log('微信支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			wxApi(info) {
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo: info, //微信、支付宝订单数据
					success: function(res) {
						console.log('success:' + JSON.stringify(res));
					},
					fail: function(err) {
						console.log('fail:' + JSON.stringify(err));
					}
				});
			},
			zfbApi(info) {
				uni.requestPayment({
					provider: 'alipay',
					orderInfo: info, //微信、支付宝订单数据
					success: function(res) {
						console.log('success:' + JSON.stringify(res));
						//到订单详情页面
					},
					fail: function(err) {
						console.log('fail:' + JSON.stringify(err));
					}
				});
			},
			//更换收货地址
			getUpdateAddress(addressId) {
				console.log("订单id");
				console.log(this.id);
				console.log("订单地址id");
				console.log(addressId);
				this.$u.get(this.caseSetDetailUrl, {
					'caseId': this.id,
					'takeType': this.takeType,
					'addressId': addressId
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.detailData = res.data;
					}
				})
			},
			//更换就诊人
			updatePatient(patientId) {
				this.$u.get(this.caseSetPatientUrl, {
					'caseId': this.id,
					'patientId': patientId
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.getDetailData();
						uni.$emit(this.PRESCRIPTIONPATIENTT, "");
					}
				})
			},
			//添加就诊人
			toAddPatient() {
				uni.navigateTo({
					url: "../../ApagesA/authentication/authentication?type=2"
				})
			},
			//无收货人去添加
			addAddress() {
				uni.navigateTo({
					url: "../../ApagesA/address-add/address-add?type=3"
				})
			},
			//更换收货人
			updateAddress() {
				//解决传参过长
				uni.navigateTo({
					url: "../need-update-address/need-update-address?type=2&addressData=" +
						encodeURIComponent(JSON.stringify(this.detailData.customerAddress))
				})
			},
			//更换就诊人
			updateUser() {
				//解决传参过长
				uni.navigateTo({
					url: "../need-update-user/need-update-user?type=2&userData=" +
						encodeURIComponent(JSON.stringify(this.detailData.patient))
				})
			},
			//设置快递邮寄
			setTakeOne() {
				this.takeType = 1;
				if (this.$u.test.isEmpty(this.detailData.customerAddress)) {
					this.$u.get(this.addressDefaultUrl).then(res => {
						console.log("获取默认收货人")
						console.log(res)
						if (res.status == 0) {
							this.setTake(res.data.id);
						}
					}).catch(ex => {
						if (ex.status == 4) {
							console.log("获取默认收货人没数据")
							console.log(ex);
							this.detailData.customerAddress = null;
						}
					})
				} else {
					this.setTake(this.detailData.customerAddress.id);
				}
			},
			//获取默认收货地址
			getMoAddress() {
				this.$u.get(this.addressDefaultUrl).then(res => {
					if (res.status == 0) {
						this.detailData.customerAddress = res.data;
					}
				})
			},
			//设置快递邮寄
			setTake(addressid) {
				this.$u.get(this.caseSetDetailUrl, {
					'caseId': this.id,
					'takeType': this.takeType,
					'addressId': addressid,
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.detailData = res.data;
					}
				})
			},
			//设置到店自取
			setTakeZero() {
				this.takeType = 0;
				console.log("设置到店自取参数");
				console.log(this.id);
				console.log(this.takeType);

				this.$u.get(this.caseSetDetailUrl, {
					'caseId': this.id,
					'takeType': this.takeType,
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.detailData = res.data;
					}
				})
			},
			getDetailData() {
				console.log("处方" + this.id);
				uni.showLoading();
				this.$u.get(this.scanContentUrl, {
					'content': "a?caseId=" + this.id
				}).then(res => {
					uni.hideLoading();
					if (res.status == 0) {
						this.detailData = res.data;
						this.takeType = this.detailData.takeType;
					}
				}).catch(ex => {
					uni.hideLoading();
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
						setTimeout(() => {
							uni.navigateBack();
						}, 1000)
					}
				})


				// uni.showLoading();
				// this.$u.get(this.caseDetailUrl, {
				// 	'caseId': this.id
				// }).then(res => {
				// 	uni.hideLoading();
				// 	console.log("下单详情")
				// 	console.log(res.data)
				// 	if (res.status == 0) {
				// 		this.detailData = res.data;
				// 		this.takeType = this.detailData.takeType;
				// 	}
				// }).catch(ex => {
				// 	uni.hideLoading();
				// 	if (ex.data.status == 1) {
				// 		this.$u.toast(ex.data.msg);
				// 		setTimeout(() => {
				// 			uni.navigateBack();
				// 		}, 1000)
				// 	}
				// })
			},
			checkPay(pay) {
				if (!pay) {
					this.payType = !this.payType;
				}
			},
			isHaveAddress() {
				if (this.takeType == 1) {
					if (this.$u.test.isEmpty(this.detailData.customerAddress)) {
						this.$u.toast("请先添加收货地址");
						return;
					}
				}
				if (this.$u.test.isEmpty(this.detailData.patient)) {
					this.$u.toast("请先添加就诊人");
					return;
				}
				this.payPopup();
			},
			payPopup() {
				this.payShow = !this.payShow;
			},
		}
	}
</script>

<style>
	@import url("prescription-submit-cen.css");
</style>
