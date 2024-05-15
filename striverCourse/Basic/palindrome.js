function isPalindrome(num) {
    let x = num;
    let rev = 0;
    while(num > 0) {
        rev = (rev * 10) + (num%10);
        num = ~~(num/10);
    }
    if(rev === x) console.log('It is a palindrome number');
    else console.log('It is not a palindrome number');
}

isPalindrome(456);