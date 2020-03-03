// Another example of a repetitive code
const unicorn = document.getElementbyID('unicorn')
unicorn.className += ' magic'
spin(unicorn)

const fairy = document.getElementbyID('fairy')
fairy.className += ' magic'
sparkle(fairy)

const kitten = document.getElementbyID('kitten')
kitten.className += ' magic'
rainbowTrail(kitten)



// Create a function to avoid repition of code
function addMagicClass(id) {
  const element = document.getElementbyID(id)
  element.className += ' magic'
  return element
}

const unicornElement = addMagicClass('unicorn')
spin(unicornElement)

const fairyElement = addMagicClass('fairy')
sparkle(fairyElement)

const kittenElement = addMagicClass('kitten')
rainbow(kittenElement)



// Make it even more DRY
function addMagic(id, effect) {
  const element = document.getElementbyID(id)
  element.className += ' magic'
  effect(element)
}

addMagic('unicorn', spin)
addMagic('fairy', sparkle)
addMagic('unicorn', rainbow)
