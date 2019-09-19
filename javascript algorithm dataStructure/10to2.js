// 10진수를 2진수로 바꾸려면 나눗셈의 몫이 0이 될 때까지 2로 나누면 된다. 
// 나머지를 스택에 삽입한다.
// 결과 = 나머지를 제거 

function _10to2 (num) {
    let q = num
    let stack = []
    while(q !== 0) {
        let r = q % 2
        stack.push(r)
        q = parseInt(q/2)
        console.log(q)
    }
    return Number(stack.reverse().join(''))
}
// console.log(_10to2(10))

// 2, 8 ,16진수로 바꾸기 
function _10toN (num, base) {
    let q = num
    let stack = []
    let hexString = "ABCDEF"
    while(q !== 0) {
        let r = q % base
        q = parseInt(q/base)
        if(r > 9) {
            r = hexString[r % 10] 
            stack.push(r)
        } else {
            stack.push(r)
        }
    }
    console.log(stack)
    return stack.reverse().join('')
}
console.log(_10toN(1000, 8))
