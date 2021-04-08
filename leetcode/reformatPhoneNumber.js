// You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

// You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

// 2 digits: A single block of length 2.
// 3 digits: A single block of length 3.
// 4 digits: Two blocks of length 2 each.
// The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

// Return the phone number after formatting.

const reformatNumber = (number) =>{
    let str = ''
    let str2 = ''
    for(let char of number){
        if(/[0-9]/.test(char)) str += char
    }
    
    for(let i=0;i<str.length;i++){
        if(str.length - i > 4){
            str2 += str.slice(i,i+3) + '-'
            i += 2
        }else if(str.length - i === 4){
            return str2 + str.slice(i, i+2) + '-' + str.slice(i+2)
        }else{
            return str2 + str.slice(i)
        }
    }
}

// const reformatNumber = (number) =>{
//     let str = ''
//     let arr = []
//     for(let char of number){
//         if(/[0-9]/.test(char)) str += char
//     }
//     while(str.length){
//         if(str.length > 4){
//             arr.push(str.slice(0,3))
//             str = str.slice(3)
//         }else if(str.length === 4){
//             arr.push(str.slice(0,2))
//             arr.push(str.slice(2))
//             str = ''
//         }else{
//             arr.push(str)
//             str = ''
//         }
//     }
//     return arr.join('-')
// }

console.log(reformatNumber("123 4-567"))//"123-45-67"
console.log(reformatNumber("123 4-5678"))//"123-456-78"