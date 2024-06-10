// Find the longest subarray that sums to K
let arr = [2, 3, 5, 1, 9], kk = 10, n = arr.length, len = 0;

//Approach - 1 [Naive Approach ]
for(let j=0; j<n; j++) {
    //console.log('for j....', j);
    let s = 0;
    for(k=j; k<n; k++) {
        s += arr[k];
        //console.log('for k....', k);
        //console.log('for kk....', kk);
        if(s === kk) {
            len = Math.max(len, k-j+1);
        }
        //console.log('for len....', len);
    }
}
console.log('for len....', len);
console.log("-----------------------------------------------------------------------");

/*
Largest Subarray with given Sum K
arr = [2,3,5,1,9,2,2,2,2,2], k-10, O/P = 5 [2,2,2,2,2]
*/

/*
Approach-2 - we need to find out the largest sub-array which sums upto k. This sub-array can be anywhere in the entire array
[ front, mid, end]
1. first we need to find the 1st subarray
2 conditions can happen here :-
    a. we will get the sub-array with summing up the elements, so ek aisa index aayega jaha pe sum karne se k ki value aa jayegi.
       yeh toh starting case ho gaya.
    b. we will get a subarray in middle/end, iska matlab jo bhi humbers hai starting mein woh sum karne se either not equal to K
        or greater than K aata hai

    toh is case mein hum yeh dekhenge ki koi beech mein aisa subarray aa raha hai jiska sum K hai
    toh woh kaise pata chalega.... sabse pehle agar sum jada ho gaya hai matlab ki humey sum se K ko minus kar k result chck krna hga

    sum se K ko minus q karenge because ho sakta hai ki Sum bada ho K se, ho sakta hai ni bhi ho, but probability bade hone ki hai
    because sum karoge toh number increase hoga na unless an until is +ve + -ve number.
    lets take bada hai toh phir hum yeh dekhna hoga ki kahin pe K aa sakta hai kya sum mein because aisa ho sakta hai ki pehla ka 
    numbers bada hai and it has crossed sum K. toh humko dekhna hoga ki beech ka koi numbers hai jo yeh sum de sakta hai.
    Woh kaise check karenge jo bhi bada sum aaya hai usme se K nikal denge.
    ab yeh kaise pata chalega ki baki ka minus kiya hua number valid hai ya ni. so iske liye humko track rakhna padega.
    jitna bhi sum aa raha hai unko  hashTable mein rakhna hoga for tracking purpose.

    toh bada sum se jab K ko minus karenge toh jo chota sum hai agar woh hastable mein hai then K ka subarray present hai
    chotasum = sum karte karte bada sum banta hai na then K ko minus karne se agar koi number aisa milta hai jo chota sum hai then K 
    hai.

*/
arr = [ -13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6], n = arr.length, k = 15, len=0;
let hashMap = new Map(), sum = 0, rem;
for(let i=0; i<arr.length; i++) {
    sum += arr[i];

    if(sum === k) len = i+1;

    rem = sum - k;
    // so basically if there is any previous subarray exists which sums to kk then the current index should subtract the index
    // which is stored in hashMap for the last existing subarray and this way we will get the length of the new sub-array
    // which sums to k, 0-x is having length x... in order to get kk, 1 sub array should have x - kk, if it exists in hashMap
    // then we can get the index of x-kk, and subtract from the current index(i) of new subarray which sums to kk
    if(hashMap.has(rem)) len = Math.max(len, i-hashMap.get(rem));

    if(!hashMap.has(sum)) hashMap.set(sum, i);
}

console.log('for len....', len);


/*
    Approach - 3 [Two-Pointers] [only for positive elements]
    so we will keep 2-pointers(i,j) at the starting, and we will keep on doing the sum by moving j ahead.
    once we reach the sum, then we calculate the length of the subarray by subtracting i by j(j-i). now, we will increment and definitely sum will increase.
    so once it got increased not how much we do sum the sum will get incremented only. so no point of incrementing more, rather we can shrink from starting to get
    the sum <= K.
    so we will subtract the value of i from sum and keep on increment i unless an until the sum value becomes <=K.
    
    2 conditions will happen on subtracting ith value from sum:-
    
    sum becomes equal :- aisa bhi ho sakta hai ki beech mein koi aisa sub-array hai jiska sum K hai and length previos length se jada ho
    yeh possible kaise hai?
    suppose a+b+c+d = K, and then a+b+c+d+e >k, the we will first subtract a from sum i.e. a+b+c+d - a, so now there can be possibility that this sum is also =K
    e.g. [1,2,3,1,1,1,1,3,3], k=6, toh isme 1+2+3 = 6, phir 1+2+3+1 = 7, ab toh bada ho gaya, toh minus karenge pehla value jo ki 7 - 1 = 6, again 6 ho gaya
    matlab ki 2 subarray aaya jo K de raha tha, but dono ka length equal tha toh jo first length hai wohi consider hoga unless an until koi bada length na aa jaye.
    subtraction tab tak chalta rahega jab tak sum ki value k se kam na ho jayega, the moment it is less then we will stop subtracting and j ko increment karenege
    sum increase karne k liye
    q ki chota number se sum aayega ni toh number increase karenge so that sum K se equal ya greater ho jaye and then again we will shrink once sum >k
    jaise hi sum bada ho jata hai K se toh j will not increment only i will increment and uska value sum se subtract karenge

    last condition :- sum is less than K then we will keep on incrementing j and keep on adding jth value to the sum

*/

/* we will take the first number as sum, and we will check for all the conditions <, ==, >

if it falls under <
then increment j and add another number

if is equal to j
then take the lenth and increment another number so that it becomes greater than K

if is greater than K
then decrement ith value from K and keep on incrementing i
*/
len = 0, arr = [1,2,3,1,1,1,1,3,3], sum = arr[0], n = arr.length, k=6;
let j=0, i=0;
while(j < n) {
    if(sum < k) {
        ++j;
        sum += arr[j];
    }

    if(sum > k) {
        sum -= arr[i];
        ++i;
    } else if(sum === k) {
        len = Math.max(len, j-i+1);
        ++j;
        if(j< n) sum += arr[j];
        
    }
}

console.log('printing len...', len);