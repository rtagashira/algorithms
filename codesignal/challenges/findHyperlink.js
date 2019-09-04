// You are given a string, text, containing exactly one correct hyperlink.

// It is guaranteed that the hyperlink has the following format: <a href="URL">some text</a>, where URL, some text and the text surrounding the hyperlink within text do not contain characters '<' and '>'.

// Your task is to find the hyperlink and return its URL.

let findHyperlink= (t) => t.match(/(?<=<a href=").*(?=\">)/) + ''

let findHyperlink= (t) => t.match(/<a href=\".*">/).join('').slice(9,-2)


console.log(findHyperlink("<a href=\"http://www.example.org\">Example1</a>"))
// "http://www.example.org"
console.log(findHyperlink("a href=\"http://www.wrong.org\"<a href=\"correct\">Example2 a href /a</a> URL"))
// "correct"
console.log(findHyperlink("URL a href=\"http://www.wrong.org\"<a href=\"\">Example3 a href /a</a> URL href"))
// ""