const h2 = document.createElement('h2')
const p1 = document.createElement('p')
const p2 = document.createElement('p')

h2.textContent = "Contacts"

p1.textContent = "Here are our numbers: 999-232-2323"

p2.textContent = "This is our email: veryrealmail@notfake.com"

function loadContacts(){
	const content = document.querySelector('.tab-content')
	const section = document.createElement('section')
	const div = document.createElement('div')
	div.classList.add('page-content')

	div.appendChild(h2)
	div.appendChild(p1)
	div.appendChild(p2)
	section.appendChild(div)
	content.appendChild(section)
}

export default loadContacts