//jshint esversion:6

class Node {
  constructor (data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(data){
    
  }

}

var minimalTree = (sortedInt = []) => {
  var myTree = new BinarySearchTree();

  var minimalSearchTree = (sortedArray = []) => {

    var center;

    if(sortedArray.length === 0){
      return;
    }else if(sortedArray.length === 1){
      center = 0;
    }else{
      center = Math.floor(sorted.length/2);
    }

    myTree.insert(sortedArray[center]);

    myTree.insert(minimalSearchTree(sortedArray.slice(0,center)));//left
    myTree.insert(minimalSearchTree(sortedArray.slice(rootPos+1,sortedArray.length)));

  };

  return myTree;
};
