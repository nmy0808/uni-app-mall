<template>
	<view>
		<comTabNav :data="tabList" @change="handleChangeTab" />
		<comWaterfalls :data="currentList" />
	</view>
</template>

<script>
import interfaces from '@/utils/interfaces.js';
import comTabNav from '@/components/comTabNav/comTabNav.vue';
import comWaterfalls from '@/components/comWaterfalls/comWaterfalls.vue';
export default {
	components: { comTabNav, comWaterfalls },
	data() {
		return {
			currentfilterby: 'all',
			page: 1,
			pageSize: 6,
			tabList: [{ title: '全部', selected: true, filterby: 'all' }, { title: '口碑', selected: false, filterby: 'public' }, { title: '热门', selected: false, filterby: 'hot' }],
			currentList: []
		};
	},
	methods: {
		async initDataCurrentList() {
			const res = await this.$request({
				url: interfaces.getGoodsList + '/' + this.currentfilterby + '/' + this.page + '/' + this.pageSize
			});
			this.currentList = res.data;
		},
		initNavigationTitle(title) {
			uni.setNavigationBarTitle({
				title
			});
		},
		handleChangeTab({list,current}) {
			this.tabList = list;
			this.currentfilterby = current.filterby;
		}
	},
	onLoad({ name }) {
		this.initNavigationTitle(name);
		this.initDataCurrentList();
	}
};
</script>

<style></style>
