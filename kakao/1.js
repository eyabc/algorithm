// function solutio2n (s) {
//     let arr = s.split("")
//     let arr2 = []
//     let cnt = 1
//     while(arr.length !== 0) {
//         let J = arr.shift()
//         arr2.push(J)
//         console.log("arr2,", arr2)
//         console.log("slice", arr2.slice(arr2.length-cnt-1, cnt))
//         console.log("slice2", arr.slice(0, cnt))
//         if(arr2.slice(arr2.length-cnt-1, cnt) === arr.slice(0, cnt)) {
//             for(let i=0; i<cnt;i++) {
//                 arr2.push(arr.shift())
//             }
//         } else {
//             cnt = 
//         }
//     }
// }

function solution3 (s) {
    
    let length = s.length
    let str = s
    let re = new RegExp(`[a-z]+`);
    let reNum = new RegExp(`[1-9]+`);
    // 짝수 일 때 시도

    let cnt = 1
    while(length >= 1) {
        // 이진 탐색 알고리즘
        let n = reNum.exec(str) === null ? 0 : reNum.exec(str)[0].length
        length = (re.exec(str)[0].length - n.length) / 2
        console.log(length)
        console.log(str)
        if(!(length % 2 || length === 1)) {
            // 짝 - 비교
            let strcomp = re.exec(str)[0]
            console.log(strcomp)
            console.log('짝수 비교', strcomp.substr(0, length), strcomp.substr(length, length+length))
            if(strcomp.substr(0, length) === strcomp.substr(length, length+length)) {
                cnt *= 2
                str = cnt + strcomp.substr(0, length)
                continue
            } else {
               // flase
            }
            // 우측 
        } else {
            console.log("홀")
            // 우측 좌측 모두 비교한 다음 모두 T면  3+문자
            // 왼쪽, 오른쪽 .. .나눠서 압축
        }
        // 압축할 때 같으면 압축하기 
        s.substr(0, length);
        

    }
}

function solution (s) {
    for(let i = 1 ; i<(s.length+1)/2; i++) {
        let newStr = ""
        console.log('i', i)
        for(let j =0 ; j<s.length; j+=(i+i)) {
            newStr += (s.substr(j, i) === s.substr(j+i, i)) ? 2+s.substr(j, i) : s.substr(j, i) + i+s.substr(j+i, i)
        }
        console.log(newStr)
    }
}
//console.log(solution("aabbaccc"))
console.log(solution("aaaaaaaa"))