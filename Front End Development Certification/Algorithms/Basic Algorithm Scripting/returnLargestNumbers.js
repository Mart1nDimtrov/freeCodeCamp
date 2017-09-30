/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array 
with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  
  var arrLargest = [];
  
  for (row = 0; row < arr.length; row++) {
    
    var maxEl = arr[row][0];
    
    for (col = 0; col < arr[row].length; col++) {
      if (maxEl < arr[row][col]){
        maxEl = arr[row][col];
      }
    }
    arrLargest.push(maxEl);
}
  
  return arrLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);