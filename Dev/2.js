function solution(A, B) {
  const toObj = (arr) => {
    const obj = {};
    arr.forEach(v => {
      if(!obj[v]) obj[v] = 1;
      else obj[v] += 1;
    });
    return obj;
  };

  const Aobj = toObj(A);
  const Bobj = toObj(B);

  const Av = Object.values(Aobj).sort().toString();
  const Bv = Object.values(Bobj).sort().toString();
  if(Av === Bv) return 'Draw';

  const getPriority = (arr) => {
    switch (arr) {
      case [5].toString(): return 1;
      case [1, 1 ,1 ,1 ,1].toString() : return 2;
      case [1, 4].toString() : return 3;
      case [2, 3].toString() : return 4;
      case [1, 1, 2].toString() :return 5;
      default: return 6;
    }
  };
  const Ap = getPriority(Av);
  const Bp = getPriority(Bv);

  return Ap - Bp ? 'First' : 'Second';
}
console.log(solution([3, 2, 3, 2, 3],[6, 1, 1, 2, 3]) === 'First');
console.log(solution([5,5,5,5,5],[1,1,1,1,1]) === 'Draw');