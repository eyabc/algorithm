function solution (board, moves) {
  const b = []
  const arr = board.map((v, x) => {
    return v.reduce((arr, v2, y) => {
      const n = board[y][x]
      if (n !== 0) arr.push(n)
      return arr
    }, [])
  })
  let resolve = 0;
  moves.forEach(v => {
    const n = arr[v - 1].shift()
    if (n !== undefined) {
      const before = b.pop()  
      if (before === undefined) {
        b.push(n)
      } else if (before !== n) {
        b.push(before, n)
      } else if (before === n) {
        resolve += 2
      }
    }
  })
  return resolve
}

function solution(board, moves) {
    var answer = 0;
    const len = board.length;
    const container = [];
    let prevValue = 0;
    
    let temp = Array.from(Array(len), () => Array());

    for (let i =0; i<len;i++) {
        board.forEach((item) => {
            if (item[i]) {
                temp[i].push(item[i]);
            } 
        })
    }
    moves.forEach(item => {
        const value = temp[item - 1].shift();
        if (value) {
            prevValue = container.pop();
            if (prevValue === value) {
                answer += 2;
            } else if (prevValue !== value) {
                container.push(prevValue, value)
            } else {
                container.push(value);
            }
        }
    })
    return answer;
}
