let arr = [1,2,3,4,5,6,7], d = 22, i;
// output = [5,6,7,1,2,3,4]
//d = d % arr.length = 3 % 7 = 3
// last n-d  elements will be shift in the front

// APPROACH - 1 - BRUTE FORCE APPROACH
// make a temp array and store the shifting elements which needs to be shifted in the first
// last d-1 elements
let temp = [], n = arr.length;
d = d % n;
for(i=n-d; i<n; i++) {
    temp.push(arr[i]);
}
//console.log('Printing temp array :: ', JSON.stringify(temp));

// perform the shifting of the 0-d-1 elements towards the right
//n-i-1 will start from last index as i will increment and will get the last n-d index
for(i=0; i<(n-d); i++) {
    arr[n-i-1] = arr[(n-d)-i-1];
}
//console.log('Printing shifted array :: ', JSON.stringify(arr));

//adding the temp array to the original array
for(let i=0; i<d; i++) {
    arr[i] = temp[i];
}
console.log('Printing rotated array :: ', JSON.stringify(arr));


arr = [1,2,3,4,5,6,7];
// APPROACH - 2 - OPTIMAL APPROACH
reverseArray(arr, n-d, n-1);
reverseArray(arr, 0, n-d-1);
reverseArray(arr, 0, n-1);

function reverseArray(arr, first, last) {
    while(first < last) {
        let temp= arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
}

console.log('Printing optimal rotated array :: ', JSON.stringify(arr));