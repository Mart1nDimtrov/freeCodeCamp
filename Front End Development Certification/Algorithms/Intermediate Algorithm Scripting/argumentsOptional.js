/*
Create a function that sums two arguments together.
If only one argument is provided,
then return a function that expects one argument and returns the sum.
For example,
addTogether(2, 3) should return 5,
and addTogether(2) should return a function.
Calling this returned function
with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/

function addTogether(first, second) {
  if ((!isNaN(first) && !isNaN(first)) && (typeof first != "string" &&  typeof second != "string")) {
    if (arguments.length == 2) {
      return first + second;
    }
     return function (second){ 
       if ((!Array.isArray(first) && !Array.isArray(second))) {
      return first + second;   
      } else {
        return undefined;
      }
   };
} else {
  return undefined;
}
  
}

addTogether(2, 3);
