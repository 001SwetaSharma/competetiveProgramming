/*Check if Array Is Sorted and Rotated

input1 = [3,4,5,1,2];
input2 = [2,1,3,4];
input3 = [1,2,3];

Theory :- 
If an array is rotated there will be atleast 1 pair in which arr[i] > arr[i+1] and the first element will be less than last element
because if the array is rotated then the larger number will be in front so first element cannot be less than last elements.
if it is less than last element then there can be 2 cases, either the array is sorted and if the array is sorted then there will 
be no pairs which can be arr[i] > arr[i+1], or the array is not an array which can be sorted.

[for reference]
No of maximum rotation that can be performed is length of the number of elements of the array so that it can fully come back
to its original positiion.
if after rotating that many times still the array is unsorted then that array cannot be sorted.

*/


let nums = [2,1,3,4], order = 0;

for(let i=0; i<nums.length-1; i++) {
    if(nums[i] > nums[i+1]){
        ++order;
    }
}

nums[0] < nums[nums.length-1] && order++;

console.log(order<2);

