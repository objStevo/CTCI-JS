//jshint esversion:6

class QueueViaStacks {
  constructor() {
    this.mainStack = [];
    this.secondaryStack = [];
  }

  pushQ(value = 0) {
    this.mainStack.push(value);
  }

  popQ() {
    var headValue = Number.MAX_VALUE;

    if (this.mainStack.length === 0) {
      console.log("Error: Underflow");
      return;
    }
    if (this.mainStack.length === 1) {
      return this.mainStack.pop();
    }

    while (this.mainStack.length > 0) {
      this.secondaryStack.push(this.mainStack.pop());
    }

    headValue = this.secondaryStack.pop();

    while(this.secondaryStack.length>0){
      this.mainStack.push(this.secondaryStack.pop());
    }

    return headValue;

  }

  printQ(){
    for(var i =0 ;i<this.mainStack.length;i++){
      console.log(this.mainStack[i]);
    }
  }
}

var test = new QueueViaStacks();
console.log("Start of test: Push values");

for(var i = 0 ; i<5;i++){
  test.pushQ(i);
}

test.printQ();

console.log("Start of test: pop values");
console.log("We will be popping then printing.");

for (var i =0; i<5;i++){
  console.log("Popping: " + test.popQ());
  console.log("Printing Queue ... ");
  test.printQ();
}

console.log("Edge Case Testing");
test.popQ();
