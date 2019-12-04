//jshint esversion:6

function Node(value) {
  this.value = value;
  this.next = null;
}

var printList = (head) => {
  while(head){
    console.log(head.value);
    head = head.next;
  }
};

var Partition = (head = null, partition = 0) => {
  var tailLessThanOrEqualPartition = new Node(partition);
  var tailGreaterThanOrEqualPartition = new Node(partition);
  var headLessThanOrEqualPartition = tailLessThanOrEqualPartition;
  var headGreaterThanOrEqualPartition = tailGreaterThanOrEqualPartition;

  while(head){
    if(head.value <= partition){
      tailLessThanOrEqualPartition.next = new Node(head.value);
      tailLessThanOrEqualPartition = tailLessThanOrEqualPartition.next;
    }else{
      tailGreaterThanOrEqualPartition.next = new Node(head.value);
      tailGreaterThanOrEqualPartition = tailGreaterThanOrEqualPartition.next;
    }
    head = head.next;
  }
  tailLessThanOrEqualPartition.next=headGreaterThanOrEqualPartition.next;
  return headLessThanOrEqualPartition.next;
};


var a = new Node(9);
var b = new Node(5);
var c = new Node(8);
var d = new Node(5);
var e = new Node(10);
var f = new Node(2);
var g = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log('Here is the list: ');
printList(a);
printList(Partition(a,5));
