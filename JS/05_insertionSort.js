
const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while( j > 0 && arr[j-1] > arr[j]){
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
        j--;
    }
  }
  return arr;
};

let arr = [24, 14, 45, 2, 99, 44];
console.log(insertionSort(arr));


