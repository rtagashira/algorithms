// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

const removeElements = (head, val) =>{
    let h = head
    while(head){
        if(head.next && head.next.val === val){
            let t = head.next
            while(t && t.val === val){
                t = t.next
            }
            head.next = t
            head = head.next
        }else{
            head = head.next
        }
    }
    if(h && h.val === val) h = h.next
    return h
}