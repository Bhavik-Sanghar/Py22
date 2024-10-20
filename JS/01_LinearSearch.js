let arr1 = [1,2,3,4,5,6,8,8,2,4,5];
let x = 6;

const linearsearch = (arr,k) => {
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === k ){
            return i
        }
    }
}

console.log(`The element ${x} on index ${linearsearch(arr1,x)}`)