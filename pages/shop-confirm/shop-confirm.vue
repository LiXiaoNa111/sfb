<template>
	<view class="back">
		<view style="flex: 1; overflow: scroll;padding-bottom: 24rpx;">
			<myh5></myh5>
			<view class="view" v-if="addressData!=null">
				<view class="card row" style="align-items: center;" @tap="toUpAddress">
					<view class="column">
						<view class="view-top">
							<image style="width: 26rpx; height: 36rpx;" src="../../static/image/icon_address.png" mode="aspectFill"></image>
							<view class="txt-name">{{addressData.receiver}}&#8194;{{addressData.phone}}</view>
						</view>
						<view class="txt-address">{{addressData.province}}{{addressData.city}}{{addressData.area}}{{addressData.detail}}</view>
					</view>
					<view style="flex-grow: 1;"></view>
					<image style="width: 48rpx; height: 52rpx;" src="../../static/image/icon_dj.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="view" v-if="addressData==null" @tap="addAddress">
				<view class="card row" style="align-items: center;">
					<view>请添加收货地址</view>
					<view style="flex-grow: 1;"></view>
					<image style="width: 48rpx; height: 52rpx;" src="../../static/image/icon_dj.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="view">
				<view class=" card column" v-for="(data,index) in detailData.list" :key="index">
					<view class="clinic-txt">{{data.clinicName}}</view>
					<view class="center-row" v-for="(itemGood , i) in data.goodsVos" :key="i">
						<image style="flex-shrink: 0; width: 170rpx; height: 170rpx; border-radius: 8rpx;" :src="itemGood.goodsImg" mode="aspectFill"></image>
						<view class="center-column">
							<view class="item-row">
								<view class="shop-title">{{itemGood.goodsName}}</view>
								<view class="shop-price">¥{{itemGood.goodsPrice}}</view>
							</view>
							<view class="item-row2">
								<view class="shop-spec">{{itemGood.goodsSpecs}}</view>
								<view class="shop-num">x{{itemGood.num}}</view>
							</view>
						</view>
					</view>
					<view class="row" style="margin-top:50rpx ;">
						<view class="txt-26" style="flex-grow: 1;">配送费</view>
						<view v-if="data.expressPrice!=0" class="txt-26">¥{{data.expressPrice}}</view>
						<view v-else class="txt-26">快递免邮</view>
					</view>
					<view class="row" style="margin-top:50rpx ;">
						<view class="txt-26" style="flex-grow: 1;">商品个数</view>
						<view class="txt-26">x{{data.goodsNum}}</view>
					</view>
					<view class="row" style="margin-top:40rpx ;">
						<view class="txt-26" style="flex-grow: 1;">商品金额</view>
						<view class="txt-30-pricre">¥{{data.totalPrice}}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bottom-view">
			<view style="flex-grow: 1;"></view>
			<view class="txt-26-af">共{{detailData.allNum}}件</view>
			<view class="column">
				<view class="row">
					<view class="txt-26">总计:</view>
					<view class="txt-30-pricre">{{detailData.allPayPrice}}</view>
				</view>
				<view v-if="detailData.allExpressPrice!=0" class="txt-22">快递费：{{detailData.allExpressPrice}}</view>
				<view v-else class="txt-22">快递费：免邮</view>
			</view>
			<view class="button" @tap="payPopup">提交订单</view>
		</view>

		<!-- 底部弹出付款  -->
		<tui-bottom-popup :show="payShow" @close="payPopup">
			<view class="tui-share add-view">
				<view class="bottom-top">
					<view class="p-title">付款详情</view>
					<image class="b-delete" src="../../static/image/delete.png" mode="aspectFill" @tap="payPopup"></image>
				</view>
				<view class="line"></view>
				<view class="p-price">¥{{detailData.allPayPrice}}</view>
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
			this.type = option.type;
			if (this.type == 1) {
				//购物车提交订单进来 订单提交之后购物车就不存在改商品 
				// 所以需更新购物车列表和商品详情页面的购物车商品个数
				uni.$emit(this.INFORMCHATUPGOODS, '');
			}
			this.orderNo = option.orderNo;
			console.log("接收到订单编号为：" + this.orderNo);
			this.getData();
			uni.$on(this.UPCARTADDRESS, data => {
				this.addressData = data;
				console.log("回调的地址信息");
				console.log(this.addressData);
				this.getAddressData();
			})
			uni.$on(this.CONFIRMADDRESS, data => {
				this.getData();
			})
		},
		onUnload() {
			uni.$off(this.UPCARTADDRESS);
			uni.$off(this.CONFIRMADDRESS);
		},
		data() {
			return {
				type: '', //1购物车 2立即购买 3待付款
				orderNo: '',
				detailData: '',
				addressData: '',
				payShow: false,
				payType: false, //false微信 true支付宝
			}
		},
		methods: {
			addAddress() {
				uni.navigateTo({
					url: "../../ApagesA/address-add/address-add?type=4"
				})
			},
			handleHiddenShare() {
				this.payPopup();
				//#ifdef H5
				this.$u.toast("请先下载应用方可付款，点击顶部'打开'");
				return;
				//#endif

				if (this.addressData == null) {
					this.$u.toast("请先添加收货地址！");
					return;
				}
				console.log("上传地址信息");
				console.log(this.addressData);

				// 	1支付宝 2微信
				let platform = this.payType ? 1 : 2;
				this.$u.get(this.orderPayUrl, {
					'orderNo': this.orderNo,
					'addressId': this.addressData.id,
					'platform': platform,
					'deviceType': uni.getStorageSync(this.DEVICETYPE)
				}).then(res => {
					console.log("请求支付");
					console.log(res)
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
				}).catch(ex=>{
					this.$u.toast(ex.data.msg);
				})
			},
			//微信小程序支付
			wxPay(data) {
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: data.timestamp,
					nonceStr: data.noncestr,
					package: data.packagevalue,
					signType: 'MD5',
					paySign: data.sign,
					success: function(res) {
						console.log("微信支付成功回调");
						me.notification();
					},
					fail: function(err) {
						console.log('微信支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			//微信api
			wxApi(info) {
				var me = this;
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo: info, //微信、支付宝订单数据
					success: function(res) {
						console.log("微信支付成功回调");
						me.notification();
					},
					fail: function(err) {
						console.log('微信支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			//支付宝api
			zfbApi(info) {
				var me = this;
				uni.requestPayment({
					provider: 'alipay',
					orderInfo: info, //微信、支付宝订单数据
					success: function(res) {
						console.log("支付宝支付成功回调");
						me.notification();
					},
					fail: function(err) {
						console.log('支付宝支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			//支付成功通知
			notification() {
				if (this.type == 3) {
					uni.$emit(me.INFORMGOODSLISTPAY, "");
					uni.navigateBack();
				} else if (this.type == 1 || this.type == 2) {
					// uni.$emit(me.INFORMGOODSLISTPAY, "");
					uni.navigateTo({
						url: "../my-goods/my-goods?flag=" + 2
					})
					uni.navigateBack();
				}
			},
			toUpAddress() {
				//解决传参过长
				uni.navigateTo({
					url: "../need-update-address/need-update-address?type=3&addressData=" + encodeURIComponent(JSON.stringify(this.addressData))
				})
			},
			getData() {
				uni.showLoading();
				this.$u.get(this.orderResultUrl, {
					orderNo: this.orderNo
				}).then(res => {
					uni.hideLoading();
					console.log("请求手段聚而奋斗元话费");
					console.log(res)
					if (res.status == 0) {
						this.detailData = res.data;
						this.addressData = this.detailData.list[0].customerAddress;
					}
				}).catch(ex => {
					uni.hideLoading();
					if (ex.data.status == 4) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			getAddressData() {
				uni.showLoading();
				this.$u.get(this.orderResultUrl, {
					orderNo: this.orderNo,
					address: this.addressData.id
				}).then(res => {
					uni.hideLoading();
					console.log("请求手");
					console.log(res)
					if (res.status == 0) {
						this.detailData = res.data;
						this.addressData = this.detailData.list[0].customerAddress;
					}
				}).catch(ex => {
					uni.hideLoading();
					if (ex.data.status == 4) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			checkPay(pay) {
				if (!pay) {
					this.payType = !this.payType;
				}
			},
			payPopup() {
				this.payShow = !this.payShow;
			},
		}
	}
</script>

<style>
	@import url("shop-confirm.css");
</style>
