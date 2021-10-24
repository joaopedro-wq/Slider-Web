const images = [
  { id: '1', url: './imagem/chapeu.jpg' },
  { id: '2', url: './imagem/img01.jpg' },
  { id: '3', url: './imagem/img02.jpg' },
  { id: '4', url: './imagem/img03.jpg' },
  { id: '5', url: './imagem/img04.jpg' },
  { id: '6', url: './imagem/img05.jpg' },
  { id: '7', url: './imagem/img06.jpg' },
  { id: '8', url: './imagem/img07.jpg' },
  { id: '9', url: './imagem/img08.jpg' },
  { id: '10', url: './imagem/img09.jpg' },
  { id: '11', url: './imagem/img10.jpg' }
]

const container = document.querySelector('#idItens')

const loadImages = (images, container) => {
  images.forEach(image => {
    container.innerHTML += `
      <div class = 'item'>
        <img src = ' ${image.url} '
        </div>
    
      `
  })
}

loadImages(images, container)
let items = document.querySelectorAll('.item')

const previous = () => {
  container.appendChild(items[0])
  items = document.querySelectorAll('.item')
}

const next = () => {
  let last = items[items.length - 1]

  container.insertBefore(last, items[0])
  items = document.querySelectorAll('.item')
}

document.querySelector('#idButton').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)

const linksSocialMedia = {
  github: 'joaopedro-wq',
  linkedin: 'in/joao-pedro-bandeira-01b83a205',

  facebook: 'joaopedro.oliveirabandeira',
  twitter: 'Chorab0y',
  instagram: 'jotapebandeira'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
