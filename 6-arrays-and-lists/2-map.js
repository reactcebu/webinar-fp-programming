// Mapping an array to get a new array with new set of values
const ids = ['unicorn', 'fairy', 'kitten']
const elements = []

for (let i = 0; i < ids.length; i = i + 1) {
  elements[i] = document.getElementById(ids[i])
}

console.log(elements) // Logs an array of DOM elements we are after



// Wrapping the above logic in a function
const map = function(callback, array) {
  const newArray = []
  for (let i = 0; i < array.length; i = i + 1) {
    newArray[i] = callback(array[i], i)
  }
  return newArray
}

const getElement = function(id) {
  return document.getElementById(id);
};

map(getElement, ids) // Returns a new array containing DOM elements



// Using the built-in map function in Javascript arrays
const ids = ['unicorn', 'fairy', 'kitten']

const getElement = function(id) {
  return document.getElementById(id)
}

var elements = ids.map(getElement)
