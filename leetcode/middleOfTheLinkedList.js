// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

const middleNode = (head) =>{
    let arr = []
    while(head){
        arr.push(head)
        head = head.next
    }
    return arr.length % 2 !== 0? arr[Math.ceil(arr.length/2) - 1] : arr[Math.ceil(arr.length/2)]
}