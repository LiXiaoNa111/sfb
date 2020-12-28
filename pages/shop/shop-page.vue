<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<!-- 自适应状态栏 这里是状态栏 -->
		</view>
		<!-- #endif -->
		<myh5></myh5>
		
		<view class="back-column">
			<tui-tips ref="toast"></tui-tips>
			<view style="background-color: #FFFFFF; width: 100%; display: flex; flex-direction: column; align-items: center;">
				<view class="top-search" @tap="toSearch">
					<image style="width: 30rpx; height: 30rpx;flex-shrink: 0; color: #10BE62; margin-right: 12rpx;" src="../../static/image/nav_button_search.png"
					 mode="aspectFill"></image>
					<view v-if="searchList==null" style="font-size: 28rpx; color: #AFAFAF;">搜索</view>
					<wyb-noticeBar v-if=" searchList!=null " style=" margin-right: 12rpx; " color="#AFAFAF" bgColor="#FFFFFF"
					 height="65rpx" type="vert" :showIcon=false :text="searchList" />
				</view>
			</view>
			
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in sortList" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item.departmentName}}
				</view>
			</scroll-view>

			<view style="flex-grow: 1; overflow: scroll; height: 100%; width: 100%;">

				<!-- :heightReduce="570" -->
				<load-refresh v-if="goodsList!=null" ref="loadRefresh" :isRefresh="true" :refreshTime="800" :backgroundCover="'#f9f9f9'"
				 :pageNo="pageNum" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">

					<view slot="content-list">
						<view class="tui-product-category">
							<view class="tui-category-item" v-for="(item,index) in typeList" :key="index" :data-key="item.name" @tap="toList(item.sortType,item.id,item.name)">
								<image :src="item.img" class="tui-category-img" mode="scaleToFill"></image>
								<view class="tui-category-name">{{ item.name }}</view>
							</view>
						</view>

						<view v-show="false" class="m-row-center" style="margin-top: 30rpx;">
							<image style="width: 140rpx; height: 17rpx;" src="../../static/image/img_zsz.png" mode="aspectFill"></image>
							<view style="margin-left: 12rpx; margin-right: 12rpx;">商品推荐</view>
							<image style="width: 140rpx; height: 17rpx;" src="../../static/image/img_zsy.png" mode="aspectFill"></image>
						</view>

						<view class="tui-product-category" style="background-color: #F9F9F9; ">
							<view class="tui-category-item-good" v-for="(good , goodIndex) in goodsList" :key="goodIndex" @tap="toGoodDetail(good.id)">
								<image mode="aspectFill" style=" border-radius:7rpx; height: 300rpx;" :src="good.img+'?x-oss-process=image/resize,l_200'"></image>
								<view class="good-column-padding">
									<view class="godd-name">{{good.name}}</view>
									<view class="good-subtitle">{{good.subTitle}}</view>
									<view class="row-price">
										<view class="good-price">￥{{good.price}}</view>
										<tui-icon name="more-fill" :size="10"></tui-icon>
									</view>
								</view>
							</view>
						</view>

					</view>
				</load-refresh>

				<view v-if="goodsList==null" class="div-no">
					<view class="tui-product-category">
						<view class="tui-category-item" v-for="(item,index) in typeList" :key="index" :data-key="item.name" @tap="toList(item.sortType,item.id,item.name)">
							<image :src="item.img" class="tui-category-img" mode="scaleToFill"></image>
							<view class="tui-category-name">{{ item.name }}</view>
						</view>
					</view>
					<view class="view-grow-no">
						<image class="img-150" src="../../static/image/img_zwsp.png" mode="aspectFill"></image>
						<view class="txt-no">暂无相关商品</view>
					</view>
				</view>
			</view>
		</view>
		<view class="shop-cart-view" @tap="toShop">
			<image class="shop-cart-img" src="http://www.hzsysf.com/sfb/image/456711.gif" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	import wybNoticeBar from '@/components/wyb-noticeBar/wyb-noticeBar.vue';
	export default {
		components: {
			wybNoticeBar,
			myh5
		},
		onLoad() {
			let sort = uni.getStorageSync(this.SORTLIST);
			if (!this.$u.test.isEmpty(sort)) {
				this.sortList = sort;
			}
			let type = uni.getStorageSync(this.TYPELIST);
			if (!this.$u.test.isEmpty(type)) {
				this.typeList = type;
			}
			let good = uni.getStorageSync(this.GOODSLIST);
			if (!this.$u.test.isEmpty(good)) {
				this.goodsList = good;
			}
			this.getLoad();
			var me = this;
			//监听网络状态变化
			uni.getNetworkType({
				success: function(res) {
					console.log("网络状态监测111111");
					console.log(res.networkType);
					if (res.networkType == 'none') {
						console.log('无网络');
						me.showTop(1);
					}
				}
			});
		},
		data() {
			return {
				sortList: [],
				sortId: '', //当前科室id
				goodsList: '',
				typeList: [],
				TabCur: 0,
				scrollLeft: 0,
				pageNum: 1, // 页码, 默认从1开始
				totalPage: 0, //模拟总页数
				basicData: [{
					type: "green",
					msg: "网络恢复连接~"
				}, {
					type: "danger",
					msg: "网络无连接~"
				}],
				searchList: [],
			}
		},
		onShow() {
			var me = this;
			//监听网络状态发生改变的时候
			uni.onNetworkStatusChange(function(res) {
				console.log("网络状态监测222222");
				console.log(res.isConnected); //当前是否有网络连接
				console.log(res.networkType); //网络类型
				if (res.isConnected) {
					me.showTop(0);
					me.getLoad();
				} else {
					me.showTop(1);
				}
			});
		},
		methods: {
			getLoad() {
				this.getSortList();
				this.getGoodsList();
				this.getlist();
				this.getSearchList();
			},
			//进入购物车
			toShop() {
				uni.navigateTo({
					url: "../shop-cart/shop-cart",
					// url: "../clinic-doctor/clinic-doctor"
				})
			},
			//热门列表
			getSearchList() {
				this.searchList = [];
				var that = this;
				this.$u.get(this.searchListUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						for (var i = 0; i < res.data.length; i++) {
							that.searchList.push(res.data[i].content);
						}
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						this.searchList = null;
					}
				})
			},
			showTop(index) {
				console.log("打印index");
				let options = {
					msg: this.basicData[index].msg,
					duration: this.basicData[index].duration || 2000,
					type: this.basicData[index].type
				};
				console.log(index);
				this.$refs.toast.showTips(options);
			},
			toSearch() {
				uni.navigateTo({
					url: "../shop-search/shop-search?type=0"
				})
			},
			toList(sortType, id, name) {
				if (sortType == 1) { //按症找药
					uni.navigateTo({
						url: "../shop-list/shop-list"
					})
				} else {
					uni.navigateTo({
						url: "../shop-search/shop-search?type=2&id=" + id + "&name=" + name
					})
				}
			},
			getlist() {
				this.$u.get(this.goodsSortUrl).then(res => {
					if(res.status==0){
						console.log("图文");
						console.log(res.data);
						this.typeList = res.data;
						uni.setStorageSync(this.TYPELIST, this.typeList);
					}
				})
			},
			getSortList() {
				this.$u.get(this.departmentSortListUrl).then(res => {
					this.sortList=[];
					var so=[{
						"departmentName": "全部",
						"id":""
					}]
					this.sortList = so.concat(res.data);
					uni.setStorageSync(this.SORTLIST, this.sortList);
				})
			},
			// 上划加载更多
			loadMore() {
				this.pageNum += 1;
				this.$u.get(this.goodsListUrl, {
					'pageNum': this.pageNum,
					'departmentId': this.sortId
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						for (var i = 0; i < res.data.length; i++) {
							this.goodsList.push(res.data[i]);
						}
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			// 下拉刷新数据列表
			refresh() {
				this.pageNum = 1;
				this.getGoodsList();
			},
			getGoodsList() {
				this.$u.get(this.goodsListUrl, {
					'pageNum': this.pageNum,
					'departmentId': this.sortId
				}).then(res => {
					this.goodsList = res.data;
					uni.setStorageSync(this.GOODSLIST, this.goodsList);
					this.totalPage = Number(res.msg);
					console.log(res.data);
				}).catch(ex => {
					if (ex.data.status == 4) {
						this.goodsList = null;
						this.totalPage = 0;
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.sortId = this.sortList[this.TabCur].id;
				this.pageNum = 1;
				this.getGoodsList();
			},
			toGoodDetail(id) {
				uni.navigateTo({
					url: "../shop-details/shop-details?id=" + id
				})
			}
		}
	}
</script>

<style>
	@import url("shop-page.css");
</style>
