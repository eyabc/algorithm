function solution(A) {
  A.sort((a, b) => a - b);
  const len = A.length;
  if (len === 0) return 1;
  for(var i = 0; i < len+1; i++) {
    if(A[i] > (i+1)) return A[i]-1;
    if(A[i] < (i+1)) return A[i]+1;
  }
  return i;
}


console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]));

