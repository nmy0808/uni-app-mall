<template>
	<view class="com-title">{{ title }}</view>
</template>

<script>
export default {
	name: 'comTitle',
	props: {
		title: String,
		default: ''
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
	.com-title{
		width: 690rpx;
		height: 120rpx;
		display: flex;
		align-items: center;
		margin: 0 auto;
		font-size: 34rpx;
		font-weight: bold;
		color: #000;
	}
</style>
