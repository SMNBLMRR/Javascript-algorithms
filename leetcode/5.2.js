// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
  let majority = Math.floor(nums.length / 2);
  let sortedArr = nums.sort((a, b) => a - b);
  return sortedArr[majority];
};
