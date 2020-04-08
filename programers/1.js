// 모든 경우의 수 구하기
const arr = [
  // 서울   경기   인천
  [   0,   20,   30], // 서울
  [   3,    0,    1], // 경기
  [   4,    5,    0], // 인천
]
const area = ['서울','경기','인천']
let max = 0, min = Infinity, minPathkey = null;
// 서울 - 경기 - 인천을 순회하는 최소 비용

function solution () {
  const keys = [ 0, 1, 2 ]
  const path = []
  const f = stack => {
    // if (path.length >= keys.length) return
    if (stack.length === keys.length) {
      path.push(stack)
      return
    }
    keys.forEach(k => {
      if (stack.includes(k)) return
      f([ ...stack, k ])
    })
  }

  f([])
  console.log(path)

  path.forEach(v => {
    const stack = []
    for (let i = 1; i < 3; i++) {
      const from = v[i - 1];
      const to = v[i];
      stack.push(arr[from][to])
    }
    const sum = stack.reduce((a, b) => {
      return a + b
    });
    if(sum > max) max = sum;
    if(sum < min) {
      min = sum;
      minPathkey = v
    }
    console.log(v.map(k => area[k]).join('->'), stack)
  });
  console.log('max: ', max, ',min: ',min, ' ' ,minPathkey.map(k => area[k]).join('->'))
}

solution()