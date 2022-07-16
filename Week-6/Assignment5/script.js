function findPair(arr, diff) {

    for(let i=0; i<arr.length; i++) 
        if(arr.includes(arr[i] + diff)) return 1;

    return 0;

}
const result = findPair([5, 10, 3, 2, 50, 80], 78);
console.log(result);
