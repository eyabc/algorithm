function solution(arr) {
    var answer = 0;
    arr.forEach( e=> {
        answer +=e
    })
    return answer/arr.length;
}
