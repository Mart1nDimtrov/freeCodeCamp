/*
Return the provided string with
the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise,
you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  str = str.split(" ");
  var newStr = "";
  for (i = 0; i < str.length; i++){
    if(i == str.length - 1){
      newStr += str[i][0].toUpperCase() + str[i].substr(1).toLowerCase();
    } else {
         newStr += str[i][0].toUpperCase() + str[i].substr(1).toLowerCase() + " ";
    }
 
  }
  return newStr;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");