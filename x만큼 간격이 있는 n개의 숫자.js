function solution3(x, n) {
    // var answer = [], sum = 0;
    var answer = [], sum = x;
    //for(let i = 0; i<n;i++) {
    for(let i = 0; i<n;i++, sum+=x) {
        answer.push(sum)
    }
    return answer;
}



function solution2(x, n) {
    return Array(n).fill(x).map((v,i) => (i+1) * v)
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

function solution(x, n) {
   return [...Array(n).keys()]
    return [...Array(n).keys()].map(v => (v + 1) * x);
}
console.log(solution(-2,5))