/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant 
(or consonant cluster) of an English word,
 moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  var strPigLatin = "";
  var patt = new RegExp(/^[^aeiou]+/ig);
  var res = patt.test(str);
  if (res) {
      var beginning = str.match(/^[^aeiou]+/ig);
      strPigLating = str.replace(/^[^aeiou]+/ig, "") + beginning + "ay";
      } else { 
      strPigLating = str + "way";
    }
    
  return strPigLating;
}

translatePigLatin("glove");