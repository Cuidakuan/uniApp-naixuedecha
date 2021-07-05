// import request from '../../utils/request.js'
import request from '../../utils/request.js'
const state = {
	goodsList: [],
	shopCart: [{
			id: 31430,
			cate_id: 2500,
			name: '奈雪初露',
			price: 16,
			number: 2,
			image: 'https://img-shop.qmimg.cn/s23107/2020/03/27/7d0a4993b5926e2bc6.jpg?imageView2/2/w/400/h/400',
			use_property: 1,
			props_text: '标准冰，标准糖',
			props: [582, 585]
		},
		{
			id: 31826,
			cate_id: 6387,
			name: '霸气榴莲王',
			price: 28,
			number: 1,
			image: 'https://img-shop.qmimg.cn/s23107/2019/04/28/be484557ff7cfa4dba.jpg?imageView2/2/w/400/h/400',
			use_property: 0,
		}
	],
	ads: [{
			image: 'https://img-shop.qmimg.cn/s23107/2020/04/27/4ebdb582a5185358c4.jpg?imageView2/2/w/600/h/600'
		},
		{
			image: 'https://images.qmai.cn/s23107/2020/05/08/c25de6ef72d2890630.png?imageView2/2/w/600/h/600'
		},
		{
			image: 'https://img-shop.qmimg.cn/s23107/2020/04/10/add546c1b1561f880d.jpg?imageView2/2/w/600/h/600'
		},
		{
			image: 'https://images.qmai.cn/s23107/2020/04/30/b3af19e0de8ed42f61.jpg?imageView2/2/w/600/h/600'
		},
		{
			image: 'https://img-shop.qmimg.cn/s23107/2020/04/17/8aeb78516d63864420.jpg?imageView2/2/w/600/h/600'
		}
	],
}
const mutations = {
	SET_GOODSLIST(state, goodsList) {
		state.goodsList = goodsList
	},
	ADD_SHOPCART(state,good){
		state.shopCart.push(good)
	},
	DELETE_GOOD(state,index){
		state.shopCart.splice(index,1)
	}
}
const actions = {
	async getGoodsList({
		commit
	}) {
		console.log(123)
		const result = await request('/getGoodsList')
		/* let newResult = result.forEach(item=>{
			return item.id = '_'+item.id
		})
		console.log(newResult) */
		commit('SET_GOODSLIST', result)

	}
}
const getters = {}


export default {
	state,
	mutations,
	actions,
	getters,
}
