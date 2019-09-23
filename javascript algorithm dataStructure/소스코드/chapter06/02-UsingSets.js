var set = new Set();

set.add(1);
console.log(set.values()); //결과는 ["1"]
console.log(set.has(1));   //결과는 true
console.log(set.size());   //결과는 1

set.add(2);
console.log(set.values()); //결과는 ["1", "2"]
console.log(set.has(2));   //true
console.log(set.size());   //2
console.log(set.sizeLegacy());   //3

set.remove(1);
console.log(set.values()); //결과는 ["2"]

set.remove(2);
console.log(set.values()); //결과는 []