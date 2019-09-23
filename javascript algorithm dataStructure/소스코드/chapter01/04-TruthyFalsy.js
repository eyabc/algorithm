function testTruthy(val){
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true); //true
testTruthy(false); //false
testTruthy(new Boolean(false)); //true (객체는 항상 true)

testTruthy(''); //false
testTruthy('Acorn'); //true
testTruthy(new String('')); //true (객체는 항상 true)

testTruthy(1); //true
testTruthy(-1); //true
testTruthy(NaN); //false
testTruthy(new Number(NaN)); //true (객체는 항상 true)

testTruthy({}); //true (객체는 항상 true)

var obj = {name:'John'};
testTruthy(obj); //true
testTruthy(obj.name); //true
testTruthy(obj.age); //age (age란 프로퍼티는 존재하지 않음)