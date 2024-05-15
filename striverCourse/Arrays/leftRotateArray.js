let arr = [1,2,3,4,5,6,7], d = 3;
//output = [4,5,6,7,1,2,3]

//Approach -1 [Brute Force Approach]
// If the rotation number(d) is equal to the size of the array then always the resultant will be same as the input.
// suppose if d = 7 and array length is 7 then array will come back to its original position.
// no of d elements will be shifted at the end and rest will come in front, so if it is same as of array length then the no of
// elements to be shifted at the end will be d i.e. 7, so 1,2,3,4,5,6,7 will be shifted at the end. hence the array will become 
// 1,2,3,4,5,6,7. if d=3, the arr = [4,5,6,7,1,2,3], 3 elements are shifted at the end of the array and rest in front.
// so the modulo will give the no of shifting to be made.
// if d = 14, then d%arr.length = 0, multiple of array length will always result in the same array.
// if d = 20, 20%7 = 6 will need only 6 shifting. mathematically, it is.. 7+7+6. 7 will give same result, so only we need to take out
// the result for 6 rotation

let n = arr.length;
d = d % n;

// take a temp array to store the numbers which needs to shifted at the end
// as d is 3 in this exmaple then the resultant array should be [4,5,6,7,1,2,3] after rotation. so it is clearly observerd that
// d no of elements are shift from first to last.

let temp = [];
// as array starts from 0 so we will go till d-1 to get the d no of the elements
for(let i=0; i<d; i++) {
    temp.push(arr[i]);
}

console.log(temp);
// storing of shifted elements are completed


// shifting the rest of the elements to the left
for(let i=d; i<n; i++) {
    arr[i-d] = arr[i];
}

//console.log(arr);


// storing the first d elements to the last
// in this case n-d = 7-3 = 4
// if you subtract i and n-d then you will get the index as 0,1,2 as i will increment and will go upto 4,5,6
// n-d will act as a base and will be subtracted from the incremented values from n-d which will automatically give 0,1,2 as the
// index
// array for 4,5,6 will store the value of temp--0,1,2 which will shift the d elements to the last.
for(let i=n-d; i<n; i++) {
    arr[i] = temp[i-(n-d)];
}

// Time complexity
// O(d) + O(n-d) + O(d) = O(n+d)
// Extra space = O(d), temp array is being used to store the d elements
console.log('Rotated Array..::', JSON.stringify(arr));



// Approach - 2 [Optimal Solution]
// reverse (arr, arr+d) = reverse first d elements = [3,2,1,4,5,6,7]
// reverse (arr+d, arr+n) = reverse the remaining last n-d elements = [3,2,1,7,6,5,4]
// reverse the whole arr(arr, arr+n) = [4,5,6,7,1,2,3] = is the output
// time complexity = O(d) + O(n-d) + O(n) = O(2n)
// extra space complexity = O(1)

arr = [1,2,3,4,5,6,7];
reverseArray(0, d-1);
reverseArray(d, n-1);
reverseArray(0, n-1);

function reverseArray(first, last) {
    while(first < last) {
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }
}

console.log('Rotated Array..Final::', JSON.stringify(arr));