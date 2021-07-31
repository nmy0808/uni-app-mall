<template>
	<view class="comGoodNav">
		<view class="comGoodNav-left">
			<view class="comGoodNav-left-share comGoodNav-left-item" :class="{on:value.share}" @click="handleShare">
				<view class="iconfont">&#xe7e0;</view>
				分享
			</view>
			<view class="comGoodNav-left-coolect comGoodNav-left-item" :class="{on:value.coolect}" @click="handleCoolect">
				<view class="iconfont">&#xe64c;</view>
				{{value.coolect?'已':''}}收藏
			</view>
		</view>
		<view class="comGoodNav-right">
			<view class="comGoodNav-right-cart" @click="handleCart">加入购物车</view>
			<view class="comGoodNav-right-buy" @click="handleBuy">立即购买</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'comGoodNav',
	props:{value:Object},
	methods: {
		handleShare() {
			const copyJson = JSON.parse(JSON.stringify(this.value));
			copyJson.share = !copyJson.share;
			this.$emit('share');
			this.$emit('input',copyJson);
		},
		handleCoolect() {
			const copyJson = JSON.parse(JSON.stringify(this.value));
			copyJson.coolect = !copyJson.coolect;
			this.$emit('coolect');
			this.$emit('input',copyJson);
		},
		handleCart() {
			this.$emit('cart');
		},
		handleBuy() {
			this.$emit('buy');
		}
	}
};
</script>

<style lang="scss">
.comGoodNav {
	padding: 0 30rpx;
	height: 50px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
	display: flex;
	align-items: center;
	border-top: 1px solid #ebebeb;
	&-left {
		display: flex;
		font-size: 26rpx;
		color: #787878;
		&-item {
			text-align: center;
			margin-right: 0.3em;
			width: 40px;
			.iconfont {
				font-size: 20px;
			}
		}
		&-coolect.on{
			color: #db5568;
		}
	}
	&-right {
		margin-left: auto;
		display: flex;
		color: #fff;
		font-size: 28rpx;
		&-cart {
			background: #e9ad62;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 20px;
			border-radius: 30px 0 0 30px;
		}
		&-buy {
			background: #e66071;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 20px;
			border-radius: 0 30px 30px 0;
		}
	}
}
</style>
