<template>
	<view>
		<view class="uni-list" v-for="(item,index) in items" :key="index">
			<view v-if="item.questionType === 0">
				<view>{{item.content}}</view>
				<radio-group>
					<label class="uni-list-cell uni-list-cell-pd" v-for="(d, index) in item.answerChoose" :key="item.value">
						<view>
							<radio :value="item.value"/>
						</view>
						<view>{{d.name}}</view>
					</label>
				</radio-group> 
			</view>
			<view style="margin-bottom: 80rpx;" v-if='item.questionType === 1'>
				<view>{{item.content}}</view>
				<checkbox-group>
					<label class="uni-list-cell uni-list-cell-pd" v-for="(d,index) in item.answerChoose">
						<view>
							<checkbox :value="d" :checked="d.checked" />
						</view>
						<view>{{d}}</view>
					</label>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'checkbox 复选框',
				items: [{
						"id": 3208,
						"interrogationId": 2197,
						"questionType": 0,
						"content": "有畏寒怕冷怕风吗？",
						"remark": "",
						"questionstoreId": 61,
						"orderBy": 2,
						"createTime": "2020-05-16 00:34:29",
						"updateTime": "2020-05-16 00:34:29",
						"answerChoose": {
							"a": "畏寒",
							"b": "怕冷",
							"c": "怕风"
						}
					}, {
						"id": 3209,
						"interrogationId": 2197,
						"questionType": 0,
						"content": "有无发热？",
						"remark": "",
						"questionstoreId": 62,
						"orderBy": 3,
						"createTime": "2020-05-16 00:34:29",
						"updateTime": "2020-05-16 00:34:29",
						"answerChoose": {
							"a": "有",
							"b": "无"
						}
					}, {
						"id": 3210,
						"interrogationId": 2197,
						"questionType": 0,
						"content": "有无咳嗽痰？",
						"remark": "",
						"questionstoreId": 65,
						"orderBy": 4,
						"createTime": "2020-05-16 00:34:29",
						"updateTime": "2020-05-16 00:34:29",
						"answerChoose": {
							"a": "有",
							"b": "无"
						}
					},
					{
						"id": 3213,
						"interrogationId": 2197,
						"questionType": 1,
						"content": "头晕/头痛具体部位是？",
						"remark": "",
						"questionstoreId": 73,
						"orderBy": 7,
						"createTime": "2020-05-16 00:34:29",
						"updateTime": "2020-05-16 00:34:29",
						"answerChoose": {
							"a": "头顶",
							"b": "头一侧",
							"c": "头两侧",
							"d": "额头",
							"e": "后脑勺"
						}
					}, {
						"id": 3220,
						"interrogationId": 2197,
						"questionType": 1,
						"content": "大便情况如何？",
						"remark": "",
						"questionstoreId": 92,
						"orderBy": 14,
						"createTime": "2020-05-16 00:34:29",
						"updateTime": "2020-05-16 00:34:29",
						"answerChoose": {
							"a": "成条",
							"b": "软烂",
							"c": "稀水",
							"d": "前干后稀",
							"e": "硬如羊粪",
							"f": "便秘"
						}
					}, {
						"id": 3223,
						"interrogationId": 2197,
						"questionType": 1,
						"content": "小便状态？",
						"remark": "",
						"questionstoreId": 95,
						"orderBy": 17,
						"createTime": "2020-05-16 00:34:29",
						"updateTime": "2020-05-16 00:34:29",
						"answerChoose": {
							"a": "清淡",
							"b": "色黄",
							"c": "小便不畅",
							"d": "小便淋漓不尽"
						}
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.uni-list-cell {
		justify-content: flex-start
	}
</style>
