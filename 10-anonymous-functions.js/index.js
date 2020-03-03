const numbers = [1, 2, 3]

// Anonymous function inside a function call
const doubledArray = numbers.map(function(number) {
  return number * 2
})

console.log(doubledArray) // Returns [ 2, 4, 6 ]



// Another example of anonymous function inside a function call
const doubledArray = numbers.map((number) => {
  return number * 2
})

console.log(doubledArray) // Returns [ 2, 4, 6 ]



// Final example of anonymous function inside a function call
const doubledArray = numbers.map(number => number * 2)

console.log(doubledArray) // Returns [ 2, 4, 6 ]
