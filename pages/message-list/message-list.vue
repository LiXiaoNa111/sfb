<!-- 消息列表 -->
<template>
	<view>
		<myh5></myh5>
		<view class="line"></view>
		<view class="item-view" v-if="helpData!=null">
			<view class="tui-badge-item">
				<image style="width: 72rpx; height: 72rpx;" src="../../static/image/logo.png" mode="aspectFill"></image>
				<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="70%" right="10rpx" top="-15rpx" v-if="helpData.noRead!=0">{{helpData.noRead}}</tui-badge>
			</view>
			<view class="column" @tap="toHelper()">
				<view class="sub-row">
					<view class="txt-title">尚方宝助手</view>
					<view class="txt-time">{{helpData.time}}</view>
				</view>
				<view class="txt-sub-title">{{helpData.message}}</view>
			</view>
		</view>

		<view class="line"></view>

		<view class="bag-column" v-for="(message,index) in kfMessageList" :key="index">
			<view class="item-view" @tap="toKfChat(message.name,message.img)">
				<view class="tui-badge-item">
					<image style="width: 72rpx; height: 72rpx; border-radius: 100rpx;" :src="message.img+'?x-oss-process=image/resize,l_150'" mode="aspectFill"></image>
					<tui-badge v-if="message.noReadNum!=0 " type="danger" absolute :scaleRatio="0.8" translateX="70%" right="10rpx"
					 top="-15rpx">{{message.noReadNum}}</tui-badge>
				</view>
				<view class="column">
					<view class="sub-row">
						<view class="txt-title">{{message.name}}</view>
						<view class="txt-time">{{message.createTime}}</view>
					</view>
					<!-- 	类型 1 文字消息 2 图片消息3 问诊单问题 4问诊单回复 5推荐商品 6语音消息 7视频消息 -->
					<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==1">{{message.msg}}</view>
					<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==2">【图片信息】</view>
					<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==3">【问诊单】</view>
					<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==4">【问诊单】</view>
					<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==5">【推荐商品】</view>
					<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==6">【语音】</view>
					<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==7">【视频】</view>
				</view>
			</view>
			<view class="line"></view>
		</view>


		<view class="ten-line"></view>
		<view class="bag-column" v-for="(message,index) in messageList" :key="index">

			<tui-swipe-action :actions="actions" @tap="deleteId(message.id)">
				<template v-slot:content>
					<view class="item-view" @tap="toChat(message.name,message.account,message.img)">
						<view class="tui-badge-item">
							<image style="width: 72rpx; height: 72rpx; border-radius: 100rpx;" :src="message.img+'?x-oss-process=image/resize,l_150'" mode="aspectFill"></image>
							<tui-badge v-if="message.noReadNum!=0 " type="danger" absolute :scaleRatio="0.8" translateX="70%" right="10rpx"
							 top="-15rpx">{{message.noReadNum}}</tui-badge>
						</view>
						<view class="column">
							<view class="sub-row">
								<view class="txt-title">{{message.name}}</view>
								<view class="txt-time">{{message.createTime}}</view>
							</view>
							<!-- 	类型 1 文字消息 2 图片消息3 问诊单问题 4问诊单回复 5推荐商品 6语音消息 7视频消息 -->
							<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==1">{{message.msg}}</view>
							<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==2">【图片信息】</view>
							<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==3">【问诊单】</view>
							<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==4">【问诊单】</view>
							<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==5">【推荐商品】</view>
							<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==6">【语音】</view>
							<view class="txt-sub-title" :style="{color:message.noReadNum!=0?'#1dc46c':'#afafaf'}" v-if="message.msgType==7">【视频】</view>
						</view>
					</view>
				</template>
			</tui-swipe-action>

			<view class="line"></view>
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
			this.getHelpData();
			this.messageList = uni.getStorageSync(this.MESSAGELIST);
			console.log("获取到缓存的数据");
			console.log(this.messageList);
			this.getMessageData();
			uni.$on(this.INFORMNOREAD, data => {
				console.log("接受到通知未读消息");
				this.getMessageData2();
			});
			uni.$on(this.INFORMXTNOREAD, data => {
				console.log("接受到系统通知未读消息");
				this.getHelpData();
			});
		},
		onUnload() {
			//复诊页还需要该通知 
			// uni.$off(this.INFORMNOREAD);
			// uni.$off(this.INFORMXTNOREAD);
		},
		data() {
			return {
				messageList: [],
				kfMessageList: [],
				helpData: null,
				actions: [{
					name: '删除',
					color: '#fff',
					fontsize: 30, //单位rpx
					width: 70, //单位px
					background: '#FD3B31'
				}],
			}
		},
		methods: {
			getHelpData() {
				this.$u.get(this.customerMsgHelpsUrl).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.helpData = res.data;
					}
				})
			},
			deleteId(id) {
				this.messageList = [];
				this.$u.get(this.customerMsgChatDeleteUrl, {
					'id': id
				}).then(res => {
					console.log(res)
					for (var i = 0; i < res.data.length; i++) {
						if (!res.data[i].account.includes("kf")) {
							this.messageList.push(res.data[i])
						}
					}
				}).catch(ex=>{
					if(ex.data.status==1){
						this.$u.toast(ex.data.msg);
					}
				})
			},
			toHelper() {
				uni.navigateTo({
					url: "../helper/helper"
				})
			},
			getMessageData() {
				this.kfMessageList = [];
				this.messageList = [];
				this.$u.get(this.customerMsgChatsUrl).then(res => {
					for (var i = 0; i < res.data.length; i++) {
						if (res.data[i].account.includes("kf")) {
							this.kfMessageList.push(res.data[i])
						} else {
							this.messageList.push(res.data[i])
						}
					}
					uni.setStorageSync(this.MESSAGELIST, this.messageList);
					console.log("去缓存的数据");
					console.log(this.messageList);
				})
			},
			getMessageData2() {
				this.kfMessageList = [];
				this.messageList = [];
				this.$u.get(this.customerMsgChatsUrl).then(res => {
					for (var i = 0; i < res.data.length; i++) {
						if (res.data[i].account.includes("kf")) {
							this.kfMessageList.push(res.data[i])
						} else {
							this.messageList.push(res.data[i])
						}
					}
				})
			},
			toChat(name, account, img) {
				uni.navigateTo({
					url: "../chat/chat?type=1&name=" + name + "&account=" + account + "&img=" + encodeURIComponent(JSON.stringify(
						img))
				})
			},
			toKfChat(name, img){
				uni.navigateTo({
					url: "../chat/kf-chat?name=" + name + "&img=" + encodeURIComponent(JSON.stringify(img))
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F9F9F9
	}

	.tui-badge-item {
		position: relative;
	}

	.item-view {
		background-color: #FFFFFF;
		padding-left: 24rpx;
		padding-right: 24rpx;
		padding-bottom: 40rpx;
		padding-top: 35rpx;
		display: flex;
		flex-direction: row;
	}

	.line {
		width: 100%;
		height: 2rpx;
		background-color: #F9F9F9
	}

	.ten-line {
		width: 100%;
		height: 20rpx;
		background-color: #F9F9F9
	}

	.column {
		display: flex;
		flex-direction: column;
		margin-left: 26rpx;
	}

	.bag-column {
		display: flex;
		flex-direction: column;
	}

	.sub-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 600rpx;
	}

	.txt-title {
		font-size: 30rpx;
		color: #595757;
		flex-grow: 1;
	}

	.txt-time {
		font-size: 24rpx;
		color: #C2C2C2;
	}

	.txt-sub-title {
		font-size: 26rpx;
		color: #AFAFAF;
		margin-top: 13rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 600rpx;
		white-space: nowrap;
	}
</style>
