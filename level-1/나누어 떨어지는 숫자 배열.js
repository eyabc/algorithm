function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(i => i % divisor === 0).sort((a, b) => a-b)
    if (answer.length === 0) {
        return [-1]
    }
    return answer;
}

// - , - , Byungnam Choi , leeseungha , 이창훈 외 2 명
function solution2(arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}
console.log(solution2([5, 9, 7, 10], 5))