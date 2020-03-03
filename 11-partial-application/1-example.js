// Function that adds a class name to a DOM element
const addClass = function (className, element) {
  element.className = `${element.className} ${className}`
  return element
}

const partialFirstOfTwo = function (callback, param1) {
  return function(param2) {
    return callback(param1, param2)
  }
}



// Using the partial application function
const addTweedleClass = partialFirstOfTwo(addClass, 'tweedle')
const addBoyClass = partialFirstOfTwo(addClass, 'boy')

const ids = ['dee', 'dum']
const elements = id.map(document.getElementById)

const withTweedleClass = elements.map(addTweedleClass)
const withBoyClass = elements.map(addBoyClass)



// But what if we want to partially apply 
// with a function that takes three parameters ?
// Or four? 
// And what if we wanted to partially apply more than one variable ?
