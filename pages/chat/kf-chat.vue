<template>
	<view>
		<view class="content" @touchstart="hideDrawer">
			<scroll-view class="msg-list" scroll-y="true" :scroll-with-animation="scrollAnimation" :scroll-top="scrollTop"
			 :scroll-into-view="scrollToView" @scrolltoupper="loadHistory" upper-threshold="50">
				<!-- 加载历史数据waitingUI -->
				<view class="loading" v-if="isHistoryLoading">
					<view class="spinner">
						<view class="rect1"></view>
						<view class="rect2"></view>
						<view class="rect3"></view>
						<view class="rect4"></view>
						<view class="rect5"></view>
					</view>
				</view>
				<!--  "type": 1,//1文字 2图片 3语音 4视频 5订单 -->
				<!-- "creator": 1,//0客服 1患者/医生 -->
				<view class="row" v-for="(row,index) in messageList" :key="index" :id="'msg'+row.id">
					<!-- 自己发出的消息 -->
					<view class="my" v-if="row.creator==1">
						<!-- 左-消息 -->
						<view class="left">
							<!-- 文字消息 -->
							<view v-if="row.type==1" class="bubble">
								<rich-text :nodes="row.message"></rich-text>
							</view>
							<!-- 图片消息 -->
							<view v-if="row.type==2" class="bubble img" @tap="showPic(row.message)">
								<!--阿里云图片压缩 缩放图 -->
								<image lazy-load mode="aspectFill" :src="row.message+'?x-oss-process=image/resize,l_150'"></image>
							</view>
							<!-- 语音消息 -->
							<view v-if="row.type==3" class="bubble voice" @tap="playVoice(row.message,row.id)" :class="playMsgid == row.id?'play':''">
								<view class="length">{{row.second}}''</view>
								<view class="icon my-voice"></view>
							</view>
							<!-- 视频消息  class="tui-video" -->
							<view v-if="row.type==4" class="bubble video">
								<view style="position: relative;" @tap="toVideo(row.message)">
									<!-- 视频截图 第一帧 -->
									<image style="border-radius: 12rpx;width: 250rpx; height: 300rpx;" :src="row.message+'?x-oss-process=video/snapshot,t_1000,m_fast'"
									 mode="aspectFill"></image>
									<view style="width: 100%; height: 100%; position: absolute;top:0%; left: 0%;display: flex;flex-direction: column;align-items: center;justify-content: center;"
									 @tap="toVideo(row.message)">
										<image style=" width: 50rpx; height:50rpx;" src="../../static/image/icon_play.png" mode="aspectFill"></image>
									</view>
								</view>
							</view>
							<!-- 订单 -->
							<view v-if="row.type==5" class="bubble">订单</view>
						</view>
						<!-- 右-头像 -->
						<view class="right">
							<image style="border-radius: 100rpx;" mode="aspectFill" :src="imageUrl==null ?'../../static/image/icon_tx_nor.png':imageUrl"></image>
						</view>
					</view>
					<!-- 别人发出的消息 -->
					<view class="other" v-if="row.creator==0">
						<view class="right">
							<view class="right-time">{{row.createTime}}</view>
							<view class="other">
								<!-- 左-头像 -->
								<view class="left">
									<image style="border-radius: 100rpx;" :src="img"></image>
								</view>
								<!-- 右-用户名称-时间-消息 -->

								<!-- 文字消息 -->
								<view v-if="row.type==1" class="bubble">
									<rich-text :nodes="row.message.replace(/\n/g,'<br>')"></rich-text>
								</view>
								<!-- 图片消息 -->
								<view v-if="row.type==2" class="bubble img" @tap="showPic(row.message)">
									<image lazy-load mode="aspectFill" :src="row.message+'?x-oss-process=image/resize,l_150'"></image>
								</view>
								<!-- 语音消息 -->
								<view v-if="row.type==3" class="bubble voice" @tap="playVoice(row.message,row.id)" :class="playMsgid == row.id?'play':''">
									<view class="icon other-voice"></view>
									<view class="length">{{row.second}}''</view>
								</view>
								<!-- 视频消息  class="tui-video" -->
								<view v-if="row.type==4" class="bubble video">
									<view style="position: relative;" @tap="toVideo(row.message)">
										<!-- 视频截图 第一帧 -->
										<image style="border-radius: 12rpx;width: 250rpx; height: 300rpx;" :src="row.message+'?x-oss-process=video/snapshot,t_1000,m_fast'"
										 mode="aspectFill"></image>
										<view style="width: 100%; height: 100%; position: absolute;top:0%; left: 0%;display: flex;flex-direction: column;align-items: center;justify-content: center;"
										 @tap="toVideo(row.message)">
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<!-- 抽屉栏 -->
		<view class="popup-layer" :class="popupLayerClass" @touchmove.stop.prevent="discard">
			<!-- 更多功能 相册-拍照 -->
			<view class="more-layer" :class="{hidden:hideMore}">
				<view class="list">
					<view @tap="getImage" class="bottm-tu-txt">
						<view class="box">
							<image style="width: 50rpx; height: 40rpx;" src="../../static/image/icon_tp1.png" mode="aspectFill"></image>
						</view>
						<view class="more-txt">图片</view>
					</view>
					<view @tap="getVideo" class="bottm-tu-txt">
						<view class="box">
							<image style="width: 50rpx; height: 40rpx;" src="../../static/image/icon_sp.png" mode="aspectFill"></image>
						</view>
						<view class="more-txt">视频</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部输入栏 -->
		<view class="input-box" :class="popupLayerClass" @touchmove.stop.prevent="discard">
			<!-- H5下不能录音，输入栏布局改动一下 -->
			<!-- #ifndef H5 -->
			<view class="voice">
				<view class="icon" :class="isVoice?'jianpan':'yuyin'" @tap="switchVoice"></view>
			</view>
			<!-- #endif -->

			<view class="textbox">
				<view class="voice-mode" :class="[isVoice?'':'hidden',recording?'recording':'']" @touchstart="voiceBegin"
				 @touchmove.stop.prevent="voiceIng" @touchend="voiceEnd" @touchcancel="voiceCancel">{{voiceTis}}</view>
				<view class="text-mode" :class="isVoice?'hidden':''">
					<view class="box">
						<!-- cursor-spacing="20" 设置弹出框跟输入框之间的距离 -->
						<textarea cursor-spacing="20" :focus="focus" auto-height="true" v-model="textMsg" @focus="textareaFocus" />
						</view>
				</view>
			</view>
		<!-- #ifndef H5 -->
		<view class="more" @tap="showMore">
				<view class="icon add"></view>
			</view>
		<!-- #endif -->
		<view class="send" :class="isVoice?'hidden':''" @touchend.prevent="sendText">
				<view class="btn">发送</view>
			</view>
		</view>
		<!-- 录音UI效果 -->
		<view class="record" :class="recording?'':'hidden'">
				<view class="ing" :class="willStop?'hidden':''"><view class="icon luyin2" ></view></view>
				<view class="cancel" :class="willStop?'':'hidden'"><view class="icon chehui" ></view></view>
				<view class="tis" :class="willStop?'change':''">{{recordTis}}</view>
		</view>
	</view>
