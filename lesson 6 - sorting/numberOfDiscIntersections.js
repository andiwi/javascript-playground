/* Codility Challenge Lesson 6: numberOfDiscIntersections
 * https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
 * Compute the number of intersections in a sequence of discs.
 */
function numberOfDiscIntersections(A) {
  let startAtPos = Array(A.length).fill(0); //number of disks that start at position
  let endAtPos = Array(A.length).fill(0); // number of disks that end at position
  let active = 0;

  // init the startAt and endAt positions
  for (let i = 0; i < A.length; i++) {
    startAtPos[Math.max(0, i - A[i])]++;
    endAtPos[Math.min(A.length - 1, i + A[i])]++;
  }

  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += active * startAtPos[i]; //intersection of active disks with new disks
    sum += (startAtPos[i] * (startAtPos[i] - 1)) / 2; //intersection of new disks with itself
    if (sum > 10000000) return -1;

    active += startAtPos[i] - endAtPos[i];
  }

  return sum;
}

console.log(numberOfDiscIntersections([1, 5, 2, 1, 4, 0])); // should return 11
console.log(numberOfDiscIntersections([0, 0, 0])); // should return 0
