console.log('%c HI', 'color: firebrick')


//-------------------------------IMAGES ---------------------------

function slapImagesOnTheDOM(data) {
  // debugger
  const urlList = data.message
  urlList.forEach(slapOneImageOnTheDOM)
}


function slapOneImageOnTheDOM(url) {
  const container = document.querySelector('#dog-image-container')
  const dogCard = document.createElement("div")
  dogCard.className = "card"
  dogCard.innerHTML = `
    <img src="${url}" />
  `
  container.append(dogCard)
}

//---------------------------------- BREEDS -----------------------
const ul = document.querySelector('#dog-breeds')
ul.style.display = "none"

function slapBreedsOnTheDOM(data) {
  // const ul = document.querySelector('#dog-breeds')
  const breedObjects = data.message
  for (const breed in breedObjects) {
    slapOneBreedOnTheDOM(breed, ul)
  }
}

function slapOneBreedOnTheDOM(breedName, breedList) {
  const li = document.createElement('li')
  li.className = `list-item`
  li.innerHTML = `${breedName}`
  breedList.append(li)

}

ul.addEventListener('click', colorLi)

function colorLi(event) {
  const li = event.target
  li.style.color = 'rgb(245, 144, 66)';
}

function chooseBreed() {
  const dropdown = document.querySelector('#breed-dropdown')
  const letter = dropdown.value
  const breeds = ul.children
  ul.style.display = ""
  for (const breed of breeds) {
     if (breed.innerHTML[0] === letter) {
       breed.style.display = ""
     } else {
       breed.style.display = "none"
     }
  }
}

//---------------------- ON PAGE LOAD ------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(imgUrl)
  .then(res => res.json())
  .then(slapImagesOnTheDOM)

  fetch(breedUrl)
  .then(res => res.json())
  .then(slapBreedsOnTheDOM)
})
