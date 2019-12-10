//jshint esversion:6
function Node(value = 'S') {
  this.value = value;
  this.next = null;
}

var printList = (head) => {
  while(head){
    console.log(head.value);
    head = head.next;
  }
};

var newHead = new Node (' ');
var reverseListFactory = (head) => {
  if (!head.next) {
    newHead.value = head.value;
    return newHead;
  }

  var newNode = reverseListFactory(head.next);
  newNode.next = new Node(head.value);
  return newNode.next;

};


var palindrome = (head) => {
  // var reverseHead = reverseList(head);
  reverseListFactory(head);
  var reverseHead = newHead;
  while (head) {
    if (head.value !== reverseHead.value)
      return false;
    head = head.next;
    reverseHead = reverseHead.next;
  }
  return true;
};



var nodeA = new Node("S");
var nodeB = new Node("Y");
var nodeC = new Node("A");
var nodeD = new Node("S");

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

// console.log('Before reverse list');
// printList(nodeA);
reverseListFactory(nodeA);
console.log(newHead);

console.log(palindrome(nodeA));
