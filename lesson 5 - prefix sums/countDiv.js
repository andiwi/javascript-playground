const assert = require("assert");
/* Codility Challenge Lesson 5: Count Div
 * https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
 * Compute number of integers divisible by k in range [a..b]
 */
function countDiv(A, B, K) {
  let start;
  if (A % K === 0) {
    start = A;
  } else {
    start = A + (K - (A % K));
  }
  if (start > B) return 0;
  return Math.floor((B - start) / K) + 1;
}

assert(countDiv(6, 11, 2) === 3);
assert(countDiv(2, 9, 3) === 3);
assert(countDiv(0, 0, 11) === 1);
assert(countDiv(1, 1, 11) === 0);
assert(countDiv(10, 10, 5) === 1);
assert(countDiv(10, 10, 7) === 0);
assert(countDiv(10, 10, 20) === 0);
assert(countDiv(5, 10, 10) === 1);
assert(countDiv(1000, 10000, 1) === 9001);
assert(countDiv(10, 20, 2) === 6);
assert(countDiv(7, 11, 10) === 1);
assert(countDiv(101, 123000000, 10000) === 12300);
