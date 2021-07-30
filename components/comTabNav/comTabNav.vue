<template>
	<view class="tabNav">
		<template v-for="item in data">
			<view class="tabNav-item" @click="handleChangeTab(item)" :class="{ on: item.selected }">{{ item.title }}</view>
		</template>
	</view>
</template>

<script>
export default {
	name: 'comTabNav',
	props: {
		data: {
			type: Array,
			default: []
		}
	},
	data() {
		return {};
	},
	methods:{
		handleChangeTab(item){
			const copyData = JSON.parse(JSON.stringify(this.data));
			copyData.forEach(it=>{
				if(it.title === item.title){
					it.selected = true;
				}else{
					it.selected = false;
				}
			})
			this.$emit('change',copyData)
		}
	}
};
</script>

<style lang="scss" scoped>
.tabNav {
	widows: 750rpx;
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
</style>
