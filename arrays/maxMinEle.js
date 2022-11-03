//finding the maximum and mini element in the array

let inputArr = [];
process.stdin.on('data',function(chunk){
    inputArr += chunk;
});


//1st approach
//traverse and get the min and maximum ele and the time complexity will be O(n)
process.stdin.on('end',function(){
    inputArr = inputArr.split('\n');
    let min = inputArr[0];max = inputArr[0];
    let minIndex, maxIndex;
    for(let i=1;i<inputArr.length;i++){
        if(min > inputArr[i]){
            min = inputArr[i];
            minIndex = i;
        }

        if(max < inputArr[i]){
            max = inputArr[i];
            maxIndex = i;
        }
    }

    console.log(`Minimum Value..............::${min}.. present at index :: ${minIndex}`);
    console.log(`Maximum Value..............::${max}.. present at index :: ${maxIndex}`);
});


//2nd approach
//if you only need to max and min val then sort the array and get the max and min val;

//sort(Object[]) is based on the TimSort algorithm, giving us a time complexity of O(n log(n)).
inputArr.sort(function(a,b){ return a-b; });
min = inputArr[0];
max = inputArr[inputArr.length-1];


//Note :-
//For higher values n, n*log(n) becomes greater than n. And that is why O(nlogn) > O(n)
//please refer https://stackoverflow.com/questions/56506410/why-is-on-better-than-o-nlogn#:~:text=So%20for%20higher%20values%20n,)%20%3E%20O(n). for more clarity