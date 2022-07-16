function swap(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length-1;
    let temp = 0;

    while(mid <= high) {
    //If arr[mid] == 0 then swap lower with mid and increase both low and mid pointers
        if(arr[mid] == 0) {
            temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }
    //If arr[mid] == 1 then increment the mid pointer
        else if(arr[mid] == 1) {
            mid++;
        }
    //If arr[mid] == 2 then swap the mid with high and decrement the high pointer.       
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