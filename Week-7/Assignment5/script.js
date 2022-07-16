function nextGreaterElement(arr) {
    const stack = [];
    //store the nearest bigger element in result stack;
    const result = [];
    let top = 0;

    //Go to the last element of array
    let current = arr.length - 1;

    while(current >= 0) {

    //Compare the current element with the top of stack
    //If current < Top; Top++; and add current to top position
        if(stack[top] > arr[current]) {
            //console.log(stack[top]);
            result[current] = stack[top];
            top++;
            stack[top] = arr[current];
            current--;
        }
    //If current > Top; pop until it gets the bigger element at top
        else if(stack[top] <= arr[current]) {
            stack.pop();
            if(top == 0) stack[top] == arr[current];
            top--;
        }
    //If stack is empty the print -1
        if(stack[top] == undefined) {
            result[current] = -1;
            stack[top] = arr[current];
            current--;
        }

    }
    return result;
}

const res = nextGreaterElement([6, 8, 0, 1, 3]);
console.log(...res);