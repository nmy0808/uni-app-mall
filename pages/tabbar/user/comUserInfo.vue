<template>
	<view class="comUserInfo">
		<view class="comUserInfo-avatar">
			<image class="comUserInfo-avatar-img" :src="`/static/img/face.jpg`"></image>
			<view class="comUserInfo-avatar-name">
				MingYan
			</view>
		</view>
		<view class="comUserInfo-qrcode" @click="handleToPageShare">
			<view class="icon iconfont">&#xe67c;</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'comUserInfo',
		props:{},
		data(){
			return{
			
		}},
		computed:{},
		methods:{
			handleToPageShare(){
				uni.navigateTo({
					url: '/pages/userShare/userShare'
				})
			}
		},
	}
</script>

<style lang="scss">
	.comUserInfo{
		height: 230rpx;
		background: #e66071;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		&-avatar{
			display: flex;
			align-items: center;
			&-img{
				height: 140rpx;
				width: 140rpx;
				border: 1px solid #fff;
				border-radius: 50%;
				margin-right: 0.5em;
			}
			&-name{
				color: #fff;
			}
		}
		&-qrcode{
			align-self: center;
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to left, #fbbb37 0%, #fcf0d0 105%);
			.icon {
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}
</style>
