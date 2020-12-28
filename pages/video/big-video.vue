<template>
	<view class="bac">
		<video class="tui-video" :src="videoUrl" :title="title" show-center-play-btn controls autoplay objectFit="contain"></video>
	</view>
</template>

<script>
	export default {
		onLoad: function(option) {
			this.videoUrl = option.videoUrl;
			console.log("标题");
			
			this.title=option.title;
			console.log(this.title);
		},
		data() {
			return {
				videoUrl: '',
				title:''
			}
		},
		methods: {

		}
	}
</script>

<style>
	page{
		background-color: #000000
	}
	.bac{
		display: flex; 
		flex-direction: column;
		 justify-content: center;
		  align-items: center;
		  height: calc(100vh);
	}
	.tui-video {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}
</style>
