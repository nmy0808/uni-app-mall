<template>
	<view class="line-box" :style="calcStyle">
		<view class="line">
		</view>
	</view>
</template>

<script>
	export default {
		name:'comLine',
		props: {
			width: {
				type:[String,Number],
				default:750
			},
			height: {
				type:[String,Number],
				default:60
			}
		},
		computed:{
			calcStyle(){
				return{
					width: this.width + 'rpx',
					height: this.height + 'rpx'
				}
			}
		}
	}
</script>

<style lang="scss">
	.line-box{
		width: 750rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		margin: 0 auto;
		.line{
			width: 100%;
			height: 1px;
			background: #f7f3f9;
		}
	}
</style>
