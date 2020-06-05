// We distribute some number of candies, to a row of n = num_people people in the following way:

// We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

// Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

const distributeCandies = (candies, people) =>{
    let arr = new Array(people).fill(0),
        turn = 1,
        i = 0

    while(candies){
        if(candies - turn > 0){
            let c = turn
            arr[i] += c
            if(i === people - 1){
                i = 0
                turn++
                candies -= c
            }else{
                i++
                turn++
                candies -= c
            }
        }else{
            arr[i] += candies
            return arr
        }
    }
}

console.log(distributeCandies(7,4))//[1,2,3,1]
console.log(distributeCandies(10,3))//[5,2,3]
console.log(distributeCandies(60,4))//[15,18,15,12]