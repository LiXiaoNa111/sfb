<template>
	<view>
		<myh5></myh5>
		<view style="height: calc(100vh - 75rpx);display: flex;flex-direction: column;padding: 24rpx;">
			<view style="flex: 1;overflow: scroll;">
				<view v-if="addressList!=null" class="column" v-for="(data,index) in addressList" :key="index">
					<view class="row" @tap="selectUser(data)">
						<image style="width: 34rpx; height: 34rpx;" :src="selData.id==data.id?'../../static/image/icon_sel.png':'../../static/image/icon_nor.png'"
						 mode="aspectFill"></image>
						<view class="txt-name">{{data.receiver}}&emsp;{{data.phone}}</view>
					</view>
					<view class="txt-content">{{data.province}}{{data.city}}{{data.area}}{{data.detail}}</view>
					<view class="view-line"></view>
				</view>
				<!-- 暂无收货地址占位 -->
				<view v-if="addressList==null" class="no-view" style="margin-top: 200rpx;">
					<image class="no-img" src="../../static/image/img_zwshddz.png" mode="aspectFill"></image>
					<view class="no-txt">暂无收货地址,请先添加</view>
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
		onLoad(option) {
			this.getAddressList();
			this.type = option.type;
			//接收传参过长
			this.selData = JSON.parse(decodeURIComponent(option.addressData));
		},
		data() {
			return {
				type: 1,
				addressList: null,
				selData: '',
			}
		},
		methods: {
			selectUser(data) {
				this.selData = data;
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
			clean() {
				if (this.$u.test.isEmpty(this.selData)) {
					this.$u.toast("请先选择收货地址");
					return;
				}
				if (this.type == 1) {
					uni.$emit(this.UPDATEUSERADDRESS, this.selData);
					uni.navigateBack();
				} else if (this.type == 2) {
					uni.$emit(this.UPADDRESS, this.selData);
					uni.navigateBack();
				} else if (this.type == 3) { //购物车提交订单更换收货人
					uni.$emit(this.UPCARTADDRESS, this.selData);
					uni.navigateBack();
				} else if (this.type == 4) { //订单列表 订单详情 修改收货人
					uni.$emit(this.INFORMGOODSLISTADRESS, this.selData.id);
					uni.navigateBack();
				}
			}
		}
	}
</script>

<style>
	@import url("need-update-address.css");
</style>
