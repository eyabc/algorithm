function solution1(n) {
    var answer = n;
    let i = 2
    if (n>1) {
        answer += 1
        for(;i<n;i++) {
            n % i === 0 ? answer +=i : ''
        }
    }
    return answer;
}


    
console.log(solution(12))