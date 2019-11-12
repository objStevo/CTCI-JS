//jshint esversion:6

var palindromePermutation = (amIPalindrome = '') => {
  var count = 0;
  var hashTable = {};
  var iSawAnOdd = false;

  if (amIPalindrome.length === 0) {
    return false;
  }
  //Here I place each charater and its count in my hash table
  for (let i = 0; i < amIPalindrome.length; i++) {
    // hashTable[amIPalindrome.charAt(i)] = (hashTable[amIPalindrome.charAt(i)]) ? 2 : 1;

    if (hashTable[amIPalindrome.charAt(i)]&& amIPalindrome.charAt(i)!==' '){
      hashTable[amIPalindrome.charAt(i)]++;
      count++;
    }
    else if(amIPalindrome.charAt(i)!==' '){
      hashTable[amIPalindrome.charAt(i)] = 1;
      count++;
    }
  }

  var imEven = (count % 2 === 0) ? true : false;
  //Here I validate whether it is a palindrome
  console.log("Am I even: " + imEven);
  console.log(hashTable);
  for (let i = 0; i < Object.keys(hashTable).length; i++) {
    if (imEven) {
      if(Object.values(hashTable)[i]%2!==0){
        return false;
      }
    } else {
      if (Object.values(hashTable)[i]%2!==0 && iSawAnOdd===true){
        return false;
      }
    }
    if(Object.values(hashTable)[i]%2!==0 ){
      iSawAnOdd=true;
    }
  }

  return true;

};

console.log(palindromePermutation('seves'));
