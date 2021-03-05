// In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].

// Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.

const rearrangeBarcodes = arr =>{
    let obj = {}
    let newArr = []
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]? obj[arr[i]]++ : obj[arr[i]] = 1
    }
    
    let keyArr = Object.keys(obj)
    keyArr.sort((a,b)=>obj[b] - obj[a])
    let i = 0

    while(newArr.length<arr.length){
        if(obj[keyArr[i]]){
            newArr.push(+keyArr[i])
            obj[keyArr[i]]--
        }
        
        let left = i === 0? keyArr.length - 1 : i - 1
        let right = i === keyArr.length - 1? 0 : i + 1
        
        obj[keyArr[left]] > obj[keyArr[right]]? i = left : i = right
    }
    
    return newArr
}

console.log(rearrangeBarcodes([7,7,7,8,5,7,5,5,5,8]))//[5,7,5,7,5,7,5,8,7,8]