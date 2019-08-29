function solution(a, b) {
    var answer = 0;
    let i = a
    if (a - b < 0) {
        while(i <= b) {
            answer += i 
            i++
        }
    } else {
        while(i >= b) {
            answer += i
            i--
        }
    } 

    return answer;
}

function solution2(a, b) {
    var answer = 0;
    let arr = [a, b]
    arr.sort((a,b)=> a-b )
    i = arr[0]
    while(i <= arr[1]) {
        answer += i 
        i++
    }

    return answer;
}

// Heejune Wang , - , -
function adder(a, b){
    var result = 0
    //함수를 완성하세요

    return (a+b)*(Math.abs(b-a)+1)/2;
}
// n(n+1)/2 - k(k+1)/2 = 1/2(n^2+n-k^2-k) = (n^2-k^2+n-k)/2 =  

console.log((3+5)*(Math.abs(5-3)+1)/2)

// 
function adder(a, b){
    var result = (a<b)?a:b;
    while(a!=b){
      result += (a<b)?++a:++b;
    }    
    return result;
}

/*
var nStart = new Date().getTime();      //시작시간 체크(단위 ms)
console.log(solution2(7,5))
// console.log(solution(7,3))
var nEnd =  new Date().getTime();      //종료시간 체크(단위 ms)

var nDiff = nEnd - nStart;      //두 시간차 계산(단위 ms)

console.log(nDiff + "ms");
*/