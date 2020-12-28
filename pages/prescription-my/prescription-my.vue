<!-- 我的-我的处方 -->
<template>
	<view>
		<myh5></myh5>
		<view class="f6f6f6">
			<load-refresh v-if="caseList!=null" ref="loadRefresh" :isRefresh="true" :refreshTime="800" :backgroundCover="'#f9f9f9'"
			 :heightReduce="10" :pageNo="pageNum" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
				<view slot="content-list">
					<view class="card" v-for="(data,index) in caseList" :key="index">
						<view class="card-row" @tap="toDoctorDetail(data.docId)">
							<image class="imag" mode="aspectFill" :src="data.docAvatar+'?x-oss-process=image/resize,l_100'" style="border-radius: 100rpx; width: 120rpx; height: 120rpx; background-color: #000000;"></image>
							<view class="card-row-column">
								<view class="title-row">
									<view :class="data.state==2?'txt-name-2':'txt-name'">{{data.docName}}</view>
									<view :class="data.state==2?'txt-zw-2':'txt-zw'">{{data.docTitle}}</view>
									<view class="txt-is-xd">{{data.stateDesc}}</view>
								</view>
								<view class="txt-time">{{data.createTime}}</view>
							</view>
						</view>

						<view class="card-div">
							<view class="view-type-med">{{data.medType}}</view>
							<view class="div-row">
								<view :class="data.state==2?'txt-title-2':'txt-title'">【处&#12288;方】</view>
								<view :class="data.state==2?'txt-title-detail-2':'txt-title-detail'">{{data.symptom}}</view>
							</view>
							<view class="div-row" style="margin-top: 0rpx;" v-if="data.patientName!=null">
								<view :class="data.state==2?'txt-title-2':'txt-title'">【就诊人】</view>
								<view :class="data.state==2?'txt-title-detail-2':'txt-title-detail'">{{data.patientName}}</view>
							</view>
						</view>

						<view class="card-bottom-row">
							<image mode="aspectFill" style="width: 40rpx; height: 34rpx;" src="../../static/image/list_icon_lx.png"></image>
							<view class="txt-call" @tap="toChat(data.docName,data.docId,data.docAvatar)">联系医生</view>
							<view class="txt-detail-1" v-if="data.state==0" @tap="toPay(data.id)">去下单</view>
							<view class="txt-detail" v-if="data.state==1" @tap="toDetail(data.orderId)">查看详情</view>
							<view class="txt-state-2" v-if="data.state==2">请联系医生重新开具</view>
						</view>
					</view>
				</view>
			</load-refresh>

			<view v-if="caseList==null" class="no-column">
				<image style="width: 110rpx; height: 110rpx;" src="../../static/image/img_zwcf.png" mode="aspectFill"></image>
				<view>暂无处方记录</view>
			</view>
			<!-- 自定义弹窗 -->
			<!--  @cancel="handleClick()" 点击空白地方的事件 -->
			<tui-modal padding="1" :show="modal" :custom="true">
				<view class="card-top">
					<view class="top-gh">说明</view>
					<image @tap="handleClick()" class="dele" style="width: 40rpx; height: 40rpx;" src="../../static/image/delete.png"
					 mode="aspectFill"></image>
				</view>
				<view class="card-bottom">
					<view class="bottom-title">每张处方仅限下单购买一次,下单付款之后诊所会同步收到处方信息进行调配发货。默认顺丰快递，如有疑问请联系相应诊所。</view>
				</view>
			</tui-modal>
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
			this.getList();
			//更换就诊人
			uni.$on(this.PRESCRIPTIONPATIENTT, data => {
				this.getList();
			});
		},
		onUnload() {
			uni.$off(this.PRESCRIPTIONPATIENTT)
		},
		data() {
			return {
				modal: false,
				caseList: '',
				pageNum: 1,
				totalPage: 0,
			}
		},
		onNavigationBarButtonTap(index) {
			this.modal = true;
		},
		methods: {
			//医生详情
			toDoctorDetail(docid) {
				uni.navigateTo({
					url: "../attention-doctor/attention-doctor?docId=" + docid
				})
			},
			//跳转聊天
			toChat(name, account, img) {
				uni.navigateTo({
					url: "../chat/chat?name=" + name + "&account=doc_" + account + "&img=" + encodeURIComponent(JSON.stringify(img))
				})
			},
			toPay(id) {
				uni.navigateTo({
					url: "../prescription-submit-cen/prescription-submit-cen?caseId=" + id
				})
			},
			toDetail(orderId) {
				uni.navigateTo({
					url: "../order-details/order-details?id=" + orderId
				})
			},
			handleClick() {
				this.modal = false;
			},

			//上划加载更多
			loadMore() {
				this.pageNum += 1;
				this.$u.get(this.caseListUrl,{
					'pageNum':this.pageNum
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						for (var i = 0; i < res.data.length; i++) {
							this.caseList.push(res.data[i]);
						}
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			// 下拉刷新数据列表
			refresh() {
				this.pageNum = 1;
				this.getList();
			},
			getList() {
				var me=this;
				uni.showLoading();
				this.$u.get(me.caseListUrl,{
					'pageNum':me.pageNum
				}).then(res => {
					console.log(res)
					uni.hideLoading();
					if (res.status == 0) {
						me.caseList = res.data;
						me.totalPage = Number(res.msg);
					}
				}).catch(ex => {
					uni.hideLoading();
					if (ex.data.status == 4) {
						me.caseList = null;
					}
				})
			},
		}
	}
</script>

<style>
	@import url("prescription-my.css");
</style>
