// Compare two arrays and return a new array with any items only 
// found in one of the two given arrays, but not both. In other words, return 
// the symmetric difference of the two arrays.

function diffArray1(arr1, arr2) {
    let diff=[]
    for(let num of arr1){
        if(arr2.indexOf(num)<0){
            diff.push(num)
        }
    }
    for(let num of arr2){
        if(arr1.indexOf(num)<0){
            diff.push(num)
        }
    }
    return diff
}

function diffArray(arr1, arr2) {
    let filterArr1 = arr1.filter((num) => arr2.indexOf(num) < 0)
    let filterArr2 = arr2.filter((num) => arr1.indexOf(num) < 0)
    return [...filterArr1, ...filterArr2]
}



console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].