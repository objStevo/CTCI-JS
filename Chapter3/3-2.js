//jshint esversion:6

class MinStack {
  constructor() {
    this.data = [];
    this.min = [];
    this.dataAvailable = 0;
    this.minAvailable = 0;
  }

  pushh(value) {
    if (!this.min[0]) {
      this.min[this.minAvailable] = value;
      this.minAvailable++;
    }

    if (value <= this.min[this.minAvailable - 1]) {
      this.min[this.minAvailable] = value;
      this.minAvailable++;
    }

    this.data[this.dataAvailable] = value;
    this.dataAvailable++;
  }

  popp() {
    if (this.minAvailable < 0) {
      console.log('Underflow');
      return null;
    }
    if (this.data[this.dataAvailable - 1] === this.min[this.minAvailable - 1]) {
      this.minAvailable--;
      return this.data[--this.dataAvailable];
    }
    return this.data[--this.dataAvailable];
  }

  minimum() {
    return this.min[this.minAvailable - 1];
  }

  printStack() {
    for (var i = 0; i < this.dataAvailable; i++) {
      console.log(this.data[i]);
    }
  }

}

var test = new MinStack();
test.pushh(5);
test.pushh(6);
test.pushh(5);
test.pushh(9);
test.pushh(4);
test.pushh(8);
test.pushh(3);

test.printStack();
console.log("Minimum: " + test.minimum());

test.popp();
test.popp();


test.printStack();
console.log("Minimum: " + test.minimum());



/*
Notes:
- You can only assign new values to variables on the right side
- The word min is a reserved key word in javascript
- Math.min() returns the minimum of two numbers





*/
