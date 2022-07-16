/* 
=> [Symbol.iterator] adds the iteration method.
=> iterator method returns a object, with method next defined in it.
=> next method returns an object with field value and done.
=> value is any value that we want to return and done is boolean parameter which tells when to stop.
=> If value of done is true then loop will stop its iteration and if done is false then continue iteration.
=> Function fib works like:
    1. set i to 1;
    2. set old = 0, new1 =0;
    3. if(i <= n) then continue iteration
       else stop iteration and GOTO 6.
    4. set old value to next value in array and
       next value to old value + next value (If after calculation next value comes to as 0 then set it as 1)
    5. Returns the old value and GOTO 3.
    6. STOP
*/
const fib = {
    n: 10,
    [Symbol.iterator]: function() {
        let i=1;
        let old=0, new1=0;
        return {
            next: () => {
                if( i++ <= this.n ) {
                    [old, new1] = [new1, (old + new1) || 1];
                    return { value: old, done: false }
                }
                else {
                    return { done: true }
                }
            }
        }
    }
}

console.log([...fib]);