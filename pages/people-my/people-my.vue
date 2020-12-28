<template>
	<view>
		<myh5></myh5>
		<view class="column">
			<view class="line"></view>
			<view style="flex: 1;overflow: scroll;width: 100%;">

				<view v-if="peopleList!=null" v-for="(data,index) in peopleList" :key="index">
					<view class="item-row">
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
						<view class="init-address" v-if="index==0">默认</view>
					</view>
				</view>
				<!-- 暂无就诊人占位 -->
				<view v-if="peopleList==null" class="no-column">
					<image class="no-img" src="../../static/image/img_zwjzr.png" mode="aspectFill"></image>
					<view>暂无就诊人</view>
				</view>
			</view>
			<view class="button" @tap="goAddress">
				<tui-icon :size="28" name="add" color="#fff"></tui-icon>
				<view class="add-txt">添加就诊人</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad() {
			this.getPeopleList();
			uni.$on(this.ADDPEOPLE, data => {
				this.getPeopleList();
			})
		},
		onUnload() {
			uni.$off(this.ADDPEOPLE);
		},
		data() {
			return {
				peopleList: '',
				id: 0,
			}
		},
		methods: {
			getPeopleList() {
				this.$u.get(this.patientListUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.peopleList = res.data;
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						this.peopleList = null;
					}
				})
			},
			goAddress() {
				uni.navigateTo({
					url: "../../ApagesA/authentication/authentication?type=3"
				})
			}
		}
	}
</script>

<style>
	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #FFFFFF;
		height: calc(100vh);
		width: 100%;
	}

	.line {
		background-color: #F9F9F9;
		height: 2rpx;
		width: 100%;
	}

	.item-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 12rpx;
		padding-right: 12rpx;
		width: 100%;
		height: 140rpx;
		border-bottom: #F9F9F9 1rpx solid;
	}

	.h-line {
		width: 2rpx;
		height: 16rpx;
		background-color: #AFAFAF;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}

	.padding-line {
		background-color: #F9F9F9;
		height: 2rpx;
		width: 100%;
		margin-top: 50rpx;
	}

	.message {
		font-size: 30rpx;
		color: #595757;
		font-weight: bold
	}

	.delete {
		font-size: 30rpx;
		color: #AFAFAF;
		flex-grow: 1;
		flex-shrink: 0;
		text-align: end;
	}

	.update {
		flex-shrink: 0;
		font-size: 30rpx;
		color: #10BE62;
	}

	.txt-name {
		font-weight: bold;
		font-size: 30rpx;
		color: #595757;
		margin-left: 24rpx;
		flex-shrink: 0;
		margin-right: 6rpx;
	}

	.init-address {
		font-size: 24rpx;
		color: #db7820;
		flex-shrink: 0;
		background-color: #FBF1E8;
		padding-top: 5rpx;
		padding-bottom: 5rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		border-radius: 4rpx;
		margin-left: 24rpx;
	}

	.txt-content {
		font-size: 26rpx;
		color: #595757;
		margin-left: 12rpx;
	}

	.title-view {
		display: flex;
		flex-direction: row;
		background-color: #F9F9F9;
		border-radius: 50rpx;
		padding-left: 22rpx;
		padding-right: 22rpx;
		padding-top: 8rpx;
		padding-bottom: 8rpx;
		align-items: center;
		justify-content: center;
		margin-left: 24rpx;
	}

	.button {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: #10BE62;
		border-radius: 50rpx;
		width: 700rpx;
		text-align: center;
		height: 100rpx;
		margin-bottom: 50rpx;
	}

	.add-txt {
		font-size: 34rpx;
		color: #FFFFFF;
		margin-left: 14rpx;
	}
</style>
