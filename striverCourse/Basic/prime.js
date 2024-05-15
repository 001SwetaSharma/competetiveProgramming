// Approach - 1 [brute force approach]
let num =  2, count = 1;
for(i = 2; i<num; i++){
    if(num % i === 0){
        ++count;
        break;
    }
}
if(count > 1) {
    console.log ('Not a prime no');
} else {
    console.log('Prime no');
}


// Approach -2 [Optimal Approach]
// it is never possible that a div exists before sq root and not after sq root
// div1 * div2 = num
// if num/div1 before sq root then it is not prime, as prime should have divisors of 2. so if div1 is there then div2 will be there.
// so no need of looping till the entire number and checking div2. we are just worried about div1 in prime
num = 2, count = 1;
for(i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        ++count;
        break;
    }
}

if(count > 1) {
    console.log ('Not a prime no');
} else {
    console.log('Prime no');
}