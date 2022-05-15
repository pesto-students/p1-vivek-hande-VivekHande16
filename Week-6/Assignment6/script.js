function findClosestSum(arr2, sum) {
    const arr = arr2.sort();
    let ans = 0;
    let diff =  Number.MAX_VALUE;

    for(let i=0; i<arr.length ;i++) {
        let cur = arr[i];
        let start = i + 1;
        let end = arr.length - 1;

        while(start < end) {
            
            if(cur + arr[start] + arr[end] === sum) return sum;
            else if(Math.abs(cur + arr[start] + arr[end]) < diff) {
                diff = Math.abs(cur + arr[start] + arr[end] - sum);
                ans = cur + arr[start] + arr[end];
            }
            if((cur + arr[start] + arr[end]) > diff) end--;
            else start++;
        }
    }
    return ans;
}

const result = findClosestSum([-1, 2, 4, -4], 7);
console.log(result);