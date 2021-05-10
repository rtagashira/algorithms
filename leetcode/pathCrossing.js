// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

const isPathCrossing = (path) =>{
    let set = new Set(['0,0'])
    let x = 0
    let y = 0
    for(let char of path){
        if(char === 'N'){
            y++
        }else if(char === 'S'){
            y--
        }else if(char === 'E'){
            x++
        }else if(char === 'W'){
            x--
        }
        
        let str = x + ',' + y
        
        if(set.has(str)){
            return true
        }else{
            set.add(str)
        }
    }
    return false
}

console.log(isPathCrossing("NES"))//false
console.log(isPathCrossing("NESWW"))//true