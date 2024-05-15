function findUnion(arr1, arr2, n, m)
{
    //Approach - 1
    let numberArr = [], hashTable = {}, i=0, j=0;
    
    for(i=0; i<n; i++) {
        hashTable[arr1[i]] = 1;
    }
    
    for(i=0; i<m; i++) {
        hashTable[arr2[i]] = 1;
    }
    
    numberArr = Object.keys(hashTable).sort(function(a,b){ return a-b;}).map(Number);
    console.log(JSON.stringify(numberArr));
    
    //Approach - 2
    //Use Map
    
    let freq = new Map();
    let union = [];
    
    // inserting a key in map takes logN time
    for(let num of arr1) {
        freq.set(num, (freq.get(num) || 0)+1); // TC = Logn
    }

    // inserting a key in map takes logM time
    for(let num of arr2) {
        freq.set(num, (freq.get(num) || 0)+1); // TC = Logm
    }

    for(let [num] of freq){ //TC = m+n
        union.push(num);
    }

    // total TC = 0((m+n)log(m+n)
    // space complecity = 0(m+n) because of union array
    console.log(JSON.stringify(union));


    //Approach - 3
    // using set
    let set = new Set();
    union = [];
    for(let num of arr1){
        set.add(num);
    }

    for(let num of arr2){
        set.add(num);
    }

    for(let num of set) {
        union.push(num);
    }
    console.log(JSON.stringify(union));


    //Approach - 4
    // 2 pointers
    union = [];
    i=0;
    while(i<n && j<m) {
        if(arr1[i] <= arr2[j]) {
            if(union.length == 0 || union[union.length-1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            ++i;
        } else {
            if(union.length == 0 || union[union.length-1] !== arr2[j]){
                union.push(arr2[j]);
            }
            ++j;
        }
    }

    while(i < n) {
        if(union[union.length-1] !== arr1[i]) union.push(arr1[i]);
        ++i;
    }

    while(j < m) {
        if(union[union.length-1] !== arr2[j]) union.push(arr2[j]);
        ++j;
    }

    console.log(JSON.stringify(union));
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], arr2 = [2, 3, 4, 4, 5, 11, 12];
let n = arr1.length, m = arr2.length;
findUnion(arr1, arr2, n, m);
