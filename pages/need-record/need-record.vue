<template>
	<view >
		<myh5></myh5>
		<view class="f6f6f6">
			<!-- 
			0需求单未处理  
			1需求单已处理  
			2自有 处方单需求单(未处理) 
			3自有处方单需求单(核方通过) 
			4自有处方单需求单(核方未通过，订 单已退款) 
			
			caseState 0可用
			1已过期
			2已下单
		-->
			<load-refresh style="width: 100%;" v-if="listData!=null" ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="10"
			 :backgroundCover="'#f9f9f9'" :pageNo="pageNum" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
				<!-- uni.navigateTo({
						url: "../order-details/order-details?id=" + data.orderId
					}) -->
				<view slot="content-list">
					<view class="card" v-for="(data,index) in listData" :key="index">
						<view class="row" style="align-items: center;margin-bottom: 50rpx;flex-wrap: wrap;">
							<view class="title" style="flex-grow: 1; flex-shrink: 0;">{{data.stateDesc}}</view>
							<view class="state-green" v-if="data.state==2">正在审核处方笺</view>
							<view class="state-red" v-if="data.state==4">处方笺无效/购买药品不符</view>
							<view class="state-orange" v-if="data.state==3">处方笺审核通过</view>
						</view>
						<view class="row" v-if="data.patient!=null">
							<view class="txt-name">{{data.patient.name}}</view>
							<view class="title-view">
								<image style="width: 23rpx; height: 27rpx;" :src="data.patient.sex==1?'../../static/image/icon_nan.png':'../../static/image/icon_nv.png'"
								 mode="aspectFill"></image>
								<view class="txt-content" v-if="data.patient.sex==1">男</view>
								<view class="txt-content" v-if="data.patient.sex==2">女</view>
							</view>
							<view class="title-view">
								<image style="width: 28rpx; height: 23rpx;" src="../../static/image/icon_nl.png" mode="aspectFill"></image>
								<view class="txt-content">{{data.patient.age}}</view>
							</view>
						</view>
						<!-- 文字 -->
						<view class="row" style="margin-top: 24rpx;margin-bottom: 60rpx;" v-if="data.state==0 || data.state==1">
							<view class="init-address">症状</view>
							<view class="txt-system">{{data.symptom}}</view>
						</view>
						<!-- 图片 -->
						<image v-if="data.state==2 || data.state==3 || data.state==4" style="width: 600rpx; height: 300rpx; margin-top: 24rpx; margin-bottom: 24rpx; align-self: center; border-radius: 12rpx;"
						 :src="data.caseImg" mode="aspectFill" @tap="toBagImg(data.caseImg)"></image>

						<view v-if="data.state==0 || data.state==1" class="dash-line"></view>
						<view class="row" style="margin-top: 24rpx;align-items: center;">
							<view class="txt-time">{{data.createTime}}</view>
							<!--  v-if="data.state==0" -->
							<!-- <view v-if="data.state==1 && data.orderNo!=null " class="txt-detail" @tap="toDetail(data.caseId)">查看详情</view>
						<view v-if="data.state==1 && data.caseId!=null && data.orderNo==null" class="txt-detail-1" style="margin-left: 12rpx;" @tap="toPay(data.caseId)">去下单</view>
					 -->
							<view v-if="data.state==1 && data.caseState==2" class="txt-detail" @tap="toDetail(data.orderId)">查看详情</view>
							<view v-if="data.state==1 && data.caseState==0" class="txt-detail-1" style="margin-left: 12rpx;" @tap="toPay(data.caseId)">去下单</view>
							<view class="txt-detail" v-if="data.state==1 && data.caseState==1">已过期</view>

						</view>
					</view>
				</view>
			</load-refresh>

			<view class="no-column" v-if="listData==null">
				<image class="no-img" src="../../static/image/img_zwxqdjl.png" mode="aspectFill"></image>
				<view>暂无需求单记录</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	import loadRefresh from '@/components/load-refresh/load-refresh.vue'
	export default {
		components: {
			myh5,
			loadRefresh
		},
		onLoad() {
			this.getListData();
		},
		data() {
			return {
				listData: '',
				pageNum: 1, // 页码, 默认从1开始
				totalPage: 0, //模拟总页数
			}
		},
		methods: {
			//详情
			toDetail(caseId) {
				uni.navigateTo({
					url: "../order-details/order-details?id=" + caseId
				})
			},
			//去下单
			toPay(id) {
				uni.navigateTo({
					url: "../prescription-submit-cen/prescription-submit-cen?caseId=" + id
				})
			},
			// 上划加载更多
			loadMore() {
				this.pageNum += 1;
				this.$u.get(this.needSubmitListUrl, {
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
			// 下拉刷新数据列表
			refresh() {
				this.pageNum = 1;
				this.getListData();
			},
			getListData() {
				this.$u.get(this.needSubmitListUrl, {
					'pageNum': this.pageNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.listData = res.data;
						this.totalPage = Number(res.msg);
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						this.listData = null;
					}
				})
			},
			//图片点击放大图
			toBagImg(imageUrl) {
				var arr = [];
				arr[0] = imageUrl;
				uni.previewImage({
					urls: arr,
					current: 0,
				});
			},
		}
	}
</script>

<style>
	@import url("need-record.css");
</style>
