/* This createStack() function returns the push and pop method results */
function createStack() {
    const items = [];
    return {
    /* Push and pop methods can access the items because of closure concept*/
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

/* Since the createStack()function is returning the push and pop method results we can execute these methods from outside of function */
stack.push(7);             //[7]
stack.push(9);             //[7,9]
stack.push(10);            //[7,9,10] 
stack.pop();               //[7,9]
stack.push(11);            //[7,9,11]

/* The stack items are not accessible outside of functions because of excapsulation */
console.log(stack.items);  //undefined



