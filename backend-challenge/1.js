function solution(P, S) {
  return [...P].reduce((sum, p, k) => {
    const s = S.charAt(k);
    const diff = Math.abs(p - s);
    if(diff < 5) return sum + diff;
    else return sum + 10 - diff;
  }, 0);
}

console.log(solution("82195","64723") === 13);

function solution2 (P, S) {
  return [...P].reduce((sum, p, k) => {
    const s = S.charAt(k);
    const [big, small] = [ Math.max(p, s), Math.min(p, s) ];
    return sum + Math.min(big - small, (small + 10) - big)
  }, 0)
}
