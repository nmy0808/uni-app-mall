<template>
	<view>
		<video id="myvideo" autoplay :muted="true" @fullscreenchange="handleCancelFullScreen" v-if="currentViedoPath && isShowVideo" :src="currentViedoPath" controls></video>
		<button type="default" @click="paly">播放</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowVideo: true	,
				currentViedoPath: `https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4`
			}
		},
		onLoad() {
			this.videoContext = uni.createVideoContext('myvideo',this)
		},
		methods: {
			handleCancelFullScreen(){},
			paly(){
				console.log(this.videoContext);
				this.videoContext.requestFullScreen({direction:0})
			},
		}
	}
</script>

<style>

</style>
