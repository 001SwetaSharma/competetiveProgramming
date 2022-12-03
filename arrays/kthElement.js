//K’th smallest element in an unsorted array using sorting:


let inputData = [];
process.stdin.on('data',function(chunk){
    inputArr += chunk;
});


process.stdin.on('end',function(){
    inputArr = inputArr.split('\n');
    let kthEle = parseInt(inputArr[0]);
    
    //1st approach
    // sort and find the kth max and min ele
    // Time complexity will be O(nlogn) as sort uses tim sort algorithm to sort the array.
    inputArr = inputArr.sort(function(a,b){ return a-b; });
    let minEle = inputArr[kthEle - 1];
    let maxEle = inputArr[inputArr.length - kthEle];
    console.log(`min Kth element.............. ${minEle}`);
    console.log(`max Kth element.............. ${maxEle}`);
});