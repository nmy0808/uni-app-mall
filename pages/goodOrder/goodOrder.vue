<template>
	<view>
		<comOrderList :data="order"/>
	</view>
</template>

<script>
	import comOrderList from './comOrderList.vue';
	export default {
		components:{comOrderList},
		data() {
			return {
				order:[]
			};
		},
		onShow() {
			this.order = uni.getStorageSync('order');
			console.log(this.order );
		},
		onBackPress() {
			uni.setStorageSync('order',[]);
		}
	}
</script>

<style lang="scss">

</style>
