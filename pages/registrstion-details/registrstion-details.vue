<!-- 挂号-医生详情 -->
<template>
	<view>
		<myh5></myh5>
		<view class="f9f9f9">
			<view class="regisstion-view">
				<view class="card">
					<image class="top-img" :src="doctorDetail.avatar!=null?doctorDetail.avatar:'../../static/image/icon_tx.png'" mode="aspectFill"></image>
					<view class="doctor-name" v-if="doctorDetail.name!=null">{{doctorDetail.name}}</view>
					<view class="doctor-row">
						<view class="doctor_title" v-if="doctorDetail.title!=null">{{doctorDetail.title}}</view>
						<view class="doctor-department" v-if="doctorDetail.department!=null">{{doctorDetail.department}}</view>
					</view>
				</view>
				<!-- 流式小标签 流式布局 -->
				<view class="dingdan-msg">
					<view class="flag">
						<view class="flag-title">【擅长】:</view>
						<view class="flag-item" v-for="(docLabel,index) in docLabelList" :key="index" v-if="docLabelList!=null && docLabel.labelName!=null">
							{{docLabel.labelName}}</view>
						<view class="flag-item" v-if="docLabelList==null">医生暂无标签</view>
					</view>
					<view class="flag-title" style="width: 100%;" v-if="synopsis!=null">【简介】: {{synopsis}}</view>
					<view class="flag-title" style="width: 100%;" v-else>【简介】: 该医生暂无简介</view>
					<view v-if="isSynopsis==2" @tap="toSee" style="width: 100%;font-size: 30rpx; text-align: center;color: #AFAFAF;">查看更多</view>
					<view v-if="isSynopsis==1" @tap="toHide" style="width: 100%;font-size: 30rpx; text-align: center;color: #AFAFAF;">收起</view>
				</view>

				<view class="view-subtiltle">
					<view class="txt-subgh">挂号</view>
					<view class="txt-sub-subtitle">(仅支持7天内的挂号信息，过期作废)</view>
				</view>

				<!-- 折叠面板 -->
				<view v-if="dooInVoList!=null">
					<block v-for="(item,index) in dooInVoList" :key="index">
						<tui-collapse :index="index" :current="item.current" :disabled="item.disabled" @click="change">
							<template v-slot:title>
								<tui-list-cell :hover="!item.disabled">
									<view class="list-clinic-row">
										<view class="list-clinic-name">{{item.clinicName}}</view>
										<view class="list-clinic-addr" v-if="item.clinicAddr!=null">({{item.clinicAddr}})</view>
									</view>
								</tui-list-cell>
							</template>
							<template v-slot:content>
								<view class="item-column" v-for="(docInTime,j) in item.docInTimeVos" :key="j">
									<view class="item-row">
										<view class="item-time">{{docInTime.time}}</view>
										<view :class="docInTimeId==docInTime.id?'item0-check-registration':'item0-can-registration'" v-if="docInTime.canRegistration==0 && docInTime.regFee!=0"
										 @tap="checkDate(docInTime.id,docInTime.regFee)">挂号¥{{docInTime.regFee}}</view>
										<view :class="docInTimeId==docInTime.id?'item0-check-registration':'item0-can-registration'" v-if="docInTime.canRegistration==0 && docInTime.regFee==0"
										 @tap="checkDate(docInTime.id,docInTime.regFee)">挂号免费</view>
										<view class="item1-can-registration" v-if="docInTime.canRegistration==1" @tap="spillToast()">挂满</view>
										<view class="item2-can-registration" v-if="docInTime.canRegistration==2" @tap="toResult(docInTime.id)">已预约</view>
									</view>
									<view v-if="j!=item.docInTimeVos.length-1" class="view-dash-line"></view>
								</view>
							</template>
						</tui-collapse>
					</block>
				</view>

				<!-- 方法二 -->
				<!-- <view class="list-column" v-if="dooInVoList!=null" v-for="(dooInVo,i) in dooInVoList" :key="i">
					<view class="list-clinic-row">
						<view class="list-clinic-name">{{dooInVo.clinicName}}</view>
						<view class="list-clinic-addr" v-if="dooInVo.clinicAddr!=null">({{dooInVo.clinicAddr}})</view>
					</view>
					<view class="view-line-one"></view>
					<view class="item-column" v-for="(docInTime,j) in dooInVo.docInTimeVos" :key="j">
						<view class="item-row">
							<view class="item-time">{{docInTime.time}}</view>
							<view :class="docInTimeId==docInTime.id?'item0-check-registration':'item0-can-registration'" v-if="docInTime.canRegistration==0 && docInTime.regFee!=0"
							 @tap="checkDate(docInTime.id,docInTime.regFee)">挂号¥{{docInTime.regFee}}</view>
							<view :class="docInTimeId==docInTime.id?'item0-check-registration':'item0-can-registration'" v-if="docInTime.canRegistration==0 && docInTime.regFee==0"
							 @tap="checkDate(docInTime.id,docInTime.regFee)">挂号免费</view>
							<view class="item1-can-registration" v-if="docInTime.canRegistration==1" @tap="spillToast()">挂满</view>
							<view class="item2-can-registration" v-if="docInTime.canRegistration==2" @tap="toResult(docInTime.id)">已预约</view>
						</view>

						<view class="view-dash-line"></view>
					</view>
				</view> -->

				<view style="height: 24rpx;flex-shrink: 0;background-color: #F9F9F9;" v-if="dooInVoList!=null"></view>
				<!-- 挂号规则 -->
				<view v-if="dooInVoList!=null">
					<block>
						<tui-collapse :current="ghCurrent" @click="ghChange">
							<template v-slot:title>
								<tui-list-cell>
									<view class="rule-title">挂号须知</view>
								</tui-list-cell>
							</template>
							<template v-slot:content>
								<view class="m-column" style="padding: 24rpx;">
									<view class="m-row-start">
										<view class="rule-circle"></view>
										<view class="rule-subtitle">预约实名制：</view>
									</view>
									<view class="rule-content">预约就诊采取实名预约，请您如实提供患者的真实姓名，手机号码</view>
									<view class="m-row-start">
										<view class="rule-circle"></view>
										<view class="rule-subtitle">预约取号：</view>
									</view>
									<view class="rule-content">预约成功后，请于就诊当日携带患者本人身份证、预约通知凭证到门诊窗口验证预约信息并取号，如验证不符则不能取号。</view>
									<view class="m-row-start">
										<view class="rule-circle"></view>
										<view class="rule-subtitle">改号规则：</view>
									</view>
									<view class="rule-content"> 最晚改号时间为就诊前一天16:00前。改号无需另外支付挂号费。</view>
									<view class="m-row-start">
										<view class="rule-circle"></view>
										<view class="rule-subtitle">退号规则：</view>
									</view>
									<view class="rule-content"> 就诊前一天16:00点前取消 【全额退款】</view>
									<view class="rule-content">就诊前一天16:00点后取消 【不退款】</view>
									<view class="rule-content">挂号信息过期 【不退款】</view>
									<view class="m-row-start">
										<view class="rule-circle"></view>
										<view class="rule-subtitle">就诊说明：</view>
									</view>
									<view class="rule-content">首次看诊该医生为初诊，再次看诊该医生即为复诊，请如实选择初（复诊）。看诊当天到医馆（医院）核对就诊信息，如有偏差，需补交挂号费，具体以诊所窗口当天实际情况为准。</view>
								</view>
							</template>
						</tui-collapse>
					</block>
				</view>

				<view v-if="dooInVoList==null" class="no-view" style="flex: 1;">
					<image style="width: 110rpx; height: 110rpx;" src="../../static/image/img_zwgh.png" mode="aspectFill"></image>
					<view>该医生无可挂门诊信息</view>
				</view>
			</view>

			<view v-if="dooInVoList!=null" class="view-gh" @tap="goRegistration">
				<view class="txt-gh">去挂号</view>
				<view class="txt-gh" v-if="regFee==0">免费</view>
				<view class="txt-gh" v-if="regFee!=0">¥{{regFee}}</view>
			</view>

			<!-- 底部弹出付款  -->
			<tui-bottom-popup :show="payShow" @close="payPopup">
				<view class="tui-share add-view">
					<view class="bottom-top">
						<view class="p-title">付款详情</view>
						<image class="b-delete" src="../../static/image/delete.png" mode="aspectFill" @tap="payPopup"></image>
					</view>
					<view class="line"></view>
					<view class="p-price">¥{{regFee}}</view>
					<view class="p-way">支付方式选择</view>
					<view class="b-item-row">
						<image style="width: 60rpx; height: 60rpx;" src="../../static/image/icon_wx.png" mode="aspectFill"></image>
						<view class="b-item-title">微信</view>
						<image style="width: 50rpx; height: 50rpx;" @tap="checkPay(!payType)" :src="!payType?'../../static/image/icon_yes.png':'../../static/image/icon_no.png'"
						 mode="aspectFill"></image>
					</view>

					<!-- #ifndef MP-WEIXIN -->
					<view class="b-item-row">
						<image style="width: 60rpx; height: 60rpx;" src="../../static/image/icon_zfb.png" mode="aspectFill"></image>
						<view class="b-item-title">支付宝</view>
						<image style="width: 50rpx; height: 50rpx;" @tap="checkPay(payType)" :src="payType?'../../static/image/icon_yes.png':'../../static/image/icon_no.png'"
						 mode="aspectFill"></image>
					</view>
					<!-- #endif -->
					<view class="view-b">
						<view class="p-button" @tap="handleHiddenShare()">立即付款</view>
					</view>
				</view>
			</tui-bottom-popup>
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
			this.doctorId = option.doctorId;
			this.price = option.price;
			console.log("医生1id");
			console.log(this.doctorId);
			console.log(this.price);
			this.regFee = 0;
			this.getDcotorDetail();
		},
		onShow() {
			this.getDcotorDetail()
		},
		data() {
			return {
				ghCurrent: -1,
				doctorId: 0,
				price: 0,
				doctorDetail: '',
				docInTimeId: '',
				regFee: '', //挂号费 每个诊所不一定一样

				payShow: false,
				payType: false, //false微信 true支付宝

				dooInVoList: '', //挂号门诊
				docLabelList: '', //标签
				synopsis: '', //简介
				isSynopsis: "", //是否需要查看更多
			}
		},
		methods: {
			toSee() {
				this.synopsis = this.doctorDetail.synopsis;
				this.isSynopsis = 1;
			},
			toHide() {
				this.synopsis = this.doctorDetail.synopsis.substring(0, 50) + "...";
				this.isSynopsis = 2;
			},
			ghChange(e) {
				if (this.ghCurrent == 0) {
					this.ghCurrent = -1;
				} else if (this.ghCurrent == -1) {
					this.ghCurrent = 0;
				}
			},
			change(e) {
				let index = e.index;
				let item = this.dooInVoList[index];
				item.current = item.current == index ? -1 : index
			},
			checkPay(pay) {
				if (!pay) {
					this.payType = !this.payType;
				}
			},
			payPopup() {
				this.payShow = !this.payShow;
			},
			getDcotorDetail() {
				// uni.showLoading();
				console.log("医生id");
				console.log(this.doctorId);
				var that = this;
				this.$u.get(this.myDoctorDetailUrl, {
					'docId': this.doctorId
				}).then(res => {
					// uni.hideLoading();
					if (res.status == 0) {
						this.doctorDetail = res.data;
						console.log("医生详情");
						console.log(res.data);

						console.log("简介长度");
						// console.log(this.doctorDetail.synopsis.length);
						console.log(this.doctorDetail.synopsis);

						if (that.$u.test.isEmpty(res.data.synopsis)) {
							that.synopsis = null;
							that.isSynopsis = 0;
						} else {
							that.synopsis = "";
							if (that.doctorDetail.synopsis.length > 50) {
								that.synopsis = that.doctorDetail.synopsis.substring(0, 50) + "...";
								that.isSynopsis = 2;
							} else {
								that.synopsis = res.data.synopsis;
								that.isSynopsis = 0;
							}
						}
						
						if (that.$u.test.isEmpty(res.data.dooInVoList) ) {
							that.dooInVoList = null;
						}else {
							that.dooInVoList = [];
							var data = res.data.dooInVoList;
							for (var i = 0; i < data.length; i++) {
								var dooList = {
									clinicName: data[i].clinicName,
									clinicAddr: data[i].clinicAddr,
									docInTimeVos: data[i].docInTimeVos,
									current: i == 0 ? 0 : -1,
									disabled: false
								}
								that.dooInVoList.push(dooList);
							}
						}


						if (that.$u.test.isEmpty(res.data.docLabelList)) {
							that.docLabelList = null;
						} else {
							that.docLabelList = res.data.docLabelList;
						}
					}
				}).catch(ex => {
					// uni.hideLoading();
					this.$u.toast(ex.data.msg);
				})
			},
			checkDate(id, regFee) {
				this.docInTimeId = id;
				this.regFee = regFee;
			},
			toResult(id) {
				uni.navigateTo({
					url: "../registration-result/registration-result?id=" + id
				})
			},
			goRegistration() {
				// 判断是否已经选择了要挂号日期
				if (this.$u.test.isEmpty(this.docInTimeId)) {
					this.$u.toast("请先选择要挂号的时间");
					return;
				}
				//免费挂号
				if (this.regFee == 0) {
					this.$u.get(this.freeRegistrationUrl, {
						'docInTimeId': this.docInTimeId
					}).then(res => {
						console.log(res)
						if (res.status == 0) {
							this.toResult(this.docInTimeId);
							this.docInTimeId = "";
						}
					})
					return;
				}
				this.payPopup();
			},
			handleHiddenShare() {
				var me = this;
				this.payPopup();
				//#ifdef H5
				this.$u.toast("请先下载应用方可付款，点击顶部'打开'");
				return;
				//#endif

				let platform = this.payType ? 1 : 2; //	1 支付宝 2 微信
				this.$u.get(this.payAliRegistrationUrl, {
					'docInTimeId': this.docInTimeId,
					'platform': platform,
					'deviceType': uni.getStorageSync(this.DEVICETYPE)
				}).then(res => {
					console.log("挂号去支付" + platform)
					console.log(res)
					if (res.status == 0) {
						if (this.payType) {
							uni.requestPayment({
								provider: 'alipay',
								orderInfo: res.msg, //支付宝订单数据
								success: function(res) {
									me.toResult(me.docInTimeId);
									me.docInTimeId = "";
								},
								fail: function(err) {
									console.log('失败fail:' + JSON.stringify(err));
								}
							});
						} else {
							// #ifndef MP-WEIXIN
							me.wxApi(res.data);
							// #endif
							// #ifdef MP-WEIXIN
							me.wxPay(res.data);
							// #endif
						}
					}
				})
			},
			//微信支付
			wxApi(info) {
				var me = this;
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo: info, //微信订单数据
					success: function(res) {
						me.toResult(me.docInTimeId);
						me.docInTimeId = "";
					},
					fail: function(err) {
						console.log('失败fail:' + JSON.stringify(err));
					}
				});
			},
			//微信小程序支付
			wxPay(data) {
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: data.timestamp,
					nonceStr: data.noncestr,
					package: data.packagevalue,
					signType: 'MD5',
					paySign: data.sign,
					success: function(res) {
						console.log("微信支付成功回调");
						me.toResult(me.docInTimeId);
						me.docInTimeId = "";
					},
					fail: function(err) {
						console.log('微信支付失败回调:' + JSON.stringify(err));
					}
				});
			},
			spillToast() {
				this.$u.toast("该医生当前时间已挂满，请另选其他时间")
			}
		}
	}
</script>

<style>
	@import url("registrstion-details.css");
</style>
