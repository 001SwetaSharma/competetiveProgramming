let inputArr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

let hashTable = {};
for(let i=0;i<inputArr.length;i++){
    if(hashTable[inputArr[i]]){
        hashTable[inputArr[i]] = ++hashTable[inputArr[i]];
    }else{
        hashTable[inputArr[i]] = 1;
    }
}

let sortedArray = [];
for(let i=0;i<hashTable[0];i++){
    sortedArray.push(0);
}

for(let i=0;i<hashTable[1];i++){
    sortedArray.push(1);
}

for(let i=0;i<hashTable[2];i++){
    sortedArray.push(2);
}