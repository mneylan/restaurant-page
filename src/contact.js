let contact = (() => {
  let createContact = () => {
    let background = document.querySelector('div')

    //Creating Elements
    let contactContainer = document.createElement('div')
    let text1 = document.createElement('h2')
    let text2 = document.createElement('h2')

    //Adding classes/text
    background.classList = "background"
    contactContainer.classList = "text-outer-container"
    text1.classList = "contact-text"
    text1.textContent = "Questions about the menu, reservations, job opportunities, or just looking to get in touch?"
    text2.classList = "contact-text"
    text2.textContent = "Give us a call at 555-555-5555."

    //Add elements to DOM
    background.appendChild(contactContainer)
    contactContainer.appendChild(text1)
    contactContainer.appendChild(text2)
  }

  return {createContact}
})()

export default contact