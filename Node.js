class Node {
  constructor(data, x, y, depth, col) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.col = col;
    this.depth = depth;
    if (60 - 2 * sqrt(depth) > 30)
        this.size = round(60 - 2 * sqrt(depth));
      else
        this.size = 30;
    
  }  
}
