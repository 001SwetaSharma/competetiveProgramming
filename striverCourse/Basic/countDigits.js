let num = 77890;

// approach-1 ->  Brute force approach
let rem = 0, count = 0;
while(num > 0) {
    ++count;
    num = Math.floor(num / 10);
}
console.log('Printing number of digits :: ', count);


//Approach - 2, logarithmic approach
num = 77890;
let logNum = Math.ceil(Math.log10(num));
console.log('logNum',logNum);