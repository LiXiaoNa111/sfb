<template>
	<view>
		<myh5></myh5>
		<view class="view">
			<view class="card" v-if="cartGoodVoList!=null" v-for="(data,index) in cartGoodVoList" :key="index">
				<view class="card-list">
					<image class="img" :src="data.img" mode="aspectFill"></image>
					<view class="item-column">
						<view class="txt-name">{{data.subTitle}}</view>
						<view class="txt-spec">{{data.spec}}</view>
						<view class="item-row">
							<view class="item-price">¥{{data.price}}</view>
							<tui-numberbox :min="1" :max="999" :value="data.num" :custom="data.id" @change="change2"></tui-numberbox>
						</view>
						<image @tap="show2(data.id)" class="delete-view" style="width: 40rpx; height: 40rpx;" src="../../static/image/delete.png"
						 mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view style=" width: 100%;height: calc(100vh); background-color: #F9F9F9; display: flex; flex-direction: column;justify-content: center;align-items: center;" v-if="cartGoodVoList==null">
				<image src="../../static/image/img_zwxqd.png" mode="aspectFill" class="no-img"></image>
				<view class="no-txt">暂无需求单,请先添加</view>
			</view>

			<view style="height: 200rpx; background-color: #0062CC;"></view>
			<view class="bottom-view">
				<view class="b-all-txt">总计:</view>
				<view class="b-all-price" v-if="cartGoodVoList!=null">¥{{AllData.totalPrice}}</view>
				<view class="b-all-price" v-if="cartGoodVoList==null">¥0</view>
				<view class="b-button" @tap="toNeed">提交需求</view>
			</view>

			<!-- 删除提醒 -->
			<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定删除该需求单吗？" color="#333" :size="32"></tui-modal>
		</view>
	</view>
</template>

<script>
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5
		},
		onLoad() {
			this.getNeedList();
			this.isSf = uni.getStorageSync(this.ISID);
			//由于上个页面（商品详情页还需要改通知，所以这个地方就不用注销掉通知）
			uni.$on(this.SUBMITNEED,data=>{
				console.log("通知更新需求单列表");
				this.getNeedList();
			})
		},
		onShow() {
			this.isSf = uni.getStorageSync(this.ISID);
		},
		data() {
			return {
				AllData: {},
				allChecked: false,
				cartGoodVoList: [],
				modal2: false,
				nowId: '',
				isSf: '',
			}
		},
		onNavigationBarButtonTap(index) {
			uni.navigateTo({
				url: "../need-record/need-record"
			})
		},
		methods: {
			show2(id) {
				this.nowId = id;
				this.modal2 = true;
			},
			hide2() {
				this.modal2 = false;
			},
			handleClick2(e) {
				let index = e.index;
				if (index === 0) {
					// this.$u.toast("取消");
				} else {
					this.deleteItem();
				}
				this.hide2();
			},
			toNeed() {
				if (this.isSf) {
					uni.navigateTo({
						url: "../need-up/need-up"
					})
				} else {
					this.$u.toast("请先进行身份认证");
					setTimeout(() => {
						uni.navigateTo({
							url: "../../ApagesA/authentication/authentication?type=5"
						})
					}, 500)
				}
			},
			deleteItem() {
				var me = this;
				this.$u.get(this.needDeleteUrl, {
					'id': this.nowId
				}).then(res => {
					console.log("删除成功");
					console.log(res);
					this.$u.toast("删除成功");
					if (res.status == 0) {
						me.AllData = res.data;
						me.cartGoodVoList = res.data.needFormDetailVoList
					}
				}).catch(ex => {
					if (ex.data.status == 4) {
						uni.$emit(me.INFORMNEEDCOUNT);
						this.$u.toast("当前无需求单，请先添加");
						setTimeout(() => {
							uni.navigateBack();
						}, 1000);
					}
				})
			},
			getNeedList() {
				this.$u.get(this.needListUrl).then(res => {
					this.AllData = res.data;
					this.cartGoodVoList = res.data.needFormDetailVoList
				}).catch(ex=>{
					this.cartGoodVoList=null;
				})
			},
			change2: function(e) {
				var me = this;
				var num = e.value;
				console.log("数量");
				console.log(num);
				var index = e.index;
				this.$u.post(this.needUpdateUrl, {
					'needFormDetailId': e.custom,
					'num': num
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						me.AllData = res.data;
						me.cartGoodVoList = res.data.needFormDetailVoList;
					}
				})
			},
		}
	}
</script>

<style>
	@import url("need-list.css");
</style>
