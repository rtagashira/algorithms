// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

const canPlaceFlowers = (arr, n) =>{
    let count = 0
    if(n === 0) return true
    if(arr.length === 1){
        if(arr[0] === 0) return n <= 1
    }
    if(arr.length === 2){
        if(arr[0] === 0 && arr[1] === 0) return n <= 1
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i] === 1){
            i++
        }else if(arr[i] === 0){
            if(arr[i+1] === 0){
                count++
                i++
            }else if(i === arr.length - 1 && arr[i-1] === 0){
                count++
            }
        }
    }
    return n <= count
}

console.log(canPlaceFlowers(flowerbed = [1,0,0,0,1], n = 1))//true
console.log(canPlaceFlowers(flowerbed = [1,0,0,0,1], n = 2))//false