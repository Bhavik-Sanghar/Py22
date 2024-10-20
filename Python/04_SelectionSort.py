arr = [24, 14, 45, 2, 99, 44]

def SelectionSort(arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        if min_index != i:
            print("Array Befor Change Min Value: " , arr)
            min_value = arr.pop(min_index)
            print("Min Value is : " , min_value)
            arr.insert(i, min_value)
            print("Array After Change Min Value: " , arr)
    return arr

print(SelectionSort(arr))