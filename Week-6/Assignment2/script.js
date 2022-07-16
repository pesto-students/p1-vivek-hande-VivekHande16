function matrix2(arr) {
    let result = [];

    let startColumn = 0;
    let endColumn = arr.length - 1;
    let startRow = 0;
    let endRow = arr.length - 1;

    while (startColumn <= endColumn && startRow <= endRow) {

    // Top row
    //Push all the element in top row and then increment startRow pointer to next row
      for (let i = startColumn; i <= endColumn; i++) 
        result.push(arr[startRow][i]);

      startRow++;

    // Right column
    //Push all the element in right column and then decrement endColumn pointer to previous column
      for (let i = startRow; i <= endRow; i++) 
        result.push(arr[i][endColumn]);
      
      endColumn--;

    // Bottom row
    //Push all the element in end row and then decrement endRow pointer to previous row
      for (let i = endColumn; i >= startColumn; i--) 
        result.push(arr[endRow][i]);
      
      endRow--;

    // left column
    //Push all the element in left column and then increment startColumn pointer to next column
      for (let i = endRow; i >= startRow; i--) 
        result.push(arr[i][startColumn]);
      
      startColumn++;

    }
  return result;

}

const res = matrix2([[1,2,3],[4,5,6],[7,8,9]]);
console.log(res);
