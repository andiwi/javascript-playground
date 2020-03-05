/* Codility Challenge Lesson 3: Time Complexity
 * https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 * Count minimal number of jumps from position X to Y
 */
function frogJump(X, Y, D) {
  if (D === 0) return Infinity;

  const size = Y - X;
  const minSteps = Math.ceil(size / D);

  return minSteps;
}

console.log(frogJump(10, 85, 30)); //should return 3
console.log(frogJump(2000, 9000, 9)); //should return 778
