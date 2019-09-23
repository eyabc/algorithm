/* 예제 01 - if */
var num = 1;
if (num === 1) {
    console.log("num은 1과 같다");
}

/* 예제 02 - if-else */
var num = 0;
if (num === 1) {
    console.log("num은 1과 같다");
} else {
    console.log("num은 1과 같지 않다, num의 값은 " + num + "이다");
}

/* 예제 03 - if-else-if-else... */
var month = 5;
if (month === 1) {
    console.log("1월");
} else if (month === 2){
    console.log("2월");
} else if (month === 3){
    console.log("3월");
} else {
    console.log("month는 1월, 2월, 3월 중 어느 것도 아니다");
}

/* 예제 04 - switch */
var month = 5;
    switch(month) {
    case 1:
        console.log("1월");
    break;
    case 2:
        console.log("2월");
    break;
    case 3:
        console.log("3월");
    break;
    default:
        console.log("month는 1월, 2월, 3월 중 어느 것도 아니다");
}

/* 예제 05 - ternary operator - if..else */
if (num === 1){
    num--;
} else {
    num++;
}

//다음 코드와 같다
(num === 1) ? num-- : num++;