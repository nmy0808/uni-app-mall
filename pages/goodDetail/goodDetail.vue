<template>
	<view class="goodDetail">
		<comNavigationBack />
		<comSwiper :data="pageData.swiperList"  />
		<comGoodTitle :data="info"/>
		<comGoodSelect :data="info" :selectList="pageData.spec" @changeSelect="handleChangeSelected" @changeNum="handleChangeNum"/>
		<comComment :data="pageData.comment"/>
		<comGoodDesc :data="pageData.descriptionStr"/>
		<comGoodNav v-model="goodStatus"/>
	</view>
</template>

<script>
import interfaces from '@/utils/interfaces.js';
import comSwiper from './comSwiper.vue';
import comGoodTitle from './comGoodTitle.vue'
import comGoodSelect from './comGoodSelect.vue'
import comComment from './comComment.vue'
import comGoodDesc from './comGoodDesc.vue'
import comGoodNav from './comGoodNav.vue'
export default {
	name: 'goodDetail',
	components: { comSwiper ,comGoodTitle, comGoodSelect,comComment, comGoodDesc,comGoodNav},
	data() {
		return {
			info: {},
			pageData: {
				comment: [],
				descriptionStr: '',
				spec: [],
				swiperList: [],
			},
			goodStatus:{
				share:false,
				coolect:false,
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
