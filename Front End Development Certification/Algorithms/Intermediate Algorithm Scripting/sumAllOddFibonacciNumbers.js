/*
Given a positive integer num,
return the sum of all odd Fibonacci
numbers that are less than or equal to num.
The first two numbers in the Fibonacci
sequence are 1 and 1. 
Every additional number in the sequence
is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10
because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  var fib = getFib(num);
  return fib;
}

var getFib = function (num) {
  var a = 1;
  var b = 1;
  var sum = 0;
  sum += 1;
while (b <= num) {
   if (b % 2 == 1) {
   sum += b;
  }
  var temp = a;
  a = b;
  b = temp + a; 
  console.log(b);
}
  return sum;
};

sumFibs(75025);