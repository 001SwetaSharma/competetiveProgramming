// Question -1, count frequencies of array elements
let n = 6, arr = [1, 3, 1, 9, 2, 7], hashFrequency = {};
function frequency(arr) {
    for(let i=0; i<arr.length; i++) {
        if (hashFrequency[arr[i]]) 
            hashFrequency[arr[i]] += 1;
        else 
            hashFrequency[arr[i]] = 1;
    }
    
    arr = [];
    for(let i=1; i<=n; i++) {
       if(hashFrequency[i]) arr.push(hashFrequency[i]);
       else arr.push(0);
    }
    return arr;
}

console.log(frequency(arr));


// Question -2, find highest/lowest frequency element
console.log(hashFrequency);
arr = Object.values(hashFrequency);
console.log(arr);
arr = arr.sort(function(a,b) { return a-b; });