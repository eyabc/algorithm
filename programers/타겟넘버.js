function solution(numbers, target) {
  let answer = 0;
  const nLen = numbers.length;
  const f = (sum, sLen) => {
    if(sLen === nLen) {
      if (sum === target) answer++;
      return;
    }
    f(sum + numbers[sLen], sLen + 1);
    f(sum - numbers[sLen], sLen + 1);
  };
  f(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1],	3) ===	5);
