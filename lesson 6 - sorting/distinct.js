/* Codility Challenge Lesson 6: distinct
 * https://app.codility.com/programmers/lessons/6-sorting/distinct/
 * Compute number of distinct values in an array.
 */
function distinct(A) {
  A.sort();

  if (A.length === 1) return 1;

  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== A[i - 1]) {
      counter++;
    }
  }

  return counter;
}

console.log(distinct([])); //should return 0
console.log(distinct([1])); //should return 1
console.log(distinct([2, 1, 1, 2, 3, 1])); // should return 3
console.log(distinct([4, 3, 3, 2, 1])); // should return 4
