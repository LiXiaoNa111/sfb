function toast(title, duration = 1500) {
	uni.showToast({
		title: title,
		icon: 'none',
		position:'bottom',
		duration: duration
	})
}

export default toast
