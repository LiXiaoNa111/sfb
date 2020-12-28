<template>
	<view>
		<myh5></myh5>
		<view class="view">
			<view class="ten-line"></view>
			<view class="lin">
				<view class="iphone">收货人</view>
				<input class="ipnoe-input" type="text" placeholder="请输入收货人真实姓名" v-model="name"></input>
			</view>
			<view class="line"></view>
			<view class="lin">
				<view class="iphone">手机号</view>
				<input class="ipnoe-input" type="number" placeholder="请输入手机号" maxlength="11" v-model="phone"></input>
			</view>
			<view class="ten-line"></view>
			<view class="lin2" style="align-items: center;">
				<view class="iphone">所在地区</view>
				<view class="search-box">
					<view class="s-input s-select" @tap="payPopup">
						<text class="text  wid27">{{province}}</text>
						<image mode="aspectFill" src="../../static/image/icon_right.png" class="img30 pdr20"></image>
						<text class="text  wid27">{{city}}</text>
						<image mode="aspectFill" src="../../static/image/icon_right.png" class="img30 pdr20"></image>
						<text class="text wid46">{{area}}</text>
						<image mode="aspectFill" src="../../static/image/icon_down.png" class="img32 flr"></image>
					</view>
				</view>

			</view>
			<view class="line"></view>
			<view class="lin">
				<view class="iphone">详细地址</view>
				<input class="ipnoe-input" type="text" placeholder="请输入详细收货地址" v-model="address"></input>
				<view style="background-color: #D1D1D1; width: 2rpx; height: 36rpx;margin-left: 12rpx; margin-right: 12rpx;"></view>
				<view style="display: flex; flex-direction: row; align-items: center;flex-shrink: 0;" @tap="toMap">
					<image style="width: 30rpx; height: 36rpx;" src="../../static/image/icon_dw.png" mode="aspectFill"></image>
					<view style="font-size: 28rpx; color: #10BE62;">定位</view>
				</view>
			</view>
			<view class="ten-line"></view>
			<view class="card-row" @tap="setShow()">
				<view class="row-title2" style="font-weight: bold;">设为默认地址</view>
				<image style="width: 70rpx; height: 34rpx;" :src="isShow?'../../static/image/button_icon_kk.png':'../../static/image/button_icon_gg.png'"
				 mode="scaleToFill"></image>
				<view class="txt-open" v-if="isShow">开</view>
				<view class="txt-no-open" v-if="!isShow">关</view>
			</view>

			<view class="view-ok" @tap="$dianji(okRes)">确定</view>


			<!--picker-view start-->
			<tui-bottom-popup :show="payShow" @close="payPopup">
				<view class="picker-header tui-list-item">
					<view class="btn-cancle" hover-class="tui-opcity" :hover-stay-time="150" @tap.stop="payPopup">取消</view>
					<view class="btn-sure" hover-class="tui-opcity" :hover-stay-time="150" @tap.stop="picker">确定</view>
				</view>
				<picker-view indicator-style="height: 50px;" class="picker-view" :value="value" @change="columnPicker">
					<picker-view-column>
						<view v-for="(item,index) in proviceArr" :key="index" class="item">{{item}}</view>
					</picker-view-column>
					<picker-view-column>
						<view v-for="(item,index) in cityArr" :key="index" class="item">{{item}}</view>
					</picker-view-column>
					<picker-view-column>
						<view v-for="(item,index) in districtArr" :key="index" class="item">{{item}}</view>
					</picker-view-column>
				</picker-view>
			</tui-bottom-popup>
		</view>
	</view>
</template>

