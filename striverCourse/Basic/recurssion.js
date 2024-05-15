//Question - 1, print number 0-n without using loops
//Approach - 1 printing number before calling function
let arr = [], count = 0, n = 10;
function addNumToArr(){
    if(count > n) return;
    arr.push(count);
    ++count;
    addNumToArr();
}
addNumToArr();
console.log(arr);


//Approach - 2 printing number after calling function
arr = [], count = 0;
function addNumToArr1(n){
    if(n >= 0){
        addNumToArr1(n-1);
        console.log(n);
    }
    return;
}
addNumToArr1(n);


// Question - 2, Print names n times without using loops
n = 5;
// Approach - 1
function printNames(n){
    if(n === 0) return;
    console.log('Ankur');
    printNames(n-1);
}
printNames(n);

// Approach - 2
function printNames1(n) {
    if(n > 0) { 
        printNames1(n-1);
        console.log('Sweta');
    }
    return;
}
printNames1(5);


// Question - 3, Print 1-N using recurrsion
function printNum(n){
    if(n > 0){
        printNum(n-1);
        console.log('BackTracking...1-n ::', n);
    }
    return;
}
printNum(5);


// Question - 4, Print N-1 using recurrsion
n = 10;
function printNum1(i, n) {
    if(i <= n) {
        printNum1(i+1, n);
        console.log('Backtracking...n-1::', i);
    }
    return;
}
printNum1(1, n);


// Question - 5, sum of first N numbers
// Approach - 1, Backtracking method
function printSum(n, sum) {
    if(n == 0){
        console.log('Backtracking, sum of n numbers ::', sum);
        return;
    }
    printSum(n-1,sum+n);
}
printSum(5, 0);

// Approach - 2, Functional Approach
function printSum1(n) {
    if(n === 0) return 0;
    
    return n + printSum1(n-1);
}

console.log('Sum of n numbers by functional approach....::', printSum1(3));


// Question - 6, Factorial of a number
n = 6;
function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n-1);
}

console.log(`Printing factorial of n :: ${factorial(n)}`);


// Question - 7, Reverse an array
// Approach - 1 recurrsive method with a new array
// TC - O(n), SC - O(n)
function reverseArray(revArr, arr, n) {
    if(n < 0){
        console.log('Reverse Array... :: ', revArr);
        return;
    }
    revArr.push(arr[n]);
    reverseArray(revArr, arr, n-1);

}

const arr1 = [1,2,3,4,5,6];
n = arr1.length - 1;
reverseArray([], arr1, n);


// Approach-2 by the swap method using 2 pointers
function reverseArray1(arr, start, end) {
    if(start >= end) {
        console.log('Printing reverse array by swap method...::', arr);
        return;
    }
    let temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    reverseArray1(arr, start+1, end-1);
}

const arr2 = [1,2,3,4,5,6];
n = arr2.length - 1;
reverseArray1(arr2, 0, n);


// Approach - 3 swapping with only 1 pointer
// TC = O(n/2);
// SC = O(1)
const arr3 = [1,2,3,4,5,6];
n = arr3.length - 1;
function reverseArray2(i) {
    if (i > Math.floor(n/2)){ 
        console.log('Printing reversed array by 1 pointer method :: ', arr3);
        return;
    }
    let temp = arr3[n-i];
    arr3[n-i] = arr3[i];
    arr3[i] = temp;
    reverseArray2(i+1);
}
reverseArray2(0);


// Question - 7, check if the given string is palindrome or not
// TC - O(n/2), SC - O(n/2)
const str = 'MADAMS';
n = str.length-1; //4
function palindrome(i) {
    if(i > Math.floor(n/2)) return true;
    if(str[i] !== str[n-i]) {
        return false;
    }
    return palindrome(i+1);
}

const palindromeCheck = palindrome(0);
console.log(palindromeCheck);

 

// Question - 8 print the nth number from fibonacci series

function fibo(n) {
    if(n <= 1) return n;
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(6));