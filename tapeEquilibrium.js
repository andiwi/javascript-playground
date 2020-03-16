/* Codility Challenge Lesson 3: Time Complexity
 * https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
 * Minimize the value |(A[0]+...+A[P-1])-(A[P]+...+A[N-1])|
 */
function tapeEquilibrium(A) {
  if (!Array.isArray(A)) return;
  if (A.length < 2) return;

  //calculate sums
  let sumArray = [];
  sumArray[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    sumArray[i] = sumArray[i - 1] + A[i];
  }

  let minDiff = -1;
  //calc absDiff and find minimum diff
  for (let P = 1; P < A.length; P++) {
    const diff = Math.abs(
      sumArray[P - 1] - (sumArray[A.length - 1] - sumArray[P - 1])
    );
    if (diff < minDiff || minDiff === -1) {
      minDiff = diff;
    }
  }

  return minDiff;
}

console.log(tapeEquilibrium([3, 1, 2, 4, 3])); // should return 1
console.log(tapeEquilibrium([-5, -2, 4, 6])); // should return 9
