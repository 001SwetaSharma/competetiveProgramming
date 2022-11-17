//sort the array without using sort function

let inputArr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];


//1st approach
//time complexity is O(n)
//space complexity is O(n)
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


//2nd approach
let lo = 0, mid = 0, high = inputArr.length-1, temp = 0;
while(mid<=high){
    if(inputArr[mid] == 0){
        temp = inputArr[mid];
        inputArr[mid] = inputArr[lo];
        inputArr[lo] = temp;
        lo++;
        mid++;
    }

    else if(inputArr[mid] == 1){
        mid++;
    }else{
        //if the element is 2
        temp = inputArr[mid];
        inputArr[mid] = inputArr[high];
        inputArr[high] = temp;
        mid++;
        high--;
    }
}

console.log(`Printing Sorted Array ..... :: ${JSON.stringify(inputArr)}`);