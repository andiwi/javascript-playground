/* Codility Challenge Lesson 6: triangle
 * https://app.codility.com/programmers/lessons/6-sorting/triangle/
 * Determine whether a triangle can be built from a given set of edges.
 */
function triangle(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) return 1;
  }

  return 0;
}

console.log(triangle([10, 2, 5, 1, 8, 20])); //should return 1
console.log(triangle([10, 50, 5, 1])); //should return 0
