//jshint esversion:6

var isUnique = (uniqueString = '') => {
  var hashTable = {};

  for (i = 0; i < uniqueString.length; i++) {
    if (hashTable[uniqueString.charAt(i)])
      return false;
    hashTable[uniqueString.charAt(i)] = 1;
  }
  return true;
};

console.log(isUnique('steve'));
