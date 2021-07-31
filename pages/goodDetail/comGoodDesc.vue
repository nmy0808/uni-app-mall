<template>
	<view class="comGoodDesc">
		<rich-text :nodes="data"></rich-text>
	</view>
</template>

<script>
	export default {
		name:'comGoodDesc',
		props:{data:String}
	}
</script>

<style lang="scss">
	.comGoodDesc{
		width: 690rpx;
		padding-bottom: 50px;
		margin: 0 auto;
	}
</style>
