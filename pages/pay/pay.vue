<template>
	<view class="container position-relative">
		<view style="margin-bottom: 130rpx;">
			<!-- 头部框 -->
			<view class="section-1" style="color: #5A5B5C; font-size: small;">
				<list-cell class="location">
					<view class="" style="display: flex; justify-content: space-between; align-items: center; padding: 20rpx 20rpx; ">
						<view class="store-name flex-fill" style="font-size: large;">温都水城一点点店铺</view>
						<image src="/static/images/navigator-1.png" class="arrow"></image>
					</view>
					<view class="line" style="width: 100%; height: 2px; background-color: #F2F2F2;"></view>
				</list-cell>

				<list-cell arrow class="meal-time">
					<view class="" style="display: flex; justify-content: space-between; align-items: center; padding: 20rpx 20rpx; ">
						<view class="title" style="flex: 1;">取餐时间</view>
						<view class="time">立即用餐</view>
						<image src="/static/images/navigator-1.png" class="arrow"></image>
					</view>
					<view class="line" style="width: 100%; height: 2px; background-color: #F2F2F2;"></view>
				</list-cell>
				<list-cell class="contact" last :hover="false">
					<view class="" style="display: flex;  align-items: center; padding: 20rpx 20rpx;">
						<view class="title" style="flex: 1;">联系电话</view>
						<view class="time" style="margin-right: -110rpx;"><input class="text-right" placeholder="请输入手机号码" value="18666600000" /></view>
						<view class="contact-tip font-size-sm" style="border: 1px solid #ADB838; color: #ADB838;">自动填写</view>
					</view>
				</list-cell>
			</view>

			<!-- 购物车列表 begin -->
			<view class="section-2" style=" background-color: #fff; color: #5A5B5C; font-size: 28rpx;">
				<view class="" style="display: flex; flex-direction: column; padding: 20rpx 20rpx;">
					<list-cell>
						<view class="" style="width: 100%; display: flex; flex-direction: column;padding-bottom: 30rpx;">
							<view class="" style="align-items: center; display: flex;" v-for="(good, index) in shopCart" :key="good.id">
								<view class="name-and-props overflow-hidden">
									<view class="text-color-base font-size-lg">{{ good.name }}</view>
									<view style="font-size: 22rpx; margin-left: 20rpx;" v-if="good.props_text">{{ good.props_text }}</view>
								</view>
								<image
									style="width: 30rpx; height: 30rpx; position: absolute; right: 50%; transform: translate(15rpx,0rpx); margin-left: 20rpx;"
									@tap="changeNum(good,-1,index)"
									src="../../static/images/order/jian.jpg"
									mode=""
								></image>
								<view class="" style="display: flex;">
									<!-- 
									 <view class="right">
									 	<image @tap="changeNum(-1)" src="../../static/images/order/jian.jpg" mode=""></image>
									 	<text class="num">{{selectNum}}</text>
									 	<image @tap="changeNum(1)" src="../../static/images/order/jia.jpg" mode=""></image>
									 </view>
									 -->

									<view style="margin-left: -60rpx;">x {{ good.number }}</view>
									<image
										style="width: 30rpx; height: 30rpx; position: absolute;transform: translate(0,5rpx);"
										@tap="changeNum(good,1)"
										src="../../static/images/order/jia.jpg"
										mode=""
									></image>
									<view style="margin-left: 120rpx;">￥{{ good.price }}</view>
								</view>
							</view>
						</view>
					</list-cell>
				</view>
			</view>
			<!-- 分割线 -->
			<view class="line" style="width: 100%; height: 2px; background-color: #F2F2F2;"></view>
			<!-- 总计 -->
			<view class="" style="display: flex; justify-content: flex-end; align-items: center;padding: 20rpx 20rpx; background-color: #fff;">
				<view>总计￥{{ totalMoney }},实付</view>
				<view class="font-size-extra-lg font-weight-bold">￥{{ totalMoney - 0.38 }}</view>
			</view>

			<!-- 支付框 -->
			<view
				class="payment"
				style="padding: 20rpx; 20rpx; background-color: #fff; margin-top: 60rpx;
		margin-bottom: 0; color: #5A5B5C; font-size: small;"
			>
				<view class="" style="padding-bottom: 40rpx;">支付方式</view>
				<view class="">
					<view class="d-flex align-items-center justify-content-between w-100 disabled" style="display: flex; align-items: center;  width: 100%;">
						<view class="flex-fill" style="flex: 1;">余额支付（余额￥0）</view>
						<view class="" style="margin-right: 10rpx;">余额不足</view>
						<view class="" style="border-radius: 50%;width: 26rpx; height: 26rpx; border: solid 1px #000;"></view>
					</view>
				</view>
			</view>

			<!-- 分割线 -->
			<view class="line" style="width: 100%; height: 2px; background-color: #F2F2F2;"></view>

			<view
				class=""
				style="padding: 20rpx; background-color: #fff; display: flex; 
				justify-content: space-between; color: #5A5B5C; font-size: small;"
			>
				<view class="flex-fill">微信支付</view>
				<image style="width: 35rpx; height: 35rpx;" src="../../static/images/pay/weixinPay.png" mode=""></image>
			</view>

			<!-- 备注框 -->
			<view class="" style="margin-top: 30rpx; color: #5A5B5C; font-size: small;">
				<view
					class=""
					style="display: flex; align-items: center; justify-content: space-between; 
				background-color: #fff; padding: 20rpx;"
				>
					<view class="flex-shrink-0 mr-20" style="flex: 1;">备注</view>
					<view class="text-color-primary flex-fill text-truncate text-right" style="color: #ADB838;">点击填写备注</view>
					<image src="/static/images/navigator-1.png" class="arrow"></image>
				</view>
			</view>
		</view>

		<!-- 底部付款框 begin -->
		<view
			class="w-100 pay-box position-fixed fixed-bottom d-flex align-items-center justify-content-between bg-white"
			style="display: flex;width: 100%; align-items: center; justify-content: space-between; 
			background-color: #fff; position: fixed; bottom:0; left: 0; z-index:99; font-size: small;"
		>
			<view class="" style=" display: flex; flex: 1;">
				<view class="font-size-sm" style="margin-left: 20rpx;">合计：</view>
				<view class="font-size-lg flex-fill">￥ {{ totalMoney - 0.38 }}</view>
			</view>
			<view class=""  @tap="toTakeFood" style="padding: 0 60rpx; background-color: #ADB838; height: 100%; color: #fff;"><view class="" style="margin: 30rpx;" @tap="toTakeFood">付款</view></view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {};
	},
	methods: {
		// 去takefood页面
		toTakeFood(){
			let that = this
			let shopCart = this.shopCart
			let totalMoney = this.totalMoney
			wx.showModal({
			  content: `确定进行付款吗`,
			  success (res) {
			    if (res.confirm) {
						that.$store.commit('SET_TAKEFOODLIST',shopCart)
			     wx.reLaunch({
			     	url:'/pages/take-foods/take-foods?totalMoney='+totalMoney
			     })
			    } else if (res.cancel) {
			      console.log('用户取消付款')
			    }
			  }
			})
			
		},
		// 改变数量
		changeNum(good,num,index) {
			let that= this
			if (num > 0) {
				good.number += 1;
			} else {
				if (good.number === 1) {
					wx.showModal({
					  content: `你确定取消${good.name}吗?`,
					  success (res) {
					    if (res.confirm) {
					     that.$store.commit('DELETE_GOOD',index)
					    } else if (res.cancel) {
					      console.log('用户点击取消')
					    }
					  }
					})
					
				} else {
					good.number -= 1;
				}
			}
		}
	},
	computed: {
		...mapState({
			shopCart: state => state.menu.shopCart,
			takeFoodList:state=>state.takeFood.takeFoodList
		}),
		totalMoney() {
			return this.shopCart.reduce((prev, item) => {
				return (prev += item.price * item.number);
			}, 0);
		}
	}
};
</script>

<style lang="scss">
.container {
	padding: 30rpx;
}

.arrow {
	width: 50rpx;
	height: 50rpx;
	position: relative;
	margin-right: -10rpx;
}

.location {
	.iconfont {
		font-size: 50rpx;
		line-height: 100%;
	}
}

.section-1 {
	margin-bottom: 30rpx;
	background-color: #fff;
	.contact {
		.contact-tip {
			margin-left: 10rpx;
			padding: 6rpx 10rpx;
		}
	}
}

.section-2 {
	.name-and-props {
		width: 65%;
	}
}

.payment {
	margin-bottom: 30rpx;

	.payment-icon {
		font-size: 44rpx;
		margin-right: 10rpx;
	}

	.checkbox {
		font-size: 36rpx;
		margin-left: 10rpx;
	}
}

.pay-box {
	box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
	height: 100rpx;
}

.modal-content {
	.change-address-btn {
		line-height: 2;
		padding: 0 1em;
	}
	.pay_btn {
		width: 100%;
		border-radius: 50rem !important;
		line-height: 3;
	}
}
</style>
