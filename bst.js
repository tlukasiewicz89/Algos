class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currNode = this.root;
        while (true) {
            if (currNode.value === value) return;
            if (value < currNode.value) {
                if (currNode.left) {
                    currNode = currNode.left;
                } else {
                    currNode.left = newNode;
                    return;
                }
            } else {
                if (currNode.right) {
                    currNode = currNode.right;
                } else {
                    currNode.right = newNode;
                }
            }
        }
    }

    find (value) {
        let currNode = this.root;
        if (!currNode) return undefined;
        if (currNode.value === value) return currNode;
        while (true) {
            if (currNode.value === value) return currNode;
            if (value < currNode.value) {
                if (currNode.left) {
                    currNode = currNode.left
                } else return undefined;
            } else {
                if (currNode.right) {
                    currNode = currNode.right;
                } else return undefined;
            }
        }
    }
    bfs () {
        // Breadth first search
        // first in first out queue
        const queue = [],
          results = [];
        queue.push(this.root); 
        while (queue.length) {
            const popped = queue.shift();
            results.push(popped.value);
            if (popped.left) queue.push(popped.left)
            if (popped.right) queue.push(popped.right)

        }
        return results;
    }
    dfsPreOrder () {
        const result = [];
        function traverse (node) {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right); 
        }
        traverse(this.root);
        return result;
    }
    dfsPostOrder () {
        const result = [];
        function traverse (node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
    dfsInOrder () {
        const result = [];
        function traverse (node) {
            // dammmm check out this syntax
            node.left && traverse(node.left);
            result.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BST();
console.log(tree)
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree)
console.log(tree.find(6))
console.log(tree.find(10))
console.log(tree.bfs())
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInOrder())

//breath first search ... working across the children horizontally
// look at the root then the siblings horizontally
//       10
//    6     15
// 3    8      20
// BFS returns [10, 6, 15, 3, 8, 20]


// Depth first search - visit nodes vertically
// traverse down until we hit the end of the tree

// in order
// returns [3, 6, 8, 10, 15, 20]

// pre order
// return [10, 6, 3, 8, 15, 20]
// visit the node then left then right

// post order - explore everything first then visit the node
// the root is last
// returns [3, 8, 6, 20, 15, 10]

// when do you use each?
// BFS vs DFS - have same time complexity
    // a fully fleshed out tree like 100 height
    // BFS space complexity will be much worse on a huge tree
    // DFS would use less space

    // a super long one sided tree
    // BFS space complexity would be 1
    // DFS would take more space 

// DFS pre, post, in ...
    // inOrder - goes from lowest to highest
    // preOrder - can be used to export a tree so it can be copied or reconsrtucted
    
// RECAP
// trees an non-linear data structures the contain root and child nodes
// Binary trees have values of any type, but at most two childrend per parent
// Binary search trees are more specific where each node to the left is less 
//      and each node to the right is greater    


function findClosestValueInBst(tree, target) {
    let closestValue = null;
    let distance = Infinity;
    let current = tree.root;
    while (current) {
      if (Math.abs(target - current.value) < distance) {
        distance = Math.abs(target - current.value);
        closestValue = current.value;
      }
      if (distance === 0) break;
      if (target < current.value) {
          current = current.left
      } else {
          current = current.right;
      }
    }
    return closestValue;
}

console.log(findClosestValueInBst(tree, 13))






