//Bascially shift the array by 1 clockwise.

//input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] output arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cyclicallArr = [];
cyclicallArr.push(arr[arr.length-1]);
for(let i=0;i<arr.length-1;i++){
    cyclicallArr.push(arr[i]);
}

console.log(`Cyclicall Array.....::${JSON.stringify(cyclicallArr)}`);