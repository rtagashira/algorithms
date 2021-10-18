// Given the head of a singly linked list, return true if it is a palindrome.

// const isPalindrome = (head) =>{
//     let str1 = ''
//     let str2 = ''
//     while(head){
//         str1 += head.val + ''
//         str2 = head.val + str2
//         head = head.next
//     }
//     return str1 === str2
// }

const isPalindrome = (head) =>{
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    return arr.join() === arr.reverse().join()
}