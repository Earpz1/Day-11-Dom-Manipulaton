function changeTitle() {
  document.getElementById('page-title').innerHTML = 'Negozio di smartphone'
}

function darkMode() {
  document.body.style.backgroundColor = 'black'
  document.body.style.color = 'white'
}

function toggleFooter() {
  document.getElementById('address').innerHTML =
    'My fake address is in the North Pole'
}

function largeLinks() {
  const links = document.getElementsByClassName('links')

  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle('accessed')
  }
}

function showImage() {
  const images = document.getElementsByClassName('phone-image')

  for (let i = 0; i < images.length; i++) {
    images[i].classList.toggle('hideImage')
  }
}

function priceColor() {
  let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'purple']
  const price = document.getElementsByClassName('price')
  const random = Math.floor(Math.random() * colors.length)

  for (let i = 0; i < price.length; i++) {
    price[i].style.color = colors[random]
  }
}
