const options = {
	threshold: 1,
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.target.classList.toggle("show", entry.isIntersecting)

		if (entry.isIntersecting) observer.unobserve(entry.target)
	})

}, options)

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(element => observer.observe(element))