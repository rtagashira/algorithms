// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

const largestAltitude = (gain) => gain.reduce((acc,v,i,a)=>{
    acc[0] += v
    if(acc[0] > acc[1]) acc[1] = acc[0]
    if(i === a.length - 1){
        return acc[1]
    }else{
        return acc
    }
},[0,0])

// const largestAltitude = (gain) =>{
//     let alt = 0
//     let highest = 0
//     for(let n of gain){
//         alt += n
//         if(alt > highest) highest = alt
//     }
//     return highest
// }

console.log(largestAltitude([-5,1,5,0,-7]))//1
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))//0