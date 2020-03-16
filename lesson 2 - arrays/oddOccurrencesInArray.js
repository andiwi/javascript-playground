/* Codility Challenge Lesson 2: Arrays
 * https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 * Find value that occurs in odd number of elements.
 */
// O(N**2)
function oddOccurrencesInArray(A) {
  if (!Array.isArray(A) || A.length % 2 !== 1) return;

  let uniqueCandidates = [A[0]];

  for (let i = 1; i < A.length; i++) {
    const pairIdx = uniqueCandidates.indexOf(A[i]);

    if (pairIdx === -1) {
      uniqueCandidates.push(A[i]); //add element to unique candidates
    } else {
      uniqueCandidates.splice(pairIdx, 1); //remove pair
    }
  }

  return uniqueCandidates[0];
}

// O(N)
function oddOccurrencesInArrayFast(A) {
  if (!Array.isArray(A) || A.length % 2 !== 1) return;

  const occurrencesMap = new Map();

  //count the occurrences in a map
  A.forEach(element => {
    if (occurrencesMap.has(element)) {
      occurrencesMap.set(element, occurrencesMap.get(element) + 1);
    } else {
      occurrencesMap.set(element, 1);
    }
  });

  let unique;
  for (const [key, value] of occurrencesMap.entries()) {
    if (value % 2 !== 0) {
      unique = key;
      break;
    }
  }
  return unique;
}

console.log(oddOccurrencesInArray([])); //should return undefined
console.log(oddOccurrencesInArray([1, 1])); //should return undefined
console.log(oddOccurrencesInArray([1, 1, 2])); //should return 2
console.log(oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])); //should return 7
console.log(
  oddOccurrencesInArray([10000, 10001, 2000, 20000, 20000, 10000, 10001])
); //should return 2000

console.log(oddOccurrencesInArrayFast([])); //should return undefined
console.log(oddOccurrencesInArrayFast([1, 1])); //should return undefined
console.log(oddOccurrencesInArrayFast([1, 1, 2])); //should return 2
console.log(oddOccurrencesInArrayFast([9, 3, 9, 3, 9, 7, 9])); //should return 7
console.log(
  oddOccurrencesInArrayFast([10000, 10001, 2000, 20000, 20000, 10000, 10001])
); //should return 2000
