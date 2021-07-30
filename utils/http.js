function request(options) {
	if (!options.hideLoading) {
		uni.showLoading({
			title: "加载中..."
		})
	}
	return new Promise((resolve, reject) => {
		uni.request({
			...options,
			success(res) {
				if (res.statusCode && res.statusCode !== 200) {
					reject(res);
					uni.showToast({
						icon:'none',
						title: '请求失败'
					})
				}
				resolve(res.data);
			},
			fail(res) {
				reject(res);
				uni.showToast({
					icon:'none',
					title: '请求失败'
				})
			},
			complete() {
				uni.hideLoading();
			}
		})
	})
}
export default request
