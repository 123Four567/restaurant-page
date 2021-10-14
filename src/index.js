import initialLoad from './initial_load'
import buildHomePage from './home_page'
import loadMenu from './menu'
import loadContacts from './contacts'

init()

function addListenerToNav(){
	const homeBtn = document.querySelector(".home")
	const menuBtn = document.querySelector(".menu")
	const contacts = document.querySelector(".contacts")
	const content = document.querySelector(".tab-content")

	homeBtn.addEventListener('click', () => {
		content.removeChild(content.firstChild)
		buildHomePage()
	})
	menuBtn.addEventListener('click', () => {
		content.removeChild(content.firstChild)
		loadMenu()
	})

	contacts.addEventListener('click', () => {
		content.removeChild(content.firstChild)
		loadContacts()
	})
}

function init(){
	initialLoad()
	buildHomePage()
	addListenerToNav()
}

