function binaryAgent(str) {
  var arrStr = str.split(" ");
  var newStr = arrStr.map(function(el) {
    return String.fromCharCode(parseInt(el, 2));
  });
  return newStr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
