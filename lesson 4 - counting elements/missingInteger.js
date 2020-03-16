/* Codility Challenge Lesson 4: Missing Integer
 * https://app.codility.com/programmers/lessons/4-counting_elements/
 * Find the smallest positive integer that does not occur in a given sequence.
 */
function missingInteger(A) {
  let counter = new Map();
  A.forEach(element => {
    if (element >= 0) {
      counter.set(element, 1);
    }
  });

  for (let i = 1; i < 1000000; i++) {
    if (!counter.has(i)) {
      return i;
    }
  }
}

console.log(missingInteger([1, 3, 6, 4, 1, 2])); //should return 5
console.log(missingInteger([1, 2, 3])); //should return 4
console.log(missingInteger([-1, -3])); //should return 1
console.log(
  missingInteger(
    Array(100000)
      .fill()
      .map((item, index) => index + 1)
  ) //an array filled with 1,...,100000
); //should return 100001
