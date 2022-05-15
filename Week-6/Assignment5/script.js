function findPair(arr, diff) {

    let start = 0;
    while(start <= arr.length) { 
        if(arr.includes(arr[start] + diff)) return 1;

        start++;
    }
    return 0;

}
const result = findPair([5, 10, 3, 2, 50, 80], 78);
console.log(result);