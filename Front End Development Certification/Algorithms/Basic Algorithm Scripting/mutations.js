/*
Return true if the string in the first 
element of the array contains all of 
the letters of the string in the second element of the array.
For example, ["hello", "Hello"], 
should return true because all of the 
letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] 
should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"],
should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var lettersfirstWord = Array(26).fill(0);
  var lettersSecondWord = Array(26).fill(0);
  
  for (i = 0; i < firstWord.length; i++) {
    lettersfirstWord[letters.indexOf(firstWord[i])]=1;
  }
  
  for (i = 0; i < secondWord.length; i++) {
    lettersSecondWord[letters.indexOf(secondWord[i])]=1;
  }
  
   for (i = 0; i < lettersfirstWord.length; i++) {
     
    if(lettersfirstWord[i] == 0 && lettersSecondWord[i] == 1) {
      return false;
      }
     
  }

  return true;
}

 mutation(["hello", "hey"]);