<template>
	<view class="container">
		<view class="tui-searchbox">

			<view class="tui-search-input" @tap="toSearch">
				<icon type="search" :size="13" color="#999"></icon>
				<text class="tui-search-text">搜索商品</text>
			</view>
		</view>

		<scroll-view scroll-y scroll-with-animation class="tab-view" :scroll-into-view="scrollViewId" 
		:style="{ height: height + 'px', top: top + 'px' }">
			<view :id="`id_${index}`" v-for="(item, index) in tabbar" 
			:key="index" class="tab-bar-item" :class="[currentTab == index ? 'active' : '']"
			 :data-current="index" @tap.stop="swichNav">
				<text>{{ item.name }}</text>
			</view>
		</scroll-view>
		
		<block v-for="(item, index) in tabbar" :key="index">
			<scroll-view scroll-y class="right-box" :style="{ height: height + 'px', top: top + 'px' }" 
			v-if="currentTab == index">
				<!--内容部分 start 自定义可删除-->
				<view class="page-view class-box">

					<view class="class-item" v-for="( symptomSortData, symptomSortIndex) in item.symptomSorts" :key="symptomSortIndex">
						<view class="class-name">{{symptomSortData.name}}</view>
						<view class="g-container">
							<view class="g-box" @tap.stop="productList" 
							 v-for="( symptomSortItemData, symptomSortItemIndex) in symptomSortData.symptomSorts" :key="symptomSortItemIndex"
							 @tap="toSymptomDetail(symptomSortItemData.id,symptomSortItemData.name)">
								<image style="width: 110rpx; height: 75rpx;" src="../../static/image/logo.png" mode="aspectFill" />
								<view class="g-title">{{symptomSortItemData.name}}</view>
							</view>
						</view>
					</view>

				</view>
				<!--内容部分 end 自定义可删除-->
			</scroll-view>
		</block>
	</view>

</template>

<script>
	import tLinkage from '@/components/views/t-linkage/t-linkage';
	export default {
		components: {
			tLinkage
		},
		data() {
			return {
				tabbar: [],
				height: 0, //scroll-view高度
				top: 0,
				currentTab: 0, //预设当前项的值
				scrollViewId: "id_0"
			};
		},
		onLoad: function(options) {
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						let header = 92;
						let top = 0;
						//#ifdef H5
						top = 44;
						//#endif
						this.height = res.windowHeight - uni.upx2px(header);
						this.top = top + uni.upx2px(header);
					}
				});
			}, 50);
			this.getSymptomData();
		},
		methods: {
			getSymptomData() {
				this.$u.get(this.symptomListUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.tabbar=res.data;
					}
				})
			},
			// 点击标题切换当前页时改变样式
			swichNav: function(e) {
				let cur = e.currentTarget.dataset.current;
				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur;
					this.checkCor();
				}
			},
			//判断当前滚动超过一屏时，设置tab标题滚动条。
			checkCor: function() {
				if (this.currentTab > 6) {
					this.scrollViewId = `id_${this.currentTab - 2}`;
				} else {
					this.scrollViewId = `id_0`;
				}
			},
			detail(e) {
				uni.navigateTo({
					url: '../productDetail/productDetail'
				});
			},
			productList(e) {
				let key = e.currentTarget.dataset.key;
				uni.navigateTo({
					url: '../productList/productList?searchKey=' + key
				});
			},
			toSearch(){
				uni.navigateTo({
					url: "../shop-search/shop-search?type=0"
				})
			},
			toSymptomDetail(id,name){
				uni.navigateTo({
					url:"../shop-search/shop-search?type=1&id="+id+"&name="+name
				})
			},
		}
	};
</script>

<style>
	page {
		background-color: #fcfcfc;
	}

	/* 左侧导航布局 start*/

	.tui-searchbox {
		width: 100%;
		height: 92rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 100;
	}

	.tui-searchbox::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #d2d2d2;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tui-search-input {
		width: 100%;
		height: 60rpx;
		background: #f1f1f1;
		border-radius: 30rpx;
		font-size: 26rpx;
		color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-search-text {
		padding-left: 16rpx;
	}

	.tab-view {
		/* height: 100%; */
		width: 200rpx;
		position: fixed;
		left: 0;
		z-index: 10;
	}

	.tab-bar-item {
		width: 200rpx;
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
	}

	.active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fcfcfc;
	}

	.active::before {
		content: '';
		position: absolute;
		border-left: 8rpx solid #e41f19;
		height: 30rpx;
		left: 0;
	}

	/* 左侧导航布局 end*/

	.right-box {
		width: 100%;
		position: fixed;
		padding-left: 220rpx;
		box-sizing: border-box;
		left: 0;
	}

	.page-view {
		width: 100%;
		overflow: hidden;
		padding-top: 20rpx;
		padding-right: 20rpx;
		box-sizing: border-box;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.class-item {
		background: #fff;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		margin-bottom: 20rpx;
		border-radius: 12rpx;
	}

	.class-name {
		font-size: 26rpx;
		font-weight: bold;
	}

	.g-container {
		/* padding-top: 20rpx; */
		display: flex;
		display: -webkit-flex;
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.g-box {
		width: 33.3333%;
		text-align: center;
		padding-top: 40rpx;
	}

	.g-image {
		width: 120rpx;
		height: 120rpx;
	}

	.g-title {
		font-size: 22rpx;
	}
</style>
