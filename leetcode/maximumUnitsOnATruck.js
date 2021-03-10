// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

const maximumUnits = (boxTypes, truckSize) =>{
    let total = 0
    boxTypes.sort((a,b)=>b[1]-a[1])
    for(let box of boxTypes){
        while(box[0]){
            if(truckSize){
                total += box[1]
                box[0]--
                truckSize--
            }else{
                break
            }
        }
    }
    return total
}

console.log(maximumUnits(boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4))//8
console.log(maximumUnits(boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10))//91