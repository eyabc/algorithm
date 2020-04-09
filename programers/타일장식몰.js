function solution(N) {
  if (N === 1) return 4;
  let i = 0;
  const tile = [1, 1];

  while(tile.length < N) {
    tile.push(tile[i]+tile[i+1]);
    i++;
  }
  return tile[N-1] * 4 + tile[N-2];
}
console.log(solution(5) === 26);
console.log(solution(6) === 42);
console.log(solution(1) === 4);
console.log(solution(2) === 6);
console.log(solution(3) === 10);
