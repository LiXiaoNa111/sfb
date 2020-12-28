<template>
	<view>
		<view class="row item-bc" @tap="checkType(0)">
			<view class="column" style="flex: 1;">
				<view class="row">
					<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_tk.png" mode="aspectFill"></image>
					<view class="txt-30-bold" style="margin-left: 12rpx;">我要退款(无需退货)</view>
				</view>
				<view class="txt-26" style="margin-left: 56rpx;margin-top: 12rpx;">没收到货，或与卖家协商同意不用退货只退款</view>
			</view>
			<image style="width: 34rpx; height: 34rpx;" :src="serviceType==0?
			'../../static/image/icon_sel.png':'../../static/image/icon_no.png'"
			 mode="aspectFill"></image>
		</view>
		<view class="row item-bc" @tap="checkType(1)">
			<view class="column" style="flex: 1;">
				<view class="row">
					<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_thtk.png" mode="aspectFill"></image>
					<view class="txt-30-bold" style="margin-left: 12rpx;">我要退货退款</view>
				</view>
				<view class="txt-26" style="margin-left: 56rpx;margin-top: 12rpx;">已收到货，需要退换收到的货物</view>
			</view>
			<image style="width: 34rpx; height: 34rpx;" :src="serviceType==1?
			'../../static/image/icon_sel.png':'../../static/image/icon_no.png'"
			 mode="aspectFill"></image>
		</view>


		<view class="column item-bc">
			<view class="row" @tap="payPopup">
				<view class="txt-30" style="flex-grow: 1;">退款原因</view>
				<view class="txt-30">{{reasonsName}}</view>
				<image style="width: 14rpx; height: 24rpx;margin-left: 12rpx;" src="../../static/image/icon_right.png" mode="aspectFill"></image>
			</view>
			<view class="line"></view>
			<view class="row">
				<view class="txt-30" style="flex-shrink: 0;">退款金额</view>
				<view class="txt-30-ec" style="margin-left: 24rpx;">¥</view>
				<input class="txt-34-ec" type="number" v-model="txtPayPrice" />

			</view>
			<view class="line"></view>
			<view class="row">
				<view class="txt-30" style="flex-shrink: 0;">退款说明</view>
				<input style="margin-left: 24rpx;width: 100%; font-size: 30rpx;" type="text" placeholder="选填" v-model="explain"></input>
			</view>
		</view>

		<view class="column item-bc">
			<view class="txt-30" style="margin-bottom: 12rpx;">上传凭证</view>
			<view class="tui-box-upload">
				<!--serverUrl表示上传图片的地址 -->
				<tui-upload :serverUrl="serverUrl" @complete="result" @remove="remove"></tui-upload>
			</view>
		</view>
		<view class="button" @tap="upData">提交</view>

		<!-- 退款原因 -->
		<tui-bottom-popup :show="payShow" @close="payPopup">
			<view style="display: flex; flex-direction: column; align-items: center;" v-for="(data,index) in reasonsList" :key="index">
				<view class="txt-reasons" @tap="checkReasons(data.name)">{{data.name}}</view>
				<view class="line2"></view>
			</view>
		</tui-bottom-popup>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.goodData = JSON.parse(decodeURIComponent(option.data));
			this.txtPayPrice = this.goodData.payPrice;
			this.getReasons();
			this.serverUrl = this.utilUploadUrl;
		},
		data() {
			return {
				goodData: '',
				//上传地址
				serverUrl: '',
				serviceType: 0, //	0退款 1退货退款
				explain: '', //退款说明
				reasonsList: '',
				payShow: false,
				reasonsName: '请选择', //退款原因
				txtPayPrice: '', //退款金額
				imageData: [], //要上传的图片集合
			}
		},
		methods: {
			upData() {
				if (this.reasonsName == "请选择") {
					this.$u.toast("请选择退款原因");
					return;
				}
				if (this.$u.test.isEmpty(this.txtPayPrice)) {
					this.$u.toast("请输入要退款的金额");
					return;
				}
				if (this.txtPayPrice > this.goodData.payPrice) {
					this.$u.toast("不可大于订单金额" + this.goodData.payPrice);
					this.txtPayPrice = this.goodData.payPrice;
					return;
				}
				// if (this.$u.test.isEmpty(this.imageData)) {
				// 	this.$u.toast("请先上传凭证");
				// 	return;
				// }

				console.log("退款金额" + this.txtPayPrice);
				console.log("退款说明" + this.explain);
				console.log("退款原因" + this.reasonsName);
				console.log("订单编号" + this.goodData.orderNo);
				console.log("退款类型" + this.serviceType);
				var filesUrl = "";
				for (var i = 0; i < this.imageData.length; i++) {
					if (i != this.imageData.length - 1) {
						filesUrl += this.imageData[i] + ",";
					} else {
						filesUrl += this.imageData[i];
					}
				}
				console.log("上传凭证");
				console.log(filesUrl);
				this.$u.get(this.orderRefundApplyUrl, {
					'orderNo': this.goodData.orderNo,
					'refundPrice': this.txtPayPrice,
					'remark': this.explain,
					'reason': this.reasonsName,
					'type': this.serviceType,
					'filesUrl': filesUrl
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast(res.msg);
						uni.$emit(this.INFORMORDERREASONS, "");
						uni.navigateBack();
					}
				})

			},
			//添加一张照片
			result: function(e) {
				console.log("添加一张照片")
				this.imageData = e.imgArr;
				console.log(this.imageData)
			},
			//移除照片
			remove: function(e) {
				console.log("移除一张图片，下标为")
				console.log(e)
			},
			checkType(type) {
				this.serviceType = type;
			},
			checkReasons(name) {
				this.reasonsName = name;
				this.payPopup();
			},
			payPopup() {
				this.payShow = !this.payShow;
			},
			getReasons() {
				this.$u.get(this.orderReasonsUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.reasonsList = res.data;
					}
				})
			},
		}
	}
</script>

<style>
	@import url("apply-refund.css");
</style>
