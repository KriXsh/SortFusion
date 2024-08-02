class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorder(node, result) {
        if (node !== null) {
            this.inorder(node.left, result);
            result.push(node.data);
            this.inorder(node.right, result);
        }
    }
}

const treeSort = (arr) => {
    const bst = new BST();
    for (let i = 0; i < arr.length; i++) {
        bst.insert(arr[i]);
    }
    const sortedArray = [];
    bst.inorder(bst.root, sortedArray);
    return sortedArray;
};

module.exports = {
    treeSort
};
