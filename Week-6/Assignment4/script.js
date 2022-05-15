function minProfit(arr) {
    let min_so_far = arr[0];
    let max_profit = 0;
    let profit;

    for(let i=0;i<arr.length; i++) {
        min_so_far = Math.min(min_so_far, arr[i]);
        profit = arr[i] - min_so_far;
        max_profit = Math.max(max_profit, profit);
    }
    return max_profit;
}

const result = minProfit([3,10,4,1,5,8,6,3,2]);
console.log(result);