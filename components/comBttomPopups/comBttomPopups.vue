<template>
	<view class="comBttomPopups" v-show="show">
		<view class="comBttomPopups-main scale-down-ver-bottom"><slot></slot></view>
		<view class="comBttomPopups-mask" @click.stop="handleClose"></view>
	</view>
</template>

<script>
export default {
	name: 'comBttomPopups',
	data() {
		return {
			show: false
		};
	},
	methods: {
		open() {
			this.show = true;
		},
		close() {
			this.show = false;
		},
		handleClose(){
			this.close()
		}
	}
};
</script>

<style lang="scss">
.comBttomPopups {
	.scale-down-ver-bottom {
		animation: scale-down-ver-bottom 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	&-main {
		width: 750rpx;
		height: 700rpx;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 21;
		box-sizing: border-box;
		border-radius: 14px 14px 0 0;
	
	}

	&-mask {
		background: rgba($color: #000000, $alpha: 0.3);
		position: fixed;
		z-index: 20;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
}


@keyframes scale-down-ver-bottom {
  0% {
		-webkit-transform: scaleY(0.3);
		        transform: scaleY(0.3);
		-webkit-transform-origin: 0% 100%;
		        transform-origin: 0% 100%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
  }
}
</style>
