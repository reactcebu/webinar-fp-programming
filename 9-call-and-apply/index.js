// Creating and calling a function the normal way
function greet(name) {
    console.log(`Good evening, ${name}`)
}

greet('Naomi') // Returns 'Good evening, Naomi'



// Calling a function using the built-in call method
greet.call(null, 'Naomi') // Returns 'Good evening, Matthew'



// Calling a function using the built-in apply method
greet.apply(null, ['Naomi']) // Returns 'Good evening, Matthew'



// Note:
// The first argument of call and apply methods define what the 'this'
// keyword refers to inside the function.
