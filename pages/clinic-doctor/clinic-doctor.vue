<template>
	<view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in nameSortList" :key="index"
			 @tap="tabSelect" :data-id="index">
				{{item.departmentName}}
			</view>
		</scroll-view>


		<view class="my-card" v-if="findDoctorList!=null" v-for="(doctor,index) in findDoctorList " :key="index">
			<view class="doctor-item">
				<image class="grow" mode="aspectFill" :src="doctor.avatar!=null?doctor.avatar+'?x-oss-process=image/resize,l_150':'../../static/image/icon_tx.png' "></image>
				<view class="item-column">
					<view class="item-row1">
						<view class="doctor-name" v-if="doctor.name!=null">{{doctor.name}}</view>
						<view class="doctor-department" v-if="doctor.department!=null">{{doctor.department}}</view>
						<view class="doctor-title" v-if="doctor.title!=null">{{doctor.title}}</view>
						<!-- 	0可挂号 1不可挂号 -->
						<view class="doctor-have" v-if="doctor.state==0">有号</view>
						<view class="doctor-no-have" v-if="doctor.state==1">没号</view>
					</view>
					<view class="txt-doc">{{doctor.hospital}}</view>

					<!-- <view class="txt-sc-string" v-if="myDocLabelList[index]!=null">擅长:{{myDocLabelList[index]}}</view> -->
					<view class="txt-sc-string" v-if="doctor.label.length">擅长:{{doctor.label.join('、')}}</view>
					
					<view class="item-row">
						<view class="doctor-price" v-if="doctor.price==0  || doctor.price==null ">免费</view>
						<view class="doctor-price2" v-if="doctor.price!=0 && doctor.price!=null ">¥{{doctor.price}}</view>
						<view class="button">
							<image style="width: 36rpx; height: 34rpx;" src="../../static/image/icon_gh.png" mode="aspectFill"></image>
							<view class="doctor-gh" @click="toDetail(doctor.docId,doctor.price)">挂号</view>
						</view>
						<view class="button" style="margin-left: 30rpx;">
							<image style=" width: 36rpx; height: 36rpx;" src="../../static/image/icon_lxys.png" mode="aspectFill"></image>
							<view class="doctor-gh" @tap="toChat(doctor.name,doctor.docId,doctor.avatar)">联系</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="findDoctorList==null" class="column">
			<image style="width: 110rpx; height: 110rpx;" src="../../static/image/img_zwgh.png" mode="aspectFill"></image>
			<view class="">暂没发现医生</view>
		</view>

		<tui-modal-me :show="modal2" :custom="true" :maskClosable="false">
			<view class="modal-view-login">
				<image style="width: 530rpx; height: 686rpx;" src="http://www.hzsysf.com/sfb/image/51821.png" class="tui-tips-img"></image>
				<view class="modal-sub-view-login">
					<view class="modal-edit">您还未登录</view>
					<view class="modal-edit-sub">请先登录再进行操作</view>
					<view class="modal-confirm-login" @tap="goLogin">去登录</view>
				</view>
			</view>
		</tui-modal-me>

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

	</view>
</template>

