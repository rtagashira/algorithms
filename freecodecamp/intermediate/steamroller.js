// Flatten a nested array.You must account for varying levels of nesting.



function steamrollArray(arr){
    let finalArr = []
    function flatten(data){
        if(!Array.isArray(data)){
            finalArr.push(data)
        }else{
            for(let item of data){
                flatten(item)
            }
        }
    }
    for(let data of arr){
        flatten(data)
    }
    return finalArr
}

function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

function steamrollArray(arr) {
    while(arr.some(Array.isArray)){
        arr = [].concat(...arr)
    }
    return arr
}


console.log(steamrollArray([[["a"]], [["b"]]]))
console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([1, [], [3, [[4]]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
