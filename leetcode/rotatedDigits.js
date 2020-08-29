// X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other (on this case they are rotated in a different direction, in other words 2 or 5 gets mirrored); 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

// Now given a positive number N, how many numbers X from 1 to N are good?

const rotatedDigits = (n) =>{
    let count = 0

    for(let i=1;i<=n;i++){
        let str = i.toString(),
            temp = ''
        if(/[347]/.test(str)){
            continue
        }
        for(let n of str){
            if(/[2569]/.test(n)){
                if(n === '2') temp += 5
                if(n === '5') temp += 2
                if(n === '6') temp += 9
                if(n === '9') temp += 6
            }else{
                temp += n
            }
        }
        if(temp !== str){
            count++
        }
    }
    return count
}

console.log(rotatedDigits(10))//4