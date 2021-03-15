// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

const maximumWealth = (arr) =>{
    let total = 0
    
    for(let i=0;i<arr.length;i++){
        let temp = 0
        for(let j=0;j<arr[i].length;j++){
            temp += arr[i][j]
        }
        if(temp > total) total = temp
    }
    return total
}

console.log(maximumWealth([[1,2,3],[3,2,1]]))//6
console.log(maximumWealth([[1,5],[7,3],[3,5]]))//10