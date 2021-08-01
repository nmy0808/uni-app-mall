<template>
	<view class="comCartList">
		<view class="comCartList-empty" v-show="data.length === 0">购物车空空如也~</view>
		<template v-for="(item, index) in data">
			<comCartItem :data="item" :key="index" @change="handleChangeItem" @delete="handleDeleteCartItem" />
		</template>
	</view>
</template>

<script>
import comCartItem from './comCartItem.vue';
export default {
	name: 'comCartList',
	components: { comCartItem },
	props: { data: Array },
	methods: {
		handleChangeItem(item) {
			const copyData = JSON.parse(JSON.stringify(this.data));
			const findItem = copyData.find(it => it.goods_id === item.goods_id && it.spec === item.spec);
			findItem.selected = item.selected;
			findItem.number = item.number;
			this.$emit('change', copyData);
		},
		handleDeleteCartItem(item) {
			uni.$emit('deleteCartItem');
			this.$nextTick(() => {
				let copyData = JSON.parse(JSON.stringify(this.data));
				copyData = copyData.filter(it => {
					if (it.goods_id !== item.goods_id) {
						return true;
					} else {
						if (it.spec !== item.spec) {
							return true;
						} else {
							return false;
						}
					}
				});
				this.$emit('delete', copyData);
			});
		}
	},
	mounted() {}
};
</script>

<style lang="scss">
.comCartList {
	width: 690rpx;
	margin: 0 auto;
	&-empty {
		margin: 0 auto;
		margin-top: 1em;
		text-align: center;
		color: #dbd8dd;
		font-size: 30rpx;
	}
}
</style>
