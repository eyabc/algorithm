function sol(arr, k, t) {
    let a = [...arr.sort()]
    let sum = 0
    let cnt = 0
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        let J = a.shift()
        stack.push(J)
        let sum = stack.reduce((a, b) => a + b)
        if (stack.length > k - 1 && sum <= t) {
            console.log(k, sum)
            cnt++
        }

    }
    return cnt
}
console.log(sol([2, 5, 3, 8, 1], 3, 11))
팝을 해서 큐에 넣기
1 2 3  (1) push push push
1 2 3 5 (2) push push push push
1 2 3 5 8 (x) pop pop [8 5]
1 2 3 8 (x) push(8) > pop pop [5 8 3]
1 2 5 (3) push(5) [8, 3]
1 2 5 8 (x) push(8) pop pop [3,8,5]
1 2 3 

