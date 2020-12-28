<template>
	<view class="content">
		<view class="text-area">
			<text class="title" @tap="download()">尚方宝下载</text>
		</view>

		<view class="cu-progress round margin-top" v-if="progressNum>0">
			<view class="bg-red" :style="[{ width:progressNum+'%'}]">{{progressNum}}%</view>
		</view>

		<web-view webview-styles="APP" :src="src" v-if="loading"></web-view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				title: 'Hello',
				
				progressNum: 0,
				src: '',loading: false,
			}
		},
		onLoad: function() {


		},
		onShow() {
		  var _this = this;
		},
		methods: {
			showPoster(e) {
				var _this = this;
				_this.$refs.poster.show();
				console.log(e);
			},
			auiPosterCallback(e) {
				var _this = this;
				console.log(e);
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
				let that = this;
				if (that.isWeiXinBrowser()) {
					uni.showToast({
						title: "请用浏览器打开"
					})
				} else {
					console.log("非微信平台");
					that.loading = true
					that.src = this.h5APPPath
				}
			}
		}
	}
</script>

<style>
	.content {
		padding: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.cu-progress {
		overflow: hidden;
		height: 28upx;
		background-color: #ebeef5;
		display: inline-flex;
		align-items: center;
		width: 100%;
	}

	.margin-top {
		margin-top: 30upx;
	}

	.round {
		border-radius: 5000upx;
	}

	.bg-red {
		background-color: #e54d42;
		color: #ffffff;
	}

	.padding {
		padding: 30rpx;
	}

	.bg-white {
		background-color: #ffffff;
		color: #666666;
	}
</style>
