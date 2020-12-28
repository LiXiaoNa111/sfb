<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')

			//判断平台 用于支付	0APP 1小程序 2H5
			// #ifdef H5
			uni.setStorageSync(this.DEVICETYPE, 2)
			// #endif
			// #ifdef APP-PLUS
			uni.setStorageSync(this.DEVICETYPE, 0)
			// #endif
			// #ifdef MP-WEIXIN
			uni.setStorageSync(this.DEVICETYPE, 1)
			// #endif

			// 竖屏 ios
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			// #endif




			//全局初始化一次 如果登录的话 就初始一次socket 没登录的话 就在登录的时候初始
			//由于在引导页检测是否登录中已经初始化socket 所以这个地方没必要再初始化 一样的性质
			var isLogin = uni.getStorageSync(this.ISLOGIN);
			if (isLogin) {
				this.goSocket();
			}
			uni.$on(this.LOGINSOCKET, data => {
				console.log("登录成功来连接socket");
				this.goSocket();
			})



			// #ifdef APP-PLUS
			//接收到后台推送的数据message
			//根据type进行对应的操作
			// {
			// 	"__UUID__": "androidPushMsg162401289",
			// 	"title": "c测试标题",
			// 	"appid": "__UNI__B711683",
			// 	"content": "测试内容",
			// 	"payload": {
			// 		"msg": "成本靠的就是",
			// 		"param": 1,
			// 		"type": 1001
			// 	}
			// }
			// 接收到推送的监听
			var info = plus.push.getClientInfo();
			// {"id":"unipush","token":"a2d626cf9ea84125a583c4ebeb8d1b27","clientid":"a2d626cf9ea84125a583c4ebeb8d1b27",
			// "appid":"ldvtiydbABAEkTEG2g11B9","appkey":"Tr8iErjD6U6Ms476JioIR5"}
			console.log(JSON.stringify(info));

			plus.push.addEventListener('receive', message => {
				console.log("pushhhhhhhhhhh receive接收到推送的监听");
				uni.vibrateLong(); //接收到消息震动提醒
				uni.$emit(this.PUSHRECEIVE, '');
			}, false);

			//点击接收到的推送的监听
			plus.push.addEventListener('click', message => {
				console.log("pushhhhhhhhhhhhhhhh click");
				uni.$emit(this.PUSHMSG, message)
			}, false);
			// #endif


			//热更新
			// #ifdef APP-PLUS
			const that = this
			plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
				console.log("当前版本" + widgetInfo.version); //版本号

				that.$u.get(that.versionUrl).then(res => {
					if (res.status == 0) {
						console.log("最新版本");
						console.log(res.data.version);

						if (widgetInfo.version == res.data.version) {
							console.log("已为最新版本");
							return;
						}

						// 这里简单判定下，不相等就是有更新。  
						var currentVersions = widgetInfo.version.split('.');
						var resultVersions = res.data.version.split('.');

						// 说明有大版本更新  
						if (currentVersions[0] < resultVersions[0]) {
							console.log("大版本更新 ios引导去商店更新 Android直接更新包");
							uni.showModal({ //提醒用户更新
								title: "更新提示",
								content: '发现最新版本，请速速更新！',
								success: (modal) => {
									if (modal.confirm) {
										if (plus.os.name == "Android") {
											plus.runtime.openURL(res.data.pkgUrl);
										} else {
											console.log("ios去商店");
											//app后面可以写上你们软件的拼音~ id可以在苹果商店中分享软件链接中有~
											// id替换成尚方宝的 bug
											plus.runtime.launchApplication({
												action: this.AppStorePath
											}, function(e) {
												console.log('Open system default browser failed: ' + e.message);
											});
										}
									}
								}
							})
						} else {
							// 其它情况均认为是小版本更新 (热更新)
							console.log("小版本更新 无感热更新");
							uni.downloadFile({
								url: res.data.wgtUrl,
								success: (downloadResult) => {
									if (downloadResult.statusCode === 200) {
										plus.runtime.install(downloadResult.tempFilePath, {
											force: false
										}, function() {
											console.log('安装成功...');
											plus.runtime.restart();
										}, function(e) {
											console.error('安装失败...');
										});
									}
								}
							})
						}
					}
				})
			});
			// #endif
		},
		data(){
			return{
				kfSocketTask:''
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onUnload: function() {
			//从应用中去登录成功后给通知更换用户的登录状态
			//由于通知有好几处 所以到当前页面收到通知之后不能立即移除监听
			uni.$off(this.INFORMLOGIN);
			uni.$off(this.LOGINSOCKET);
			//断开socket连接
			this.kfSocketTask.close();
			this.socket.disconnect();
		},
		methods: {
			goSocket() {
				var me=this;
				var id = 'customer_' + uni.getStorageSync(this.ID);
					console.log('患者WebSocket连接id:'+id);
				this.socketLocal(id);
				this.socket.on("chat", (message) => {
					console.log('患者app患者收到服务器内容：' + message);
					
					var pages = getCurrentPages();
					var page = pages[pages.length - 1];
					console.log(page.route);
					if(page.route=="pages/chat/chat"){
						uni.$emit(me.SOCKETCHAT,message);
					}else{
						uni.$emit(me.INFORMNOREAD,'');
					}
					uni.vibrateLong();
				});
				
				this.getCustomerId();

			},
			getCustomerId() {
				var me = this;
				uni.request({
					url: this.chattingIdUrl,
					data: {
						type: 2,
						id: uni.getStorageSync(this.ID)
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'token': uni.getStorageSync('token')
					},
					method: 'POST',
					success: (res) => {
						me.id = res.data.data.id
						console.log("获取聊天室id" + me.id);
						uni.setStorageSync(me.KFCHATID,me.id);
						console.log("连接客服的socket：" + me.websocketUrl + me.id + "customer");
						me.kfSocketTask = uni.connectSocket({
							url: me.websocketUrl + me.id + "customer",
							complete: () => {}
						});
						
					
						/* ********************客服*********************/
						me.kfSocketTask.onOpen(function(res) {
							console.log('客服WebSocket连接已打开！');
						});

						me.kfSocketTask.onError(function(res) {
							console.log('客服WebSocket连接打开失败，请检查！');
							console.log(JSON.stringify(res));
						});

						me.kfSocketTask.onMessage(function(res) {
							console.log('客服app患者收到服务器内容：' + res.data);
							//如果当前页面是聊天页就去通知kfchat 否则刷新未读消息数
							var pages = getCurrentPages();
							var page = pages[pages.length - 1];
							console.log(page.route);
							if(page.route=="pages/chat/kf-chat"){
								uni.$emit(me.SOCKETKFCHAT,res.data);
							}else{
								uni.$emit(me.INFORMNOREAD,'');
							}
							uni.vibrateLong();
						});

						me.kfSocketTask.onClose(function(res) {
							console.log('客服WebSocket 已关闭！');
						});
					},
					fail(ex) {
						console.log("获取客服聊天室id error");
						console.log(ex);
					}
				});
			},
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* u-flex-#{$i} 这个地方貌似冲突  */
	/* @import "uview-ui/index.scss"; */
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";

	/*覆盖文本编辑器里面的图片的大小*/
	uni-rich-text img {
		display: block;
		max-width: 100% !important;
		padding: 0;
		margin: 0;
	}

	uni-rich-text p {
		padding: 0;
		margin: 0;
	}
</style>
