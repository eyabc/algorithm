//*** concat
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers);

//console.log(numbers);

//*** every, some
var isEven = function (x) {
    //x가 2의 배수면 true 리턴
    console.log(x);
    return (x % 2 == 0) ? true : false;
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.every(isEven); //함수를 단 한번만 실행

console.log('---');

numbers.some(isEven); //함수를 두 번 실행

numbers.forEach(function(x){
    console.log((x % 2 == 0));
});

console.log(numbers.reverse());

//console.log('*** filter ***');

var evenNumbers = numbers.filter(isEven);

//console.log(evenNumbers);

console.log('*** map ***');

//console.log(numbers.map(isEven));

console.log(numbers.reduce(function(previous, current, index){
    return previous + current;
}));

console.log(numbers.sort());

console.log(numbers.sort(function(a,b){
    return a-b;
}));

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    //a는 b와 같다
    return 0;
}

console.log(numbers.sort(compare));

//정렬 객체

var friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
];

function comparePerson(a, b){
    if (a.age < b.age){
        return -1
    }
    if (a.age > b.age){
        return 1
    }
    return 0;
}

console.log(friends.sort(comparePerson));

var names =['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

console.log(names.sort(function(a, b){
    if (a.toLowerCase() < b.toLowerCase()){
        return -1
    }
    if (a.toLowerCase() > b.toLowerCase()){
        return 1
    }
    return 0;
}));

var names2 = ['Ma챔ve', 'Maeve'];
console.log(names2.sort(function(a, b){
    return a.localeCompare(b);
}));

//*** toString
console.log(numbers.toString());

console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));

var numbersString = numbers.join('-');
console.log(numbersString);