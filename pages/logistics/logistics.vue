<template>
	<view>
		<view class="tui-card">
			<image style="width: 100rpx; height: 100rpx; border-radius: 50rpx;" :src="detailData.logo" mode="aspectFill"></image>
			<view class="column">
				<view class="tui-order-title">{{detailData.expName}}</view>
				<view class="row" @tap="call(detailData.expPhone)">
					<view class="tui-order-desc">官方电话:</view>
					<view class="tui-order-desc" style="color: #10BE62;">{{detailData.expPhone}}</view>
				</view>
			</view>
		</view>
		<view class="tui-order-tracking">
			<view class="tui-order-time" style="margin-bottom: 12rpx;">快递单号:{{detailData.number}}</view>
			<tui-time-axis>
				<tui-timeaxis-item backgroundColor="transparent" v-for="(data,index) in detailData.list" :key="index">
					<template v-slot:node>
						<view class="tui-node" :style="index==0?{backgroundColor:backgroundColor}:''">
							<tui-icon name="check" color="#fff" :size="14" :bold="true"></tui-icon>
						</view>
					</template>
					<!-- <template v-slot:node>
						<view class="tui-node-dot"></view>
					</template> -->
					<template v-slot:content>
						<view>
							<!-- <view class="tui-order-title">已签收</view> -->
							<view class="tui-order-desc">{{data.status}}</view>
							<view class="tui-order-time tui-gray">{{data.time}}</view>
						</view>
					</template>
				</tui-timeaxis-item>
			</tui-time-axis>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.orderNo=option.orderNo;
			this.getDetail();
		},
		data() {
			return {
				expressNo:'',
				detailData: '',
               backgroundColor:"#10BE62"
			}
		},
		methods: {
			call(phone){
				uni.makePhoneCall({
				    phoneNumber: phone
				});
			},
			getDetail() {
				uni.showLoading();
				this.$u.get(this.expressDetailUrl, {
					'orderNo': this.orderNo
				}).then(res => {
					uni.hideLoading();
					if (res.status == 0) {
						if (res.data.status == 0) {
							if(res.data.result!=null){
								this.detailData =res.data.result;
							}
						}
					}
				}).catch(ex=>{
					uni.hideLoading();
					this.$u.toast(ex.data.msg);
				})
			},
		}
	}
</script>

<style>
	@import url("logistics.css");
</style>
