//jshint esversion:6
var rotateMatrix = (matrix = [[]]) => {
  transposeMatrix(matrix);
  switchMatrix(matrix);
  return matrix;
};

var transposeMatrix = (matrix = [[]]) => {
  var temp = 0;
  for(i=0,j=0;i<matrix.length;i++,j++){
    k = j;
    while (k<matrix.length){
      temp = matrix[i][k];
      matrix[i][k] = matrix[k][i];
      matrix[k][i] = temp;
      k++;
    }
  }
  return matrix;
};

var switchMatrix = (matrix = [[]]) => {
  var temp = 0;
  for(i=0;i<Math.ceil(matrix.length/2);i++){
    for(j=0;j<matrix.length;j++){
      temp = matrix[i][j];
      matrix[i][j] = matrix[matrix.length-i-1][j];
      matrix[matrix.length-i-1][j] = temp;
    }
  }
  return matrix;
};

var test = [[1,2,3],[4,5,6],[7,8,9]];
console.log(test);
console.log(rotateMatrix(test));
