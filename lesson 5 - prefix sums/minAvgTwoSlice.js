/* Codility Challenge Lesson 5: minAvgTwoSlice
 * https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
 * Find the minimal average of any slice containing at least two elements
 */
function minAvgTwoSlice(A) {
  let minIdx = 0;
  let minAvg = (A[0] + A[1]) / 2;

  for (let i = 0; i < A.length - 2; i++) {
    //two element slice check
    let avg = (A[i] + A[i + 1]) / 2;
    if (avg < minAvg) {
      minIdx = i;
      minAvg = avg;
    }

    //three element slice check
    avg = (A[i] + A[i + 1] + A[i + 2]) / 3;
    if (avg < minAvg) {
      minIdx = i;
      minAvg = avg;
    }
  }

  //check last two element slice
  const avg = (A[A.length - 2] + A[A.length - 1]) / 2;
  if (avg < minAvg) {
    minAvg = avg;
    minIdx = A.length - 2;
  }

  return minIdx;
}

console.log(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8])); //should return 1
console.log(minAvgTwoSlice([5, 5, -9, 1, -10, 6])); //should return 2
console.log(minAvgTwoSlice([0, 1])); //should return 0
console.log(minAvgTwoSlice([9, 8, 1, 1])); //should return 2
console.log(minAvgTwoSlice([9, -1, 1, -1])); //should return 1
