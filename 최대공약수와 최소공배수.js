function solution(n, m) {
    let i = 2, max = 1;
    if(n === m) {
        return [n, n]
    }
    while(i<n+m) {
        (n % i === 0) && (m % i === 0) ? max = i : ''
        i++
    }
    let min = n*m/max
    return [max, min]
}

console.log(solution(4,2))