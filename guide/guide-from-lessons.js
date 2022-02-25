// Первое задание

let numberOne = +prompt("Введите число");
let numberTwo = +prompt("Введите еще число");

let summNumbers = numberOne + numberTwo;
let differenceNumbers = numberOne - numberTwo;
let devisionNumbers = numberOne / numberTwo;
let multplicationNumbers = numberOne * numberTwo;

console.log("первое число = " + numberOne + "\nвторое число = " + numberTwo + "\nсумма чисел = " + summNumbers + "\nразность чисел = " + differenceNumbers + "\nчастное чисел = " + devisionNumbers + "\nпроизведение чисел = " + numberOne * numberTwo);

alert("сумма чисел = " + summNumbers + "\n разность чисел = " + differenceNumbers + "\n частное чисел = " + devisionNumbers + "\n произведение чисел = " + numberOne * numberTwo);

// Второе задание

let userName = prompt("Введите ваше имя");
let userSurname = prompt("Введите вашу фамилию");
let userAge = prompt("Введите ваш возраст");

console.log(userName + " " + userSurname + "\nВозраст — " + userAge);

alert(userName + " " + userSurname + "\nВозраст — " + userAge);

// Создание шаблона строки вместо +

let userName = prompt("Введите ваше имя");
let userSurname = prompt("Введите вашу фамилию");

alert(`Your name: ${userName}, Your surname: ${userSurname}`);

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

let weekDay = +prompt("Введите число дня недели. Начало 0 — Воскресенье");

switch (weekDay) {
  case 0:
    console.log(`${weekDay} — Воскресенье`);
    break;
  case 1:
    console.log(`${weekDay} — Понедельник`);
    break;
  case 2:
    console.log(`${weekDay} — Вторник`);
    break;
  case 3:
    console.log(`${weekDay} — Среда`);
    break;
  case 4:
    console.log(`${weekDay} — Четверг`);
    break;
  case 5:
    console.log(`${weekDay} — Пятница`);
    break;
  case 6:
    console.log(`${weekDay} — Суббота`);
    break;
  default:
    console.loge;
}

// тернарник

0 > 1 ? console.log(1) : 2 > 1 ? console.log(3) : console.log(4);

// Циклы

for (let i = 0; i < 101; i++) {
  console.log(i === 100);
}

// вывод по буквенно

let str = "Данила";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Шаг 2 в цикле

let str = "Данила";

for (let i = 0; i < str.length; i += 2) {
  console.log(str[i]);
}

// вывод по буквенно с конца

let str = "Данила";

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

// проверка на деление на число (на 3)

for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0) {
    console.log(i);
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

let i = 0;
while (true) {
  let numberOne = +prompt("Введите число");
  let numberTwo = +prompt("Введите еще число");

  result = numberOne + numberTwo;

  alert(`${result}`);
}

// складываем числа в промежутке

// for
let numberOne = +prompt("Введите число");

let result = 0;

for (let i = 1; i <= numberOne; i++) {
  result += i;
}

console.log(result);

// while
let numberOne = +prompt("Введите число");
let i = 1;
let result = 0;

while (i <= numberOne) {
  result += i;
  i++;
}

console.log(result);

// цикл do while

let numberOne = +prompt("Введите число");
let i = 1;
let result = 0;

do {
  result += i;
  i++;
} while (i <= numberOne);

console.log(result);

// Найти сумму чисел от - 100 до -10, которые делятся на 5

let result = 0;

for (let i = -100; i <= -10; i++) {
  if (i % 5 === 0) {
    result += i;
  }
}

console.log(result);

// Массив

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// массивы это структура данных
// у него есть ключи и занчения

let array = ["Алексей", "Данила", "Феля", "Анна"];

console.log(array[array.length - 1]); // Anna

array.push("Сергей"); // push добавляет в конец
array.pop(); //удаляет из конеца
array.unshift("Михаил"); // добавляет в начало
array.shift(); // удаляет из начала начало

array.splice;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.splice(0, 2, 22, 33); // с чего начать, сколько удалить, сколько встаить

allary.splice(0, array.length); // удалить все элементы массива, последний элемент не включается, к длине не прибваляется 1

array.splice(0, 0, 22, 33); // с чего начать, сколько вставить, сколько встаить

let array = ["Алексей", "Данила", "Федя", "Анна", "Аля", "Катя"];

let newArr = array.slice(0, 3); // (начинаем, заканчиваем) последний не включается (получается до второго) Метод копирует массив

console.log(newArr);

// перебирает все элементы массива как цикл for

let array = [11, 22, 33, 44, 55, 66];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach((elem) => {
  console.log(elem);
});

// новый массив

let array = [11, 22, 33, 44, 55, 66];

array.forEach((elem) => {
  console.log(elem);
});

// новый массив

let newArr = array.map((elem) => {
  return elem + 100;
});

let newArr = array.map((elem) => +100);

// функции

function getSum(num1) {
  console.log(num1);
}

getSum(11);

function getSum(num1) {
  console.log(num1);
}

getSum(11);

const getSum = (num1, num2) => {
  console.log(num1 + num2);
  return num1 + num2;
};

const getSum = (num1, num2) => num1 + num2;

console.log(getSum(11, 22));

function getSum(num1, num2) {
  return num1 + num2;
}

console.log(getSum(22, 33));

function getMin(num1, num2) {
  console.log(num1 + num2);
}

const getMult = (num1) => {
  return num1 / 2;
};

getMult(11);

const getSum = (num1, num2) => {
  return num1 + num2;
};

const getDouble = (nuem, num2, callback) => {
  return callback(num1, num2) * callback(num, num2);
};

getDouble(10, 10, getSum);

const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey"];

array.forEach((elem, index, arr) => {
  console.log(elem);
  console.log(index);
  console.log(arr);
});

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
    array.splice(index, 1, item + " Шепелева");
    console.log(arr);
  }
});

