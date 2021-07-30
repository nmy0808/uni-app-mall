<template>
	<view class="swiper">
		<swiper class="swiper-box" :autoplay="true" :circular="true" @change="handleChangeSwiper">
			<swiper-item v-for="it in data" :key="it.id">
				<image class="swiper-img" :src="it.img"></image></swiper-item>
		</swiper>
		<view class="swiper-indicator">
			<view class="swiper-indicator-dot" 
			  :style="{ width: i <= currentIndex ?calcActive:0}"
				v-for="(it, i) in data" 
				:key="it.id"></view>
			</view>
	</view>
</template>

<script>
export default {
	name:"comSwiper",
	props: {
		data: {
			type: Array,
			default: () => ([])
		}
	},
	data(){
		return {
			currentIndex : 0,
		}
	},
	computed:{
		calcActive(){ 
			return  100 / this.data.length + '%';
		}
	},
	methods:{
		handleChangeSwiper(e){
			this.currentIndex = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
.swiper {
	position: relative;
	width: 690rpx;
	height: 320rpx;
	margin: 0 auto;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0px 4px 12px rgba($color: #000000, $alpha: 0.2);
	&-box {
		width: 100%;
		height: 100%;
	}
	&-img {
		width: 100%;
		height: 100%;
	}
	&-indicator {
		display: flex;
		justify-content: left;
		position: absolute;
		left: 15rpx;
		bottom: 15rpx;
		width: 150rpx;
		height: 4rpx;
		background: #fff;
		background: rgba($color: #fff, $alpha: 0.4);
		&-dot {
			background: #fff;
			transition: all 300ms;
			width: 0;
			height: 100%;
			&.on {
				width: (100% / 3);
			}
		}
	}
}
</style>
