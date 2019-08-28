/*  모의고사.js - 2 
    20190828 박은영
    https://programmers.co.kr/learn/courses/30/lessons/42840# 
*/
function solution(answers) {
    var answer = [];
    const pattern = [
        [1,2,3,4,5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    const cnt = [
        [1, 0],
        [2, 0],
        [3, 0]
    ]

    answers.forEach((i, k) => {    
        if(i === pattern[0][k % pattern[0].length]) cnt[0][1] ++;
        if(i === pattern[1][k % pattern[1].length]) cnt[1][1] ++;
        if(i === pattern[2][k % pattern[2].length]) cnt[2][1] ++;
    })

    cnt.sort((a,b) => b[1] - a[1])

    answer.push(cnt[0][0]) 
    if(cnt[0][1] === cnt[1][1]) { 
        answer.push(cnt[1][0])
        if(cnt[1][1] === cnt[2][1]) {
            answer.push(cnt[2][0])
        }
    }

    return answer;
}
console.log(solution([5,1,1,1,1,1,2,3,2,1]))