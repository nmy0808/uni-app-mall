<template>
	<view class="userShare">
		<image class="userShare-img" src="../../static/img/myCode.jpg" mode="widthFix"></image>
		<!-- #ifndef H5 -->
		<view class="userShare-btn" @click="capture">保存至相册</view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<a class="userShare-btn" href="../../static/img/myCode.jpg" download>保存至本地</a>
		<!-- #endif -->
		<view class="bg"></view>
	</view>
</template>

<script>
export default {
	name: 'userShare',
	data() {
		return {};
	},
	mounted() {
		
	},
	methods: {
		capture() {
			uni.saveImageToPhotosAlbum({
				filePath: '../../static/img/myCode.jpg',
				success: function() {
					uni.showToast({
						title: '保存成功',
						icon: 'none'
					});
				},
				fail: function() {
					uni.showToast({
						title: '保存失败，请稍后重试',
						icon: 'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	position: relative;
	height: 100%;
}
.bg {
	content: '';
	position: absolute;
	height: 800rpx;
	bottom: 0;
	left: 0;
	width: 100%;
	background: #e66071;
	z-index: -1;
}
.userShare {
	flex-direction: column;
	display: flex;
	align-items: center;
	&-img {
		margin-top: 90rpx;
		transform: scale(80%);
		border-radius: 10px;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	}
	&-btn {
		margin-top: 20px;
		background: #fff;
		width: 160px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	}
	a{
		text-decoration: none;
		color: inherit;
	}
}
</style>
