// We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).

// Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

const isOneBitCharacter = (bits) =>{
    let temp = ''
    if(bits.length === 1) return true
    for(let i=0;i<bits.length;i++){
        if(i === bits.length - 1){
            if(temp.length === 2 || temp.length === 0) return true
        }
        if(temp.length === 0 && bits[i] === 1){
            temp += bits[i]
        }else if(temp.length === 1){
            temp += bits[i]
        }else{
            if(bits[i] === 1) temp = '1'
        }
    }
    return false
}

console.log(isOneBitCharacter([1, 0, 0]))//true
console.log(isOneBitCharacter([1, 1, 1, 0]))//false