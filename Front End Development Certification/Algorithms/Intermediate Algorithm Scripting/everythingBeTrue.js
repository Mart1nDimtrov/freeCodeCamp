/*
Check if the predicate (second argument)
 is truthy on all elements of a collection (first argument).
Remember, you can access object
properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  
  for (i = 0; i < collection.length; i++) {
    if(!collection[i].hasOwnProperty(pre)) {
      return false;
    }
    if(collection[i][pre] == null || collection[i][pre].length == 0 || 
collection[i][pre] == 0 || (isNaN(collection[i][pre]) && typeof collection[i][pre] != "string")) {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
 {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
