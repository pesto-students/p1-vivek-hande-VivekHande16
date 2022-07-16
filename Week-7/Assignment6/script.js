function queueUsingStacks(arr) {
    //Initializing two empty stack to perform queue operations
    const stack1 = [];
    const stack2 = [];

    let current = 0;
    while(current < arr.length) {
    //If current element in array is 1 the push the next element into stack1
        if(arr[current] == 1) {
            stack1.push(arr[++current]);
        current++;
        }
    //If current element in array is 2 then empty the stack1 and add all those elemenst into stack2
        else if(arr[current] == 2) {
        //If stack1 is empty then we cannot pop any element from stack1 so return -1;
            if(stack1.length == 0) 
                return -1;
            while(stack1.length > 0) 
                stack2.push(stack1.pop());  
        //Pop top element from 2
            stack2.pop();
        //Empty stack2 and all elements into stack 1
            while(stack2.length > 0) 
                stack1.push(stack2.pop()); 
            current++;
        }
            
    }
    return stack1;
}

const res = queueUsingStacks([1, 3, 1, 4, 2, 2, 1, 1, 1, 3]);
console.log(res);