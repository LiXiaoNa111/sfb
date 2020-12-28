<template>
	<view>
		<myh5></myh5>
		<view style=" height: calc(100vh); display: flex; flex-direction: column;">

			<view class="top-row" v-if="1==2">
				<image @tap="goBack()" style="width: 16rpx; height: 32rpx;" src="../../static/image/nav_icon_back.png" mode="aspectFill"></image>
				<view class="top-search">
					<image style="width: 30rpx; height: 30rpx; color: #10BE62;" src="../../static/image/nav_button_search.png" mode=""></image>
					<view class="">搜索</view>
				</view>
			</view>
			<view class="view-top">
				<view v-for="(item,index) in sortList" :key="index" :class="TabCur==index?'txt-top-30-check':'txt-top-30'"
				 @tap="Select(index)">{{item.departmentName}}</view>
			</view>
			<view style="flex:1; overflow: scroll;">

				<load-refresh v-if="orderList!=null" ref="loadRefresh" :isRefresh="true" :refreshTime="800" :backgroundCover="'#f9f9f9'"
				 :heightReduce="10" :pageNo="pageNum" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">

					<view slot="content-list">
						<view class="card" v-for="(data,index) in orderList" :key="index">
							<view class="card-row">
								<view class="shop-name">{{data.orderTypeDesc}}</view>
								<view class="shop-state">{{data.stateDesc}}</view>
							</view>
							<view class="shop-state">{{data.orderNo}}</view>
							<!-- 1 处方商品订单 2 普通商品订单 3患者自有处方订单 -->
							<view v-if=" data.orderType==1 || data.orderType==2 || data.orderType==3" @tap="toDetail(data)">
								<view class="center-row" v-if="data.goodsMedVoList!=null" v-for="(itemData,i) in data.goodsMedVoList" :key="i">
									<image style="flex-shrink: 0; width: 170rpx; height: 170rpx; border-radius: 8rpx;" :src="itemData.img+'?x-oss-process=image/resize,l_100'"
									 mode="aspectFill"></image>
									<view class="center-column">
										<view class="item-row">
											<view class="shop-title">{{itemData.name}}</view>
											<view class="shop-price">¥{{itemData.price}}</view>
										</view>
										<view class="item-row2">
											<view class="shop-spec">{{itemData.spec}}</view>
											<view class="shop-num">X{{itemData.num}}</view>
										</view>
									</view>
								</view>
							</view>
							<!-- 0 处方订单 -->
							<view class="center" v-if="data.orderType==0 " @tap="toDetail(data)">
								<view class="cf-row">
									<view class="cf-title" style="flex-shrink: 0;">【医&emsp;生】</view>
									<view class="cf-conter">{{data.docName}}</view>
								</view>
								<view class="cf-row">
									<view class="cf-title" style="flex-shrink: 0;">【诊&emsp;断】</view>
									<view class="cf-conter">{{data.symptom}}</view>
								</view>
								<view class="cf-row">
									<view class="cf-title" style="flex-shrink: 0;">【就诊人】</view>
									<view class="cf-conter">{{data.patientName}}</view>
								</view>
							</view>

							<view class="shop-sum">¥{{data.payPrice}}</view>
							<view class="line"></view>
							<!-- data.state 0未付款 1已付款  2已发货 3 已收货  4已完成 5 已退款  6 已撤单 -->
							<view class="bottom-row" v-if="data.state==0">
								<view class="view-grow"></view>
								<!-- <view class="gray-button">修改地址</view> -->
								<view class="gray-button" @tap="getOrderCancel(data.id)">取消订单</view>
								<view class="remind-button" @tap="toPayDetail(data)">付款</view>
							</view>
							<view class="bottom-row" v-if="data.state==1">
								<view class="view-grow"></view>
								<!-- <view class="gray-button" >修改地址</view> 订单列表无收货地址 详情可修改 -->
								<!-- <view class="gray-button" @tap="getRefund(data)">申请退款</view> -->
								<view class="gray-button" v-if="data.refundStatus==1" @tap="toRefundDetails(data)">售后</view>
								<view class="remind-button" @tap="getOrderSendTip(data.id)">提醒发货</view>
							</view>
							<view class="bottom-row" v-if="data.state==2">
								<view class="view-grow"></view>
								<!-- <view class="gray-button" @tap="getRefund(data)">申请退款</view> -->
								<view class="gray-button" v-if="data.refundStatus==1" @tap="toRefundDetails(data)">售后</view>
								<view class="gray-button" @tap="seeLogistics(data.orderNo)">查看物流</view>
								<view class="remind-button" @tap="getReceive(data.id)">确认收货</view>
							</view>
							<!-- data.orderType	0 处方订单 1 处方商品订单 2 普通商品订单 3患者自有处方订单 -->
							<view class="bottom-row" v-if="data.state==3 || data.state==4">
								<view class="view-grow"></view>
								<!-- <view class="gray-button" @tap="getRefund(data)">申请退款</view> -->
								<view class="gray-button" v-if="data.refundStatus==1" @tap="toRefundDetails(data)">售后</view>
								<view class="remind-button" @tap="getDel(data.id)">删除订单</view>
								<!-- <view class="gray-button" v-if="data.orderType==0 || data.orderType==1 || data.orderType==3">查看处方笺</view> -->
								<!-- <view class="remind-button">再次购买</view> -->
							</view>
							<view class="bottom-row" v-if="data.state==5">
								<view class="view-grow"></view>
								<view class="remind-button">已退款</view>
							</view>
						</view>

					</view>
				</load-refresh>

				<view class="no-column" v-if="orderList==null">
					<image class="no-img" src="../../static/image/img_zwdd.png" mode="aspectFill"></image>
					<view>暂无相关订单</view>
				</view>

			</view>
			<!-- 删除订单提醒 -->
			<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定删除该订单吗？" color="#333" :size="32"></tui-modal>
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
			console.log(uni.getStorageSync('token'));
			this.TabCur = option.flag;
			this.getOrderList();
			uni.$on(this.INFORMGOODSLIST, data => {
				this.refresh();
			});
			//支付完成通知
			uni.$on(this.INFORMGOODSLISTPAY, data => {
				this.refresh();
			})
			//确认收货
			uni.$on(this.INFORMTAKE, data => {
				this.refresh();
			})
			//删除订单
			uni.$on(this.INFORMORDERDELETE, data => {
				this.refresh();
			})
			//申请退款成功
			uni.$on(this.INFORMORDERREASONS, data => {
				this.refresh();
			})
			//售后提交快递信息
			uni.$on(this.INFORMORDERREFUNND, data => {
				this.refresh();
			})
		},
		onUnload() {
			uni.$off(this.INFORMGOODSLIST);
			uni.$off(this.INFORMGOODSLISTPAY);
			uni.$off(this.INFORMTAKE);
			uni.$off(this.INFORMORDERDELETE);
			uni.$off(this.INFORMORDERREASONS);
			uni.$off(this.INFORMORDERREFUNND);
		},
		data() {
			return {
				TabCur: 0, //当前选中标签
				sortList: [{
						"departmentName": "全部",
					},
					{
						"departmentName": "待付款",
					},
					{
						"departmentName": "待发货",
					},
					{
						"departmentName": "待收货",
					},
					{
						"departmentName": "已完成",
					}
				],
				orderList: '',
				modal2: false,
				OrderId: '', //删除订单id
				pageNum: 1,
				totalPage: 0,
			}
		},
		methods: {
			//退款详情
			toRefundDetails(data) {
				uni.navigateTo({
					url: "../refund-details/refund-details?orderNo=" + data.orderNo
					// +"&refundInfo="+ encodeURIComponent(JSON.stringify(data.refundInfo))
				})
			},
			//确认收货
			getReceive(id) {
				this.$u.get(this.orderReceiveUrl, {
					'id': id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast("确认收货成功");
						this.refresh();
					}
				})
			},
			//查看物流
			seeLogistics(orderNo) {
				uni.navigateTo({
					url: "../logistics/logistics?orderNo=" + orderNo
				})
			},
			//删除订单
			getDel(id) {
				this.OrderId = id;
				console.log("订单id" + id);
				this.show2();
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
					this.getOrderDelete();
				}
				this.hide2();
			},
			//删除订单
			getOrderDelete(id) {
				this.$u.get(this.orderDeleteUrl, {
					'id': this.OrderId
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast("删除订单成功");
						this.refresh();
					}
				})
			},
			//提醒发货
			getOrderSendTip(id) {
				this.$u.get(this.orderSendTipUrl, {
					'id': id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast(res.msg);
					}
				})
			},
			//取消订单
			getOrderCancel(id) {
				this.$u.get(this.orderCancelUrl, {
					'id': id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast(res.msg);
						this.refresh();
					}
				})
			},
			toDetail(data) {
				if (data.state == 0 && data.orderType == 2) {
					uni.navigateTo({
						url: "../shop-confirm/shop-confirm?type=3&orderNo=" + data.orderNo
					})
				} else {
					uni.navigateTo({
						url: "../order-details/order-details?id=" + data.id
					})
				}
			},
			toPayDetail(data) {
				if (data.orderType == 2) {
					uni.navigateTo({
						url: "../shop-confirm/shop-confirm?type=3&orderNo=" + data.orderNo
					})
				} else {
					uni.navigateTo({
						url: "../order-details/order-details?id=" + data.id
					})
				}
			},
			//上划加载更多
			loadMore() {
				this.pageNum += 1;
				console.log("加载当前页数" + this.pageNum);
				this.$u.get(this.orderListUrl, {
					'state': this.TabCur - 1,
					'pageNum': this.pageNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						for (var i = 0; i < res.data.length; i++) {
							this.orderList.push(res.data[i]);
						}
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			// 下拉刷新数据列表
			refresh() {
				this.pageNum = 1;
				this.getOrderList();
			},
			getOrderList() {
				uni.showLoading();
				console.log("订单类型");
				console.log(this.TabCur - 1);
				this.$u.get(this.orderListUrl, {
					'state': this.TabCur - 1,
					'pageNum': this.pageNum
				}).then(res => {
					uni.hideLoading();
					console.log(res)
					if (res.status == 0) {
						this.orderList = res.data;
						this.totalPage = Number(res.msg);
						console.log('几页' + this.totalPage);
					}
				}).catch(ex => {
					uni.hideLoading();
					console.log("没数据2");
					if (ex.data.status == 4) {
						console.log("没数据");
						this.orderList = null;
					}
				})
			},
			goBack() {
				uni.navigateBack();
			},
			Select(index) {
				this.TabCur = index;
				this.refresh();
			},
		}
	}
</script>

<style>
	@import url("my-goods.css");
</style>
