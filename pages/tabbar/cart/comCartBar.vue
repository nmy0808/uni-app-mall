<template>
	<view class="comCartBar">
		<view class="comCartBar-sleectAll">
			<view class="comCartBar-sleectAll-checkBox" @click="handleSelectAll" :class="{ on: isSelectAll }"></view>
			<view @click="handleSelectAll">全选</view>
			<view class="comCartBar-sleectAll-deleteAll" @click="handleDeleteAll">删除</view>
		</view>
		<view class="comCartBar-sum">
			合计:¥{{ sumPrice }}
			<button class="comCartBar-sum-btn">结算{{ slelecedNum }}</button>
		</view>
	</view>
</template>

<script>
export default {
	name: 'comCartBar',
	props: { cartData: Array },
	data() {
		return {};
	},
	computed: {
		isSelectAll() {
			if (this.cartData.length === 0) return false;
			return this.cartData.every(it => it.selected);
		},
		sumPrice() {
			let res = 0;
			this.cartData.forEach(it => {
				if (it.selected) {
					res += it.price * it.number;
				}
			});
			return res.toFixed(2);
		},
		slelecedNum() {
			let res = 0;
			this.cartData.forEach(it => {
				if (it.selected) {
					res += it.number;
				}
			});
			return res;
		}
	},
	methods: {
		handleSelectAll() {
			const copyData = JSON.parse(JSON.stringify(this.cartData));
			if (this.isSelectAll) {
				copyData.forEach(it => (it.selected = false));
			} else {
				copyData.forEach(it => (it.selected = true));
			}
			this.$emit('change', copyData);
		},
		handleDeleteAll() {
			let copyData = JSON.parse(JSON.stringify(this.cartData));
			if (this.isSelectAll) {
				copyData = [];
			} else {
				copyData = copyData.filter(it => !it.selected);
			}
			this.$emit('change', copyData);
		}
	}
};
</script>

<style lang="scss">
.comCartBar {
	background: #fafafa;
	font-size: 26rpx;
	height: 50px;
	padding: 0 30rpx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	/* #ifdef H5*/
	bottom: var(--window-bottom);
	/* #endif */
	&-sleectAll {
		display: flex;
		z-index: 9;
		align-items: center;
		&-deleteAll {
			margin-left: 1em;
			color: #e66071;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #e66071;
			height: 50rpx;
			width: 100rpx;
			border-radius: 30rpx;
			box-sizing: border-box;
		}
		&-checkBox {
			margin: 0 20rpx;
			margin-right: 10rpx;
			align-self: center;
			width: 40rpx;
			height: 40rpx;
			border: 1px solid #e66071;
			border-radius: 50%;
			position: relative;
			&.on {
				&::after {
					content: '';
					width: 50%;
					height: 50%;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					background: #e66071;
					border-radius: 50%;
				}
			}
		}
	}
	&-sum {
		margin-left: auto;
		display: flex;
		align-items: center;
		&-btn {
			height: 50rpx;
			background: #e66071;
			color: white;
			line-height: 50rpx;
			border-radius: 30rpx;
			margin-left: 0.5em;
			font-size: 26rpx;
		}
	}
}
</style>
