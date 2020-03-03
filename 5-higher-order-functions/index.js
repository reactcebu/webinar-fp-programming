// Higher-order function example
function forEach(callback, array) {
  for (var i = 0; i < array.length; i = i + 1) {
    callback(array[i], i)
  }
}

// Another example
const map = function(callback, array) {
  const newArray = []
  for (let i = 0; i < array.length; i = i + 1) {
    newArray[i] = callback(array[i], i)
  }
  return newArray
}

// Final example
const partialFirstOfTwo = function(callback, param1) {
  return function(param2) {
    return callback(param1, param2)
  }
}
