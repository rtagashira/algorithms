// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

// The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

// Return the earliest year with the maximum population.

const maximumPopulation = (logs) =>{
    let count = 0
    let date
    
    for(let i=0;i<logs.length;i++){
        let tempCount = 1
        for(let j=0;j<logs.length;j++){
            let arr = logs[i]
            if(i != j){
                if(arr[0] >= logs[j][0] && arr[0] < logs[j][1]){
                    tempCount++
                }
            }
            if(count === 0){
                count = 1
                date = arr[0]
            }
            if(tempCount > count){
                count = tempCount
                date = arr[0]
            }else if(tempCount === count && arr[0] < date){
                date = arr[0]
            }
        }
    }
    return date
}

console.log(maximumPopulation([[1993,1999],[2000,2010]]))//1993
console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]))//1960