class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let curr = this.root;
            while (true) {
                if (value < curr.value) {
                    if (curr.left === null) {
                        curr.left = newNode;
                        return this;
                    } else {
                        curr = curr.left;
                    }
                } else {
                    if (curr.right === null) {
                        curr.right = newNode;
                        return this;
                    } else {
                        curr = curr.right;
                    }
                }
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

console.log(tree.root.left);

