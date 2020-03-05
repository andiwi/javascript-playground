/* Codility Challenge Lesson 1: Iterations
 * https://app.codility.com/programmers/lessons/1-iterations/
 * Find longest sequence of zeros in binary representation of an integer
 */
function binaryGap(N) {
  const binaryRepresentation = N.toString(2);

  let inBinaryGap = false;
  let longestBinGap = 0;

  let binGapCount = 0;
  for (let i = 0; i < binaryRepresentation.length; i++) {
    if (binaryRepresentation.charAt(i) === "0") {
      inBinaryGap ? binGapCount++ : (binGapCount = 1);
      inBinaryGap = true;
    } else if (binaryRepresentation.charAt(i) === "1") {
      inBinaryGap = false;

      //check if gap is longest binGap
      if (binGapCount > longestBinGap) {
        longestBinGap = binGapCount;
      }
    }
  }

  return longestBinGap;
}

console.log(binaryGap(9)); //should return 2
console.log(binaryGap(529)); // should return 4
console.log(binaryGap(20)); //should return 1
console.log(binaryGap(15)); //should return 0
console.log(binaryGap(32)); //should return 0
