var daysOfWeek = [];

var daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

var daysOfWeek = new Array(); //{1}

var daysOfWeek = new Array(7); //{2}

console.log(daysOfWeek.length);

var daysOfWeek = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'); //{3}

for (var i=0; i<daysOfWeek.length; i++){
    console.log(daysOfWeek[i]);
}

//console.table(daysOfWeek);

//피보나치 수열
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
var fibonacci = []; //{1}
fibonacci[1] = 1; //{2}
fibonacci[2] = 1; //{3}

for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; ////{4}
}

for(var i = 1; i<fibonacci.length; i++){ //{5}
    console.log(fibonacci[i]);           //{6}
}

//{5}, {6} 대신에 간단히 다음과 같이 써도 된다
console.log(fibonacci);
