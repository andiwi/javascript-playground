/* Codility Challenge Lesson 4: Counting Elements
 * https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 * Find the earliest time when a frog can jump to the other side of a river
 */
function frogRiverOne(X, A) {
  if (!Array.isArray(A)) return -1;
  if (X > A.length) return -1;

  let riverArray = Array(X + 1).fill(0); //init count array
  riverArray[0] = 1; //frog is at position 0

  let filledPositions = 0;

  for (let i = 0; i < A.length; i++) {
    if (riverArray[A[i]] === 0) {
      riverArray[A[i]] = 1; // set leave to river at position
      filledPositions = filledPositions + 1;
    }

    if (filledPositions === X) {
      return i;
    }
  }
  return -1;
}

console.log(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])); //should return 6
console.log(frogRiverOne(3, [1, 2, 3])); //should return 2
console.log(frogRiverOne(3, [1, 1, 2, 2, 3, 2])); //should return 4
console.log(frogRiverOne(3, [1, 1, 1])); //should return -1
