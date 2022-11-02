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

process.stdin.on('end',function(){
	let revArr = [];
	inputArr = inputArr.split('\n');
	for(i=inputArr.length-1;i>=0;i--){
		revArr.push(inputArr[i]);
	}

	console.log(`For revArr.....:: ${revArr}`);
});