</template>
<script>
	import permision from "@/js_sdk/wa-permission/permission.js"
	export default {
		data() {
			return {
				platform: '', //平台
				isJurisdiction: '', //录音权限
				account: '', //对方账号
				id: '', //聊天室id
				img: '', //对方头像
				name: '', //对方用户名称
				pageNum: 1, //页数
				pageSize: 15, //每页条数
				imageUrl: null, //自己头像
				messageList: [],
				//文字消息
				textMsg: '',
				//消息列表
				isHistoryLoading: false,
				scrollAnimation: true,
				scrollTop: 0,
				scrollToView: '',
				msgList: [],
				msgImgList: [],
				myuid: 0,

				//录音相关参数
				// #ifndef H5
				//H5不能录音
				RECORDER: uni.getRecorderManager(),
				// #endif
				isVoice: false,
				voiceTis: '按住 说话',
				recordTis: "手指上滑 取消发送",
				recording: false,
				willStop: false,
				initPoint: {
					identifier: 0,
					Y: 0
				},
				recordTimer: null,
				recordLength: 0,

				//播放语音相关参数
				AUDIO: uni.createInnerAudioContext(),
				playMsgid: null,
				VoiceTimer: null,
				// 抽屉参数
				popupLayerClass: '',
				// more参数
				hideMore: true,
				focus: false,
			};
		},
		async onLoad(option) {
			this.id=uni.getStorageSync(this.KFCHATID);
			this.getMessageData();
			this.name = option.name; //对方姓名
			this.img=JSON.parse(decodeURIComponent(option.img));//对方头像
			//自己头像
			console.log("自己头像"+uni.getStorageSync(this.HEADIMG));
			// if (uni.getStorageSync(this.HEADIMG).length == 0) {
			// 	this.imageUrl = null
			// } else {
				this.imageUrl = uni.getStorageSync(this.HEADIMG);
			// }
			console.log("接收：" + this.name + this.img);
			uni.setNavigationBarTitle({
				title: this.name
			});
			
			let mess=uni.getStorageSync(this.id+"");
			if(!this.$u.test.isEmpty(mess)){
				this.messageList=mess;
				console.log("获取到缓存的数据2");
				console.log(this.messageList);
				// 滚动到底部
				this.$nextTick(function() {
					//进入页面滚动到底部
					this.scrollTop = 9999;
					this.$nextTick(function() {
						this.scrollAnimation = true;
					});
				});
			}

			//语音自然播放结束
			this.AUDIO.onEnded((res)=>{
				this.playMsgid=null;
			});

			//初始获取录音权限状态
			this.platform = uni.getSystemInfoSync().platform
			 if (this.platform == 'ios') {
				console.log('我是iOS')
				//有权限返回true，否则返回false
				this.isJurisdiction=permision.judgeIosPermission("record");
			} else if (this.platform == 'android') {
				console.log('我是安卓')
				/* 获取当前手机是否有录音权限 */
				// #ifdef APP-PLUS
				var androidJurisdiction=await permision.requestAndroidPermission('android.permission.RECORD_AUDIO');
				//1	已获取授权 0	未获取授权 -1被永久拒绝授权
				if( androidJurisdiction==0){
					this.isJurisdiction=false;
				}else if(androidJurisdiction==1){
					this.isJurisdiction=true;
				}else if(androidJurisdiction==-1){
					this.isJurisdiction=false;
				}
				// #endif
				/* 获取当前手机是否有录音权限 */
			}

			// #ifndef H5
			//录音开始事件
			this.RECORDER.onStart((e)=>{
				//没有权限情况 申请权限弹框 
				// Android会在允许权限之后重新赋值isJurisdiction为true 所以直接跳过了当前的if
				//ios则需要重新新获取权限的状态
				if (!this.isJurisdiction && this.platform == 'ios') {
					this.isJurisdiction=permision.judgeIosPermission("record");
				}
				if(this.isJurisdiction){
					this.recordBegin(e);
				}
			})
			//录音结束事件
			this.RECORDER.onStop((e)=>{
				if(this.isJurisdiction){
					this.recordEnd(e);
				}
			})
			// #endif
			
			var me=this;
			uni.$on(this.SOCKETKFCHAT,data=>{
			    console.log('kf患者收到服务器通知：' + data);
				 var oneMessageData= JSON.parse(data);
			  	if(oneMessageData[0].creator==0){
			  		console.log('当前集合：' + me.messageList);
			  		me.messageList=me.messageList.concat(oneMessageData);//数据拼接
			  		console.log("滚动到最下面的id");
			  		console.log(oneMessageData[0].id);
			  		me.$nextTick(function() {
			  			//进入页面滚动到底部
			  			me.scrollToView = 'msg'+oneMessageData[0].id;
			  			me.$nextTick(function() {
			  				me.scrollAnimation = true;
			  			});
			  		});
			  		// 获取消息中的图片,并处理显示尺寸
			  		if(oneMessageData[0].type==2 ){
			  			me.msgImgList.push(oneMessageData[0].content);
			  		} 
			  	}
			});

			uni.onKeyboardHeightChange(res => {
				console.log("软键盘高度监听"+res.height);
				//监听软键盘的高度 
				//当点击软键盘自带的收起按钮的时候也就是会隐藏软键盘 这时候监听到的软键盘的高度就是0 、
				//让输入框取消焦点 这时候再去输入内容的时候 输入框就会弹起
				if(res.height==0){
					this.focus=false;
					this.hideDrawer();
				}
			})
		},
		onShow(){
			this.scrollTop = 9999999;
		},
		onHide() {
			this.hideDrawer();
		},
		onUnload() {
			uni.$off(this.SOCKETKFCHAT);
		},
		methods: {
			//获取聊天信息列表 加载初始页面消息
			getMessageData() {
				this.$u.get(this.ChattingChatRecordUrl, {
					'id': this.id,
					'pageNum': this.pageNum,
					'pageSize': this.pageSize
				}).then(res => {
					if(!this.$u.test.isEmpty(res.data.list)){
						var newData = res.data.list.reverse();
						this.messageList = newData; //数组翻转
						console.log("去22缓存的数据");
						console.log(this.id+this.messageList);
						uni.setStorageSync(this.id+"",this.messageList);
						console.log("去缓存的数据");
						console.log(this.messageList);
						// 获取消息中的图片,并处理显示尺寸
						for(let i=0;i<newData.length;i++){
							if(newData[i].type==2 ){
								this.msgImgList.push(newData[i].message);
							} 
						}
						
						// 滚动到底部
						this.$nextTick(function() {
							//进入页面滚动到底部
							this.scrollTop = 9999;
							this.$nextTick(function() {
								this.scrollAnimation = true;
							});
						});
					}
				}).catch(ex => {
					if (ex.data.status == 1) {
						console.log(ex.data.msg);
						this.isHistoryLoading = false;
					}
				})
			},
			toVideo(url){
				uni.navigateTo({
					url: "../video/big-video?videoUrl=" + url + "&title=" + "视频"
				})
			},
			getVideo(){
				this.hideDrawer();
				// 上传视频
				uni.chooseVideo({
				    maxDuration:60,
				    count: 1,
				    success: (responent) => {
				        let videoFile = responent.tempFilePath;
				        console.log("要上传的视频" );
				        console.log(videoFile );
						//对原视频先进行本地压缩
						this.postVideo(videoFile);
				    }
				})
			},
			postVideo(videoFile){
				var me=this;
				uni.showLoading();
				uni.uploadFile({
				 	url: this.websocketOtherSendUrl, 
				 	filePath: videoFile,
				 	name: 'file',
				 	header: {
				 	    'Content-Type': 'application/json',
				 		'token':uni.getStorageSync('token')
				 	},
				 	formData: {
				 		"type":4,
				 		"chattingId":me.id
				 	},
				 	success: (uploadFileRes) => {
				 		uni.hideLoading();
				 		console.log("成功");
				 		console.log(uploadFileRes); 
				 		console.log(JSON.parse(uploadFileRes.data));
				 		var res=JSON.parse(uploadFileRes.data);
				 		if (res.status == 0){
				 		    console.log('上传视频成功');
				 			me.getNewData();
				 		}else if(res.status==1){
				 			this.$u.toast(res.msg);
				 		}
				 	 }
				 });
			},
			//触发滑动到顶部(加载历史信息记录)
			loadHistory(e){
				if(this.isHistoryLoading){
					return ;
				}
				this.pageNum++;
				this.isHistoryLoading = true;//参数作为进入请求标识，防止重复请求
				this.scrollAnimation = false;//关闭滑动动画
				let Viewid = this.messageList[0].id;//记住第一个信息ID
					this.$u.get(this.ChattingChatRecordUrl,{
						'id': this.id,
						'pageNum':this.pageNum,
						'pageSize':this.pageSize
					}).then(res=>{
						this.isHistoryLoading = false;
						var newData=res.data.list;
						// .reverse()
						// this.messageList=newData.concat(this.messageList);//数组翻转
						// 获取消息中的图片,并处理显示尺寸
						for(let i=0;i<newData.length;i++){
							if(newData[i].type==2 ){
								this.msgImgList.push(newData[i].content);
							} 
							this.messageList.unshift(newData[i]);
						}
						console.log("所有消息");
						console.log(this.messageList);
						//这段代码很重要，不然每次加载历史数据都会跳到顶部
						this.$nextTick(function() {
							this.scrollToView ='msg'+ Viewid;//跳转上次的第一行信息位置
							// uni.pageScrollTo({         //回到下拉之前，多展示一条消息
							// 	scrollTop: 'msg'+ Viewid,
							// 	duration: 0
							// });
							this.$nextTick(function() {
								this.scrollAnimation = true;//恢复滚动动画
							});
						});
					}).catch(ex=>{
						if(ex.data.status==4){
							this.$u.toast("已加载全部消息");
							this.isHistoryLoading = false;
						}
					})
			},
			//更多功能(点击+弹出) 
			showMore(){
				this.isVoice = false;
				if(this.hideMore){
					this.hideMore = false;
					this.openDrawer();
				}else{
					this.hideDrawer();
				}
			},
			// 打开抽屉
			openDrawer(){
				this.popupLayerClass = 'showLayer';
			},
			// 隐藏抽屉
			hideDrawer(){
				this.popupLayerClass = '';
				setTimeout(()=>{
					this.hideMore = true;
				},150);
			},
			//选照片 or 拍照
			getImage(){
				this.hideDrawer();
				var me=this;
				uni.chooseImage({
				    count: 1, //默认9
					sizeType: ['compressed'],
				    success: function(res) {
						 console.log(JSON.stringify(res.tempFilePaths[0]));
						 console.log(me.id);
						me.sendImg(res.tempFilePaths[0]);
				    }
				});
			},
			//发送图片
			sendImg(path){
				var me=this;
				uni.showLoading();
				uni.uploadFile({
					url: this.websocketOtherSendUrl, 
					filePath: path,
					name: 'file',
					header: {
					    'Content-Type': 'application/json',
						'token':uni.getStorageSync('token')
					},
					formData: {
						"type":2,
						"chattingId":me.id
					 },
					 success: (uploadFileRes) => {
						 uni.hideLoading();
						console.log("成功");
						console.log(uploadFileRes); 
						console.log(JSON.parse(uploadFileRes.data));
						var res=JSON.parse(uploadFileRes.data);
						if (res.status == 0){
						    console.log('上传成功');
							me.getNewData();
						}else if(res.status==1){
							this.$u.toast(res.msg);
						}
					 }
				});
			},
			//获取焦点,则关闭抽屉
			textareaFocus(){
				this.focus=true;
				if(this.popupLayerClass=='showLayer'){
					this.hideDrawer();
				}
			},
			// 发送文字消息
			sendText(){
				if(!this.textMsg){
					return;
				}
				this.sendMsg(this.textMsg);
				this.textMsg = '';//清空输入框
			},
			// 发送消息 请求接口
			sendMsg(content){
				//1文字 2图片 3语音 4视频
				console.log("要发送的信息");
				console.log(content);
				this.$u.post(this.websocketOtherSendUrl,{
					message:content,
					type:1,
					chattingId:this.id
				}).then(res=>{
					this.getNewData();
					console.log("发送消息成功");
					console.log(res);
				}).catch(ex=>{
					this.$u.toast(ex.data.msg);
				})
			},
			//发送消息之后网络获取最新一条数据拼接在整个消息数据的后面
			getNewData(){
				console.log("开始获取第一条消息");
				this.$u.get(this.ChattingChatRecordUrl,{
					'id': this.id,
					'pageNum':1,
					'pageSize':1
				}).then(res=>{
					uni.hideLoading();
					const oneMessageData= res.data.list;
					console.log("最新获取到的消息");
					console.log(oneMessageData);
					this.messageList=this.messageList.concat(oneMessageData);//数据拼接
					console.log("滚动到最下面的id");
					console.log(oneMessageData[0].id);
					//滚动到底部
					this.$nextTick(function() {
						//进入页面滚动到底部
						this.scrollToView = 'msg'+oneMessageData[0].id;
						this.$nextTick(function() {
							this.scrollAnimation = true;
						});
					});
					// 获取消息中的图片,并处理显示尺寸
					if(oneMessageData[0].type==2 ){
						this.msgImgList.push(oneMessageData[0].message);
					} 
					//非自己的消息震动 0为客服消息 1为用户消息
					if(oneMessageData[0].creator==0){
						uni.vibrateLong();
					}
				})
			},
			// 预览图片 点击放大图
			showPic(msg){
				uni.previewImage({
					indicator:"none",
					current:msg,
					urls: this.msgImgList
				});
			},
			// 播放语音
			playVoice(msg,id){
				this.playMsgid=id;
				this.AUDIO.src = msg;
				this.$nextTick(function() {
					this.AUDIO.play();
				});
			},
			// 录音开始
			voiceBegin(e){
				console.log("开始录制");
				console.log(e);
				if(e.touches.length>1){
					return ;
				}
				this.initPoint.Y = e.touches[0].clientY;
				this.initPoint.identifier = e.touches[0].identifier;
				this.RECORDER.start({format:"mp3"});//录音开始,
			},
			//录音开始UI效果
			recordBegin(e){
				this.recording = true;
				this.voiceTis='松开 结束';
				this.recordLength = 0;
				this.recordTimer = setInterval(()=>{
					this.recordLength++;
				},1000)
			},
			// 录音被打断
			voiceCancel(){
				this.recording = false;
				this.voiceTis='按住 说话';
				this.recordTis = '手指上滑 取消发送'
				this.willStop = true;//不发送录音
				this.RECORDER.stop();//录音结束
			},
			// 录音中(判断是否触发上滑取消发送)
			voiceIng(e){
				if(!this.recording){
					return;
				}
				let touche = e.touches[0];
				//上滑一个导航栏的高度触发上滑取消发送
				if(this.initPoint.Y - touche.clientY>=uni.upx2px(100)){
					this.willStop = true;
					this.recordTis = '松开手指 取消发送'
				}else{
					this.willStop = false;
					this.recordTis = '手指上滑 取消发送'
				}
			},
			// 结束录音
			voiceEnd(e){
				if(!this.recording){
					return;
				}
				this.recording = false;
				this.voiceTis='按住 说话';
				this.recordTis = '手指上滑 取消发送'
				this.RECORDER.stop();//录音结束
			},
			//录音结束(回调文件)
			recordEnd(e){
				var me=this;
				clearInterval(this.recordTimer);
				if(!this.willStop){
					console.log("要上传的语音");
					console.log(e.tempFilePath);
					console.log("要上传语音的时长");
					console.log(this.recordLength);
					if(this.recordLength<1){
						this.$u.toast("时间过短，请重新录制");
						return;
					}
					//上传文件
					uni.uploadFile({
						url: this.websocketOtherSendUrl,
						method:"POST",
						filePath:e.tempFilePath,
						name: 'file',
						header: {
						    'Content-Type': 'application/json',
							'token':uni.getStorageSync('token')
						},
						formData: {
							"type":3,
							"chattingId":me.id
						 },
						 success: (uploadFileRes) => {
							uni.hideLoading();
							console.log("成功");
							console.log(uploadFileRes); 
							console.log(JSON.parse(uploadFileRes.data));
							var res=JSON.parse(uploadFileRes.data);
							if (res.status == 0){
							    console.log('上传语音成功');
								me.getNewData();
							}else if(res.status==1){
								this.$u.toast(res.msg);
							}
						 },
					})
				}else{
					console.log('取消发送录音');
				}
				this.willStop = false;
			},
			// 切换语音/文字输入
			switchVoice(){
				this.hideDrawer();
				this.isVoice = this.isVoice?false:true;
			},
			discard(){
				return;
			}
		}
	}
</script>
<style lang="scss">
	@import "chat.scss";
</style>
