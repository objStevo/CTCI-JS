//jshint esversion:6

const stackSize = 3;

class MyStack {

  constructor (){
    this.data = [];
    this.current = 0;
  }

  myPop(){
    if(this.current<1){
      console.log('Error: Underflow');
      return null;
    }
    return this.data[--this.current];

  }

  myPush(value){
    if(this.current>= stackSize){
      console.log('Error: Overflow');
      return false;
    }
    console.log('current: ' + this.current);
    this.data[this.current] = value;
    this.current++;
    return true;
  }

  myPeek(value){
    if(this.current>= stackSize){
      console.log('Error: Overflow');
      return false;
    }
    return true;
  }
}

class SetOfStacks {
  constructor(){
    this.stackSet = [];
    this.currentStack = 0;
    this.initStack();
  }

  initStack(){
    this.stackSet[this.currentStack] = new MyStack();
    this.currentStack++;
  }

  superPop(){
    if((this.stackSet[this.currentStack-1].current<1)&&(this.currentStack<1)){
      console.log('Error: SuperStack underflow');
      return null;
    }

    if((this.stackSet[this.currentStack-1].current<1)&&(this.currentStack>0)){
      this.stackSet[this.currentStack-1] = null;
      this.currentStack--;
      console.log('here');
      return this.stackSet[--this.currentStack].myPop();
    }
    console.log('nit here');
    return this.stackSet[this.currentStack-1].myPop();
  }

  superPush(value){
    console.log(value);
    if(!this.stackSet[this.currentStack-1].myPeek(value)){
      this.initStack();
    }
    if(this.stackSet[this.currentStack-1].current===stackSize){
      this.stackSet[this.currentStack-1].myPush(value);
      this.currentStack++;
      return;
    }
    this.stackSet[this.currentStack-1].myPush(value);
    return;

  }

}


var test = new SetOfStacks();
test.superPush(1);
test.superPush(2);
test.superPush(3);
test.superPush(4);
test.superPush(5);
test.superPush(6);
test.superPush(7);
test.superPush(8);
test.superPush(9);
test.superPush(10);
test.superPush(11);
test.superPush(12);
test.superPush(13);
test.superPush(14);

console.log('Try again');
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
console.log(test.superPop());
