/*
Compare two arrays and 
return a new array with 
any items only found in 
one of the two given arrays,
but not both.
In other words,
return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var firstArr = arr1.filter(function (element) {
    return !arr2.includes(element);
  });
  var secondArr = arr2.filter(function (element) {
    return !arr1.includes(element);
  });
  
  var joinedArr = firstArr.concat(secondArr);
  console.log(joinedArr);
  return joinedArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);