// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

const totalMoney = (n) =>{
    let monday = 1,
        count = 0,
        total = 0
    for(let i=0;i<n;i++){
        total += monday + count
        count++
        if(count === 7){
            monday++
            count = 0
        }
    }
    return total
}

console.log(totalMoney(4))//10
console.log(totalMoney(10))//37
console.log(totalMoney(20))//96