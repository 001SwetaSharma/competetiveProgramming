// Find the longest subarray that sums to K
let arr = [2, 3, 5, 1, 9], kk = 10, n = arr.length;

//Approach - 1 [Naive Approach ]
let len = 0;
for(j=0; j<n; j++) {
    //console.log('for j....', j);
    let s = 0;
    for(k=j; k<n; k++) {
        s += arr[k];
        //console.log('for k....', k);
        //console.log('for kk....', kk);
        if(s === kk) {
            len = Math.max(len, k-j+1);
        }
        //console.log('for len....', len);
    }
}
console.log('for len....', len);
console.log("-----------------------------------------------------------------------");

// Approach - 2 [Better Approach] [Hashing via Object]
len = 0;
let sum = 0, hashMap = {};
for(let i=0; i<arr.length; i++) {
    sum += arr[i];
    if(sum === kk) {
        len = Math.max(len, i+1);
    }
    let rem = sum - kk;
    if(rem in hashMap) {
        let l = i - hashMap[rem];
        len = Math.max(len, l);
    }
    if(!(sum in hashMap)) hashMap[sum] = i;
}
console.log('for len....', len);
console.log("-----------------------------------------------------------------------");

// Approach - 3 [Better Approach] [Hashing via HashMap] (optimal solution for positive and negative numbers both)
len = 0, sum = 0, hashMap = new Map();
for(let i=0; i<arr.length; i++) {
    sum += arr[i];
    // this sum is checking is for the first subarray that will come
    if(sum === kk) {
        // first subarray length
        len = Math.max(len, i+1);
    }

    // as the next sum will be bigger than kk so we are taking out remainder and checking out the last existing subarray
    let rem = sum - kk;

    // so basically if there is any previous subarray exists which sums to kk then the current index should subtract the index
    // which is stored in hashMap for the last existing subarray and this way we will get the length of the new sub-array
    // which sums to k, 0-x is having length x... in order to get kk, 1 sub array should have x - kk, if it exists in hashMap
    // then we can get the index of x-kk, and subtract from the current index(i) of new subarray which sums to kk
    if(hashMap.has(rem)){
        let l = i - hashMap.get(rem);
        len = Math.max(len, l);
    }

    if(!hashMap.has(sum)) {
        hashMap.set(sum, i);
    }
}
console.log('for len....', len);
console.log("-----------------------------------------------------------------------");

// Approach - 4 [Optimal Approach ---- Two Pointer (for positive)]
//[1, 2, 3, 1, 1, 1, 1, 3, 3], kk = 6
// will work for only positive numbers
let left = 0, right = 0;
len = 0, sum = arr[left];
while(right < arr.length){
    if(sum < kk) {
        ++right;
        sum += arr[right];
    }
    
    if(sum === kk) {
        len = Math.max(len, right-left+1);
        ++right;
        if(right < arr.length) sum += arr[right];
    } else if(sum > kk) {
        sum -= arr[left];
        ++left;
    }
}
console.log('for len....', len);
console.log("-----------------------------------------------------------------------");

// dry run for optimal approach
// [1, 2, 3, 1, 1, 1, 1, 3, 3]
/*
len = 0, 3, 3, 4, 4, 2
left = 0, 1, 2, 3, 4, 5, 6, 7
right = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
sum = 1, 3, 6, 7, 6, 7, 5, 6, 7, 4, 7, 6, 9, 8, 7, 6
arr.length = 9
kk = 6
*/

// Approach - 5 [optimal approach ------ two pointer (for positive)]
left = 0, right = 0, sum = arr[0], len = 0;
// as we are mostly dealing with right pointer so we will keep incrementing right pointer
while(right < arr.length) {
    //it will check if the sum is already having larger value then kk, then it will try to shrink down to that number which sums
    // to kk and will try to get that sub-array.
    // the left will keep on increasing to go towards right if the sum > kk so that we can eliniate every number from left to get
    // a subarray which sums to kk, if left exceeds than right which can happen if the starting elements only in the array is > kk
    // then we will deduct sum and bring back the sum to 0 so that when we move right ahead the sum can result to kk
    while(left <=right && sum > kk) {
        sum -= arr[left];
        ++left;
    }

    // checking for every sum if it is equal to kk or not
    if(sum === kk) {
        len = Math.max(len, right-left+1);
    }
    ++right;
    // if right is exceeding arr.length 
    if(right < arr.length) sum += arr[right];
}
console.log('for len....', len);
// [2, 3, 5, 1, 1, 10, 12];