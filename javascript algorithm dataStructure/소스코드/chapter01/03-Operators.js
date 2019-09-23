/* 산술 연산자 */
var num = 0;

console.log('num의 값은 ' + num);

num = num + 2;

console.log('새로운 num의 값은 ' + num);

num = num * 3;

console.log('새로운 num의 값은 ' + num);

num = num / 2;

console.log('새로운 num의 값은 ' + num);

num++;

num--;

console.log('새로운 num의 값은 ' + num);

console.log('num을 2로 나눈 나머지는 ' + (num % 2));


/* 할당 연산자 */
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('새로운 num의 값은 ' + num);

/* 할당 연산자 */
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

/* 논리 연산자 */
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

/* 비트 연산자 */
console.log('5 & 1:', (5 & 1)); //0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', (5 | 1)); //0101 | 0001 (result 0101 / 5)
console.log('~ 5:', (~5)); //~0101 (result 1010 / 10)
console.log('5 ^ 1:', (5 ^ 1)); //0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', (5 << 1)); //0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', (5 >> 1)); //0101 >> 1 (result 0010 / 2)

/* typeOf */
console.log('typeof num:', typeof num);
console.log('typeof Acorn:', typeof 'Acorn');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'});

/* delete */
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); //Object {name: "John"}