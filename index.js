function hasTargetSum(array, target) {
  const complements = new Set();
  for (const num of array) {
    if (complements.has(num)) {
      return true;
    }
    complements.add(target - num);
  }
  return false;
}

/* 
  O(n^2)
*/

/* 
*Create a function called hasTargetSum that takes an array of integers and a target integer as arguments.
*Create an empty object called seenNumbers.
*Loop through the array of integers.
*Inside the loop, subtract the current integer from the target integer to get the difference.
*Check if the difference is in the seenNumbers object. If it is, return true since we have found a pair of numbers that add up to the target integer.
*If the difference is not in the seenNumbers object, add the current integer to the seenNumbers object.
*If the loop completes and we have not found a pair of numbers that add up to the target integer, return false.
*/

/*
*The hasTargetSum function takes in an array of integers and a target integer as arguments. The goal of the function is to determine whether there are two numbers in the array that add up to the target integer. If there are, the function should return true, otherwise, it should return false.
*To solve this problem, we can use a nested loop to compare each pair of integers in the array and check if their sum is equal to the target integer. The outer loop will iterate through each integer in the array, while the inner loop will iterate through the remaining integers in the array. By doing this, we can compare each pair of integers in the array only once and avoid comparing the same pair twice.
*The time complexity of this solution is O(n^2) because we use a nested loop to iterate over the array. The space complexity is O(1) because we only use a few constant variables to keep track of the indices and sum of the integers.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // Test case 1
const arr1 = [1, 2, 3, 4, 5];
const target1 = 9;
console.log(hasTargetSum(arr1, target1)); // Expected output: true, since 4 and 5 add up to 9

// Test case 2
const arr2 = [7, 8, 2, 6, 11, 13, 4];
const target2 = 15;
console.log(hasTargetSum(arr2, target2)); // Expected output: true, since 4 and 11 add up to 15

// Test case 3
const arr3 = [-3, 0, 3, 6, 9];
const target3 = 0;
console.log(hasTargetSum(arr3, target3)); // Expected output: true, since -3 and 3 add up to 0

// Test case 4
const arr4 = [1, 1, 1, 1];
const target4 = 2;
console.log(hasTargetSum(arr4, target4)); // Expected output: true, since 1 and 1 add up to 2

// Test case 5
const arr5 = [1, 3, 5, 7, 9];
const target5 = 8;
console.log(hasTargetSum(arr5, target5)); // Expected output: false, since no pair of numbers adds up to 8

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
