// You are given some water tubes. For each i where i is the tube index, it is known that the ith tube contains wateri liters of liquid, but each minute flowPerMinutei liters flows out of it. After every minute you check the tubes. How many minutes will pass until you first see that all of them are empty?

let waterTubes = (w, f) => Math.max(...w.map((x,i) => Math.ceil(x/f[i])))

let waterTubes = (w, f) => w.reduce((a,v,i,)=>Math.ceil(v/f[i])>a? Math.ceil(v/f[i]): a, w[0]/f[0])

console.log(waterTubes([1,2,5],[1,1,2]))//3
console.log(waterTubes([1,2,3],[1,1,2]))//2
console.log(waterTubes([1,1,1],[3,4,5]))//1