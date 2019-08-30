function solution(num) {
    let times = 0
    while(num !== 1) {
        num = num % 2 ? num*3+1 : num/2
        times ++
        if(times === 500) return -1
    }
    return times
}
console.log(solution(16))