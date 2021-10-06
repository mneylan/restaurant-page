
import './main.sass';
import homepage from './home.js';
import menu from './menu.js';
import contact from './contact.js'

homepage.navBar();
homepage.mainBody();

let clearBody = () => {
  let body = document.querySelector('div').lastChild
  body.remove()
}

let about = document.querySelectorAll('.nav-link')[0]

about.addEventListener('click', () => {
  clearBody();
  document.body.lastChild.classList = "background"
  homepage.mainBody()
})

let food = document.querySelectorAll('.nav-link')[1]

food.addEventListener('click', () => {
  clearBody();
  menu.createMenu()
})

let contacts = document.querySelectorAll('.nav-link')[2]

contacts.addEventListener('click', () => {
  clearBody();
  contact.createContact()
})

