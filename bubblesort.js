function bubbleSort(arr) {
  let isChange = false;
  while (!isChange) {
    isChange = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isChange = false;
      }
    }
  }
  return arr;
}
