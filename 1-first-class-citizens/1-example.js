// Declare a variable and assign it a function
const log = function(message) {
  return message
}



// Make a function an input to another function
const doSomething = function(thing) {
  thing()
}

const greet = function () {
  const message = 'Welcome to functional programming'
  log(message)
}

doSomething(sayBigDeal) // Returns 'Welcome to functional programming'
