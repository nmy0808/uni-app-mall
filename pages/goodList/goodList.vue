<template>
	<view>
		<comTabNav :data="tabList" @change="handleChangeTab"/>
	</view>
</template>

<script>
import comTabNav from '@/components/comTabNav/comTabNav.vue';
export default {
	components: { comTabNav },
	data() {
		return {
			tabList: [{ title: '全部', selected: true, field: 'all' }, { title: '口碑', selected: false, field: 'kk' }, { title: '热门', selected: false, field: 'hot' }]
		};
	},
	methods: {
		initNavigationTitle(title) {
			uni.setNavigationBarTitle({
				title
			});
		},
		handleChangeTab(list){
			this.tabList = list;
		}
	},
	onLoad({ name }) {
		this.initNavigationTitle(name);
	}
};
</script>

<style></style>
