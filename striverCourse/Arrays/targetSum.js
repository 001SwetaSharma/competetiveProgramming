const array1 = [1, 2, 3, 4, 5, 6];
let target = 7, hashTable = {}, result = [];

for(let num of array1) {

	if(hashTable[target - num]) {
		result.push([(target - num), num]);
	} else {
		hashTable[num] = 1;
	}
}

console.log('Printing result :: ...', result);

//unshift will add an element to the beginning of the array
// but the time complexity will increase from O(n) to O(n2)