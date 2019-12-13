//jshint esversion:6

class TripleStack {
  constructor(size = 0) {
    this.data = [];
    this.start = [0, size, size * 2];
    this.size = [size, size * 2, size * 3];
    this.current = [0, size, size * 2];
  }

  pop(stack = 0) {
    if (stack < -1 || stack > 3) {
      console.log('error: Expecting value between 0-2');
      return null;
    }
    if (this.current[stack] === this.start[stack]) {
      console.log('error: Stack underflow');
      return null;
    }
    return this.data[--this.current[stack]];
  }

  push(value = 0, stack = 0) {
    if (stack < -1 || stack > 3)
      console.log('error: Expecting value between 0-2');

    if ((this.current[stack] + 1) > this.size[stack])
      console.log('Error: Stack overflow');

    this.data[this.current[stack]] = value; //Lets double check incrementing on the right side of assignment works
    this.current[stack]++;
  }

  printStack(stack = 0) {
    if (stack < -1 || stack > 3)
      console.log('error: Expecting value between 0-2');
    for (var i = this.start[stack]; i < this.current[stack]; i++) {
      console.log(this.data[i]);
    }

  }

  peak(stack = 0) {
    if (stack < -1 || stack > 3)
      console.log('error: Expecting value between 0-2');
    return this.data[this.current[stack]-1];
  }

}

var test = new TripleStack(5);
test.push(3, 0);
test.push(9, 1);
test.push(4, 2);
test.push(35, 0);
test.push(6, 2);
test.push(234, 2);
test.push(4234, 1);
test.push(352, 0);
test.push(75, 0);
test.push(21, 1);
test.push(4, 2);
test.push(35, 0);

console.log('Stack 0');
test.printStack(0);

console.log('Stack 1');
test.printStack(1);

console.log('Stack 2');
test.printStack(2);

console.log('Some popping');
console.log('Pop from array 0 ' + test.pop(0));

console.log('Some popping');
console.log('Pop from array 0 ' + test.pop(0));

console.log('Some popping');
console.log('Pop from array 1 ' + test.pop(1));

console.log('Some popping');
console.log('Pop from array 2 ' + test.pop(2));


console.log('Stack 0');
test.printStack(0);

console.log('Stack 1');
test.printStack(1);

console.log('Stack 2');
test.printStack(2);

console.log('Peak 0');
console.log(test.peak(0));

console.log('Peak 1');
console.log(test.peak(1));

console.log('Peak 2');
console.log(test.peak(2));
