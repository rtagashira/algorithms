// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

const countMatches = (items, ruleKey, ruleValue) =>{
    let count = 0
    for(let item of items){
        if(ruleKey === 'type'){
            if(item[0] === ruleValue) count++
        }else if(ruleKey === 'color'){
            if(item[1] === ruleValue) count++
        }else{
            if(item[2] === ruleValue) count++
        }
    }
    return count
}