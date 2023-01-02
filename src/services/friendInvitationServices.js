import api from './config'
function invite(email) {
	let token
	if (localStorage.getItem('auth')) token = JSON.parse(localStorage.getItem('auth')).token
	return api.post(
		'/friend-invitation/invite',
		{ targetEmail: email },
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}
function acceptInvitation(id) {
	let token
	if (localStorage.getItem('auth')) token = JSON.parse(localStorage.getItem('auth')).token
	return api.post(
		'/friend-invitation/accept',
		{ id },
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}
function rejectInvitation(id) {
	let token
	console.log(id)
	if (localStorage.getItem('auth')) token = JSON.parse(localStorage.getItem('auth')).token
	return api.post(
		'/friend-invitation/reject',
		{ id },
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
}
// function getFriends(email) {
// 	let token
// 	if (localStorage.getItem('auth')) token = JSON.parse(localStorage.getItem('auth')).token
// 	return api.get('/friend-list', {
// 		headers: {
// 			Authorization: `Bearer ${token}`,
// 		},
// 	})
// }
export { invite, acceptInvitation, rejectInvitation }
