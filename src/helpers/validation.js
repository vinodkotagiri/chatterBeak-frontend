function validateLoginForm(email, password) {
	const isEmailValid = validateEmail(email)
	const isPasswordValid = validatePassword(password)
	return isEmailValid && isPasswordValid
}
function validateRegisterForm(userName, email, password) {
	const isUserNameValid = validateUserName(userName)
	const isEmailValid = validateEmail(email)
	const isPasswordValid = validatePassword(password)
	return isUserNameValid && isEmailValid && isPasswordValid
}
function validatePassword(password) {
	return password.length > 6 && password.length < 12
}
function validateEmail(email) {
	const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	return pattern.test(email)
}
function validateUserName(userName) {
	return userName.length > 3 && userName.length < 12
}
export { validateLoginForm, validateRegisterForm, validateEmail }
