<template>
	<view>
		<myh5></myh5>
		<view class="content">
			<!-- <button class='regis'  @click="getPhone()">手机号授权</button> -->

			<button class='regis' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信用户快速登录</button>
			<view style="flex-wrap: wrap;display: flex;flex-direction: row;margin-top: 24rpx;color: #A2A2A2;">
				<view>登录即表示您已阅读并同意</view>
				<view style="color: #0062CC;" @tap="toService">《尚方宝使用协议》</view>
				<view>和</view>
				<view style="color: #0062CC;" @tap="toPrivacy">《尚方宝隐私政策》</view>
			</view>
			<view class="view" @tap="show2">
				<view class="view1">暂不登录</view>
				<view class="view2"></view>
			</view>

			<tui-modal :show="modal2" title="警示" @click="handleClick2" @cancel="hide2" content="不登录将无法使用该小程序,快去登录吧!!!" color="#333"
			 :size="32" :button="button3"></tui-modal>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.type=option.type;
			console.log("到绑定手机号页面的type为："+this.type);
			this.wxData = JSON.parse(decodeURIComponent(option.data));
			this.signature = JSON.parse(decodeURIComponent(option.signature));
			this.rawData = JSON.parse(decodeURIComponent(option.rawData));
		},
		data() {
			return {
				type:'',
				wxData: {},
				signature: '',
				rawData: '',
				phone: '',
				modal2: false,
				button3: [{
					text: '确定',
					type: 'red'
				}],
			}
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
				this.hide2();
				uni.navigateBack();
			},
			toService() {
				//	1 尚方宝用户协议 2尚方宝隐私政策 3上医云用户协议 4上医云隐私政策
				uni.navigateTo({
					url: "../../web-view/agreement-web-view?type=1"
				})
			},
			toPrivacy() {
				uni.navigateTo({
					url: "../../web-view/agreement-web-view?type=2"
				})
			},
			getPhoneNumber: function(e) { //点击获取手机号码按钮
				console.log("点击手机号授权");
				var that = this;
				//判断session_key 有效期 
				wx.checkSession({
					success: function(res) {
						console.log("有效啊");
						console.log(e.detail)
						//拒绝手机号
						if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
							console.log("拒绝手机号授权");
							that.show2()
						} else {
							console.log("同意手机号授权");
							that.getPhone(e.detail);
						}
					},
					fail: function() {
						console.log("session_key 已经失效，需要重新执行登录流程");
						this.$u.toast("已经失效，需要重新执行登录流程");
						setTimeout(() => {
							uni.navigateBack();
						}, 500)
					}
				});
			},
			getPhone(wxDetail) {
				var that = this;
				var sessionKey = uni.getStorageSync(this.SESSIONKEY);
				//获取手机号
				this.$u.get(this.miniWXPhoneUrl, {
					sessionKey: sessionKey,
					signature: that.signature,
					rawData: that.rawData,
					encryptedData: wxDetail.encryptedData,
					iv: wxDetail.iv
				}).then(res => {
					console.log("获取手机号");
					console.log(res.data.phoneNumber)
					if (res.status == 0) {
						that.phone = res.data.phoneNumber;
						that.bandPhone();
					}
				})
			},
			//绑定微信及手机号信息 这一步才算是正式注册完成账号
			bandPhone() {
				this.$u.get(this.customerWXPhoneUrl, {
					openId: this.wxData.openId,
					nickName: this.wxData.nickName,
					gender: this.wxData.gender,
					avatarUrl: this.wxData.avatarUrl,
					unionId: this.wxData.unionId,
					phone: this.phone
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.login(res.data);
					}
				}).catch(ex => {
					this.$u.toast(ex.msg);
				})
			},
			login(data) {
				this.$u.toast("授权登录成功");
				uni.setStorageSync(this.ISLOGIN, true);
				uni.setStorageSync(this.TOKEN, data.token);
				uni.setStorageSync(this.ID, data.id);
				uni.$emit(this.LOGINSOCKET,'');
				// this.socketLocal(data.id);
				uni.setStorageSync(this.IPHONE, data.phone);
				uni.setStorageSync(this.CLINICNAME, data.clinicName);
				uni.setStorageSync(this.HEADIMG, data.avatar);
				uni.setStorageSync(this.NAME, data.userName);
				uni.setStorageSync(this.READ, true);
				//state  0  未认证  1已认证
				if (data.state == 1) {
					uni.setStorageSync(this.ISID, true);
				}
				uni.$emit(this.INFORMLOGIN, "更新登录状态");
				if (this.type == 20) {
					uni.reLaunch({
						url: "../../clinic-doctor/clinic-doctor"
					})
				} else {
					uni.switchTab({
						url: "../../diagnosis/diagnosis"
					})
				}

			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 59rpx;
	}

	.view {
		width: auto;
		margin-top: 24rpx;
		align-self: center;
	}

	.view1 {
		font-size: 30rpx;
		color: #AFAFAF;
	}

	.view2 {
		width: 100%;
		height: 1rpx;
		background-color: #AFAFAF;
		margin-top: -5rpx;
	}

	.regis {
		border-radius: 3px;
		background-color: #10be62;
		margin-top: 130rpx;
		color: #FFFFFF;
		font-size: 34rpx;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
</style>
