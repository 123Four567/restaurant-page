function setH1(text) {
	const h1 = document.createElement('h1')
	h1.textContent = text
	return h1
}

function createLinks(text,id) {
	const btn = document.createElement('button')
	btn.textContent = text
	btn.classList.add(id)
	return btn
}

function createNav() {
	const nav = document.createElement('nav')
	nav.classList.add('navbar')
	nav.appendChild(createLinks("Home","home"))
	nav.appendChild(createLinks("Menu","menu"))
	nav.appendChild(createLinks("Contacts","contacts"))

	return nav	
}

function createHeader(){
	const header = document.createElement('header')
	header.appendChild(setH1("Macchiato's Coffee Shop"))
	header.appendChild(createNav())
	return header
}

function createMain(){
	const main = document.createElement('main')
	main.classList.add('tab-content')
	return main
}

function createFooter(){
	const footer = document.createElement('footer')
	const div = document.createElement('div')
	const p = document.createElement('p')

	p.textContent = "Made with love for coffee lovers"
	
	div.appendChild(p)
	footer.appendChild(div)
	return footer
}

function initialLoad() {
	const content = document.getElementById('content')

	content.appendChild(createHeader())
	content.appendChild(createMain())
	content.appendChild(createFooter())

}

export default initialLoad