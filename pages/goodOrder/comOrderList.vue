<template>
	<view class="comOrderList">
		<view class="comOrderList-top">
			<view v-for="(item, index) in data" :key="index" class="comOrderList-top-item">
				<image :src="item.img" class="comOrderList-top-item-img"></image>
				<view class="comOrderList-top-item-info">
					<view class="comOrderList-top-item-info-title">{{ item.name }}</view>
					<view class="comOrderList-top-item-info-spec">选择:{{ item.spec }} 数量:{{ item.number }}</view>
					<view class="comOrderList-top-item-info-price">¥{{ item.price | toFixed }}</view>
				</view>
			</view>
		</view>
		<view class="comOrderList-middle">
			<view class="comOrderList-middle-item">
				<view class="comOrderList-middle-item-label">商品金额</view>
				<view class="comOrderList-middle-item-value">{{ calcTotalPrice | toFixed }}</view>
			</view>
			<view class="comOrderList-middle-item">
				<view class="comOrderList-middle-item-label">运费</view>
				<view class="comOrderList-middle-item-value">{{ freight | toFixed }}</view>
			</view>
		</view>
		<view class="comOrderList-bottom">
			<view class="comOrderList-bottom-box">
				<view class="comOrderList-bottom-box-totalPrice">
					合计 (含运费):
					<text class="comOrderList-bottom-box-totalPrice-red"> ¥{{calcTotalPriceAndFreight | toFixed}}</text>
				</view>
				<button class="comOrderList-bottom-box-btn">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'comOrderList',
	filters:{
		toFixed(n){
			return parseFloat(n).toFixed(2);
		}
	},
	props: { data: Array },
	data() {
		return {
			freight: 12
		};
	},
	computed: {
		calcTotalPrice() {
			let res = 0;
			this.data.forEach(it => (res += it.price * it.number));
			return res;
		},
		calcTotalPriceAndFreight() {
			let res = 0;
			this.data.forEach(it => (res += it.price * it.number));
			return res + this.freight;
		},
	},
	methods: {}
};
</script>

<style lang="scss">
	page{
		padding-bottom: 60px;
	}
.comOrderList {
	width: 690rpx;
	margin: 0 auto;
	&-top {
		box-sizing: border-box;
		border-radius: 20rpx;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		padding: 1em;
		&-item {
			width: 98%;
			height: 200rpx;
			margin: 0 atuo;
			display: flex;
			align-items: center;
			&-img {
				width: 160rpx;
				height: 160rpx;
				border-radius: 6px;
			}
			&-info {
				width: 460rpx;
				height: 150rpx;
				margin: 15rpx;
				&-title {
					font-size: 26rpx;
				}
				&-spec {
					margin: 2px 0;
					font-size: 18rpx;
					color: #bdbdbd;
					background: #f1f1f1;
					display: inline-block;
					padding: 0.5px 8px;
					border-radius: 10px;
				}
				&-price {
					font-size: 26rpx;
					color: #e66071;
					font-weight: bold;
				}
			}
		}
	}
	&-middle {
		width: 690rpx;
		margin: 0 auto;
		margin-top: 20px;
		box-sizing: border-box;
		border-radius: 20rpx;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
		padding: 1em;
		&-item {
			width: 100%;
			height: 40rpx;
			line-height: 40rpx;
			margin: 10px 0;
			font-size: 28rpx;
			display: flex;
			justify-content: space-between;
			&-label {
			}
			&-value {
				font-weight: bold;
				color: #e66575;
			}
		}
	}
	&-bottom {
		height: 50px;
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fafafa;
		padding: 0 1em;
		box-sizing: border-box;
		&-box{
			margin-left: auto;
			display: flex;
			align-items: center;
			&-totalPrice{
				font-size: 20rpx;
				margin-left: auto;
				&-red{
					font-size: 28rpx;
					color: #db5a6c;
					margin-left: 3px;
					font-weight: bold;
				}
			}
			&-btn{
				margin-left: 1em;
				height: 30px;
				background: #e66071;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #fff;
				font-size: 29rpx;
				border-radius: 20px;	
			}
		}
	}
}
</style>
