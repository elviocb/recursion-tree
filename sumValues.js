/*
  Returns the sum of all nodes in the tree
  Ex:    
          2
        /   \
       3     6
      / \   / \
     4   5 7   8

     returns --> 35
*/

var Tree = function(value){
  this.children = [];
  this.value = value || null;
};

Tree.prototype.addChild = function(node) {
  this.children.push(node);
}

// Implement the function to sum the values of the tree
Tree.prototype.sumValues = function(){
  // your code here
}

var tree = new Tree(2);

tree.addChild(new Tree(3));
tree.children[0].addChild(new Tree(4));
tree.children[0].addChild(new Tree(5));
tree.addChild(new Tree(6));
tree.children[1].addChild(new Tree(7));
tree.children[1].addChild(new Tree(8));

// ** Extra credit: Implement the same function without using the prototype
function sumValues(){
  // your code here
}


