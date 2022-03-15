class BinarySearchTree {
  constructor() {
    this.root = null;
    this.visited = [];
    this.searchVisited = [];
  }

  delete(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        //if node has no children
        node = null;
        return node;
      }
      if (node.left === null) {
        //node has no left child
        node = node.right;
        return node;
      } else if (node.right === null) {
        // node has no right child
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  print(node) {
    if (node !== null) {
      this.print(node.left);
      console.log(node.data);
      this.print(node.right);
    }
  }

  search(node, data) {
    var check = "";
    if (node === null) 
    {
     this.searchVisited = [];
     window.alert("Value not found in the Tree!");
     return (check = "Not Found"); 
    }
    else if (data < node.data) {
      this.searchVisited.push(node.data);
      return this.search(node.left, data);
    } else if (data > node.data) {
      this.searchVisited.push(node.data);
      return this.search(node.right, data);
    } else {
      //console.log("Found ");
      this.searchVisited.push(node.data);
      return node;
    }
  }

  deleteTree() {
    BST = null;
  }

  addNode(data) {
    let p;
    let cur = this.root;

    if (this.root == null) {
      this.root = new Node(data, width / 3, 50, 7);
    } else {
      this.visited = [];
      while (cur != null) {
        p = cur;

        if (data < cur.data) {
          cur = cur.left;
        } else {
          cur = cur.right;
        }
        //p.col = color(0, 0, 255)
        this.visited.push(p.data);
      }

      if (this.root.data == data) {
        window.alert("Value is already in the Tree!");
      } else {
        if (data < p.data) {
          p.left = new Node(
            data,
            p.x - width / p.depth,
            p.y + 50,
            p.depth * 2,
            color(255)
          );
        } else if (data > p.data) {
          p.right = new Node(
            data,
            p.x + width / p.depth,
            p.y + 50,
            p.depth * 2,
            color(255)
          );
        } else {
          window.alert("It is already in the Tree!");
        }
      }
    }
  }

  paint() {
    background(250);
    this.procX(this.root);
  }

  procX(p) {
    if (p != null) {
      if (p.left != null) {
        line(p.x, p.y, p.left.x, p.left.y);
        this.procX(p.left);
      }

      if (p.right != null) {
        line(p.x, p.y, p.right.x, p.right.y);
        this.procX(p.right);
      }

      if (p.data == int(addInput.value)) {
        p.col = color(0, 255, 0);
      } else {
        p.col = color(255);
      }

      if (!searchClick) {
        for (let i = 0; i < this.visited.length; i++) {
          if (p.data == this.visited[i]) {
            p.col = color(0, 0, 255);
          } else {
            //p.col = color(255)
          }
        }
      } else {
        for (let i = 0; i < this.searchVisited.length; i++) {
          if (p.data == this.searchVisited[i]) {
            p.col = color(255, 0, 0);
          } else {
            //
          }
        }
      }

      fill(p.col);
      ellipse(p.x, p.y, p.size, p.size);
      textAlign(CENTER);
      stroke(0);
      textSize((p.size * 2) / 5);
      fill(color(0));
      text(p.data, p.x, p.y + p.size / 7);
    }
  }
}
