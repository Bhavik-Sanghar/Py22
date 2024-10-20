const binarysearch = (arr, k) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) { // Change from low < high to low <= high
        let mid = Math.floor((low + high) / 2); // Move mid calculation inside the loop

        if (arr[mid] === k) {
            return mid; // Return the index if found
        } else if (arr[mid] > k) {
            high = mid - 1; // Search in the left half
        } else {
            low = mid + 1; // Search in the right half
        }
    }

    return -1; // Return -1 if the element is not found
};

const binarysearch2 = (arr, k,start,end) => {
    if(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === k){
            return mid;
        }
        else if(arr[mid] > k){
            return binarysearch2(arr,k,start,mid-1);
        }
        else{
            return binarysearch2(arr,k,mid+1,end);
        }
    }
    return -1;
}


const arr = [2, 3, 4, 10, 40];
const k = 10;

console.log(binarysearch(arr, k)); // Output: 3
console.log(binarysearch(arr,k,0,arr.length))