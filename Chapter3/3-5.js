//jshint esversion:6

class SortStack {
  constructor() {
    this.mainStack = [];
    this.secondaryStack = [];
  }

  popS() {
    return this.mainStack.pop();
  }
  peekS() {
    return this.mainStack[this.mainStack.length - 1];
  }
  printS() {
    for (var i = 0; i < this.mainStack.length; i++) {
      console.log(this.mainStack[i]);
    }
  }

  pushS(data = Number.MAX_VALUE) {

    // if (this.mainStack.length === 0)
    //   this.mainStack.push(data);

    var didIPushData = false;
    while (this.mainStack.length > 0) {
      if ((data < this.peekS()) && !didIPushData) {
        this.secondaryStack.push(data);
        didIPushData = true;
      }
      this.secondaryStack.push(this.mainStack.pop());
    }
    if (!didIPushData)
      this.secondaryStack.push(data);

    while (this.secondaryStack.length > 0) {
      this.mainStack.push(this.secondaryStack.pop());
    }
  }
}

var test = new SortStack();
console.log("Test: Starting to push");

for(var i = 0; i<10;i++){
  test.pushS(Math.floor(Math.random()*10));
}

console.log("Printing ...");
test.printS();

console.log("Popping ...");
for(var i = 0;i<10;i++){
  console.log(test.popS());
}
