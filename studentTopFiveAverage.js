// https://www.youtube.com/watch?v=VSeg5T_40Ro

// There are a list of students where each student has at least five scores. Output the average of a given students highest five scores.
//Then find the highest average.

const scores = [
  {id:1,score: 76},
  {id:2,score: 99},
  {id:1,score: 100},
  {id:2,score: 56},
  {id:2,score: 12},
  {id:2,score: 87},
  {id:2,score: 100},
  {id:2,score: 18},
  {id:1,score: 86},
  {id:1,score: 81},
  {id:1,score: 83},
  {id:2,score: 37},
  {id:1,score: 65},
]
const scores2 = [
  {id:'Bob',score:50},
  {id:'Mike',score:100},
  {id:'Peter',score:63},
  {id:'Bob',score:66},
  {id:'Mike',score:77},
  {id:'Peter',score:82},
  {id:'Bob',score:99},
  {id:'Mike',score:15},
  {id:'Peter',score:63},
  {id:'Bob',score:66},
  {id:'Mike',score:34},
  {id:'Peter',score:69},
  {id:'Bob',score:55},
  {id:'Mike',score:47},
  {id:'Peter',score:88},
  {id:'Bob',score:96},
  {id:'Mike',score:73},
  {id:'Peter',score:100}
]

function top5Average(arr){
  let obj = {}
  let finalObj = {}
  for(let i=0;i<arr.length;i++){
    if(!obj[arr[i].id]) obj[arr[i].id] = []   //create student:score array  key/value pairs in obj
    obj[arr[i].id].push(arr[i].score)
  }
  for(let student in obj){
    finalObj[student] = obj[student].sort((a,b)=>a-b)      //create finalObj key/value pairs of id: top 5 scores average
                                    .slice(-5)
                                    .reduce((t,c,i,a)=>{
                                    if(i!=a.length-1){
                                      return t+c
                                    }else{
                                      return (t+c)/a.length
                                    }
                                    })
  }
  return finalObj
}

console.log(top5Average(scores))
console.log(top5Average(scores2))


//highest student average

function highestAve(obj){
  let average = 0
  let name = ''
  for(let student in obj){
    if(obj.hasOwnProperty(student)){
      if(obj[student]>average){
        average = obj[student]
        name = student
      }
    }
  }
  return {[name]: average}
}

console.log(highestAve(top5Average(scores)));
console.log(highestAve(top5Average(scores2)));
