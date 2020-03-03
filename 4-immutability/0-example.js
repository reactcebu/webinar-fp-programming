// Mutating arrays
const arr = [1, 2, 3]

arr.push(4)

console.log(arr) // [1, 2, 3, 4]
// Using array methods such as pop() and slice()
// also mutates directly the array



// When adding an item to an array,
// use concat() method or spread syntax to avoid mutating the array
const books = [{ title: 'book1' }, { title: 'book2' }]

// Add with spread
const newBooks = [ ...books, newBook ]

//add with concat()
const newBooks = books.concat([newBook])



// When removing an item to an array,
// use slice() method to avoid mutating the array
const newBooks = [...books.slice(0, index), ...books.slice(index + 1)]



// Mutating objects
const book = {
  title: 'JavaScript, The good parts',
  author: 'Douglas Crockford',
}

book.title = 'Other title'

console.log(book)



// Freezing objects to achieve immutability
const book = Object.freeze({
  title : "How JavaScript Works",
  author : "Douglas Crockford"
})

book.title = "Other title" // Cannot assign to read only property 'title'
