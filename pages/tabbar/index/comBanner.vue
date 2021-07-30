<template>
	<view class="banner">
		<image class="banner-img" :src="src" mode="aspectFill"></image>
	</view>
</template>

<script>
export default {
	name:"comBanner",
	props: ['src'],
	created(){
		console.log(111);
		console.log(this.src);
	}
};
</script>

<style lang="scss">
	.banner{
		width: 690rpx;
		height: 290rpx;
		overflow: hidden;
		margin: 0 auto;
		box-shadow: 0px 2px 12px rgba($color: #000000, $alpha: 0.2);
		&-img{
			width: 100%;
			height: 100%;
		}
	}
</style>
