/*
Write a function that takes two or more
arrays and returns a new array of unique
values in the order of the original provided arrays.
In other words, all values present from
all arrays should be included in their original order,
but with no duplicates in the final array.
The unique numbers should be sorted
by their original order,
but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  var newArr = [];
  for (height = 0; height < arguments.length; height++) {
    for (width = 0; width < arguments[height].length; width++) {
      
    if(!(newArr.includes(arguments[height][width]))) {
      if (arguments[height][width].isArray) {
          newArr.push(arguments[height][width][0]);
      } else {
         newArr.push(arguments[height][width]);
      }
     }
    }
  }
  return newArr;
}
   
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);