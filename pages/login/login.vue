<template>
	<view class="loginContainer">
		<image class="logo" src="../../static/images/logo.png" mode=""></image>
		<view class="one">一杯好茶,一口软欧包</view>
		<view class="two">在奈雪遇见两种美好</view>
		<button type="default" @click="getUserInfo">微信一键登录</button>
		<view class="three">新用户登录即加入会员,享会员权益</view>
		<view class="footer">
			<view class="item">
				<image class="itemImg" src="../../static/images/mine/rhyl.png" mode=""></image>
				<text class="itemText">入会有礼</text>
			</view>
			<view class="item">
				<image class="itemImg" src="../../static/images/mine/jfdh.png" mode=""></image>
				<text class="itemText">积分兑换</text>
			</view>
			<view class="item">
				<image class="itemImg" src="../../static/images/mine/sjtq.png" mode=""></image>
				<text class="itemText">升级特权</text>
			</view>
			<view class="item">
				<image class="itemImg" src="../../static/images/mine/srtq.png" mode=""></image>
				<text class="itemText">生日特权</text>
			</view>
			<view class="item">
				<image class="itemImg" src="../../static/images/mine/nxbz.png" mode=""></image>
				<text class="itemText">蜜雪宝藏</text>
			</view>
		</view>
		<view class="bottom">会员权益说明</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	methods: {
		// 点击登录
		getUserInfo() {
			wx.getUserProfile({
				desc: '用来测试小程序',
				success: res => {
					console.log(res);
					wx.setStorageSync('userInfo',res.userInfo)
					wx.reLaunch({
						url: '../center/center'
					});
				},
				fail: err => {
					console.log(err);
				}
			});
		},
	}
};
</script>

<style lang="stylus">
.loginContainer
	height 100vh
	background #F0F7F9
	display flex
	flex-direction column
	align-items center
	.logo
		width 180rpx
		height 180rpx
		margin 130rpx 0
	.one
		font-size 30rpx
		margin-bottom 30rpx
		color #999
	.two
		font-size 28rpx
		color #999
	button
		margin 150rpx 0 80rpx 0
		width 90%
		background #ACB73B
		font-size 30rpx
		color #fff
		border-radius 50rpx
	.three
		font-size 28rpx
		color #999
		margin-bottom 80rpx
	.footer
		display flex
		width 90%
		justify-content space-around
		// justify-content space-between
		.item
			display flex
			flex-direction column
			align-items center
			.itemImg
				width 60rpx
				height 60rpx
				margin-bottom 10rpx
			.itemText
				font-size 28rpx
	.bottom
		margin-top 60rpx
		font-size 28rpx
		color #ACB73B
</style>
