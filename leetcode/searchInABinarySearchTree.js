// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

const searchBST = (root, val) =>{
    while(root !== null && root.val !== val){
        if(root.left && val < root.val){
            root = root.left
        }else if(root.right && val > root.val){
            root = root.right
        }else{
            root = null
        }
    }
    return root
}