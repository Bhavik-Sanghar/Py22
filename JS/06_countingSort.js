// Pseudocode:
// for x in input:
//  count[key(x)] += 1
// total = 0
// for i in range(k):
//  oldCount = count[i]
//  count[i] = total
//  total += oldCount
// GoalKicker.com – Algorithms Notes for Professionals 163
// for x in input:
//  output[count[key(x)]] = x
//  count[key(x)] += 1
// return output

const countingSort = (arr) =>{
    let max = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    let count = new Array(max+1).fill(0);
    for(let i = 0 ; i < arr.length ; i++){
        count[arr[i]]++;
    }

    for(let i = 1 ; i < count.length ; i++){
        count[i] += count[i-1];
    }

    let output = new Array(arr.length).fill(0)

    for(let j = arr.length - 1 ; j >= 0 ; j--){
        output[count[arr[j]]-1] = arr[j];
        count[arr[j]]--;
    }

    return output;
}
    
arr = [24,14,45,2,99,44];
console.log(countingSort(arr));