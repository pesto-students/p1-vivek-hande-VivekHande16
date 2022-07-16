const checkParenthesis = expression => {
    const stack = [];

    for(let i=0; i< expression.length; i++) {
    //Store the last paranthesis in char
        let char = stack[stack.length - 1];
    //Add all opening paranthesis into stack
        if(expression.charAt(i) == '(' || expression.charAt(i) == '{' || expression.charAt(i) == '[' )
            stack.push(expression.charAt(i));
    //If the opening and closing paranthesis pair found the pop the opening paranthesis(top) from stack
        else if((char == '(' && expression.charAt(i) == ')' ) || (char == '{' && expression.charAt(i) == '}') || (char == '[' && expression.charAt(i) == ']'))
            stack.pop();
    //If above 2 condition not satisfied then return false
        else return false;
    }
    //If stack is empty the returns true
    return stack.length ? false : true;
}

const result = checkParenthesis("{[()]}");
console.log(result);