// Let's call a string cool if it is formed only by English letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.

function coolString(str) {
  return !str.match(/[^a-zA-Z]/) && !str.match(/[a-z]{2,}|[A-Z]{2,}/)? true: false
}

function coolString(str) {
  return !str.match(/[^a-zA-Z]/)? !str.match(/[a-z]{2,}|[A-Z]{2,}/)? true: false: false
}

function coolString(str) {
  if(!str.match(/[^a-zA-Z]/)){
    if(!str.match(/[a-z]{2,}|[A-Z]{2,}/)){
      return true
    }else{
      return false
    }
  }
  return false
}

console.log(coolString("aQwFdA"))//true
console.log(coolString("aAA"))//false
console.log(coolString("q q"))//false
console.log(coolString("wWw1"))//false