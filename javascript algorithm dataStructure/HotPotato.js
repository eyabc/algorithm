function HotPotato (names, num) {
    // num 만큼 queue를 순회한다.
    let winner = ''
    let queue = Array.from(names)
    while(queue.length !== 1) {
        for (let i = 0; i < num; i++) {
            queue.push(queue.shift())
        }

        let J = queue.shift()
        console.log(J+'를 퇴장시킵니다.')
    }


    return '승자는' + queue
}

console.log(HotPotato(['John', "Jack", 'Camila', 'Ingrid', 'Carl'], 7))