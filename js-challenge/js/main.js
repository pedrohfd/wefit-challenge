// * Menu

document.querySelector('.btn-group-vertical').className = 'btn-group-horizontal'

// * Header

const header = document.querySelector('.jumbotron')

header.classList.add('text-right', 'bg-secondary', 'text-white')

header.childNodes[9].className = 'btn btn-success btn-lg'

// * Cards

const rowDiv = document.querySelectorAll('.row')
const thirdRowDiv = rowDiv[2]

thirdRowDiv.classList.add('cards-container')

const cardsContainer = document.querySelector('.cards-container')

for (const card of cardsContainer.children) {
  if (card === cardsContainer.lastElementChild) {
    cardsContainer.firstElementChild.after(card)
  }

  if (card === cardsContainer.children[2]) {
    cardsContainer.lastElementChild.before(card)
  }
}

const animalButton = cardsContainer.children[2].querySelector('.btn').classList

animalButton.remove('btn-primary')
animalButton.add('btn-success')

// * Lista

const list = document.querySelector('.list-group')

list.firstElementChild.classList.remove('active')

const fourthItem = document.createElement('li')
fourthItem.className = 'list-group-item active'
fourthItem.innerText = 'Quarto item'
list.appendChild(fourthItem)

const fifthItem = document.createElement('li')
fifthItem.className = 'list-group-item'
fifthItem.innerText = 'Quinto item'
list.appendChild(fifthItem)
