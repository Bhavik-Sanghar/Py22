
def bubblesort(arr):
    n = len(arr)
    for i in range(len(arr)):
        for j in range(0 , n-i-1):
            if(arr[j] > arr[j+1]):
                arr[j],arr[j+1] = arr[j+1],arr[j]
    return arr   
  
arr2 = [24,14,45,2,99,44]
print(bubblesort(arr2))       