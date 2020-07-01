// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

const findTheDistanceValue = (arr1, arr2, d) =>{
    let distance = 0
    for(let i=0;i<arr1.length;i++){
        let pass = true
        for(let j=0;j<arr2.length;j++){
            if(Math.abs(arr1[i] - arr2[j]) <= d){
                pass = false
                break
            }
        }
        if(pass) distance++
    }
    return distance
}

console.log(findTheDistanceValue([4,5,8],[10,9,1,8],2))//2
console.log(findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30],3))//2