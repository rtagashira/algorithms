// At a lemonade stand, each lemonade costs $5. 

// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

// Return true if and only if you can provide every customer with correct change.

const lemonadeChange = (arr) =>{
    let obj = {
                5: 0,
                10: 0,
                20: 0
              }
    
    for(let bill of arr){
        let change = bill - 5
        obj[bill]++
        if(change != 0){
            while(change){
                if(change >= 20 && obj[20]){
                    obj[20]--
                    change -= 20
                }else if(change >= 10 && obj[10]){
                    obj[10]--
                    change -= 10
                }else if(change >= 5 && obj[5]){
                    obj[5]--
                    change -= 5
                }else{
                    return false
                }
            }
        }
    }
    return true
}