// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself.For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
    let sum = 0
    for(let i=2;i<=num;i++){
        let divisors = 0
        for(let j=1;j<=i;j++){
            if(i % j === 0){
                divisors ++
            }
        }
        if(divisors === 2){
            sum += i
        }
    }
    return sum
}

console.log(sumPrimes(10))
console.log(sumPrimes(977))

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.