<template>
	<view>
		<myh5></myh5>
		<view class="column-fff">
			<view class="view-line-one"></view>
			<view class="view-row">
				<view class="name">姓名</view>
				<input class="name-input" type="text" placeholder="请输入姓名" maxlength="10" v-model="name"></input>
			</view>
			<view class="view-line-one"></view>
			<view class="view-row">
				<view class="name">身份证号</view>
				<input class="name-input" type="text" placeholder="请输入身份证号" maxlength="18" v-model="ID"></input>
			</view>
			<view @click="canGo" class="yes-go">确认</view>
		</view>
	</view>
</template>

<script>
	import myh5 from "../../pages/myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad(option) {
			this.type = option.type;
			if (this.type == 1 || this.type == 5) {
				uni.setNavigationBarTitle({
					title: '身份认证'
				})
			} else if (this.type == 2 || this.type == 3 || this.type == 4) {
				uni.setNavigationBarTitle({
					title: '添加就诊人'
				})
			}
		},
		data() {
			return {
				type: '',
				name: '',
				ID: '',
			}
		},
		methods: {
			canGo() {
				if (this.$u.test.isEmpty(this.name)) {
					this.$u.toast("请输入姓名");
					return;
				}
				if (this.$u.test.isEmpty(this.ID)) {
					this.$u.toast("请输入身份证号");
					return;
				}
				if (!this.$u.test.idCard(this.ID)) {
					this.$u.toast("请输入正确的18位身份证号");
					return;
				}
				uni.showLoading();
				if (this.type == 1 || this.type == 5) {
					this.$u.get(this.customerAuthUrl, {
						username: this.name,
						IDNumber: this.ID
					}).then(res => {
						uni.hideLoading();
						uni.setStorageSync(this.NAME, this.name);
						uni.setStorageSync(this.IDCARD, this.ID);
						uni.setStorageSync(this.ISID, true);
						if (this.type == 1) {
							uni.$emit(this.UPDATEID, '更新认证状态');
							uni.navigateTo({
								url: "../../pages/prescription-up/prescription-up?type=1"
							})
						} else if (this.type == 5) {
							uni.navigateTo({
								url: "../../pages/need-up/need-up"
							})
						}
					}).catch(ex => {
						uni.hideLoading();
						if (ex.data.status == 1) {
							this.$u.toast(ex.data.msg);
						}
					})
				} else if (this.type == 2 || this.type == 3 || this.type == 4) {
					this.$u.get(this.patientAddUrl, {
						username: this.name,
						IDNumber: this.ID
					}).then(res => {
						uni.hideLoading();
						console.log("添加就诊人成功");
						console.log(res);
						this.$u.toast(res.msg);
						if (this.type == 2) {
							uni.$emit(this.ADDPATIENT, '添加就诊人');
						} else if (this.type == 3) {
							uni.$emit(this.ADDPEOPLE, '添加就诊人');
						} else if (this.type == 4) {
							uni.$emit(this.NEEDADDPATIENT, '添加就诊人');
						}
						uni.navigateBack();
					}).catch(ex => {
						uni.hideLoading();
						if (ex.data.status == 1) {
							this.$u.toast(ex.data.msg);
						}
					})
				}
			}
		}
	}
</script>

<style>
	@import url("authentication.css");
</style>
