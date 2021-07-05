<template>
 <view class="takeFoodContainer">
  <image src="../../../static/images/loading.gif" mode="" class="titleImg"></image>
  <view class="noOrder">
   您还没有点单
  </view>
  <view class="recommend">
   快去犒劳一下自己吧~
  </view>
  <button type="default" class="btn" @click="toMenu">去点餐</button>
  <view class="history">
   查看历史订单
  </view>
 </view>
</template>

<script>
 export default {
  data() {
   return {
    
   };
  },
	methods:{
		toMenu(){
			wx.reLaunch({
				url:'../menu/menu'
			})
		}
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