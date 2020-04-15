function solution(A) {
  const len = A.length;
  A.sort((a,b) => a -b);
  for(let i = 0 ; i < len; ) {
    if (A[i] === A[i+1]) {
      i+=2
    } else {
      return A[i];
    }
  }
}
console.time("calculatingTime")
console.log(solution([9, 3, 9, 3, 9, 7, 9]) === 7);
console.timeEnd('calculatingTime');

// console.log(solution([2, 2, 3, 3, 4]) === 4);

function solution2(A) {
  const len = A.length;
  let ans = A.shift();

  A.forEach((v, k) => {
        for (let j = 1; j < len; j++) {
          if (k !== j && v === A[j]) {
            A.splice(k, 1);
            A.splice(j, 1);
            break;
          }
        };
    });
  return ans;
}

function solution3(A) {
  const len = A.length;
  let ans = A.shift();

  const f = (v, arr) => {
    arr.forEach((item, k) => {
      if(v === item) {
        arr.splice(k, 1);
        ans = arr.shift();
        f(ans, arr);
        return;
      }
    });
    return ans;
  };
  return f(ans, A);
}