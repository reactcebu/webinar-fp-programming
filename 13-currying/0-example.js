// Implementation of curry function
function curry(fn) {
  const arity = fn.length;

  function given(argsSoFar) {
    return function helper() {
      const args = Array.prototype.slice.call(arguments, 0);
      const updatedArgsSoFar = argsSoFar.concat(args);

      if (updatedArgsSoFar.length >= arity) {
        return fn.apply(this, updatedArgsSoFar);
      }
      else {
        return given(updatedArgsSoFar);
      }
    }
  }

  return given([]);
}

// Using the curry function
const formatName = function (first, surname, nickname) {
  return `${first} "${nickname}" ${surname}`
}
const formatNameCurried = curry(formatName)

const james = formatNameCurried('James')

console.log(james('Sinclair', 'Mad Hatter'))
// Returns `James “Mad Hatter” Sinclair`

const jamesS = james('Sinclair')

console.log(jamesS('Dormouse'))
// Returns `James “Dormouse” Sinclair`

console.log(jamesS('Bandersnatch'))
// Returns `James “Bandersnatch” Sinclair`
