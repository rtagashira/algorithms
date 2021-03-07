// Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// For each such occurrence, add "third" to the answer, and return the answer.

const findOcurrences = (text, first, second) =>{
    let arr = text.split(' ')
    let thirdArr = []
    
    for(let i=0;i<text.length;i++){
        if(arr[i] === first && arr[i+1] === second && i+2<arr.length) thirdArr.push(arr[i+2])
    }
    return thirdArr
}

console.log(findOcurrences(text = "alice is a good girl she is a good student", 
first = "a", second = "good"))//["girl","student"]