//jshint esversion:6

function Node(value = 0) {
  this.value = value;
  this.next = null;
}

var isIntersection = (listA = {}, listB = {}) => {
  var intersectingNode = {};

  var intersection = (headA = {}, headB = {}) => {


    var lastNode = {};


    if ((!headA.next) && (!headB.next)) {
      return {
        'headA': headA,
        'headB': headB
      };
    }
    if (!headA.next && headB.next) {
      lastNode = intersection(headA, headB.next);
    }

    if (headA.next && !headB.next) {
      lastNode = intersection(headA.next, headB);
    } else if (headA.next && headB.next){
      lastNode = intersection(headA.next, headB.next);
    }

    if (headA !== headB && (lastNode.headA === lastNode.headB))
      intersectingNode = lastNode.headA;

    return {
      'headA': headA,
      'headB': headB
    };

  };

  intersection(listA, listB);
  return intersectingNode;

};



var nodeA = new Node(1);
var nodeB = new Node(2);
var nodeC = new Node(3);

nodeA.next = nodeB;
nodeB.next = nodeC;

var nodeD = new Node(9);
var nodeE = new Node(12);
var nodeF = new Node(94);
var nodeG = new Node(8);

nodeD.next = nodeE;
nodeE.next = nodeF;
nodeF.next = nodeG;
nodeG.next = nodeB;

console.log(isIntersection(nodeA, nodeD));
