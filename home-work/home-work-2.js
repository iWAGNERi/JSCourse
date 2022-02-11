// ДЗ Урока № 2
// Задание № 1 То что делали с неделей сделать с месяцем(через свитч, иф елсе) и для хардкорных через тернарник

// РАБОТАЕТ 1.1 switch
let month = +prompt("Введите номер месяца. Начало 1 — January");

switch (month) {
  case 1:
    console.log(`${month} — January`);
    break;
  case 2:
    console.log(`${month} — February`);
    break;
  case 3:
    console.log(`${month} — March`);
    break;
  case 4:
    console.log(`${month} — April`);
    break;
  case 5:
    console.log(`${month} — May`);
    break;
  case 6:
    console.log(`${month} — June`);
    break;
  case 7:
    console.log(`${month} — Jule`);
    break;
  case 8:
    console.log(`${month} — August`);
    break;
  case 9:
    console.log(`${month} — September`);
    break;
  case 10:
    console.log(`${month} — October`);
    break;
  case 11:
    console.log(`${month} — November`);
    break;
  case 12:
    console.log(`${month} — December`);
    break;
	default:
		alert(`Неправильный ввод — ${month} 
		\nПожалуйста, введите число в диапазоне от 1 до 12`)
}

// РАБОТАЕТ 1.2 else if

let month = +prompt("Введите номер месяца. Начало 1 — January");

if (month == 1) {
  console.log(`${month} — January`);
} else if (month == 2) {
  console.log(`${month} — February`);
} else if (month == 3) {
  console.log(`${month} — March`);
} else if (month == 4) {
  console.log(`${month} — April`);
} else if (month == 5) {
  console.log(`${month} — May`);
} else if (month == 6) {
  console.log(`${month} — June`);
} else if (month == 7) {
  console.log(`${month} — Jule`);
} else if (month == 8) {
  console.log(`${month} — August`);
} else if (month == 9) {
  console.log(`${month} — September`);
} else if (month == 10) {
  console.log(`${month} — October`);
} else if (month == 11) {
  console.log(`${month} — November`);
} else if (month == 12) {
  console.log(`${month} — December`);
} else {
  alert(`Неправильный ввод — ${month} 
\nПожалуйста, введите число в диапазоне от 1 до 12`);
}


// НЕ РАБОТАЕТ тернарный оператор js несколько условий 

let month = +prompt("Введите номер месяца. Начало 1 — January");


(month == 1) ? console.log(`${month} — January`):
	month == 2 ? console.log(`${month} — February`):
		month == 3 ? console.log(`${month} — March`) : 
			month == 4 ? console.log(`${month} — April`):
				month == 5 ? console.log(`${month} — May`):
					month == 6 ? console.log(`${month} — June`):
						month == 7 ? console.log(`${month} — Jule`):
							month == 8 ? console.log(`${month} — August`):
								month == 9 ? console.log(`${month} — September`):
									month == 10 ? console.log(`${month} — October`):
										month == 11 ? console.log(`${month} — November`):
											month == 12 ? console.log(`${month} — December`):
												 alert(`Неправильный ввод — ${month} \nПожалуйста, введите число в диапазоне от 1 до 12`)
// РАБОТАЕТ, НО ЕСТЬ НЮАНСЫ Задание № 2 Написать калькулятор (пользователь вводит число 1, потом число2, и вводит знак(*,/,+,-) и в алерте вывести ответ)

let numberOne = +prompt("Введите первое число");
let numberTwo = +prompt("Введите второе число");
let numberOperator = prompt("Введите действие");
let result = null;


if (numberOperator == "+") {
  result = numberOne + numberTwo;
} else if (numberOperator == "-") {
  result = numberOne + numberTwo;
} else if (numberOperator == "*") {
  result = numberOne * numberTwo;
} else if (numberOperator == "/") {
  result = numberOne / numberTwo;
} else {
  alert(`Ошибка в данных — ${numberOne}, ${numberOperator}, ${numberTwo}`);
}

alert(`${numberOne} ${numberOperator} ${numberTwo} = ${result}`);

// НЕ РАБОТАЕТ ВООБЩЕ Задание № 3 Для тех кто только программирует, пользователь вводит строку, а в алерте является ли строка палиндром да или нет
let userString = prompt("Введите фразу");

// разделить на символы

let strSplit = userString.split("");
console.log(`${strSplit} — strSplit`);


// удалить пробелы

let strReplace = strSplit.replace(" ", "");
console.log(`${strReplace} — strReplace`);


// перевернуть строку

let strReverce = strReplace.reverse();
console.log(`${strReplace} — strReplace`);

// склеить строку 

let strSplitNew = join("strSplit");
console.log(`${strSplitNew} — strSplitNew`);

// склеить перевернутую строку

let strReverceNew = join("strReverce");
console.log(`${strReverceNew} — strSplitNew`);

// сравнить строки

if (strSplitNew == strReverceNew) {
  alert(`${userString} — это палиндром `);
} else {
  alert(`${userString} — это НЕ палиндром `);
}


