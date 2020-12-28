<!-- 我的-我的挂号 -->
<template>
	<view>
		<myh5></myh5>
		<view class="f2f2f2">
			<load-refresh v-if="detailList!=null" ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="10"
			 :backgroundCover="'#f9f9f9'" :pageNo="pageNum" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
				<view slot="content-list" style="display: flex; flex-direction: column;	align-items: center;">
					<view v-for="(data,index) in detailList" :key="index" @tap="toResult(data)">
						<view class="txt-time">{{data.createTime}}</view>
						<view class="card-bottom">
							<view class="card-row">
								<image style="width: 40rpx; height: 40rpx;" src="../../static/image/list_icon_gd_63.png" mode="aspectFill"></image>
								<view class="top-gh">挂单号</view>
								<!-- -1 未付款 0可用 1已退款 2不可用，已用，已过期 -->
								<image v-if="data.state==-1" style="width: 110rpx; height: 110rpx;" src="../../static/image/icon_wfk.png" mode="aspectFill"></image>
								<image v-if="data.state==0" style="width: 110rpx; height: 110rpx;" src="../../static/image/icon_ky.png" mode="aspectFill"></image>
								<image v-if="data.state==1" style="width: 110rpx; height: 110rpx;" src="../../static/image/icon_ytk.png" mode="aspectFill"></image>
								<image v-if="data.state==2" style="width: 110rpx; height: 110rpx;" src="../../static/image/icon_ygq.png" mode="aspectFill"></image>
							</view>
							<view class="top-number">+{{data.num}}号</view>
							<view class="row">
								<view class="view-left"></view>
								<view class="view-dash"></view>
								<view class="view-right"></view>
							</view>
							<view class="column">
								<view class="bottom-title" style="font-weight: bold;">【医生】:{{data.docName}}</view>
								<view class="bottom-dash"></view>
								<view class="bottom-title">【就诊人】: {{data.patientName}}</view>
								<view class="bottom-dash"></view>
								<view class="bottom-title">【就诊时间】: {{data.scheduleTime}}</view>
								<view class="bottom-dash"></view>
								<view class="bottom-title">【就诊医馆】: {{data.clinicName}}</view>
								<view class="bottom-dash"></view>
								<view class="bottom-title">【就诊地点】: {{data.clinicAddr}}</view>
							</view>
						</view>
						<view v-if="index==(detailList.length-1)" style="height: 50rpx;"></view>
					</view>
				</view>
			</load-refresh>

			<view v-if="detailList==null" class="no-column">
				<image style="width: 110rpx; height: 110rpx;" src="../../static/image/img_zwgh.png" mode="aspectFill"></image>
				<view>暂无挂号记录</view>
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
			this.getData();
			uni.$on(this.UPRESULTPATIENTT, data => {
				console.log("接收更换列表通知")
				this.getData();
			});
			uni.$on(this.INFORMREGISTRATION, data => {
				this.getData();
			})
		},
		onUnload() {
			// 移除监听事件  
			uni.$off(this.UPRESULTPATIENTT);
			uni.$off(this.INFORMREGISTRATION);
		},
		data() {
			return {
				detailList: '',
				pageNum: 1, // 页码, 默认从1开始
				totalPage: 0, //模拟总页数
			}
		},
		methods: {
			toResult(data) {
				if (data.state == 0) {
					uni.navigateTo({
						url: "../registration-result/registration-result?id=" + data.id + "&type=1"
					})
				}
			},
			// 上划加载更多
			loadMore() {
				this.pageNum += 1;
				this.$u.get(this.listRegistrationUrl, {
					'pageNum': this.pageNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						for (var i = 0; i < res.data.length; i++) {
							this.detailList.push(res.data[i]);
						}
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			// 下拉刷新数据列表
			refresh() {
				this.pageNum = 1;
				this.getData();
			},
			getData() {
				uni.showLoading();
				this.$u.get(this.listRegistrationUrl, {
					'pageNum': this.pageNum
				}).then(res => {
					console.log(res)
					uni.hideLoading();
					if (res.status == 0) {
						this.detailList = res.data;
						this.totalPage = Number(res.msg);
					}
				}).catch(ex=>{
					uni.hideLoading();
					if (ex.data.status == 4) {
						this.detailList = null;
					}
				})
			},
		}
	}
</script>

<style>
	@import url("registration-my.css");
</style>
