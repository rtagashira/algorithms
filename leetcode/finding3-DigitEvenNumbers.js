// You are given an integer array digits, where each element is a digit. The array may contain duplicates.

// You need to find all the unique integers that follow the given requirements:

// The integer consists of the concatenation of three elements from digits in any arbitrary order.
// The integer does not have leading zeros.
// The integer is even.
// For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

// Return a sorted array of the unique integers.

const findEvenNumbers = (digits) =>{
    let set = new Set()
    const combo = (arr,integer = '') =>{
        for(let i=0;i<arr.length;i++){
            if(!integer && arr[i] === 0){
                continue
            }else if(integer.length === 2){ 
                if(arr[i] % 2 !== 0){
                    continue
                }else{
                    set.add(+(integer + arr[i].toString()))
                }
            }else{
                let str = arr[i].toString()
                let a = [...arr.slice(0,i), ...arr.slice(i+1)]
                combo(a,integer+str)
            }
        }
    }
    combo(digits)
    return [...set].sort((a,b)=>a-b)
}

console.log(findEvenNumbers([2,1,3,0]))
                                        //[102,120,130,132,210,230,302,310,312,320]