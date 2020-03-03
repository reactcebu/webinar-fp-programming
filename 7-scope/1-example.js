const outer = function() {
  const outerVariable = 'Saitama'

  return function() {
    // We can 'see' outerVariable here
    console.log(outerVariable)
    // Saitama

    // const innerVariable = 'Genos'
    // innerVariable is only visible here inside inner()
  }
  // innerVariable is not visible here.
}