<script>
	export default {
		components: {},
		onLoad(option) {
			if (option.scene) {
				console.log("has scene");
				var scene = decodeURIComponent(option.scene);
				// ?clinicId=1
				//scene为参数&拼接 由于这里仅传递了一个参数所以直接split “=”
				console.log("scene is ", scene);
				var arr = scene.split("=");
				console.log("setStorageSync:", arr[0], "=", arr[1]);
				this.clinicId = arr[1];
				console.log("接收到诊所id：" + this.clinicId);

			} else {
				console.log("donot has scene");
				this.clinicId = option.id;
				this.clinicName = option.name;
				uni.setNavigationBarTitle({
					title: this.clinicName
				})
				console.log("接收到诊所id和名称：" + this.clinicId + this.clinicName);
			}
			//诊所扫码 标识type=20
			//无账号：去注册账号->实名认证->返回该诊所医生列表页面
			//有账号：1无实名认证：去实名认证->返回该诊所医生列表页面
			//有账号：2有账号已认证 直接请求列表接口
			var isLogin = uni.getStorageSync(this.ISLOGIN);
			var isId = uni.getStorageSync(this.ISID);
			if (!isLogin) {
				this.show2();
			} else if (isLogin && !isId) {
				this.show8();
			} else if (isLogin && isId) {
				this.getSortList();
				this.getFindDoctorData();
			}
		},
		data() {
			return {
				clinicId: '', //诊所id
				clinicName: '', //诊所名字
				type: "", // 1app扫码 2微信扫码
				sortList: [], //科室列表
				nameSortList: null,
				findDoctorList: '', //发现医生列表
				myDocLabelList: [], //标签列表
				modal8: false,
				name: '',
				sfId: '',
				modal2: false,
				department: '',
				TabCur: 0,
				scrollLeft: 0,
			}
		},
		methods: {
			goLogin() {
				// #ifdef MP-WEIXIN
				uni.navigateTo({
					url: "../welcome/wx-authorization/wx-authorization?type=20"
				})
				// #endif
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.department = this.nameSortList[this.TabCur].departmentName;
				this.getFindDoctorData();
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
						this.getSortList();
						this.getFindDoctorData();
					}
				}).catch(ex => {
					uni.hideLoading();
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			show8() {
				this.modal8 = true;
			},
			hide8() {
				this.modal8 = false;
			},
			show2() {
				this.modal2 = true;
			},
			hide2() {
				this.modal2 = false;
			},
			toDetail(doctorId, price) {
				uni.navigateTo({
					url: '/pages/registrstion-details/registrstion-details?doctorId=' + doctorId + "&price=" + price,
				});
			},
			//跳转聊天
			toChat(name, account, img) {
				uni.navigateTo({
					url: "../chat/chat?name=" + name + "&account=doc_" + account + "&img=" + encodeURIComponent(JSON.stringify(img))
				})
			},
			getFindDoctorData() {
				this.myDocLabelList = [];
				this.findDoctorList = [];
				var dd = "";
				if (this.department != "全部") {
					dd = this.department
				}
				this.$u.get(this.docSelectDocByClinicUrl, {
					department: dd,
					clinicId: this.clinicId
				}).then(res => {
					if (res.status == 0) {
						console.log("诊所医生列表");
						console.log(res.data)
						this.findDoctorList = res.data.vos;
						this.clinicName = res.data.clinicName;
						uni.setNavigationBarTitle({
							title: this.clinicName
						})
						if (this.$u.test.isEmpty(this.findDoctorList)) {
							this.findDoctorList = null;
						} else {
							this.add(res.data.vos);
						}
					}
				}).catch(ex => {
					this.$u.toast(ex.data.msg);
					this.findDoctorList = null;
				})
			},
			add(data) {
				// for (var i = 0; i < data.length; i++) {
				// 	var docLabelList = data[i].docLabelList;
				// 	let itemString = "";
				// 	for (var i = 0; i < docLabelList.length; i++) {
				// 		if (i != docLabelList.length - 1) {
				// 			itemString += docLabelList[i].labelName + "、"
				// 		} else {
				// 			itemString += docLabelList[i].labelName
				// 		}
				// 	}
				// 	if (this.$u.test.isEmpty(itemString)) {
				// 		this.myDocLabelList.push(null);
				// 	} else {
				// 		this.myDocLabelList.push(itemString);
				// 	}
				// }

				for (let i = 0; i < data.length; i++) {
					data[i].label = []
					if (data[i].docLabelList.length) {
						for (let n = 0; n < data[i].docLabelList.length; n++) {
							data[i].label.push(data[i].docLabelList[n].labelName)
						}
						console.log(data[i])
					}
				}
			},
			getSortList() {
				this.nameSortList = [];
				this.$u.get(this.departmentSortListUrl,{
					clinicId:this.clinicId
				}).then(res => {
					var so = [{
						"id": 0,
						"departmentName": "全部"
					}]
					this.nameSortList = so.concat(res.data);
					this.department = this.sortList[0].departmentName;
				})
			},
		}
	}
</script>

<style>
	@import url("../registration/registrstion-page.css");
</style>
