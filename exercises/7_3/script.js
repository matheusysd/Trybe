window.onload = function() {
  document.querySelector('#deck').addEventListener('click', drawCard)
}

function getRandomCard() {
  const imagePaths = [
    "cartas/seis-de-copas.png",
    "cartas/tres-de-ouros.png",
    "cartas/quatro-de-paus.png",
    "cartas/sete-de-paus.png",
    "cartas/nove-de-espadas.png",
    "cartas/sete-de-espadas.png",
    "cartas/cinco-de-ouros.png",
  ]

  const numberOfCardImages = imagePaths.length
  const randomImageIndex = Math.floor(Math.random() * numberOfCardImages)

  return imagePaths[randomImageIndex]
}

function getRandomAnimation() {
  const numberOfAnimations = 2
  const randomAnimationIndex = Math.floor(Math.random() * numberOfAnimations)

  const animations = ['flip', 'jump']

  return animations[randomAnimationIndex]
}


function drawCard() {
  let card = document.createElement('img')
  card.src = getRandomCard()
  card.classList.add('card')
  card.classList.add(getRandomAnimation())

  document.querySelector('#grid').appendChild(card)
}
