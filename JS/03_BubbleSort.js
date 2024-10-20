arr = [24,14,45,2,99,44];
arr2 = [1,2,3,4,5];


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        //Check if Sorted 
        let isSorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSorted = false;
            }
        }
        console.log("Pass" + i)
        if(isSorted){
            break;
        }
    }
    return arr;
}

const buubleSort2 = (arr,n) => {
    if(n === 0){
        return arr;
    }
    for(let i = 0 ; i < n ; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return buubleSort2(arr,n-1)
}


console.log(buubleSort2(arr,arr.length));
// console.log(bubbleSort(arr))
// console.log(bubbleSort(arr2));

let myDate = new Date();
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString("defult" , {
    weekday : "long",
    day : "2-digit",
    month : "long",
    year : "numeric"
}))
console.log(myDate.toISOString())

