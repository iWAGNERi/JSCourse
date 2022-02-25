// собрать табличку, стилизовать и добавить в ячеки данные

let btnStatus = false;

let btnTextStart = "Заполнить таблицу";
let btnTextEnd = "Очистить таблицу";
let columnText = '<b>colspan = "2"</b>';
let rowText = '<span>rowspan = <b>"2"</b></span>';
const twoColumns = document.querySelector(".two-columns");
const twoRows = document.querySelector(".two-rows");
const cell13 = document.querySelector(".cell-13");
const cell21 = document.querySelector(".cell-21");
const cell22 = document.querySelector(".cell-22");
const cell31 = document.querySelector(".cell-31");
const cell32 = document.querySelector(".cell-32");
const btn = document.querySelector(".btn");

function btnStatusTrue() {
  btn.innerHTML = btnTextEnd;
  twoColumns.classList.add("bg-blue");
  cell13.classList.add("bg-blue");
  cell21.classList.add("bg-gray");
  cell22.classList.add("bg-gray");
  twoRows.classList.add("bg-gray");
  twoRows.classList.add("color-blue");
  cell31.classList.add("bg-light-gray");
  cell32.classList.add("bg-light-gray");
  twoColumns.innerHTML = columnText;
  twoRows.innerHTML = rowText;
  btnStatus = true;
}

function btnStatusFalse() {
  twoColumns.innerHTML = "";
  twoRows.innerHTML = "";
  btn.innerHTML = btnTextStart;
  twoColumns.classList.remove("bg-blue");
  cell13.classList.remove("bg-blue");
  cell21.classList.remove("bg-gray");
  cell22.classList.remove("bg-gray");
  twoRows.classList.remove("bg-gray");
  twoRows.classList.remove("color-blue");
  cell31.classList.remove("bg-light-gray");
  cell32.classList.remove("bg-light-gray");
  btnStatus = false;
}

btn.addEventListener("click", () => {
  if (btnStatus == false) {
    btnStatusTrue();
  } else {
    btnStatusFalse();
  }
});

//вывести из массива все слова

const arr = ["hello", "bye", "ready", "cucumber", "language", "trought", "length"];
const body = document.querySelector("body");
const divArr = document.querySelector(".arr");

for (let i = 0; i < arr.length; i++) {
  let newP = document.createElement("p");
  newP.innerHTML = arr[i];
  divArr.append(newP);
}
