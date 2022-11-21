//Find the Union and Intersection of the two sorted arrays

let inputArr1 = [-1,2,4,7,9];
let inputArr2 = [0,2,5];
let i=0,j=0,unionArray=[];

//Union
while(i<inputArr1.length || j<inputArr2.length){
    if(i<inputArr1.length && j<inputArr2.length){
        if(inputArr1[i] == inputArr2[j]){
            unionArray.push(inputArr1[i]);
        }else{
            if(inputArr1[i]>inputArr2[j]){
                unionArray.push(inputArr2[j]);
                unionArray.push(inputArr1[i]);
            }else{
                unionArray.push(inputArr1[i]);
                unionArray.push(inputArr2[j]);
            }
            
        }
        ++i;
        ++j;
    }else if(j == inputArr2.length && i < inputArr1.length){
        unionArray.push(inputArr1[i]);
        ++i;
    }else if(i == inputArr1.length && j < inputArr2.length){
        unionArray.push(inputArr1[j]);
        ++j;
    }
    
}