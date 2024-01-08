function binarySearch(arr, target) {
  let left = 0;
  let rigth = arr.length - 1;
  while (left <= rigth) {
    let mid = Math.floor((left + rigth) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] > target) {
      rigth = mid - 1;
    }
  }
  return -1;
}
