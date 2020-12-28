<template>
	<view style="height: calc(100vh);display: flex;flex-direction: column;">

		<!-- #ifdef APP-PLUS -->
		<view class="status_bar" style="flex-shrink: 0;">
			<!-- 自适应状态栏 这里是状态栏 -->
		</view>
		<!-- #endif -->
		<view class="view-top-find" style="flex-shrink: 0;">
			<view class="back-view" @tap="back">
				<image style="width: 18rpx;height: 32rpx;margin-left: 24rpx;margin-right: 12rpx;" src="../../static/image/icon_back.png"
				 mode="aspectFill"></image>
				<view class="top-title-find">找医生</view>
			</view>
			<view class="top-button">
				<image style="width: 36rpx; height: 36rpx;" src="../../static/image/nav_button_search.png" mode="aspectFill"></image>
				<input class="input-search" type="text" placeholder="输入症状/医师姓名进行搜索" @confirm="confirm" @blur="textareaFocus"
				 v-model="search"></input>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav" style="flex-shrink: 0;" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in nameSortList" :key="index"
			 @tap="tabSelect" :data-id="index">
				{{item.departmentName}}
			</view>
		</scroll-view>

		<view style="height: 24rpx;flex-shrink: 0;"></view>
		<u-swiper style="flex-shrink: 0;" v-if="imgList!=null" :list="imgList" :effect3d=true name="imgUrl" bgColor="#ffffff"
		 @click="selectedBanner"></u-swiper>
		<view style="height: 24rpx;flex-shrink: 0;"></view>

		<view style="flex-grow: 1; overflow: scroll;display: flex;flex-direction: column;">

			<load-refresh v-if="findDoctorList!=null" ref="loadRefresh" :isRefresh="true" :refreshTime="800" :backgroundCover="'#f9f9f9'"
			 :pageNo="pageNum" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">

				<view slot="content-list">

					<view class="my-card" v-for="(doctor,index) in findDoctorList " :key="index">
						<view class="doctor-item">
							<image class="grow" mode="aspectFill" :src="doctor.avatar!=null?doctor.avatar+'?x-oss-process=image/resize,l_150':'../../static/image/icon_tx.png' "></image>
							<view class="item-column">
								<view class="item-row1">
									<view class="doctor-name" v-if="doctor.name!=null">{{doctor.name}}</view>
									<view class="doctor-department" v-if="doctor.department!=null">{{doctor.department}}</view>
									<view class="doctor-title" v-if="doctor.title!=null">{{doctor.title}}</view>
									<view class="doctor-have" v-if="doctor.state==0">有号</view>
									<view class="doctor-no-have" v-if="doctor.state==1">没号</view>
								</view>
								<view class="txt-doc">{{doctor.hospital}}</view>
							
								<view class="txt-sc-string" v-if="doctor.label.length">擅长:{{doctor.label.join('、')}}</view>
								
								<!-- <view class="">
									<view class="">擅长：</view>
									
								</view> -->
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
				</view>
			</load-refresh>

			<view v-if="findDoctorList==null" class="column">
				<image style="width: 110rpx; height: 110rpx;" src="../../static/image/img_zwgh.png" mode="aspectFill"></image>
				<view class="">暂没发现医生</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getSortList();
			this.getMsgData();
			this.getFindDoctorData();
		},
		data() {
			return {
				search: '', //搜索
				TabCur: 0,
				scrollLeft: 0,
				nameSortList: [],
				department: '',
				imgList: [],
				findDoctorList: '', //发现医生列表
				myDocLabelList: [], //标签列表
				pageNum: 1,
				totalPage: 0,
			}
		},
		methods: {
			// 下拉刷新数据列表
			refresh() {
				this.pageNum = 1;
				this.getFindDoctorData();
			},
			// 上划加载更多
			loadMore() {
				console.log("加载更多");
				this.pageNum += 1;
				var dd = "";
				if (this.department != "全部") {
					dd = this.department
				}
				this.$u.get(this.doctorListUrl, {
					department: dd,
					key: this.search,
					pageNum: this.pageNum
				}).then(res => {
					if (res.status == 0) {
						console.log("发现医生列表");
						console.log(res.data)
						for (var i = 0; i < res.data.list.length; i++) {
							this.findDoctorList.push(res.data.list[i]);
						}
						console.log(this.findDoctorList)
						this.ddd(res.data.list);
						this.$refs.loadRefresh.loadOver();
					}
				})
			},
			back() {
				uni.navigateBack();
			},
			selectedBanner(index) {
				console.log("点击" + index);
				var item = this.imgList[index];
				console.log(item);
				uni.navigateTo({
					url: "/pages/diagnosis/banner-detail?id=" + item.id + "&imgDescribe=" + item.imgDescribe + "&type=" + item.type
				})
			},
			//跳转携带参数
			toDetail(doctorId, price) {
				uni.navigateTo({
					url: '/pages/registrstion-details/registrstion-details?doctorId=' + doctorId + "&price=" + price,
				});
			},
			//跳转聊天
			toChat(name, account, img) {
				uni.navigateTo({
					url: "/pages/chat/chat?name=" + name + "&account=doc_" + account + "&img=" + encodeURIComponent(JSON.stringify(
						img))
				})
			},
			getFindDoctorData() {
				this.myDocLabelList = [];
				this.findDoctorList = [];
				var dd = "";
				if (this.department != "全部") {
					dd = this.department
				}
				this.$u.get(this.doctorListUrl, {
					department: dd,
					key: this.search,
					pageNum: this.pageNum
				}).then(res => {
					if (res.status == 0) {
						console.log("发现医生列表");
						console.log(res.data)
						this.findDoctorList = res.data.list;
						console.log(this.findDoctorList)
						this.totalPage = Number(res.data.pages);
						this.ddd(res.data.list);
					}
				}).catch(ex => {
					this.findDoctorList = null;
				})
			},
			ddd(data) {
				for (let i = 0;i<data.length;i++) {
					data[i].label = []
					if (data[i].docLabelList.length) {
						for (let n = 0;n<data[i].docLabelList.length;n++) {
							data[i].label.push(data[i].docLabelList[n].labelName)
						}
					}
		
				}
			},
			//获取顶部轮播数据
			getMsgData() {
				this.$u.get(this.imgListUrl, {
					imgType: 5
				}).then(res => {
					console.log("轮播");
					console.log(res)
					if (res.status == 0) {
						this.imgList = res.data;
					}
				}).catch(ex => {
					this.imgList = null;
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.department = this.nameSortList[this.TabCur].departmentName;
				this.getFindDoctorData();
			},
			confirm() {
				console.log("去搜所");
				console.log(this.search);
				this.getFindDoctorData();
			},
			textareaFocus() {
				console.log("失去焦点");
				if (this.$u.test.isEmpty(this.search)) {
					this.search = "";
					this.getFindDoctorData();
				}
			},
			getSortList() {
				this.$u.get(this.departmentSortListUrl).then(res => {
					var so = [{
						"id": 0,
						"departmentName": "全部"
					}]
					this.nameSortList = so.concat(res.data);
					this.department = this.nameSortList[0].departmentName;
				})
			},
		}
	}
</script>

<style>
	@import url("registrstion-page.css");
</style>
