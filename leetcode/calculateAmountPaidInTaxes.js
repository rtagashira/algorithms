// You are given a 0-indexed 2D integer array brackets where brackets[i] = [upperi, percenti] means that the ith tax bracket has an upper bound of upperi and is taxed at a rate of percenti. The brackets are sorted by upper bound (i.e. upperi-1 < upperi for 0 < i < brackets.length).

// Tax is calculated as follows:

// The first upper0 dollars earned are taxed at a rate of percent0.
// The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
// The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
// And so on.
// You are given an integer income representing the amount of money you earned. Return the amount of money that you have to pay in taxes. Answers within 10-5 of the actual answer will be accepted.

const calculateTax = (brackets, income) =>{
    let tax = 0
    for(let i=0;i<brackets.length;i++){
        let lowerBound = 0
        if(i > 0) lowerBound = brackets[i-1][0]
        if(income >= lowerBound){
            let upperBound = income >= brackets[i][0]? brackets[i][0] : income
                tax += (upperBound - lowerBound) * (brackets[i][1] / 100)
        }
    }
    return tax
}

console.log(calculateTax(brackets = [[3,50],[7,10],[12,25]], income = 10))//2.65000
console.log(calculateTax(brackets = [[1,0],[4,25],[5,50]], income = 2))//0.25000
console.log(calculateTax(brackets = [[2,50]], income = 0))//0.00000