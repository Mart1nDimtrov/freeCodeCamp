/*
Convert a string to spinal case.
Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  var matches = str.match(/([A-Z]?[a-z]+.*?)/g);
  var newSentence = matches.join("-").toLowerCase();
  return newSentence;
}

spinalCase("AllThe-small Things");