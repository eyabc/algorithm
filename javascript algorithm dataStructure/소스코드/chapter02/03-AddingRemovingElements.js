function printArray(myArray) {
    for (var i=0; i<myArray.length; i++){
        console.log(myArray[i]);
    }
}

var numbers = [0,1,2,3,4,5,6,7,8,9];

//numbers 배열에 새 원소 추가
numbers[numbers.length] = 10;

numbers.push(11);

numbers.push(12, 13);

//printArray(numbers);

//첫 번째 인덱스에 수작업으로 삽입
for (var i=numbers.length; i>=0; i--){
    numbers[i] = numbers[i-1];
}

numbers[0] = -1;

//printArray(numbers);

//unshift 메소드 사용
numbers.unshift(-2);

//printArray(numbers);

numbers.unshift(-4, -3);

//printArray(numbers);

//**** Removing elements

numbers.pop();

//첫 번째 인덱스를 수작업으로 삭제
/*for (var i=0; i<numbers.length; i++){
    numbers[i] = numbers[i+1];
}*/

printArray(numbers);

console.log(numbers.length);

//shift 메소드 사용
numbers.shift();

printArray(numbers);
console.log(numbers.length);

//**** 배열 중간, 또는 임의의 위치에 원소를 삽입/삭제
//splice 메소드 - 파라미터(인덱스, 몇 개의 원소를 삭제할 것인가, 원소1, 원소2, ...)
numbers.splice(5,3);

console.log('----');

printArray(numbers);

numbers.splice(5,0,2,3,4);

console.log('----');

printArray(numbers);

console.log('----');

numbers.splice(5,3,2,3,4);

printArray(numbers);