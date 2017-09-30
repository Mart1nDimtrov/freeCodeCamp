/*
Convert the characters &, <, >, " (double quote),
and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  str = str.replace(/&/ig, "&amp;");
  str = str.replace(/</ig, "&lt;");
  str = str.replace(/>/ig, "&gt;");
  str = str.replace(/'/ig, "&apos;");
  str = str.replace(/"/ig, "&quot;");
  
  return str;
}

convertHTML('Stuff in "quotation marks"');