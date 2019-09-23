//Packt == true

console.log('Acorn' ? true : false);
//outputs true

console.log('Acorn' == true);
//1 - converts Boolean using toNumber
//'Acorn' == 1
//2 - converts String using toNumber
//NaN == 1
//outputs false

console.log('Acorn' == false);
//1 - converts Boolean using toNumber
//'Acorn' == 0
//2 - converts String using toNumber
//NaN == 0
//outputs false

console.log([0] == true);
//1 - converts Boolean using toNumber
//[0] == 1
//2 - converts Object using toPrimitive
//2.1 - [0].valueOf() is not primitive
//2.2 - [0].toString is 0
//0 == 1
//outputs false

//******************************* ===
console.log('Acorn' === true); //false

console.log('Acorn' === 'Acorn'); //true

var person1 = {name:'John'};
var person2 = {name:'John'};
console.log(person1 === person2); //false, 다른 객체이므로