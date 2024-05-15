//Approach - 1
let arr = [2, 3, 7, 9, 11, 2, 3, 11], ans = [];
arr = arr.sort((a,b) => a-b );
for(let i=0; i<(arr.length-1); i++) {
    if(arr[i] != arr[i+1]){
        ans.push(arr[i]);
    } else {
        ++i;
    }
}
console.log('for ans', ans);


//Approach - 2
arr = [2, 3, 7, 9, 11, 2, 3, 11];
let diff = 0;
for(i of arr) {
    diff = diff ^ i;
}
//Get its rightmost bit where x and y values are different because then only then set bit will be 1
diff = diff & -diff; // 0010 = 2

let x = 0, y =0;
for(i of arr) {
    if((i & diff) === 0) { // we will check which number is giving 0 or 1, 0 will go to x and 1 will go to y
        x ^= i; // all 0 generating numbers will give x whose exor will eliminate the odd one out no
    } else {
        y ^= i; // all 1 generating numbers will give x whose exor will eliminate the odd one out no
    }
}

let ans1 = [x, y];
if(x > y){
    ans1 = [y, x];
}

console.log('for ans1...', ans1);
