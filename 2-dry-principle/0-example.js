// The following is an example of a repetitive code
const element1 = document.getElementById('main-carousel')
const slider1 = new Carousel(element1, 3000)
const slider1.init()

const element2 = document.getElementById('news-carousel')
const slider2 = new Carousel(element2, 5000)
const slider2.init()

const element3 = document.getElementById('events-carousel')
const slider3 = new Carousel(element3, 7000)
const slider3.init()



// Steps to turn a repetitive code into a function
// 1. Identify and take note of the non-repeating elements.
// 2. Create a function.
// 3. Assign the non-repeating elements as inputs to the function.



// Create a function to avoid repetition of code
function initialiseCarousel(id, frequency) {
  const element = document.getElementById(id)
  const slider = new Carousel(element, frequency)
  slider.init()
  return slider
}

initialiseCarousel('main-carousel', 3000)
initialiseCarousel('news-carousel', 5000)
initialiseCarousel('events-carousel', 7000)
