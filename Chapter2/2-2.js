//jshint esversion:6

function Node (value) {
  this.value = value;
  this.next = null;
}

var a = new Node(1);
var b = new Node(3);
var c= new Node(9);
var d= new Node(2);

a.next = b;
b.next = c;
c.next = d;

var print = (head) => {
  while (head){
    console.log(head.value);
    head = head.next;
  }
};

var KthToLastHelper = (head, Kth, i={value: 0, head: null}) => {

  if(head===null)
  return null;
  if(head.next)
    KthToLastHelper(head.next,Kth,i);
  i.value++;
  if(i.value===Kth){
    i.head = head;
  }
  return null;
};

var KthToLast = (head, Kth, i={value: 0, head: null}) => {
  KthToLastHelper(head, Kth, i={value: 0, head: null});
  print(i.head);
  return i.head;
};


KthToLast(a,1);
