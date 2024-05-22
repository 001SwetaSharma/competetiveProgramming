let arr1 = [3, 12, 26, 40, 50, 60, 69, 80, 89, 91, 98];
let arr2 = [2, 6, 7, 10, 15, 16, 20, 23, 27, 29, 30, 35, 36, 41, 46, 51, 53, 57, 58, 61, 62, 65, 66, 73, 75, 77, 78, 86, 89, 90, 93, 96, 97];
let n = arr1.length, m = arr2.length, x = 44;

let hashObj = {};
for(let i=0; i<n; i++) {
    if(!hashObj[arr1[i]]) {
        hashObj[arr1[i]] = 1;
    }
}

let count = 0;
for(let i=0; i<m; i++) {
    let rem = x - arr2[i];
    if(hashObj[rem]){
        console.log('for rem..........', rem);
        ++count;
    }
}
//Time Complexity = O(n)
//Space Complexity = O(n)
console.log('Printing Count...........', count);


//Approach - 2 doing this in O(n) time complexity and O(1) space complexity
let i = 0, j = m-1, sum;
count = 0;
while(i<n && j>=0) {
    sum = arr1[i]+arr2[j];
    if(sum === x) {
        ++count;
        ++i;
        --j;
    } else if(sum > x) {
        j--
    } else {
        ++i;
    }
}

//[2,3,5]
//[5, 8]

// Explanation
/*
i is started from first and j from last because we will check the combination of smaller + larger number to get the sum
Things to keep in mind :-
a. Array is sorted
b. Array is having distinct elements

Scenario-1
if (first + last)>sum then assuming first is started from 0 and last from m-1 then we should reduce j hoping that there might be any combination
where first and last will sum up to x. because array is sorted and decrementing j will lead to smaller values and then there can be a probability that first+last==x

Scenario-2
if (first + last)<sum then increment i as j will be starting from last. so as j will be starting from larger number so if the sum is less then there is no point
in decrementing j as rest all number be <=j[last] so better to increment i, as i increment will result in higher number and then we can check the sum.
*/