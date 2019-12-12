//jshint esversion:6

function Node(value){
  this.value = value;
  this.next = null;
}


var intersection = (head) => {
  var slow = head;
  var fast = new Node(head.value);
  fast.next = head.next;

  while ((fast) && (fast !== slow)) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (!fast || !fast.next)
    return null;

  slow = head;

  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;

};


var nodeA = new Node(1);
var nodeB = new Node(2);
var nodeC = new Node(3);
var nodeD = new Node(4);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeB;

console.log(intersection(nodeA));
