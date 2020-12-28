<template>
	<view>
		<view class="row">
			<view class="column">
				<view class="item-row">
					<image style="width: 40rpx; height: 40rpx;" src="../../static/image/icon_xqzs.png" mode="aspectFill"></image>
					<view class="txt-clinic-name">诊所{{detailData.clinicName}}</view>
				</view>
				<view class="txt-case-id">处方号:{{detailData.caseId}}</view>
			</view>
			<view class="txt-formulation">{{detailData.formulationName}}</view>
		</view>
		<view class="line"></view>
		<view class="txt-item">姓名：{{detailData.patientName}}&emsp;性别：{{detailData.sex}}&emsp;年龄：{{detailData.age}}</view>
		<view class="txt-item">诊断：{{detailData.symptom}}</view>
		<view class="txt-item">处方时间：{{detailData.caseTime}}</view>

		<view v-if="type==0">
				<view class="txt-rp">Rp.</view>
			<view class="tui-product-category">
				<view class="tui-category-item" v-for="(medData,index) in detailData.goodsMedVos" :key="index">
					<view class="item-50">{{medData.name}}:{{medData.num}}*{{medData.spec}}</view>
				</view>
			</view>
			<view class="tui-product-category">
				<view class="tui-category-item">
					<view class="item-weight">单剂量：{{detailData.singleWeight}}g</view>
				</view>
				<view class="tui-category-item">
					<view class="item-weight">总剂量：{{detailData.allWeight}}g</view>
				</view>
			</view>
			<view class="dash-line"></view>
			<view class="row2">
				<view class="txt-buttom">数量:</view>
				<view class="txt-buttom2">{{detailData.plural}}剂</view>
			</view>
			<view class="row2" v-if="detailData.method!=null">
				<view class="txt-buttom">用法用量:</view>
				<view class="txt-buttom2">{{detailData.method}}</view>
			</view>
			<view class="row2"  v-if="detailData.freq!=null">
				<view class="txt-buttom">频次:</view>
				<view class="txt-buttom2">{{detailData.freq}}</view>
			</view>
			<view class="row2"  v-if="detailData.remark!=null">
				<view class="txt-buttom">备注:</view>
				<view class="txt-buttom2">{{detailData.remark}}</view>
			</view>
		</view>

		<!-- <image style="flex-shrink: 0; width: 170rpx; height: 170rpx; border-radius: 8rpx;" :src="itemData.img" mode="aspectFill"></image> -->
		<view v-if="type==1">
			<view style="height: 30rpx;"></view>
			<view class="center-row" v-if="detailData.goodsMedVos!=null" v-for="(itemData,k) in detailData.goodsMedVos" :key="k">
				<view class="center-column">
					<view class="item-shop-row">
						<view class="shop-title">{{itemData.name}}</view>
						<view class="shop-price">¥{{itemData.price}}</view>
					</view>
					<view class="item-shop-row">
						<view class="shop-spec">{{itemData.spec}}</view>
						<view class="shop-num">X{{itemData.num}}</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="type==3">图片处方</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.caseId = option.caseId;
			this.type = option.type;
			this.getDetailData();
		},
		data() {
			return {
				type: '', //0 处方订单 1 处方商品订单  3患者自有处方订单
				caseId: '',
				detailData: ''
			}
		},
		methods: {
			getDetailData() {
				this.$u.get(this.caseCaseBillUrl, {
					'orderNo': this.caseId
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.detailData = res.data;
					}
				})
			},
		}
	}
</script>

<style>
	@import url("case-detail.css");
</style>
