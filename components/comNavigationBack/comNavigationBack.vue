<template>
	<view class="comNavigationBack">
		<!-- #ifdef APP-PLUS || H5 -->
		<view class="comNavigationBack-back iconfont" @click="handleBack">
			&#xe679;
		</view>
		<!-- #endif -->
		<view class="comNavigationBack-cart iconfont">
			&#xe6af;
		</view>
	</view>
</template>

<script>
	export default {
		name:"comNavigationBack",
		data() {
			return {
				
			};
		},
		methods:{
			handleBack(){
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
.comNavigationBack{
	position: fixed;
	top: 0;
	/* ifdef APP-PlUS*/
	top:var(--status-bar-height);
	/* endif */
	left: 0;
	width: 750rpx;
	height: 50px;
	z-index: 10;
	&>.iconfont{
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background: rgba($color: #000000, $alpha: 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	&-back{
		left: 1em;
	}
	&-cart{
		right: 1em;
	}
}
</style>
