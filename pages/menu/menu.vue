<template>
	<view class="orderContainer">
		<view class="address">
			<view class="left" v-if="addressInfo.street">
				<image class="locationImg" src="../../static/images/order/location.png" mode=""></image>
				<text class="one" style="font-weight: 700;">{{ addressInfo.street }}</text>
				<view class="two">由温都水城一点点店铺配送</view>
			</view>
			<view class="left" v-else>
				<view class="one">温都水城一点点店铺</view>
				<image class="locationImg" src="../../static/images/order/location.png" mode=""></image>
				<text class="two">距离您1.25km</text>
			</view>
			<view class="right">
				<text class="item active">自取</text>
				<text class="item">外卖</text>
			</view>
		</view>

		<view class="topMsg">
			<text class="left">"霸气mini卡"超级购券活动,赶紧去购买吧</text>
			<text class="right">></text>
		</view>

		<view class="mainContainer">
			<!-- 左侧 -->
			<scroll-view class="leftScroll" scroll-y="true" :scroll-with-animation="true" :scroll-into-view="clickToId" :style="{ height: windowHeight }">
				<view class="leftItem" v-for="(good, index) in goodsList" :key="good.id" :class="{ active: currentIndex === index }" @click="changeCurrentIndex(good, good.id, index)">
					{{ good.name }}
				</view>
			</scroll-view>
			<!-- 右侧轮播图 -->
			<scroll-view
				scroll-y="true"
				:scroll-into-view="clickId"
				
				:scroll-with-animation="true"
				:scroll-y="true"
				:style="{ height: windowHeight }"
				class="rightScroll"
				:scroll-top="cateScrollTop"
				@scroll="handleGoodsScroll"
			
			>
				<swiper class="rightSwiper" id="ads" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(ad, index) in ads" :key="index">
						<view class="mainBanner"><image class="bannerImg" :src="ad.image" mode=""></image></view>
					</swiper-item>
				</swiper>
				<!-- 商品goods -->
				<view class="menu,right_title" :id="'po'+index" v-for="(good, index) in goodsList" :key="good.id">
					<view class="title">
						<text>{{ good.name }}</text>
						<image class="titleImg" :src="good.icon" mode=""></image>
					</view>
					<view class="food" v-for="(detail, index) in good.goods_list" :key="detail.id">
						<image class="leftImg" :src="detail.images" mode=""></image>
						<view class="right">
							<view class="foodName">{{ detail.name }}</view>
							<view class="detail">{{ detail.content }}</view>
							<view class="footer">
								<view class="money">￥{{ detail.price }}</view>
								<text v-if="detail.property.length" class="littleText" @click="toChoose(detail, index)">选规格</text>
								<image v-else class="littleImg" src="../../static/images/menu/add.jpg" mode="" @click="toChoose(detail, index)"></image>
							</view>
						</view>
					</view>
					<!-- 				<view class="food">
						<image class="leftImg" src="../../static/images/index/qrcode.png" mode=""></image>
						<view class="right">
							<view class="foodName">奈雪早餐</view>
							<view class="detail">购买三明治早餐指定饮品半价活动</view>
							<view class="footer">
								<view class="money">￥18.5</view>
								<image class="littleImg" src="../../static/images/index/arrow-right.png" mode=""></image>
							</view>
						</view>
					</view> -->
				</view>
			</scroll-view>
		</view>

		<!-- 选规格 -->
		<view class="choose" v-show="isChoose">
			<image class="header" :src="currentChooseGood.images" mode=""></image>
			<image class="close" src="../../static/images/order/close.jpg" mode="" @click="closeChoose"></image>
			<scroll-view class="chooseMain" scroll-y="true">
				<view class="text">
					<view class="name">{{ currentChooseGood.name }}</view>
					<text class="detail">{{ currentChooseGood.content }}</text>
				</view>
				<view class="chooseItem">
					<view class="itemTitle">温度</view>
					<view class="itemText">
						<view :class="{ active: currentHot === index }" @tap="changIce(item, index)" v-for="(item, index) in hotOrIce" :key="index">{{ item }}</view>
					</view>
				</view>

				<view class="chooseItem">
					<view class="itemTitle">糖度</view>
					<view class="itemText">
						<view :class="{ active: currentSuger === index }" @tap="changeSuger(item, index)" v-for="(item, index) in suger" :key="index">{{ item }}</view>
					</view>
				</view>
				<view class="chooseItem">
					<view class="itemTitle">小料</view>
					<view class="itemText">
						<view :class="{ active: currentMetial === index }" @click="changeMetial(item, index)" v-for="(item, index) in otherMetial" :key="index">{{ item }}</view>
					</view>
				</view>
			</scroll-view>
			<view class="footer">
				<view class="price">
					<view class="left">
						<view class="">￥{{ currentChooseGood.price * selectNum }}</view>
						<view class="chooseItem">
							<text>{{ selectAll.hot }}</text>
							<text>,{{ selectAll.suger }}</text>
							<text>,{{ selectAll.metial }}</text>
						</view>
					</view>
					<view class="right">
						<image @tap="changeNum(-1)" src="../../static/images/order/jian.jpg" mode=""></image>
						<text class="num">{{ selectNum }}</text>
						<image @tap="changeNum(1)" src="../../static/images/order/jia.jpg" mode=""></image>
					</view>
				</view>
				<view class="button" @tap="addShopCart(currentChooseGood)">加入购物车</view>
			</view>
		</view>
		<!-- 去结算 -->
		<view class="score" v-if="showCart">
			<view class="number">{{ totalNum }}</view>
			<image src="../../static/images/menu/cart.png" @click="showShopCart" mode="" class="scoreImg" @tap="toPay"></image>
			<view class="price">￥{{ totalMoney }}</view>
			<view class="pay" @tap="toPay">去结算</view>
		</view>
		<!-- 购物车 -->
	</view>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	data() {
		return {
			showCart: true,
			currentIndex: 0,
			isChoose: false,
			addressInfo: {},
			currentCateId: 6905, //默认分类
			cateScrollTop: 0,
			NewgoodListHeight: 0,
			currentChooseGood: '',
			// 温度
			hotOrIce: ['标准冰', '少冰', '去冰', '热', '常温'],
			suger: ['标准糖', '少糖', '微糖', '不另外加糖'],
			otherMetial: ['珍珠', '椰果', '烧仙草', '红豆', '花生', '波霸'],
			currentHot: 0,
			currentSuger: 0,
			currentMetial: 0,
			selectNum: 1,
			selectAll: {
				hot: '标准冰',
				suger: '标准糖',
				metial: '珍珠'
			},
			windowHeight: '0px',
			clickId: '',
			clickToId: '',
			topList: [],
			isLeftClick: false
		};
	},
	onLoad() {
		let _that = this;
		uni.getSystemInfo({
			success: function(res) {
				_that.windowHeight = res.windowHeight + 'px';
			}
		});
		this.getNodesInfo();
	},
	methods: {
		handleGoodsScroll(e) {
			if (this.isLeftClick) {
				this.isLeftClick = false;
				return;
			}
			let scrollTop = e.target.scrollTop;
			for (let i = 0; i < this.topList.length; i++) {
				let h1 = this.topList[i];
				let h2 = this.topList[i + 1];
				if (scrollTop >= h1 && scrollTop < h2) {
					this.currentNum = i;
					this.clickToId = 'to' + i;
				}
			}
		},
		getNodesInfo() {
			const query = uni.createSelectorQuery().in(this);
			query
				.selectAll('.right_title')
				.boundingClientRect()
				.exec(res => {
					console.log(res);
					let nodes = res[0];
					let rel = [];
					nodes.map(item => {
						rel.push(item.top);
					});
					console.log(rel);
					this.topList = rel;
				});
		},
		// 去结算页面
		toPay() {
			wx.navigateTo({
				url: '/pages/pay/pay'
			});
		},
		// 添加到购物车
		addShopCart(good) {
			let obj = this.shopCart.find(item => item.id === good.id);
			console.log(good);
			// 已经存在
			if (obj) {
				obj.number += 1;
				wx.showToast({
					title: '已存在，数量加一',
					icon: 'success'
				});
				this.isChoose = false;
			} else {
				// 不存在，
				let obj = {
					id: good.id,
					cate_id: 2500,
					name: good.name,
					price: good.price,
					number: this.selectNum,
					image: good.img,
					use_property: 1,
					props_text: `${this.selectAll.hot},${this.selectAll.suger},${this.selectAll.metial}`,
					props: [582, 585]
				};
				this.$store.commit('ADD_SHOPCART', obj);
				wx.showToast({
					title: '不存在，添加一个',
					icon: 'success'
				});
				this.isChoose = false;
			}
		},
		// 展示shopCart
		showShopCart() {
			this.cartPopupVisible = true;
		},
		// 获取goodsList
		getFloorList() {
			this.$store.dispatch('getGoodsList');
		},
		// 点击切换导航
		changeCurrentIndex(good, goodId, index) {
			this.currentIndex = index;
			// let nowGood = wx.createSelectorQuery('#nowGood')
			// console.log(nowGood)
			this.clickId = 'po' + index;
			this.isLeftClick = true;
			// this.currentNum = index;
		},
		/* handleGoodsScroll({ detail }) {
			console.log(detail);
		}, */
		// 右侧滚动事件
		calcSize() {
			let h = 10;
			// let view = uni.createSelectorQuery().select('#ads');
		},

		// 点击选规格
		toChoose(detail, index) {
			this.isChoose = true;
			this.currentChooseGood = detail;
		},
		closeChoose() {
			this.isChoose = false;
		},
		// 选择温度
		changIce(item, index) {
			(this.currentHot = index), (this.selectAll.hot = item);
		},
		// 选择甜度
		changeSuger(item, index) {
			this.currentSuger = index;
			this.selectAll.suger = item;
		},
		// 切换小料
		changeMetial(item, index) {
			this.currentMetial = index;
			this.selectAll.metial = item;
		},
		changeNum(num) {
			if (num > 0) {
				this.selectNum += 1;
			} else {
				if (this.selectNum === 1) {
				} else {
					this.selectNum -= 1;
				}
			}
		}
	},
	mounted() {
		this.getFloorList();
		this.addressInfo = wx.getStorageSync('addressInfo');
	},
	computed: {
		...mapState({
			goodsList: state => state.menu.goodsList,
			ads: state => state.menu.ads,
			shopCart: state => state.menu.shopCart
		}),
		totalNum() {
			return this.shopCart.reduce((prev, item) => {
				return (prev += item.number);
			}, 0);
		},
		totalMoney() {
			return this.shopCart.reduce((prev, item) => {
				return (prev += item.price * item.number);
			}, 0);
		}
	}
};
</script>

