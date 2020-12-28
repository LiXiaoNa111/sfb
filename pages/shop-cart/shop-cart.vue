<template>
	<view>
		<myh5></myh5>
		<view class="view" v-if="cartGoodVoList!=null">
			<view style="flex: 1; overflow: scroll;">
				<view class="card" v-for="(data,index) in cartGoodVoList" :key="index" v-if="!isDelete">
					<view class="card-list">
						<image style="flex-shrink: 0; width: 34rpx; height: 34rpx;" :src="data.goodsChecked==0?'../../static/image/icon_yes.png':'../../static/image/icon_no.png'"
						 mode="aspectFill" @tap="checkSel(data.id)"></image>
						<image style="flex-shrink: 0; margin-left: 24rpx; border-radius: 12rpx; width: 170rpx; height: 170rpx;" :src="data.goodsImg"
						 mode="aspectFill"></image>
						<view class="item-column">
							<view class="txt-name">{{data.goodsSubtitle}}</view>
							<view class="txt-spec">{{data.goodsSpecs}}</view>
							<view class="item-row">
								<view class="item-price">{{data.goodsTotalPrice}}</view>
								<tui-numberbox :min="1" :max="data.limitQuantityBuy>0?data.limitQuantityBuy:999" :value="data.num" :index="data.limitQuantityBuy"
								 :custom="data.id" @change="change2"></tui-numberbox>
							</view>
						</view>
					</view>
				</view>
				<view class="card" v-for="(deleteData,j) in deleteAllData.cartGoodVoList" :key="j" v-if="isDelete">
					<view class="card-list">
						<image style="flex-shrink: 0; width: 34rpx; height: 34rpx;" :src="deleteData.goodsChecked==0?'../../static/image/icon_yes.png':'../../static/image/icon_no.png'"
						 mode="aspectFill" @tap="updateDelete(j)"></image>
						<image style="flex-shrink: 0; margin-left: 24rpx; border-radius: 12rpx; width: 170rpx; height: 170rpx;" :src="deleteData.goodsImg"
						 mode="aspectFill"></image>
						<view class="item-column">
							<view class="txt-name">{{deleteData.goodsSubtitle}}</view>
							<view class="txt-spec">{{deleteData.goodsSpecs}}</view>
							<view class="item-row">
								<view class="item-price">{{deleteData.goodsTotalPrice}}</view>
								<tui-numberbox :min="1" :max="deleteData.limitQuantityBuy>0?deleteData.limitQuantityBuy:999" :value="deleteData.num"
								 :index="deleteData.limitQuantityBuy" :custom="deleteData.id"></tui-numberbox>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom-view" v-if="!isDelete">
				<image @tap="setAllChecked(false)" v-if="AllData.allChecked" style="width: 34rpx; height: 34rpx;" src="../../static/image/icon_yes.png"
				 mode="aspectFill"></image>
				<image @tap="setAllChecked(true)" v-if="!AllData.allChecked" style="width: 34rpx; height: 34rpx;" src="../../static/image/icon_no.png"
				 mode="aspectFill"></image>
				<view class="b-all">全选</view>
				<view class="b-all-txt">总计:</view>
				<view class="b-all-price">¥{{AllData.cartTotalPrice}}</view>
				<view class="b-button" @tap="toDetail">去结算</view>
			</view>
			<view class="bottom-view" v-if="isDelete">
				<image style="width: 34rpx; height: 34rpx;" :src="deleteAllData.allChecked?'../../static/image/icon_yes.png':'../../static/image/icon_no.png'"
				 mode="aspectFill" @tap="upAllDelete"></image>
				<view class="b-all">全选</view>
				<view class="b-button" @tap="show2">删除</view>
			</view>
		</view>
		<view class="no-view" style="height:calc(80vh);" v-if="cartGoodVoList==null">
			<image src="../../static/image/img_zwgwc.png" mode="aspectFill" class="no-img"></image>
			<view class="no-txt">购物车暂无数据请先添加</view>
		</view>
		<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定删除该商品吗？" color="#333" :size="32"></tui-modal>

	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad() {
			this.getCartList();
			uni.$on(this.INFORMCHATUPGOODS, data => {
				this.getCartList();
			})
		},
		onUnload() {
			//这一步不去注销这个通知是因为当前页面的上一个页面也需要用到该通知
			// uni.$off(this.INFORMCHATUPGOODS);
		},
		data() {
			return {
				AllData: {},
				allChecked: false,
				cartGoodVoList: [],
				deleteAllData: {
					cartGoodVoList: [],
					allChecked: '',
				},
				isDelete: false,
				modal2: false,
				ids:'',//要删除的商品id
			}
		},
		onNavigationBarButtonTap(index) {
			this.isDelete = !this.isDelete;
		},
		methods: {
			show2() {
				this.ids = '';
				for (var i = 0; i < this.deleteAllData.cartGoodVoList.length; i++) {
					if (this.deleteAllData.cartGoodVoList[i].goodsChecked == 0) {
						this.ids += this.deleteAllData.cartGoodVoList[i].id + "-";
					}
				}
				this.ids = this.ids.substr(0, this.ids.length - 1); //删除字符串的最后一个字符
				console.log("要删除的商品id拼接");
				console.log(this.ids);
				if (this.$u.test.isEmpty(this.ids)) {
					this.$u.toast("请先选择要删除的商品");
					return;
				}
				this.modal2 = true;
			},
			hide2() {
				this.modal2 = false;
			},
			handleClick2(e) {
				let index = e.index;
				if (index === 0) {} else {
					this.toDelete();
				}
				this.hide2();
			},
			toDelete() {
				this.$u.get(this.cartDeleteUrl, {
					'ids': this.ids
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast("删除成功");
						uni.$emit(this.INFORMCHATGOODS, '');
						var nowData = res.data;
						this.deleteAllData.allChecked = false;
						this.deleteAllData.cartGoodVoList = [];
						for (var i = 0; i < nowData.cartGoodVoList.length; i++) {
							var cartGoodList = {
								"id": nowData.cartGoodVoList[i].id,
								"num": nowData.cartGoodVoList[i].num,
								"goodsName": nowData.cartGoodVoList[i].goodsName,
								"goodsSubtitle": nowData.cartGoodVoList[i].goodsSubtitle,
								"goodsImg": nowData.cartGoodVoList[i].goodsImg,
								"goodsPrice": nowData.cartGoodVoList[i].goodsPrice,
								"goodsTotalPrice": nowData.cartGoodVoList[i].goodsTotalPrice,
								"goodsStock": nowData.cartGoodVoList[i].goodsStock,
								"goodsChecked": 1,
								"goodsSpecs": nowData.cartGoodVoList[i].goodsSpecs,
								"limitQuantityBuy": nowData.cartGoodVoList[i].limitQuantityBuy
							}
							this.deleteAllData.cartGoodVoList.push(cartGoodList);
						}
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					} else if (ex.data.status == 4) {
						uni.$emit(this.INFORMCHATGOODS, '');
						this.cartGoodVoList = null;
					}
				})
			},
			upAllDelete() {
				this.deleteAllData.allChecked = !this.deleteAllData.allChecked;
				for (var i = 0; i < this.deleteAllData.cartGoodVoList.length; i++) {
					if (this.deleteAllData.allChecked) {
						this.deleteAllData.cartGoodVoList[i].goodsChecked = 0;
					} else {
						this.deleteAllData.cartGoodVoList[i].goodsChecked = 1;
					}
				}
			},
			updateDelete(index) {
				for (var i = 0; i < this.deleteAllData.cartGoodVoList.length; i++) {
					if (i == index) {
						let c = this.deleteAllData.cartGoodVoList[i].goodsChecked;
						if (c == 0) {
							this.deleteAllData.cartGoodVoList[i].goodsChecked = 1;
						} else if (c == 1) {
							this.deleteAllData.cartGoodVoList[i].goodsChecked = 0;
						}
					}
				}
				let sum = 0;
				for (var i = 0; i < this.deleteAllData.cartGoodVoList.length; i++) {
					if (this.deleteAllData.cartGoodVoList[i].goodsChecked == 0) {
						sum++;
					}
				}
				if (sum == this.deleteAllData.cartGoodVoList.length) {
					this.deleteAllData.allChecked = true;
				} else {
					this.deleteAllData.allChecked = false;
				}
			},
			toDetail() {
				let num=0;
				for (var i = 0; i < this.cartGoodVoList.length; i++) {
					if(this.cartGoodVoList[i].goodsChecked==0){
						num++;
					}
				}
				if(num==0){
					this.$u.toast("请先选择要结算的商品");
					return;
				}
				this.$u.get(this.orderCartCreateUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						uni.navigateTo({
							url: "../shop-confirm/shop-confirm?type=1&orderNo=" + res.data
						})
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			setAllChecked(Checked) {
				var me = this;
				this.$u.get(this.cartSelectAllUrl, {
					'allChecked': Checked
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						me.AllData = res.data;
						me.cartGoodVoList = res.data.cartGoodVoList
					}
				})
			},
			getCartList() {
				this.$u.get(this.cartListUrl).then(res => {
					var nowData = res.data;

					this.AllData = nowData;
					this.cartGoodVoList = nowData.cartGoodVoList;

					this.deleteAllData.allChecked = false;
					this.deleteAllData.cartGoodVoList = [];
					for (var i = 0; i < nowData.cartGoodVoList.length; i++) {
						var cartGoodList = {
							"id": nowData.cartGoodVoList[i].id,
							"num": nowData.cartGoodVoList[i].num,
							"goodsName": nowData.cartGoodVoList[i].goodsName,
							"goodsSubtitle": nowData.cartGoodVoList[i].goodsSubtitle,
							"goodsImg": nowData.cartGoodVoList[i].goodsImg,
							"goodsPrice": nowData.cartGoodVoList[i].goodsPrice,
							"goodsTotalPrice": nowData.cartGoodVoList[i].goodsTotalPrice,
							"goodsStock": nowData.cartGoodVoList[i].goodsStock,
							"goodsChecked": 1,
							"goodsSpecs": nowData.cartGoodVoList[i].goodsSpecs,
							"limitQuantityBuy": nowData.cartGoodVoList[i].limitQuantityBuy
						}
						this.deleteAllData.cartGoodVoList.push(cartGoodList);
					}
				}).catch(ex => {
					//进来页面后初始是不会走到当前无数据的状态
					//购物车提交订单后无数据状态 
					// 不可navigateBack 只能展示购物车无数据 提醒用户重新添加商品
					if (ex.data.status == 4) {
						this.cartGoodVoList = null;
					}
				})
			},
			change2: function(e) {
				var me = this;
				var num = e.value;
				var index = e.index;
				if (index > 0 && num > index) {
					this.$u.toast("该商品限购数量为" + index);
				} else {
					this.$u.post(this.cartUpdateUrl, {
						'cartId': e.custom,
						'num': num
					}).then(res => {
						console.log(res)
						if (res.status == 0) {
							me.AllData = res.data;
							me.cartGoodVoList = res.data.cartGoodVoList;
						}
					})
				}
			},
			checkSel(id) {
				var me = this;
				this.$u.get(this.cartSelectUrl, {
					'id': id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						me.AllData = res.data;
						me.cartGoodVoList = res.data.cartGoodVoList
					}
				})
			}
		}
	}
</script>

<style>
	@import url("shop-cart.css");
</style>
