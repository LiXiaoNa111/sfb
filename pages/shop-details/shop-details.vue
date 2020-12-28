<template>
	<view class="column">
		<myh5></myh5>
		<!-- #ifdef MP-WEIXIN -->
		<view class="top-row1">
			<view class="view-grow"></view>
			<button class="shape-view" open-type="share">
				<image class="shape-img" src="../../static/image/nav_icon_fx.png" mode="widthFix"></image>
			</button>
		</view>
		<!-- #endif -->
		<view class="view-img">
			<swiper class="swiper-itema" autoplay="true" indicator-dots="true">
				<swiper-item v-for="(banner,index) in detailImgList" :key="index">
					<image style=" width: 100%; height: 600rpx;" :src="banner" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 置顶 -->
		<view class="shop-zd-view" @tap="tapIcon">
			<image class="shop-zd-img" src="../../static/image/icon_zd.png" mode="aspectFill"></image>
		</view>
		
		<!-- 服务标签 -->
		<view class="view-label" v-if="shopDetail.serviceLabels!=null">
			<view class="view-label-row" v-for="(label,index) in shopDetail.serviceLabels" :key="index">
				<image class="label-img" src="../../static/image/icon_bx.png" mode="aspectFill"></image>
				<view class="label-txt">{{label}}</view>
			</view>
		</view>
		<!-- 产品信息 -->
		<view class="view-title">
			<view class="txt-price" v-if="shopDetail.priceArea==null">¥{{shopDetail.price}}</view>
			<view class="txt-price" v-if="shopDetail.priceArea!=null">¥{{shopDetail.priceArea}}</view>
			<view class="txt-title">{{shopDetail.name}}</view>
			<view class="txt-subtitle">{{shopDetail.subTitle}}</view>
			<view class="txt-subtitle" v-if="shopDetail.isDrug==0 && shopDetail.drugParameter.approveNumber!=null">批准文号:{{shopDetail.drugParameter.approveNumber}}</view>
			<view class="view-remind" v-if="shopDetail.isOtc==0">本产品为处方药，预约需医生处方</view>
		</view>

		<view class="ten-line" v-if="shopDetail.isDrug==0"></view>
		<view class="view-row" @tap="shopPopup" v-if="shopDetail.isDrug==0">
			<view class="txt-spec">产品参数</view>
			<view class="txt-shop-parameter">通用名称、批准文号、成分等</view>
			<image style="flex-shrink: 0; width: 40rpx; height: 40rpx;" src="../../static/image/icon_more.png"></image>
		</view>

		<view class="ten-line"></view>
		<view class="view-detail">
			<view class="view-detail-row">
				<view class="line-b"></view>
				<view class="txt-detail">产品详情</view>
				<view class="line-b"></view>
			</view>
			<!-- <rich-text v-if="shopDetail.isDrug==0" :nodes="shopDetail.drugParameter.detail"></rich-text>
			<rich-text v-if="shopDetail.isDrug==1" :nodes="shopDetail.goodsDetail.detail"></rich-text> -->
			<jyf-parser v-if="shopDetail.isDrug==0" :html="shopDetail.drugParameter.detail" ref="article"></jyf-parser>
			<jyf-parser v-if="shopDetail.isDrug==1" :html="shopDetail.goodsDetail.detail" ref="article"></jyf-parser>
		</view>
		<view class="ten-line"></view>

		<view style="width: 100%; height: 100rpx;"></view>

		<view class="view-bottom-column" v-if="shopDetail.isOtc==0">
			<view class="line"></view>
			<view class="view-bottom">
				<view class="tui-badge-item">
					<image @tap="toNeed" style="width: 76rpx; height: 76rpx;" src="../../static/image/tab_icon_xqd.png" mode="aspectFill"></image>
					<tui-badge v-if="needCount>0" type="danger" absolute :scaleRatio="0.8" translateX="40%" right="0rpx" top="-10rpx">{{needCount}}</tui-badge>
				</view>
				<view class="txt-bottom"></view>
				<view class="button-add" @tap="needPopup">加入需求单</view>
			</view>
		</view>

		<view class="view-bottom-column" v-if="shopDetail.isOtc==1">
			<view class="line"></view>
			<view class="view-bottom">
				<view class="tui-badge-item">
					<image @tap="toCart" style="width: 76rpx; height: 76rpx;" src="../../static/image/tab_icon_gwc.png" mode="aspectFill"></image>
					<tui-badge v-if="allNum>0" type="danger" absolute :scaleRatio="0.8" translateX="40%" right="0rpx" top="-10rpx">{{allNum}}</tui-badge>
				</view>

				<view class="txt-bottom"></view>
				<view class="button-add-shop" @tap="checkTypePopup(1)">加入购物车</view>
				<view class="button-pay" @tap="checkTypePopup(2)">立即购买</view>
			</view>
		</view>

		<!-- 底部弹出产品参数 -->
		<tui-bottom-popup :show="shopShow" @close="shopPopup" v-if="shopDetail.isDrug==0">
			<view class="tui-share">
				<view class="p-title">产品参数</view>
				<view class="line"></view>
				<scroll-view scroll-y="true" style="height: 600rpx;overflow: scroll;">
					<view class="fd">
						<view class="p-row" v-if="shopDetail.drugParameter.goodsName!=null">
							<view class="p-txt1">商品名称</view>
							<view class="p-txt2">{{shopDetail.drugParameter.goodsName}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.commonName!=null">
							<view class="p-txt1">通用名称</view>
							<view class="p-txt2">{{shopDetail.drugParameter.commonName}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.composition!=null">
							<view class="p-txt1">成&emsp;&emsp;分</view>
							<view class="p-txt2">{{shopDetail.drugParameter.composition}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.character!=null">
							<view class="p-txt1">性&emsp;&emsp;状</view>
							<view class="p-txt2">{{shopDetail.drugParameter.character}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.spec!=null">
							<view class="p-txt1">规&emsp;&emsp;格</view>
							<view class="p-txt2">{{shopDetail.drugParameter.spec}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.factory!=null">
							<view class="p-txt1">品&emsp;&emsp;牌</view>
							<view class="p-txt2">{{shopDetail.drugParameter.factory}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.factory!=null">
							<view class="p-txt1">生产厂家</view>
							<view class="p-txt2">{{shopDetail.drugParameter.factory}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.abstain!=null">
							<view class="p-txt1">禁&emsp;&emsp;忌</view>
							<view class="p-txt2">{{shopDetail.drugParameter.abstain}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.adrs!=null">
							<view class="p-txt1">不良反应</view>
							<view class="p-txt2">{{shopDetail.drugParameter.adrs}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.note!=null">
							<view class="p-txt1">注意事项</view>
							<view class="p-txt2">{{shopDetail.drugParameter.note}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.indication!=null">
							<view class="p-txt1">适&ensp;应&ensp;症</view>
							<view class="p-txt2">{{shopDetail.drugParameter.indication}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.unit!=null">
							<view class="p-txt1">单&emsp;&emsp;位</view>
							<view class="p-txt2">{{shopDetail.drugParameter.unit}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.banking!=null">
							<view class="p-txt1">贮存方式</view>
							<view class="p-txt2">{{shopDetail.drugParameter.banking}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.dosage!=null">
							<view class="p-txt1">用法用量</view>
							<view class="p-txt2">{{shopDetail.drugParameter.dosage}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.approveNumber!=null">
							<view class="p-txt1">批准文号</view>
							<view class="p-txt2">{{shopDetail.drugParameter.approveNumber}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.expire!=null">
							<view class="p-txt1">有&ensp;效&ensp;期</view>
							<view class="p-txt2">{{shopDetail.drugParameter.expire}}</view>
						</view>
						<view class="p-row" v-if="shopDetail.drugParameter.drugInteractions!=null">
							<view class="p-txt1">药物相互作用</view>
							<view class="p-txt2">{{shopDetail.drugParameter.drugInteractions}}</view>
						</view>
					</view>
				</scroll-view>
				<view class="p-view">
					<view class="p-button" @tap="shopPopup">知道了</view>
				</view>
			</view>
		</tui-bottom-popup>

		<!--底部加入购物车弹窗-->
		<tui-bottom-popup :show="popupShow" @close="popup" v-if="shopDetail.isOtc==1">
			<view class="tui-share add-view">
				<view class="add-price">¥{{noGrugPrice}}</view>
				<!-- <view class="add-price" v-if="shopDetail.priceArea!=null">¥{{shopDetail.priceArea}}</view> -->
				<view class="add-stock">库存{{noGrugStock}}</view>
				<view class="add-sel">{{noSelected}}</view>
				<!-- 单规格 -->
				<view class="view-title2">
					<view class="txt-spec">规格</view>
					<view class="view-spec" v-if="shopDetail.isDrug==0">{{shopDetail.drugParameter.spec}}</view>
					<!-- 商品 多规格 多库存 {{data.spec}}-->
					<view style="display: flex; flex-wrap: wrap;" v-if="shopDetail.isDrug==1">
						<view v-for="(goodsSpeck,j) in shopDetail.goodsSpecStockList" :key="j" @tap="upNoDrugSpec(goodsSpeck)" :class="noGrugId==goodsSpeck.id?'view-spec':'view-spec-no'">
							{{goodsSpeck.specsStr}}</view>
					</view>
				</view>
				<view class="add-line"></view>
				<view class="add-row">
					<view class="add-txt-num">购买数量</view>
					<tui-numberbox :min="1" v-if="shopDetail.isDrug==0" :max="shopDetail.drugParameter.stock>0?shopDetail.drugParameter.stock:999"
					 :value="shopNum" @change="change2"></tui-numberbox>
					<tui-numberbox :min="1" v-if="shopDetail.isDrug==1" :max="noGrugStock>0?noGrugStock:999" :value="shopNum" @change="change2"></tui-numberbox>
				</view>
				<view class="p-view">
					<view class="p-button" @tap="checkCartBuy">确定</view>
				</view>
			</view>
		</tui-bottom-popup>

		<!--底部加入需求单弹窗-->
		<tui-bottom-popup :show="needShow" @close="needPopup">
			<view class="tui-share add-view">
				<view class="add-price">¥{{shopDetail.priceArea}}</view>
				<view class="add-row">
					<view class="add-txt-num">购买数量</view>
					<tui-numberbox :min="1" :max="999" :value="needNum" @change="changeNeed"></tui-numberbox>
				</view>
				<view class="p-view">
					<view class="p-button" @tap="addNeed">确定</view>
				</view>
			</view>
		</tui-bottom-popup>

	</view>
</template>

<script>
	import jyfParser from "@/components/jyf-parser/jyf-parser.vue";
	import myh5 from "../myh5/myh5";
	export default {
		components: {
			myh5,
			jyfParser
		},
		onLoad(option) {

			this.islogin = uni.getStorageSync(this.ISLOGIN);

			this.goodsId = option.id;
			console.log("商品id：" + this.goodsId);
			this.getGoodsDetailData();

			if (this.islogin) {
				this.getAllCountNum();
				this.getNeedCount();
			}

			//更新登录状态
			uni.$on(this.INFORMLOGIN, data => {
				this.islogin = uni.getStorageSync(this.ISLOGIN);
			});
			uni.$on(this.INFORMNEEDCOUNT, data => {
				this.getNeedCount();
			})
			uni.$on(this.INFORMCHATGOODS, data => {
				console.log("接受到更新购物车数量更新");
				this.getAllCountNum();
			})
			uni.$on(this.INFORMCHATUPGOODS, data => {
				this.getAllCountNum();
			})
			uni.$on(this.SUBMITNEED, data => {
				this.getNeedCount();
			})
			console.log(uni.getStorageSync('token'));

		},
		onUnload() {
			uni.$off(this.INFORMNEEDCOUNT);
			uni.$off(this.INFORMCHATUPGOODS);
			uni.$off(this.SUBMITNEED);
		},
		onNavigationBarButtonTap(){
			this.goShare();
		},
		//微信小程序分享
		onShareAppMessage: function() {
			return {
				title: this.shopDetail.name,
				imageUrl: this.shopDetail.img,
				path: "/pages/shop-details/shop-details?id=" + this.shopDetail.id
			}
		},
		data() {
			return {
				islogin: '', //是否登录
				goodsId: 0,
				allNum: 0, //购物车产品数量
				needCount: 0, //需求单产品数量
				shopDetail: [],
				detailImgList: [],
				shopShow: false,
				popupShow: false,
				shopNum: 1, //商品数量 otc为1 
				addShopType: '', //标识1加购物车还是2立即购买 
				needShow: false,
				needNum: 1,
				//otc为1 grug为1 商品(多规格)
				noSelected: '', //已选中规格文字
				noAttributeVos: '', //选中规格
				noGrugStock: '', //库存
				noGrugPrice: '', //价格
				noGrugId: '', //商品规格id
			}
		},
		methods: {
			tapIcon(e) {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 150
				});
			},
			goShare() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: this.shopDetailPath + this.shopDetail.id,
					title: this.shopDetail.name,
					summary: this.shopDetail.subTitle,
					imageUrl: this.shopDetail.img,
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			},
			addNeed() {
				this.needPopup();
				if (!this.islogin) {
					// #ifndef MP-WEIXIN
					uni.navigateTo({
						url: "../welcome/login/login"
					})
					// #endif
					// #ifdef MP-WEIXIN
					uni.navigateTo({
						url: "../welcome/wx-authorization/wx-authorization"
					})
					// #endif
					return;
				}
				this.$u.get(this.needAddUrl, {
					'goodsId': this.shopDetail.id,
					'num': this.needNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast(res.msg);
						this.getNeedCount();
					}
				})
			},
			needPopup() {
				this.needShow = !this.needShow;
			},
			checkTypePopup(type) {
				this.addShopType = type;
				this.popup();
			},
			popup() {
				this.popupShow = !this.popupShow;
			},
			shopPopup() {
				this.shopShow = !this.shopShow;
			},
			checkCartBuy() {
				this.popup();
				if (!this.islogin) {
					// #ifndef MP-WEIXIN
					uni.navigateTo({
						url: "../welcome/login/login"
					})
					// #endif
					// #ifdef MP-WEIXIN
					uni.navigateTo({
						url: "../welcome/wx-authorization/wx-authorization"
					})
					// #endif
					return;
				}
				if (this.addShopType == 1) {
					this.addCart();
				} else if (this.addShopType == 2) {
					this.buyNow();
				}
			},
			buyNow() {
				this.$u.get(this.orderGoodsCreateUrl, {
					'goodsId': this.shopDetail.id,
					'goodsSpecId': this.noGrugId,
					'num': this.shopNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						uni.navigateTo({
							url: "../shop-confirm/shop-confirm?type=2&orderNo=" + res.msg
						})
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			addCart() {
				console.log("添加购物车");
				console.log(this.shopDetail.id);
				console.log(this.noGrugId);
				console.log(this.shopNum);
				this.$u.get(this.cartAddUrl, {
					'goodsId': this.shopDetail.id,
					'goodsSpecStockId': this.noGrugId,
					'num': this.shopNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.$u.toast("添加成功");
						this.getAllCountNum();
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						this.$u.toast(ex.data.msg);
					}
				})
			},
			change2: function(e) {
				this.shopNum = e.value;
			},
			changeNeed: function(e) {
				this.needNum = e.value;
			},
			getAllCountNum() {
				this.$u.get(this.cartCountUrl).then(res => {
					console.log("商品总数");
					console.log(res.data);
					this.allNum = res.data;
				})
			},
			getNeedCount() {
				this.$u.get(this.needCountUrl, {}).then(res => {
					console.log("需求单总数" + res.data);
					console.log(res)
					if (res.status == 0) {
						this.needCount = res.data;
					}
				})
			},
			toNeed() {
				if (this.needCount == 0) {
					this.$u.toast("需求单暂无数据请先添加");
					return;
				}
				uni.navigateTo({
					url: "../need-list/need-list"
				})
			},
			toCart() {
				if (this.allNum == 0) {
					this.$u.toast("暂无数据请先添加");
					return;
				}
				uni.navigateTo({
					url: "../shop-cart/shop-cart"
				})
			},
			goBack() {
				uni.navigateBack();
			},
			getGoodsDetailData() {
				uni.showLoading();
				this.$u.get(this.goodsDetailUrl, {
					'goodsId': this.goodsId
				}).then(res => {
					this.shopDetail = res.data;
					uni.hideLoading();
					if (this.shopDetail.isDrug == 0) {
						this.detailImgList = this.shopDetail.drugParameter.subImg.split(",");
						this.noSelected = "已选:" + this.shopDetail.drugParameter.spec;
						this.noGrugStock = this.shopDetail.drugParameter.stock;
						if (this.shopDetail.priceArea != null) {
							this.noGrugPrice = this.shopDetail.priceArea
						} else {
							this.noGrugPrice = this.shopDetail.price;
						}
					} else if (this.shopDetail.isDrug == 1) {
						this.detailImgList = res.data.goodsDetail.subImg.split(",");
					}
					if (this.shopDetail.isOtc == 1 && this.shopDetail.isDrug == 1) {
						this.noAttributeVos = this.shopDetail.goodsSpecStockList[0];
						this.ddd();
					}
				}).catch(ex => {
					uni.hideLoading();
					this.$u.toast(ex.data.msg);
				})
			},
			// 商品 选择规格
			upNoDrugSpec(data) {
				this.noAttributeVos = data;
				this.ddd();
			},
			ddd() {
				this.noSelected = "已选:" + this.noAttributeVos.specsStr;
				this.noGrugStock = this.noAttributeVos.stock;
				this.noGrugPrice = this.noAttributeVos.price;
				this.noGrugId = this.noAttributeVos.id;
			}
		}
	}
</script>

<style>
	@import url("shop-details.css");
</style>
