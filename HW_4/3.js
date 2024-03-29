"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arr2 = [4];
for (let index = 0; index < 4; index++) {
  arr2.push(Math.floor(Math.random() * 10));
}
console.log(arr2);

/**
 * сумма элементов массива
 * @param {*} arr 
 * @returns 
 */
function sum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}
console.log(`Сумму элементов этого массива - ${sum(arr2)}`);

// Найти минимальное число
function min(arr) {
  const min = Math.min(...arr);
  return min;
}
console.log(`Минимальное число этого массива - ${min(arr2)}`);

//поиск массива в котором есть тройки
indexArray(arr2);
function indexArray(arr) {
  // Создать пустой массив
  let result = [];

  // Объявить цикл for, который перебирает все элементы массива
  for (let i = 0; i < arr.length; i++) {
    // Проверить, равен ли текущий элемент заданному значению
    if (arr[i] === 3) {
      // Добавить индекс текущего элемента в массив
      result.push(i);
    }
  }
  console.log(result);
}
