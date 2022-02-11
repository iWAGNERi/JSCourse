// 1) Необходимо вывести на экран таблицу умножения на 3:

const three = 3
let result = 0
for (let i = 1; i<=10; i++) {
  result = three * i
  console.log(`${three} * ${i} = ${result}`)
}



// 2) Гражданин 1 марта открыл счет в банке, вложив 1000 руб. Через каждый месяц размер вклада увеличивается на 2% от имеющейся суммы. Определить:
// а) за какой месяц величина ежемесячного увеличения вклада превысит 30 руб.;
// б) через сколько месяцев размер вклада превысит 1200 руб.


let startCheck = 1000
let result = startCheck
const precent =  1.02
let countMonth = 1


while(result <= 2000) {
  result*=precent
  ++countMonth
}

console.log(countMonth)

while(result * precent - result < 30) {
  result *= precent;
  ++countMonth
}


console.log(countMonth)
