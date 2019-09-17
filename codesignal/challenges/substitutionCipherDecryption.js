// You intercept a note being passed between your classmates, and while trying to read it discover that it's encrypted. Since you're a fan of puzzles, you decide to crack the code. You know the following two details about the note:

//     Your classmates use a simple substitution cipher. It works as follows:
//         Consider the plaintext alphabet. Then take its permutation and call it a ciphertext alphabet.
//         Write down the ciphertext alphabet under the plaintext alphabet. Now the symbols that are located in the same column correspond to one another.
//         Now look through the message symbol by symbol and change each one to its replacement from the ciphertext alphabet.
//     The contents of the message are followed by a signature encrypted in the same way.

// To be thorough, you make sure to iterate over all the ciphers satisfying the above-mentioned requirements. The most reasonable approach is to choose the one with lexicographically smallest ciphertext alphabet out of them.

// Given the contents of the message, a signature and an encryptedSignature, what text will you end up with after applying the approach described above?


let substitutionCipherDecryption = (str, sig, eSig) => {
  let alphaArr = [...'abcdefghijklmnopqrstuvwxyz'],
      cipher   = [],
      final    = ''
  
  //put encrypted signature letters in place in relation to the alphabet
  for(let i in sig){
    let alphaI = alphaArr.indexOf(sig[i])
    cipher[alphaI] = eSig[i]
  }
  //remove esig letters from alphabet
  alphaArrFilter = alphaArr.filter(x=>eSig.indexOf(x)===-1)
  //fill in blanks in the cipher with alphabet letters
  for(let i=0;i<cipher.length;i++){
    if(!cipher[i]){
      cipher[i] = alphaArrFilter.shift()
    }
  }
  //add the rest of the alphabet on to the cipher
  cipher = [...cipher, ...alphaArrFilter]
  //build string using the cipher
  for(let letter of str){
    let index = cipher.indexOf(letter)
    final += alphaArr[index]
  }

return final
}

console.log(substitutionCipherDecryption("issomtoqmvjts","alice","james"))//"keepitprivate"
console.log(substitutionCipherDecryption("efvwmigoycjablxhdtusznrpqk","tdagwolcqu","cgbqorahmx"))
                                                                                                //"efvxqhdwytilakucbrspzmongj"