// Given a sorted array of integers arr and an integer num, find all possible unique subsets of arr that add up to num. Both the array of subsets and the subsets themselves should be sorted in lexicographical order.

// time limit exceeded
function sumSubsets(arr, num) {
    if(num === 0) return [[]]
    let loop = 2 ** arr.length - 1
    let a = []
    let set = new Set()
    while(loop){
        let str = loop.toString(2)
        str = '0'.repeat(arr.length - str.length) + str
        let temp = []
        for(let i=0;i<arr.length;i++){
            if(str[i] === '1') temp.push(arr[i])
        }
        
        if(temp.reduce((a,b)=>a+b) === num && !set.has(temp.join())){
            a.push(temp)
            set.add(temp.join())
        }
        loop--
    }
    return a
}

console.log(sumSubsets([1, 2, 3, 4, 5],5))//[[1, 4], [2, 3], [5]]