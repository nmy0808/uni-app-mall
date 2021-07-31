<template>
	<view class="goodSelect"@click="handleOpenPopup" >
		<view class="goodSelect-left">选择</view>
			<view class="goodSelect-right">
				<view class="goodSelect-right-title">选择规格</view>
				<view class="goodSelect-right-selectBox">
					<view class="goodSelect-right-selectBox-item" 
						:class="{on:item === data.spec}" 
						v-for="(item,index) in selectList" 
						:key="index">
							{{item}}
					</view>
				</view>
			</view>
			<view class="goodSelect-move iconfont">
				&#xe6a3;
			</view>
		<comBttomPopups ref="popup">
			<!-- 弹窗插槽 -->
			<view class="slot-popup">
				<view class="slot-popup-title">
					选择规格
				</view>
				<view class="slot-popup-select">
					<view class="slot-popup-select-item" 
						@click="handleChangeSelect(item)"	
						:class="{on:item === data.spec}" 
						v-for="item in selectList" 
						:key="item">
						{{ item }}
					</view>
				</view>
				<view class="slot-popup-length">
					<view class="slot-popup-length-left">
						数量
					</view>
					<view class="slot-popup-length-counter">
						<comCounter :num="data.number" @change="handleChangeNum"/>
					</view>
				</view>
				<button class="slot-popup-button" type="default" @click.stop="handleClosePopup">确定</button>
			</view>
		</comBttomPopups>
	</view>
</template>

<script>
export default {
	props: { data: Object, selectList: Array},
	methods:{
		handleOpenPopup(){
			this.$refs.popup.open();
		},
		handleChangeSelect(item){
			this.$emit('changeSelect',item)
		},
		handleClosePopup(){
			this.$refs.popup.close();
		},
		handleChangeNum(num){
			this.$emit('changeNum',num);
		}
	}
};
</script>

<style lang="scss">
	.goodSelect{
		padding-top: 40rpx;
		display: flex;
		width: 690rpx;
		margin: 0 auto;
		&-left{
			font-size: 26rpx;
			width: 80rpx;
			display: flex;
			align-items: center;
			color: #9e9e9e;
		}
		&-right{
			&-title{
				font-size: 22rpx;
				padding: 4rpx 0;
			}
			&-selectBox{
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #9e9e9e;
				&-item{
					padding: 10rpx 14rpx;
					background: #f5f5f5;
					margin-right: 0.5em;
					box-sizing: border-box;
					&.on{
						border: 1px solid #ea6f4b;
					}
				}
			}
		}
		&-move{
			display: flex;
			align-items: center;
			margin-left: auto;
			width: 40rpx;
			color: #9f9f9f;
		}
	// 弹框插槽
	.slot-popup{
		padding-top: 40rpx;
		width: 690rpx;
		margin: 0 auto;
		font-size: 30rpx;
		&-title{}
		&-select{
			margin-top: 20rpx;
			display: flex;
			height: 80rpx;
			&-item{
				padding: 0 20rpx;
				height: 60rpx;
				background: #f5f5f5;
				margin-right: 10rpx;
				font-size: 26rpx;
				line-height: 60rpx;
				box-sizing: border-box;
				border: 1px solid transparent;
				&.on{
					border: 1px solid #df6545;
				}
			}
		}
		&-length{
			margin-top: 20rpx;
			display: flex;
			&-left{
				margin-right: auto;
				display: flex;
				align-items: center;
			}
		}
		&-button{
			height: 80rpx;
			font-size: 30rpx;
			position: absolute;
			bottom: 20rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 690rpx;
			background: #ea6f4b;
			color: #fff;
			border-radius: 80rpx;
		}
	}
}
</style>
