<template>
	<view class="category">
		<view class="category-item" v-for="it in data" :key="it.id" @click="handleToPage(it)">
			<image class="category-item-img" :src="it.img" mode="aspectFill"></image>
			<view class="category-item-text">{{ it.name }}</view>
		</view>
	</view>
</template>

<script>
export default {
	name:'comcCategory',
	props: ['data', 'to'],
	methods: {
		handleToPage(item) {
			this.$emit('to', item);
		}
	}
};
</script>

<style lang="scss">
.category {
	width: 690rpx;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	&-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 30rpx;
		&-img {
			width: 82rpx;
			height: 82rpx;
		}
		&-text {
			margin-top: 4rpx;
			font-size: 24rpx;
		}
	}
}
</style>