<script>
	const cityData = require('../../utils/data.js');
	import myh5 from "../../pages/myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad(option) {
			this.type = option.type;
			console.log("类型");
			console.log(this.type);
			if (this.type == 2) { //编辑
				uni.setNavigationBarTitle({
					title: '编辑地址'
				})
				let index = option.index;
				let data = JSON.parse(decodeURIComponent(option.data));
				console.log("data类型");
				console.log(data);
				this.id = data.id;
				this.name = data.receiver;
				this.phone = data.phone;
				this.province = data.province;
				this.city = data.city;
				this.area = data.area;
				this.address = data.detail;
				this.isShow = index == 0 ? true : false;
			}
			this.getNowAddress();
			uni.$on(this.UPDATEADDRESS, data => {
				this.address = data.address;
				this.province = data.province;
				this.city = data.city;
				this.area = data.area;
			});

			//初始化数据
			this.proviceArr = this.toArr(cityData.default);
			this.cityArr = this.toArr(cityData.default[0].city);
			this.districtArr = this.toArrTwo(cityData.default[0].city[0].area)
		},
		data() {
			return {
				type: 1,
				name: '',
				phone: '',
				province: '请选择', //省
				city: '请选择', //市
				area: '请选择', //区
				address: '', //门牌号
				isShow: false,
				latitude: '', //精度
				longitude: '', //維度
				value: [0, 0, 0],
				proviceArr: [],
				cityArr: [],
				districtArr: [],
				id: 0, //编辑的iD
				payShow: false,
			}
		},
		methods: {
			payPopup() {
				this.payShow = !this.payShow;
			},
			toArr(object) {
				let arr = [];
				for (let i in object) {
					arr.push(object[i].name);
				}
				return arr;
			},
			toArrTwo(object) {
				let arr = [];
				for (let i in object) {
					arr.push(object[i]);
				}
				return arr;
			},
			//确定按钮
			picker: function(e) {
				this.address = '';
				let value = this.value;
				if (cityData.default.length > 0) {
					this.province = cityData.default[value[0]].name;
					this.city = cityData.default[value[0]].city[value[1]].name;
					this.area = cityData.default[value[0]].city[value[1]].area[value[2]];
					this.payPopup();
				}
			},

			//picker change切换事件
			columnPicker: function(e) {
				let value = e.detail.value;
				//如果两者下标不一致，表示滚动过
				if (this.value[0] !== value[0]) {
					this.proviceArr = this.proviceArr;
					this.cityArr = this.toArr(cityData.default[value[0]].city);
					this.districtArr = this.toArrTwo(cityData.default[value[0]].city[0].area);
					this.value = [value[0], 0, 0]
				} else if (this.value[1] !== value[1]) {
					this.proviceArr = this.proviceArr;
					this.cityArr = this.cityArr;
					this.districtArr = this.toArrTwo(cityData.default[value[0]].city[value[1]].area);
					this.value = [value[0], value[1], 0]
				} else {
					this.value = value
				}
			},

			setShow() {
				this.isShow = !this.isShow;
				if (this.type == 2 && this.isShow) { //编辑状态下去设置默认地址
					this.$u.get(this.addressDefaultSetUrl, {
						'addressId': this.id
					}).then(res => {
						console.log(res)
						if (res.status == 0) {
							this.$u.toast("设为默认地址成功");
							uni.$emit(this.UPDATEADDRESSLIST, "收货列表更新");
						}
					})
				}
			},
			okRes() {

				if (this.$u.test.isEmpty(this.name)) {
					this.$u.toast("请输入收货人真实姓名");
					return;
				}
				if (this.$u.test.isEmpty(this.phone)) {
					this.$u.toast("请输入手机号");
					return;
				}
				if (!this.$u.test.mobile(this.phone)) {
					this.$u.toast("请输入正确的手机号");
					return;
				}
				if (this.province == "请选择" || this.city == "请选择" || this.area == "请选择") {
					this.$u.toast("请选择收货人所在地区");
					return;
				}
				if (this.$u.test.isEmpty(this.address)) {
					this.$u.toast("请输入收货人详细地址");
					return;
				}
				this.getAddress();
			},
			getAddress() {
				uni.showLoading();
				let isdefault = this.isShow ? 0 : 1;
				if (this.type == 1 || this.type == 3 || this.type==4) {
					this.$u.get(this.addressAddUrl, {
						'receiver': this.name,
						'phone': this.phone,
						'province': this.province,
						'city': this.city,
						'area': this.area,
						'detail': this.address,
						'defaultAddress': isdefault
					}).then(res => {
						uni.hideLoading();
						console.log(res)
						if (res.status == 0) {
							this.$u.toast("添加成功");
							if (this.type == 1) {
								uni.$emit(this.UPDATEADDRESS, "收货列表更新");
								uni.navigateBack();
							} else if (this.type == 3) {
								uni.$emit(this.ADDADDRESS, "我的处方-去下单-添加收货地址");
								uni.navigateBack();
							}else if (this.type == 4) {
								uni.$emit(this.CONFIRMADDRESS, "商品详情-立即购买-确认订单-添加收货地址");
								uni.navigateBack();
							}
						}
					}).catch(ex => {
						uni.hideLoading();
					})
				} else if (this.type == 2) {
					this.$u.get(this.addressUpdateUrl, {
						'id': this.id,
						'receiver': this.name,
						'phone': this.phone,
						'province': this.province,
						'city': this.city,
						'area': this.area,
						'detail': this.address,
					}).then(res => {
						console.log(res)
						uni.hideLoading();
						if (res.status == 0) {
							this.$u.toast("编辑成功");
							uni.$emit(this.UPDATEADDRESSLIST, "收货列表更新");
							uni.navigateBack();
						}
					}).catch(ex => {
						uni.hideLoading();
					})
				}
			},
			getNowAddress() {
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: function(res) {
						this.latitude = res.latitude;
						this.longitude = res.longitude;

						console.log('精度：' + res.latitude);
						console.log('维度：' + res.longitude);
					},
					fail: function(ex) {
						console.log('当前位置获取失败：');
						console.log(ex);
					}
				});
			},
			toMap() {

				uni.navigateTo({
					url: "../../pages/location/location"
				})
			},
		}
	}
</script>

<style>
	@import url("address-add.css");
</style>
