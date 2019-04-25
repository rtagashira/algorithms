// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  if(str.match(/&/)){
    str = str.replace(/&/g, '&​amp;')
  }
  if(str.match(/</)){
    str = str.replace(/</g, '&​lt;')
  }
  if(str.match(/>/)){
    str = str.replace(/>/g, '&​gt;')
  }
  if(str.match(/"/)){
    str = str.replace(/"/g, '&​quot;')
  }
  if(str.match(/'/)){
    str = str.replace(/'/g, '&​apos;')
  }
  return str
}

console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
console.log(convertHTML("Sixty > twelve"))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))
console.log(convertHTML("<>"))
console.log(convertHTML("abc"))

// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot; quotation marks &​quot;.
// convertHTML("Schindler's List") should return Schindler&apos;s List.
// convertHTML("<>") should return &lt;&​gt;.
// convertHTML("abc") should return abc.