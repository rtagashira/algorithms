// Given an array of unique integers salary where salary[i] is the salary of the employee i.

// Return the average salary of employees excluding the minimum and maximum salary.

const average = (salary) =>{
    let max = Math.max(...salary),
        min = Math.min(...salary),
        sum = 0
    for(let num of salary){
        if(num !== max && num !== min)sum += num
    }
    return sum / (salary.length - 2)
}