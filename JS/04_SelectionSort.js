const SelectionSort = (arr) => {
    let n = arr.length;
    for(let i = 0 ; i < n ; i++){
        let min_index = i;
        for(let j = i + 1 ; j < n ; j++){
            if(arr[j] < arr[min_index]){
                min_index = j;
            }
        }
        // Swapping after the inner loop has found the smallest element
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}

let arr = [24, 14, 45, 2, 99, 44];
console.log(SelectionSort(arr));
