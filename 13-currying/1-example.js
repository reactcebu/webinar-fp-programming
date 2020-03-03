const replace = curry(function(find, replacement, str) {
  const regex = new RegExp(find, 'g')
  return str.replace(regex, replacement)
})

const wrapWith = curry(function(tag, str) {
  return `<${tag}>${str}</${tag}>`
})

const modifyPoem = pipe(
  replace('brillig', wrapWith('em', 'four o’clock in the afternoon')),
  replace('\n', '<br/>\n'),
  wrapWith('p'),
  wrapWith('blockquote')
)

console.log(modifyPoem(poem))
//  <blockquote><p>Twas <em>four o’clock in the afternoon</em>, and the slithy toves<br/>
//  Did gyre and gimble in the wabe;<br/>
//  All mimsy were the borogoves,<br/>
//  And the mome raths outgrabe.</p></blockquote>
