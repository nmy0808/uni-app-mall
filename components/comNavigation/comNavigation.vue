<template>
	<view class="headerSearch-outter" :style="{ height: calcHeaderHeight }">
		<view class="headerSearch">
			<!-- 城市 -->
			<view class="headerSearch-city">
				<text class="iconfont headerSearch-city-icon">&#xe650;</text>
				<text class="headerSearch-city-text">{{ city }}</text>
			</view>
			<!-- 搜索 -->
			<view class="headerSearch-search">
				<input class="headerSearch-search-inp" type="text" placeholder="some words..." placeholder-style="color:#c1c1c1;font-size:12px;" />
				<text class="headerSearch-search-icon iconfont">&#xe65c;</text>
			</view>
			<!-- 消息 -->
			<view class="headerSearch-msg"><text class="iconfont">&#xe70a;</text></view>
		</view>
	</view>
</template>

<script>
export default {
	name:'comNavigation',
	data() {
		return {
			city: '北京'
		};
	},
	computed: {
		calcHeaderHeight() {
			const statusHeight = uni.getSystemInfoSync().statusBarHeight;
			// 只在原生app上增加状态栏高度
			// #ifdef APP-PLUS
			return statusHeight + 50 + 'px';
			// #endif
			return 50 + 'px';
		}
	},
	methods: {}
};
</script>

<style lang="scss">
.headerSearch-outter {
	width: 750rpx;
}
.headerSearch {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	background: #fff;
	display: flex;
	align-items: center;
	height: 50px;
	width: 750rpx;
	justify-content: space-between;
	/* #ifdef APP-PLUS 	*/
	padding-top: var(--status-bar-height);
	/* #endif */
	&-city {
		width: 18%;
		display: flex;
		align-items: center;
		justify-content: center;
		&-icon {
			color: #fec10d;
		}
		&-text {
			font-size: 12px;
		}
	}
	&-msg {
		width: 10%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&-search {
		position: relative;
		width: 72%;
		height: 30px;
		border-radius: 30px;
		overflow: hidden;
		&-inp {
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			background: #f5f5f4;
			padding: 0 1em;
			box-sizing: border-box;
			font-size: 12px;
		}
		&-icon {
			color: #c2c1c1;
			position: absolute;
			right: 1em;
			top: 50%;
			transform: translateY(-50%);
		}
	}
}
</style>
