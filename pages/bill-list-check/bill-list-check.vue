<template>
	<view>
		<myh5></myh5>
		<view class="column">
			<view v-for="(data,index) in questionData" :key="index">
				<!-- 类型一单选 -->
				<view v-if="data.questionType==0">
					<view class="type-title">
						<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
						<view class="title-txt">{{index+1}}.(单选题){{data.content}}</view>
					</view>

					<view class="uni-list">
						<view class="uni-list-cell" v-for="(item,key) in answerData[index].choose" :key="key">
							<image class="radio-img" :src="answerData[index].yourAnswer!=null && answerData[index].yourAnswer==key?'../../static/image/icon_check.png':'../../static/image/icon_no_check.png'"
							 mode="aspectFill"></image>
							<view>{{key}}:{{item}}</view>
						</view>
					</view>
				</view>
				<!-- 类型二多选 -->
				<view v-if="data.questionType==1">
					<view class="type-title">
						<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
						<view class="title-txt">{{index+1}}.(多选题){{data.content}}</view>
					</view>

					<view class="uni-list">
						<view class="uni-list-cell" v-for="(item,key,subIndex) in moreAnswerData[index].choose">
							<image class="radio-img" :src="moreAnswerData[index].yourAnswer!=null &&  moreAnswerData[index].yourAnswer.includes(key)?'../../static/image/icon_check.png':'../../static/image/icon_no_check.png'"
							 mode="aspectFill"></image>
							<view>{{key}}:{{item}}</view>
						</view>
					</view>
				</view>

				<!-- 类型三简述 -->
				<view v-if="data.questionType==2">
					<view class="type-title">
						<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
						<view class="title-txt">{{index+1}}.{{data.content}}</view>
					</view>
					<view class="type2-border">
						<view class="ipnoe-input" v-if="txtData[index]!=null">{{txtData[index]}}</view>
						<view class="ipnoe-input" v-if="txtData[index]==null">暂无描述</view>
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
			this.recordId = option.recordId;
			this.getQuesTionListData();
		},
		data() {
			return {
				recordId: '', //1
				questionData: [],
				answerData: [],
				moreAnswerData: [],
				txtData: []
			}
		},
		methods: {

			getQuesTionListData() {
				uni.showLoading();
				this.$u.get(this.questionInterDetailUrl, {
					'batchNo': this.recordId
				}).then(res => {
					uni.hideLoading();
					if (res.status == 0) {
						this.questionData = res.data.questionVos;
						for (var i = 0; i < this.questionData.length; i++) {
							//单选
							if (this.questionData[i].questionType == 0) {
								let answer = {
									'choose': JSON.parse(this.questionData[i].answerChoose),
									'yourAnswer': this.questionData[i].yourAnswer
								}
								this.answerData.push(answer);
							} else {
								this.answerData.push(null);
							}
							//多选
							if (this.questionData[i].questionType == 1) {
								let answer = {
									'choose': JSON.parse(this.questionData[i].answerChoose),
									'yourAnswer': this.questionData[i].yourAnswer
								}
								this.moreAnswerData.push(answer);
							} else {
								this.moreAnswerData.push(null);
							}
							//简答
							if (this.questionData[i].questionType == 2) {
								this.txtData.push(this.questionData[i].yourAnswer);
							} else {
								this.txtData.push(null);
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
	@import url("bill-list-check.css");
</style>
