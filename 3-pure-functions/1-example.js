// Another example of an impure function
const getHTMLImpure = function (id) {
  const el = document.getElementById(id)
  return el.innerHTML
}

// Another example of pure function
const getHTML = function (doc, id) {
  const el = doc.getElementById(id);
  return el.innerHTML;
}

// Final example of a pure function
const htmlGetter = function(id) {
  return function() {
    const el = document.getElementById(id)
    return el.innerHTML
  }
}
