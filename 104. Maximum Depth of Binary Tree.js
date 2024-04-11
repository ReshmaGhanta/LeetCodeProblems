var maxDepth = function(root) {
    if(root==null){
        return 0;
    }
    let lDepth = maxDepth(root.left);
    let rDepth = maxDepth(root.right);
    if (lDepth > rDepth){
        return (lDepth + 1);
    }else{
        return (rDepth + 1);
        }
    
};

/* Note: The height of an empty tree is 0 and the height of a tree with single node is 1. */
