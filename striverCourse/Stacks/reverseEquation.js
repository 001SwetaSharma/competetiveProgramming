const s = "20-3+5*2";

let num = '', str='';
for(let i=0; i<s.length; i++) {
    if(s[i] >='0') {
        num += s[i];
    } else {
        str = s[i] + num + str;
        num = '';
    }
}

if(num.length > 0) {
    str = num + str;
}

console.log(str);
