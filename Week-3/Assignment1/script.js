/*  This memoizeAdd(fn) function takes the original add function as argument and returns another function 
    and this function caches the result. It only executes when it doesn’t have result in the cache. */
function memoizeAdd(fn) {
    const cache = new Map();                             //Store the result in Map.
    return function(...args) {                           //Returns pure function 
        const key = args.toString();                     //Convert the args into sting values.
        if(cache.has(key))  {
            return cache.get(key);                       //If cache has the result return the result.
        } else {
            cache.set(key, fn(...args));                 //Else store the result in cache map and return the result.
            return cache.get(key);
        }
    }
}

/* Simple Add function */
function add(a, b) {
    return a + b;
}

/* Calculate the time required to execute each function */
function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const addM = memoizeAdd(add);

time( () => addM(200, 400));
time( () => addM(200, 400));
