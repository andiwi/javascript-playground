/* Codility Challenge Lesson 5: genomicRangeQuery
 * https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
 * Find the minimal nucleotide from a range of sequence DNA
 */
function genomicRangeQuery(S, P, Q) {
  //count occurrences of nucleotides in subsequences
  let occurrences = [];
  for (let i = 0; i < S.length; i++) {
    occurrences[i] = getOccurrenceArray(S[i]);
    if (i > 0) {
      occurrences[i] = addArrays(occurrences[i], occurrences[i - 1]);
    }
  }

  let queryResults = [];
  //for each query calculate min impact factor
  for (let i = 0; i < P.length; i++) {
    const startIdx = P[i];
    const endIdx = Q[i];

    let subsequence;
    if (startIdx > 0) {
      //subtract subsequences
      subsequence = subtractArrays(
        occurrences[endIdx],
        occurrences[startIdx - 1]
      );
    } else {
      subsequence = occurrences[endIdx];
    }

    //find min impact factor
    for (let j = 0; j < subsequence.length; j++) {
      if (subsequence[j] > 0) {
        queryResults[i] = j + 1; //impact factor is one higher than index
        break;
      }
    }
  }
  return queryResults;
}

function getOccurrenceArray(c) {
  if (c === "A") return [1, 0, 0, 0];
  if (c === "C") return [0, 1, 0, 0];
  if (c === "G") return [0, 0, 1, 0];
  if (c === "T") return [0, 0, 0, 1];
}

function addArrays(A, B) {
  return A.map((value, idx) => value + B[idx]);
}

function subtractArrays(A, B) {
  return A.map((value, idx) => value - B[idx]);
}

console.log(genomicRangeQuery("CAGCCTA", [2, 5, 0], [4, 5, 6])); //should return [2,4,1]
console.log(genomicRangeQuery("A", [0], [0])); //should return [1]
console.log(genomicRangeQuery("ACC", [1, 0], [2, 2])); //should return [2,1]
