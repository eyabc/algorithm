function solution(num) {
    let times = 0
    while(num !== 1) {
        num = num % 2 ? num*3+1 : num/2
        times ++
        if(times === 500) return -1
    }
    return times
}

function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}

console.log(solution(16))