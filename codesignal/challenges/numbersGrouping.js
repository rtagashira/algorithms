// You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 * 104, ..., the 100th one should contain numbers from 99 * 104 + 1 to 106 and so on.

// All the numbers will then be written down in groups to the text file in such a way that:

// the groups go one after another;
// each non-empty group has a header which occupies one line;
// each number in a group occupies one line.
// Calculate how many lines the resulting text file will have.

const numbersGrouping = (a) =>{
    let obj = {}
    for(let num of a){
        let group = num < 10000 && num > 0? 1: Math.ceil(num / 10**4)
        obj[group]? obj[group] ++: obj[group] = 1
    }
    return a.length + Object.keys(obj).length
}

console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999]))//11
console.log(numbersGrouping(
[10000, 20000, 30000, 40000, 50000, 60000, 10000, 120000, 150000, 200000, 300000, 1000000, 10000000, 100000000, 10000000]))//28
console.log(numbersGrouping([10000]))//2
console.log(numbersGrouping([10000, 1]))//3
console.log(numbersGrouping(
[685400881, 696804468, 696804942, 803902442, 976412678, 976414920, 47763597, 803900633, 233144924, 47764349, 233149077, 214990733, 214994039, 280528089, 280524347, 685401797]))//24