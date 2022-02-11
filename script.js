// Дан массив [100, 200, 500, 1, -60, 38, 3434]
// 1) Написать функции для поиска максимального, минимального, среднего арифметического, сортировки по возрастанию, убыванию, удалению любого числа по индексу

const array = [100, 200, 500, 1, -60, 38, 3434];

function maxNumberOfArray(array) {
  return Math.max(...array);
}

function minNumberOfArray(array) {
  return Math.min(...array);
}

const avarageNumberOfArray = array.reduce((a, b) => (a + b) / array.length);

const acsendingSort = array.slice(0).sort((a, b) => {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
});

const descendingSort = array.slice(0).sort((a, b) => {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
});

let value = +(prompt(`Введите число от 0 до 7`))

const newArr = array.splice(value,1)


console.log(`Максимальное значение = ${maxNumberOfArray(array)}`);
console.log(`Минимальное значение = ${minNumberOfArray(array)}`);
console.log(`Среднее значение = ${avarageNumberOfArray}`);
console.log(`Сортировка по возрастанию: ${acsendingSort}`);
console.log(`Сортировка по убыванию: ${descendingSort}`);
console.log(`Из масивa удалили число с индексом ${value}. Текущий массив: ${newArr}`);
