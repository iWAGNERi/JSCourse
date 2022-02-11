// Первое задание

let numberOne = +prompt('Введите число')
let numberTwo = +prompt('Введите еще число')

let summNumbers = numberOne + numberTwo
let differenceNumbers = numberOne - numberTwo
let devisionNumbers = numberOne / numberTwo
let multplicationNumbers = numberOne * numberTwo


console.log('первое число = ' +  numberOne +
	'\nвторое число = ' +  numberTwo +
	'\nсумма чисел = ' +  summNumbers +
	'\nразность чисел = ' + differenceNumbers +
	'\nчастное чисел = ' +  devisionNumbers +
	'\nпроизведение чисел = '+ numberOne * numberTwo )

alert( 'сумма чисел = ' +  summNumbers +
  '\n разность чисел = ' + differenceNumbers +
	'\n частное чисел = ' +  devisionNumbers +
	'\n произведение чисел = '+ numberOne * numberTwo )

// Второе задание

let userName = prompt('Введите ваше имя')
let userSurname = prompt('Введите вашу фамилию')
let userAge = prompt('Введите ваш возраст')

console.log(userName + ' ' + userSurname + 
'\nВозраст — ' + userAge )

alert(userName + ' ' + userSurname + 
'\nВозраст — ' + userAge )

// Создание шаблона строки вместо + 

let userName = prompt('Введите ваше имя')
let userSurname = prompt('Введите вашу фамилию')

alert(`Your name: ${userName}, Your surname: ${userSurname}`)


// Условия

let number = +prompt("Введите число");

console.log(number);

if (number > 0) {
  console.log("Положительное число");
} else if (number < 0) {
  console.log("Отрицательное число");
} else if (number === 0) {
  console.log("Ноль");
} else {
  console.log("Вы ввели строку");
}


// Сравнение Условие

let numberOne = +prompt("Введите число");
let numberTwo = +prompt("Введите еще число");

console.log(numberOne);
console.log(numberTwo);

if (numberOne > numberTwo) {
  console.log(`${numberOne} больше ${numberTwo}`);
} else if (numberOne < numberTwo) {
  console.log(numberOne + " меньше " + numberTwo);
} else if (numberOne == numberTwo) {
  console.log(numberOne + " равно " + numberTwo);
} else {
  console.log("Вы ввели строку");
}

// Условие 

let weekDay = +prompt('Введите число дня недели. Начало 0 — Воскресенье')


switch (weekDay){
	case 0:
			console.log(`${weekDay} — Воскресенье`)
			break
	case 1:
			console.log(`${weekDay} — Понедельник`)
			break
	case 2:
			console.log(`${weekDay} — Вторник`)
			break
	case 3:
			console.log(`${weekDay} — Среда`)
			break
	case 4:
			console.log(`${weekDay} — Четверг`)
			break
	case 5:
			console.log(`${weekDay} — Пятница`)
			break
	case 6:
			console.log(`${weekDay} — Суббота`)
			break
	default:
			console.loge
}

// тернарник

(0 > 1) 
	? console.log(1) 
		: 2 > 1 
			? console.log(3) 
			: console.log(4);


// Циклы

for(let i=0; i < 101; i++) {
	console.log(i === 100)
}

// вывод по буквенно

let str = 'Данила'

for(let i = 0; i < str.length ; i++) {
	console.log(str[i])
}

// Шаг 2 в цикле

let str = 'Данила'

for(let i = 0; i < str.length ; i+=2) {
	console.log(str[i])
}

// вывод по буквенно с конца

let str = 'Данила'

for(let i = (str.length - 1); i >= 0; i--) {
	console.log(str[i])
}


// проверка на деление на число (на 3)

for(let i = 0; i <= 1000; i++ ) {
	
	if (i % 3 === 0) {
		console.log(i)
	}
}


// Цикл while 

let i = 0;

while (i < 1000) {
  console.log(i);
  i++;
}

// цикл с бесконечным запросом

for (; true; ) {
  let numberOne = +prompt("Введите число");
  let numberTwo = +prompt("Введите еще число");

  result = numberOne + numberTwo;

  alert(`${result}`);
}

let i = 0 
while(true) {

	let numberOne = +prompt("Введите число");
  let numberTwo = +prompt("Введите еще число");

  result = numberOne + numberTwo;

  alert(`${result}`);

}

// складываем числа в промежутке 

// for
let numberOne = +prompt("Введите число");

let result = 0

for(let i = 1; i <= numberOne; i++ ) {

	result += i
}

console.log(result)

// while
let numberOne = +prompt("Введите число");
let i = 1
let result = 0

while(i <= numberOne) {
	result += i
	i++
}

console.log(result)


// цикл do while

let numberOne = +prompt("Введите число");
let i = 1
let result = 0

do {
	result += i
	i++
}
while(i <= numberOne)

console.log(result)

// Найти сумму чисел от - 100 до -10, которые делятся на 5

let result = 0;

for (let i = -100; i <= -10; i++) {
  if (i % 5 === 0) {
    result += i;
  }
}