<style lang="stylus">
.orderContainer
	height 100%
	.address
		margin-top 10rpx
		width 100%
		height 100rpx
		display flex
		align-items center
		justify-content space-between
		padding 0 30rpx
		box-sizing border-box
		.left
			.one
				font-size 32rpx
			.two
				font-size 28rpx
			.locationImg
				width 30rpx
				height 30rpx
				margin-right 10rpx
		.right
			font-size 28rpx
			display flex
			width 200rpx
			background #F4F4F4
			border-radius 40rpx
			.item
				width 50%
				display block
				height 50rpx
				line-height 50rpx
				text-align center
			.active
				background #ACB73B
				border-radius 40rpx
				color #fff
	.topMsg
		margin-top 30rpx
		height 60rpx
		line-height 60rpx
		padding-left 30rpx
		width 100%
		background #E7E9CF
		color #ACB73B
		font-size 30rpx
	.mainContainer
		display flex
		width 100%
		.leftScroll
			height calc(100vh - 200rpx)
			width 30%
			background #F4F4F4
			.leftItem
				width 100%
				font-size 30rpx
				padding 20rpx 20rpx 20rpx 30rpx
				box-sizing border-box
			.active
				background #fff
				border-left 5rpx solid #AAB91C
		.rightScroll
			width 70%
			height calc(100vh - 200rpx)
			.rightSwiper
				width 100%
				height 300rpx
				.mainBanner
					.bannerImg
						width 100%
						height 300rpx
			.menu
				.title
					font-size 30rpx
					margin 0 0 5rpx 10rpx
					.titleImg
						width 40rpx
						height 40rpx
						margin-left 10rpx
				.food
					display flex
					// padding 10rpx
					margin-bottom 20rpx
					.leftImg
						width 160rpx
						height 160rpx
						border-radius 20rpx
						margin-right 10rpx
					.right
						display flex
						width 320rpx
						flex-direction column
						justify-content space-around
						.foodName
							font-size 30rpx
							margin 10rpx 0
						.detail
							color #999
							font-size 28rpx
							white-space nowrap
							overflow hidden
							text-overflow ellipsis
						.footer
							.money
								font-size 30rpx
								font-weight 700
								margin-right 150rpx
								float left
							.littleImg
								float right
								width 40rpx
								height 40rpx
							.littleText
								float right
								height 40rpx
								width 100rpx
								line-height 40rpx
								text-align center
								border-radius 30rpx
								background #ADB838
								color #fff
								font-size 26rpx
	.choose
		width 650rpx
		height 1000rpx
		background #fff
		box-shadow 0px 10px 15px rgba(0, 0, 0, 0.3)
		border-radius 30rpx
		position absolute
		z-index 999
		left 0
		top 0
		right 0
		bottom 0
		margin auto
		.header
			width 200rpx
			height 200rpx
			display block
			margin 30rpx auto
		.close
			width 50rpx
			height 60rpx
			position absolute
			right 20rpx
			top 20rpx
		.chooseMain
			height 570rpx
			width 100%
			.text
				padding-bottom 30rpx
				padding-left 30rpx
				border-bottom 1rpx solid #F4F4F4
				.detail
					font-size 24rpx
					color #878889
			.chooseItem
				padding 0 30rpx
				margin-bottom 30rpx
				.itemTitle, .itemText
					display flex
					flex-wrap wrap
					font-size 28rpx
					view
						height 30rpx
						color #919293
						line-height 30rpx
						border-radius 10rpx
						padding 20rpx 30rpx
						margin 10rpx
						font-size 26rpx
						background #F5F5F5
					.active
						color #fff
						background #ADB838
		.footer
			.price
				width 100%
				height 100rpx
				background #F4F4F4
				display flex
				align-items center
				justify-content space-between
				padding 30rpx
				box-sizing border-box
				.left
					.chooseItem
						font-size 24rpx
				.right
					display flex
					align-items center
					image
						width 40rpx
						height 40rpx
					.num
						margin 0 10rpx
			.button
				width 100%
				height 70rpx
				line-height 70rpx
				text-align center
				color #fff
				font-size 28rpx
				background-color #ACB73B
	.score
		width 690rpx
		height 96rpx
		background-color #FFFFFF
		border-radius 60rpx
		position fixed
		box-shadow 0 20rpx 20rpx -20rpx rgba(51, 51, 51, 0.1)
		margin 20rpx 0
		box-sizing border-box
		position absolute
		bottom 0
		right 42rpx
		display flex
		align-items center
		.scoreImg
			width 80rpx
			height 80rpx
			position relative
			left 36rpx
			top -44rpx
		.number
			position absolute
			width 40rpx
			height 40rpx
			border-radius 50%
			text-align center
			line-height 40rpx
			top -40rpx
			left 80rpx
			z-index 888
			background-color hotpink
		.price
			margin-left 60rpx
			flex 1
		.pay
			width 160rpx
			height 96rpx
			background-color yellowgreen
			color #fff
			border-radius 0 60rpx 60rpx 0
			line-height 96rpx
			text-align center
</style>
