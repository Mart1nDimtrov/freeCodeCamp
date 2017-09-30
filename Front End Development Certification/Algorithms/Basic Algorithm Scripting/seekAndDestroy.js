/*
You will be provided with an 
initial array (the first argument in the destroyer function),
followed by one or more arguments. 
Remove all elements from the 
initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  var targets = Array.from(arguments);
  targets = targets.slice(1);
  arr = arr.filter(function(el) {
    return !targets.includes(el);
  });
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);