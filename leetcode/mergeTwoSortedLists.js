// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
//  }
 

 const mergeTwoLists = (l1, l2) =>{
    if(!l1 && !l2) return null
    if(!l1) return l2
    if(!l2) return l1
    if(l2.val < l1.val){
        let temp = l1
        l1 = l2
        l2 = temp
    }
    let head = l1

    while(l1 || l2){
        if(l1.next && l2){
            if(l1.next.val <= l2.val){
                l1 = l1.next
            }else{
                let temp = l1.next
                l1.next = l2
                l2 = temp
            }
        }else{
            if(l2){
                l1.next = l2
                l2 = null
            }else{
                l1 = l1.next
            }
        }
    }
    return head
}