// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

const findRestaurant = (list1, list2) =>{
    let obj = {}
    let arr = []
    let sum

    for(let i=0;i<list1.length;i++){
        if(i < list1.length){
            obj[list1[i]] = i
        }
    }

    for(let i=0;i<list2.length;i++){
        if(obj[list2[i]] >= 0){
            let s = i + obj[list2[i]]
            if(sum === undefined){
                sum = s
                arr.push(list2[i])
            }else if(s < sum){
                sum = s
                arr = [list2[i]]
            }else if(s === sum){
                arr.push(list2[i])
            }
        }
    }
    return arr
}

console.log(findRestaurant(["Shogun", "Tapioca Express", 
"Burger King", "KFC"],["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]))//["Shogun"]

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],
["KFC","Burger King","Tapioca Express","Shogun"]))//["KFC","Burger King","Tapioca Express","Shogun"]