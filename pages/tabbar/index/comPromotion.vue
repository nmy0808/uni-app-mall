<template>
	<view class="promotion">
		<view class="promotion-item" v-for="item in data" :key="item.id" @click="handleToPage(item)">
			<view class="promotion-item-title">{{item.title}}</view>
			<view class="promotion-item-sub">{{item.ad}}</view>
			<image class="promotion-item-img" :src="item.img" mode="aspectFill"></image>
			<view class="promotion-item-go">点击进入</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'comPromotion',
	props: {
		data: {
			type: Array,
			default: () => ([])
		}
	},
	methods:{
		handleToPage(item){
			this.$emit('to',item);
		}
	}
};
</script>

<style lang="scss">
.promotion {
	width: 690rpx;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	&-item {
		width: 49%;
		height: 212rpx;
		background: #eef9f9;
		margin-bottom: 14rpx;
		border-radius: 10rpx;
		position: relative;
		&-title {
			position: absolute;
			top: 20rpx;
			left: 20rpx;
			font-size: 30rpx;
		}
		&-sub {
			position:absolute;
			top: 70rpx;
			left: 20rpx;
			width: 12em;
			font-size: 24rpx;
			color: #acb0b0;
		}
		&-img {
			position:absolute;
			width: 140rpx;
			height: 140rpx;
			right: 10rpx;
			bottom: 30rpx;
		}
		&-go {
			position:absolute;
			left: 20rpx;
			bottom: 17rpx;
			font-size: 24rpx;
			color: #acb0b0;
		}
	}
}
</style>
