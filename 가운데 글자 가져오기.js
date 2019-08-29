function solution(s) {
    let a = Math.floor(s.length/2)
    if(s.length % 2 === 1) {
        return s.slice(a, a+1)
    } else {
       return s.slice(a-1, a+1)
    } // '홀' : '짝'
}

// - , - , JunYeong-Lee , 김지형 , 토니 외 60 명
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
console.log(solution('qwer'))