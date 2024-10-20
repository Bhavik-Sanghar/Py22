
def insertionSort(arr):
    for i in range(len(arr)):
        j = i
        while(j > 0 and arr[j] < arr[j-1]):
            arr[j] , arr[j-1] = arr[j-1] , arr[j]
            j -= 1
    return arr

arr = [24, 14, 45, 2, 99, 44]

print(insertionSort(arr))

