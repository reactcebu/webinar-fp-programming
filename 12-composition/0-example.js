// Simplest form of composition with two functions, funcA and funcB
const composeTwo = function (funcA, funcB) {
  return function(x) {
    return funcA(funcB(x))
  }
}

const nohow = function(sentence) {
    return sentence + ', nohow!';
}

const contrariwise = function(sentence) {
    return sentence + ' Contrariwise…';
}

const statement = 'Never, nowhere, and'
const nohowContrariwise = composeTwo(contrariwise, nohow);

console.log(nohowContrariwise(statement)); // Returns `Never, nowhere, and nohow! Contrariwise…`