// создает новый массив измененный

const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];

const NewArr = array.map((item) => {
  if (item === "Yana") {
    return item + " Shepeleva";
  }
  return item;
});

console.log(array);
console.log(NewArr);

// создает новый массив измененный в одну строку
const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];

const NewArr = array.map((item) => "developer " + item);

console.log(array);
console.log(NewArr);

const array = ["Danila", "Alexey", "Mihail", "Yana", "Irina", "Sergey", "Ekaterina", "Ivan"];

// создает новый массив измененный c return
const NewArr = array.map((item) => {
  return "developer " + item;
});

console.log(array);
console.log(NewArr);

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

array.indexOf("Yana");

// Возвращает индекс массива c конца если их несколько
array.lastIndexOf("Yana");

// есть или нет элемент в массиве
console.log(array.includes("Yana"));

// ищит Элемнет
console.log(
  array.find((elem) => {
    return elem === "Yana";
  })
);

const newArr = [
  { id: 1, name: "Patato", price: 100 },
  { id: 2, name: "Tomato", price: 250 },
  { id: 3, name: "Cheese", price: 300 },
  { id: 4, name: "Fish", price: 1200 },
];

console.log(newArr.find((elem) => elem.price < 300));
// ищит Элемент Вернет то что соответсвует условию — новый массив
console.log(newArr.filter((elem) => elem.price < 500));

// сортировка
console.log(
  arrNum.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  })
);

// сортировкапо фамилии, сепаратор задаем. разделит строку в массив
const arr = array.map((elem) => elem.split(" "));

console.log(
  arrNum.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] == b[1]) return 0;
    if (a[1] < b[1]) return -1;
  })
);

const res = sorrArr.map((elem) => elem.join(""));

// изменить элемент в массиве
const array = [100, 200, 500, 1, -60, 38, 3434];

const changeArray = (array, index, newValue) => {
  array.splice(index, 1, newValue);
  return array;
};

console.log(changeArray(array, 0, 10));

// Максимальное число из массива

const array = [100, 200, 500, 1, -60, 38, 3434];
const getMax = (array) => {
  let res = -100000000000;
  array.forEach((item) => {
    if (item > res) {
      res = item;
    }
  });
  return res;
};

console.log(getMax(array));

// Максимальное число из массива

function maxNumberOfArray(array) {
  return Math.max(...array);
}

// Объекты — ключи строковые. Тип данных и структура данных
// Массив — индексы ключи
const car = {
  moldelCar: "Rerrari",
  maxSpeed: "330",
};

console.log(car.moldelCar);
console.log(car.maxSpeed);

//Классы объекты просто шаблон описывающий функционал, надо создать новый экземлпяр этого класса

class calculate {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  getSum() {
    return this.num1 + this.num2;
  }
  getMinus() {
    return this.num1 - this.num2;
  }
  getMultiple() {
    return this.num1 * this.num2;
  }
  getDelenie() {
    return this.num1 / this.num2;
  }
}

const calc1 = new calculate(10, 20);
const calc2 = new calculate(100, 200);

console.log(calcl.num1);
console.log(calc1.getSum());
console.log(calc2.getSum());

// напистаь класс у котрого в конструкторе принимает аргументы, тип животного, вес животного, звук животного. Написать внутри класса функцию которая будте возвращать звук животного ЕСЛИ какое-то действие, то дожна быть функция

class Animal {
  constructor(type, weight, sound) {
    this.type = type;
    this.weight = weight;
    this.sound = sound;
  }
  getType() {
    return this.type;
  }
  getWeight() {
    return this.weight;
  }
  getSound() {
    return this.sound;
  }
}

const cat = new Animal("cat", 5, "Мяу");

console.log(cat.sound);

// Наследование класса

class AnimalWater extends Animal {
  constructor(type, weight, sound, fins) {
    super(type, weight, sound);
    this.fins = fins;
  }
  getSwim() {
    return true;
  }
}

const fish = new AnimalWater("Karas", 2, "hlup-hlup", 4);

console.log(fish.sayHi());
console.log(fish.getSwim());

// Объекты — ключи строковые  — изменяем, заменяем, удаляем, добавляем

const car = {
  moldel: "BMW",
  speed: "250",
};

car.color = "black";

delete car.speed;

