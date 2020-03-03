// Special arguments variable
const showArgs = function (a, b) {
  console.log(arguments)
}

showArgs('Tweedledee', 'Tweedledum')
// Returns ['Tweedledee', 'Tweedledum'] or { '0': 'Tweedledee', '1': 'Tweedledum' }

showArgs('a', 'l', 'i', 'c', 'e')
// Returns { '0': 'a', '1': 'l', '2': 'i', '3': 'c', '4': 'e' }



// Checking the length of the special arguments variable
const argsLength = function() {
    console.log(arguments.length)
}

argsLength('a', 'l', 'i', 'c', 'e')
// Returns 5
