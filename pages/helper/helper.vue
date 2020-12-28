<template>
	<view>
		<myh5></myh5>
		<load-refresh ref="loadRefresh" :isRefresh="true" :refreshTime="800" :backgroundCover="'#f9f9f9'" :pageNo="pageNum"
		 :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh" v-if="listData!=null">

			<view slot="content-list">
				<view v-for="(data,index) in listData" :key="index">

					<!-- 0 系统通知 
				100 处方开具通知 
				101 处方下单成功通知 
				102 处方退款通知 
				200 挂号成功通知 
				201 挂号退款通知 
				300 订单发货通知 -->
					<view class="card" v-if="data.type==0" @tap="toDetailSystem(data)">
						<view class="system-row">
							<view class="view-rela">
								<image class="img-48" src="../../static/image/icon_xttz.png" mode="aspectFill"></image>
								<view v-if="data.state==0" class="view-cricle"></view>
							</view>
							<view class="txt-system">系统通知</view>
							<view class="txt-system-time">{{data.createTime}}</view>
						</view>
						<view class="txt-system-conten">{{data.message}}</view>
					</view>

					<view class="column" v-if="data.type!=0">
						<view class="txt-time">{{data.createTime}}</view>
						<view class="card" @tap="toDetail(data)">
							<view class="item-title-row">
								<view class="view-rela">
									<image v-if="data.type==100" class="img-48" src="../../static/image/icon_cfkj.png" mode="aspectFill"></image>
									<image v-if="data.type==101" class="img-48" src="../../static/image/icon_cfxd.png" mode="aspectFill"></image>
									<image v-if="data.type==102" class="img-48" src="../../static/image/icon_cftk.png" mode="aspectFill"></image>
									<image v-if="data.type==200" class="img-48" src="../../static/image/icon_ghcg.png" mode="aspectFill"></image>
									<image v-if="data.type==201" class="img-48" src="../../static/image/icon_ghtk.png" mode="aspectFill"></image>
									<image v-if="data.type==300" class="img-48" src="../../static/image/icon_ddfh.png" mode="aspectFill"></image>
									<view v-if="data.state==0" class="view-cricle"></view>
								</view>
								<view class="txt-system">{{data.message}}</view>
							</view>
							<view class="item-row" v-if="data.registrationNum!=null">
								<view class="item-title">编&#8195;&#8195;号</view>
								<view class="item-conten">{{data.registrationNum}}</view>
							</view>
							<view class="item-row" v-if="data.caseId!=null">
								<view class="item-title">处&#8194;方&#8194;号</view>
								<view class="item-conten">{{data.caseId}}</view>
							</view>
							<view class="item-row" v-if="data.orderNo!=null">
								<view class="item-title">订&#8194;单&#8194;号</view>
								<view class="item-conten">{{data.orderNo}}</view>
							</view>
							<view class="item-row" v-if="data.docName!=null">
								<view class="item-title">医&#8195;&#8195;生</view>
								<view class="item-conten">{{data.docName}}</view>
							</view>
							<view class="item-row" v-if="data.caseTime!=null">
								<view class="item-title">处方时间</view>
								<view class="item-conten">{{data.caseTime}}</view>
							</view>
							<view class="item-row" v-if="data.expressName!=null">
								<view class="item-title">快递公司</view>
								<view class="item-conten">{{data.expressName}}</view>
							</view>
							<view class="item-row" v-if="data.expressNo!=null">
								<view class="item-title">快递单号</view>
								<view class="item-conten">{{data.expressNo}}</view>
							</view>
							<view class="item-row" v-if="data.sendTime!=null">
								<view class="item-title">发货时间</view>
								<view class="item-conten">{{data.sendTime}}</view>
							</view>
							<view class="item-row" v-if="data.price!=null">
								<view class="item-title" v-if="data.type==101|| data.type==102">总&#8194;金&#8194;额</view>
								<view class="item-title" v-if="data.type==200|| data.type==201">挂&#8194;号&#8194;费</view>
								<view class="item-conten" v-if="data.price!=0">¥{{data.price}}</view>
								<view class="item-conten" v-if="data.price==0">免费</view>
							</view>
							<view class="item-row" v-if="data.refundPrice!=null">
								<view class="item-title">退款金额</view>
								<view class="item-conten">¥{{data.refundPrice}}</view>
							</view>
							<view class="item-row" v-if="data.refundTime!=null">
								<view class="item-title">退款时间</view>
								<view class="item-conten">{{data.refundTime}}</view>
							</view>
							<view class="item-row" v-if="data.registrationTime!=null">
								<view class="item-title">挂号时间</view>
								<view class="item-conten">{{data.registrationTime}}</view>
							</view>
							<view class="item-row" v-if="data.prevTime!=null">
								<view class="item-title">预约时间</view>
								<view class="item-conten">{{data.prevTime}}</view>
							</view>
							<view class="item-row" v-if="data.clinicName!=null">
								<view class="item-title">预约诊所</view>
								<view class="item-conten">{{data.clinicName}}</view>
							</view>
							<view class="item-row" v-if="data.createTime!=null && data.type==101 ">
								<view class="item-title">下单时间</view>
								<view class="item-conten">{{data.createTime}}</view>
							</view>
							<view class="line"></view>
							<view class="txt-detail">详情</view>
						</view>
					</view>

				</view>
			</view>
		</load-refresh>

		<view class="view-column" v-if="listData==null">
			<image style="width: 190rpx; height: 190rpx;" src="../../static/image/img_zwtz.png" mode="aspectFill"></image>
			<view style="font-size: 30rpx;">暂无通知</view>
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
			this.getListData();
		},
		onUnload() {
			uni.$emit(this.INFORMXTNOREAD, '');
		},
		data() {
			return {
				listData: '',
				pageNum: 1,
				totalPage: 0,
			}
		},
		onNavigationBarButtonTap(index) {
			this.$u.get(this.customerMsgReadsUrl).then(res => {
				console.log(res)
				if (res.status == 0) {
					this.$u.toast("全部已读");
					this.refresh();
				}
			})
		},
		methods: {
			toDetailSystem(data) {
				this.$u.get(this.customerMsgReadUrl, {
					'id': data.id
				}).then(res => {
					if (res.status == 0) {
						data.state = 1;
					}
				})
			},
			//  0 	系统通知
			// 100 	处方开具通知 
			// 101 	处方下单成功通知 
			// 102	处方退款通知 
			// 200 	挂号成功通知 
			// 201 	挂号退款通知 
			// 300 	订单发货通知
			toDetail(data) {
				this.$u.get(this.customerMsgReadUrl, {
					'id': data.id
				}).then(res => {
					if (res.status == 0) {
						data.state = 1;
					}
				})
				if (data.type == 100) { //去下单
					//-1未下单并且处方过期了 0未下单 1已下单未支付 2 已支付
					if (data.caseState == -1) {
						this.$u.toast("未下单并且处方过期了");
					} else if (data.caseState == 0) {
						uni.navigateTo({
							url: "../prescription-submit-cen/prescription-submit-cen?caseId=" + data.caseId
						})
					} else if (data.caseState == 1 || data.caseState == 2) {
						uni.navigateTo({
							url: "../order-details/order-details?id=" + data.orderId
						})
					}
				} else if (data.type == 101 || data.type == 300) { //处方详情
					uni.navigateTo({
						url: "../order-details/order-details?id=" + data.orderId
					})
				} else if (data.type == 102) { //订单退款详情
					uni.navigateTo({
						url: "../refund-details/refund-details?orderNo=" + data.orderNo
					})
				} else if (data.type == 200) { //挂号结果
					uni.navigateTo({
						url: "../registration-result/registration-result?id=" + data.registrationId + "&type=1"
					})
				} else if (data.type == 201) { //挂号列表 
					uni.navigateTo({
						url: "../registration-my/registration-my"
					})
				}
			},
			// 上划加载更多
			loadMore() {
				this.pageNum += 1;
				this.$u.get(this.customerMsgBroadcastUrl, {
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
				this.$u.get(this.customerMsgBroadcastUrl, {
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
			}
		}
	}
</script>

<style>
	@import url("helper.css");
</style>
