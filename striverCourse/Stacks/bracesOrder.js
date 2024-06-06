let str = '{[]}';

// First approach, using stack
let stack = [], result = true, len;
for(let i=0; i<str.length; i++) {
    if(str[i] == '(' || str[i] == '{' || str[i] == '[') {
        stack.push(str[i]);
    } else {
        len = stack.length-1;
        if((str[i] == ')' && stack[len] == '(') || (str[i] == '}' && stack[len] == '{') || (str[i] == ']' && stack[len] == '[')) {
            stack.pop();
        } else {
            result = false;
            break;
        }
    }
}
console.log(result);

//Modified first approach

// First approach, using stack
stack = [], result = true;
let last;
for(let i=0; i<str.length; i++) {
    if(str[i] == '(' || str[i] == '{' || str[i] == '['){
        stack.push(str[i]);
    } else {
        // handling the edge case over here
        if(stack.length === 0) {
            result = false;
            break;
        }

        last = stack.pop(); //getting the last element from the stack to compare
        if((str[i] == ')' && last !== '(') || 
           (str[i] == '}' && last != '{')  || 
           (str[i] == ']' && last != '[')) {
            result = false;
            break;
        }
    }
}
console.log(result);