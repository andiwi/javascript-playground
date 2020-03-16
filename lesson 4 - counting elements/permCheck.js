/* Codility Challenge Lesson 4: Perm Check
 * https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 * Check whether array A is a permutation.
 */
function permCheck(A) {
  let counter = Array(A.length).fill(0);

  A.forEach(element => {
    if (element > A.length) return 0;
    counter[element - 1] += 1;
  });

  for (let i = 0; i < counter.length; i++) {
    if (counter[i] !== 1) return 0;
  }

  return 1;
}

console.log(permCheck([4, 1, 3, 2])); //should return 1
console.log(permCheck([4, 1, 3])); //should return 0
console.log(permCheck([1000, 1, 2, 3])); //should return 0
