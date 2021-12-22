// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

// Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the watch could represent. You may return the answer in any order.

// The hour must not contain a leading zero.

// For example, "01:00" is not valid. It should be "1:00".
// The minute must be consist of two digits and may contain a leading zero.

// For example, "10:2" is not valid. It should be "10:02".

const readBinaryWatch = (turnedOn) =>{
    let loop = parseInt('1111111111',2)
    let arr = []
    
    while(loop >= 0){
        let str = loop.toString(2)
        str = '0'.repeat(10 - str.length) + str
        let ones = [...str].filter(x=>x==='1').length
        
        if(ones === turnedOn){
            let hourBin = str.slice(0,4)
            let minBin = str.slice(4)
            let hour = parseInt(hourBin,2)
            let min = parseInt(minBin,2)
            if(hour > 11 || min > 59){
                loop--
                continue
            }
            arr.push(hour.toString() + ':' + '0'.repeat(2 - min.toString().length) + min.toString())
        }
        
        loop--
    }
    
    return arr
}

console.log(readBinaryWatch(1))
                                //["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(readBinaryWatch(9))//[]