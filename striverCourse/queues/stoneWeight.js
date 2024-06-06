let stones = [2,7,4,1,8,1];
const queue = new MaxPriorityQueue();

for(stone of stones) queue.enqueue(stone);

while(queue.size > 1) {
    let first = queue.dequeue();
    let second = queue.dequeue();

    if(first !== second) {
        queue.enqueue(first-second);
    }
}

let result = queue.size === 0 ? 0 : queue.front().element;
console.log('for result :: ', result);