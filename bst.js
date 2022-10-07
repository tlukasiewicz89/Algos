class BST {
    constructor() {
        this.root = null;
        this.insert = this.insert.bind(this);
        this.find = this.find.bind(this);
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } 
        let curr = this.root;
        while (true) {
            if (value === curr.value) return undefined;
            if (value < curr.value) {
                if (curr.left === null) {
                    curr.left = newNode;
                    return this;
                } 
                curr = curr.left;
            } else {
                if (curr.right === null) {
                    curr.right = newNode;
                    return this;
                } 
                curr = curr.right;
            }
        }
    }
    find(value) {
        if (this.root === null) return undefined;
        let curr = this.root;
        while(true) {
            if (curr.value === value) {
                return curr;
            } 
            if (value < curr.value) {
                if (curr.left) {
                    curr = curr.left;
                } else return undefined;
            } else {
                if (curr.right) {
                    curr = curr.right;
                } else return undefined;
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null
    }
}

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(9);
tree.insert(7);
console.log(tree.find(9))
console.log(tree.insert(10));

console.log(tree.root.left);

function findClosestValueInBst(tree, target, obj = {nodeVale: Inifinity, distance: Infinity) {
  console.log(obj);
}

console.log(findClosestValueInBst(tree, 4))