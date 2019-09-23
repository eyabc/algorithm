var dictionary = new Dictionary();

dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf'));   //결과는 true
console.log(dictionary.size());   //결과는 3

console.log(dictionary.keys()); //결과는 ["Gandalf", "John", "Tyrion"]
console.log(dictionary.values()); //결과는 ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dictionary.get('Tyrion')); //결과는 tyrion@email.com

dictionary.remove('John');

console.log(dictionary.keys()); //결과는 ["Gandalf", "Tyrion"]
console.log(dictionary.values()); //결과는 ["gandalf@email.com", "tyrion@email.com"]

console.log(dictionary.getItems()); //Object {Gandalf: "gandalf@email.com", Tyrion: "tyrion@email.com"}