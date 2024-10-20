arr = [ 2, 3, 4, 10, 40 ]
k = 10


def Bsearch(arr,low,high,x):
    while low <= high:
        mid = (high + low) // 2
        # Check if x is present at mid
        if arr[mid] == x:
            return mid
        # If x is smaller, ignore the right half
        elif arr[mid] > x:
            high = mid-1
        # If x is larger, ignore the left half
        else:
            low = mid+1
index = Bsearch(arr, 0, len(arr) - 1, k)
print(f"Index is: {index}")