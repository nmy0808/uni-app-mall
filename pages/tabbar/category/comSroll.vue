<template>
	<view class="scroll">
		<scroll-view class="scroll-menu" scroll-y="true" :style="{ height: calcScrollHeight }">
			<view class="scroll-menu-item" :class="{ on: index === currentIndex }" v-for="(item, index) in data" :key="index" @click="handleChangeMenu(index)">{{ item.title }}</view>
		</scroll-view>
		<scroll-view class="scroll-content" scroll-y="true" :style="{ height: calcScrollHeight }">
			<view class="scroll-content-banner">
				<template v-if="currentData">
					<image class="scroll-content-banner-img" :src="currentData.banner"></image>
				</template>
			</view>
			<view class="scroll-content-main">
				<template v-if="currentData">
					<template v-for="(item,index) in currentData.list" >
						<view class="scroll-content-main-item" :key="index" @click="handleToPage(item)">
							<image class="scroll-content-main-item-img" :src="`/static/img/category/list/` + item.img"></image>
							<view class="scroll-content-main-item-title">{{ item.name }}</view>
						</view>
					</template>
				</template>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	name: 'comScroll',
	props: ['data'],
	data() {
		return {
			currentIndex: 0
		};
	},
	computed: {
		calcScrollHeight() {
			const info = uni.getSystemInfoSync();
			// 可用高度
			const uh = info.windowHeight;
			// 状态栏高度
			const sH = info.statusBarHeight;
			// navigetion 高度
			const nH = 50;
			// 可用 - 状态 - nav
			const res = uh - sH - nH;
			return res + 'px';
		},
		currentData() {
			if (this.data) {
				return this.data[this.currentIndex];
			}
			return null;
		}
	},
	methods: {
		handleChangeMenu(index) {
			this.currentIndex = index;
		},
		handleToPage(item) {
			this.$emit('to', item);
		}
	}
};
</script>

<style lang="scss" scoped>
.scroll {
	display: flex;
	height: 100%;
	&-menu {
		width: 180rpx;
		height: 100%;
		background: #f0f0f0;
		&-item {
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			font-size: 28rpx;
			&.on {
				background: #fff;
				font-weight: bold;
				&::after {
					content: '';
					position: absolute;
					left: 0;
					top: 30%;
					bottom: 30%;
					width: 10rpx;
					background: pink;
				}
			}
		}
	}
	&-content {
		width: 570rpx;
		height: 100%;
		&-banner {
			width: 570rpx;
			height: 210rpx;
			display: flex;
			justify-content: center;
			&-img {
				width: 520rpx;
				height: 210rpx;
				box-shadow: 0px 2px 12px rgba($color: #000000, $alpha: 0.2);
			}
		}
		&-main {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			&-item {
				width: 33.33%;
				font-size: 24rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 30rpx 0;
				&-img {
					width: 106rpx;
					height: 106rpx;
					margin-bottom: 20rpx;
				}
			}
		}
	}
}
</style>
