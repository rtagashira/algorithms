// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

const thousandSeparator = (n) =>{
    let str = n.toString(),
        arr = []
    if(str.length > 3){
        for(let i=str.length-1;i>=0;i--){
            arr.unshift(str[i])
            if((str.length - i) % 3 === 0 && i > 0){
                arr.unshift('.')
            }
        }
    }
    return arr.length? arr.join('') : str
}

console.log(thousandSeparator(987))//'987'
console.log(thousandSeparator(1234))//'1.234'
console.log(thousandSeparator(123456789))//"123.456.789"