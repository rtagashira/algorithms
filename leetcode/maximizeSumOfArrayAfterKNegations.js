// Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)

// Return the largest possible sum of the array after modifying it in this way.

const largestSumAfterKNegations = (a, k) =>{
    a.sort((a,b)=>a-b)
    let zeroI = a.indexOf(0)
    let negNums = a.filter(x=>x<0)
    let odd = k % 2 !== 0
    let biggestNegNumber = a.indexOf(negNums[negNums.length-1])
    let smallestPosNumber = biggestNegNumber + 1

    if(zeroI === -1 && negNums.length === 0){
        //only postive numbers
        if(odd) a[0] = -a[0]
    }else if(a[0] < 0){
        //negative numbers with zero
        if(zeroI > 0){
            if(negNums.length >= k){
                a = a.map((x,i)=>i<k?-x:x)
            }else{
                //negative numbers with zero where k is greater than the amount of neg numbers
                a = a.map((x,i)=>x<0?-x:x)
            }
        }
        //negative numbers w/o zero
        else if(zeroI === -1){
            //more or equal numbers of neg numbers to k
            if(negNums.length >= k){
                a = a.map((x,i)=>i<k?-x:x)
            }else{
            //if k is larger than the number of neg numbers, an odd surplus means negate the smallest number
                let surplusOdd = (k - negNums.length) % 2 != 0
                if(surplusOdd){
                    a = a.map((x,i)=>x<0?-x:x)
                    //find the smallest number to negate
                    if(a[smallestPosNumber] <= a[biggestNegNumber]){
                        a[smallestPosNumber] = -a[smallestPosNumber]
                    }else{
                        a[biggestNegNumber] = -a[biggestNegNumber]
                    }
                }else{
                    a = a.map((x,i)=>x<0?-x:x)
                }
            }
        }
    }
    return a.reduce((a,b)=>a+b)
}

console.log(largestSumAfterKNegations([4,2,3],1))//5
console.log(largestSumAfterKNegations([3,-1,0,2],3))//6
console.log(largestSumAfterKNegations([2,-3,-1,5,-4],2))//13
console.log(largestSumAfterKNegations([-2,9,9,8,4],5))//32
console.log(largestSumAfterKNegations([-4,-6,9,-2,2],4))//19
console.log(largestSumAfterKNegations([8,-7,-3,-9,1,9,-6,-9,3],8))//53