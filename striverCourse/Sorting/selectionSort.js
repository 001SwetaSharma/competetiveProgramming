// Sort the array using selection sort algorithm
let n=6, arr = [13,46,24,52,20,9], index, temp;

for(let i=0; i<n; i++) { // n
    index = i;
    for(j=i+1; j<n; j++) { //O(n)
        if(arr[j] < arr[index]) {
            index = j;
        }
    }
    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
}

console.log('Printing Sorted Arr......', arr);
// time complexity = O(n2)
// extra space complexity = O(1)



arr = [13,46,24,52,20,9];
function recursion (arr, i, n) {
    if(i === n) return;
    
    let index = i;
    for(let j=i+1; j<=n; j++) {
        if(arr[j] < arr[index]){
            index = j;
        }
    }
    temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;

    recursion(arr, i+1, n);
}

recursion(arr, 0, arr.length-1);
console.log('Printing Sorted Arr.....recursion', arr);
