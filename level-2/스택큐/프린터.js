function solution(priorities, location) {
    const arr = priorities.map((v, k) => ({v, k}))
    let cnt = 0
    while (arr[0] !== undefined) {
        let {v: j, k} = arr.shift()
        const temp = arr.map(v => v.v)
        const max = Math.max(...temp)
        if (arr[0] !== undefined && max > j) {
            arr.push({v : j, k})
        } else {
            cnt += 1
            if (k === location) return cnt
        }
    }
}

// 2 1 3 2
//     2  1 3 2
//     1 3 2 2
// 1 3 2 2
//     1  3 2 2
//     3 2 2 1
// 3 2 2 1
//     3  2 2 1 => 3
//     2 2 1
// 2 2 1
//     2  2 1 => 2
//     2 1
// 2 1
//     2  1 => 2
//     1
// 1
//     1  []=> 1


console.log(solution([2, 1, 3, 2], 2))
