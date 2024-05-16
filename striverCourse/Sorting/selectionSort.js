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

console.log('for arr......', arr);
// time complexity = O(n2)
// extra space complexity = O(1)
