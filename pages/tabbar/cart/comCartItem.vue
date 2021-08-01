<template>
	<view class="comCartItem" @touchstart="handleTouchStart" @touchmove="handleTouchMove">
		<view class="comCartItem-item " :class="{ on: isOn, ani: isAmi }" ref="item">
			<view class="comCartItem-item-checkBox" :class="{on: data.selected}" @click="handleChangeSelected"></view>
			<view class="comCartItem-item-centent">
				<image class="comCartItem-item-centent-img" :src="data.img"></image>
				<view class="comCartItem-item-centent-info">
					<view class="comCartItem-item-centent-info-title">{{ data.name }}</view>
					<view class="comCartItem-item-centent-info-spec">{{ data.spec }}</view>
					<view class="comCartItem-item-centent-info-bottom">
						<view class="comCartItem-item-centent-info-bottom-price">¥{{ data.price }}</view>
						<view class="comCartItem-item-centent-info-bottom-counter">
							<comCounter :num="data.number" @change="handleChangeNumber" />
							</view>
					</view>
				</view>
			</view>
			<view class="comCartItem-item-delete" @click="handleDeleteItem">删除</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'comCartItem',
	props: { data: Object },
	data() {
		return {
			isOn: null,
			isAmi: true,
			touchStartPistion: {
				pageX: null,
				pageY: null
			}
		};
	},
	methods: {
		handleChangeNumber(num) {
			const copyData = JSON.parse(JSON.stringify(this.data));
			copyData.number = num;
			this.$emit('change', copyData);
		},
		handleTouchStart(e) {
			if (e.touches.length > 1) return;
			const { pageX, pageY } = e.touches[0];
			this.touchStartPistion = { pageX, pageY };
		},
		handleTouchMove(e) {
			const { pageX, pageY } = e.touches[0];
			if(Math.abs(pageX-this.touchStartPistion.pageX) < Math.abs(pageY - this.touchStartPistion.pageY) ){
				return;
			}
			if(pageX-this.touchStartPistion.pageX<0){
				this.openMenu();
			}else{
				this.closeMenu();
			}
		},
		handleChangeSelected(){
			const copyData = JSON.parse(JSON.stringify(this.data));
			copyData.selected = !copyData.selected;
			this.$emit('change', copyData);
		},
		handleDeleteItem(){
			this.$emit('delete',this.data);
		},
		openMenu(){
			this.isOn = true;
		},
		closeMenu(){
			this.isOn = false;
		}
	},
	created() {
		uni.$on('deleteCartItem',()=>{
			this.isAmi = false;
			this.closeMenu();
			this.$nextTick(()=>{
				this.isAmi = true;
			})
		});
	}
};
</script>

<style lang="scss">
.comCartItem {
	width: 100%;
	height: 204rpx;
	margin: 20rpx 0;
	border-radius: 20rpx;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	overflow: hidden;
	&-item {
		width: 130%;
		height: 204rpx;
		// border: 1px solid;
		display: flex;
		&.ani{
			transition: all 200ms;
		}
		&.on {
			transform: translateX(-180rpx);
		}
		&-checkBox {
			margin: 0 20rpx;
			align-self: center;
			width: 40rpx;
			height: 40rpx;
			border: 1px solid #e66071;
			border-radius: 50%;
			position: relative;
			&.on{
				&::after{
					content: '';
					width: 50%;
					height: 50%;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					background: #e66071;
					border-radius: 50%;
				}
			}
		}
		&-centent {
			display: flex;
			align-items: center;
			width: 610rpx;
			&-img {
				width: 160rpx;
				height: 160rpx;
				border-radius: 16rpx;
			}
			&-info {
				margin: 0.5em;
				width: 400rpx;
				height: 160rpx;
				&-title {
					font-size: 24rpx;
					display: -webkit-box; //盒子类型
					word-break: break-all; //自动换行的处理方法。允许在单词内换行
					text-overflow: ellipsis; //溢出时用...
					overflow: hidden;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2; //行数
				}
				&-spec {
					display: inline-block;
					font-size: 20rpx;
					color: #adabaf;
					padding: 0.1em 0.4em;
					background: #f6f3f9;
				}
				&-bottom {
					display: flex;
					justify-content: space-between;
					&-price {
						font-size: 26rpx;
						margin-top: 10rpx;
					}
					&-counter {
						transform: translateY(-30rpx);
					}
				}
			}
		}
		&-delete {
			width: 180rpx;
			height: 100%;
			font-size: 24rpx;
			background: #e66071;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			border-radius: 0 20rpx 20rpx 0;
		}
	}
}
</style>
