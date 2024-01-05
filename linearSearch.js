const array = Array.from({length:20},() => Math.floor(Math.random() * 100)).sort((a,b) => a - b);

function linearSearch(arr,target){
    for(let i = 0; i < array.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}