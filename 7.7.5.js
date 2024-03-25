/*
Задание 7.7.5
Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
содержащий только уникальные числа, отсортированные в порядке возрастания.
*/

const numArr = [1, 1, 7, 8, 5, 9, 7, 4, 8];

function unicNumAscend(arr) {
  const uniqNum = Array.from(new Set(arr));
  return uniqNum.sort();
}

console.log(unicNumAscend(numArr));
