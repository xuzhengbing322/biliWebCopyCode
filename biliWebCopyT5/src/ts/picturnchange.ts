const images = ['a1.jpeg', 'a2.jpeg', 'a3.jpeg', 'a4.jpeg']
let index = 0

// eslint-disable-next-line no-unused-vars
function shang () {
  if (index === 0) {
    index = 3
  } else {
    index--
  }
  document.getElementById('img').setAttribute('src', 'images/' + images[index])
}

// eslint-disable-next-line no-unused-vars
function xia () {
  if (index === 3) {
    index = 0
  } else {
    index++
  }
  document.getElementById('img').setAttribute('src', 'images/' + images[index])
}
