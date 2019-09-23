var queue = new Queue();
console.log(queue.isEmpty()); //결과는 true
queue.enqueue("John");
queue.enqueue("Jack");
queue.print();
queue.enqueue("Camila");
queue.print();
console.log(queue.size()); //결과는 3
console.log(queue.isEmpty()); //결과는 false
queue.dequeue();
queue.dequeue();
queue.print();