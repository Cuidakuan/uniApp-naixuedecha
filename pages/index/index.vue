<template>
	<view class="indexContainer">
		<!-- 大图区域 -->
		<view class="banner">
			<image class="bannerImg" src="https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg" mode=""></image>
			<view class="title">
				<view class="welcome">你好，游客</view>
				<view class="care">一杯奶茶，一口软欧包，在奈雪遇见两种美好</view>
			</view>
		</view>
		<!-- 选择取餐方式 -->
		<view class="selectEatType">
			<view class="item">
				<image class="itemImg" src="../../static/images/index/zq.png" mode=""></image>
				<text class="itemText ziqu">自取</text>
			</view>
			<text class="shuxian"></text>
			<view class="item">
				<image class="itemImg" src="../../static/images/index/wm.png" mode=""></image>
				<text class="itemText">外卖</text>
			</view>
		</view>
		<!-- 积分 -->
		<view class="count">
			<view class="countLeft">
				<view class="myCount">
					<text class="myCountLeft">我的积分</text>
					<text class="myCountRight">411</text>
				</view>
				<view class="desc">
					进入积分商城兑换奈雪の茶券及周边好礼
					<text class="iconfont iconarrow-right"></text>
				</view>
			</view>
			<view class="countRight">
				<image class="huiyuanImg" src="../../static/images/index/qrcode.png" mode=""></image>
				<text class="huiyuanText">会员码</text>
			</view>
		</view>
		<!-- 商城卡片 -->
		<view class="shop">
			<view class="shopLeft">
				<image class="package" src="../../static/images/index/csc.png" mode=""></image>
				<view class="item">
					<view class="chashangcheng">奈雪的茶商城</view>
					<view class="chashangchengbottom">优质茶礼盒，网红零食</view>
				</view>
				<image class="bigPackage" src="../../static/images/index/yzclh.png" mode=""></image>
			</view>
			<view class="shopRight">
				<view class="shopRightTop">
					<view class="title">
						<image class="icon" src="../../static/images/index/mcsb.png" mode=""></image>
						<view class="text">买茶送包</view>
					</view>

					<image class="circle" src="../../static/images/index/mcsb_bg.png" mode=""></image>
				</view>
				<view class="shopRightTop" style="background-color: #FCF6D4; margin-top: 18rpx;">
					<view class="title">
						<image class="icon" src="../../static/images/index/hyjb.png" mode=""></image>
						<view class="text" >会员券包</view>
					</view>
					
					<image class="circle" src="../../static/images/index/hyjb_bg.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 会员新鲜事 -->
		<view class="huiyuanNews">
			<view class="header">
				<view class="title">
					会员新鲜事
				</view>
				<view class="iconfont iconRightbutton data-v-57280228">
					
				</view>
			</view>
			<view class="content">
				<image class="contentImg" src="https://img-shop.qmimg.cn/s23107/2020/04/27/0039bf41c9ebd50a2c.jpg" mode=""></image>
				<view class="text">
					"梅"你不行 | 霸气杨梅清爽回归
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="stylus">
.indexContainer
	position relative
	background-color #F1F8FA
	height 100%
	.banner
		.bannerImg
			height 600rpx
			width 100%
		.title
			color #fff
			position absolute
			width 650rpx
			left 40rpx
			top 100rpx
			.welcome
				font-size 30rpx
			.care
				font-size 24rpx
				margin-top 10rpx
	.selectEatType
		display flex
		width 90%
		// justify-content center
		background-color #fff
		position absolute
		left 50%
		top 560rpx
		transform translateX(-50%)
		height 224rpx
		align-items center
		border-radius 30rpx
		box-shadow 5px 5px 10px #eee
		.item
			flex 1
			display flex
			flex-direction column
			align-items center
			height 164rpx
			.itemImg
				width 84rpx
				height 84rpx
			.itemText
				margin-top 20rpx
				font-size 30rpx
				font-weight 700
				color #555
		.shuxian
			width 1rpx
			height 60%
			background-color #eee
	.count
		display flex
		align-items center
		flex 1
		width 88%
		height 78rpx
		padding 30rpx 10rpx
		margin 0 auto
		margin-top 210rpx
		background-color #fff
		border-radius 20rpx
		box-shadow 5px 5px 10px #eee
		.countLeft
			.myCount
				display flex
				align-items center
				margin-bottom 10rpx
				.myCountLeft
					color #5A5B5C
				.myCountRight
					font-size 40rpx
					font-weight 700
			.desc
				display flex
				align-items center
				color #999
				font-size 24rpx
		.countRight
			position relative
			right -100rpx
			display flex
			flex-direction column
			align-items center
			.huiyuanImg
				width 40rpx
				height 40rpx
			.huiyuanText
				color #AFBD1D
				font-size 20rpx
				margin-top 10rpx
	.shop
		width 86%
		height 260rpx
		background-color #fff
		margin 0 auto
		margin-top 30rpx
		border-radius 20rpx
		box-shadow 5px 5px 10px #eee
		padding 20rpx
		display flex
		.shopLeft
			width 340rpx
			height 234rpx
			display flex
			background-color #F2F2E6
			padding 30rpx 0 0 20rpx
			position relative
			.package
				width 30rpx
				height 30rpx
				margin-right 10rpx
			.item
				.chashangcheng
					font-size 26rpx
				.chashangchengbottom
					font-size 22rpx
					color #aaa
			.bigPackage
				position absolute
				bottom 0
				right 20rpx
				width 217rpx
				height 122rpx
		.shopRight
			width 290rpx
			margin-left 20rpx
			.shopRightTop
				background-color #FDF3F2
				display flex
				height 124rpx
				position relative
				.title
					display flex
					margin auto 0
					margin-left 20rpx
					.icon
						width 30rpx
						height 30rpx
						margin-right 10rpx
					.text
						font-size 24rpx
						color #555
				.circle
					width 114rpx
					height 104rpx
					position absolute
					right 0
					bottom 0
	.huiyuanNews
		width 88%
		margin 0 auto
		.header
			display flex
			height 100rpx
			line-height 100rpx
			position relative
			.title
				font-size 35rpx
				font-weight 700
			.iconfont
				position absolute
				right 0
				font-size 50rpx
				color #aaa
		.content
			position relative
			.contentImg
				width 660rpx
				height 240rpx
				border-radius 10rpx
				margin-bottom 30rpx
			.text
				color #fff
				position absolute
				bottom 60rpx
				left 20rpx
</style>
