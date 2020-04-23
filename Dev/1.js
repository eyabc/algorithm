function solution(N, arr) {
  const len = arr.length;
  const f = (v, k) => {
    let max = 0;
    for (let i = k+1; i < len ; i++) {
      if(arr[i] - v > max) max = arr[i] - v;
    }
    return max;
  };
  const result = arr.map((v, k) => f(v, k));
  return Math.max(...result);
}
console.log(solution(10, [3, 5, 9, 2, 1, 5, 3, 8, 7, 5]) === 7);
console.log(solution(10, [10, 9, 6, 7, 2, 2, 4, 3, 5, 1]) === 3);
console.log(solution(5, [100, 100, 100, 100, 1]) === 0);