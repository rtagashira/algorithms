// You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. 
// You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page 
// of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number 
// printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

// It's guaranteed that you can number the current page, and that you can't number the last one in the book.

function pagesNumberingWithInk(current, numberOfDigits) {
  while(numberOfDigits > 0){
    let digits = (n) => n.toString().length
    numberOfDigits -= digits(current)
    if(numberOfDigits < digits(current + 1)){
      return current
    }
    current++
  }
}

console.log(pagesNumberingWithInk(1,5))//5
console.log(pagesNumberingWithInk(21,5))//22
console.log(pagesNumberingWithInk(8,4))//10