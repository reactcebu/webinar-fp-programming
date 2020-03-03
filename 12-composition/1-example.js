// A generalised compose function
const compose = function () {
  const args = arguments
  const start = args.length - 1

  return function() {
    let i = start
    let result = args[start].apply(this, arguments)

    i = i - 1
    while (i >= 0) {
      result = args[i].call(this, result)
      i = i - 1
    }
    return result
  }
}

const nohow = function(sentence) {
    return sentence + ', nohow!';
}

const contrariwise = function(sentence) {
    return sentence + ' Contrariwise…';
}

const statement = 'Never, nowhere, and'
const nohowContrariwise = compose(contrariwise, nohow);

console.log(nohowContrariwise(statement)); // Returns `Never, nowhere, and nohow! Contrariwise…`
