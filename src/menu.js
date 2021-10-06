let menu = (() => {
  
  
  let createMenu = () => {
    let background = document.querySelector('div')
    //Creating elements
    
    let menuContainer = document.createElement('div')
    let antipasti = document.createElement('h2')
    let bruschetta = document.createElement('ul')
    let zuppaV = document.createElement('ul')
    let zuppaM = document.createElement('ul')
    let insalataF = document.createElement('ul')
    let insalataC = document.createElement('ul')
    let pasta = document.createElement('h2')
    let penne = document.createElement('ul')
    let spaghettiP = document.createElement('ul')
    let spaghettiC = document.createElement('ul')
    let linguine = document.createElement('ul')
    let fettuccine = document.createElement('ul')
    let ravioli = document.createElement('ul')
    let pizza = document.createElement('h2')
    let margherita = document.createElement('ul')
    let pizzaS = document.createElement('ul')
    let pizzaV = document.createElement('ul')
    let pizzaR = document.createElement('ul')
    let pizzaVien = document.createElement('ul')
    let pizzaD = document.createElement('ul')
    let pizzaP = document.createElement('ul')
    let dulce = document.createElement('h2')
    let tiramisu = document.createElement('ul')
    let torta = document.createElement('ul')
    let gelato = document.createElement('ul')
    let affogato = document.createElement('ul')

    //Adding classes/text
    background.classList = "background-menu"
    menuContainer.classList = "menu-outer-container"
    antipasti.classList = "food-type"
    antipasti.textContent = "Antipasti"
    bruschetta.textContent = "Bruschetta con olive e pomodori      8"
    zuppaV.textContent = "Zuppa di verdure      6"
    zuppaM.textContent = "Zuppa di minestrone      7"
    insalataF.textContent = "Insalata fresca      8"
    insalataC.textContent = "Insalata caprese      11"
    pasta.classList = "food-type"
    pasta.textContent = "Pasta"
    penne.textContent = "Penne con salsiccia      13"
    spaghettiP.textContent = "Spaghetti di pomodoro      11"
    spaghettiC.textContent = "Spaghetti con carne      13"
    linguine.textContent = "Linguine al bianco      10"
    fettuccine.textContent = "Fettuccine con pesto      11"
    ravioli.textContent = "Ravioli di funghi      14"
    pizza.classList = "food-type"
    pizza.textContent = "Pizza"
    margherita.textContent = "Margherita      9"
    pizzaS.textContent = "Pizza Siciliana      14"
    pizzaV.textContent = "Pizza di verdure      13"
    pizzaR.textContent = "Pizza Romana      15"
    pizzaVien.textContent = "Pizza Viennese      16"
    pizzaD.textContent = "Pizza Diavola      13"
    pizzaP.textContent = "Prosciutto e Funghi      15"
    dulce.classList = "food-type"
    dulce.textContent = "Dulce"
    tiramisu.textContent = "Tiramisu      7"
    torta.textContent = "La torta di cioccolato      8"
    gelato.textContent = "Gelato      6"
    affogato.textContent = "Affogato      4"

    //Add elements to DOM
    
    background.appendChild(menuContainer)
    menuContainer.appendChild(antipasti)
    menuContainer.appendChild(bruschetta)
    menuContainer.appendChild(zuppaV)
    menuContainer.appendChild(zuppaM)
    menuContainer.appendChild(insalataF)
    menuContainer.appendChild(insalataC)
    menuContainer.appendChild(pasta)
    menuContainer.appendChild(penne)
    menuContainer.appendChild(spaghettiP)
    menuContainer.appendChild(spaghettiC)
    menuContainer.appendChild(linguine)
    menuContainer.appendChild(fettuccine)
    menuContainer.appendChild(ravioli)
    menuContainer.appendChild(pizza)
    menuContainer.appendChild(margherita)
    menuContainer.appendChild(pizzaS)
    menuContainer.appendChild(pizzaV)
    menuContainer.appendChild(pizzaR)
    menuContainer.appendChild(pizzaVien)
    menuContainer.appendChild(pizzaD)
    menuContainer.appendChild(pizzaP)
    menuContainer.appendChild(dulce)
    menuContainer.appendChild(tiramisu)
    menuContainer.appendChild(torta)
    menuContainer.appendChild(gelato)
    menuContainer.appendChild(affogato)

  }

  return {createMenu}
})()

export default menu