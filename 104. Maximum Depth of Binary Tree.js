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
