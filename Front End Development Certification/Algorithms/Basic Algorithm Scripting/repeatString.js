/*
Repeat a given string (first argument) 
num times (second argument). 
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  var copy = str;
  for (i = 0; i < num - 1; i++) {
    str += copy;
}
  return str;
  
}

repeatStringNumTimes("abc", 3);