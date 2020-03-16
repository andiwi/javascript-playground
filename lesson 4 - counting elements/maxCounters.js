/* Codility Challenge Lesson 4: Counting Elements
 * https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 * Calculate the values of counters after applying all alternating operations:
 * increase counter by 1; set value of all counters to current maximum.
 */
function maxCounters(N, A) {
  if (!Array.isArray(A)) return;

  let counters = Array(N).fill(0);
  let maxCounter = 0;
  let lastIncrease = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) {
      lastIncrease = maxCounter;
    } else {
      const pos = A[i] - 1;
      counters[pos] = Math.max(lastIncrease, counters[pos]);
      counters[pos]++;
      maxCounter = Math.max(maxCounter, counters[pos]);
    }
  }

  return counters.map(counter => Math.max(counter, lastIncrease));
}

console.log(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])); // should return [3,2,2,4,2]
