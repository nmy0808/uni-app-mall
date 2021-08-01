<template>
	<view>
		<comCartList :data="cartData" @change="handleChangeCart" @delete="handleDeleteCartItem" :key="key"/>
		<comCartBar :cartData="cartData" @change="handleSelectAll"/>
	</view>
</template>

<script>
	import comCartList from './comCartList'
	import comCartBar from './comCartBar.vue'
	export default {
		name: 'cart',
		components:{comCartList,comCartBar},
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
			},
			handleSelectAll(cartData){
				this.handleDeleteCartItem(cartData)
			}
		},
		onShow() {
			this.initDataCart();
		}
	}
</script>

<style>

</style>
