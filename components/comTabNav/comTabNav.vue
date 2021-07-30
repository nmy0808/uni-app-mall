<template>
	<view>
		<view class="tabNav">
			<template v-for="item in value">
				<view class="tabNav-item" @click="handleChangeTab(item)" :class="{ on: item.selected }" :key="item.title">{{ item.title }}</view>
			</template>
		</view>
		<view class="place">
			
		</view>
	</view>
</template>

<script>
export default {
	name: 'comTabNav',
	props: {
		value: {
			type: Array,
			default: []
		}
	},
	data() {
		return {};
	},
	methods:{
		handleChangeTab(item){
			const copyData = JSON.parse(JSON.stringify(this.value));
			copyData.forEach(it=>{
				if(it.title === item.title){
					it.selected = true;
				}else{
					it.selected = false;
				}
			})
			this.$emit('input',copyData);
			this.$emit('change',item);
		}
	}
};
</script>

<style lang="scss" scoped>
.tabNav {
	position: fixed;
	left: 0;
	top: 0;
	/* #ifdef H5 */
	top: var(--window-top);
	/* #endif */
	z-index: 19;
	background: #fff;
	width: 750rpx;
	height: 80rpx;
	display: flex;
	justify-content: space-between;

	&-item {
		width: 33.33%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #a0a0a0;
		position: relative;
		&.on {
			font-weight: bold;
			color: #000;
			&::after{
				content: "";
				position: absolute;
				left: 30%;
				right: 30%;
				bottom: 0;
				height: 6rpx;
				background: pink;
			}
		}
	}
}
.place{
	widows: 750rpx;
	height: 80rpx;
}
</style>
