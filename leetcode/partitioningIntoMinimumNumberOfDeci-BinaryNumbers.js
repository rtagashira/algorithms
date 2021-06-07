// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

const minPartitions = (n) =>{
    let d = 0
    for(let i=0;i<n.length;i++){
        let temp = +n[i]
        if(temp > d) d = temp
    }
    return d
}

console.log(minPartitions('32'))//3
console.log(minPartitions("82734"))//8
console.log(minPartitions("27346209830709182346"))//9