<template>
	<view>
		<myh5></myh5>
		<view class="fff">
			<view class="view-top">
				<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_jzr.png" mode="aspectFill"></image>
				<view class="title">就诊人</view>
				<view class="view-top" @tap="upUser" v-if="patientData!=null">
					<image style="width: 34rpx; height: 36rpx;" src="../../static/image/icon_qh.png" mode="aspectFill"></image>
					<view>更换</view>
				</view>
			</view>
			<view class="view-f9f9" v-if="patientData!=null">
				<view class="view-top">
					<view class="txt-title">姓名</view>
					<view class="txt-content">{{patientData.name}}</view>
				</view>
				<view class="view-top" style="margin-top: 24rpx; margin-bottom: 24rpx;">
					<view class="txt-title">性别</view>
					<view class="txt-content" v-if="patientData.sex==2">女</view>
					<view class="txt-content" v-if="patientData.sex==1">男</view>
				</view>
				<view class="view-top">
					<view class="txt-title">年龄</view>
					<view class="txt-content">{{patientData.age}}</view>
				</view>
			</view>
			<view class="view-f9f9-row" v-if="patientData==null" @tap="toPerson">
				<view>请添加就诊人</view>
				<view style="flex-grow: 1;"></view>
				<image style="width: 48rpx; height: 52rpx;" src="../../static/image/icon_dj.png" mode="aspectFill"></image>
			</view>
			<view class="view-top" style="margin-top: 24rpx;">
				<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_zz.png" mode="aspectFill"></image>
				<view class="title">症状</view>
			</view>
			<view class="view-f9f9" style="margin-bottom: 24rpx;">
				<input type="text" placeholder="请简述您的症状" v-model="symptom" />
			</view>
			<view class="view-top">
				<view class="view-sub">已有处方？</view>
				<view class="view-sub-txt" @tap="toPay">上传处方笺</view>
			</view>
		</view>
		<view class=" fff" style="margin-top: 19rpx;">
			<view class="view-top">
				<image style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png" mode="aspectFill"></image>
				<view class="b-txt-title">是否接受医生开具需求单外药品？</view>
			</view>
			<view class="b-row">
				<view class="view-top" @tap="isState(otherState)">
					<image style="width: 30rpx; height: 30rpx;" :src="otherState?'../../static/image/icon_sel.png':'../../static/image/icon_nor.png'"
					 mode="aspectFill"></image>
					<view class="txt">接受</view>
				</view>
				<view class="view-top" @tap="isState(!otherState)">
					<image style="width: 30rpx; height: 30rpx;" :src="!otherState?'../../static/image/icon_sel.png':'../../static/image/icon_nor.png'"
					 mode="aspectFill"></image>
					<view class="txt">不接受</view>
				</view>
			</view>
		</view>
		<view style="padding-left: 24rpx;padding-right: 24rpx;">
			<view class="button" @tap="confirmUp">确定提交</view>
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
			this.getPatientDefault();
			uni.$on(this.UPDATEUSER, data => {
				this.patientData = data;
			})
			uni.$on(this.NEEDADDPATIENT,data=>{
				this.getPatientDefault();
			})
		},
		onUnload() {
			uni.$off(this.UPDATEUSER);
		},
		data() {
			return {
				otherState: false,
				symptom: '',
				patientData: {}
			}
		},
		methods: {
			//添加就诊人 通知更新
			toPerson(){
				uni.navigateTo({
					url: "../../ApagesA/authentication/authentication?type=4"
				})
			},
			upUser() {
				//解决传参过长
				uni.navigateTo({
					url: "../need-update-user/need-update-user?type=1&userData=" + encodeURIComponent(JSON.stringify(this.patientData))
				})
			},
			getPatientDefault() {
				this.$u.get(this.patientDefaultUrl).then(res => {
					console.log("默认就诊人")
					console.log(res)
					if (res.status == 0) {
						this.patientData = res.data;
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						this.patientData = null;
					}
				})
			},
			isState(state) {
				if (!state) {
					this.otherState = !this.otherState;
				}
			},
			toPay() {
				uni.navigateTo({
					url: "../need-pay/need-pay"
				})
			},
			confirmUp() {
				if (this.$u.test.isEmpty(this.symptom)) {
					this.$u.toast("请输入您的症状");
					return;
				}
				let state = this.otherState ? 1 : 0;
				this.$u.get(this.needSubmitSymptomUrl, {
					'patientId': this.patientData.id,
					'symptom': this.symptom,
					'otherState': state
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast(res.msg);
						uni.$emit(this.SUBMITNEED, "提交需求单通知");
						uni.navigateTo({
							url: "../need-record/need-record"
						})
					}
				}).catch(ex => {
					this.$u.toast(ex.data.msg);
				})
			}
		}
	}
</script>

<style>
	@import url("need-up.css");
</style>
