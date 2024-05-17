// Approach - 1
let arr = [1, 0, 0, 1, 1, 1], count = 1, max = 0;
for(let i=0; i<arr.length; i++) {
    if(arr[i] === 1 && arr[i] === arr[i+1]) {
        ++count;
    } else {
        if (count > max) max = count;
        count = 1;
    }
}
console.log('for max....::', max);


// Approach - 2
count = 0, max = 0;
for(let i=0; i<arr.length; i++) {
    if(arr[i] === 1) ++count;
    else {
        count = 0;
    }
    max = Math.max(max, count);
}

console.log('for max....::', max);