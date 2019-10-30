// You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

// Given the starting HTML tag, find the appropriate end tag which your editor should propose.

let htmlEndTagByStartTag = (t) => '</' + t.match(/\w+/) + '>'
let htmlEndTagByStartTag = (t) => `</${t.match(/\w+/)}>`

console.log(htmlEndTagByStartTag("<button type='button' disabled>"))//"</button>"
console.log(htmlEndTagByStartTag("<i>"))//"</i>"
console.log(htmlEndTagByStartTag("<TABLE border='1'>"))//"</TABLE>"