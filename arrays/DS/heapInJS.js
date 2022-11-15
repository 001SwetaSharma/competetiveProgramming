//heap in javascript

//input arr = [5, 4, 3, 1, 2, 0];
//             0  1  2  3  4  5

let inputData = [];
process.stdin.on('data',function(chunk){
    inputData += chunk;
});

process.stdin.on('end',function(){
    inputData = inputData.split('\n');
    
    
});

class maxHeap{
    constructor(){
        this.values = [];
    }

    parent(index){
        return (Math.floor((index-1)/2));
    }

    leftChild(index){
        return (index*2)+1;
    }

    rightChild(index){
        return (index*2)+2;
    }

    isLeaf(index){
        return (
            (index >= Math.floor(this.values.length/2)) && (index <= this.values.length-1)
        )
    }

    swap(index1, index2){
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    add(element){
        this.values.push(element);
        this.heapifyUp(this.values.length-1);
    }

    heapifyUp(index){
        let currentIndex = index;
        let parentIndex = this.parent(index);
        
        while(currentIndex > 0 && this.values[index]>this.values[parentIndex]){
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    extractMax(){
        if(this.values.length < 1) return 'heap is empty';

        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index){
        //if the index is not leaf index
        if(!this.isLeaf(index)){
            
            let leftChildIndex = this.leftChild(index);
            let rightChildIndex = this.rightChild(index);

            largestIndex = index;

            if(this.values[largestIndex] < this.values[leftChildIndex]){
                largestIndex = leftChildIndex;
            }

            if(this.values[largestIndex] < this.values[rightChildIndex]){
                largestIndex = rightChildIndex;
            }

            //if the largestIndex is not the parent index
            if(largestIndex !== Index){
                this.swap(index,largestIndex);
                this.heapifyDown(largestIndex);
            }
        }
    }

    buildHeap(array){
        this.values = array;

        //since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
        for(let i = Math.floor((this.values.length)/2);i>=0;i--){
            this.heapifyDown(i);
        }
    }

    peek(){
        return this.values[0];
    }

    print(){
        let i=0;
        while(!this.isLeaf(i)){
            console.log(`Parent : ${this.values[i]}`);
            console.log(`left child : ${this.values[this.leftChild[i]]}`);
            console.log(`right child : ${this.values[this.rightChild(i)]}`);
            i++;
        }
    }
}