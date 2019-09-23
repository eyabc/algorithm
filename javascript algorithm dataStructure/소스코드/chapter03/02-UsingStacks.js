var stack = new Stack();
 console.log(stack.isEmpty()); //결과는 true
 stack.push(5);
 stack.push(8);
 console.log(stack.peek()); // 결과는 8
 stack.push(11);
 console.log(stack.size()); // 결과는 3
 console.log(stack.isEmpty()); //결과는 false
 stack.push(15);
 stack.pop();
 stack.pop();
 console.log(stack.size()); // 결과는 2
 stack.print(); // 결과는 [5, 8]