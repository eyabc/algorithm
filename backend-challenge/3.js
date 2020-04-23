function solution (numbers, K) {
  [...numbers].sort().forEach((v, k) => {
    if (numbers[k+1] && numbers[k+1] - v > K) {
      return -1;
    }
  })
  const stack = [];
  let min = 0;
  const len = numbers.length;
  const f = (v, stack) => {
    if (stack.length === len) return;
    
  }
//   const len = numbers.length;
//   const f = (v, stack) => {
//     let temp = 0;
//     temp = v;
//
//     numbers.forEach(n => {
//       v = n;
//       n = temp;
//       stack.push(v);
//       if (stack.length === len) return stack;
//       f(n, stack)
//     });
//   };
//   numbers.forEach(v => {
//     f(v, [...stack]);
//   });
//   console.log(stack)

}

console.log(solution(
  [10, 40, 30, 20],20
) === 1);

// console.log(solution([3, 7, 2, 8, 6, 4, 5, 1],	3) ===	2);