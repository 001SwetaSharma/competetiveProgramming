let arr = [5, 1, 9, 2, 0, 5, 5, 8];
mergeSort(arr, 0, arr.length-1);
console.log('After merge sort...........', arr);

function mergeSort(arr, low, high) {
    if(low >= high) return;

    let mid = Math.floor((low+high)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, high, mid);
}


function merge(arr, low, high, mid) {
    let left = low, right = mid+1, temp = [];
    while(left<=mid && right<=high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            ++left;
        } else {
            temp.push(arr[right]);
            ++right;
        }
    }

    while(left <= mid) {
        temp.push(arr[left]);
        ++left;
    }

    while(right <= high) {
        temp.push(arr[right]);
        ++right;
    }

    for(let i=low; i<=high; i++) {
        arr[i] = temp[i-low];
    }
}