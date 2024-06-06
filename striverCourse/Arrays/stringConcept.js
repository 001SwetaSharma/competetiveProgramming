let str = 'Apple';
//O/P = A-Pp-Ppp-Llll-Eeee

let newStr = str[0];
for(let i=1; i<str.length; i++) {

    newStr += '-'+str[i].toUpperCase();
    for(let j=1; j<=i; j++) {
        newStr += str[i];
    }
}

console.log(newStr);