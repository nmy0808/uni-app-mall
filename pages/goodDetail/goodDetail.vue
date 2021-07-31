<template>
	<view class="goodDetail">
		<comNavigationBack />
		<comSwiper :data="pageData.swiperList" v-if="pageData.swiperList.length > 0" />
		<comGoodTitle :data="info"/>
		<comGoodSelect :data="info" :selectList="pageData.spec" @changeSelect="handleChangeSelected" @changeNum="handleChangeNum"/>
		<comComment :data="pageData.comment"/>
	</view>
</template>

<script>
import interfaces from '@/utils/interfaces.js';
import comSwiper from './comSwiper.vue';
import comGoodTitle from './comGoodTitle.vue'
import comGoodSelect from './comGoodSelect.vue'
import comComment from './comComment.vue'
export default {
	name: 'goodDetail',
	components: { comSwiper ,comGoodTitle, comGoodSelect,comComment},
	data() {
		return {
			info: {},
			pageData: {
				comment: [],
				descriptionStr: '',
				spec: [],
				swiperList: []
			}
		};
	},
	methods: {
		initDataInfo(opt) {
			this.info = JSON.parse(opt.info);
		},
		initStatusBar() {
			uni.setNavigationBarTitle({
				title: this.info.name
			});
		},
		async getDataBanners() {
			const res = await this.$request({
				url: interfaces.getGoods
			});
			this.pageData = res.data;
		},
		handleChangeSelected(spec){
			this.info.spec= spec;
		},
		handleChangeNum(num){
			this.info.number = num;
		}
	},
	onLoad(opt) {
		this.initDataInfo(opt);
		// #ifndef APP-NVUE || H5
		this.initStatusBar();
		// #endif
		this.getDataBanners();
	}
};
</script>

<style lang="scss"></style>
