/*
The DNA strand is missing the pairing element.
Take each character, get its pair,
and return the results as a 2d array.
Base pairs are a pair of AT and CG.
Match the missing element to the provided character.
Return the provided character
as the first element in each array.
For example, for the input GCG,
return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array,
and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  var arrPairs = [];
  for (i = 0; i < str.length; i++) {
    arrPairs.push(addElement(str[i]));
  }
  return arrPairs;
}

function addElement(char) {
  var charToBe = "";
  if (char == "G") {
    charToBe = "C";
  } 
  if (char == "C") {
    charToBe = "G";
  } 
  if (char == "A") {
    charToBe = "T";
  }
  if (char == "T") {
    charToBe = "A";
  }
  return [char, charToBe];
}

pairElement("GCG");