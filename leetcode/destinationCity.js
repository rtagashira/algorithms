// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

const destCity = (paths) =>{
    let set = new Set(),
        arr = []
    for(let a of paths){
        set.add(a[0])
        arr.push(a[1])
    }
    for(let el of arr){
        if(!set.has(el)) return el
    }
}

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))//"Sao Paulo"