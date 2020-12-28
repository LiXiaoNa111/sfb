<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="html"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad: function(option) { 
			this.html=option.html;
		},
		data() {
			return {
				html: ''
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
