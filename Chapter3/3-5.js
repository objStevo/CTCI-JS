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
    for (var i = 0; i < mainStack.length; i++) {
      console.log(this.mainStack[i]);
    }
  }

  pushS(data = Number.MAX_VALUE) {

    var didIPushData = false;
    while (this.mainStack.length > 0) {
      if ((data < this.mainStack.peekS()) && !didIPushData) {
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
