function zeroToFront(input) {
    input.sort((a,b) => (a===0 && b!==0)?-1:(a!==0 && b===0)?1:0);
}
const input = [1, 4, 0, 3, 0, 6];
const output = zeroToFront(input);
console.log(output);