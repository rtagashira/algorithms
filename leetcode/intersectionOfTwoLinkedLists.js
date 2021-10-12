// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

const getIntersectionNode = (headA, headB) =>{
    let set = new Set()
    
    while(headA){
        set.add(headA)
        if(headA) headA = headA.next
    }
    
    while(headB){
        if(set.has(headB)) return headB
        set.add(headB)
        if(headB) headB = headB.next
    }
    return null
}