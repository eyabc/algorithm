// 정수 num이 짝수일 경우 Even을 반환하고 홀수인 경우 Odd를 반환
function solution(num) {
    var answer = '';
    return num % 2 ? "Odd" : "Even"
}

function evenOrOdd(num) {
    var result = 'Even';
    if(num < 0) return false;
    if(num % 2 == 1) result = 'Odd';
    return result;
}