var tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log('********* 중위 순회 ***********');
function printNode(value){
    console.log(value);
}
tree.inOrderTraverse(printNode);

console.log('********* 전위 순회 ***********');
tree.preOrderTraverse(printNode);

console.log('********* 후위 순회 ***********');
tree.postOrderTraverse(printNode);


console.log('********* 최대/최소값 ***********');
console.log(tree.max());
console.log(tree.min());
console.log(tree.search(1) ? '키 1을 찾았습니다.' : '키 1을 찾지 못했습니다.');
console.log(tree.search(8) ? '키 8을 찾았습니다.' : '키 8을 찾지 못했습니다.');


console.log('********* 삭제 6 ***********');
tree.remove(6);
tree.inOrderTraverse(printNode);

console.log('********* 삭제 5 ***********');
tree.remove(5);
tree.inOrderTraverse(printNode);

console.log('********* 삭제 15 ***********');
tree.remove(15);
tree.inOrderTraverse(printNode);

console.log('********* 가공되지 않은 자료 구조 ***********');
console.log(tree.getRoot());