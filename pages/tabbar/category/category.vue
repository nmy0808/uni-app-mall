<template>
	<view>
		<comNavigation />
		<comScroll :data="categoryList" @to="handleToPageDetail"/>
		</view>
</template>

<script>
import comNavigation from '@/components/comNavigation/comNavigation';
import interfaces from '@/utils/interfaces.js';
import comScroll from './comSroll.vue'
export default {
	components: { comNavigation,comScroll },
	data() {
		return {
			categoryList: [],
			scrollHeight:0
		};
	},
	methods: {
		async initData() {
			const res = await this.$request({
				url: interfaces.getCategory
			});
			this.categoryList = res.data;
		},
		handleToPageDetail(item){
			uni.navigateTo({
				url: '/pages/goodList/goodList?name='+ item.name
			})
		}
	},
	onLoad() {
		this.initData()
	},

};
</script>

<style></style>
