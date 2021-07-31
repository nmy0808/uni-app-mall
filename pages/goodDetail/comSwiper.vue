<template>
	<view class="comSwiper">
		<swiper class="comSwiper-box" :autoplay="true" :circular="true" @change="handleChange">
			<swiper-item v-for="item in data" :key="item.id">
				<view class="comSwiper-box-item">
					<image class="comSwiper-box-item-img" :src="item.img"/>
				</view>
			</swiper-item>
		</swiper>
		<view class="comSwiper-interval" v-show="data.length">
			{{calcIntervalText}}
		</view>
	</view>
</template>

<script>
export default {
	name: 'comSwiper',
	props:{data:Array},
	data(){
		return{
			currentIndex: 0,
		}
	},
	computed:{
		calcIntervalText(){
			return `${this.currentIndex+1}/${this.data.length}`;
		}
	},
	methods:{
		handleChange(e){
			this.currentIndex = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
	.comSwiper{
		width: 750rpx;
		height: 750rpx;
		position: relative;
		&-box{
			width: 100%;
			height: 100%;
			&-item{
				width: 100%;
				height: 100%;
				&-img{
					width: 100%;
					height: 100%;
				}
			}
		}
		&-interval{
		position: absolute;
		right: 1.5em;
		bottom: 1em;
		width: 84rpx;
		height: 40rpx;
		border-radius: 20rpx;
		background: rgba($color: #000000, $alpha: 0.3);
		text-align: center;
		line-height: 40rpx;
		color: #fff;
		font-size: 20rpx;
		}
	}
</style>
