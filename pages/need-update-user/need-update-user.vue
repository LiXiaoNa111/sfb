<template>
	<view>
		<myh5></myh5>
		<view style="height: calc(100vh - 75rpx);display: flex;flex-direction: column;padding: 24rpx;">
			<view style="flex: 1;overflow: scroll;">
				<view class="column" v-for="(data,index) in list" :key="index">
					<view class="row" @tap="selectUser(data)">
						<image v-if="type!=4" style="width: 34rpx; height: 34rpx;" :src="selData.id==data.id?'../../static/image/icon_sel.png':'../../static/image/icon_nor.png'"
						 mode="aspectFill"></image>
						<image v-if="type==4" style="width: 34rpx; height: 34rpx;" :src="patientId==data.id?'../../static/image/icon_sel.png':'../../static/image/icon_nor.png'"
						 mode="aspectFill"></image>
						<view class="txt-name">{{data.name}}</view>
						<view class="title-view">
							<image style="width: 23rpx; height: 27rpx;" :src="data.sex==1?'../../static/image/icon_nan.png':'../../static/image/icon_nv.png'"
							 mode="aspectFill"></image>
							<view class="txt-content" v-if="data.sex==1">男</view>
							<view class="txt-content" v-if="data.sex==2">女</view>
						</view>
						<view class="title-view">
							<image style="width: 28rpx; height: 23rpx;" src="../../static/image/icon_nl.png" mode="aspectFill"></image>
							<view class="txt-content">{{data.age}}</view>
						</view>
					</view>
					<view class="view-line"></view>
				</view>
			</view>
			<view class="button" @tap="clean">确定</view>

		</view>
	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad: function(option) {
			this.getList();
			this.type = option.type;
			if (this.type == 4) {
				this.patientId = option.patientId;
			} else {
				//接收传参过长
				this.selData = JSON.parse(decodeURIComponent(option.userData));
			}

			console.log("接收参数");
			console.log(this.type);
			console.log(this.selData);
			console.log(this.patientId);
		},
		data() {
			return {
				type: '',
				list: '',
				selData: '',
				patientId: '', //就诊人id
			}
		},
		methods: {
			selectUser(data) {
				if (this.type == 4) {
					this.patientId = data.id;
				} else {
					this.selData = data;
				}
			},
			getList() {
				this.$u.get(this.patientListUrl, {}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.list = res.data;
					}
				})
			},
			clean() {
				if (this.type == 1) { //提交需求单症状
					uni.$emit(this.UPDATEUSER, this.selData);
					uni.navigateBack();
				} else if (this.type == 2) { //我的处方-提交订单-就诊人选择
					uni.$emit(this.PRESCRIPTIONPATIENT, this.selData);
					uni.navigateBack();
				} else if (this.type == 3) { //上传处方
					uni.$emit(this.UPPATIENT, this.selData);
					uni.navigateBack();
				} else if (this.type == 4) { //我的挂号-挂号结果-更换就诊人
					console.log("要通知的就诊人");
					console.log(this.patientId);
					uni.$emit(this.UPRESULTPATIENT, this.patientId);
					uni.navigateBack();
				}
			}
		}
	}
</script>

<style>
	@import url("need-update-user.css");
</style>
