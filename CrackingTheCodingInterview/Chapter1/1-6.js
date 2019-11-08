//jshint esversion:6

var stringCompression = (stringToCompress) => {
  var hash = {};
  var compressedString = '';
  for (i = 0; i < stringToCompress.length; i++) {
    if (!hash[stringToCompress[i]]) {
      if (i === 0) {
        hash[stringToCompress[i]] = 1;
      } else {
        hash[stringToCompress[i]] = 1;
        compressedString = compressedString + stringToCompress[i - 1] + hash[stringToCompress[i - 1]];
        hash[stringToCompress[i - 1]] = 0;
      }
    } else
      hash[stringToCompress[i]]++;
  }
  compressedString = compressedString + stringToCompress[stringToCompress.length-1] + hash[stringToCompress[stringToCompress.length-1]];
  return (compressedString.length<stringToCompress.length)? compressedString : stringToCompress;
};

console.log(stringCompression("abcaaaaaa"));
