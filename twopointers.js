function twoPointers(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === target) return true;
    if (arr[left] + arr[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
