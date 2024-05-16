let arr = [1, 1, 0, 1, 0, 0], check = 1, max = 0;
for(let i=0; i<arr.length; i++) {
    if(arr[i] === 1 && arr[i] === arr[i+1]) {
        ++check;
    } else {
        if (check > max) max = check;
        check = 1;
    }
}
console.log('for max....::', max);