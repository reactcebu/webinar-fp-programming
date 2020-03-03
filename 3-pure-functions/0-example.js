// Example of an impure function
const myGlobalMessage = '{{verb}} me'

const impureInstuction = function(verb) {
  return myGlobalMessage.replace('{{verb}}', verb)
}

const eatMe = impureInstruction('Eat')
//=> 'Eat me'

const drinkMe = impureInstruction('Drink')
//=> 'Drink me'



// Example of a pure function
const pureInstruction = function (verb) {
  const message = '{{verb}} me'
  return message.replace('{{verb}}', verb)
}
