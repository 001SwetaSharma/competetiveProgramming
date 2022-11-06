//Reverse an array or string

Input = [] = [1,2,3]
Output = [] = [3,2,1]


input  = [] = [4,5,1,2]
output = [] = [2,1,5,4]


//Brute force approach

let inputArr = [];
process.stdin.on('data', function(chunk){
	inputArr += chunk;
});

//1st approach
//traverse and get the reverse of the array and the time complexity will be O(n)
process.stdin.on('end',function(){
	let revArr = [];
	inputArr = inputArr.split('\n');
	for(i=inputArr.length-1;i>=0;i--){
		revArr.push(inputArr[i]);
	}

	console.log(`For revArr.....:: ${revArr}`);
});


//2nd approach
//iterate through half of the array which will have the time complexity of O(n/2)

let revArr = [],temp, j=inputArr.length-1;
for(i=0;i<Math.floor(inputArr.length/2);i++){
    temp = inputArr[i];
    inputArr[i] = inputArr[j];
    inputArr[j] = temp;
    --j;
}
