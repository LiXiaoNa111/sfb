<template>
	<view>
		<myh5></myh5>
		<view class="content">
			<view class="txt1">欢迎加入尚方宝！</view>
			<view class="txt2">请确认授权以下信息</view>
			<view class="txt3">获取你的公开信息(昵称、头像等)</view>
			<button class='regis' open-type="getUserInfo" @getuserinfo="getWXSessionkey" withCredentials="true">微信授权</button>
			<view class="view" @tap="show2">
				<view class="view1">暂不授权</view>
				<view class="view2"></view>
			</view>
			<tui-modal :show="modal2" title="警示" @click="handleClick2" @cancel="hide2" content="您点击了拒绝授权，部分功能无法使用!!!" color="#333"
			 :size="32" :button="button3"></tui-modal>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.type = option.type;
			console.log("跳转到微信登录页面");
			console.log(this.type);
		},
		onUnload() {
			this.islogin = uni.getStorageSync(this.ISLOGIN);
			if (!this.islogin && this.type == 1) {
				uni.$emit(this.INFORMBACKLOGINWX, "");
			}else if (!this.islogin && this.type == 2) {
				uni.$emit(this.INFORMBACKLOGINWXME, "");
			}
		},
		data() {
			return {
				islogin: '',
				type: '', //应用内(挂号和我的)进来登录页面 20扫微信码进来政所医生列表
				code: '',
				signature: '',
				rawData: '',
				encryptedData: '',
				iv: '',
				modal2: false,
				button3: [{
					text: '确定',
					type: 'red'
				}],
			}
		},
		methods: {
			getWXSessionkey() {
				var that = this;
				console.log("点击了去授权");
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log("获取到微信code");
						console.log(loginRes.code);
						that.$u.get(that.miniWXKeyUrl, {
							code: loginRes.code
						}).then(res => {
							if (res.status == 0) {
								that.login(res.data);
							}
						}).catch(ex => {
							uni.setStorageSync(that.SESSIONKEY, ex.data.msg);
							if (ex.data.status == 1) {
								that.mGetUserInfo(ex.data.msg);
							}
						})
					},
					fail(ex) {
						console.log("授权失败");
						console.log(ex);
					}
				});
			},
			mGetUserInfo(sessionKey) {
				var that = this;
				console.log("sessionKey"+sessionKey);
				uni.getUserInfo({
					provider: 'weixin',
					success: (result) => {
						console.log('用户同意授权');
						console.log(result);

						that.signature = result.signature;
						that.rawData = result.rawData;
						that.encryptedData = result.encryptedData;
						that.iv = result.iv;
						that.$u.get(that.miniWXInfoUrl, {
							sessionKey: sessionKey,
							signature: that.signature,
							rawData: that.rawData,
							encryptedData: that.encryptedData,
							iv: that.iv
						}).then(res => {
							if (res.status == 0) {
								console.log("接口成");
								console.log(res)
								//有账户直接进入程序
								that.login(res.data);
								
							}
						}).catch(ex => {
							console.log("无账号 新用户 去注册");
							console.log(ex)
							that.ddd(ex.data);
						})
					},
					fail: (error) => {
						console.log('用户拒绝授权', error);
						this.show2();
					}
				});
			},
			ddd(data){
				//无账号 新用户 去注册
				if (data.status == 100) {
					uni.navigateTo({
						url: "../wx-authorization-phone/wx-authorization-phone?type="+this.type+"&data=" +
							encodeURIComponent(JSON.stringify(data.data)) +
							"&signature=" + encodeURIComponent(JSON.stringify(this.signature)) +
							"&rawData=" + encodeURIComponent(JSON.stringify(this.rawData))
					})
				} else if (data.status == 1) {
					this.$u.toast(data.msg);
				}
			},
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
				if(this.type==20){
					uni.reLaunch({
						url:"../../clinic-doctor/clinic-doctor"
					})
				}else{
					uni.switchTab({
						url: "../../diagnosis/diagnosis"
					})
				}
			},
		}
	}
</script>

<style>
	page {
		background-color: #ffffff;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 59rpx;
	}

	.txt1 {
		font-size: 36rpx;
		color: #000000;
		font-weight: bold;
		margin-top: 50rpx;
	}

	.txt2 {
		font-size: 30rpx;
		color: #000000;
		margin-top: 120rpx;
	}

	.txt3 {
		font-size: 30rpx;
		color: #AFAFAF;
		margin-top: 12rpx;
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
		margin-top: 77rpx;
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
