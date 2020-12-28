<template>
	<view>
		<myh5></myh5>
		<view class="column">

			<view class="line"></view>
			<view style="flex: 1;overflow: scroll;">
				<view v-if="addressList!=null" class="item-column" v-for="(data,index) in addressList" :key="index">
					<view class="item-row">
						<view class="message">{{data.receiver}}&emsp;{{data.phone}}</view>
						<view class="init-address" v-if="index==0">默认</view>
						<view class="delete" @tap="showRemind(data.id)">删除</view>
						<view class="h-line"></view>
						<view class="update" @tap="updateAddress(data,index)">编辑</view>
					</view>
					<view class="">{{data.province}}{{data.city}}{{data.area}}{{data.detail}}</view>
					<view class="padding-line"></view>
				</view>
				<!-- 暂无收货地址占位 -->
				<view v-if="addressList==null" class="no-column">
					<image class="no-img" src="../../static/image/img_zwshddz.png" mode="aspectFill"></image>
					<view>暂无收货地址</view>
				</view>
			</view>
			<view class="button" @tap="goAddress">
				<tui-icon :size="28" name="add" color="#fff"></tui-icon>
				<view class="add-txt">添加地址</view>
			</view>
			<tui-modal :show="modal" @click="handleClick" @cancel="hideRemind" content="确定删除该收货人吗?" color="#333" :size="32"></tui-modal>
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
			this.getAddressList();
			uni.$on(this.UPDATEADDRESS, data => {
				this.getAddressList();
			});
			uni.$on(this.UPDATEADDRESSLIST, data => {
				this.getAddressList();
			});
		},
		onUnload() {
			uni.$off(this.UPDATEADDRESS);
			uni.$off(this.UPDATEADDRESSLIST);
		},
		data() {
			return {
				addressList: '',
				modal: false,
				id: 0,
			}
		},
		methods: {
			//编辑
			updateAddress(data, index) {
				uni.navigateTo({
					url: "../../ApagesA/address-add/address-add?type=2&index=" + index + "&data=" + encodeURIComponent(JSON.stringify(data))
				})
			},
			handleClick(e) {
				let index = e.index;
				if (index === 0) {
					// this.$u.toast('你点击了取消按钮');
				} else {
					// this.$u.toast('你点击了确定按钮');
					this.removeAddress();
				}
				this.hideRemind();
			},
			showRemind(id) {
				this.id = id;
				this.modal = true;
			},
			hideRemind() {
				this.modal = false;
			},
			removeAddress() {
				this.$u.get(this.addressUpdateUrl, {
					'id': this.id,
					'state': 1
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.getAddressList();
					}
				})
			},
			getAddressList() {
				this.$u.get(this.addressListUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.addressList = res.data;
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						this.addressList = null;
					}
				})
			},
			goAddress() {
				uni.navigateTo({
					url: "../../ApagesA/address-add/address-add?type=1"
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
	}

	.line {
		background-color: #F9F9F9;
		height: 2rpx;
		width: 100%;
	}

	.item-column {
		margin-left: 24rpx;
		margin-right: 24rpx;
		display: flex;
		flex-direction: column;
		margin-top: 50rpx;
		width: 700rpx;
	}

	.item-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 17rpx;
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
		font-weight: bold;
		flex-grow: 1;
	}

	.delete {
		font-size: 30rpx;
		color: #AFAFAF;
	}

	.update {

		font-size: 30rpx;
		color: #10BE62;
	}

	.init-address {
		font-size: 24rpx;
		color: #db7820;
		background-color: #FBF1E8;
		padding-top: 5rpx;
		padding-bottom: 5rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		border-radius: 4rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
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
