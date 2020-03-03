// Given an array of numbers, calculate the sum
const numbers = [1, 3, 5, 7, 9]
const total = 0

for (let i = 0; i < numbers.length; i = i + 1) {
  total = total + numbers[i]
}
// total is 25



// Given an array of words, join them together with a space between each word.
let words = ['sparkle', 'fairies', 'are', 'amazing']
let sentence = ''

for (let i = 0; i < words.length; i++) {
    sentence = sentence + ' ' + words[i]
}
// ' sparkle fairies are amazing'



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Refactor the code above

const add = function(a, b) {
    return a + b
}

// Given an array of numbers, calculate the sum
const numbers = [1, 3, 5, 7, 9]
const total = 0
for (let i = 0; i < numbers.length; i = i + 1) {
    total = add(total, numbers[i])
}
// total is 25

function joinWord(sentence, word) {
    return sentence + ' ' + word
}

// Given an array of words, join them together with a space between each word.
const words = ['sparkle', 'fairies', 'are', 'amazing'];
const sentence = ''
for (let i = 0; i < words.length; i++) {
    sentence = joinWord(sentence, words[i])
}
// 'sparkle fairies are amazing'



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Create a separate reduce function
const reduce = function(callback, initialValue, array) {
  let working = initialValue

  for (let i = 0; i < array.length; i = i + 1) {
    working = callback(working, array[i])
  }
  return working
}

const total = reduce(add, 0, numbers)
const sentence = reduce(joinWord, '', words)



// Using the built-in reduce function in Javascript arrays
const numbers = [1, 3, 5, 7, 9]
const words = ['sparkle', 'fairies', 'are', 'amazing']

const total = numbers.reduce(add, 0)
const sentence = words.reduce(joinWord, '')
