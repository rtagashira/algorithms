// Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the sorted array.

const sortByBits = (arr) =>{
    const obj = {}
    const a = []
    for(let i=0;i<arr.length;i++){
        let oneCount = [...arr[i].toString(2)].filter(x=>x==='1').length
        obj[oneCount]? obj[oneCount].push(arr[i]): obj[oneCount] = [arr[i]]
    }
    let oneArr = Object.keys(obj).sort((a,b)=>a-b)
    for(let n of oneArr){
        if(obj[n].length > 1) obj[n].sort((a,b)=>a-b)
        while(obj[n].length > 0){
            a.push(obj[n].shift())
        }
        
    }
    return a
}

console.log(sortByBits([0,1,2,3,4,5,6,7,8]))//[0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]))
                                                            //[1,2,4,8,16,32,64,128,256,512,1024]