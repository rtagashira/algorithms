// You have found a machine which, when fed with two numbers s and e, produces a strange code consisting of the letters a and b. The machine seems to be using the following algorithm.

//     Check if s is less than e - 1. If so, continue to step 2. If not, exit.
//     Increment s by 1
//     Decrement e by 1
//     If this is the first letter you're producing, produce a. Otherwise produce a letter different from the one you last produced (only a and b may be produced)
//     go to step 1.

// You are to write a function that simulates the workings of the machine.

let strangeCode = (s, e) => {
  let str = ''
  while(s < e - 1){
    s++
    e--
    str += str[str.length-1] === 'a'? 'b' : 'a'
  }
  return str
}

console.log(strangeCode(4,8))//'ab'
console.log(strangeCode(10,16))//'aba'