car.moldel = "Mercedes";

console.log(car.speed);
console.log(car.moldel);
console.log(car);

// Объекты — изменяем, заменяем, удаляем, добавляем

const car = {
  moldel: "BMW",
  speed: "250",
  color: "black",
};

car.moldel = "mercedes";
car.color = "white";

delete car.speed;

car.price = 6000000;

console.log(car);


// Объекты — скобочная Нотация, два слова

const car = {
  moldel: "BMW",
  speed: "250",
  color: "black",
	"left door": "violet"
};

console.log(car['left door'])

// Объект в объекте

const autoSalon = {
	addres: "Moscow",
	carInStock: [
		{model: 'merseces', color: 'white'},
		{model: 'bmw', color: 'blue'},
		{model: 'volvo', color: 'green'},
		{model: 'kia', color: 'gray'},
	]
};



console.log(autoSalon.carInStock[2]);
console.log(autoSalon.carInStock[2].model);
console.log(autoSalon.carInStock[2].color);


// Объекты и циклы получить все из объекта. Ключ значение


const autoSalon = {
	addres: "Moscow",
	carInStock: [
		{model: 'merseces', color: 'white'},
		{model: 'bmw', color: 'blue'},
		{model: 'volvo', color: 'green'},
		{model: 'kia', color: 'gray'},
	],
	middlPrise: 1000000
};


for(let key in autoSalon) {
	console.log(key)
	console.log(autoSalon[key])
}


let data = null

fetch ('') 
  .then((res) => res.json ())
  .then((res)=> data = res)
  .then(()=>console.log(data.name))


let requestedURL = "https://pokeapi.co/api/v2/berry/1";

fetch(requestedURL)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(`Ошибка в запросе ${err}`))


  let requestedURL = "https://constructor.kenguru.pro/api/equipment-items/";


// let username = 'user';
// let password = 'passwd';

// let headers = new Headers();

// //headers.append('Content-Type', 'text/json');
// headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));  

fetch(requestedURL)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(`Ошибка в запросе ${err}`))

// выбор свойства внутри массива

const pokeName = prompt()

let requestedURL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

console.log(requestedURL)

fetch(requestedURL)
  .then((data) => data.json())
  .then((data) => alert(data.abilities[0].ability.name))
  .catch((err) => console.log(`Ошибка в запросе ${err}`))

// асинхронность async await/ await — что нужно ждать


const getReq = async () => {
  let data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  data = data.json();
  return data;
};

// обработка запроса

getReq()
  .then((dta) => console.log(data))

// забираем свойство абилити 

const getReq = async () => {
  let data = await fetch("https://pokeapi.co/api/v2/pokemon/132");
  data = data.json();
  console.log(data)
  return data;
};

getReq()
  .then((data) => console.log(data.abilities[0].ability.name))

// фнукция вызывает функцию


let mainData = null


const getReq = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/132");
  mainData = await data.json()
};


const goData = async () => {
  await getReq()
  console.log(mainData)
}

goData()

//DOM


// Вернет только первое совпадение
console.log(document.querySelector('.block1'))

console.log(document.querySelector('.block1')[1])

// Найти все совпадения

console.log(document.querySelectorAll('#id'))
console.log(document.querySelector('#id'))
console.log(document.getElementById('id'))

console.log(document.querySelector('h1'))
console.log(document.querySelector('.text'))
console.log(document.querySelector('#first-id>div'))
console.log(document.querySelector('.block1'))
console.log(document.querySelectorAll('p'))


// все очистить
body.innerHTML

// добавляем данные

p.innerHTML = 'hello'

// добавляем данные
const body = document.querySelector('body')

const p = document.createElement('p')
p.innerHTML = 'hello'

body.append(p)

const newP = document.createElement('p')
newP.innerHTML = 'bye'
body.append(newP)

// 

const block = document.querySelector(".block");

for(let i = 0; i < 13; i++) {
  let newP = document.createElement('p')
  newP.innerHTML = i + 1;
  block.append(newP);
}

// найти элемент
// добавить элемент на страницу
// создать элемент
// добавить содержимое внутрь элемента

const body = document.querySelector('body')
const div = document.createElement("div");

for(let i = 0; i < 12; i++) {
  let newP = document.createElement('p')
  newP.innerHTML = i + 1;
  div.append(newP);
}
body.append(div);

// задать элементу класс 

const div = document.querySelector('.block')


div.classList.add('block-open')


// удалить элементу класс 

const div = document.querySelector('.block')


div.classList.add('block-open')

div.classList.remove('block')

// задать элементу класс 

const div = document.querySelector('.block')


div.classList.add('block-open')
console.log(div.classList)

// добавляе меняем класс 

const block = document.querySelector('.block')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () =>{
  console.log(block.classList)
  if(block.classList == 'block'){

  block.classList.add('block-open')
  }
  else {
    block.classList.remove('block-open')
  }
})

// изменить стиль

const block = document.querySelector('.block')

block.style.display = block
block.style.height="500px"

// добавить id df
block.id ='id'

block.getAttribute('herf', '1234')


