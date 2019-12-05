// There are n houses in a village on a circular road numbered from 1 to n starting from some house in clockwise order. It takes one minute to get from one house to any of two adjacent houses and there are no other roads in this village besides the circular one. Find the minimal time required to make all visits in the desired order starting from house 1.


let visitsOnCircularRoad = (n, arr) => {
  let a = [],
      l = 0,
      t = 0
  //create array a with numbered houses twice to get both clockwise/counter-clockwise times
  // if n=4  then a = [1,2,3,4,1,2,3,4]
  while(l < 2){
      for(let i=1;i<=n;i++){
      a.push(i)
      }
      l++
  }
  //add 1 to the beginning of the input array since we're starting from house 1
  arr.unshift(1)
  // iterate through the input array
  // make subarrays from array 'a' using the lower numbered house to the higher 
  //      numbered house and vice versa
  // 'before' is the subarray of 'a' with the smaller numbered house before the higher numbered house
  // 'after' is the subarray of 'a' with the smaller number after the higher number
  // add the length of the smaller subarray to t
  for(let i=1;i<arr.length;i++){
      let low    = Math.min(arr[i],arr[i-1]),
          high   = Math.max(arr[i],arr[i-1]),
          before = a.slice(a.indexOf(low),a.indexOf(high)).length,
          after  = a.slice(a.indexOf(high),a.lastIndexOf(low)).length
      t += Math.min(before,after)
  }
  return t
}

console.log(visitsOnCircularRoad(4,[1,3,2,3,1]))//6
console.log(visitsOnCircularRoad(3,[3]))//1