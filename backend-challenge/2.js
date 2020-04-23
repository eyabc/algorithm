function solution(office, r, c, move) {
  const officeLen = office.length;
  let direction = 0;
  const moveFunc = (value, r, c) => {
    if (direction < 0) {
      direction = 3
    }
    direction = direction % 4;
    switch(direction) {
      // 0 북, 1 동, 2 남, 3 서
      case 0: return [r - 1, c];
      case 1: return [r, c + 1];
      case 2: return [r + 1, c];
      case 3: return [r, c - 1];
    }
  };
  const init = office[r][c];
  office[r][c] = 0;
  return move.reduce((sum, action) => {
    console.log(`r: ${r}, c: ${c}, sum: ${sum}, direction: ${direction}`)
    const [newR, newC] = moveFunc(action, r, c);
    switch (action) {
      case 'go':
        if(newR > -1 && newC > -1 && newR < officeLen && newC < officeLen && office[newR][newC] > -1) {
          r = newR;
          c = newC;
          const newValue = office[newR][newC];
          office[newR][newC] = 0;
          return sum += newValue;
        }
        break;
      case 'right':
        direction += 1;
        break;
      case 'left':
        direction -= 1;
        break;
    }
    return sum;
  }, init)
}

console.log(
  solution([[5, -1 , 4],[6, 3, -1],[2, -1, 1]]
    ,	1,	0
    ,['go','go','right','go','right','go','left','go'])
  ===14);

function solution2 (office, r, c, move) {
  let direction = 0
  const len = office.length
  const go = () => {
    const tmp = [r, c]
    switch (direction) {
      case 0: r -= 1; break;
      case 1: c += 1; break;
      case 2: r += 1; break;
      case 3: c -= 1; break;
    }
    if (Math.max(r, c) >= len || Math.min(r, c) < 0 || office[r][c] < 0) {
      ([r, c] = tmp)
    }
  }
  const left = () => direction = direction === 0 ? 3 : direction - 1
  const right = () => direction = (direction + 1) % 4

  return move
    .reduce((stack, v) => {
      ({ go, left, right })[v]();
      const pos = `${r},${c}`
      if (stack.indexOf(pos) === -1) stack.push(pos)
      return stack
    }, [ `${r},${c}` ])
    .reduce((sum, v) => {
      const [r, c] = v.split(',')
      return sum + office[r][c]
    }, 0)
}