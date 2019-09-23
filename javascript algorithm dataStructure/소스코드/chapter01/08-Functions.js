function sayHello() {
    console.log('안녕하세요!');
}

sayHello();

/* 파라미터를 받는 함수 */
function output(text) {
    console.log(text);
}

output('안녕하세요!');

output('안녕하세요!', '여러분');

output();

/* return문이 있는 함수 */
function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(1,2);
output(result);




