//jshint esversion:6

var urlify = (urlifyMe = '', trueLength = 0) => {
  urlifyMe = urlifyMe.split('');
  let temp = '';
  for(i=trueLength-1, j=urlifyMe.length-1;i>=0;i--){
    if(urlifyMe[i]===' '){
      urlifyMe[j]='0';
      urlifyMe[j-1]='2';
      urlifyMe[j-2]='%';
      j-=3;
    }else{
      urlifyMe[j] = urlifyMe[i];
      j-=1;
    }
  }
  return urlifyMe.join("");
};

console.log(urlify('I am Steve    ',10));


//Notes
/*
- Strings in javascript are immutable, so I have to create a new string or replace with char array.
- Array.prototype.join() creates and returns a new string by concatenating all of the elements
- in an array, separated by commas or a specified separator string.
- In other words, it will join all the values by a comma or whatever parameter you enter.
- Learn join and split in javascript.
- Array.prototype.split will split a string into an array of substrings, if parameter is ""
- the string is split between each character.
- In other words just imagine the comma goes to where the parameter indicated is. That is where it is split.


*/
