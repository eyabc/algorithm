function solution (answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let max = 0;
  const res = [];

  pattern.forEach((v, vidx) => {
    let ok = 0;
    answers.forEach((a, index) => {
      if (a === v[index % v.length]) ok++;
    });
    if (ok > max) {
      res.shift();
      res.push([vidx, ok]);
      max = ok;
    } else if (ok === max) res.push([vidx, ok]);

  });
  return res.map(v => v[0] + 1).sort((a, b) => a - b);
}

function solution2 (answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const counts = pattern.map(v => {
    const vLen = v.length;
    return answers.reduce((sum, a, index) => sum + (a === v[index % vLen]), 0);
  });
  const max = Math.max(...counts)
  return counts.reduce((stack, v, index) => {
    if (v === max) stack.push(index + 1)
    return stack
  }, []).sort((a, b) => a - b)
}

console.log(solution([1, 2, 3, 4, 5]).toString() === [1].toString());
console.log(solution([1, 3, 2, 4, 2]).toString() === [1, 2, 3].toString());