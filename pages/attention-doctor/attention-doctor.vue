<template>
	<view>
		<myh5></myh5>
		<view v-show="platform==0">
			<view class="row" style="margin-top:50rpx; margin-bottom: 50rpx; margin-left: 20rpx; margin-right: 20rpx">
				<image style="flex-shrink: 0; width: 121rpx; height: 121rpx; border-radius: 100rpx;" :src="data.avatar" mode="aspectFill"></image>
				<view class="column" style="margin-left: 24rpx;">
					<view class="row">
						<view class="txt-34" v-if="data.userName!=null">{{data.userName}}</view>
						<view class="doctor-department" style="margin-left: 12rpx;" v-if="data.department!=null">{{data.department}}</view>
					</view>
					<view class="txt-30" style="margin-top: 12rpx;">{{data.title}}</view>
					<!-- 流式小标签 流式布局 -->
					<view class="flag" v-if="data.docLabelList!=null">
						<view class="flag-item" v-for="docLabel in data.docLabelList">{{docLabel}}</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="row" style="margin-top: 57rpx;">
				<image style="width: 44rpx; height: 44rpx;" src="../../static/image/icon_ysjj.png" mode="aspectFill"></image>
				<view class="txt-30" style="margin-left: 12rpx;">医生简介</view>
			</view>
			<view class="solid-view">{{synopsis}}</view>
			<!-- #ifndef H5 -->
			<view class="button" @tap="toChat">联系医生</view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<view class="button" @tap="toDownLoad">下一步</view>
			<!-- #endif -->
		</view>


		<view v-show="platform==1" style="padding: 84rpx;">
			<input class="modal-phone" type="number" :placeholder-style="isRed?'color:#F76260':'color:#595757'" :placeholder="holderPhone"
			 v-model="editPhone" />
			<view class="modal-sub_phone-view">
				<input class="modal-code" type="number" :placeholder-style="isCodeRed?'color:#F76260':'color:#595757'" :placeholder="holderCode"
				 v-model="editCode" />
				<view class="modal-get-code" @tap="getCode">{{getCodeTip}}</view>
			</view>
			<view class="button" @tap="goBind">下一步</view>

		</view>
		
		<!-- #ifdef H5 -->
		<web-view webview-styles="APP" :src="src" v-if="loading"></web-view>
		<!-- #endif -->

		<tui-modal-me :show="modal8" :custom="true" :maskClosable="false">
			<view class="modal-view">
				<image style="width: 530rpx; height: 685rpx;" src="http://www.hzsysf.com/sfb/image/44453.png" class="tui-tips-img"></image>
				<view class="modal-sub-view">
					<view class="modal-edit-view">
						<view class="modal-name">姓名</view>
						<input class="modal-txt" type="text" placeholder="请输入姓名" v-model="name" />
					</view>
					<view class="modal-edit-view" style="margin-top: 40rpx;">
						<view class="modal-name">身份证</view>
						<input class="modal-txt" type="text" placeholder="请输入身份证" maxlength="18" v-model="sfId" />
					</view>
					<view class="modal-confirm" @tap="goOut">确定</view>
				</view>
			</view>
		</tui-modal-me>
		<!-- :maskClosable="false" -->
		<!-- <tui-modal-me :show="modal" :custom="true" > -->
		<!-- <view class="modal-view">
				<image style="width: 526rpx; height: 740rpx;" src="http://www.hzsysf.com/sfb/image/44500.png" class="tui-tips-img"></image>
				<view class="modal-phone-view">
					<input class="modal-phone" type="number" :placeholder-style="isRed?'color:#F76260':'color:#595757'" :placeholder="holderPhone"
					 v-model="editPhone" />
					<view class="modal-sub_phone-view">
						<input class="modal-code" type="number" :placeholder-style="isCodeRed?'color:#F76260':'color:#595757'"
						 :placeholder="holderCode" v-model="editCode" />
						<view class="modal-get-code" @tap="getCode">{{getCodeTip}}</view>
					</view>
					<view class="modal-phone-confirm" @tap="goBind">确定</view>
				</view>
			</view> -->
		<!-- </tui-modal-me> -->

	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	import {
		listenScrollTop
	} from "./new_file.js"
	export default {
		components: {
			myh5
		},
		onLoad(option) {
			//小程序 
			if (option.scene) {
				console.log("has scene");
				var scene = decodeURIComponent(option.scene);
				//scene为参数&拼接 由于这里仅传递了一个参数所以直接split “=”
				console.log("scene is ", scene);
				var arr = scene.split("=");
				console.log("setStorageSync:", arr[0], "=", arr[1]);
				this.docId = arr[1];
				this.getData();
			} else {
				//非小程序
				console.log("donot has scene");
				this.docId = option.docId;
				console.log("1接收到医生id为：" + this.docId);
				this.getData();
			}

			this.$u.get(this.VersionPlatformUrl).then(res => {
				if (res.status == 0) {
					if (res.msg == "iPhone") {
						listenScrollTop()
					}
				}
			})


			//应用扫码的时候scancontent接口已经绑定医患关系
			//非应用扫码 
			//如果获取存储的手机号不存在的时候 弹窗输入手机号 绑定医患关系
			//存在手机号的时候 直接绑定医患关系
			// #ifndef APP-PLUS
			var phone = uni.getStorageSync(this.IPHONE);
			if (this.$u.test.isEmpty(phone)) {
				this.platform=1;
			} else {
				this.getbindUser(phone);
			}
			// #endif

		},
		data() {
			return {
				platform:0,//平台 
				type: '',
				docId: '',
				data: '',
				synopsis: '', //简介
				modal8: false,
				name: '',
				sfId: '',
				modal: false,
				editPhone: '',
				editCode: '',
				getCodeTip: "获取验证码",
				million: 60,
				codeStatus: true,

				holderPhone: "请输入手机号",
				isRed: false,
				holderCode: "请输入验证码",
				isCodeRed: false,
				
				src:'',
				loading:'',
			}
		},
		methods: {
			toDownLoad() {
				//去下载
				this.$u.get(this.VersionPlatformUrl).then(res => {
					if (res.status == 0) {
						if (res.msg == "Android") {
							window.location.href = this.h5APPPath
						} else if (res.msg == "iPhone") {
							this.loading = true
							this.src = this.AppStorePath
							setTimeout(() => {
							  this.$u.toast("若无反应,请前往App Store搜索“尚方宝”");
							}, 3000)
						}
					}
				})
			},
			//绑定医患关系
			getbindUser(phone) {
				this.$u.get(this.bindUserSourceUrl, {
					docId: this.docId,
					phone: phone
				}).then(res => {
					console.log(res)
					if (res.status == 0) {}
				}).catch(ex => {
					console.log(ex.data.msg);
				})
			},
			show8() {
				this.modal8 = true;
			},
			hide8() {
				this.modal8 = false;
			},
			show() {
				this.modal = true;
			},
			hide() {
				this.modal = false;
			},
			//获取验证码
			getCode() {
				if (this.$u.test.isEmpty(this.editPhone)) {
					this.isRed = true;
					return;
				}
				if (!this.$u.test.mobile(this.editPhone)) {
					this.editPhone = "";
					this.holderPhone = "请输入正确的手机号";
					this.isRed = true;
					return;
				}
				if (this.codeStatus) {
					this.codeStatus = false;
					var me = this;
					me.changeTip()
					var djs = setInterval(function() {
						me.changeTip(djs)
					}, 1000)

					this.$u.get(this.getCodeUrl, {
							phone: this.editPhone
						})
						.then(res => {
							this.$u.toast(res.msg)
						}).catch(ex => {
							this.$u.toast(ex.data.msg);
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
			goBind() {
				if (this.$u.test.isEmpty(this.editPhone)) {
					this.isRed = true;
					return;
				}
				if (this.$u.test.isEmpty(this.editCode)) {
					this.isCodeRed = true;
					return;
				}
				if (!this.$u.test.mobile(this.editPhone)) {
					this.editPhone = "";
					this.holderPhone = "请输入正确的手机号";
					this.isRed = true;
					return;
				}
				if (this.editCode.length != 4) {
					this.editCode = "";
					this.holderCode = "请输入正确的验证码";
					this.isCodeRed = true;
					return;
				}
				this.$u.get(this.bindUserSourceUrl, {
					docId: this.docId,
					phone: this.editPhone,
					smsCode: this.editCode
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast("绑定账号成功!");
						uni.setStorageSync(this.IPHONE, this.editPhone);
						setTimeout(() => {
							this.toDownLoad();
						}, 1000)
					}
				}).catch(ex => {
					console.log(ex.data.msg);
					this.toDownLoad();
				})
				
			},
			goOut() {
				if (this.$u.test.isEmpty(this.name)) {
					this.$u.toast("请输入姓名");
					return;
				}
				if (this.$u.test.isEmpty(this.sfId)) {
					this.$u.toast("请输入身份证号");
					return;
				}
				if (!this.$u.test.idCard(this.sfId)) {
					this.$u.toast("请输入正确的18位身份证号");
					return;
				}
				this.$u.get(this.customerAuthUrl, {
					username: this.name,
					IDNumber: this.sfId
				}).then(res => {
					uni.hideLoading();
					if (res.status == 0) {
						this.$u.toast("认证成功!");
						this.hide8();
						uni.setStorageSync(this.NAME, this.name);
						uni.setStorageSync(this.IDCARD, this.sfId);
						uni.setStorageSync(this.ISID, true);
						uni.$emit(this.UPDATEID, "");
						this.toChat();
					}
				}).catch(ex => {
					uni.hideLoading();
					this.$u.toast(ex.data.msg);
				})
			},
			getData() {
				console.log("2接收到医生id为：" + this.docId);
				this.$u.get(this.docInfoUrl, {
					'docId': this.docId
					// 'docId': 26
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.data = res.data;
						if (this.$u.test.isEmpty(this.data.synopsis)) {
							this.synopsis = "医生暂无简介";
						} else {
							this.synopsis = this.data.synopsis;
						}
					}
				})
			},
			//跳转聊天
			toChat() {
				var isId = uni.getStorageSync(this.ISID);
				if (!isId) {
					//弹框进行实名认证
					this.show8();
				} else {
					uni.navigateTo({
						url: "../chat/chat?name=" + this.data.userName + "&account=doc_" + this.data.id + "&img=" + encodeURIComponent(
							JSON.stringify(this.data.avatar))
					})
				}
			},
		}
	}
</script>

<style>
	@import url("attention-doctor.css");
</style>
