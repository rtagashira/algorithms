// Caesar Box is a simple transposition cipher used in the Roman Empire, in which characters of the given message are broken into multiple lines that form a square when stacked up and then read the square column by column.

// Given a message, encode it.

let caesarBoxCipherEncoding = (str) =>{
  let sqrt = Math.sqrt(str.length),
      final= ''
  for(let i=0;i<sqrt;i++){
      for(let j=0;j<str.length;j+=sqrt){
          final += str[i+j]
      }
  }
  return final
}

// let caesarBoxCipherEncoding = (str) =>{
//     let sqrt = Math.sqrt(str.length),
//         arr  = [],
//         final= ''
//     for(let i=0;i<str.length;i+=sqrt){
//         arr.push(str.slice(i, i + sqrt))
//     }
//     for(let i=0;i<arr[0].length;i++){
//         for(let j=0;j<arr.length;j++){
//             final += arr[j][i]
//         }
//     }
//     return final
// }

console.log(caesarBoxCipherEncoding("a message"))//"aea sgmse"
console.log(caesarBoxCipherEncoding("sixteenletters16"))//"seerietsxnt1tle6"