<template>
	<view>
		<myh5></myh5>
		<view class="column">
			<view v-for="(data,index) in questionData" :key="index">
				<!-- 类型一 -->
				<view v-if="data.type==0">
					<view class="type-title">
						<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
						<view class="title-txt">{{index+1}}.{{data.question}}</view>
					</view>

					<view class="uni-list">
						<view class="uni-list-cell">
							<image class="radio-img" src="../../static/image/icon_check.png" mode="aspectFill"></image>
							<view>{{data.answer}}</view>
						</view>
					</view>
				</view>
				<view v-if="data.type==1" style="display: flex; flex-wrap: wrap;flex-direction: row;">
					<view v-for="(img,index) in data.fileArray" :key="index">
						<image @tap="showPic(img)" class="img" :src="img" mode="aspectFill"></image>
					</view>
				</view>
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
		onLoad(option) {
			this.reviewId = option.reviewId;
			this.getReviewDetailData();
		},
		data() {
			return {
				reviewId: '', //2
				questionData: [],
				msgImgList: [],
			}
		},
		methods: {
			showPic(msg) {
				uni.previewImage({
					indicator: "none",
					current: msg,
					urls: this.msgImgList
				});
			},
			getReviewDetailData() {
				uni.showLoading();
				this.$u.get(this.reviewDetailUrl, {
					'reviewId': this.reviewId
				}).then(res => {
					uni.hideLoading();
					if (res.status == 0) {
						this.questionData = res.data;
						for (var i = 0; i < this.questionData.length; i++) {
							if (this.questionData[i].type == 1) {
								this.msgImgList = this.questionData[i].fileArray
							}
						}
					}
				}).catch(ex => {
					uni.hideLoading();
				})
			},
		}
	}
</script>

<style>
	@import url("review-list-check.css");
</style>
