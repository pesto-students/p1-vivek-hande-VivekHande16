function swap(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length-1;
    let temp = 0;

    while(mid <= high) {
        if(arr[mid] == 0) {
            temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }
        else if(arr[mid] == 1) {
            mid++;
        }
            
        else if(arr[mid] == 2) {
            temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    return arr;
}

const result = swap([0,1,0,2,2,1,0,1,2]);
console.log(result);