/* Codility Challenge Lesson 3: Time Complexity
 * https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 * Find the missing element in a given permutation
 */
function permMissingElem(A) {
  if (A.length === 0) return 1;

  const n = A.length + 1;
  const gaussSum = (n * n + n) / 2;

  const sum = A.reduce((a, b) => a + b);
  const missingElem = gaussSum - sum;
  return missingElem;
}

console.log(permMissingElem([2, 3, 1, 5])); //should return 4
console.log(permMissingElem([2, 3, 1, 6, 4])); //should return 5
console.log(permMissingElem([])); //should return 1
