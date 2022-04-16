function memoizeAdd(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args.toString();
        if(cache.has(key))  {
            return cache.get(key);
        } else {
            cache.set(key, fn(...args));
            return cache.get(key);
        }
    }
}

function add(a, b) {
    return a + b;
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const addM = memoizeAdd(add);

time( () => addM(200, 400));
time( () => addM(200, 400));
