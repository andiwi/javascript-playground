/* Codility Challenge Lesson 6: maxProductOfThree
 * https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
 * Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
 */
function maxProductOfThree(A) {
  A.sort((a, b) => a - b);
  const candidateA = A[A.length - 3] * A[A.length - 2] * A[A.length - 1]; //if all elements are positive
  const candidateB = A[0] * A[1] * A[A.length - 1]; //if the first two elements are negative

  if (candidateA > candidateB) {
    return candidateA;
  } else {
    return candidateB;
  }
}

console.log(maxProductOfThree([-3, 1, 2, -2, 5, 6])); //should return 60
console.log(maxProductOfThree([-5, 5, -5, 4])); //should return 125
console.log(maxProductOfThree([-5, -6, -4, -7, -10])); //should return -120
