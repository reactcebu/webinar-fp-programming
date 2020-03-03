// Declare a variable
const myContainer = 'Welcome to the functional programming'



// Assign a variable to another variable
const greeting = myContainer



// Declare a variable and assign it a function
const log = function(message) {
  return message
}



// Make a variable an input to a function
log(greeting) // Returns 'Welcome to the functional programming'



// Assign a function to a variable
const returnMessage = function() {
  return 'You always pass failure on the way to success'
}



// Make a function an input to another function
log(returnMessage) // Returns [Function]
