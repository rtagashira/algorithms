// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.

const distanceBetweenBusStops = (distance, start, destination) =>{
    let temp = 0
    let total = 0
    for(let i=0;i<distance.length;i++){
        total += distance[i]
        if(i >= Math.min(start,destination) && i < Math.max(start,destination)){
            temp += distance[i]
        }
    }
    return Math.min(temp,total - temp)
}

console.log(distanceBetweenBusStops(distance = [1,2,3,4], start = 0, destination = 1))//1
console.log(distanceBetweenBusStops(distance = [1,2,3,4], start = 0, destination = 2))//3
console.log(distanceBetweenBusStops(distance = [1,2,3,4], start = 0, destination = 3))//4