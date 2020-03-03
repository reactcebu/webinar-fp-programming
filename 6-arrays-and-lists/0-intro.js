// DRY code?
function addColour(colour) {
  const rainbowEl = document.getElementById('rainbow')
  const div = document.createElement('div')
  div.style.paddingTop = '10px'
  div.style.backgroundColour = colour
  rainbowEl.appendChild(div)
}

addColour('red')
addColour('orange')
addColour('yellow')
addColour('green')
addColour('blue')
addColour('purple')



// Avoiding the repeated function call using for loop and an array
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

for (var i = 0; i < colours.length; i = i + 1) {
  addColour(colours[i])
}
