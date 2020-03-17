/* Codility Challenge Lesson 5: Passing Cars
 * https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 * Count the number of passing cars on the road
 */
function passingCars(A) {
  let passingCount = 0;
  let carsGoingEast = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      passingCount += carsGoingEast;
    } else {
      carsGoingEast += 1;
    }

    if (passingCount > 1000000000) {
      return -1;
    }
  }

  return passingCount;
}

console.log(passingCars([0, 1, 0, 1, 1])); // should return 5
console.log(passingCars([0])); // should return 0
console.log(passingCars([0, 0])); // should return 0
console.log(passingCars([0, 1, 0, 1, 0, 1])); // should return 6
