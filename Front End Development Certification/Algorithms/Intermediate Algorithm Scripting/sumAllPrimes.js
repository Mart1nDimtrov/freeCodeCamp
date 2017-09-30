/*
Sum all the prime numbers
up to and including the provided number.
A prime number is defined
as a number greater than one
and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
*/

function isPrime(i) {
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return true;
}
function sumPrimes(num) {
  var sumPrimes = 0;
  for (i = 1; i <= num; i++) {
    if (isPrime(i)) {
      sumPrimes += i;
    }
  }
  return sumPrimes - 1;
}

sumPrimes(10);