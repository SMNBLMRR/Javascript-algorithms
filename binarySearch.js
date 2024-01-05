const array = Array.from({length:20},() => Math.floor(Math.random() * 100)).sort((a,b) => a - b);

function binarySearch(arr,target){
    let left = 0
    let rigth = arr.length - 1;
    while(left <= rigth){
        let mid = Math.floor((left + rigth) / 2)
        if(arr[mid] === target){
            return mid;
        }
        if(arr[mid] < target){
            left = mid + 1;
        }
        if(arr[mid] > target){
            rigth = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([2,4,6,9,11,14,20,25,28,40],20));