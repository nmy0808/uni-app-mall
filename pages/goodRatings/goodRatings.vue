<template>
	<view class="goodRatings">
		<comTag :data="labelList"/>
		<comCommentList :data="comments"/>
	</view>
</template>

<script>
	import comTag from './comTag.vue'
	import comCommentList from './comCommentList.vue'
	export default {
		name:"goodRatings",
		components:{comTag,comCommentList},
		data() {
			return {
				comments:[],
				labelList: [{
						name: '全部',
						number: 25,
						type: 'all'
					},
					{
						name: '好评',
						number: 23,
						type: 'good'
					},
					{
						name: '中评',
						number: 1,
						type: 'secondary'
					},
					{
						name: '差评',
						number: 1,
						type: 'poor'
					},
					{
						name: '有图',
						number: 12,
						type: 'img'
					},
					{
						name: '视频',
						number: 2,
						type: 'video'
					},
					{
						name: '追加',
						number: 2,
						type: 'append'
					}
				]
			};
		},
		methods:{
			infoDataComments(){
				this.comments = uni.getStorageSync('comments');
			}
		},
		onLoad() {
			this.infoDataComments()
		}
	}
</script>

<style lang="scss">

</style>
