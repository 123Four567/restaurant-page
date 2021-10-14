import myImage from './images/coffee-cup.jpg'

function createH2(text) {
	const h2 = document.createElement('h2')
	h2.textContent = text
	return h2
}

function createSummary(text){
	const p = document.createElement('p')
	p.textContent = text
	return p
}

function setImg(){
	const img = document.createElement('img')
	img.src = myImage
	return img
}

function setDiv(){
	const div = document.createElement('div')
	div.classList.add('page-content')
	div.appendChild(createH2("A quick summary about us"))
	div.appendChild(createSummary("Here at Macchiato's Coffee Shop we strive to make the best coffee for our clients, thats why we choose the purest coffee beans out there and combined with our passion and love for coffee, we believe that you'll love what we have here."))
	div.appendChild(setImg())
	return div
}

function buildHomePage(){
	const content = document.querySelector('.tab-content')
	const section = document.createElement('section')

	section.appendChild(setDiv())
	content.appendChild(section)

}

export default buildHomePage