// Function that adds a class name to a DOM element
const addClass = function (className, element) {
  element.className = `${element.className} ${className}`
  return element
}

// Function that adds 'tweedle' class name to a DOM element
const addTweedleClass = function(element) {
  return addClass('tweedle', element)
}

const ids = ['dee', 'dum']

const elements = ids.map(document.getElementById)

// Using the addTweedleClass function inside the map function call
const withTweedleClass = elements.map(addTweedleClass)
// `withTweedleClass` now contains the output of calling `elements.map(addTweedleClass)`



// But if we want to add another class?
// We have to create another function
var addBoyClass = function(element) {
  return addClass('boy', element)
}



// We are beginning to repeat ourselves…
