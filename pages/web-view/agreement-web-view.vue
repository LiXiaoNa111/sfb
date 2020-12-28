<template>
	<view style="padding-left: 24rpx;padding-right: 24rpx;padding-top: 12rpx;padding-bottom: 180rpx;">
		<rich-text :nodes="src"></rich-text>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.type = option.type;
			
			this.getHtml();
		},
		data() {
			return {
				type: '',
				src: ''
			}
		},
		methods: {
			getHtml() {
				uni.showLoading();
				
				this.$u.get(this.VersionLawUrl, {
					'type': this.type
				}).then(res => {
					uni.hideLoading();
					if (res.status == 0) {
						uni.setNavigationBarTitle({
							title:res.data.name
						})
						this.src = res.data.content
					}
				}).catch(ex=>{
					console.log("当前"+ex.data.status);
					uni.hideLoading();
					if(ex.status==1){
						this.$u.toast(ex.data.msg);
					}
				})
			}
		}
	}
</script>

<style>

</style>
