// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

const findComplement = (num) =>{
    let str = num.toString(2),
        str2 = [...str].reduce((acc,v)=>{
            if(v === '1'){
                return acc + '0'
            }else{
                return acc + '1'
            }
        },'')
    return parseInt(str2,2)
}

console.log(findComplement(5))//2