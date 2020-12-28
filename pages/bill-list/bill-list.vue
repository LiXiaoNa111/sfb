<template>
	<view>
		<myh5></myh5>
		<view class="column">
			<view class="remind-view">请您先填写以下问诊单，以便于更准确掌握您用药之后的状况</view>
			<view v-for="(data,index) in questionData" :key="index">
				<!-- 类型一单选 -->
				<view v-if="data.questionType==0">
					<view class="type-title">
						<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
						<view class="title-txt">{{index+1}}.(单选题){{data.content}}</view>
					</view>

					<view class="uni-list">
						<radio-group @change="radioChange">
							<!-- <label class="uni-list-cell" v-for="(item, subIndex) in answerData[index]" :key="subIndex"> -->
							<!-- 键值 -->
							<label class="uni-list-cell" v-for="(item,key) in answerData[index]" :key="key">
								<radio color="#10BE62" :value="`${data.id}/${key}`" style="transform:scale(0.7)" />
								<view>{{key}}:{{item}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<!-- 类型二多选 -->
				<view v-if="data.questionType==1">
					<view class="type-title">
						<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
						<view class="title-txt">{{index+1}}.(多选题){{data.content}}</view>
					</view>
					<view class="uni-list">
						<checkbox-group @change="checkboxChange">
							<label class="tui-checkbox" :key="item.value" v-for="(item,key, subIndex) in moreAnswerData[index]">
								<checkbox :value="`${data.id}*${key}`" style="transform:scale(0.7)" @tap="aaa(data.id)" />
								<view>{{key}}:{{item}}</view>
							</label>
						</checkbox-group>
					</view>
				</view>

				<!-- 类型三简述 -->
				<view v-if="data.questionType==2">
					<view class="type-title">
						<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
						<view class="title-txt">{{index+1}}.{{data.content}}</view>
					</view>
					<view class="type2-border">
						<input class="ipnoe-input" type="text" placeholder="请在这里输入症状情况" @tap="easyInput(data.id)" @blur="easyBlur"
						 maxlength="300" />
					</view>
				</view>
			</view>

			<view class="update" @tap="toUp()">提交</view>
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
				recordId: '',
				questionData: '',
				data: '',
				current: 0,
				answerData: [], //单选题答案列表
				moreAnswerData: [], //多选题答案列表

				tapQuestion: '', //标识多选当前选中的题目
				easyQuestion: '', //标识简答题当前选中的题目

				paramList: [], //选中的问题答案集合
			}
		},
		methods: {
			aaa(aa) {
				this.tapQuestion = aa;
			},
			easyInput(e) {
				this.easyQuestion = e;
			},
			easyBlur(e) {
				console.log("失去焦点");
				console.log(this.easyQuestion);
				console.log(e);

				if (this.$u.test.isEmpty(e.detail.value)) {
					for (var i = 0; i < this.paramList.length; i++) {
						if (this.paramList[i].question == this.easyQuestion) {
							this.paramList.splice(i, 1);
						}
					}
					return;
				}
				let param = {
					question: '',
					answer: ''
				}
				param.question = this.easyQuestion;
				param.answer = e.detail.value;
				if (this.paramList.length == 0) {
					this.paramList.push(param);
				} else {
					for (var i = 0; i < this.paramList.length; i++) {
						if (this.paramList[i].question == param.question) {
							this.paramList.splice(i, 1);
						}
					}
					this.paramList.push(param);
				}

			},
			getQuesTionListData() {
				uni.showLoading();
				this.$u.get(this.questionInterDetailUrl, {
					'batchNo': this.recordId
				}).then(res => {
					console.log(res)
					uni.hideLoading();
					if (res.status == 0) {
						this.data = res.data;
						this.questionData = res.data.questionVos;
						for (var i = 0; i < this.questionData.length; i++) {
							//单选
							if (this.questionData[i].questionType == 0) {
								this.answerData.push(JSON.parse(this.questionData[i].answerChoose));
							} else {
								this.answerData.push(null);
							}
							//多选
							if (this.questionData[i].questionType == 1) {
								this.moreAnswerData.push(JSON.parse(this.questionData[i].answerChoose));
							} else {
								this.moreAnswerData.push(null);
							}
						}
					}
				}).catch(ex => {
					uni.hideLoading();
				})
			},
			checkboxChange: function(e) {
				var chooseValues = e.detail.value;
				//对于某个问题取消选中之后 问题集合删除
				if (this.$u.test.isEmpty(e.detail.value)) {
					for (var i = 0; i < this.paramList.length; i++) {
						if (this.paramList[i].question == this.tapQuestion) {
							this.paramList.splice(i, 1);
						}
					}
					return;
				}

				var itemChooseAnswer = "";
				var question = "";
				for (var i = 0; i < chooseValues.length; i++) {
					var valueList = chooseValues[i].split("*");
					itemChooseAnswer += valueList[1];
					question = valueList[0];
				}
				let param = {
					question: '',
					answer: ''
				}
				param.question = question;
				param.answer = itemChooseAnswer;
				if (this.paramList.length == 0) {
					this.paramList.push(param);
				} else {
					for (var i = 0; i < this.paramList.length; i++) {
						if (this.paramList[i].question == param.question) {
							this.paramList.splice(i, 1);
						}
					}
					this.paramList.push(param);
				}
			},
			radioChange: function(evt) {
				var value = evt.target.value;
				var valueList = value.split("/");
				let param = {
					question: '',
					answer: ''
				}
				param.question = valueList[0];
				param.answer = valueList[1];
				if (this.paramList.length == 0) {
					this.paramList.push(param);
				} else {
					for (var i = 0; i < this.paramList.length; i++) {
						if (this.paramList[i].question == param.question) {
							this.paramList.splice(i, 1);
						}
					}
					this.paramList.push(param);
				}
			},
			toUp() {
				if (this.data.answerFlag) {
					this.$u.toast("请勿重复提交");
					return;
				}
				if (this.$u.test.isEmpty(this.paramList)) {
					this.$u.toast("请先回答问诊单问题");
					return;
				}
				var questions = "";
				for (var i = 0; i < this.paramList.length; i++) {
					if (i != this.paramList.length - 1) {
						questions += this.paramList[i].question + ":" + this.paramList[i].answer + "-";
					} else {
						questions += this.paramList[i].question + ":" + this.paramList[i].answer;
					}
				}
				console.log("要上传的问诊单id" + this.recordId);
				console.log("要上传的问题" + questions);
				//dvsbh
				this.$u.get(this.questionInterAnswerUrl, {
					'batchNo': this.recordId,
					'param': questions
				}).then(res => {
					console.log("我走到成功了")
					if (res.status == 0) {
						this.$u.toast(res.msg);
						uni.$emit(this.INFORMCHATLIST, '');
						uni.navigateBack();
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
		}
	}
</script>

<style>
	@import url("bill-list.css");
</style>
