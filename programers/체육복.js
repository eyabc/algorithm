function solution (n, lost, reserve) {
  const people = new Array(n).fill(1);
  reserve.forEach(v => people[v - 1] += 1);
  lost.forEach(v => people[v - 1] -= 1);

  for (let i = 0; i < n; i++) {
    if (people[i] === 2) {
      if (people[i - 1] === 0) {
        people[i] = 1;
        people[i - 1] = 1;
        continue;
      } else if (people[i + 1] === 0) {
        people[i] = 1;
        people[i + 1] = 1;
      }
    }
  }
  return people.reduce((s, v) => {
    if (v > 0) s += 1;
    return s
  }, 0);
}


function solution2 (n, lost, reserve) {
  const people = new Array(n).fill(1);
  reserve.forEach(v => people[v - 1] += 1);
  lost.forEach(v => people[v - 1] -= 1);

  for (let i = 0; i < n; i++)
    if (people[i] === 2)
      switch (0) {
        case people[i - 1] : people[i] = people[i - 1] = 1; break;
        case people[i + 1] : people[i] = people[i + 1] = 1; break;
      }
  return people.filter(v => v > 0).length;
}

console.log(
  solution(5, [2, 4], [1, 3, 5]) === 5);
console.log(
  solution(5, [2, 4], [3]) === 4);
console.log(solution(3, [3], [1]) === 2);