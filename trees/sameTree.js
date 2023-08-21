// 100. Same Tree
// Easy
// 10.2K
// 197
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let isSameTree = (p, q) => {
    if (!p && !q) {
        return true; // Both trees are empty, considered the same
    }

    if (!p || !q || p.val !== q.val) {
        return false; // If one of the nodes is null or values don't match, not the same
    }

    // Recursively check the left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Example usage
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(isSameTree);
