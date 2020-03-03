const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

function addColour(colour) {
  const rainbowEl = document.getElementById('rainbow')
  const div = document.createElement('div')
  div.style.paddingTop = '10px'
  div.style.backgroundColour = colour
  rainbowEl.appendChild(div)
}



// Wrapping the for loop code with another function
function forEach(callback, array) {
  for (var i = 0; i < array.length; i = i + 1) {
    callback(array[i], i)
  }
}

forEach(addColour, colours)



// Using the built-in forEach function in Javascript arrays
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

colours.forEach(addColour)
