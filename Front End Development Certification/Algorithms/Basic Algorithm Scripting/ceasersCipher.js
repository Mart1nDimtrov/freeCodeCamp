/*
One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher,
where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13
encoded string as input and returns a decoded string.
All letters will be uppercase.
Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/

var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase;
var decoded = [];
for (i = 0; i < str.length; i++) {
	if(str[i].match(/[A-Z]/i)) {
       if(str.charCodeAt(i) >= 78) {
        decoded.push((str.charCodeAt(i) - 13));
      } else {
        decoded.push((str.charCodeAt(i) + 13));
      }
      
    } else {
      decoded.push(str.charCodeAt(i));
    }
  }
  
var strDecoded = "";
for (i = 0; i < decoded.length; i++) {
    if(decoded >= 65 && decoded <= 90) {
        strDecoded += alphabet[decoded[i] - 65];
    }
    else {
     strDecoded += String.fromCharCode(decoded[i]);
    }
     
  }
  console.log(strDecoded);
  return strDecoded;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");