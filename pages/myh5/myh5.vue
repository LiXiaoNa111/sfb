<template name="myh5">
	<view>
		<!-- #ifdef H5 -->
		<view class="h5-view">
			<image style="width: 80rpx; height: 80rpx;" src="../../static/image/logo.png"></image>
			<view class="h5-column">
				<view style="font-size: 34rpx; color: #595757;font-weight: bold;">尚方宝</view>
				<view style="font-size: 28rpx; color: #AFAFAF;">线上咨询、挂号、复诊、购药</view>
			</view>
			<view style="flex: 1;"></view>
			<view class="h5-open" style="flex-shrink: 0;" @tap="downloadApp">打开</view>
		</view>
		<tui-modal width="100%" padding="0rpx" radius="0rpx" :show="modal" :custom="true" @cancel="handleClick()">
			<image style="width: 100%; height: calc(100vh)" src="http://www.hzsysf.com/sfb/image/51816.png" mode="aspectFill" @tap="handleClick"></image>
		</tui-modal>

		<web-view webview-styles="APP" :src="src" v-if="loading"></web-view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		name: 'myh5',
		props:["docId"],
		data() {
			return {
				src: '',
				modal: false,
				loading: false,
			}
		},
		onLoad() {
			console.log("的粉红色"+this.docI);
			if (this.docId) {
				this.downloadApp()
			}
		},
	
		methods: {
			handleClick() {
				this.modal = false;
			},
			isWeiXinBrowser() {
				let ua = window.navigator.userAgent.toLowerCase()
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
					return true
				} else {
					return false
				}
			},
			download() {
				// if (this.isWeiXinBrowser()) {
				// 	this.modal = true;
				// } else {
				// 	this.loading = true
				// 	this.src = this.h5APPPath
				// }
				// this.loading = true;
				window.location.href = this.h5APPPath
				
			},
			download2() {
				this.loading = true
				this.src = this.AppStorePath
			},
			downloadApp() {
				var me = this;
				this.$u.get(this.VersionPlatformUrl).then(res => {
					if (res.status == 0) {
						if (res.msg == "Android") {
							me.download();
						} else if (res.msg == "iPhone") {
							me.download2();
						}
					}
				})
			},
		}
	}
</script>

<style>
	page {
		width: 100%;
	}
</style>
