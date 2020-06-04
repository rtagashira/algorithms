// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

const relativeSortArray = (arr1, arr2) =>{
    //elements of arr1 not in arr2
    let filter = arr1.filter(x=>arr2.indexOf(x)<0).sort((a,b)=>a-b),
    //count elements of arr1 that are in arr2
        obj = {},
    //used to speed up obj count
        set = new Set(arr2),
    //return arr
        arr = []
    //count elements of arr1 that are in arr2
    for(let n of arr1){
        if(set.has(n)){
            obj[n]?obj[n]++:obj[n] = 1
        }
    }
    //build final arr looping through the counting obj
    for(let n of arr2){
        while(obj[n]){
            arr.push(n)
            obj[n]--
        }
    }
    return [...arr,...filter]
}

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))
                                                                      //[ 2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19 ]