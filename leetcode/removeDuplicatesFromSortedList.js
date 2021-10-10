// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

const deleteDuplicates = (head) =>{
    let h = head
    while(head){
        if(head.next && head.val === head.next.val){
            while(head.next && head.val === head.next.val){
                head.next = head.next.next
            }
            head = head.next
        }else{
            head = head.next
        }
    }
    return h
}