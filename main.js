// DOM elements
const imgsSlider = document.querySelector(".images-slider")
const images = imgsSlider.querySelectorAll("img")
const overlay = document.querySelector(".overlay")
const burger = document.querySelector(".burger")
const ulMenu = document.querySelector("header ul")
const sliders = document.querySelectorAll(".slider")
const sliderInners = document.querySelectorAll(".slider-inner")
const navigators = document.querySelectorAll(".navigators div")

// Variables
let isMenuExited = false
let currentItemIndex = 0



// Mobile menu
overlay.remove()
burger.addEventListener("click", () => {
  if (isMenuExited) {
    overlay.remove()
    ulMenu.classList.remove("show")
    burger.src = "./images/icon-hamburger.svg"
    isMenuExited = false
  } else {
    document.body.append(overlay)
    ulMenu.classList.add("show")
    burger.src = "./images/icon-close.svg"
    isMenuExited = true
  }
})
window.addEventListener("resize", () => {
  if (window.innerWidth > 600 && document.querySelector(".overlay")) {
    document.querySelector(".overlay").remove()
    ulMenu.classList.remove("show")
    burger.src = "./images/icon-hamburger.svg"
    isMenuExited = false
  }
})

// slider
navigators.forEach(navig => {
  navig.addEventListener("click", () => {
    if (navig.className === "right") {
      if (currentItemIndex === 2) {
        currentItemIndex = 0
      } else {
        currentItemIndex++
      }
    } else {
      if (currentItemIndex === 0) {
        currentItemIndex = 2
      } else {
        currentItemIndex--
      }
    }
    updateSliders()
  })
})
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    navigators[0].click()
    navigators[0].style.backgroundColor = "var(--grey-800)"
    setTimeout(() => {
      navigators[0].style.backgroundColor = "black"
    }, 300)
  } else {
    navigators[1].click()
    navigators[1].style.backgroundColor = "var(--grey-800)"
    setTimeout(() => {
      navigators[1].style.backgroundColor = "black"
    }, 300)
  }
})


// FUNCTIONS

function updateSliders() {
  sliders.forEach(slider => {
    let slideOffset;

    const items = slider.querySelectorAll(".slider-inner > *")
    
    slideOffset = items[currentItemIndex].dataset.slide

    slider.style.setProperty("--slide-offset", slideOffset)
  })
}