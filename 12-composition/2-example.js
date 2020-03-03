// Using compose function with partial application function
const replace = function (find, replacement, str) {
  return str.replace(find, replacement)
}

const wrapWith = function(tag, str) {
  return '<' + tag + '>' + str + '</' + tag + '>'
}

const addBreaks = partial(replace, '\n', '<br/>\n')
const replaceBrillig = partial(replace, 'brillig', 'four o’clock in the afternoon')
const wrapP = partial(wrapWith, 'p')
const wrapBlockquote = partial(wrapWith, 'blockquote')

const modifyPoem = compose(wrapBlockquote, wrapP, addBreaks, replaceBrillig)

console.log(modifyPoem(poem))

//  <blockquote><p>Twas four o’clock in the afternoon, and the slithy toves<br/>
//  Did gyre and gimble in the wabe;<br/>
//  All mimsy were the borogoves,<br/>
//  And the mome raths outgrabe.</p></blockquote >
