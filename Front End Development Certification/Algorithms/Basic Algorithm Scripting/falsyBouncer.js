/*
Remove all falsy values from an array.
Falsy values in JavaScript 
are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  
  arr = arr.filter(function(element) {
    return element != false && element != "" && element != undefined && element != null && element != 0 && (!isNaN(element) || typeof(element) == "string");
    
  });
  return arr;
}

bouncer([7, "ate", "", false, 9]);