console.log(result);

// Массив

let array = [ 1, 2, 3, 4 , 5, 6, 7, 8, 9]

// массивы это структура данных
// у него есть ключи и занчения

let array = ['Алексей','Данила', 'Феля', 'Анна' ]

console.log(array[array.length-1]) // Anna

array.push('Сергей') // push добавляет в конец
array.pop() //удаляет из конеца
array.unshift('Михаил') // добавляет в начало
array.shift() // удаляет из начала начало

array.splice

let array = [ 1, 2, 3, 4 , 5, 6, 7, 8, 9]

array.splice(0, 2, 22, 33) // с чего начать, сколько удалить, сколько встаить

allary.splice(0, array.length) // удалить все элементы массива, последний элемент не включается, к длине не прибваляется 1


array.splice(0, 0, 22, 33) // с чего начать, сколько вставить, сколько встаить

let array = ['Алексей','Данила', 'Федя', 'Анна', 'Аля', 'Катя' ]

let newArr = array.slice(0,3) // (начинаем, заканчиваем) последний не включается (получается до второго) Метод копирует массив


console.log(newArr)

// перебирает все элементы массива как цикл for

let array = [11, 22, 33, 44, 55, 66 ]

for (let i =0 ; i< array.length; i++) {
  console.log(array[i])
}


array.forEach((elem) => {
console.log(elem)
})

// новый массив

let array = [11, 22, 33, 44, 55, 66];

array.forEach((elem) => {
  console.log(elem);
});


// новый массив

let newArr = array.map((elem) => {
  return elem + 100
})


let newArr = array.map((elem) => + 100)


// функции

function getSum(num1) {
  console.log(num1)
}

getSum(11)

function getSum(num1) {
  console.log(num1)
}

getSum(11)

const getSum = (num1, num2) => {
  console.log(num1 + num2)
  return num1 + num2
}

const getSum = (num1, num2) => num1 + num2

console.log(getSum(11, 22))


function getSum (num1, num2) {
  return num1 + num2
}

console.log(getSum(22, 33))

function getMin (num1, num2) {
  console.log(num1 + num2)
}

const getMult = (num1) => {
  return num1/2
}

getMult(11)

const getSum = (num1, num2) => {
  return num1 + num2
}

const getDouble = (nuem, num2, callback) => {
  return callback(num1, num2) * callback(num, num2)
}

getDouble(10, 10, getSum)


const array = ['Danila', 'Alexey', 'Mihail', 'Yana', 'Irina', 'Sergey']

array.forEach((elem, index, arr) => {
  console.log(elem)
  console.log(index)
  console.log(arr)
})

// Добавить данные к массиву
const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];

array.forEach((elem, index, arr) => {
  let getElem = elem;

  if (elem == "Yana") {
    array.splice(index, 1, "Yana Шепелева");
    console.log(arr);
  }
});

const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];

array.forEach((elem, index, arr) => {
  let getElem = elem;

  if (elem == "Yana") {
    array.splice(index, 1,  item +" Шепелева");
    console.log(arr);
  }
});

// создает новый массив измененный

const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];

const NewArr = array.map((item) => {
  if(item === 'Yana') {
    return item + ' Shepeleva'
  }
  return item
})

console.log(array)
console.log(NewArr)

// создает новый массив измененный в одну строку
const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];

const NewArr = array.map((item) =>'developer ' + item)


console.log(array)
console.log(NewArr)

const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];


// создает новый массив измененный c return
const NewArr = array.map((item) => {
  return 'developer ' + item
})


console.log(array)
console.log(NewArr)

// склеинть в одну строку, сложить, вычесть

const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];

const res = array.reduce((result, current) => {
  return result + current;
});
console.log(res);

const array = [100, 200, 300, 400, 500];

const res = array.reduce((result, current) => {
  return result + current;
});
console.log(res);

// Возвращает индекс массива, если два,то первый

array.indexOf('Yana')

// Возвращает индекс массива c конца если их несколько
array.lastIndexOf('Yana')

// есть или нет элемент в массиве
console.log(array.includes('Yana'))

// ищит Элемнет
console.log(array.find((elem) => {
  return elem === 'Yana'
}))

const newArr = [
  {id: 1, name: 'Patato', price: 100},
  {id: 2, name: 'Tomato', price: 250},
  {id: 3, name: 'Cheese', price: 300},
  {id: 4, name: 'Fish', price: 1200},
]

console.log(newArr.find((elem) => elem.price <300 ))
// ищит Элемент 
console.log(newArr.filter((elem) => elem.price <500 ))


// сортировка
console.log(arrNum.sort( (a, b) => {
  if (a>b) return 1;
  if (a == b) return 0;
  if (a<b) return -1; 
}))

// сортировкапо фамилии
const arr = array.map((elem) => elem.split(" "))

console.log(arrNum.sort( (a, b) => {
  if (a[1]>b[1]) return 1;
  if (a[1] == b[1]) return 0;
  if (a[1]<b[1]) return -1; 
}))

const res = sorrArr.map((elem) => elem.join(""))