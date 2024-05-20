let arr = [1, 5, 5, 5, 1], k = 6;
let n =arr.length;
let hashMap = new Map, count = 0, compliment;
for(let i=0; i<n; i++) {
    compliment = k - arr[i];
    if(hashMap.has(compliment)) {
        count += hashMap.get(compliment);
    }
    
    hashMap.set(arr[i], (hashMap.get(arr[i]) || 0)+1);
}
console.log('Count..........', count);
//TC = O(n)
//SC = O(logn)

//Explanation
/*
So we have to get the pairs who sums upto k. According to the code we can take a haspMap to keep the track of the frequency of the
numbers.
for any element x to get k, we should have another element as k-x [x+k-x = k] in the array then only that pair will be countable
suppose in the given array [1,5,5,5,1], (0,1)(0,2)(0,3)(3,4) these are the pairs that sums upto k.
so if you subtract 6-1, you will get 5, but as hashMap will be empty for the first k-x then no need to increase the counter, just
insert the element in the hashMap. for the 1th element 5, 6-5 = 1, which is already there in hashMap, so as the combination has
occured once i.e(0,1) so the count should be 1. for 2nd element again 5 came, again 1 is there so for the combination (0,2), the
count should become 2.... same goes for 3rd element, count will become 3. as first 1 will be in pair 1 time only will all the 5's.
It cannot happen reverse as in (1,0)(2,0)(3,0) all these wont be countable because these are the same pairs and one pair will be 
countable only once. so just increment the count of the element to the frequency it came, i.e. 5 is 3 times, make it 3 in hashMap.
now for the 1st 1 all the combination with 3 5's will give count 3, here comes the 2nd 1, which will again combine with all the 3
i.e(1,4)(2,4)(3,4) all these are valid pairs, because 1 came second time. so when 1 came 2nd time it will check for 5(6-1) and it
will see that there is already 5 which came 3 times. so it will increment the count with the 5 frequency which should be the case.
because all 3 5's will form a pair with 2nd 1.
*/

