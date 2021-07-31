<template>
	<view class="comCommentList">
		<view class="myVideo">
			<video id="video" :muted="true" @fullscreenchange="handleCancelFullScreen"  :src="currentViedoPath" autoplay controls></video>
		</view>
		<template v-for="(item, index) in data">
			<view class="comCommentList-main-item" :key="index">
				<view class="comCommentList-main-item-header">
					<image :src="item.face" class="comCommentList-main-item-header-avatar"></image>
					<view class="comCommentList-main-item-header-name">
						<view class="">{{ item.username }}</view>
						<view class="comCommentList-main-item-header-name-spec">{{ item.spec }}</view>
					</view>
					<view class="comCommentList-main-item-header-date">{{ item.date }}</view>
				</view>
				<view class="comCommentList-main-item-box">
					<view class="comCommentList-main-item-box-text">{{ item.content }}</view>
					<view class="comCommentList-main-item-box-picAndImg">
						<view class="comCommentList-main-item-box-vidAndImg">
							<!-- 视频 -->
							<template v-for="(video, index) in item.video">
								<view @click="handleVideoFullScreen(video.path)" class="comCommentList-main-item-box-vidAndImg-video  comCommentList-main-item-box-vidAndImg-item">
									<image class="comCommentList-main-item-box-vidAndImg-item-cover" :src="video.img" :key="index"></image>
									<view class="comCommentList-main-item-box-vidAndImg-item-icon iconfont">&#xe7e9;</view>
								</view>
							</template>
							<!-- 音频 -->
							<template v-for="(img,index) in item.img">
								<image
									@click="handleViewBigImg(img, item)"
									:src="img"
									class="comCommentList-main-item-box-vidAndImg-img comCommentList-main-item-box-vidAndImg-item"
									:key="index"
								>
								</image>
							</template>
						</view>
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
export default {
	name: 'comCommentList',
	props: { data: Array },
	data() {
		return {
			isShowVideo: false,
			currentViedoPath: '222',
			videoContext: null
		};
	},
	methods: {
		handleViewBigImg(img, item) {
			let v = [];
			if (item.video && Array.isArray(item.video)) {
				v = item.video.map(v => v.img);
			}
			const imgs = item.img;
			const urls = v.concat(imgs);
			uni.previewImage({
				current: img,
				urls
			});
		},
		// 全屏
		handleVideoFullScreen(path){
			this.isShowVideo = true;
			this.currentViedoPath = path;
			this.$nextTick(()=>{
				this.videoContext.requestFullScreen({direction:0});
				this.videoContext.play();
			})
		},
		// 取消全屏
		handleCancelFullScreen(e){
			console.log(e.detail.fullScreen);
			this.$nextTick(()=>{
				if(!e.detail.fullScreen){
					this.isShowVideo= false;
					this.currentViedoPath = '';
				}
			})
		}
	},
	mounted() {
		//创建video上下文
		this.videoContext = uni.createVideoContext('video',this);
	}
};
</script>

<style lang="scss">
	.myVideo{
		position: fixed;
		left: 100%;
		top: 50%;
		z-index: 30;
	}
.comCommentList {
	width: 690rpx;
	margin: 0 auto;
	&-main {
		margin-top: 30rpx;
		&-item {
			margin-top: 34rpx;
			&-header {
				display: flex;
				color: #282c35;
				font-size: 30rpx;
				&-avatar {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					margin-right: 0.3em;
				}
				&-name {
					&-spec {
						font-size: 26rpx;
						color: #a0a0a0;
						margin-top: 5rpx;
					}
				}
				&-date {
					font-size: 24rpx;
					color: #a0a0a0;
					margin-left: auto;
					margin-top: 10rpx;
				}
			}
			&-box {
				width: 620rpx;
				margin-left: auto;
				&-text {
					margin-top: 15rpx;
					color: #000;
					font-size: 30rpx;
				}
				&-vidAndImg {
					margin-top: 10rpx;
					display: flex;
					flex-wrap: wrap;
					&-item {
						width: 140rpx;
						height: 140rpx;
						margin-right: 15rpx;
						margin-bottom: 15rpx;
						border-radius: 10rpx;
						position: relative;
						overflow: hidden;
						&-cover {
							width: 100%;
							height: 100%;
							width: 140rpx;
							height: 140rpx;
						}
						&-icon {
							color: #fff;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							font-size: 60rpx;
							font-weight: bold;
						}
						&:nth-child(4n) {
							margin-right: 0;
						}
					}
				}
			}
		}
	}
}
</style>
