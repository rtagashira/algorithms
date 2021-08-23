// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).

// The valid times are those inclusively between 00:00 and 23:59.

// Return the latest valid time you can get from time by replacing the hidden digits.

const maximumTime = (time) =>{
    let str = ''
    if(time[0] === '?'){
        if(+time[1] < 4 || time[1] === '?'){
            str += '2'
        }else{
            str += '1'
        }
    }else{
        str += time[0]
    }
    
    if(time[1] === '?'){
        if(str[0] === '2'){
            str += '3'
        }else{
            str += '9'
        }
    }else{
        str += time[1]
    }
    str += ':'

    if(time[3] === '?'){
        str += '5'
    }else{
        str += time[3]
    }
    
    if(time[4] === '?'){
        str += '9'
    }else{
        str += time[4]
    }
    
    return str
}

console.log(maximumTime("2?:?0"))//"23:50"
console.log(maximumTime("0?:3?"))//"09:39"
console.log(maximumTime("1?:22"))//"19:22"