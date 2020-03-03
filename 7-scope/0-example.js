const thing = 'start'

const sing = function() {
  // This function can 'see' thing
  const line = 'Twinkle, twinkle, little ' + thing
  console.log(line)
}

sing() // Twinkle, twinkle, little star

// Outside the function we can't see the message
console.log(line) // undefined
