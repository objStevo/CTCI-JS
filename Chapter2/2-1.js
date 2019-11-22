//jshint esversion:6

function Node(value = 0) {
  this.value = value;
  this.next = null;
}

var nodeA = new Node(1);
var nodeB = new Node(3);
var nodeC = new Node(5);
var nodeD = new Node(2);
var nodeE = new Node(3);
var nodeF = new Node(9);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeF;


var removeDupsHash = (head) => {
  var hashTable = {};

  while (head.next) {
    hashTable[head.value.toString()] = true;
    if (hashTable[head.next.value.toString()])
      head.next = head.next.next;

    head = head.next;
  }
};

var printLinkedList = (head) => {
  while(head){
    console.log(head.value);
    head=head.next;
  }
};

console.log('Here is the current linked list: ');
printLinkedList(nodeA);
removeDupsHash(nodeA);
console.log('After removeDups');
printLinkedList(nodeA);
