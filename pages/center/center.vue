<template>
	<view class="myContainer">
		<image class="bac" src="https://img-shop.qmimg.cn/s16/images/2020/01/20/9a82219bedcae5c2.jpeg" mode=""></image>
		<view class="header">
			<view class="login">
				<image class="avatar" @click="toLogin" :src="userInfo ? userInfo.avatarUrl : '../../static/images/tabBar/mine.png'" mode=""></image>
				<text class="nickName" @click="toLogin">{{ !userInfo ? '请点击授权登录' : userInfo.nickName }}</text>
				<text class="right">会员权益></text>
			</view>
			<view class="bottom">
				<view class="one">
					<text>***</text>
					<text class="two">会员券</text>
				</view>
				<view class="one">
					<text>***</text>
					<text class="two">积分商城</text>
				</view>
				<view class="one">
					<text>***</text>
					<text class="two">余额</text>
				</view>
				<view class="one">
					<text>***</text>
					<text class="two">礼品卡</text>
				</view>
			</view>
		</view>
		<view class="card">
			<view class="top">
				<text class="left">新用户加入会员，享会员权益</text>
				<text class="right">立即加入</text>
			</view>
			<view class="bottom">
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
		</view>

		<view class="banner"><image class="bannerImg" src="../../static/images/mine/banner.png" mode=""></image></view>

		<view class="footer">
			<view class="title">我的服务</view>
			<view class="pic">
				<view class="item">
					<image class="picImg" src="../../static/images/mine/jfqd.png" mode=""></image>
					<text class="picText">积分签到</text>
				</view>
				<view class="item">
					<image class="picImg" src="../../static/images/mine/stxy.png" mode=""></image>
					<text class="picText">送她心愿</text>
					<image class="littleImg" src="https://img-shop.qmimg.cn/s16/images/2020/05/12/ffb0613dded704b6.png" mode=""></image>
				</view>
				<view class="item">
					<image class="picImg" src="../../static/images/mine/jfqd.png" mode=""></image>
					<text class="picText">蜜雪商城</text>
				</view>
				<view class="item">
					<image class="picImg" src="../../static/images/mine/lxkf.png" mode=""></image>
					<text class="picText">联系客服</text>
				</view>
				<view class="item">
					<image class="picImg" src="../../static/images/mine/wddd.png" mode=""></image>
					<text class="picText">我的订单</text>
				</view>
				<view class="item">
					<image class="picImg" src="../../static/images/mine/wdzl.png" mode=""></image>
					<text class="picText">我的资料</text>
				</view>
				<view class="item">
					<image class="picImg" src="../../static/images/mine/shdz.png" mode=""></image>
					<text class="picText">收货地址</text>
				</view>
				<view class="item">
					<image class="picImg" src="../../static/images/mine/gdfw.png" mode=""></image>
					<text class="picText">更多服务</text>
				</view>
			</view>
		</view>
		<view class="footerText">会员卡适用于蜜雪冰城指定范围,最终解释权归本店所有</view>
	</view>
</template>

<script>
// 接收数据:   $on
// 发送数据:   $emit
export default {
	data() {
		return {
			userInfo: {}
		};
	},
	methods: {
		toLogin() {
			wx.redirectTo({
				url: '/pages/login/login'
			});
		}
	},
	mounted() {
		this.userInfo = wx.getStorageSync('userInfo') || {};
	}
};
</script>

<style lang="stylus">
.myContainer
	/* .bac */
	height 100%
	background-color #F0F7F9
	.bac
		height 450rpx
		width 100%
	.header
		width 90%
		margin 0 auto
		position relative
		left 0
		top -80rpx
		right 0
		bottom 0
		background-color #FFFFFF
		height 280rpx
		box-shadow 0px 1px 1px rgba(0, 0, 0, 0.3)
		.login
			display flex
			align-items center
			margin-bottom 30rpx
			.avatar
				width 140rpx
				height 140rpx
				border 10rpx solid #fff
				border-radius 50%
				margin -40rpx 25rpx 0 20rpx
				box-shadow 0px 10px 15px rgba(0, 0, 0, 0.3)
			.nickName
				font-weight 700
				font-size 32rpx
				flex 1
			.right
				display block
				width 150rpx
				height 60rpx
				font-size 28rpx
				background-color #F9B61E
				color #fff
				text-align center
				line-height 60rpx
				border-radius 30rpx 0 0 30rpx
		.bottom
			display flex
			justify-content space-around
			text-align center
			.one
				display flex
				flex-direction column
				.two
					font-size 30rpx
	.card
		width 90%
		height 240rpx
		background-color #fff
		padding 20rpx
		margin -50rpx auto 30rpx
		box-sizing border-box
		box-shadow 0px 1px 1px rgba(0, 0, 0, 0.3)
		.top
			display flex
			justify-content space-between
			margin-bottom 20rpx
			.left
				font-size 30rpx
			.right
				font-size 28rpx
				color yellowgreen
		.bottom
			display flex
			justify-content space-around
			.item
				display flex
				align-items center
				flex-direction column
				.itemImg
					width 80rpx
					height 80rpx
					margin-bottom 15rpx
				.itemText
					font-size 28rpx
	.banner
		width 90%
		margin 0 auto
		.bannerImg
			width 100%
			height 180rpx
			box-shadow 0px 1px 1px rgba(0, 0, 0, 0.3)
	.footer
		width 100%
		height 440rpx
		background-color #fff
		margin-top 30rpx
		.title
			font-size 32rpx
			font-weight 700
			padding 30rpx
		.pic
			display flex
			flex-wrap wrap
			justify-content space-between
			.item
				width 25%
				display flex
				flex-direction column
				align-items center
				margin-bottom 35rpx
				position relative
				.littleImg
					width 40rpx
					height 40rpx
					position absolute
					top 0
					right 35rpx
				.picImg
					width 80rpx
					height 80rpx
					margin-bottom 20rpx
				.picText
					font-size 30rpx
	.footerText
		font-size 28rpx
		color #999
		text-align center
		margin 30rpx
</style>
