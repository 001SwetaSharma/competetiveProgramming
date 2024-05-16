let arr = [13,46,24,52,20,9], n = arr.length, temp;

for(let i=1; i<n; i++) {
    temp = arr[i];
    for(j=i-1; j>=0; j--) {
        if(temp > arr[j]){
            break;
        } else {
            arr[j+1] = arr[j];
        }
    }
    arr[j+1] = temp;
}

console.log('Sorted Array is ::....', arr);


// Recurssive Approach
arr = [1,2,1,2,20,9];

function recursion(arr, i, n) {
    //base condition
    if(i === n) return;
    let temp = arr[i], j=i-1;
    while(j>=0 && arr[j] > temp){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = temp;
    recursion(arr, i+1, n);
}

recursion(arr, 1, n);
console.log('Sorted Array is Recursion::....', arr);