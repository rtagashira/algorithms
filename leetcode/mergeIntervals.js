// Given a collection of intervals, merge all overlapping intervals.

const merge = (intervals) =>{
    if(intervals.length <= 1) return intervals
// sort array based on starting integer
    intervals.sort((a,b)=>{
        if(a[0] > b[0]){
            return 1
        }else if(a[0] < b[0]){
            return -1
        }else{
            return 0
        }
    })

    let arr = [intervals[0]]

    for(let i=1;i<intervals.length;i++){
    //compare each element of the intervals array to the last element of arr
    // see if the start of the new interval is equal or less than the end of the last interval
    //either replace the last arr element with a new combined element or .push it as is
        let first = intervals[i][0],
            second = intervals[i][1],
            temp
        
        if(first <= arr[arr.length - 1][1]){
            temp = [Math.min(first,arr[arr.length - 1][0]),Math.max(second,arr[arr.length-1][1])]
            arr.pop()
            arr.push(temp)
        }else if(first > arr[arr.length - 1][1]){
            arr.push(intervals[i])
        }
    }
    return arr
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
                                                //[[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]]))
                                    //[[1,5]]