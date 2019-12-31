//jshint esversion:6

class AnimalShelter {
  constructor() {
    this.qDog = [];
    this.qCat = [];
  }

  enq(animal = "", time = Number.MAX_VALUE) {
    var node = {
      type: animal,
      age: time
    };

    if (animal === "dog")
      this.qDog.push(node);
    if(animal === "cat")
      this.qCat.push(node);
  }

  deqAny(){
    if(this.qDog.length<1&&this.qCat.length>0){
      return this.qCat.shift();
    }
    if(this.qCat.length<1 && this.qDog.length>0){
      return this.qDog.shift();
    }
    if(this.qCat.length<1 && this.qDog.length<1){
      console.log("Error: Underflow");
      return;
    }

    if(this.qDog[0].age >= this.qCat[0].age){
      return this.qDog.shift();
    }else{
      return this.qCat.shift();
    }
  }

  deqDog(){
    if(this.qDog.length<1){
      console.log("Error: underflow");
      return;
    }
    return this.qDog.shift();
  }
  deqCat(){
    if(this.qCat.length<1){
      console.log("Error: underflow");
      return;
    }
    return this.qCat.shift();
  }

  printAll(){
    console.log("Dogs: ");
    console.log(this.qDog);
    console.log("Cats: ");
    console.log(this.qCat);
  }

}


var test = new AnimalShelter();

console.log("Testing: enqueue, then pringting ...");

test.enq("dog",10);
test.enq("dog",7);
test.enq("dog",5);
test.enq("dog",3);
test.enq("cat",11);
test.enq("cat",9);
test.enq("cat",3);

test.printAll();
console.log("DequeueAny ...");

for(var i = 0; i<7 ;i++){
  console.log(test.deqAny());
}
