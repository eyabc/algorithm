function solution(array) {
  let answer = 0;
  const len = array.length;
  const jobs = array.sort(([a], [b]) => a - b);

  for (let i = jobs[0][0]; jobs.length; ) {
    const list = jobs.filter(([item]) => item <= i).sort(([,a], [,b]) => a - b);
    if (!list.length) { i = jobs[0][0]; continue; }

    const [ arrive, take, index = jobs.indexOf(list[0]) ] = list[0];
    i += take;
    answer += i - arrive;
    jobs.splice(index, 1)
  }
  return ~~(answer / len);
}


// console.log(solution2([[0, 3], [10, 10]]), 6)
// console.log(solution([[0, 3], [1, 9], [2, 6], [4, 3]]), 9)
// console.log(solution([[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 2], [15, 34], [35, 43], [26, 1]]), 74)
console.log(solution([[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]), 13)
// console.log(solution([[15,34], [15,2]]), 19)
// console.log(solution([[0, 5], [1, 2], [5, 5]]), 6)
// console.log(solution([[0, 3], [1, 9], [2, 6]]), 9)
// console.log(solution([[10, 6], [12, 6], [14, 4]]), 8)