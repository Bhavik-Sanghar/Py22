public class Sorting {

    public static void linearSearch(int[] arr, int target) {
        int index = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            System.out.println("element found on " + index + " index");
        } else {
            System.out.println("element is not in array");
        }
    }

    public static void binarySearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;
        int index = -1;

        // Binary Search loop
        while (low <= high) {
            int mid = low + (high - low) / 2; // Avoids potential overflow

            if (arr[mid] == target) {
                index = mid; // Target found, store the index
                break; // Exit loop once target is found
            } else if (arr[mid] > target) {
                high = mid - 1; // Search in the left half
            } else {
                low = mid + 1; // Search in the right half
            }
        }

        // Check result and print appropriate message
        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found in the array.");
        }
    }

    public static int binarySearch2(int[] arr, int start, int end, int target) {
        int mid = (start + end) / 2;
        if (start > end) {
            return -1;
        } else if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            return binarySearch2(arr, start, mid - 1, target);
        } else {
            return binarySearch2(arr, mid + 1, end, target);
        }
    }

    public static void printArr(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void swap(int[] arr, int a, int b) {
        int temp = arr[b];
        arr[b] = arr[a];
        arr[a] = temp;
    }

    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min = i;
            for (int j = i; j < n; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            // int temp = arr[min];
            // arr[min] = arr[i];
            // arr[i] = temp;

            swap(arr, min, i);
        }
    }

    public static void BubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
            }
        }
    }

    public static void BubbleSort2(int[] arr) {
        int n = arr.length;
        boolean isSorted = true;
        for (int i = n - 1; i >= 0; i--) {
            for (int j = 0; j <= i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    isSorted = false;
                }
            }
            if (isSorted) {
                break;
            }
        }
    }

    // BuubleSort3 is use of recurion
    public static void BubbleSort3(int[] arr, int n) {
        if (n == 0)
            return;
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        BubbleSort3(arr, n - 1);
    }

    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            int j = i;
            while (j > 0 && arr[j] < arr[j - 1]) {
                swap(arr, j - 1, j);
                j--;
            }
        }
    }

    public static void insertionSort2(int[] arr, int i, int n) {
        if (i == n)
            return;

        int j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(arr, j - 1, j);
            j--;
        }
        insertionSort2(arr, i + 1, n);
    }

    public static void QuickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = Part(arr, low, high);
            QuickSort(arr, pivotIndex + 1, high);
            QuickSort(arr, low, pivotIndex - 1);
        }
    }

    public static int Part(int[] arr, int low, int high) {
        int i = low - 1;
        int j = high - 1;
        int pivot = arr[high];
        while (i <= j) {
            if (arr[i] > pivot) {
                i++;
            } else if (arr[j] < pivot) {
                j--;
            }
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return i + 1;
    }

    public static int[] countSort(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        int[] count = new int[max + 1];
        for (int i = 0; i < arr.length; i++) {
            count[arr[i]]++;
        }

        for (int i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }

        int[] ans = new int[arr.length];
        for (int i = arr.length - 1; i >= 0; i--) {
            ans[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }
        return ans;
    }

    public static void main(String[] args) {
        // int[] arr2 = { 15, 46, 9, 22, 7, 58 };
        // linearSearch(arr2, 9);

        // int arr3[] = { 1, 2, 5, 7, 8, 9, 15, 66, 99 };
        // binarySearch(arr3, 7);
        // System.out.println(binarySearch2(arr3, 0,arr3.length -1 , 0));

        int[] arr = { 29, 22, 35, 4, 1, 21, 56 };
        printArr(arr);
        // // selectionSort(arr);
        // // BubbleSort(arr);
        // // BubbleSort2(arr);
        // // insertionSort(arr);
        // insertionSort2(arr, 0, arr.length);
        // QuickSort(arr, 1, arr.length-1);

        printArr(countSort(arr));

    }
}
