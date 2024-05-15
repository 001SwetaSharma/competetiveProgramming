function reverseDigit(num) {
    let x = Math.abs(num), reverse = 0;
    while(x > 0) {
        reverse = (reverse*10) + (x%10);
        x = Math.floor(x/10);
    }
    if(x > (Math.pow(2,31) - 1) || x < -(Math.pow(2,31) - 1)) return 0;
    else if(num < 0) return -reverse;
    else return reverse;
}

console.log('Printing reverse of the digit...::', reverseDigit(-12344985749387594387));