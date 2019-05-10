// You are given a list dishes, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

// Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically, and the result array should be sorted lexicographically by the names of the ingredients.


function groupingDishes(arr) {
  let obj = {}
  // create object with ingredient:[dishes] key:values
  for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr[i].length;j++){
      obj[arr[i][j]]? obj[arr[i][j]].push(arr[i][0]): obj[arr[i][j]] = [arr[i][0]]
    }
  }
  
  let finalArr = []
  let ingredientsArr = Object.keys(obj)
  ingredientsArr.sort()
  // create final array filtering out ingredients with 1 dish, and sorting dishes
  for(let i=0;i<ingredientsArr.length;i++){
    if(obj[ingredientsArr[i]].length > 1){
      obj[ingredientsArr[i]].sort()
      finalArr.push([ingredientsArr[i], ...obj[ingredientsArr[i]]])
    }
  }
  return finalArr
}

console.log(groupingDishes([["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
["Quesadilla", "Chicken", "Cheese", "Sauce"],
["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]))
// [["Cheese", "Quesadilla", "Sandwich"],
// ["Salad", "Salad", "Sandwich"],
// ["Sauce", "Pizza", "Quesadilla", "Salad"],
// ["Tomato", "Pizza", "Salad", "Sandwich"]]