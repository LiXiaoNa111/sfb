<template>
	<view class="message-f9">
		<view class="cu-timeline">
			<view class="cu-item text-green" v-for="(data,index) in crrDetailList" :key="index">
				<view class="cu-title">{{data.content}}</view>
				<view class="cu-sub-title" v-if="data.symptom!=null">诊&#8195;断:{{data.symptom}}</view>
				<view class="cu-date">{{data.createTime}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.title = option.name;
			this.id = option.id;
			uni.setNavigationBarTitle({
				title: this.title
			})
			this.getCrrDetail();
		},
		data() {
			return {
				title: '',
				id: '',
				crrDetailList: [],
			}
		},
		methods: {
			//获取就诊人进度
			getCrrDetail() {
				var me = this;
				this.$u.get(this.crrDetailUrl, {
					'patientId': this.id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						me.crrDetailList = res.data;
					}
				})
			},
		}
	}
</script>

<style>
	.message-f9 {
		background-color: #F9F9F9;
		padding: 14rpx;
	}

	.message-card {
		background-color: #FFFFFF;
		border-radius: 12rpx;
		padding: 24rpx;
	}

	.cu-title {
		font-size: 30rpx;
		color: #595757;
		font-weight: bold;
	}

	.cu-date {
		font-size: 24rpx;
		color: #C2C2C2;
		margin-top: 20rpx;
	}

	.cu-sub-title {
		font-size: 26rpx;
		color: #595757;
	}
</style>
