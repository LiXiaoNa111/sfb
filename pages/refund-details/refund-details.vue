<template>
	<view>
		<image style="width: 100%;height: 250rpx;" src="../../static/image/bg_img2.png" mode="aspectFill"></image>
		<view class="column" style="height: calc(100vh); position: absolute; top: 0rpx; left: 0rpx; padding: 24rpx;">
			<!-- state退款状态0申请退款1退款成功2退款失败3审核不通过 -->
			<view class="txt-30-fff" v-if="detailData.state==0">退款中</view>
			<view class="txt-30-fff" v-if="detailData.state==1">退款成功</view>
			<view class="txt-30-fff" v-if="detailData.state==2">退款失败</view>
			<view class="txt-30-fff" v-if="detailData.state==3">审核不通过</view>
			<view class="txt-26-fff">{{detailData.createTime}}</view>
			<view class="card">
				<view class="m-row" style="width: 100%; align-items: center; ">
					<view class="txt-30-57">退款总金额</view>
					<view class="txt-30-ec">¥{{detailData.price}}</view>
				</view>

				<!--type 0只退款  1退货退款 、 -->
				<view class="m-column" v-if="detailData.type==1">
					<view style="height: 24rpx; border-bottom: 1rpx solid #f9f9f9;"></view>
					<view class="txt-30-57" style="margin-top: 36rpx;">退货快递信息</view>

					<view class="m-column" v-if="detailData.refundExpress==null && detailData.refundExpressNo==null">
						<view class="search-box">
							<view class="s-input" @tap="payPopup">
								<text style="flex-grow: 1;">{{express}}</text>
								<image mode="aspectFill" src="../../static/image/icon_right.png" class="img30 pdr20"></image>
							</view>
						</view>
						<view class="m-row" style="width: 100%; margin-top: 48rpx;align-items: center;padding-bottom: 24rpx; border-bottom: 1rpx solid #F9F9F9;">
							<input style="flex-grow: 1; margin-left: 24rpx; font-size: 30rpx;" focus="true" type="text" v-model="expressNumber"
							 placeholder="请输入快递单号" />
							<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/icon_sm.png" @tap="scan"></image>
						</view>
						<view class="button" @tap="upData()">提交</view>

					</view>
					<view class="m-column" v-if="detailData.refundExpress!=null && detailData.refundExpressNo!=null">
						<view class="txt-30-57-2" style="margin-top: 24rpx;margin-left: 24rpx;">{{detailData.refundExpress}}</view>
						<view class="txt-30-57-2" style="margin-top: 24rpx;margin-left: 24rpx;">{{detailData.refundExpressNo}}</view>
					</view>
				</view>

			</view>

			<view class="card">
				<view class="txt-30-57" style="width: 100%;padding-bottom: 24rpx; border-bottom: 1rpx solid #F9F9F9;">退款信息</view>
				<view class="m-row" style="margin-top: 24rpx; width: 100%; align-items: center;padding-bottom: 24rpx; ">
					<view class="txt-26-af" style="flex-shrink: 0; align-self: flex-start;">退款原因</view>
					<view class="txt-26-af" style="margin-left: 24rpx;">{{detailData.remark}}</view>
				</view>
				<view class="m-row" style="width: 100%; align-items: center;padding-bottom: 24rpx; ">
					<view class="txt-26-af" style="flex-shrink: 0; align-self: flex-start;">退款金额</view>
					<view class="txt-26-af" style="margin-left: 24rpx;">¥{{detailData.price}}</view>
				</view>
				<view class="m-row" style="width: 100%; align-items: center;padding-bottom: 24rpx; ">
					<view class="txt-26-af" style="flex-shrink: 0; align-self: flex-start;">申请时间</view>
					<view class="txt-26-af" style="margin-left: 24rpx;">{{detailData.createTime}}</view>
				</view>
				<view class="m-row" style="width: 100%; align-items: center;padding-bottom: 24rpx; ">
					<view class="txt-26-af" style="flex-shrink: 0; align-self: flex-start;">退款编号</view>
					<view class="txt-26-af" style="margin-left: 24rpx;">{{detailData.backOrderNo}}</view>
				</view>
			</view>
		</view>

		<tui-bottom-popup  :show="payShow" @close="payPopup">
			<scroll-view scroll-y="true" style="height: 700rpx;overflow: scroll;">
				<view class="item-view" @tap="checkExpress(data.name)" v-for="(data,index) in expressList" :key="index">{{data.name}}</view>
			</scroll-view>
		</tui-bottom-popup>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.orderNo = option.orderNo;
			this.getDetailData();
			this.getExpressList();
		},
		data() {
			return {
				orderNo: '', //订单编号
				detailData: '',
				express: '', //快递
				expressNumber: '', //快递单号
				expressList: '',
				payShow: false,
			}
		},
		methods: {
			//提交快递信息
			upData() {
				if (this.$u.test.isEmpty(this.express)) {
					this.$u.toast("请先选择快递公司");
					return;
				}
				if (this.$u.test.isEmpty(this.expressNumber)) {
					this.$u.toast("请先填写快递单号");
					return;
				}
				this.$u.get(this.orderRefundExpressUrl, {
					'orderNo': this.orderNo,
					'expressNo': this.expressNumber,
					'expressName': this.express
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast("提交成功");
						this.getDetailData();
						uni.$emit(this.INFORMORDERREFUNND, '');
					}
				})
			},
			getDetailData() {
				this.$u.get(this.orderRefundDetailUrl, {
					'orderNo': this.orderNo
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.detailData = res.data;
					}
				})
			},
			//扫码
			scan() {
				uni.scanCode({
					success: (res) => {
						console.log('条码：');
						console.log(JSON.stringify(res));
						console.log('条码内容：' + res.result);
						this.expressNumber = res.result;
					}
				});
			},
			checkExpress(a) {
				this.express = a;
				this.payPopup();
			},
			payPopup() {
				this.payShow = !this.payShow;
			},
			getExpressList() {
				this.$u.get(this.expressListUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.expressList = res.data;
						this.express = this.expressList[0].name;
					}
				})
			},
		}
	}
</script>

<style>
	@import url("refund-details.css");
</style>
