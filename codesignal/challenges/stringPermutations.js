// Avoid using C++'s std::next_permutation or similar features in other languages to solve this challenge. Implement the algorithm yourself, since this is what you would be asked to do during a real interview.

// Given a string s, find all its potential permutations. The output should be sorted in lexicographical order.


const stringPermutations = (s) =>{
    let set = new Set()
    const helper = (str, perm = '') =>{
        if(perm.length === s.length){
            set.add(perm)
        }else{
            for(let i=0;i<str.length;i++){
                let letter = str[i],
                    rest = str.slice(0,i) + str.slice(i+1)
                helper(rest, perm + letter)
            }
        }
    }
    helper(s)
    return [...set].sort()
}

console.log(stringPermutations("CBA"))
                                      // ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
console.log(stringPermutations("ABA"))
                                      // ["AAB", "ABA", "BAA"]