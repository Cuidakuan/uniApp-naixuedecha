<template>
	<view>
		<view class="orderContainer">
			<!-- 商铺信息 -->
			<view class="storeInfo">
				<text class="storeName">福永同泰时代城店</text>
				<view class="storeIcon">
					<image  src="../../../static/images/order/mobile.png" mode=""></image>
					<image  style="margin-left: 30rpx;" src="../../../static/images/order/navigation.png" mode=""></image>
				</view>
			</view>
			<!-- 商品信息 -->
			<view class="foodsInfo">
				<view class="number">
					8093
				</view>
				<view class="makingIcon">
					<image src="../../../static/images/order/ordered_selected.png" mode=""></image>
					<image style="margin: 0 100rpx;" src="../../../static/images/order/production.png" mode=""></image>
					<image src="../../../static/images/order/delivered.png" mode=""></image>
				</view>
				<view class="state">
					<text class="stateText">已下单</text>
					<text class="line" style="margin-left: 20rpx;"></text>
					<text class="stateText" style="margin: 0 20rpx;color: #919293;">制作中</text>
					<text class="line" style="margin-right: 20rpx;"></text>
					<text class="stateText" style="color: #919293;">请取餐</text>
				</view>
				<view class="waitMake">
					您前面还有<text style="color: #ADB838;margin: 0 10rpx;">4</text>单待制作
				</view>
				<view class="foodsList"> 
					<view class="item" v-for="(item,index) in takeFoodList" :key="item.id">
						<view class="name">
							<text style="color:#5A5B5C;">{{item.name}}</text>
							<text style="font-size: 24rpx;margin-top: 10rpx;color: #919293;">{{item.props_text}}</text>
						</view>
						<view class="count">
							x{{item.number}}
						</view>
						<view class="price">
							¥{{item.price}}
						</view>
					</view>
			</view>
			</view>
			<!-- 支付信息 -->
			<view class="payInfo">
				<view class="item">
					<text class="itemLeft">支付方式</text>
					<text class="itemRight">微信支付</text>
				</view>
				<view class="item">
					<text class="itemLeft">金额总计</text>
					<text class="itemRight">¥{{totalMoney-0.38}}</text>
				</view>
			</view>
			<!-- 订单信息 -->
			<view class="orderInfo">
				<view class="item">
					<text class="itemLeft">下单时间</text>
					<text class="itemRight">{{nowTime}}</text>
				</view>
				<view class="item">
					<text class="itemLeft">下单门店</text>
					<text class="itemRight">福永同泰时代城店</text>
				</view>
				<view class="item">
					<text class="itemLeft">支付方式</text>
					<text class="itemRight">微信支付</text>
				</view>
				<view class="item">
					<text class="itemLeft">订单号</text>
					<text class="itemRight">ABCDEFGHIJKLMN0001</text>
				</view>
			</view>
			<!-- 取餐信息 -->
			<view class="takeFoodInfo">
				<view class="item">
					<text class="itemLeft">取餐号</text>
					<text class="itemRight">8093</text>
				</view>
				<view class="item">
					<text class="itemLeft">享用方式</text>
					<text class="itemRight">自取</text>
				</view>
				<view class="item">
					<text class="itemLeft">取餐时间</text>
					<text class="itemRight">立即取餐</text>
				</view>
				<view class="item">
					<text class="itemLeft">完成制作时间</text>
					<text class="itemRight">{{takeTime}}</text>
				</view>
				<view class="item">
					<text class="itemLeft">备注</text>
					<text class="itemRight">打包</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import moment from 'moment'
	export default {
		props:['takeFoodList','totalMoney'],
		data() {
			return {
				nowTime:'',
				takeTime:''
			};
		},
		mounted() {
			let nowDate = new Date()
			let nowTime = moment(nowDate).format('YYYY-MM-DD HH:mm:ss');
			// let OkTime = moment(nowDate).format('YYYY-MM-DD HH:mm:ss').add(1,'days');
			let OkTime = nowDate.setMinutes(nowDate.getMinutes() + 25)
			let takeTime = moment(OkTime).format('YYYY-MM-DD HH:mm:ss'); 
			this.nowTime = nowTime
			this.takeTime = takeTime
		}
	}
</script>
<style lang="stylus">
	.orderContainer
		padding 20rpx
		height 100%
		background-color #F1F8FA
		.storeInfo
			display flex
			align-items center
			justify-content space-between
			height 110rpx
			padding  0 30rpx
			background-color #fff
			border-bottom 1px solid #eee
			.storeName
				color #5A5B5C
			.storeIcon
				image
					width 60rpx
					height 60rpx
		.foodsInfo
			// height 710rpx
			padding 50rpx 30rpx 0
			background-color #fff
			border-radius 0 0 20rpx 20rpx
			.number
				font-size 60rpx
				font-weight 700
				text-align center
				margin-bottom 50rpx
				color #5A5B5C
			.makingIcon
				text-align center
				image
					width 80rpx
					height 80rpx
			.state
				text-align center
				margin 30rpx 0
				display flex
				justify-content center
				align-items center
				.stateText
					font-size 30rpx
				.line
					display block
					width 50rpx
					height 2rpx
					background-color #C7C8C9
			.waitMake
				text-align center
				margin-bottom 80rpx
				color #919293
				font-size 28rpx
			.foodsList
				.item
					display flex
					justify-content space-between
					align-items center
					margin-bottom 40rpx
					.name
						display flex
						flex-direction column
						align-items center
						height 84rpx
					.count
						margin-left 220rpx
		.payInfo
			height 220rpx
			box-sizing border-box
			padding 50rpx 30rpx
			background-color #fff
			border-top 1px solid #eee
			border-bottom 1px solid #eee
			border-radius 20rpx
			display flex
			flex-direction column
			justify-content space-between
			.item
				display flex
				justify-content space-between
				.itemLeft
					font-size 28rpx
					color #5A5B5C
				.itemRight
					font-size 28rpx
					font-weight 700
					color #5A5B5C
		.orderInfo
			height 370rpx
			box-sizing border-box
			background-color #fff
			display flex
			flex-direction column
			justify-content space-between
			padding 50rpx 30rpx
			border-bottom 1px solid #eee
			border-radius 20rpx
			.item
				display flex
				justify-content space-between
				.itemLeft
					font-size 28rpx
					color #5A5B5C
				.itemRight
					font-size 28rpx
					font-weight 700
					color #5A5B5C
		.takeFoodInfo
			height 420rpx
			box-sizing border-box
			background-color #fff
			display flex
			flex-direction column
			justify-content space-between
			padding 50rpx 30rpx
			border-radius 20rpx 20rpx 0 0
			.item
				display flex
				justify-content space-between
				.itemLeft
					font-size 28rpx
					color #5A5B5C
				.itemRight
					font-size 28rpx
					font-weight 700
					color #5A5B5C
</style>
