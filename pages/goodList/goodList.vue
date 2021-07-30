<template>
	<view>
		<comTabNav v-model="tabList" @change="handleChangeTab" />
		<comWaterfalls :data="currentList" />
		<view class="loadingText">
			{{loadingText}}
		</view>
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
			loadingText: '',
			tabList: [{ title: '全部', selected: true, filterby: 'all' }, { title: '口碑', selected: false, filterby: 'public' }, { title: '热门', selected: false, filterby: 'hot' }],
			currentList: []
		};
	},
	methods: {
		async loadCurrentList() {
			const res = await this.$request({
				url: interfaces.getGoodsList + '/' + this.currentfilterby + '/' + this.page + '/' + this.pageSize
			});
			if(res.data && res.data.length>0){
				this.currentList = this.currentList.concat(res.data);
			}else{
				this.loadingText = '已全部加载完毕'
			}
		},
		initNavigationTitle(title) {
			uni.setNavigationBarTitle({
				title
			});
		},
		async handleChangeTab(current) {
			if(this.currentfilterby === current.filterby) return;
			this.page= 1;
			this.loadingText = '';
			this.currentList = [];
			this.currentfilterby = current.filterby;
			await this.loadCurrentList();
		}
	},
	onLoad({ name }) {
		this.initNavigationTitle(name);
		this.loadCurrentList();
	},
	async onPullDownRefresh() {
		this.loadingText = ''
		this.page = 1;
		this.currentList = [];
		await this.loadCurrentList();
		uni.stopPullDownRefresh();
	},
	async onReachBottom() {
		this.page++; 
		await this.loadCurrentList();
	}
};
</script>

<style scoped>
	.loadingText{
		width: 750rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20rpx;
		color: #d4d1d6;
	}
</style>
