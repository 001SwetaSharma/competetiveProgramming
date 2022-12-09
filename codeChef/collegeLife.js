//Question = https://www.codechef.com/problems/COLGLF2

let inputData = '';
process.stdin.on('data',function(chunk){
   inputData += chunk; 
});

process.stdin.on('end',function(){
   inputData = inputData.split('\n');
   let testCases = parseInt(inputData.shift());
   let line=0;
   
   while(testCases--){
       let seasons = parseInt(inputData[line++]);
       let seasonsIntroMin = inputData[line++].split(' ').map(Number);
       let totalMins = 0;
       
       for(let i=0;i<seasons;i++){
            let episodeAndDuration = inputData[line++].split(' ').map(Number);
            episodeAndDuration.shift();
            let perSeasonMins = episodeAndDuration.reduce(function(acc,curr,index){
                if(index !=0){
                    curr = curr - seasonsIntroMin[i];   
                }
                acc = acc + curr;
                return acc;
            });
            
            totalMins += perSeasonMins;
       }
       console.log(totalMins);
       
   }
});