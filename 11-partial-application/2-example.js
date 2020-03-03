const argumentsToArray = function(args) {
  return [...args]
}



// Create a partial application function
const partial = function() {
  // Convert the arguments variable to an array
  const args = argumentsToArray(arguments)

  // Grab the callback function (the first argument)
  const callback = args.shift() // args now contains the remaining arguments

  // Return a function that calls fn
  return function() {
    const remainingArgs = args
    return callback.apply(this, remainingArgs)
  }
}

const seriousSeries = function(adjective, noun) {
  return `Serious series: ${adjective} ${noun}`
}



// Using the partial application function that accepts
// any number of inputs after specifying the callback function
const finishingMove = partial(seriousSeries, 'serious', 'punch') // `Serious series: serious punch`
const normalAttack = partial(seriousSeries, 'consecutive', 'side hops')



// This function allows us to partially apply any number of variables 
// to functions that take any number of parameters
