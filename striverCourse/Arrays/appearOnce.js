// Approach - 1, Naive Approach
const arr = [2, 1, 4, 1, 2];
let count = 0, num;
for(i=0; i<arr.length; i++) {
    num = arr[i];
    count = 0;
    for(let j=0; j<arr.length; j++) {
        if(arr[j] === num) ++count;
    }

    if(count === 1) break;
}
console.log('Printing num....', num); // O(n2)


// Approach - 2 [Using Hashing]
let hashTable = {};
for(let i=0; i<arr.length; i++) { //O(n) if the insertion is happening at the beginning then O(n) or else if at end then O(1)
    if(hashTable[arr[i]]) hashTable[arr[i]] +=1;
    else hashTable[arr[i]] = 1;
}

for(num in hashTable) { // O(1), accessing data in object is having constant time complexity
    if(hashTable[num] === 1) {
        console.log('Printing num....', parseInt(num));
        break;
    }
}
//Total TC = O(n)
// Space complexity = O(n/2)+1


// Approach - 3 [Using HashMap]
let hashMap = new Map();
for(num of arr) {
    hashMap.set(num, (hashMap.get(num) || 0)+1);
}

for([num, count] of hashMap) {
    if(count === 1) {
        console.log('Printing num....', num);
        break;
    }
}
// TC = O(m) + O(nLogm), it takes log m time in hashmap for the insertion and as the size of the array can be considered so we can
// considered the time as O(nLogm for the first loop)
// coming to second loop, it should run O(m) time
// so total is O(nlogm) + O(m)
// Space Complexity = O(m);
// m is the size of the map, M = (n/2) + 1;
// [1,1,2,2,3] n = 5, Math.floor(n/2) = 2+1 = 3, 3 should be the size of the map. [1,2,3]


// Approach - 4 [Using Xor]
num = 0;
for(let i=0; i<arr.length; i++) {
    num ^= arr[i];
}
//TC is O(n) as we are iterating the array only once.
//Time Complexity: O(1), as it does not depend on the size of the range. 
//Space Complexity: O(1) = as we only use a constant amount of additional space regardless of the input size.

console.log('Printing num....', num);