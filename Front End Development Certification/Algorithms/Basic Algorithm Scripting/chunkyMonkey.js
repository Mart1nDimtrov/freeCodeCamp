/*
Write a function that splits an array 
(first argument) into groups the length 
of size (second argument) and 
returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for (i = 0; i < arr.length; i+=size){
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups([1, 2, 3, 4], 2);