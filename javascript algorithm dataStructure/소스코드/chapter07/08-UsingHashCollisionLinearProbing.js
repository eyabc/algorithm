var hashLinearProbing = new HashLinearProbing();

hashLinearProbing.put('Gandalf', 'gandalf@email.com');
hashLinearProbing.put('John', 'johnsnow@email.com');
hashLinearProbing.put('Tyrion', 'tyrion@email.com');
hashLinearProbing.put('Aaron', 'aaron@email.com');
hashLinearProbing.put('Donnie', 'donnie@email.com');
hashLinearProbing.put('Ana', 'ana@email.com');
hashLinearProbing.put('Jonathan', 'jonathan@email.com');
hashLinearProbing.put('Jamie', 'jamie@email.com');
hashLinearProbing.put('Sue', 'sue@email.com');
hashLinearProbing.put('Mindy', 'mindy@email.com');
hashLinearProbing.put('Paul', 'paul@email.com');
hashLinearProbing.put('Nathan', 'nathan@email.com');

console.log('**** 해시 출력 **** ');

hashLinearProbing.print();

console.log('**** 조회 **** ');

console.log(hashLinearProbing.get('Nathan'));
console.log(hashLinearProbing.get('Loiane'));

console.log('**** 삭제 **** ');

hashLinearProbing.remove('Gandalf');
console.log(hashLinearProbing.get('Gandalf'));
hashLinearProbing.print();