//Задание 1
// Выведите числа от 1 до 10 в консоль
/*let i;
for (let i = 1; i <= 10; i++) {
    console.log(i);
}*/

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
/*let number = 2;

while (number <= 20) {
    console.log(number);
    number += 2;
}*/

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
/*for (let i = 10; i >= 1; i--) {
    console.log(i);
  }*/
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
/*for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
  }*/
//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
/*let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Сумма чисел от 1 до 100: ${sum}`);*/

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
/*const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}*/

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
/*const numbers = [1, 2, 3, 4, 5];
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(`Сумма всех элементов массива: ${sum}`);*/

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
/*let animals = ["Кот", "Рыба", "Лемур"];

for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + " - прекрасное животное";
}

console.log(animals);*/

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';

for (let symbol of str) {
  console.log(symbol);
}

// "H"
// "e"
// "l"
// "l"
// "o"
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
const array = [1, 2, 3, 4, 5];

for (let element of array) {
  console.log(element);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];

for (let sentence of sentences) {
  // Разбиваем предложение на слова с помощью метода split
  const words = sentence.split(' ');

  // Выводим каждое слово в консоль
  for (let word of words) {
    console.log(word);
  }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
/*const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log(`Сумма всех элементов массива: ${sum}`);*/

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
/*const list = ['apple', 'banana', 'cherry'];

for (let word of list) {
  console.log(`Длина слова "${word}": ${word.length}`);
}*/

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
/*const words = ['apple', 'banana', 'cherry'];

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].toUpperCase();
}

console.log(words);*/

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let char of greeting.toLowerCase()) {
  if (vowels.includes(char)) {
    vowelCount++;
  }
}
console.log(`Количество гласных в строке: ${vowelCount}`);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
const result = words.join(' ');

console.log(result);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
/*let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}*/

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
/*let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}*/

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
/*const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let i = 0;

while (i < allNumbers.length) {
  if (allNumbers[i] <= 0) {
    allPositive = false;
    break;
  }
  i++;
}

console.log(`Все элементы положительные: ${allPositive}`);*/


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
/*const random = [2, 4, 6, -3, 8, 10];
let i = 0;

do {
  console.log(random[i]);
  i++;
} while (i < random.length && random[i] >= 0);*/

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let i = 1;

do {
  if (i % 3 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sum = 0;

do {
  let userInput = prompt('Введите число:');
  let number = parseFloat(userInput);

  if (!isNaN(number)) {
    sum += number;
  } else {
    alert('Пожалуйста, введите корректное число.');
  }
} while (sum <= 100);

console.log(`Сумма чисел превысила 100. Итоговая сумма: ${sum}`);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeH4Color() {
    const h4Elements = document.querySelectorAll('h4');
  
    for (let h4 of h4Elements) {
      h4.style.backgroundColor = 'blue';
    }
  }
  
  // Вызов функции для изменения цвета всех элементов h4
  changeH4Color();
  
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

function generateRandomString(length) {
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
  }
}

// Генерация случайной строки длиной до 6 символов
generateRandomString(6);

console.log(randomString);
