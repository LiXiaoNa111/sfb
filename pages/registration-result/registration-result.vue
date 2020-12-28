<template>
	<view>
		<myh5></myh5>
		<view class="fff">
			<view class="line"></view>
			<image style="width: 140rpx; height: 110rpx;" src="../../static/image/img1.png" mode="aspectFill"></image>
			<view class="txt-yes">恭喜您挂号成功</view>
			<view class="txt-yes-time">{{detailData.createTime}}</view>
			<view style="position: relative;height: 220rpx; ">
				<image style="width: 722rpx; height: 220rpx; " src="../../static/image/regis_bg_img.png" mode="aspectFill"></image>
				<view class="top-column">
					<view class="top-gd-number">挂单号</view>
					<view class="top-number">+{{detailData.num}}号</view>
				</view>
			</view>

			<view class="card-bottom">
				<view class="card-fff">
					<view class="card-title">医生:{{detailData.docName}}</view>
					<view class="dash-line"></view>
					<view class="up-person-row">
						<view class="up-person">就诊人:{{detailData.patientName}}</view>
						<view class="row" @tap="updateUser(detailData.patientId)">
							<view class="update">更换</view>
							<tui-icon color="#10be62" name="arrowright"></tui-icon>
						</view>
					</view>
					<view class="dash-line"></view>
					<view class="">就诊时间:{{detailData.scheduleTime}}</view>
					<view class="dash-line"></view>
					<view class="">就诊医馆:{{detailData.clinicName}}</view>
				</view>
				<view class="bottom-txt">请于{{detailData.scheduleTime}}，准时前往{{detailData.clinicName}}就诊，地址{{detailData.clinicAddr}}。挂号单过期作废</view>
			</view>
			<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定退号吗？" color="#333" :size="32"></tui-modal>
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
			this.id = option.id;
			console.log("当前挂号单id" + this.id);
			this.type = option.type;
			this.getData();
			uni.$on(this.UPRESULTPATIENT, data => {
				console.log("更换就诊人接收通知");
				console.log(this.id);
				console.log(data);
				this.$u.get(this.patientRegistrationUrl, {
					'registrationId': this.detailData.id,
					'patientId': data
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.getData();
						uni.$emit(this.UPRESULTPATIENTT, this.selData);
					}
				}).catch(ex => {
					console.log("111111111111111");
					console.log(ex)
				})
			})
		},
		onUnload() {
			// 移除监听事件  
			uni.$off(this.UPRESULTPATIENT);
		},
		data() {
			return {
				id: '',
				type: '', //1我的挂号
				detailData: '',
				modal2: false,
			}
		},
		//状态栏中右上角事件监听
		onNavigationBarButtonTap(index) {
			//退号接口代写 部分挂号单需退款
			this.show2();
		},
		methods: {
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
					this.getRefund();
				}
				this.hide2();
			},
			//退号
			getRefund() {
				this.$u.get(this.registrationRefundUrl, {
					'registrationId': this.detailData.id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast(res.msg);
						uni.$emit(this.INFORMREGISTRATION, '');
						uni.navigateBack();
					}
				}).catch(ex=>{
					if(ex.data.status==1){
						this.$u.toast(ex.data.msg);
					}
				})
			},
			updateUser(patientId) {
				uni.navigateTo({
					url: "../need-update-user/need-update-user?type=4&patientId=" + patientId
				})
			},
			getData() {
				if (this.type == 1) {
					this.$u.get(this.resultRegistrationUrl, {
						'id': this.id
					}).then(res => {
						console.log(res)
						if (res.status == 0) {
							this.detailData = res.data;
						}
					})
				} else {
					this.$u.get(this.resultRegistrationUrl, {
						'docInTimeId': this.id
					}).then(res => {
						console.log(res)
						if (res.status == 0) {
							this.detailData = res.data;
							console.log('当前挂号单详情');
							console.log(res.data);
						}
					})
				}
			},
		}
	}
</script>

<style>
	@import url("registration-result.css");
</style>
