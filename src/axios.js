
import axios from "axios"
// import Qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode;chartset=utf-8;'
function http(type, url, param) {
	if (type === 'get') {
		return new Promise((resolve, reject) => {
			axios({
				method: 'get',
				url: url,
				params: param
			})
				.then(res => {
					resolve(res)
				})
				.catch(res => {
					reject(res)
				})
		})
	} else if (type === 'post') {
		return new Promise((resolve, reject) => {
			axios({
				method: 'post',
				data: param,
				url: url
			})
				.then(res => {
					resolve(res)
				})
				.catch(res => {
					reject(res)
				})
		})
	}
}
export default http
