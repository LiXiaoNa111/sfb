<!-- 在pages目录下的Vue文件仅作用于当前的页面 即局部样式 优先级大于全局样式 -->
<template>
	<view>
		<myh5></myh5>
		<view class="content">
			<tui-tips ref="toast"></tui-tips>
			<!-- #ifndef H5 -->
			<view style="flex-grow: 1;width: 100%; display: flex;flex-direction: column;align-items: center;justify-content: center;">
				<image class="logo" src="../../../static/image/logo.png"></image>
			</view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<image class="logoh5" src="../../../static/image/logo.png"></image>
			<!-- #endif -->
			<view class="login">验证码登录</view>
			<view class="login-tip">未注册手机号验证后可完成注册</view>

			<view class="lin">
				<view class="iphone">手机号</view>
				<input class="ipnoe-input" type="number" placeholder="请输入手机号" maxlength="11" v-model="phone"></input>
			</view>
			<view class="line"></view>

			<view class="lin">
				<view class="iphone">验证码</view>
				<input class="ipnoe-input" type="number" placeholder="请输入四位验证码" maxlength="4" v-model="code"></input>

				<view class="code" @click="getCode">{{getCodeTip}}</view>
			</view>
			<view class="line"></view>

			<view class="lin2">
				<image style="width: 70rpx; height:46rpx; margin-right: 12rpx;" :src="checked?'../../../static/image/icon_yes.png':'../../../static/image/icon_no.png'"
				 mode="aspectFit" @tap="onClick"></image>
				<!-- <jyf-parser :html="html" ref="article"></jyf-parser> -->
				<view style="flex-wrap: wrap;display: flex;flex-direction: row;">
					<view>我已认真阅读、理解并同意</view>
					<view style="color: #0062CC;" @tap="toService">《尚方宝使用协议》</view>
					<view>和</view>
					<view style="color: #0062CC;" @tap="toPrivacy">《尚方宝隐私政策》</view>
				</view>
			</view>

			<button class="regis" @click="onLogin">登录</button>

			<!-- #ifdef APP-PLUS -->
			<view class="lin2">
				<view class="line2"></view>
				<view class="login_txt">第三方登录</view>
				<view class="line2"></view>
			</view>
			<view style="width: 100%; display: flex;flex-direction: row;justify-content: space-around;">
				<image v-if="isplatform=='ios' && iosIs13" class="imag-size" src="../../../static/image/icon_pg.png" @tap="loginIos"></image>
				<image v-if="isplatform=='ios' && !iosIs13" class="imag-size" src="../../../static/image/icon_dl2.png" @tap="loginWx"></image>
				<image v-if="isplatform=='ios' && iosIs13" class="imag-size" src="../../../static/image/icon_dl2.png" @tap="loginWx"></image>
				<image v-if="isplatform!='ios'" class="imag-size" src="../../../static/image/icon_wx.png" @tap="loginWx"></image>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser.vue";
	import myh5 from "../../myh5/myh5"
	export default {
		components: {
			myh5,
			jyfParser
		},
		onLoad(option) {
			this.type = option.type;
			this.isplatform = uni.getSystemInfoSync().platform;
			var me = this;
			uni.getSystemInfo({
				success(res) {
					console.log("获取系统信息");
					var systemList = res.system.split('.');
					console.log(systemList[0]);
					if (systemList[0] >= 13) {
						me.iosIs13 = true;
					} else {
						me.iosIs13 = false;
					}
				}
			})
			// #ifdef APP-PLUS
			this.registrationId = plus.push.getClientInfo().clientid;
			console.log("推送标识信息");
			console.log(plus.push.getClientInfo());
			
			this.deviceNumber = plus.device.uuid;
			console.log("初始得到极光设备号：");
			console.log(this.registrationId);
			console.log(this.deviceNumber);
			// #endif

			this.checked = uni.getStorageSync(this.READ);
			var num = uni.getStorageSync(this.IPHONE);
			if (!this.$u.test.isEmpty(num)) {
				this.phone = num;
			}
		},
		onBackPress() {
			//返回事件拦截 如果不return true，依旧会执行默认的返回事件 坑坑坑
			if (this.type == 1) {
				uni.$emit(this.INFORMBACKLOGIN, "");
				return true;
			} else if (this.type == 2) {
				uni.$emit(this.INFORMBACKLOGINME, "");
				return true;
			} else {
				return false;
			}
		},
		onShow() {
			var me = this;
			//监听网络状态变化
			uni.getNetworkType({
				success: function(res) {
					console.log("网络状态监测111111");
					console.log(res.networkType);
					if (res.networkType == 'none') {
						me.isConnected = false;
						console.log('无网络');
						me.showTop(1);
					} else {
						me.isConnected = true;
					}
				}
			});
			//监听网络状态发生改变的时候
			uni.onNetworkStatusChange(function(res) {
				console.log("网络状态监测222222");
				me.isConnected = res.isConnected;
				console.log(me.isConnected); //当前是否有网络连接
				console.log(res.networkType); //网络类型
				if (res.isConnected) {
					me.showTop(0);
				} else {
					me.showTop(1);
				}
			});
		},
		data() {
			return {
				type: '', //应用内(挂号和我的)进来登录页面 
				isplatform: '', //Android or ios
				iosIs13: '', //版本是否大于13
				isConnected: '', //网络状态
				registrationId: '',
				deviceNumber: '',
				title: 'Hello',
				checked: false,
				html: '<p>我已认真阅读、理解并同意<a href="http://47.103.104.99/sfb/#/pages/web-view/agreement-web-view?type=3" target="_blank">《尚方宝使用协议》</a>和<a href="http://47.103.104.99/sfb/#/pages/web-view/agreement-web-view?type=2" target="_blank">《尚方宝隐私政策》</a>。</p>',
				getCodeTip: "获取验证码",
				million: 60,
				codeStatus: true,
				phone: '',
				code: '',
				basicData: [{
					type: "green",
					msg: "网络恢复连接~"
				}, {
					type: "danger",
					msg: "网络无连接~"
				}],
				wxData: {
					deviceNumber: '',
					registrationId: '',
					openId: '',
					nickName: '',
					gender: '',
					avatarUrl: '',
					unionId: ''
				}
			}
		},
		methods: {
			loginIos() {
				if (!this.checked) {
					this.$u.toast("请勾选并阅读用户协议")
					return;
				}
				var me = this;
				uni.login({
					provider: 'apple',
					success: function(loginRes) {
						let iosopenid = loginRes.authResult.openid
						me.toLoginApple(iosopenid);
					},
					fail: function(err) {
						// 登录失败  
						me.$u.toast("登录失败");
						console.log("登录失败");
						console.log(err);
					}
				});
			},
			toLoginApple(iosopenid) {
				var me = this;
				uni.showLoading();
				me.$u.get(me.appleLoginUrl, {
					'appleId': iosopenid,
					'registrationId': this.registrationId,
					'deviceNumber': this.deviceNumber
				}).then(res => {
					uni.hideLoading();
					console.log(res)
					if (res.status == 0) {
						me.goMain(res.data);
					}
				}).catch(ex => {
					uni.hideLoading();
					if (ex.data.status == 1) {
						me.$u.toast(ex.data.msg);
					}
				})
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
			showTop(index) {
				console.log("打印index");
				let options = {
					msg: this.basicData[index].msg,
					duration: this.basicData[index].duration || 2000,
					type: this.basicData[index].type
				};
				console.log(index);
				this.$refs.toast.showTips(options);
			},
			// {
			// 	"access_token": "36_evp5dC5DFXMu7TmtSI0RKtALGHipsUTbrRTADgFlI6rhOXGShdVksyldu1X5UVwM21zR1Q8EpobHyMTfN27Y4XhapdL3FexJ_UehS7e6inw",
			// 	"expires_in": 7200,
			// 	"refresh_token": "36_FjyVTh5T-aU-YVSTWpK8VSYAfQdz0ZjW7JMDC3WGI5jmMtAP-hIsl9wgZXJhdbQR7WaJPjD64dpvX_Fb17pjDSwa_F30Kv8yL-bHD6wkluQ",
			// 	"openid": "oUHOh5vTi_4bwLLXpG09mSDrE5ak",
			// 	"scope": "snsapi_userinfo",
			// 	"unionid": "o9lbR6DfeSpenId3ct84j2qPkI0A"
			// }
			loginWx() {
				if (!this.checked) {
					this.$u.toast("请勾选并阅读用户协议")
					return;
				}
				let me = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log('微信登录成功');
						console.log(loginRes.authResult);

						uni.getUserInfo({
							provider: 'weixin',
							success: (res) => {
								console.log("11111111111111111111111获取用户信息");
								console.log(res.userInfo);
								me.wxMessage(res.userInfo);
							},
							fail: () => {
								console.log("未授权");
							}
						})
					}
				});
			},
			wxMessage(data) {
				this.wxData.deviceNumber = this.deviceNumber;
				this.wxData.registrationId = this.registrationId;
				this.wxData.openId = data.openId;
				this.wxData.nickName = data.nickName;
				this.wxData.gender = data.gender;
				this.wxData.avatarUrl = data.avatarUrl;
				this.wxData.unionId = data.unionId;

				this.$u.get(this.WXLoginUrl, {
					'unionId': data.unionId
				}).then(res => {
					if (res.status == 0) {
						this.goMain(res.data);
					}
				}).catch(ex => {
					//无账号 新用户 去注册
					if (ex.data.status == 100) {
						console.log("去绑定");
						uni.navigateTo({
							url: "../../binding-phone/binding-phone?type=2&data=" + encodeURIComponent(
								JSON.stringify(this.wxData))
						})
					} else if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			goMain(data) {
				//state  0  未认证  1已认证
				if (data.state == 1) {
					uni.setStorageSync(this.ISID, true);
				}
				uni.setStorageSync(this.READ, true);
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
					url: "../../diagnosis/diagnosis"
				})
			},
			onClick() {
				this.checked = !this.checked;
			},
			//获取手机验证码
			getCode() {
				if (!this.isConnected) {
					this.$u.toast("网络无连接~");
					return;
				}
				if (this.$u.test.mobile(this.phone)) {
					console.log(this.codeStatus + "=============" + this.phone)
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
				} else {
					this.$u.toast("手机号格式错误")
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

			//登录
			onLogin() {
				console.log("手机设备号");
				console.log(this.deviceNumber);
				console.log("极光设备号");
				console.log(this.registrationId);
				var that = this;
				if (this.$u.test.mobile(this.phone)) {
					if (this.code.length == 4) {
						if (!this.checked) {
							this.$u.toast("请勾选并阅读用户协议")
							return;
						}
						this.$u.get(this.loginUrl, {
							deviceNumber: this.deviceNumber,
							registrationId: this.registrationId,
							phone: this.phone,
							code: this.code,
							type: 0
						}).then(res => {
							that.goMain(res.data);
						}).catch(ex => {
							if (ex.data.status == 1) {
								this.$u.toast(ex.data.msg);
							}
						})
					} else {
						this.$u.toast("请输入正确4位短信验证码");
					}
				} else {
					this.$u.toast("请输入正确的手机号");
				}
			},
		}
	}
</script>

<style>
	@import url("login.css");
</style>
