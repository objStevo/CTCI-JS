//jshint esversion:6

var zeroMatrix = (inputMatrix = [[]]) => {
  //First we create a hash table for the zero'd out rows and columns.
  var row = {};
  var col = {};

  //Second we iterate through the input Matrix and hash any rows and columns where a zero is present.

  for (i=0;i<inputMatrix.length;i++){
    for (j=0; j<inputMatrix[i].length;j++){
      if (inputMatrix[i][j]===0){
        row[i.toString()]= true;
        col[j.toString()] = true;
      }
    }
  }

  //Then we recreate a new matrix, if X_i,j is not hashed then we can place the x value.

  var outputMatrix = [];

  for (i=0;i<inputMatrix.length;i++){
    outputMatrix[i] = [];
    for (j=0; j<inputMatrix[i].length;j++){
      if (!row[i.toString()] &&!col[j.toString()]){
        console.log(outputMatrix[i]);
        outputMatrix[i].push(inputMatrix[i][j]);
        console.log("I am about to push: " + inputMatrix[i][j]);
        console.log("Output Matrix " + outputMatrix[i]);
      }else{
        outputMatrix[i].push(0);
        console.log("I am about to push: 0");
      }
    }
  }
  console.log(outputMatrix[0][0]);
  return outputMatrix;

};

console.log(zeroMatrix([[1,4,2,3],[9,0,1,2],[3,1,1,0],[4,4,9,1]]));
