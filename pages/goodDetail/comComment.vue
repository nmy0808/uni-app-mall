<template>
	<view class="comComment" v-if="data.length>0">
		<view class="comComment-header">
			<view class="comComment-header-title">
				商品评价({{data.length}})
			</view>
			<view class="comComment-header-move" @click="handleGoPageRating">
				查看全部 >
			</view>
		</view>
		<view class="comComment-main" @click="handleGoPageRating">
			<view class="comComment-main-item">
				<view class="comComment-main-item-header">
					<image :src="calcOneComment.face" class="comComment-main-item-header-avatar"></image>
					<view class="comComment-main-item-header-name">
						{{calcOneComment.username}}
					</view>
				</view>
				<view class="comComment-main-item-text">
					{{calcOneComment.content}}
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"comComment",
		props:{data:Array},
		computed:{
			calcOneComment(){
				return this.data[0];
			}
		},
		methods:{
			handleGoPageRating(){
				uni.setStorage({
					key: 'comments',
					data: this.data
				})
				uni.navigateTo({
					url: '../goodRatings/goodRatings'
				})
			}
		}
	}
</script>

<style lang="scss">
	.comComment{
		width: 690rpx;
		margin: 0 auto;
		&-header{
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			font-size: 30rpx;
			&-title{
				color: #989898;
			}
			&-move{
				color: #44e59a;
			}
		}
		&-main{
			margin-top: 30rpx;
			&-item{
				&-header{
					display: flex;
					color: #a3a3a3;
					font-size: 24rpx;
					&-avatar{
						width: 40rpx;
						height: 40rpx;
						border-radius: 50%;
						margin-right: 0.3em;
					}
				}
				&-text{
					margin-top: 15rpx;
					color: #000;
					font-size: 24rpx;
				}
			}
		}
	}
</style>
