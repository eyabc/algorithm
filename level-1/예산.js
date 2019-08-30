function solution2(d, budget) {
    var answer = 0;
    d.sort((a,b)=> a-b).forEach(e => {
        if(budget >= e) {
            budget -= e;
            answer++
        } else {
            return answer
        }
    });
    return answer
}


function solution(d, budget) {
    return ~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v <0 )
    return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}


function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}


console.log(solution([2,2,3,3], 10))