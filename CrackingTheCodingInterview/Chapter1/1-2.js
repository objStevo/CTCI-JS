//jshint esversion:6

var checkPermutation = (selectForCompare = '', compareWithSelected = '') => {
  var hashTable = {};

   if (selectForCompare.length === 0 || compareWithSelected === 0 || selectForCompare.length !== compareWithSelected.length)
    return false;

  for (let i = 0; i < selectForCompare.length; i++) {
    hashTable[selectForCompare.charAt(i)] = (hashTable[selectForCompare.charAt(i)]) ? (hashTable[selectForCompare.charAt(i)]) + 1 : 1;
  }

  for (let i = 0; i<compareWithSelected.length; i++) {
    switch (hashTable[compareWithSelected.charAt(i)] && hashTable[compareWithSelected.charAt(i)] > 0) {
      case true:
        hashTable[compareWithSelected.charAt(i)]--;
        if (hashTable[compareWithSelected.charAt(i)] === 0)
          delete hashTable[compareWithSelected.charAt(i)];
        break;
      case false:
        return false;
        break;
      default:
        return false;
    }
  }

  return (Object.keys(hashTable).length) ? false : true;
};

console.log(checkPermutation('qfhdqw', 'wdhqfq'));
