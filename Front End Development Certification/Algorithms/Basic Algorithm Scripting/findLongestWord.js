/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWord(str) {
  
  str = str.split(" ");
  var maxLen = str[0].length;
  for (i = 0; i < str.length; i++){
    if(str[i].length > maxLen){
      maxLen = str[i].length;
    }
  }
  return maxLen;
}

findLongestWord("The quick brown fox jumped over the lazy dog");