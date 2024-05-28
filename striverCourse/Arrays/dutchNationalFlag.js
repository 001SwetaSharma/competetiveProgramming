let arr = [0, 2, 1, 2, 0, 1];
let low = 0, mid = 0, high = arr.length-1, temp;

while(mid <= high){
    if(arr[mid] === 1) ++mid;
    else if(arr[mid] === 0) {
        temp = arr[mid];
        arr[mid] = arr[low];
        arr[low] = temp;

        ++mid; ++low;
    } else {
        temp = arr[mid];
        arr[mid] = arr[high];
        arr[high] = temp;

        --high;
    }
}

console.log('Printing Array....::', arr);
//Time complexity = Linear