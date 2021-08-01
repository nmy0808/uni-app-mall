<template>
	<view>
		<comCartList :data="cartData" @change="handleChangeCart" @delete="handleDeleteCartItem" :key="key"/>
	</view>
</template>

<script>
	import comCartList from './comCartList'
	export default {
		name: 'cart',
		components:{comCartList},
		data() {
			return {
				cartData:[],
				key:1
			}
		},
		methods: {
			initDataCart(){
				const cartData = uni.getStorageSync('cart') || [];
				cartData.map(it=>it.selected = false);
				this.cartData = cartData;
			},
			handleChangeCart(cartData){
				this.cartData = cartData;
			},
			handleDeleteCartItem(cartData){
				this.key = Math.floor(Math.random()* 1000);
				this.cartData = cartData;
				uni.setStorageSync('cart',this.cartData);
			}
		},
		onShow() {
			this.initDataCart();
		}
	}
</script>

<style>

</style>
