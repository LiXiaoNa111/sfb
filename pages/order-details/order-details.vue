<template>
	<view>
		<image style="width: 100%;height: 250rpx;" src="../../static/image/bg_img2.png" mode="aspectFill"></image>
		<view class="column" style="height: calc(100vh); position: absolute; top: 0rpx; left: 0rpx;">
			<view class="column" style="padding: 24rpx; flex: 1; overflow: scroll;">
				<view class="row">
					<view class="txt-30-fff">{{detaildata.stateDesc}}</view>
					<!-- detaildata.state 0未付款 1已付款  2已发货 3 已收货  4已完成 5 已退款  6 已撤单 -->
					<image v-if="detaildata.state==0" style="margin-right: 60rpx; width: 140rpx; height: 140rpx;" src="../../static/image/icon_dfk.png"
					 mode="aspectFill"></image>
					<image v-if="detaildata.state==1" style="margin-right: 60rpx; width: 140rpx; height: 140rpx;" src="../../static/image/icon_yxd.png"
					 mode="aspectFill"></image>
					<image v-if="detaildata.state==2" style="margin-right: 60rpx; width: 140rpx; height: 140rpx;" src="../../static/image/icon_ysz.png"
					 mode="aspectFill"></image>
					<image v-if="detaildata.state==3 || detaildata.state==4" style="margin-right: 60rpx; width: 140rpx; height: 140rpx;"
					 src="../../static/image/icon_ywc.png" mode="aspectFill"></image>
					<image v-if="detaildata.state==5" style="margin-right: 60rpx; width: 140rpx; height: 140rpx;" src="../../static/image/icon_detail_ytk.png"
					 mode="aspectFill"></image>
					<image v-if="detaildata.state==6" style="margin-right: 60rpx; width: 140rpx; height: 140rpx;" src="../../static/image/icon_yqxdd.png"
					 mode="aspectFill"></image>
				</view>
				<view class="card" v-if="detaildata.state!=6 && ( expressData!=null || addressData!=null )">
					<view class="row" style="align-items: flex-start;" v-if="expressData!=null" @tap="seeLogistics(detaildata.orderNo)">
						<image style="width: 40rpx; height: 28rpx;" src="../../static/image/icon_wl.png" mode="aspectFill"></image>
						<view class="card-column">
							<view class="row">
								<!-- "deliverystatus": "3", 
								/* 0：快递收件(揽件)1.在途中 2.正在派件 3.已签收 4.派送失败 5.疑难件 6.退件签收  */ -->
								<view class="txt-30-59" v-if="expressData.result.deliverystatus==0">待揽件</view>
								<view class="txt-30-59" v-if="expressData.result.deliverystatus==1">运输中</view>
								<view class="txt-30-59" v-if="expressData.result.deliverystatus==2">正在派件</view>
								<view class="txt-30-59" v-if="expressData.result.deliverystatus==3">已签收</view>
								<view class="txt-30-59" v-if="expressData.result.deliverystatus==4">派送失败</view>
								<view class="txt-30-59" v-if="expressData.result.deliverystatus==5">疑难件</view>
								<view class="txt-30-59" v-if="expressData.result.deliverystatus==6">退件签收</view>
								<image style="width: 14rpx; height: 24rpx;" src="../../static/image/icon_right.png" mode="aspectFill"></image>
							</view>
							<view class="txt-26-af" v-if="expressData.result.list!=null">{{expressData.result.list[0].status}}</view>
							<view class="txt-26-af" v-if="expressData.result.list==null">暂无物流消息</view>
						</view>
					</view>
					<view class="row" style="align-items: flex-start; padding-top: 30rpx; " v-if="addressData!=null">
						<image style="width: 26rpx; height: 36rpx;" src="../../static/image/icon_address.png" mode="aspectFill"></image>
						<view style="margin-left: 24rpx;padding-bottom: 30rpx;width: 100%; display: flex; flex-direction: column; align-items: flex-start;">
							<view class="txt-30-59">{{addressData.receiver}}</view>
							<view class="txt-26-af">{{addressData.address}}</view>
						</view>
					</view>
				</view>
				<view class="card">
					<view class="row">
						<view class="txt-30-59" style="flex-grow: 1;">{{detaildata.orderTypeDesc}}</view>
						<view class="txt-26-afaf">{{detaildata.stateDesc}}</view>
					</view>

					<!-- 商品 -->
					<view v-if=" detaildata.orderType==1 || detaildata.orderType==2 || detaildata.orderType==3">
						<view class="center-row" v-if="detaildata.goodsMedVoList!=null" v-for="(itemData,index) in detaildata.goodsMedVoList"
						 :key="index">
							<image style="flex-shrink: 0; width: 170rpx; height: 170rpx; border-radius: 8rpx;" :src="itemData.img" mode="aspectFill"></image>
							<view class="center-column">
								<view class="item-row">
									<view class="shop-title">{{itemData.name}}</view>
									<view class="shop-price">¥{{itemData.price}}</view>
								</view>
								<view class="item-row2">
									<view class="shop-spec">{{itemData.spec}}</view>
									<view class="shop-num">X{{itemData.num}}</view>
								</view>
							</view>
						</view>
						<!-- 普通商品&&患者自有处方没返回快递费和诊金 也不存在快递费和诊金 自行理解 -->
						<view v-if="detaildata.orderType!=2 && detaildata.orderType!=3">
							<view class="list-row2" style="margin-top: 24rpx;" v-if="detaildata.expressPrice!=0">
								<view class="list-before">快递费</view>
								<view class="list-after">¥{{detaildata.expressPrice}}</view>
							</view>
							<view class="list-row2" v-if="detaildata.fee!=0">
								<view class="list-before">诊金</view>
								<view class="list-after">¥{{detaildata.fee}}</view>
							</view>
						</view>

					</view>

					<!-- 处方 -->
					<view v-if="detaildata.orderType==0" style="margin-top: 24rpx;">
						<view class="list-row">
							<view class="list-before">医师</view>
							<view class="list-after">{{detaildata.docName}}</view>
						</view>
						<view class="list-row">
							<view class="list-before">处方名称</view>
							<view class="list-after">{{detaildata.symptom}}</view>
						</view>
						<view class="list-row">
							<view class="list-before">药品类型</view>
							<view class="list-after">{{detaildata.formulationName}}</view>
						</view>
						<view class="dash-line"></view>
						<view class="list-row">
							<view class="list-before">药品价格</view>
							<view class="list-after2">¥{{detaildata.medPrice}}</view>
						</view>
						<view class="list-row" v-if="detaildata.workPrice!=0">
							<view class="list-before">加工费</view>
							<view class="list-after2">¥{{detaildata.workPrice}}</view>
						</view>
						<view class="list-row" v-if="detaildata.generationPrice!=0">
							<view class="list-before">代煎费</view>
							<view class="list-after2">¥{{detaildata.generationPrice}}</view>
						</view>
						<view class="list-row" v-if="detaildata.expressPrice!=0">
							<view class="list-before">快递费</view>
							<view class="list-after2">¥{{detaildata.expressPrice}}</view>
						</view>
						<view class="list-row" v-if="detaildata.fee!=0">
							<view class="list-before">诊金</view>
							<view class="list-after2">¥{{detaildata.fee}}</view>
						</view>
						<view class="list-row" v-if="detaildata.state==0">
							<view class="list-before">处方信息</view>
							<view class="list-after">{{detaildata.isSecret}}</view>
						</view>
					</view>
					<view class="txt-30-pricre">¥{{detaildata.payPrice}}</view>
				</view>
				<view class="card">
					<view class="list-row">
						<view class="list-before">订单编号</view>
						<view class="list-after">{{detaildata.orderNo}}</view>
					</view>
					<view class="list-row">
						<view class="list-before">创建时间</view>
						<view class="list-after">{{detaildata.createTime}}</view>
					</view>
					<view class="list-row" v-if="detaildata.payTime!=null">
						<view class="list-before">付款时间</view>
						<view class="list-after">{{detaildata.payTime}}</view>
					</view>
					<view class="list-row" v-if="detaildata.sendTime!=null">
						<view class="list-before">发货时间</view>
						<view class="list-after">{{detaildata.sendTime}}</view>
					</view>
				</view>
			</view>


			<!-- data.state 0未付款 1已付款  2已发货 3 已收货  4已完成 5 已退款  6 已撤单 -->
			<!-- data.orderType	0 处方订单 1 处方商品订单 2 普通商品订单 3患者自有处方订单 -->
			<view class="back-fff" v-if="detaildata.state==0">
				<view style="flex: 1;"></view>
				<view class="button-bottom" @tap="getOrderCancel(detaildata.id)">取消订单</view>
				<view class="button-bottom" @tap="getUpAddress">修改地址</view>
				<view class="button-bottom" @tap="payPopup">去付款</view>
			</view>
			<view class="back-fff" v-if="detaildata.state==1">
				<view style="flex: 1;"></view>
				<view class="button-bottom" v-if="detaildata.orderType==0 || detaildata.orderType==1 || detaildata.orderType==3"
				 @tap="toCaseDetail(detaildata.orderNo,detaildata.orderType)">查看处方笺</view>
				<view class="button-bottom" v-if="detaildata.orderType==2 && detaildata.refundStatus==0" @tap="getRefund">申请退款</view>
				<view class="button-bottom" v-if="detaildata.refundStatus==1" @tap="toRefundDetails(detaildata)">售后</view>
				<!-- <view class="button-bottom" @tap="getUpAddress">修改地址</view> -->
				<view class="button-bottom" @tap="getOrderSendTip(detaildata.id)">提醒发货</view>
			</view>
			<view class="back-fff" v-if="detaildata.state==2">
				<view style="flex: 1;"></view>
				<view class="button-bottom" v-if="detaildata.orderType==0 || detaildata.orderType==1 || detaildata.orderType==3"
				 @tap="toCaseDetail(detaildata.orderNo,detaildata.orderType)">查看处方笺</view>
				<view class="button-bottom" v-if="detaildata.orderType==2 && detaildata.refundStatus==0" @tap="getRefund">申请退款</view>
				<view class="button-bottom" v-if="detaildata.refundStatus==1" @tap="toRefundDetails(detaildata)">售后</view>
				<view class="button-bottom" @tap="seeLogistics(detaildata.orderNo)">查看物流</view>
				<view class="button-bottom" @tap="getReceive(detaildata.id)">确认收货</view>
			</view>
			<view class="back-fff" v-if="detaildata.state==3 || detaildata.state==4">
				<view style="flex: 1;"></view>
				<view class="button-bottom" v-if="detaildata.orderType==0 || detaildata.orderType==1 || detaildata.orderType==3"
				 @tap="toCaseDetail(detaildata.orderNo,detaildata.orderType)">查看处方笺</view>
				<view class="button-bottom" v-if="detaildata.orderType==2 && detaildata.refundStatus==0" @tap="getRefund">申请退款</view>
				<view class="button-bottom" v-if="detaildata.refundStatus==1" @tap="toRefundDetails(detaildata)">售后</view>
				<view class="button-bottom" @tap="getDel(detaildata.id)">删除订单</view>
				<!-- <view class="button-bottom">再次购买</view> -->
			</view>
			<view class="back-fff" v-if="detaildata.state==5">
				<view style="flex: 1;"></view>
				<view class="button-bottom">已退款</view>
			</view>
		</view>

		<!-- 删除订单提醒 -->
		<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定删除该订单吗？" color="#333" :size="32"></tui-modal>

		<!-- 底部弹出付款  -->
		<tui-bottom-popup :show="payShow" @close="payPopup">
			<view class="tui-share add-view">
				<view class="bottom-top">
					<view class="p-title">付款详情</view>
					<image class="b-delete" src="../../static/image/delete.png" mode="aspectFill" @tap="payPopup"></image>
				</view>
				<view class="line"></view>
				<view class="p-price">¥{{detaildata.payPrice}}</view>
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
					<view class="p-button" @tap="handleHiddenShare()">立即付款</view>
				</view>
			</view>
		</tui-bottom-popup>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.id = option.id;
			console.log("当前订单id" + this.id);
			this.getDetailData();
			//修改地址回调通知
			uni.$on(this.INFORMGOODSLISTADRESS, data => {
				console.log("修改回调");
				console.log(this.detaildata);

				if (this.detaildata.state == 0) { //(未付款是修改收货地址 快递费会改)设置快递邮寄
					//	0代煎 1不代煎
					this.$u.get(this.caseSetDetailUrl, {
						'caseId': this.detaildata.caseId,
						'takeType': this.detaildata.takeType,
						'addressId': data,
						'generation': this.detaildata.generationPrice == 0 ? 1 : 0
					}).then(res => {
						console.log("设置地址后");
						console.log(res)
						if (res.status == 0) {
							// this.detailData = res.data;
							this.getDetailData();
						}
					}).catch(ex => {
						console.log("失败");
						console.log(ex.data.msg);
					})
				} else if (this.detaildata.state == 1) { //（已付款时仅修改地址）
					this.$u.get(this.orderAddressUrl, {
						'id': this.id,
						'addressId': data
					}).then(res => {
						console.log(res)
						if (res.status == 0) {
							this.$u.toast(res.msg);
							this.getDetailData();
						}
					})
				}
			});
			//申请退款成功
			uni.$on(this.INFORMORDERREASONS, data => {
				this.getDetailData();
			});
			//售后提交快递信息
			uni.$on(this.INFORMORDERREFUNND, data => {
				this.getDetailData();
			})
		},
		onUnload() {
			uni.$off(this.INFORMGOODSLISTADRESS);
			uni.$off(this.INFORMORDERREASONS);
			uni.$off(this.INFORMORDERREFUNND);
		},
		data() {
			return {
				id: '',
				detaildata: '',
				addressData: '',
				payShow: false,
				payType: false, //false微信 true支付宝
				modal2: false,
				OrderId: '', //删除订单id
				expressData: null, //物流信息
			}
		},
		methods: {
			//查看处方笺
			toCaseDetail(orderNo, type) {
				uni.navigateTo({
					url: "../case-detail/case-detail?caseId=" + orderNo + "&type=" + type
				})
			},
			//退款详情
			toRefundDetails(data) {
				uni.navigateTo({
					url: "../refund-details/refund-details?orderNo=" + data.orderNo
					// +"&refundInfo="+ encodeURIComponent(JSON.stringify(data.refundInfo))
				})
			},
			//确认收货
			getReceive(id) {
				this.$u.get(this.orderReceiveUrl, {
					'id': id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast("确认收货成功");
						uni.$emit(this.INFORMTAKE, "");
						this.getDetailData();
					}
				})
			},
			//查看物流
			seeLogistics(orderNo) {
				uni.navigateTo({
					url: "../logistics/logistics?orderNo=" + orderNo
				})
			},
			//申请退款
			getRefund() {
				uni.navigateTo({
					url: "../apply-refund/apply-refund?data=" + encodeURIComponent(JSON.stringify(this.detaildata))
				})
			},
			//支付
			handleHiddenShare() {
				//#ifdef H5
				this.payPopup();
				this.$u.toast("请先下载应用方可付款，点击顶部'打开'");
				return;
				//#endif
				if (this.detaildata.orderType == 0 || this.detaildata.orderType == 1) {
					//需求单提交订单
					this.GetCasePayMessage();
				} else if (this.detaildata.orderType == 2 || this.detaildata.orderType == 3) {
					//购物车提交订单
					this.GetCartPayMessage();
				}
			},
			//需求单提交订单
			GetCasePayMessage() {
				//1支付宝 2微信
				let platform = this.payType ? 1 : 2;
				this.$u.get(this.orderCaseSubmitUrl, {
					'caseId': this.detaildata.caseId,
					'platform': platform,
					'deviceType': uni.getStorageSync(this.DEVICETYPE)
				}).then(res => {
					if (res.status == 0) {
						this.payPopup();
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
				}).catch(ex => {
					this.payPopup();
					this.$u.toast(ex.data.msg);
				})
			},
			//购物车提交订单
			GetCartPayMessage() {
				// 	1支付宝 2微信
				let platform = this.payType ? 1 : 2;
				this.$u.get(this.orderPayUrl, {
					'orderNo': this.detaildata.orderNo,
					'platform': platform,
					'deviceType': uni.getStorageSync(this.DEVICETYPE)
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.payPopup();
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
				}).catch(ex => {
					this.payPopup();
					this.$u.toast(ex.data.msg);
				})
			},
			//微信api
			wxApi(info) {
				let me = this;
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo: info, //微信、支付宝订单数据
					success: function(res) {
						console.log("微信支付成功回调");
						uni.$emit(me.INFORMGOODSLISTPAY, "");
						me.getDetailData();
					},
					fail: function(err) {
						console.log('微信支付失败回调:' + JSON.stringify(err));
					}
				});
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
						uni.$emit(me.INFORMGOODSLISTPAY, "");
						me.getDetailData();
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
						console.log("支付宝支付成功回调");
						uni.$emit(me.INFORMGOODSLISTPAY, "");
						me.getDetailData();
						console.log("支付宝支付成功回调回调回调");
					},
					fail: function(err) {
						console.log('支付宝支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			checkPay(pay) {
				if (!pay) {
					this.payType = !this.payType;
				}
			},
			payPopup() {
				this.payShow = !this.payShow;
			},
			//提醒发货
			getOrderSendTip(id) {
				this.$u.get(this.orderSendTipUrl, {
					'id': id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast(res.msg);
					}
				})
			},
			//取消订单
			getOrderCancel(id) {
				this.$u.get(this.orderCancelUrl, {
					'id': id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast(res.msg);
						this.getDetailData();
						uni.$emit(this.INFORMGOODSLIST, "");
					}
				})
			},
			//修改地址
			getUpAddress() {
				//解决传参过长
				uni.navigateTo({
					url: "../need-update-address/need-update-address?type=4"
				})
			},
			//删除订单
			getDel(id) {
				this.OrderId = id;
				this.show2();
			},
			show2() {
				this.modal2 = true;
			},
			hide2() {
				this.modal2 = false;
			},
			handleClick2(e) {
				let index = e.index;
				if (index === 0) {
					// this.$u.toast("取消");
				} else {
					this.getOrderDelete();
				}
				this.hide2();
			},
			//删除订单
			getOrderDelete(id) {
				this.$u.get(this.orderDeleteUrl, {
					'id': this.OrderId
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast("删除订单成功");
						uni.$emit(this.INFORMORDERDELETE, "");
						uni.navigateBack();
					}
				})
			},
			getDetailData() {
				uni.showLoading();
				this.$u.get(this.orderDetailUrl, {
					'id': this.id
				}).then(res => {
					uni.hideLoading();
					console.log(res)
					if (res.status == 0) {
						this.detaildata = res.data;
						this.addressData = res.data.orderReceive;
						if (res.data.expressData.status == 0) {
							this.expressData = res.data.expressData;
						} else {
							this.$u.toast(res.data.expressData.msg);
							this.expressData = null;
						}
					}
				}).catch(ex => {
					uni.hideLoading();
				})
			},
		}
	}
</script>

<style>
	@import url("order-details.css");
</style>
