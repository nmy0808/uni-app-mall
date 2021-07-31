<template>
	<view class="comCounter">
		<view class="comCounter-sub btn" @click="handleSub">
			-
		</view>
		<view class="comCounter-num">
			{{num}}
		</view>
		<view class="comCounter-add btn" @click="handleAdd">
			+
		</view>
	</view>
</template>

<script>
	export default {
		name:"comCounter",
		props:{
			num:[String,Number]
		},
		methods:{
			handleSub(){
				if(this.num===1)return;
				this.$emit('change',this.num-1)
			},
			handleAdd(){
				if(this.num===99)return;
				this.$emit('change',this.num+1)
			}
		}
	}
</script>

<style lang="scss">
.comCounter{
	display: flex;
	align-items: center;
	&-num{
		width: 3em;
		background-color: #f5f5f5;
		padding: 15rpx 0;
		text-align: center;
		margin: 0 10rpx;
	}
	.btn{
		padding: 15rpx 20rpx;
		background: #f5f5f5;
	}
}
</style>
