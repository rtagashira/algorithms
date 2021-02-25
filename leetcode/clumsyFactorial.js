// Normally, the factorial of a positive integer n is the product of all positive integers less than or equal to n.  For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

// We instead make a clumsy factorial: using the integers in decreasing order, we swap out the multiply operations for a fixed rotation of operations: multiply (*), divide (/), add (+) and subtract (-) in this order.

// For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.  However, these operations are still applied using the usual order of operations of arithmetic: we do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.

// Additionally, the division that we use is floor division such that 10 * 9 / 8 equals 11.  This guarantees the result is an integer.

// Implement the clumsy function as defined above: given an integer N, it returns the clumsy factorial of N.

const clumsy = (n) =>{
    if(n < 3) return n
    let total = n
    let firstMultiply = true
    let temp = 0
    let arr = ['*','/','+','-']
    let i = 0

    while(n>1){
        n--
        if(firstMultiply){
            total *= n
            total = Math.floor(total / (n - 1))
            n--
            i += 2
            firstMultiply = false
            continue 
        }else{
            if(arr[i] === '+'){
                total += n
            }else if(arr[i] === '-'){
                temp = n
                if(n === 1) return total - temp
            }else if(arr[i] === '*'){
                temp *= n
                if(n === 1) return total - temp
            }else if(arr[i] === '/'){
                temp = Math.floor(temp / n)
                total -= temp
                temp = 0
            }
        }
        i === 3? i = 0 : i++
    }
    return total
}

console.log(clumsy(4))//7
console.log(clumsy(10))//12
console.log(clumsy(3))//6

// 12 = (10 * 9 / 8) + 7 - (6 * 5 / 4) + 3 - (2 * 1)