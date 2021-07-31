<template>
	<view class="comTag">
		<view class="comTag-item" 
			:class="{on:currentIndex===index}" 
			v-for="(item,index) in data" 
			:key="index"
			@click="handleChangeTag(index)">
			{{item.name}}({{item.number}})
		</view>
	</view>
</template>

<script>
	export default{
		name:"comTag",
		props:{data:Array},
		data(){
			return{
				currentIndex: 0,
			}
		},
		methods:{
			handleChangeTag(index){
				this.currentIndex = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comTag{
		width: 690rpx;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		&-item{
			font-size: 24rpx;
			margin-right: 0.8em;
			margin-bottom: 0.8em;
			border-radius: 40rpx;
			padding: 10rpx 20rpx;
			background: #f8f8f8;
			border: 1px solid #dddddd;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #6d6d6d;
			&.on{
				border: 1px solid #e66071;
				color: #e66071;
			}
		}
	}
</style>
