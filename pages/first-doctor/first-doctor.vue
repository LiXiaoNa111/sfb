<!-- 复诊 我的首诊医生 为你推荐医生 -->
<template>
	<view>
<myh5></myh5>
		<view class="line"></view>
		<!-- 没有找到首诊医生 -->
		<view class="view-column" v-if="detailData.docInfoVo==null">
			<view class="view-null-column">
				<image style="width: 147rpx; height: 107rpx;" src="../../static/image/img.png" mode="aspectFill"></image>
				<view class="txt-28-af">系统中未找到为您首诊的医生</view>
			</view>
			<view class="for-view">
				<image style="width: 30rpx; height: 24rpx;" src="../../static/image/icon_zs1.png" mode="aspectFill"></image>
				<view class="for-you">为你推荐</view>
				<image style="width: 30rpx; height: 24rpx;" src="../../static/image/icon_zs2.png" mode="aspectFill"></image>
			</view>
			<view v-if="detailData.recommendDocLists!=null" class="doctor-item" v-for="(doctor,index) in detailData.recommendDocLists" :key="index">
				<view class="item-column">
					<view class="item-row1">
						<view class="doctor-name">{{doctor.name}}</view>
						<view class="doctor-title">{{doctor.title}}</view>
						<view class="doctor-department">{{doctor.department}}</view>
					</view>

					<!-- 流式小标签 流式布局 -->
					<view class="flag">
						<view class="flag-item" v-for="(docLabel,itemIndex) in doctor.docLabelList" :key="itemIndex">{{docLabel.labelName}}</view>
					</view>

					<view class="item-row">
						<view class="doctor-gh" @tap="toDiagnosis(doctor.docId)">找他复诊</view>
						<image style="width: 24rpx; height: 32rpx;" src="../../static/image/icon_dj.png" mode="aspectFill"></image>
					</view>
				</view>
				<image style="border-radius: 8rpx; width:190rpx ; height: 190rpx;" mode="aspectFill" :src="doctor.avatar"></image>
			</view>
			<view class="no-view" v-if="detailData.recommendDocLists==null" style="margin-top: 100rpx;">
				<image style="width: 147rpx; height: 107rpx;" src="../../static/image/img.png" mode="aspectFill"></image>
				<view class="no-txt">未找到相关医生</view>
			</view>
		</view>
		<!-- 系统找到了开单医生 -->
		<view class="view-column" v-if="detailData.docInfoVo!=null">
			<view class="doctor-item">
				<view class="item-column">
					<view class="item-row1">
						<view class="doctor-name">{{detailData.docInfoVo.name}}</view>
						<view class="doctor-title">{{detailData.docInfoVo.title}}</view>
						<view class="doctor-department">{{detailData.docInfoVo.department}}</view>
					</view>

					<!-- 流式小标签 流式布局 -->
					<view class="flag">
						<view class="flag-item" v-for="(docLabel,k) in detailData.docInfoVo.docLabelList" :key="k">{{docLabel.labelName}}</view>
					</view>

					<view class="item-row">
						<view class="doctor-gh" @click="toDiagnosis(detailData.docInfoVo.docId)">找他复诊</view>
						<image style="width: 24rpx; height: 32rpx;" src="../../static/image/icon_dj.png" mode="aspectFill"></image>
					</view>
				</view>
				<image style="border-radius: 8rpx; width:190rpx ; height: 190rpx;" mode="aspectFill" :src="detailData.docInfoVo.avatar"></image>
			</view>
		</view> 
	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
		export default {
			components: {
				myh5
			},
		onLoad: function(option) {
			this.id = option.id;
			// this.id = decodeURIComponent(options.q);
			this.getDocsList();
		},
		data() {
			return {
				id: '',
				detailData: '',
			}
		},
		methods: {
			//去复诊
			toDiagnosis(docId){
				uni.navigateTo({
					url:"../diagnosis-list/diagnosis-list?docId="+docId+"&id="+this.id
				})
			},
			getDocsList() {
				this.$u.get(this.firstDocsUrl, {
					firstCaseId: this.id
				}).then(res => {
					this.detailData = res.data;
					console.log(this.detailData);
				})
			}
		}
	}
</script>

<style>
	@import url("first-doctor.css");
</style>
