let n=6, arr = [13,46,24,52,20,9], temp;
for(let i=1; i<=n-1; i++) { //rounds
    for(j=0; j<=n-i; j++) {
        if(arr[j] > arr[j+1]) {
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log('Printing Sorted Array....', arr);

// Recursion
arr = [13,46,24,52,20,9];

function recursion(arr, i, n) {
    // base case
    if(i === n) return;
    let temp;
    for(let j=0; j<=n-i; j++) {
        if(arr[j] > arr[j+1]) {
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
    recursion(arr, i+1, n);
}   

recursion(arr, 1, n);

console.log('Printing Sorted Array....Recurssion', arr);