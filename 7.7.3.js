/* 
 Задание 7.7.3
 Есть массив объектов, представляющих собой пользователей,
 каждый из которых имеет свойство age (возраст). 
 Создайте новый массив, содержащий только тех пользователей, 
 чей возраст больше или равен 18. Затем создайте новый массив, 
 содержащий только свойства name (имя) каждого пользователя. 
*/

const users = [
  { name: "Olga", age: 35 },
  { name: "Sergei", age: 36 },
  { name: "Kirill", age: 10 },
];

const userAge = users.filter((user) => {
  return user.age >= 18;
});

const userName = users.map((user) => {
  return user.name;
});

console.log(userAge);
console.log(userName);
