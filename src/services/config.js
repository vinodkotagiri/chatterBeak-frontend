import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API
const apiClient = axios.create({
	baseURL: BASE_URL,
	timeout: 1000,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
})
// apiClient.interceptors.request.use(
// 	(config) => {
// 		const auth = JSON.parse(localStorage.getItem('auth'))
// 		if (auth) {
// 			const { token } = auth
// 			config.headers.Authorization = `Bearer ${token}`
// 		}
// 	},
// 	(err) => Promise.reject(err)
// )
export default apiClient
