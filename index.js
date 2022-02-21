'use strick'

class BinaryTree {
  constructor() {
    this.value = null;
    this.right = null;
    this.left = null;
  }
  insert(value, currentNode) {
    currentNode = currentNode || this;
    if (!currentNode.value) {
      currentNode.value = value;
      return true;
    }

    if (value > currentNode.value) {
      if (!currentNode.right) {
        currentNode.right = new BinaryTree();
      }
      return this.insert(value, currentNode.right);
    } else {
      if (!currentNode.left) {
        currentNode.left = new BinaryTree();
      }
      return this.insert(value, currentNode.left);
    }
  }

  search(value, currentNode) {
    currentNode = currentNode || this;
    if (value > currentNode.value) {
      if (!currentNode.right) {
        return null;
      }
      return this.search(value, currentNode.right);
    } else if (value < currentNode.value) {
      if (!currentNode.left) {
        return null;
      }
      return this.search(value, currentNode.left);
    } else {
      return currentNode.value;
    }
  }
  getMin(currentNode) {
    currentNode = currentNode || this;
    if (!currentNode.left) {
      return currentNode;
    }
    return this.getMin(currentNode.left);
  }
  delete(value, currentNode) {
    currentNode = currentNode || this;
    if (value > currentNode.value) {
      if (!currentNode.right) {
        return false;
      }
      currentNode.right = this.delete(value, currentNode.right);
      return currentNode;
    } else if (value < currentNode.value) {
      if (!currentNode.left) {
        return false;
      }
      currentNode.left = this.delete(value, currentNode.left);
      return currentNode;
    } else {
      if (!currentNode.left && !currentNode.right) {
        currentNode = null;
        return currentNode;
      } else if (!currentNode.right) {
        currentNode = currentNode.left;
        return currentNode;
      } else if (!currentNode.left) {
        currentNode = currentNode.right;
        return currentNode;
      } else {
        let min = this.getMin(currentNode.right);
        currentNode.value = min.value;
        currentNode.right = this.delete(min.value, currentNode.right);
        return currentNode;
      }
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
