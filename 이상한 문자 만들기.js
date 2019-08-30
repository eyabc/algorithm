function solution2(s) {
    let answer = s.split(' ');
    let str = []
    for (let i =0, len = answer.length; i<len;i++) {
        let temp = answer[i].split('')
        console.log(temp)
        for(let j = 0, len = temp.length; j< len ; j++ ) {
            temp[j] = (j % 2) ? temp[j]: temp[j].toUpperCase() 
        }
        str[i] = temp.join('')
        
        console.log(str)
    } 

    return str.join(' ');
}

function solution3(s) {
    let answer = s.split('');
    for(let i=0; i< s.length; i++) {
        let l = (i % 2) ? s[i] : s[i].toUpperCase() 
        answer[i] = l
        console.log(l, answer[i])
    }
    answer= answer.join('')
    return answer;
}
function solution2(s) {
    let answer = s.split(' ');
    let str = []
    for (let i =0, len = answer.length; i<len;i++) {
        let temp = answer[i].split('')
        for(let j = 0, len = temp.length; j< len ; j++ ) {
            temp[j] = (j % 2) ? temp[j].toLowerCase() : temp[j].toUpperCase() 
        }
        str[i] = temp.join('')
    } 
    return str.join(' ');
}
function solution(s) {
    return s.toUpperCase().split(' ').map(v => Array.from(v).map((c, k) => k % 2 ? c.toLowerCase() : c).join('')).join(' ')
}

console.log(solution('t1r2y'))