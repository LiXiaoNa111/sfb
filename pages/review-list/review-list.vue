<template>
	<view class="view">
		<myh5> </myh5>
		<view class="doctor-item">
			<image class="grow" mode="aspectFill" :src="detailData.docAvatar"></image>
			<view class="item-column">
				<view class="item-row1">
					<view class="doctor-name">{{detailData.docName}}</view>
					<view class="doctor-title">{{detailData.docTitle}}</view>
					<!-- <view class="doctor-department">{{doctor.department}}</view> -->
				</view>

				<!-- 流式小标签 流式布局 -->
				<view class="flag" v-if="detailData.docLabel!=null">
					<view class="flag-item" v-for="(docLabel,index) in detailData.docLabel" :key="index" v-if="docLabel!=null">{{docLabel}}</view>
				</view>
			</view>
		</view>

		<view class="column">
			<view class="row">
				<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_hz.png" mode="aspectFill"></image>
				<view class="txt-30" style="margin-left: 12rpx;">患者信息</view>
			</view>
			<view class="line" style="margin-top: 24rpx; margin-left: 52rpx;"></view>
			<view class="row" style="margin-top: 24rpx;">
				<view class="txt-name">{{detailData.patientName}}</view>
				<view class="title-view">
					<image style="width: 23rpx; height: 27rpx;" :src="detailData.patientSex=='男'?'../../static/image/icon_nan.png':'../../static/image/icon_nv.png'"
					 mode="aspectFill"></image>
					<view class="txt-content">{{detailData.patientSex}}</view>
				</view>
				<view class="title-view">
					<image style="width: 28rpx; height: 23rpx;" src="../../static/image/icon_nl.png" mode="aspectFill"></image>
					<view class="txt-content">{{detailData.patientAge}}</view>
				</view>
			</view>
		</view>

		<view class="row-padding">
			<image style="width: 40rpx; height: 44rpx;" src="../../static/image/icon_jl.png" mode=""></image>
			<view class="txt-30" style="margin-left: 12rpx; flex: 1;">记录</view>
			<view class="txt-30-af" v-if="reviewFormList!=null">共{{reviewFormList.length}}条</view>
		</view>

		<view class="card" v-if="reviewFormList!=null" v-for="(data,indext) in reviewFormList" :key="indext">
			<view class="row">
				<view class="doctor-name" style="flex-grow: 1;" v-if="data.state==0">复诊单提交,医生未查看</view>
				<view class="doctor-name" style="flex-grow: 1;" v-if="data.state==1">医生已查看</view>
				<view class="doctor-name" style="flex-grow: 1;" v-if="data.state==2">已开具复诊处方</view>
				<view class="row" v-if="data.state==0" @tap="show2(data.id)">
					<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/icon_cx.png"></image>
					<view class="txt-26">撤销</view>
				</view>
				<view class="row" v-if="data.state!=0" @tap="show(data.id)">
					<image style="width: 40rpx; height: 40rpx;" mode="aspectFill" src="../../static/image/icon_jl_sc.png"></image>
					<view class="txt-26">删除</view>
				</view>
			</view>
			<view class="txt-26">{{data.createTime}}</view>
			<view class="doctor-name" style="margin-top: 24rpx; margin-bottom: 24rpx;">{{data.symptom}}</view>
			<view class="line"></view>
			<view class="row" style="margin-top: 24rpx;">
				<view style="flex: 1;"></view>
				<view class="button-hollow" @tap="toLookList(data.id)">查看复诊单</view>
				<!-- data.state==2 表示有医生开了处方 -->
				<!-- data.orderId==null 表示有处方还未下单 -->
				<!-- data.orderId!=null 表示有处方已经下单 -->
				<!-- data.orderState 处方的订单详情状态  0未付款 1已付款 2已发货 3已收货 4已完成 5已退款 6已撤单 7已删除-->
				<view class="button-solid" v-if="data.state==0" @tap="toToast">提醒查看</view>
				<view class="button-solid" v-if="data.state==2 && data.orderId==null" @tap="toPay(data.caseId)">去下单</view>
				<view class="button-solid" v-if="data.state==2 && data.orderId!=null && (data.orderState==0 || data.orderState==1||data.orderState==2||data.orderState==3||data.orderState==4)"
				 @tap="toPayDetail(data.orderId)">查看详情</view>
				<view class="button-solid" v-if="data.state==2 && data.orderId!=null && data.orderState==5" @tap="toRefundDetails(data.orderNo)">售后</view>
				<view class="button-solid" v-if="data.state==2 && data.orderId!=null && data.orderState==6">已撤单</view>
				<view class="button-solid" v-if="data.state==2 && data.orderId!=null && data.orderState==7">已删除</view>

				<!-- <view class="button-solid" v-if="data.state==2" @tap="toSeeBill(data.caseId)">查看处方笺</view> -->
			</view>

		</view>

		<view class="null-view" v-if="reviewFormList==null">
			<image class="no-img" src="../../static/image/img_zwfzjl.png" mode="aspectFill"></image>
			<view class="no-txt">暂无复诊记录</view>
		</view>

		<tui-modal :show="modal" @click="handleClick" @cancel="hide" content="确定删除该复诊单吗？" color="#333" :size="32"></tui-modal>
		<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定撤销该复诊单吗？" color="#333" :size="32"></tui-modal>

	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad(option) {
			this.id = option.id;
			this.getDetailData();
		},
		data() {
			return {
				id: '',
				detailData: '',
				modal: false,
				modal2: false,
				lastDeleteId: '',
				reviewFormList: '', //记录
			}
		},
		methods: {
			//退款详情
			toRefundDetails(orderNo) {
				uni.navigateTo({
					url: "../refund-details/refund-details?orderNo=" + data.orderNo
				})
			},
			toPayDetail(id) {
				uni.navigateTo({
					url: "../order-details/order-details?id=" + id
				})
			},
			show(id) {
				this.lastDeleteId = id;
				this.modal = true;
			},
			hide() {
				this.modal = false;
			},
			show2(id) {
				this.lastDeleteId = id;
				this.modal2 = true;
			},
			hide2() {
				this.modal2 = false;
			},
			handleClick(e) {
				let index = e.index;
				if (index === 0) {
					// this.$u.toast("取消");
					this.lastDeleteId = 0;
				} else {
					this.goDelete();
				}
				this.hide();
			},
			goDelete() {
				this.$u.get(this.reviewDeleteUrl, {
					'reviewId': this.lastDeleteId
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.getDetailData();
					}
				})
			},
			goLast() {
				this.$u.get(this.reviewCancelUrl, {
					'reviewId': this.lastDeleteId
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.getDetailData();
					}
				})
			},
			handleClick2(e) {
				let index = e.index;
				if (index === 0) {
					// this.$u.toast("取消");
				} else {
					this.goLast();
				}
				this.hide2();
			},
			// toSeeBill(caseId) {
			// 	uni.navigateTo({
			// 		url:"../case-detail/case-detail?caseId="+caseId+"&type=0" 这个接口有改动 如果之后要用的话记得改
			//虎逼说不去查看处方笺 现改成去下单 如果要是查看处方笺的话 这里的type为几是根据处方的类型来的
			//处方类型 0 处方订单 1 处方商品订单  3患者自有处方订单
			// 	})
			// },
			toPay(id) {
				uni.navigateTo({
					url: "../prescription-submit-cen/prescription-submit-cen?caseId=" + id
				})
			},
			toToast() {
				this.$u.toast("提醒查看成功");
			},
			//查看复诊单
			toLookList(id) {
				uni.navigateTo({
					url: "../review-list-check/review-list-check?reviewId=" + id
				})
			},
			getDetailData() {
				this.$u.get(this.reviewListUrl, {
					'firstCaseId': this.id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.detailData = res.data;
						var reviewList = res.data.reviewFormList;
						if (this.$u.test.isEmpty(reviewList)) {
							this.reviewFormList = null;
						} else {
							this.reviewFormList = reviewList;
						}
					}
				})
			},
		}
	}
</script>

<style>
	@import url("review-list.css");
</style>
