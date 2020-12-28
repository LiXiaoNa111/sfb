<template>
	<view style="padding-left: 24rpx;padding-right: 24rpx;padding-top: 12rpx;padding-bottom: 180rpx;">
		<image v-if="type==0" :src="src" mode="aspectFill"></image>
		<web-view v-if="type==1" :src="src"></web-view>
		<rich-text v-if="type==2" :nodes="src"></rich-text>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			//type 0图片 1url 2html
			this.id = option.id;
			this.type = option.type;
			this.imgDescribe = option.imgDescribe;
			console.log("接收到消息");
			console.log(this.type);
			console.log(this.imgDescribe);
			uni.setNavigationBarTitle({
				title: this.imgDescribe
			})
			this.getDetail();
		},
		data() {
			return {
				id: '',
				type: '',
				src: '',
				imgDescribe: ''
			}
		},
		methods: {
			getDetail() {
				this.$u.get(this.imgDetailUrl, {
					id:this.id
				}).then(res => {
					console.log(res)
					if (res.status == 0) {
						this.src=res.data.detail
					}
				})
			},
		}
	}
</script>

<style>
</style>
