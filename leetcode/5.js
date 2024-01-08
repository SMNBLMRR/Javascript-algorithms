// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//Liear solution

//see 5.2 for a compact algorithms
function findMax(obj, max) {
  return Object.keys(obj).find((k) => obj[k] === max);
}

var majorityElement = function (nums) {
  let max = -Infinity;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
    max = Math.max(max, obj[nums[i]]);
  }
  return findMax(obj, max);
};
