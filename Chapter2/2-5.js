//jshint esversion:6

var printList = (head) => {
  while (head) {
    console.log(head.value);
    head = head.next;
  }
};

function Node(value = 0) {
  this.value = value;
  this.next = null;
}

var listReader = (head = null) => {
  if (!head)
    return null;
  if (!head.next)
    return head.value.toString();

  return listReader(head.next) + head.value.toString();
};

var listFactory = (sumString = '', i = 0, head = null) => {
  if (i === sumString.length)
    return null;
  head = new Node(parseInt(sumString.charAt(i), 10));
  head.next = listFactory(sumString, ++i);
  return head;
};

var sumList = (listA, listB) => {
  return listFactory((parseInt(listReader(listA), 10) + parseInt(listReader(listB), 10)).toString());
};

console.log('Testing listFactory: ');
var test = '123';
printList(listFactory(test));

var a = new Node(7);
var b = new Node(1);
var c = new Node(6);

a.next = b;
b.next = c;

var d = new Node(5);
var e = new Node(9);
var f = new Node(2);

d.next = e;
e.next = f;

console.log('Testing listReader: ');

console.log(listReader(a));
console.log(listReader(d));

console.log('Testing sumList: ');
printList(sumList(a,d));
