<template>
	<view>
		<rich-text style="padding: 24rpx;" :nodes="data.detail"></rich-text>
		<view  v-if="data.goods!=null" class="m-row-center" style="margin-top: 30rpx;">
			<image style="width: 140rpx; height: 17rpx;" src="../../static/image/img_zsz.png" mode="aspectFill"></image>
			<view style="margin-left: 12rpx; margin-right: 12rpx;">商品推荐</view>
			<image style="width: 140rpx; height: 17rpx;" src="../../static/image/img_zsy.png" mode="aspectFill"></image>
		</view>

		<tui-grid v-if="data.goods!=null" :unlined="true">
			<block v-for="(good , goodIndex) in data.goods" :key="goodIndex">
				<tui-grid-item :bottom="false" :hover="false" :cell="2" @tap="toShopDetail(good.id)">
					<view class="good-column">
						<image mode="aspectFill" style=" border-radius:7rpx; height: 300rpx;" :src="good.img"></image>
						<view class="good-column-padding">
							<view class="godd-name">{{good.name}}</view>
							<view class="good-subtitle">{{good.subTitle}}</view>
							<view class="row-price">
								<view class="good-price">￥{{good.price}}</view>
								<tui-icon name="more-fill" :size="10"></tui-icon>
							</view>
						</view>
					</view>
				</tui-grid-item>
			</block>
		</tui-grid>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.id = option.id;
			this.getDetails();
		},
		data() {
			return {
				id: '',
				data: ''
			}
		},
		methods: {
			//商品的点击事件
			toShopDetail(id) {
				uni.navigateTo({
					url: "../shop-details/shop-details?id=" + id
				})
			},
			getDetails() {
				this.$u.get(this.newsDetailUrl, {
					id: this.id
				}).then(res => {
					console.log("虎丘到详情");
					console.log(res)
					if (res.status == 0) {
						this.data = res.data;
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF
	}

	.good-column-padding {
		padding: 24rpx;
	}

	.good-column {
		width: 100%;
		height: auto;
		justify-content: flex-start;
		border: #f9f9f9 1rpx solid;
		border-radius: 10rpx;
	}

	.godd-name {
		color: #595757;
		font-size: 32rpx;
		/* height: 40rpx; */
		overflow: hidden;
		/* background-color: #0062CC; */
		text-overflow: ellipsis;
		display: -webkit-box; //作为弹性伸缩盒子模型显示。
		-webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
		-webkit-line-clamp: 1;
	}

	.good-subtitle {
		font-size: 26rpx;
		color: #AFAFAF;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box; //作为弹性伸缩盒子模型显示。
		-webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
		-webkit-line-clamp: 1;
		/* height: 40rpx; */
		margin-top: 24rpx;
	}

	.row-price {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
		align-items: center;
	}

	.good-price {
		flex-grow: 1;
		color: #ec5353;
		font-size: 34rpx;
		font-weight: bold;
	}
</style>
