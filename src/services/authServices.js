import api from './config'
function register(data) {
	return api.post('/auth/register', data)
}
function login(data) {
	return api.post('/auth/login', data)
}
export { register, login }
