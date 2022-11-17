//Move all the negative elements to one side of the array

//inputArr = [5,2,-1,6,3,-3,9,-1,-1,5,8,-9.-5,2]
let inputArr;
process.stdin.on('data',function(chunk){
    inputArr += chunk;
});

process.stdin.on('end',function(){
    inputArr = inputArr('\n');

    //1st approach
    //sort the array
    //time complexity is O(nlogn)
    inputArr = inputArr.sort(function(a,b){ return a-b; });


    //2nd approach
    let j=inputArr.length-1,temp;
    for(let i=0;i<Math.floor(inputArr.length/2);){
        if(inputArr[i]<0 && inputArr[j]<0){
            ++i;
        }else if(inputArr[i]>0 && inputArr[j]<0){
            temp = inputArr[i];
            inputArr[i] = inputArr[j];
            inputArr[j] = temp;
            --j;
            ++i;
        }else{
            --j;
        }
    }
});