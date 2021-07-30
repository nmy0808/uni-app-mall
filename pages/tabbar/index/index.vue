<template>
	<view class="content">
		<com-navigation />
		<com-swiper :swiperList="swiperList"/>
		<com-category :categoryList="categoryList" @to="handleToPageCategory"/>
		<com-line width="690"/>
		<com-banner :src="banner"/>
		<com-title title="优惠活动"></com-title>
		<com-promotion :data="promotion" @to="handleToPageProm"/>
	</view>
</template>

<script>
import interfaces from '@/utils/interfaces.js';
import comNavigation from './comNavigation.vue';
import comSwiper from './swiper.vue';
import comCategory from './comCategory.vue';
import comBanner from './comBanner.vue';
import comPromotion from './comPromotion.vue';
import comLine from './comLine.vue';
import comTitle from '@/components/comTitle/comTitle.vue';
export default {
	components: {
		comNavigation,
		comSwiper,
		comCategory,
		comBanner,
		comPromotion,
		comLine,
		comTitle
	},
	data() {
		return {
			banner: '/static/img/category/ad.jpg',
			swiperList: [], //banner
			categoryList: [], // 分类
			promotion: [] //优惠活动
		};
	},
	onLoad() {
		this.initData();
		
	},
	methods: {
		// 初始化数据
		async initData() {
			let res = await this.$request({
				url: interfaces.getMallData
			});
			this.swiperList = res.data.swiperList;
			this.categoryList = res.data.categoryList;
			this.promotion = res.data.promotion;
		},
		handleToPageCategory(item){
			const id  = item.id;
			console.log(id);
		},
		handleToPageProm(item){
			console.log(item);
			uni.showToast({
				icon:'none',
				title:item.title
			})
		}
	}
};
</script>

<style lang="scss">
	
</style>
