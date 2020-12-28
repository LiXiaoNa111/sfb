<!-- 首诊-上传处方 -->
<template>
	<view>
		<myh5></myh5>
		<view class="column">
			<view class="line"></view>
			<view class="top-row">
				<image mode="aspectFill" style="width: 4rpx; height: 22rpx;" src="../../static/image/icon_zs.png"></image>
				<view class="txt-name">请上传{{patientData.name}}在医疗机构的首诊处方单</view>
			</view>
			<view class="div">
				<image v-if="!isShow " @tap="goRegistration()" class="add-img" src="../../static/image/icon_add.png" mode="aspectFill"></image>
				<view v-if="isShow">
					<image class="img-set" :src="imageUrl" mode="aspectFit"></image>
					<image class="img-dele" @tap="clean()" src="../../static/image/delete.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="update" @tap="$dianji(upPrescription)">提交</view>
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
			this.getPatient();
			uni.$on(this.UPPATIENT, data => {
				this.patientData = data;
			})
		},
		onUnload() {
			uni.$off(this.UPPATIENT);
		},
		data() {
			return {
				type: '',
				isShow: false,
				imageUrl: '',
				patientData: '', //就诊人信息
			}
		},
		//状态栏中右上角事件监听
		onNavigationBarButtonTap(index) {
			//解决传参过长
			uni.navigateTo({
				url: "../need-update-user/need-update-user?type=3&userData=" + encodeURIComponent(JSON.stringify(this.patientData))
			})
		},
		methods: {
			upPrescription() {
				if (this.$u.test.isEmpty(this.imageUrl)) {
					this.$u.toast("请先上传图片");
					return;
				}
				this.upImg();
			},
			upImg() {
				var me = this;
				uni.showLoading();
				uni.uploadFile({
					url: me.firstUploadUrl,
					method: "POST",
					header: {
						"Content-Type": "multipart/form-data",
						"token": uni.getStorageSync('token')
					},
					filePath: this.imageUrl,
					name: 'firstCaseFile',
					formData: {
						'patientId': this.patientData.id,
					},
					success: (res) => {
						uni.hideLoading();
						console.log("上传成功");
						console.log(res);
						if (me.type == 1) {
							uni.$emit(this.ISSHOWFIRSTDATA, "首页存在病例更新展示");
							uni.navigateBack();
						} else if (me.type == 2) {
							uni.$emit(this.UPADMINISTRATIONLIST, "更新复诊管理列表");
							uni.navigateBack();
						}
					},
					fail() {
						uni.hideLoading();
					}
				})
			},
			getPatient() {
				this.$u.get(this.patientDefaultUrl).then(res => {
					console.log("默认就诊人")
					console.log(res)
					if (res.status == 0) {
						this.patientData = res.data;
					}
				})
			},
			goRegistration() {
				//照相机
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					// sourceType: ['album'], //从相册选择
					success: (res) => {
						this.isShow = true;
						console.log("回调图片路径");
						this.imageUrl = res.tempFilePaths[0];
						console.log(JSON.stringify(res.tempFilePaths[0])); //要上传的图片路径
					}
				});
			},
			clean() {
				this.isShow = false;
				this.imageUrl = "";
			}
		}
	}
</script>

<style>
	@import url("prescription-up.css");
</style>
