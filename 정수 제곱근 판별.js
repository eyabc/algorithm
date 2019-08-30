function solution(n) {
    let a = Math.sqrt(n)
    return Math.floor(a) - a < 0 ? -1 : (a+1)*(a+1) ;
}

console.log(solution(121))