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