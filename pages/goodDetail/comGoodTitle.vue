<template>
	<view class="goodTitle">
		<view class="goodTitle-price">
			¥{{data.price}}
		</view>
		<view class="goodTitle-name">
			{{data.name}}
		</view>
	</view>
</template>

<script>
export default{
		name: "comGoodTitle",
		props:{
			data: Object
		}
}
</script>

<style lang="scss" scoped>
	.goodTitle{
		width: 690rpx;
		margin: 0 auto;
		margin-top: 10rpx;
		&-price{
			font-size: 46rpx;
			color: #ea6f27;
			font-weight: bold;
		}
		&-name{
			font-size: 30rpx;
		}
	}
</style>
