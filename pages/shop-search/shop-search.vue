<template>
	<view style="height: calc(100vh); display: flex; flex-direction: column; ">
		<myh5></myh5>

		<!-- #ifdef APP-PLUS -->
		<view class="status_bar">
			<!-- 自适应状态栏 这里是状态栏 -->
		</view>
		<!-- #endif -->

		<view class="row-top">
			<!-- #ifndef MP-WEIXIN -->
			<image @tap="goBack" class="img-back" src="../../static/image/nav_icon_back.png" mode="aspectFill"></image>
			<!-- #endif -->
			<view class="top-search">
				<image class="img-search" src="../../static/image/nav_button_search.png" mode="aspectFill"></image>
				<input class="txt-search" confirm-type="search" @confirm="searchData" type="text" placeholder="搜索" v-model="search"
				 @blur="searchBlur"></input>
				<image @tap="goCancel" style="width: 40rpx; height: 40rpx;" src="../../static/image/delete.png" mode="aspectFill"></image>
			</view>
			<view class="button-search" @tap="searchData">搜索</view>
		</view>

		<view style="flex:1;  overflow: scroll;">
			<view class="m-column m-view-padding" v-if="search==null">
				<view class="m-row-center">
					<view class="txt-30-57" style="flex: 1;">搜索记录</view>
					<image @tap="show2" style="width: 32rpx; height: 32rpx;" src="../../static/image/icon_jl_sc.png" mode="aspectFill"></image>
				</view>

				<!-- 存在搜索记录 -->
				<view class="flag" v-if="searchSecondList!=null">
					<view class="flag-item" v-if="searchSecondList!=null" v-for="(docLabel,i) in searchSecondList" :key="i" @tap="itemSearch(docLabel.item)">{{docLabel.item}}</view>
				</view>
				<!-- 无搜索记录 -->
				<view class="no-view" v-if="searchSecondList==null" style="height: 200rpx;">
					<image style="width: 84rpx; height: 86rpx;" src="../../static/image/img_zwssls.png" mode="aspectFill"></image>
					<view style="font-size: 26;font-weight: bold;">暂无搜索记录</view>
				</view>

				<view class="txt-30-57" style="flex: 1;margin-top: 30rpx;">热门搜索</view>
				<view class="m-row search-back-view" v-for="(data,index) in searchList" :key="index" @tap="itemSearch(data.content)">
					<tui-badge type="danger" translateX="40%" v-if="index==0 || index==1 || index==2">{{index+1}}</tui-badge>
					<view class="txt-26" v-if="index!=0 && index!=1 && index!=2">{{index+1}}</view>
					<view class="txt-28">{{data.content}}</view>
				</view>
			</view>

			<load-refresh v-if="search!=null && listData!=null" ref="loadRefresh" :isRefresh="true" :refreshTime="800"
			 :heightReduce="10" :pageNo="pageNum" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">

				<view slot="content-list">
					<view class="view-item" v-for="(data , index) in listData" :key="index" @tap="toDetail(data.id)">
						<image class="item-img" :src="data.img+'?x-oss-process=image/resize,l_150'" mode="aspectFill"></image>
						<view class="m-column" style="margin-left: 24rpx;width: 100%;">
							<view class="item-txt">{{data.name}}</view>
							<view class="item-txt-26-af"></view>
							<view class="m-row">
								<view class="item-txt-ec">¥{{data.price}}</view>
								<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_gwc.png" mode="aspectFill"></image>
							</view>
						</view>
					</view>
				</view>
			</load-refresh>

			<view v-if="search!=null && listData==null && isSearch" class="no-column">
				<image style="width: 84rpx; height: 86rpx;" src="../../static/image/img_xg.png" mode="aspectFill"></image>
				<view class="no-txt">无搜索到相关内容</view>
			</view>


		</view>
		<!-- 删除搜索记录提醒 -->
		<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定删除搜索记录吗？" color="#333" :size="32"></tui-modal>

	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad(option) {
			//0 1 2
			this.type = option.type;
			if (this.type == 1) { //按症搜索
				this.search = option.name;
				this.symptomId = option.id;
				this.getSymptomData();
			} else if (this.type == 2) { //其他分类搜索
				this.search = option.name;
				this.sortId = option.id;
				this.getSortData(option.id);
			}

			this.getSearchList();
			var sslist = uni.getStorageSync(this.SEARCHSECORD);
			if (this.$u.test.isEmpty(sslist)) {
				this.searchSecondList = null;
			} else {
				this.searchSecondList = sslist;
			}
		},
		data() {
			return {
				type: '',
				listData: null,
				searchList: null,
				searchSecondList: [], //搜索记录
				modal2: false,
				pageNum: 1,
				totalPage: '',
				search: null, //关键字搜索
				symptomId: '', //病症id
				sortId: '', //其他分类id
				isSearch: false, //标识当前搜索框有内容但是还没搜索的时候
			}
		},
		methods: {
			//上划加载更多
			loadMore() {
				this.pageNum += 1;
				if (this.type == 1) { //按症搜索
					this.moreSymptom();
				} else if (this.type == 2) { //其他分类搜索
					this.moreSort();
				} else if (this.type == 0) { //关键字搜索
					this.moreSearch();
				}
			},
			moreSymptom() {
				this.$u.get(this.goodsListUrl, {
					'symptomId': this.symptomId,
					'pageNum': this.pageNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						for (var i = 0; i < res.data.length; i++) {
							this.listData.push(res.data[i]);
						}
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			moreSort() {
				this.$u.get(this.goodsListUrl, {
					'sortId': this.sortId,
					'pageNum': this.pageNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						for (var i = 0; i < res.data.length; i++) {
							this.listData.push(res.data[i]);
						}
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			moreSearch() {
				this.$u.get(this.goodsListUrl, {
					'pageNum': this.pageNum,
					'keyword': this.search
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						for (var i = 0; i < res.data.length; i++) {
							this.listData.push(res.data[i]);
						}
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			// 下拉刷新数据列表
			refresh() {
				this.pageNum = 1;
				if (this.type == 1) { //按症搜索
					this.getSymptomData();
				} else if (this.type == 2) { //其他分类搜索
					this.getSortData();
				} else if (this.type == 0) { //关键字搜索
					this.getSearchData();
				}
			},
			show2() {
				this.modal2 = true;
			},
			hide2() {
				this.modal2 = false;
			},
			handleClick2(e) {
				let index = e.index;
				if (index === 0) {
					// this.$u.toast("取消");
				} else {
					uni.removeStorageSync(this.SEARCHSECORD);
					this.searchSecondList = null;
				}
				this.hide2();
			},
			//失去焦点监听
			searchBlur(e) {
				if (this.$u.test.isEmpty(e.detail.value)) {
					this.goCancel();
				}
			},
			itemSearch(a) {
				this.search = a;
				this.searchData();
			},
			//热门列表
			getSearchList() {
				this.$u.get(this.searchListUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.searchList = res.data;
					}
				})
			},
			toDetail(id) {
				uni.navigateTo({
					url: "../shop-details/shop-details?id=" + id
				})
			},
			goBack() {
				uni.navigateBack();
			},
			goCancel() {
				this.search = null;
				this.listData = null;
				this.isSearch = false;
				this.pageNum = 1;
			},
			searchData() {
				if (this.$u.test.isEmpty(this.search)) {
					this.$u.toast("请先输入要搜索的内容");
					return;
				}

				// 存储搜索的内容
				var sslist = {
					item: this.search
				}
				if (this.$u.test.isEmpty(this.searchSecondList)) {
					this.searchSecondList = [];
					this.searchSecondList.push(sslist);
					uni.setStorageSync(this.SEARCHSECORD, this.searchSecondList);
				}

				let num = 0;
				for (var i = 0; i < this.searchSecondList.length; i++) {
					if (!this.searchSecondList[i].item.includes(sslist.item)) {
						num++;
					}
				}
				if (num == this.searchSecondList.length) {
					this.searchSecondList.push(sslist);
					uni.setStorageSync(this.SEARCHSECORD, this.searchSecondList);
				}

				// 去搜索
				this.getSearchData();
			},
			//搜索关键字接口
			getSearchData() {
				this.isSearch = true;
				this.$u.get(this.goodsListUrl, {
					'keyword': this.search,
					'pageNum': this.pageNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.listData = res.data;
						console.log("关键字搜索")
						console.log(this.listData)
						this.totalPage = Number(res.msg);
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						console.log("无数据关键字搜索");
						this.listData = null;
					}
				})
			},
			//搜索病症接口
			getSymptomData() {
				this.isSearch = true;
				this.$u.get(this.goodsListUrl, {
					'symptomId': this.symptomId,
					'pageNum': this.pageNum
				}).then(res => {
					if (res.status == 0) {
						this.listData = res.data;
						console.log("搜索病症")
						console.log(this.listData)
						this.totalPage = Number(res.msg);
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						console.log("无数据搜索病症");
						this.listData = null;
					}
				})
			},
			//其他分类搜索
			getSortData() {
				this.isSearch = true;
				this.$u.get(this.goodsListUrl, {
					'sortId': this.sortId,
					'pageNum': this.pageNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.listData = res.data;
						console.log("其他分类搜索")
						console.log(this.listData)
						this.totalPage = Number(res.msg);
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						console.log("无数据其他分类");
						this.listData = null;
					}
				})
			}
		}
	}
</script>

<style>
	@import url("shop-search.css");
</style>
