function createStack() {
    const items = [];
    return {
        push(item) { 
            items.push(item); 
            console.log(items);
        },
        pop() {  
            items.pop();
            console.log(items);
        }
    }
}

const stack = createStack();
stack.push(7);             //[7]
stack.push(9);             //[7,9]
stack.push(10);            //[7,9,10] 
stack.pop();               //[7,9]
stack.push(11);            //[7,9,11]
console.log(stack.items);  //undefined



