/* 
This hasDuplicate() function is only returning true or false value.
This boolean value is not getting stored in any variable or object 
so we cannot calculate a space complexity.
*/
const hasDuplicate = arr => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1,2,3,4,9,3,4]));

