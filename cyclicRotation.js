/* Codility Challenge Lesson 2: Arrays
 * https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 * Rotate an array to the right by a given number of steps
 */
function cyclicRotation(A, K) {
  if (!Array.isArray(A) || A.length === 0) return A;

  for (let i = 0; i < K; i++) {
    const temp = A.pop();
    A.unshift(temp);
  }

  return A;
}

console.log(cyclicRotation([3, 8, 9, 7, 6], 3)); //should return [9, 7, 6, 3, 8]
console.log(cyclicRotation([1, 2, 3, 4], 4)); //should return [1, 2, 3, 4]
console.log(cyclicRotation([], 1)); //should return []
