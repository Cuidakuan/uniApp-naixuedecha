import config from './config.js';
export default function request(url, data = {}, methods = 'get') {
	return new Promise((resolved, reject) => {
		wx.request({
			url: config.host + url,
			data,
			methods,
			success: (res) => {
				resolved(res.data)
			},
			fail: (err) => {
				resolve(err)
			}
		})
	})
}
