class BinaryTree {
  constructor() {
    this.root = null;
  }


  insert(int, currentNode, newNode) {
    newNode = newNode || {
      int: int,
      left: null,
      right: null,
    };
    currentNode = currentNode || this.root;
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    if (currentNode.int === null) {
      currentNode.int = newNode;
      return;
    }


    if (newNode.int < currentNode.int) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insert(int, currentNode.left, newNode);
      }
    }

    if (newNode.int === currentNode.int) {
      throw new Error('This int already exist')
    }

    if (newNode.int > currentNode.int) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insert(int, currentNode.rigth, newNode)
      }
    }
  }

  search(int, currentNode) {
    currentNode = currentNode || this.root;

    if (currentNode === null) {
      return false;
    }
    if (currentNode.int === int) {
      return true;
    }

    if (currentNode.int > int) {
      return this.search(int, currentNode.left);
    }
    if (currentNode.int < int) {
      return this.search(int, currentNode.right);
    }
  }
}

Array.prototype.myFirstSort = function() {
    for (let i = 1, l = this.length; i < l; i++) {
        const current = this[i];
        let j = i;
        while (j > 0 && this[j - 1] > current) {
            this[j] = this[j - 1];
            j--;
        }
        this[j] = current;
    }
    return this;
};

Array.prototype.mySecondSort = function() {
  for (let j = this.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }
  return this;
};
