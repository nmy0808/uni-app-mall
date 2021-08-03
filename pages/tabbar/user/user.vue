<template>
	<view class="page-user">
		<comUserInfo/>
	</view>
</template>

<script>
	import comUserInfo from './comUserInfo';
	export default {
		name:'user',
		components:{comUserInfo},
		data() {
			return {
			}
		},
		onLoad() {
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
page{
	// width: 690rpx;
	// margin: 0 auto;
}
</style>
