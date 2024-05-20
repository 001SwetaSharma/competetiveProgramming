// The idea is to check for every Subarray and increase the counter if it gives the sum as 0.

let arr = [6,-1,-3,4,-2,2,4,6,-12,-7];
let sum = 0, count = 0, n = arr.length;
// Brute Force Approach
for(let i=0; i<n; i++) {
    sum = 0;
    for(let j=i; j<n; j++) {
        sum += arr[j];
        if(sum === 0) ++count;
    }
}
console.log('for count...........::', count);
console.log('--------------------------------------------------------------------------------');


// Naive approach
count = 0, sum = 0;
let hashMap = new Map();
for(let i=0; i<n; i++) {
    sum += arr[i];
    if(sum === 0) ++count;

    if(hashMap.has(sum)) {
        count += hashMap.get(sum);
    }

    if(!hashMap.has(sum)) {
        hashMap.set(sum, 1);
    } else {
        hashMap.set(sum, hashMap.get(sum)+1);
    }
}
console.log('for count...........::', count);
console.log('--------------------------------------------------------------------------------');

// DRY RUN

/*
arr = [6,-1,-3,4,-2,2,4,6,-12,-7]
count = 0, 1, 2, 3,
sum = 0, 6, 5, 2, 6
i = 0, 1, 2
hashMap = {6 => 3, 5=>1, 2=>1, 4 =>1, 10=>1, 16=>1, -3 => 1}
*/

// Brute Force Approach
let arr1= [ 9,10,8,7,0,3,0], temp;
/*let k = 0; hashMap = {};
for(let i=0; i<arr1.length; i++) {
    if(arr1[i] === 0) {
        for(let j=i-1; j>=0 ; j--) {
            arr1[j+1] = arr1[j];
        }
        arr1[k] = 0;
        k++;
    }
}
console.log(arr1);
//TC = O(n2)
//Extra SC = O(1)


let arr2 = [];
for(let i=0; i<arr1.length; i++) {
    if(arr1[i] === 0) {
        arr2.push(arr1[i])
    }
}

for(let i=0; i<arr1.length; i++) {
    if(arr1[i] !== 0) {
        arr2.push(arr1[i])
    }
}
//TC - O(n)
//Sc = O(n)
console.log('for arr2.......', arr2);*/

let writeIndex = arr1.length-1;
for(let i=arr1.length-1; i>=0; i--) {
    if(arr1[i] !=0) {
        arr1[writeIndex] = arr1[i];
        writeIndex--;
    }
}

while(writeIndex >= 0) {
    arr1[writeIndex] = 0;
    writeIndex--;
}

console.log('for arr1.......', arr1);

// slice and unshift, redis[Details, with 1 example]


var myObject = {
    obj: "myObject",
    func: function() {
        var self = this; // global
        console.log(this.obj); // myobject
        console.log(self.obj); // myobject
        (function() {
            console.log(this.obj); // error
            console.log(self.obj); // {}
        }());
    }
};
myObject.func();