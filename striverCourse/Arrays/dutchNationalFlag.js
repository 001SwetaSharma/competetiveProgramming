// Dutch National Flag algorithm
/*
    It works with 3 pointers :- low, mid & high.
    it is a very good algorithm to sort an array who is only having 3 variant numbers, as in a,b & c.
    It gives a linear time complexity and a constant space complexity

    How it works
    So lets assume that 
    from 0 - low-1 all the numbers should be 0
    from low - mid-1 all the numbers should be 1
    from mid - high all the numbers are random and unsorted
    from high+1 - n-1 all the numers are 2

    Now, can we say that from 0-mid-1 all the elements are sorted? Yes we can right, if 0-low-1 contains only 0 and low-mid-1 contants
    only 1 then it is sorted right.

    we can also say that last part which is high+1-n-1 is also sorted as it contains only 2

    Now we are left out with mid-high which contains random values(0|1|2) which is unsorted.
    Our task is to sort this unsorted array then we can that our array is fully sorted
    suppose you have an array of [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0]

    can we say that we can put mid at 0 as the entire array is unsorted, we can right. so mid = 0.
    low = 0, because it contains all the zero elements and it was from 0-low-1 so 0-low-1 in this array is nothing, which is still
    valid, in the further execution we will take out 0-low-1.
    high = n-1 because from mid to high there is unsorted array, as entire array is unsorted so can keep high as n-1

    so mid = 0, low = 0, high = arr.length-1
    there can be 3 cases in this algo :- arr[mid] = 0, arr[mid] = 1, arr[mid] = 2
    
    First case :- arr[mid] = 0, swap(arr[mid], low), bring the 0 to the left side of the array in the block 0-low-1 because all the 0
    has to be in the left side. so as you have swapped mid with low, so low++ and mid++. Low++ because low start with the array part 
    which is having 1 so now we have to increment low as we have swapped 0 to low.
    mid++ why because 1 part of the mid element has been sorted so nnow we will see the next element of mid

    Second case :- arr[mid] = 1, then simply increment mid [++mid] why because from low to m-1 only 1 is there, and now if already
    get mid as 1 then it should be there in that low-mid-1 block. so we will just increment mid for the next unsorted element.

    Third case :- arr[mid] = 2, swap(arr[mid], high), bring 2 to the right side of the array so that it can get accumulated in the
    right part of the array [high+1 - n-1] which only contains 2. as we have swapped mid with high now high is having sorted elements
    so can we say it will come inside high+1 - n-1 block, we can say right. as it went to the high+1 - n-1 block, we can decrement
    high, i.e. --high. whatever the elements of the high just swap mid with high if the mid = 2, then again we will check for the
    swapped element in the mid.
     the remanining elements mid - high is having unsorted elements.

    This process will continue till mid <= high, it will cover each and every element of the unsorted array.

    lets get back to the example [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0]
    low = 0, mid = 0, high = arr.length-1;
    for arr[0] = 0, arr[mid] = 0, then swap[arr[mid], arr[low]], as low and mid both are 0, so no changes, low++, mid++
    low = 1, mid = 1

    - for arr[1] = 1, arr[mid] = 1, ++mid, low = 1, mid = 2, high = 10
    - for arr[2] = 1, arr[mid] = 1, ++mid, low = 1, mid = 3, high = 10
    - for arr[3] = 0, arr[mid] = 0, swap[arr[mid], arr[low]], low=1, mid=3 => [0,0,1,1,1,2,1,2,0,0,0], low++, mid++
        low = 2, mid=4, high = 10
    - for arr[4] = 1, arr[mid] = 1, ++mid, low = 2, mid = 5, high = 10 
    - for arr[5] = 2, arr[mid] = 2, swap[arr[mid], arr[high]], high = 10, mid=5 => [0,0,1,1,1,0,1,2,0,0,2], high--
        now if you see from index 0-1 every element is 0, so can we say that it is in 0-low-1 block, yes it is.
        from index 2-4 all the elements are in low-mid-1 block as every element is 1 and from high+1[10] - n-1 every element is 2[10]
        unsorted elements are from index 5-9 that it is in mid+1 - high block
        low = 2, mid=5, high = 9
    - for arr[5] = 0, as mid is same 5, arr[mid] = 0, swap[arr[mid], arr[low]], low=2, mid=5 => [0,0,0,1,1,1,1,2,0,0,2], low++, mid++
        low = 3, mid=6, high=9
    - for arr[6] = 1, arr[mid] = 1, ++mid, low = 3, mid = 7, high = 9
    - for arr[7] = 2, arr[mid] = 2, swap[arr[mid], arr[high]], high = 9, mid=7 => [0,0,0,1,1,1,1,0,0,2,2], high--
        low = 3, mid = 7, high =8
    - for arr[7] = 0, as mid is same 7, arr[mid] = 0, swap[arr[mid], arr[low]], low=3, mid=7 => [0,0,0,0,1,1,1,1,0,2,2], low++, mid++
        low = 4, mid=8, high=8
    - for arr[8] = 0, arr[mid] = 0, swap[arr[mid], arr[low]], low=4, mid=8 => [0,0,0,0,0,1,1,1,1,2,2], low++, mid++
        low = 5, mid=9, high=8
        as mid is greater than high so the loop will be terminated
    
    now you can see entire array is sorted and all the zeros are in 0-low-1 block[0-4], 1 is in low-mid-1[5-8] block and 2 is in 
    high+1 - n-1 block [9-10]
*/

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
//Time complexity = O(n)
//Space complexity = O(1)
