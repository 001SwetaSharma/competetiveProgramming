//Bascially shift the array by 1 clockwise.

//input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] output arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//1st approach
//time complexity = O(n)
//space complexity = O(1)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cyclicallArr = [];
cyclicallArr.push(arr[arr.length-1]);
for(let i=0;i<arr.length-1;i++){
    cyclicallArr.push(arr[i]);
}


//2nd approach
//time complexity = O(n)
//space complexity O(1)
let x = arr[arr.length-1];
for(let i=arr.length-1;i>0;i++){
    arr[i] = arr[i-1];
}
arr[0] = x;


//3rd approach
//time complexity = O(n)
//space complexity = O(1)
//swapping
let temp;
for(let i=0;i<arr.length;i++){
    temp = arr[i];
    arr[i] = arr[arr.length-i];
    arr[arr.length-i] = temp;
}
console.log(`Cyclicall Array.....::${JSON.stringify(cyclicallArr)}`);