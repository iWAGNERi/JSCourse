// собрать табличку, стилизовать и добавить в ячеки данные



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


btn.addEventListener("click", () => {
  if (btn.innerHTML === btnTextStart) {
    btn.innerHTML = btnTextEnd;
  } else {
    btn.innerHTML = btnTextStart;
  }

  twoColumns.classList.toggle("bg-blue");
  cell13.classList.toggle("bg-blue");
  cell21.classList.toggle("bg-gray");
  cell22.classList.toggle("bg-gray");
  twoRows.classList.toggle("bg-gray");
  twoRows.classList.toggle("color-blue");
  cell31.classList.toggle("bg-light-gray");
  cell32.classList.toggle("bg-light-gray");

  if(twoColumns.classList.contains("bg-blue")) {
		console.log('here')
    twoColumns.innerHTML = columnText;
    twoRows.innerHTML = rowText;
  } else {
    twoColumns.innerHTML = "";
    twoRows.innerHTML = "";
  }
});

//вывести из массива все слова

const arr = ['hello', 'bye', 'ready', 'cucumber', 'language', 'trought', 'length']


