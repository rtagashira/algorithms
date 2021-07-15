// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

const countTriples = (n) =>{
    let count = 0
    for(let i=n;i>=3;i--){
        for(let b=i-1;b>=2;b--){
            for(let a=b-1;a>=1;a--){
                if(a*a + b*b === i*i){
                    count += 2
                    break
                }
            }
        }
    }
    return count
}

console.log(countTriples(5))//2
console.log(countTriples(10))//4