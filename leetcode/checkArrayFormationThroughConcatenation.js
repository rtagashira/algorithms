// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

//too slow
const canFormArray = (arr, pieces) =>{
    let str = arr.join(),
        str2 = ''
    while(pieces.length){

        for(let i=0;i<pieces.length;i++){

            let temp = pieces[i].join()
            if(str.indexOf(temp) > -1){
                let temp2 = str2? str2 + ',' + temp : temp
                let temp3 = str2? temp + ',' + str2 : temp
                if(str.indexOf(temp2) > -1){
                    str2 = temp2
                    if(str2 === str) return true
                    pieces = [...pieces.slice(0,i),...pieces.slice(i+1)]
                    break
                }else if(str.indexOf(temp3) > -1){
                    str2 = temp3
                    if(str2 === str) return true
                    pieces = [...pieces.slice(0,i),...pieces.slice(i+1)]
                    break
                }
            }else{
                return false
            }
        }
    }
    return false
}

console.log(canFormArray([85],[[85]]))//true
console.log(canFormArray([15,88],[[88],[15]]))//true
console.log(canFormArray([49,18,16],[[16,18,49]]))//false
console.log(canFormArray([2,82,79,95,28],[[2],[82],[28],[79,95]]))//true