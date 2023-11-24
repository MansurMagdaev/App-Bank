export function debounce(func, wait) {
	let timeOut

	return function (...args) {
		const later = () => {
			clearTimeout(timeOut)
			func.apply(this, args)
		}

		clearTimeout(timeOut)
		timeOut = setTimeout(later, wait)
	}
}
