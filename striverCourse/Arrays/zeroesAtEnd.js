const arr = [0,1,0,3,12];
let k=0;
for(let i=0; i<arr.length; i++) {
    if(arr[i] !== 0) {
        arr[k] = arr[i];
        if(k !== i) arr[i] = 0;
        ++k;
    }
}
console.log('Printing array...', arr);