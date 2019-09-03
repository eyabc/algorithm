function solution(progresses, speeds) {
    // 각 소요기간 계산
    let times = progresses.map((e, k) => Math.ceil((100 - e) / speeds[k]))

    let out = []
    while (times.length !== 0) {
        console.log(times)
        let cnt = 1
        let del = []
        let J = times.shift()
        console.log('J:',J, 'times:', times)
        times.some((e, i) => {
            if(e > J) {
                return true
            }
            if(J >= e) {
                cnt++
                del.push(i)
            }
        })
        console.log('del', del)
        del.reverse().forEach(e=>{
            times.splice(e,1)
        })
        out.push(cnt)
    }

    return out
}