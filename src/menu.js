import affogato from './images/affogato.jpg'

function createCoffees(name,desc,src,alt){
	const section = document.createElement('section')
	const h3 = document.createElement('h3')
	const p = document.createElement('p')
	const img = document.createElement('img')

	h3.textContent = name
	p.textContent = desc
	img.setAttribute('src',src)
	img.setAttribute('alt',alt)

	section.appendChild(h3)
	section.appendChild(p)
	section.appendChild(img)
	return section
}

function loadMenu(){
	const content = document.querySelector('.tab-content')
	const section = document.createElement('section')
	const div = document.createElement('div')
	div.classList.add("page-content")
	const h2 = document.createElement('h2')
	h2.textContent = "Menu of the day"

	const coffees = [
	createCoffees(
		"Affogato",
		"Are you looking for something tasty, how about trying our new affogato",
		affogato,
		"Affogato")
	]

	div.appendChild(h2)

	coffees.forEach((coffee) => {
		div.appendChild(coffee)
	})

	section.appendChild(div)	
	content.appendChild(section)
}

export default loadMenu