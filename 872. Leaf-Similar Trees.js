/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    const getLeafSequence = function(root, leaf){
        if(root){
            if(root.left === null && root.right===null){
                leaf.push(root.val);
            }
            if(root.left!==null){
                getLeafSequence(root.left,leaf);
            }
            if(root.right !==null){
                getLeafSequence(root.right,leaf);
            }
        }
    }
    
    let leaf1=[];
    let leaf2=[];
    getLeafSequence(root1, leaf1);
    getLeafSequence(root2, leaf2);

     return JSON.stringify(leaf1) === JSON.stringify(leaf2);
};
