var invertTree = function(root) {
    if(root===null){
        return root;
    }   
    [root.right,root.left]=[invertTree(root.left),invertTree(root.right)];  
    return root;
};


---------------------------------------------------------------------------------------------------------
  var invertTree = function(root) {
    if(root===null){
        return root;
    }   
    const curr = root.left;
    root.left = root.right;
    root.right = curr;

    invertTree(root.left),
    invertTree(root.right);  
    return root;
};
