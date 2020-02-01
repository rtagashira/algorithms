// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

const intToRoman = (num) =>{
    const s = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'],
          v = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let roman = '',
        i     = 0
    while(num>0){
        if(num >= v[i]){
            roman += s[i]
            num -= v[i]
        }
        if(num < v[i]){
            i++
        }
    }
    return roman
}

// const intToRoman = (num) =>{
//     let str = ''
//     while(num > 0){
//         let d = +num.toString()[0]
//         if(num > 1000){
//             num -= 1000
//             str += 'M'
//         }else if(num >= 400){
//             if(d === 9 || d === 4){
//                 str += d === 9? 'CM' : 'CD'
//                 num -= 100 * d
//             }else if(d >= 5){
//                 str += 'D' + 'C'.repeat(d - 5)
//                 num -= 100 * d
//             }
//         }else if(num >= 100){
//             str += 'C'.repeat(d)
//             num -= d * 100
//         }else if(num >= 40){
//             if(d === 9 || d === 4){
//                 str += d === 9? 'XC' : 'XL'
//                 num -= d * 10
//             }else{
//                 str += 'L' + 'X'.repeat(d - 5)
//                 num -= d * 10
//             }
//         }else if(num >= 10){
//             str += 'X'.repeat(d)
//             num -= d * 10
//         }else if(num >= 4){
//             if(d === 4 || d === 9){
//                 str += d === 9? 'IX' : 'IV'
//                 num -= d
//             }else{
//                 str += 'V' + 'I'.repeat(d - 5)
//                 num -= d
//             }
//         }else{
//             str += 'I'.repeat(d)
//             num -= d
//         }

//     }
//     return str
// }

console.log(intToRoman(1994))//"MCMXCIV"
console.log(intToRoman(100))//"C"
console.log(intToRoman(58))//"LVIII"