<template>
	<view class="takeFoodsOrder">
		<noOrder v-if="takeFoodList.length===0"></noOrder>
		<hadOrder v-else :takeFoodList="takeFoodList" :totalMoney="totalMoney"></hadOrder>
	</view>
</template>

<script>
import noOrder from './components/noOrder.vue'
import hadOrder from './components/hadOrder.vue'
import {mapState} from 'vuex'
export default {
 data() {
  return {
		isShowNoOrder:false,
		totalMoney:0
  };
 },
components:{
		 noOrder,
		 hadOrder
},
methods:{
	toMenu(){
		wx.reLaunch({
			url:'../menu/menu'
		})
	}
},
onLoad(options) {
	console.log(options)
	this.totalMoney = options.totalMoney
},
computed:{
	...mapState({
		takeFoodList:state=>state.takeFood.takeFoodList
	})
}
}
</script>

<style lang="stylus">
.takeFoodContainer
	.titleImg
		width 260rpx
		height 260rpx
		margin 0 auto
		display block
		margin-top 200rpx
	.noOrder
		text-align center
		color #919293
	.recommend
		text-align center
		color #919293
		font-size 34rpx
		margin-bottom 20rpx
	.btn
		width 320rpx
		height 84rpx
		background-color #ADB838
		border-radius 60rpx
		color #fff
	.history
		text-align center
		color #ADB838
		font-size 24rpx
		margin-top 20rpx
</style>
