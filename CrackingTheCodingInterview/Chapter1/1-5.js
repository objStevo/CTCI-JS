//jshint esversion:6

var oneAway = (word1='', word2='') => {

  var numberOfEdits = 0;

  if(word1.length === word2.length){
    for(i=0;i<word1.length;i++){
      if(numberOfEdits>1){
        return false;
      }
      numberOfEdits = (word1[i]===word2[i])? numberOfEdits : numberOfEdits+1;
    }
  }else if(Math.abs(word1.length-word2.length)===1){
      let max = Math.max(word1.length,word2.length);
      for(i=0,j=0;(i<max)&&(j<max);i++,j++){
        if(numberOfEdits>1){
          return false;
        }
        if (word1[i]!==word2[j]){
          numberOfEdits++;
          if(word1.length<word2.length){
            i--;
          }else{
            j--;
          }
        }

      }
  }else{
    return false;
  }

  return true;

};

console.log("pale and ple: " + oneAway("pale","ple"));
console.log("pales and pale: " + oneAway("pales","pale"));
console.log("pale and bale: " + oneAway("pale","bale"));
console.log("pale and bake: " + oneAway("pale","bake"));
