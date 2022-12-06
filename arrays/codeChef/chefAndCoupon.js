//Question = https://www.codechef.com/problems/COUPON2

let inputData = '';
process.stdin.on('data',function(chunk){
    inputData += chunk;
})

process.stdin.on('end',function(){
    inputData = inputData.split('\n');
    let testCases = parseInt(inputData.shift());
    let line=0;
    
    while(testCases--){
       let deliverCoupon = inputData[line++].split(' ').map(Number);
       let deliveryCharge = deliverCoupon[0];
       let coupon = deliverCoupon[1];
       
       let firstDayCharge = inputData[line++].split(' ').map(Number);
       let secondDayCharge = inputData[line++].split(' ').map(Number);
       
       let firstDaySum = firstDayCharge.reduce(function(acc,curr){
          acc = acc + curr;
          return acc;
       });
       
       let secondDaySum = secondDayCharge.reduce(function(acc,curr){
          acc = acc + curr;
          return acc;
       });
       
       let chargeWithoutCoupon = firstDaySum + secondDaySum + deliveryCharge*2;
       
      if(firstDaySum < 150){
           coupon += deliveryCharge;
       }if(secondDaySum <150){
           coupon += deliveryCharge;
       }
       
       let chargeWithCoupon = firstDaySum + secondDaySum + coupon;
       
       if(chargeWithoutCoupon <= chargeWithCoupon){
           console.log("NO");
       }else{
           console.log("YES");
       }
    }
});