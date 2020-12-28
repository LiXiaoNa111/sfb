<template>
	<view>
		<myh5></myh5>
		<view style="padding: 24rpx;">
			<view class="lin">
				<input class="ipnoe-input" type="number" placeholder="请输入手机号" maxlength="11" v-model="phone"></input>
			</view>

			<view class="lin">
				<input class="ipnoe-input" type="number" placeholder="请输入四位验证码" maxlength="4" v-model="code"></input>

				<view class="code" @click="getCode">{{getCodeTip}}</view>
			</view>

			<button class="regis" @click="onup">确定</button>
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
			this.type = option.type;
			if (this.type == 2) {
				this.wxData = JSON.parse(decodeURIComponent(option.data));
				console.log("传递过来信息");
				console.log(JSON.stringify(this.wxData));
			} 
		},
		data() {
			return {
				type: '',
				wxData: '',
				getCodeTip: "获取验证码",
				phone: '',
				code: '',
				codeStatus: true,
				million: 60,
			}
		},
		methods: {
			//获取手机验证码
			getCode() {
				if (this.$u.test.isEmpty(this.phone)) {
					this.$u.toast("请先输入手机号");
					return;
				}
				if (!this.$u.test.mobile(this.phone)) {
					this.$u.toast("手机号格式错误");
					return;
				}
				if (this.codeStatus) {
					this.codeStatus = false;
					var me = this;
					me.changeTip()
					var djs = setInterval(function() {
						me.changeTip(djs)
					}, 1000)

					this.$u.get(
							this.getCodeUrl, {
								phone: this.phone
							})
						.then(res => {
							this.$u.toast(res.msg)
						})

				}
			},
			changeTip(djs) {
				this.million--;
				this.getCodeTip = this.million + "s后重新获取"
				if (this.million == 0) {
					clearInterval(djs)
					this.million = 60
					this.getCodeTip = "获取验证码"
					this.codeStatus = true;
				}
			},
			onup() {
				if (this.$u.test.isEmpty(this.phone)) {
					this.$u.toast("请先输入手机号");
					return;
				}
				if (!this.$u.test.mobile(this.phone)) {
					this.$u.toast("手机号格式错误");
					return;
				}
				if (this.$u.test.isEmpty(this.code)) {
					this.$u.toast("请先输入验证码");
					return;
				}
				let me = this;
				if (this.type == 1) { //更换绑定手机号
					this.upIphone();
				} else if (this.type == 2) { //微信登录去绑定手机号
					this.bindPhone();
				} 
			},
			upIphone() {
				this.$u.get(this.customerPhoneUrl, {
					'newPhone': this.phone,
					'code': this.code
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						uni.setStorageSync(this.IPHONE, this.phone);
						uni.$emit(this.UPIPHONE, '');
						uni.navigateBack();
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			bindPhone() {
				this.$u.get(this.customerBindPhoneUrl, {
					'phone': this.phone,
					'code': this.code,
					'deviceNumber': this.wxData.deviceNumber,
					'registrationId': this.wxData.registrationId,
					'openId': this.wxData.openId,
					'nickName': this.wxData.nickName,
					'gender': this.wxData.gender,
					'avatarUrl': this.wxData.avatarUrl,
					'unionId': this.wxData.unionId
				}).then(res => {
					if (res.status == 0) {
						this.$u.toast("登录成功");
						this.gan(res.data);
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			gan(data) {
				console.log("登录成功数");
				console.log(data);
				//state  0  未认证  1已认证
				if (data.state == 1) {
					uni.setStorageSync(this.ISID, true);
				}
				uni.setStorageSync(this.ISLOGIN, true);
				uni.setStorageSync(this.TOKEN, data.token);
				uni.setStorageSync(this.ID, data.id);
				uni.$emit(this.LOGINSOCKET,'');
				// this.socketLocal(data.id); //全局仅初始化一次服务socket
				uni.setStorageSync(this.CLINICNAME, data.clinicName);
				uni.setStorageSync(this.HEADIMG, data.avatar);
				uni.setStorageSync(this.NAME, data.userName);
				uni.setStorageSync(this.IPHONE, data.phone);
				uni.$emit(this.INFORMLOGIN, "更新登录状态");
				uni.switchTab({
					url: "../diagnosis/diagnosis"
				})
			},
		}
	}
</script>

<style>
	@import url("binding-phone.css");
</style>
