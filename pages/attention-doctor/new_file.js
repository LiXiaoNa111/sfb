export const listenScrollTop = () => {
	document.body.addEventListener('focusout', () => {
		//软键盘收起的事件处理
		let ua = window.navigator.userAgent;
		let app = window.navigator.appVersion;
		//$alert('浏览器版本: ' + app + '\n' + '用户代理: ' + ua);
		if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
			//$alert('ios端');
			var currentPosition, timer;
			var speed = 1;
			timer = setInterval(function() {
				currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
				currentPosition -= speed;
				window.scrollTo(0, currentPosition); //页面向上滚动
				currentPosition += speed;
				window.scrollTo(0, currentPosition); //页面向下滚动
				clearInterval(timer);
			}, 100);
		} else if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
			//$alert('android端');
		}
	})
};
