// Given array of integers, remove each kth element from it.

function extractEachKth(arr, k) {
  return arr.filter((v,i)=>(i+1)%k!=0)
}
//----------------------------------------
function extractEachKth2(arr, k) {
  return arr.filter((_,i)=>(i+1)%k)
}


console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))//[1, 2, 4, 5, 7, 8, 10]
