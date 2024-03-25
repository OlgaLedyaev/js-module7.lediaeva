/* 
Задание 7.7.4
Создайте функцию setFullName, которая будет устанавливать 
свойство fullName у переданного ей объекта. Используйте метод 
bind, чтобы создать новую функцию setPersonFullName, которая 
будет устанавливать fullName для объекта person из предыдущего примера. 
Вызовите setPersonFullName с параметром "John Smith" и убедитесь, 
что свойство fullName объекта person было изменено соответствующим 
образом.
*/

const person = {
  firstName: "Olga",
  lastName: "Lediaev",
  setFullName() {
    return (person.fullName = this.firstName + " " + this.lastName);
  },
};

const secondPerson = {
  firstName: "John",
  lastName: "Smith",
};

const setPersonFullName = person.setFullName.bind(secondPerson);
console.log(setPersonFullName());

console.log(person.fullName);
console.log(person);
