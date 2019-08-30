function solution1(s) {
    let str = s.split('')
    let temp = []
    for(let i = 0; i<s.length; i++) {
        let n = s.charCodeAt(i)
        if(n <= 90) n += 33
        temp.push(n)
    }
    let tem2 = temp.sort((a,b)=> {
        return a-b
    })
    for(let i = 0; i<tem2.length; i++) {
        if(tem2[i] > 122) tem2[i] -=33
        tem2[i] = String.fromCharCode(tem2[i])
    }
    return tem2.join('')

}   
function solution11(s) {
    return s.split('').sort((a,b)=> {
        return a > b ? -1 :1
    }).join('')
}  
function solution(s) {
    return s.split('').sort()
}
//
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
console.log(solution('aZbcdefAg'))