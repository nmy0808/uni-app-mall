<template>
	<view class="water">
		<template v-for="item in data">
			<view class="water-item" :key="item.goods_id" @click="handToPage(item)">
				<image class="water-item-img" :src="item.img" mode="widthFix"></image>
				<view class="water-item-title">{{item.name}}</view>
				<view class="water-item-info">
					<text class="water-item-info-price">¥{{item.price}}</text>
					<text class="water-item-info-count">{{item.slogan}}人付款</text>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		name:"comWaterfalls",
		props:{
			data:{
				type:Array,
				default:()=>([])
			}
		},
		methods:{
			handToPage(item){
				this.$emit('to',item);
			}
		}
	}
</script>

<style lang="scss" scoped>
.water{
	padding-top: 1em;
	width: 690rpx;
	margin: 0 auto;
	column-count: 2;
	column-gap: 1em;
	&-item{
		overflow: hidden;
		margin-bottom: 1em;
		break-inside: avoid;
		width: 320rpx;
		border-radius: 20rpx;
		box-shadow: 0rpx 5rpx 25rpx rgba(0, 0, 0, 0.1);
		&-img{
			width: 100%;
		}
		&-title{
			display: -webkit-box;//盒子类型
			word-break: break-all;//自动换行的处理方法。允许在单词内换行
			text-overflow: ellipsis;//溢出时用...
			font-size: 30rpx;//自适应字体
			overflow: hidden;
			-webkit-box-orient: vertical;
			-webkit-line-clamp:2;//行数
			padding:0 0.5em;
			box-sizing: border-box;
		}
		&-info{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.5em;
			box-sizing: border-box;
			&-price{
				color: red;
				font-size: 28rpx;
				font-weight: bold;
			}
			&-count{
				color: #74707c;
				font-size: 16rpx;
			}
		}
	}
}
</style>
