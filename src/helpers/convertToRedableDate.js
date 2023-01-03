export default function convertToRedableDate(date, format) {
	const map = {
		dd: date.getDate(),
		mm: date.getMonth() + 1,
		yy: date.getFullYear().toString().slice(-2),
		yyyy: date.getFullYear(),
	}
	return format.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched])
}
