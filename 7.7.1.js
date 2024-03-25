/* 
Задание 7.7.1
Создайте функцию printInfo, которая будет выводить информацию о человеке 
в формате "Name: <имя>, Age: <возраст>". Создайте объект person с двумя 
свойствами: name и age. Используйте метод call, чтобы вызвать функцию 
printInfo от имени объекта person.
*/

const person = {
  name: "Olga",
  age: 35,
};
function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}.`);
}

printInfo.call(person);
