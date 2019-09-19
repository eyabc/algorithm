function solution2(bridge_length, weight, truck_weights) {
    let cnt = 0, cur_weight = 0
    let bridge_in_truck = [...new Array(bridge_length)].fill(0)
    console.log(bridge_in_truck)
    while (truck_weights.length) {
        let J = truck_weights.shift()

        // 다리에 건널 수 있나 판별? 
        console.log("J: ", J, "cur_wiehgt: ", cur_weight)
        if (cur_weight + J <= weight) {
            //  건널 수 있으면 
            console.log("can")
            let p = bridge_in_truck.pop()
            bridge_in_truck.unshift(J)
            cur_weight = cur_weight - p + J
            cnt++
            console.log("pop: ", p, "bride_in: ", bridge_in_truck, "curwei:", cur_weight, 'cnt:', cnt)
        } else {
            console.log("cant")
            while (cur_weight + J > weight) {
                let p = bridge_in_truck.pop()
                bridge_in_truck.unshift(0)
                cur_weight = cur_weight - p
                cnt++
                console.log("pop: ", p, "bride_in: ", bridge_in_truck, "curwei:", cur_weight, 'cnt:', cnt)

            }
            // 타임만 추가하고 배열 오른쪽으로 shift 판별 반복
        }
        console.log(truck_weights)
    }
    return cnt
}
function solution(bridge_length, weight, truck_weights) {
    let cnt = 0, cur_weight = 0
    let bridge_in_truck = [...new Array(bridge_length)].fill(0)

    while (truck_weights.length) {
        let J = truck_weights.shift()
        console.log("J: ", J, "cur_wiehgt: ", cur_weight)
        let flag = false
        while (cur_weight + J > weight) {
            let p = bridge_in_truck.pop()
            cur_weight = cur_weight - p
            if(cur_weight < weight) {
                bridge_in_truck.unshift(J)
                cnt++
            console.log("pop: ", p, "bride_in: ", bridge_in_truck, "curwei:", cur_weight, 'cnt:', cnt)

                continue
            } else {
                bridge_in_truck.unshift(0)
                 cnt++
                 console.log("pop: ", p, "bride_in: ", bridge_in_truck, "curwei:", cur_weight, 'cnt:', cnt)

            }
            cnt++
            console.log("pop: ", p, "bride_in: ", bridge_in_truck, "curwei:", cur_weight, 'cnt:', cnt)
        }// 다리에 건널 수 있나 판별? 
        console.log("can")
        let p = bridge_in_truck.pop()
        bridge_in_truck.unshift(J)
        cur_weight = cur_weight - p + J
        cnt++
        console.log("pop: ", p, "bride_in: ", bridge_in_truck, "curwei:", cur_weight, 'cnt:', cnt)
    }
    return cnt+bridge_length
}
console.log(solution(2, 10, [7, 4, 5, 6]))
// console.log(solution(100, 100, [10]))