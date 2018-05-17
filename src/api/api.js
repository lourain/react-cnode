import http from '../axios.js'

export default {
	getList(tab) {
		return http('get','/api/v1/topics',{page:1,tab:tab})
	},
	getDetail(id) {
		return http('get', '/api/v1/topic/' + id)
	}
}
