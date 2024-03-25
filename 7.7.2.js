/* 
Задание 7.7.2
Создайте функцию calculate, которая будет принимать 
три параметра: a, b и operator. Функция должна производить 
математическую операцию между a и b в зависимости от значения 
operator (может быть "+", "-", "*" или "/") и возвращать 
результат операции. Используйте метод apply, чтобы вызвать 
функцию calculate с передачей объекта со значениями a, b и 
operator в качестве первого аргумента и массива с тремя 
значениями [2, 3, "+"] в качестве второго аргумента. 
*/

function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "/") {
    return a / b;
  }
  return 0;
}

let args = [2, 3, "+"];

let result = calculate.apply(null, args);

console.log(result);
