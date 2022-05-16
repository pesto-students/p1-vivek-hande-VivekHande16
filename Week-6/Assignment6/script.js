function findClosestSum(arr2, sum) {
    const arr = arr2.sort((a,b)=> a-b);
    let closestSum  = Number.MAX_VALUE;
    let diff =  Number.MAX_VALUE;
    let cur, start, end;
    let triplet

    for(let i=0; i<arr.length - 2; i++) {
        cur = arr[i];                          
        start = i + 1;
        end = arr.length - 1;

        while(start < end) {
        //Store sum of three elements in triplet
            triplet = cur + arr[start] + arr[end];
            

        //If (sum -triplet) < diff then set diff as (sum -triplet)
        //the next time we get the less difference than current difference the closest sum will get change so store the latest closest sum. 
            if(Math. abs(sum - triplet) <= diff && triplet < closestSum) {
                diff = Math. abs(sum - triplet);
                closestSum = triplet;
            }

        //If triplet sum is equals to given sum return the triplet
            if(triplet == sum) return triplet;
        //If its less than sum then increase the value of start pointer
            else if(triplet < sum) {
                start++;
            }
        //Else decrease the value of end pointer
            else end--;
            
        }
    }
    return closestSum;
}

const result = findClosestSum([-3, -1, 1, 3, 4, 7, 11, 16], 10);
console.log(result);