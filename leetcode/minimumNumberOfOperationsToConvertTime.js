// You are given two strings current and correct representing two 24-hour times.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

// Return the minimum number of operations needed to convert current to correct.

const convertTime = (current, correct) =>{
    let start = +current.slice(0,2) * 60 + +current.slice(3)
    let finish = +correct.slice(0,2) * 60 + +correct.slice(3)
    let count = 0
    if(start > finish) finish += 24 * 60
    while(start !== finish){
        let dif = finish - start
        if(dif >= 60){
            let d = Math.floor(dif/60)
            count += d
            start += 60 * d
        }else if(dif >= 15){
            let d = Math.floor(dif/15)
            count += d
            start += 15 * d
        }else if(dif >= 5){
            let d = Math.floor(dif/5)
            count += d
            start += 5 * d
        }else if(dif >= 1){
            let d = Math.floor(dif/1)
            count += d
            start += 1 * d
        }
    }
    return count
}

console.log(convertTime(current = "02:30", correct = "04:35"))//3
console.log(convertTime(current = "11:00", correct = "11:01"))//1