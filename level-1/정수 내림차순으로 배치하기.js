function solution(n) {
   
    var answer =  n.toString().split('').sort().reverse().join('')/1
    return answer;
}

console.log(solution(118372))