<template>
	<view class="PublicBottom Line" :style="{background: background}" v-if="ShowTabBar">
		<view class="Content">
			<block v-for="(item, index) in FootTabBar" :key="index">
				<view class="Box" @tap="ClickTabber(index)" :class="TabberIndex == index ? 'popIn' :''">
					<image :src="item.select" :style="{width: IconSize + 'rpx',height: IconSize + 'rpx'}" v-if="TabberIndex == index"></image>
					<image :src="item.selected" :style="{width: IconSize + 'rpx',height: IconSize + 'rpx'}" v-else></image>
					<view v-if="ShowText">
						<view class="Text Selected" v-if="TabberIndex == index">{{ item.text }}</view>
						<view class="Text Select" v-else>{{ item.text }}</view>
					</view>
				</view>
			</block>
		</view>
	</view>
	<view class="PublicBottom" v-else></view>
</template>

<script>
	export default {
		props: {
			ShowTabBar: {
				type: Boolean,
				default: true
			},
			background: {
				type: String,
				default: 'rgba(255,255,255)'
			},
			ShowText: {
				type: Boolean,
				default: true
			},
			IconSize: {
				type: String,
				default: '50'
			}
		},
		data() {
			return {
				TabberIndex: 0,
				FootTabBar: [{
						text: '复诊',
						selected: '/static/image/tab_icon_fz_nor.png',
						select: '/static/image/tab_icon_fz_sel.png'
					}, {
						text: '挂号',
						selected: '/static/image/tab_icon_gh_nor.png',
						select: '/static/image/tab_icon_gh_sel.png'
					}, {
						text: '商城',
						selected: '/static/image/tab_icon_sc_nor.png',
						select: '/static/image/tab_icon_sc_sel.png'
					}, {
						text: '我的',
						selected: '/static/image/tab_icon_mine_nor.png',
						select: '/static/image/tab_icon_mine_sel.png'
					}
				]
			};
		},
		methods: {
			ClickTabber(e) {
				this.TabberIndex = e;
				this.$emit('TabBar', e);
			},
		}
	};
</script>

<style lang="scss">
	.PublicBottom {
		width: 750rpx;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.Line {
		border-top-style: solid;
		border-top-width: 1rpx;
		border-top-color: #dddddd;
	}

	.Content {
		width: 750rpx;
		height: 50px;
		display: flex;
		flex-direction: row;
		text-align: center;
		justify-content: space-around;
	}

	.Box {
		height: 50px;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		align-items: center;
	}

	.SelfIcon {
		width: 60px;
		height: 60px;
		margin: auto;
	}

	.Selected {
		color: #3cc51f;
	}

	.Select {
		color: #7A7E83;
	}

	.Text {
		font-size: 20rpx;
	}

	/* 弹入 */
	.popIn {
		-webkit-animation: fadeleftIn .4s;
		animation: fadeleftIn .4s;
		-webkit-animation-name: popIn;
		animation-name: popIn;
	}

	@-webkit-keyframes popIn {
		0% {
			-webkit-transform: scale3d(0, 0, 0);
			transform: scale3d(0.5, 0.5, 0.5);
			opacity: 0;
		}

		50% {
			-webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
			animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
		}

		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
			-webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			opacity: 1;
		}
	}

	@keyframes popIn {
		0% {
			-webkit-transform: scale3d(0, 0, 0);
			transform: scale3d(0.5, 0.5, 0.5);
			opacity: 0;
		}

		50% {
			-webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
			animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
		}

		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
			-webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			opacity: 1;
		}
	}
</style>
