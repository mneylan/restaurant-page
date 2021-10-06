let homepage = (() => {
  let body = document.body;
  

  let navBar = () => {
    //Making the elements

    let background = document.createElement('div');
    let nav = document.createElement('nav');
    let navContainer = document.createElement('div');
    let navItem1 = document.createElement('div');
    let flagContainer = document.createElement('div');
    let flagImg = document.createElement('img');
    let restaurantContainer = document.createElement('div');
    let restaurantName = document.createElement('div');
    let bistro = document.createElement('div');
    let navItem2 = document.createElement('div');
    let about = document.createElement('div');
    let menu = document.createElement('div');
    let contact = document.createElement('div');

    //Adding classes/text

    background.classList = "background"
    navContainer.classList = "nav-container"
    navItem1.classList = "nav-item1"
    flagContainer.classList = "flag-container"
    flagImg.classList = "flag"
    flagImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAACVBMVEUAkkb////OKzdsRJOSAAAAxklEQVR4nO3PMQEAAAjAILV/aFPsgwbMFLZwhaTv7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v75/+HwW0qVdTeFEnAAAAAElFTkSuQmCC"
    restaurantContainer.classList = "restaurant-name-container"
    restaurantName.classList = "restaurant-name"
    restaurantName.textContent = "Giorginos"
    bistro.classList = "bistro"
    bistro.textContent = "Italian Bistro"
    navItem2.classList = "nav-item2"
    about.classList = "nav-link"
    about.textContent = "About"
    menu.classList = "nav-link"
    menu.textContent = "Menu"
    contact.classList = "nav-link"
    contact.textContent = "Contact"

    //Adding elements to DOM

    body.appendChild(background)
    background.appendChild(nav)
    nav.appendChild(navContainer)
    navContainer.appendChild(navItem1)
    navItem1.appendChild(flagContainer)
    flagContainer.appendChild(flagImg)
    navItem1.appendChild(restaurantContainer)
    restaurantContainer.appendChild(restaurantName)
    restaurantContainer.appendChild(bistro)
    navContainer.appendChild(navItem2)
    navItem2.appendChild(about)
    navItem2.appendChild(menu)
    navItem2.appendChild(contact)

  }

  let mainBody = () => {
    //creating elements

    let outerContainer = document.createElement('div')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')

    //Adding classes/text
    outerContainer.classList = "text-outer-container"
    p1.classList = "about-content"
    p1.textContent = "Welcome to Giorginos! Tomasso Giorgino began his culinary journey baking bread at home in Sicily."
    p2.classList = "about-content"
    p2.textContent = "After his bread became talk of the town, he knew he had to move to the United States and open an Italian Bistro in Newark, New Jersey."
    p3.classList = "about-content"
    p3.textContent = "Thus, Giorginos was born, serving all your italian favorites."

    //Adding to DOM
    let background = document.querySelector('div')
    background.appendChild(outerContainer)
    outerContainer.appendChild(p1)
    outerContainer.appendChild(p2)
    outerContainer.appendChild(p3)
  }
  

  return {navBar, mainBody}
})()



export default homepage








