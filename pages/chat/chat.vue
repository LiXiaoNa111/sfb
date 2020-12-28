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
				<view class="row" v-for="(row,index) in messageList" :key="index" :id="'msg'+row.id">
					<!-- 自己发出的消息 -->
					<view class="my" v-if="row.sendId!=account&& row.mediaType!=4">
						<!-- 左-消息 -->
						<view class="left">
							<!-- 文字消息 -->
							<view v-if="row.mediaType==1" class="bubble">
								<rich-text :nodes="row.content"></rich-text>
							</view>
							<!-- 语音消息 -->
							<view v-if="row.mediaType==6" class="bubble voice" @tap="playVoice(row.content,row.id)" :class="playMsgid == row.id?'play':''">
								<view class="length">{{row.length}}''</view>
								<view class="icon my-voice"></view>
							</view>
							<!-- 图片消息 -->
							<view v-if="row.mediaType==2" class="bubble img" @tap="showPic(row.content)">
								<!-- :style="{'width': row.content.width+'px','height': row.content.height+'px'}" -->
								<!--阿里云图片压缩 缩放图 -->
								<image lazy-load mode="aspectFill" :src="row.content+'?x-oss-process=image/resize,l_150'"></image>
							</view>
							<!-- 视频消息  class="tui-video" -->
							<view v-if="row.mediaType==7" class="bubble video">
								<view style="position: relative;" @tap="toVideo(row.content)">
									<!-- 视频截图 第一帧 -->
									<image style="border-radius: 12rpx;width: 250rpx; height: 300rpx;" :src="row.content+'?x-oss-process=video/snapshot,t_1000,m_fast'"
									 mode="aspectFill"></image>
									<view style="width: 100%; height: 100%; position: absolute;top:0%; left: 0%;display: flex;flex-direction: column;align-items: center;justify-content: center;"
									 @tap="toVideo(row.content)">
										<image style=" width: 50rpx; height:50rpx;" src="../../static/image/icon_play.png" mode="aspectFill"></image>
									</view>
								</view>
							</view>
						</view>
						<!-- 右-头像 -->
						<view class="right">
							<image style="border-radius: 100rpx;" mode="aspectFill" :src="imageUrl==null ?'../../static/image/icon_tx_nor.png':imageUrl"></image>
						</view>
					</view>
					<!-- 收到医生的问诊单 -->
					<view class="view-right" v-if="row.mediaType==3 " @tap="toUpbill(row.recordId)">
						<view class="right-time">{{row.createTime}}</view>
						<view class="right-media-type-up">{{row.content}}</view>
					</view>
					<!-- 查看自己提交的问诊单 -->
					<view class="view-right" v-if="row.mediaType==4" @tap="tobill(row.recordId)">
						<view class="right-time">{{row.createTime}}</view>
						<view class="right-media-type">{{row.content}}</view>
					</view>
					<!-- 别人发出的消息 -->
					<view class="other" v-if="row.sendId==account">
						<view class="right" v-if="row.mediaType!=3">
							<view class="right-time">{{row.createTime}}</view>
							<view class="other">
								<!-- 左-头像 -->
								<view class="left">
									<image style="border-radius: 100rpx;" :src="img"></image>
								</view>
								<!-- 右-用户名称-时间-消息 -->

								<!-- 文字消息 -->
								<view v-if="row.mediaType==1" class="bubble">
									<rich-text :nodes="row.content.replace(/\n/g,'<br>')"></rich-text>
								</view>
								<!-- 语音消息 -->
								<view v-if="row.mediaType==6" class="bubble voice" @tap="playVoice(row.content,row.id)" :class="playMsgid == row.id?'play':''">
									<view class="icon other-voice"></view>
									<view class="length">{{row.length}}''</view>
								</view>
								<!-- 图片消息 -->
								<view v-if="row.mediaType==2" class="bubble img" @tap="showPic(row.content)">
									<image lazy-load mode="aspectFill" :src="row.content+'?x-oss-process=image/resize,l_150'"></image>
								</view>
								<!-- 推荐商品 -->
								<view v-if="row.mediaType==5" class="bubble recommend" @tap="toGoodDetail(row.goods.id)" style="justify-content: flex-start;align-items: flex-start; align-self: flex-start;background-color: #FFFFFF;">
									<image mode="aspectFill" :src="row.goods.img"></image>
									<view class="view-recommend">
										<view class="txt-name">{{row.goods.name}}</view>
										<view class="txt-subtitle">{{row.goods.subTitle}}</view>
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
					<view style="display: flex;justify-content: center; justify-content: center;flex-direction: column;">
						<view class="box" @tap="getImage">
							<image style="width: 50rpx; height: 40rpx;" src="../../static/image/icon_tp1.png" mode="aspectFill"></image>
							<!-- <view class="icon tupian2"></view> -->
						</view>
						<view style="width: 100%; text-align:center;">图片</view>
					</view>
					<view style="display: flex;justify-content: center; justify-content: center;flex-direction: column;">
						<view class="box" @tap="getVideo">
							<image style="width: 50rpx; height: 40rpx;" src="../../static/image/icon_sp.png" mode="aspectFill"></image>
							<!-- <view class="icon paizhao"></view> -->
						</view>
						<view style="width: 100%; text-align:center;">视频</view>
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
				platform:'',//平台
				isJurisdiction:'',//录音权限
				type:'',
				account:'',//对方账号
				id:'',//用户账号id
				img:'',//对方头像
				name:'',//对方用户名称
				pageNum:1,//页数
				pageSize:20,//每页条数
				imageUrl: null,//自己头像
				messageList:[],
				//文字消息
				textMsg:'',
				//消息列表
				isHistoryLoading:false,
				scrollAnimation:true,
				scrollTop:0,
				scrollToView:'',
				msgList:[],
				msgImgList:[],
				myuid:0,
				
				//录音相关参数
				// #ifndef H5
				//H5不能录音
				RECORDER:uni.getRecorderManager(),
				// #endif
				isVoice:false,
				voiceTis:'按住 说话',
				recordTis:"手指上滑 取消发送",
				recording:false,
				willStop:false,
				initPoint:{identifier:0,Y:0},
				recordTimer:null,
				recordLength:0,
				
				//播放语音相关参数
				AUDIO:uni.createInnerAudioContext(),
				playMsgid:null,
				VoiceTimer:null,
				// 抽屉参数
				popupLayerClass:'',
				// more参数
				hideMore:true,
				focus:false,
			};
		},
		async onLoad(option) {
			 console.log("我的id："+ uni.getStorageSync(this.ID));
			this.type=option.type;
			this.account=option.account;
			this.name=option.name;
			this.img=JSON.parse(decodeURIComponent(option.img));
			this.id='customer_'+uni.getStorageSync(this.ID);
			let mess=uni.getStorageSync(this.account);
			if(!this.$u.test.isEmpty(mess)){
				this.messageList=mess;
				console.log("获取到缓存的数据");
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
			uni.setNavigationBarTitle({
			　　title:option.name
			});
			this.getMessageData();
			console.log("头像");
			// console.log(uni.getStorageSync(this.HEADIMG));
			// if(uni.getStorageSync(this.HEADIMG).length){
				this.imageUrl=uni.getStorageSync(this.HEADIMG);
			// }else{
				// this.imageUrl=null
			// }
			
			
			//语音自然播放结束
			this.AUDIO.onEnded((res)=>{
				this.playMsgid=null;
			});
			//提交问诊单后通知
			uni.$on(this.INFORMCHATLIST,data=>{
				this.getNewData();
			})
			
			
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
			
			
			// 接受到消息的监听 只要开启服务收到消息就会得到监听
			// (也就是不管在跟那个医生的聊天页面只要患者发送消息就会监听到发送的消息) 
			// 所以要判断是否在当前页面 sendId==this.account
			
			uni.$on(this.SOCKETCHAT,data=>{
				console.log("收到嘻嘻嘻1111");
				console.log(data);
				  
				var oneMessageData=data;
				  //非自己的消息震动
				  if(oneMessageData.sendId==this.account){
					  this.messageList=this.messageList.concat(oneMessageData);//数据拼接
					  console.log("滚动到最下面的id");
					  console.log(oneMessageData.id);
					  //滚动到底部
					  this.$nextTick(function() {
						//进入页面滚动到底部
						this.scrollToView = 'msg'+oneMessageData.id;
						this.$nextTick(function() {
							this.scrollAnimation = true;
						});
					  });
				  
					// 获取消息中的图片,并处理显示尺寸
					  if(oneMessageData.mediaType==2 ){
						this.msgImgList.push(oneMessageData.content);
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
			uni.$off(this.INFORMCHATLIST);
			uni.$off(this.SOCKETCHAT);
		},
		methods:{
			//去提交问诊单
			toUpbill(recordId){
				uni.navigateTo({
					url:"../bill-list/bill-list?recordId="+recordId
				})
			},
			//查看问诊单
			tobill(recordId){
				uni.navigateTo({
					url:"../bill-list-check/bill-list-check?recordId="+recordId
				})
			},
			//医生推荐商品点击去详情购买产品
			toGoodDetail(id) {
				uni.navigateTo({
					url: "../shop-details/shop-details?id=" + id
				})
			},
			toVideo(url){
				uni.navigateTo({
					url: "../video/big-video?videoUrl=" + url + "&title=" + "视频"
				})
			},
			getVideo(){
				this.hideDrawer();
				var me=this;
				// 上传视频
				uni.chooseVideo({
				    maxDuration:60,
				    count: 1,
				    success: (responent) => {
				        let videoFile = responent.tempFilePath;
				        console.log("要上传的视频" );
				        console.log(videoFile );
						//对原视频先进行本地压缩
						//bug
						uni.showLoading();
				       uni.uploadFile({
				            url:me.sendChatUrl,
				            method:"POST",
				            filePath:videoFile,
				            name:'file',
							formData: {
								'from': me.id,
								'toUser': me.account,
								'mediaType':7
							},
				            success: (res) => {                    
				                let videoUrls = res.data //百度支持
				                console.log("上传视频成功" + videoUrls);
								me.getNewData();
				            }
				        })
				    }
				})
			},
			//获取聊天信息列表 加载初始页面消息
			getMessageData(){
				this.$u.get(this.customerMsgRecordUrl,{
					'receiver':this.account,
					'pageNum':this.pageNum,
					'pageSize':this.pageSize
				}).then(res=>{
					if(this.type==1){
						uni.$emit(this.INFORMNOREAD,'');
					}
					var newData = res.data.reverse();
					this.messageList=newData;//数组翻转
					uni.setStorageSync(this.account,this.messageList);
					console.log("去缓存的数据");
					console.log(this.messageList);
					// 获取消息中的图片,并处理显示尺寸
					for(let i=0;i<newData.length;i++){
						if(newData[i].mediaType==2 ){
							this.msgImgList.push(newData[i].content);
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
				}).catch(ex=>{
					if(ex.data.status==4){
						console.log(ex.data.msg);
						this.isHistoryLoading=false; 
					}
				})
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
					this.$u.get(this.customerMsgRecordUrl,{
						'receiver':this.account,
						'pageNum':this.pageNum,
						'pageSize':this.pageSize
					}).then(res=>{
						this.isHistoryLoading = false;
						var newData=res.data.reverse();
						
						// this.messageList=newData.concat(this.messageList);//数组翻转
						
						// 获取消息中的图片,并处理显示尺寸
						for(let i=0;i<newData.length;i++){
							if(newData[i].mediaType==2 ){
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
						 console.log(JSON.stringify(res.tempFilePaths));
						 console.log(me.id);
						 console.log(me.account);
						me.sendImg(res.tempFilePaths[0]);
				    }
				   });
			},
			//发送图片
			sendImg(path){
				//上传文件
				// uni.showLoading();
				uni.uploadFile({
					url: this.sendChatUrl, 
					filePath: path,
					name: 'file',
					formData: {
						'from': this.id,
						'toUser': this.account,
						'mediaType': 2
				 },
				 success: (uploadFileRes) => {
					console.log("成功");
					console.log(uploadFileRes.data); 
					this.getNewData();
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
				this.sendMsg(this.textMsg,1);
				this.textMsg = '';//清空输入框
				
			},
			// 发送消息 请求接口
			sendMsg(content,type){
				//1 文字消息 2 图片消息3 问诊单问题 4问诊单回复 5推荐商品 6语音消息 7视频消息
				console.log("要发送的信息");
				console.log(content);
				console.log(type);
				console.log(this.id);
				console.log(this.account);
				// uni.showLoading();
				this.$u.get("send/chat?"+
					"message="+content+"&"+
					"mediaType="+type+"&"+
					"from=" +this.id+"&"+
					"file="+content+"&"+
					"toUser="+this.account
				).then(res=>{
					this.getNewData();
					console.log("发送消息成功");
					console.log(res);
				})
			},
			
			//发送消息之后网络获取最新一条数据拼接在整个消息数据的后面
			getNewData(){
				console.log("开始获取第一条消息");
				this.$u.get(this.customerMsgRecordUrl,{
					'receiver':this.account,
					'pageNum':1,
					'pageSize':1
				}).then(res=>{
					uni.hideLoading();
					const oneMessageData= res.data;
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
					if(oneMessageData[0].mediaType==2 ){
						this.msgImgList.push(oneMessageData[0].content);
					} 
						
					//非自己的消息震动
					if(oneMessageData[0].sendId==account){
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
					
					// let min = parseInt(this.recordLength/60);
					// let sec = this.recordLength%60;
					// min = min<10?'0'+min:min;
					// sec = sec<10?'0'+sec:sec;
					// let time = min+':'+sec;
					
					console.log("要上传语音的时长");
					console.log(this.recordLength);
					if(this.recordLength<1){
						this.$u.toast("时间过短，请重新录制");
						return;
					}
					// uni.showLoading();
					//上传文件
					uni.uploadFile({
					    url:me.sendChatUrl,
					    method:"POST",
					    filePath:e.tempFilePath,
					    name:'file',
						formData: {
							'from': me.id,
							'toUser': me.account,
							'mediaType':6,
							'message':this.recordLength
							},
					    success: (res) => {                    
					        let videoUrls = res.data //百度支持
					        console.log("上传语音成功" + videoUrls);
							me.getNewData();
					    }
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
