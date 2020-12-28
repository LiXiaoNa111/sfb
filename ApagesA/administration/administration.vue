<!-- 复诊管理 -->
<template>
	<view>
		<myh5></myh5>
		<view class="jd">

			<view style="flex: 1;overflow: scroll;padding-top: 24rpx; ">

				<view style="height: 30rpx;"></view>
				<view class="card" v-for="(firstData,index) in firstList" :key="index">

					<view class="card-row">
						<view class="row-title">档案{{index+1}}</view>
						<view class="row-time">{{firstData.createTime}}</view>
					</view>
					<view class="card-row">
						<view class="row-title2">复诊记录显示在复诊页面</view>
						<view class="view-is-open" @tap="setShow(firstData.id)">
							<image v-if="firstData.isShow==1" style="width: 70rpx; height: 34rpx;" src="../../static/image/button_icon_gg.png"
							 mode="scaleToFill"></image>
							<image v-if="firstData.isShow==0" style="width: 70rpx; height: 34rpx;" src="../../static/image/button_icon_kk.png"
							 mode="scaleToFill"></image>
							<view class="txt-no-open" v-if="firstData.isShow==1">关</view>
							<view class="txt-open" v-if="firstData.isShow==0">开</view>
						</view>
					</view>
					<!--状态一 就诊信息 -->
					<view class="card-div" v-if="firstData.state==0">
						<view class="card-div-row">
							<view class="txt-div">就&#8194;诊&#8194;人 : </view>
							<view class="txt-div">{{firstData.name}}&#12288;{{firstData.sex}}&#12288;{{firstData.age}}</view>
						</view>
						<view class="card-div-row2">
							<view class="txt-div">诊&#12288;&#12288;断 :</view>
							<view class="txt-div2">{{firstData.symptom}}</view>
						</view>
						<view class="card-div-row">
							<view class="txt-div">首诊医生 :</view>
							<view class="txt-div">{{firstData.docName}}</view>
						</view>
					</view>
					<!--状态二 正在识别 -->
					<view class="card-div" style="align-items: center;" v-if="firstData.state==1">
						<image style="width: 117rpx; height: 125rpx;" src="../../static/image/fz_img_sb.png" mode="aspectFill"></image>
						<view class="">正在识别中...</view>
					</view>
					<!--状态3 识别失败 -->
					<view class="card-div" style="align-items: center;" v-if="firstData.state==3">
						<image style="width: 117rpx; height: 125rpx;" src="../../static/image/img_sbsb.png" mode="aspectFill"></image>
						<view v-if="firstData.remark!=null" style="color: #C51A15;">识别失败:{{firstData.remark}}</view>
						<view v-if="firstData.remark==null" style="color: #C51A15;">识别失败</view>
					</view>

					<view class="card-row">
						<view class="txt-fz" v-if="firstData.reviewNum==0">未复诊</view>
						<view class="txt-fz2" v-if="firstData.reviewNum!=0" @tap="toReview(firstData.id)">已复诊{{firstData.reviewNum}}次</view>
						<view class="view-is-open" @tap="toFirstDoctor(firstData.id)" v-if="firstData.state==0">
							<view class="shop-txt">复诊购药</view>
							<tui-icon :size="24" color="#10be62" name="arrowright"></tui-icon>
						</view>
						<view class="view-is-open" @tap="toUp" v-if="firstData.state==3">
							<view class="shop-txt">重新上传</view>
							<tui-icon :size="24" color="#10be62" name="arrowright"></tui-icon>
						</view>
					</view>
				</view>
			</view>

			<view class="view-up" @tap="toUp">
				<image style="width: 34rpx; height: 35rpx;" src="../../static/image/button_icon_sc.png" mode="aspectFill"></image>
				<view class="txt-up">上传首诊病例</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myh5 from "../../pages/myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad() {
			this.getFirstList();
			//上传处方/提交复诊单
			uni.$on(this.UPADMINISTRATIONLIST, data => {
				this.getFirstList();
			});
		},
		onUnload() {
			uni.$off(this.UPADMINISTRATIONLIST);
		},
		data() {
			return {
				firstList: []
			}
		},
		methods: {
			toReview(id) {
				uni.navigateTo({
					url: "../../pages/review-list/review-list?id=" + id
				})
			},
			toUp() {
				uni.navigateTo({
					url: "../../pages/prescription-up/prescription-up?type=2"
				})
			},
			getFirstList() {
				this.$u.get(this.firstListUrl).then(res => {
					this.firstList = res.data
					console.log(res.data)
				})
			},
			toFirstDoctor(id) {
				uni.navigateTo({
					url: "../../pages/first-doctor/first-doctor?id=" + id
				})
			},
			setShow(firstCaseId) {
				this.$u.get(this.firstShowUrl, {
					'firstCaseId': firstCaseId
				}).then(res => {
					//更新首页展示患者
					uni.$emit(this.ISSHOWFIRSTDATA, "首页存在病例更新展示");
					this.getFirstList();
				})
			}
		}
	}
</script>

<style>
	@import url("administration.css");
</style>
