let a = 11, b = 13, max = 0;

// APPROACH - 1 (get the highgest common factor / greatest common divisor by iteration till the smallest num)
// TC will be logarithmic => Math.min(a,b)
for(let i = 1; i<=Math.min(a,b); i++) {
    if(a%i === 0 && b%i === 0){
        max = i;
    }
}
console.log('for max....', max);


// APPROACH - 2 (get the gcd / hcd by iteration till the sq root of the smallest no)
// TC will be logarithmic => Math.sqrt(Math.min(a,b))
// math.sqrt because whatever the divisors before sq root will have a larger number which is after sq root, so no need of looping
// through entire numbers, rather loop till sq root and check for both the divisors.
// div1 * div2 = number
// div2 = number/div1
max = 0;
let num = Math.sqrt(Math.min(a,b));
for(let i = 1; i<=num; i++) {
    if (a%i === 0 && b % i === 0) {
        max = i;

        // div2 = number/div1 [checking if div2 is dividig both a & b or not, if it is and if > max then max = div2]
        if(a%(num/i)===0 && b%(num/i)===0 && (num/i)>max) {
            max = num/i;
        }
    }
}
console.log('for max....1', max);


// APPROACH - 3 (start the iteration with the largest number)
// TC will be logarithmic => Math.min(a,b)
max = 0;
for(let i=Math.min(a,b); i>=1; i--){
    if(a%i === 0 && b%i === 0){
        max = i;
        break;
    }
}
console.log('for max....2', max);


// you can try the Approach-3 for Approach-2 also



// Approach-4 [Euclidean algorithm]
// GCD(a,b) = GCD(a-b, b) a>b
// TC will be logarithmic => log(phi) Math.min(a,b)
while(a>0 && b>0){
    if(a>b) a = a%b;
    else b = b%a;

    if(a === 0) {
        console.log(b);
        break;
    } else if (b === 0) {
        console.log(a);
        break;
    }
}