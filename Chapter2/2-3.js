//jshint esversion:6

function Node(value){
  this.value = value;
  this.next = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


var printList = (head) => {
  while(head){
    console.log(head.value);
    head = head.next;
  }
};

var deleteMiddle = (node) => {
  if(!node.next){
    var lastTemp = node.value;
    node.value = null;
    return lastTemp;
  }

  var temp = node.value;
  node.value = deleteMiddle(node.next);
  return temp;

};

var deleteMiddleNode = (node) => {
  deleteMiddle(node);
  console.log('done');
};


console.log('Linked list before deleteMiddleNode: ');
printList(a);
deleteMiddleNode(c);
console.log('After algorithm');
printList(a);



/*
- What I learned, but I not declaring temp as a var, without doing so, the value
bubbles up the layers of scope. Essentially making it a global variable that you
can delete.

- An object exists when at least one reference to it exists.

*/
