// Задание 1

let newArray = [ 2, 3, 4 , 5]

// [1, 3, 33, 44, 4, 5]

newArray.shift()
newArray.shift()
newArray.unshift(1, 3, 33, 44)

console.log(newArray)

// Задание 2

let array = ['Алексей','Данила', 'Феля', 'Анна' ]

array.splice(1, 1, 'Aля', 33)

// напистаь класс у котрого в конструкторе принимает аргументы, тип животного, вес животного, звук животного. Написать внутри класса функцию которая будте возвращать звук животного ЕСЛИ какое-то действие, то дожна быть функция

class Animal {
	constructor(type, weight, sound) {
		this.type = type
		this.weight = weight
		this.sound = sound
	}
	getType(){
		return this.type 
	}
	getWeight(){
		return this.weight 
	}
	getSound(){
		return this.sound
	}
}

const cat = new Animal('cat', 5, 'Мяу')


console.log(cat.sound)

// замыкание

function getSumDifficult(num1, num2) {
  let num3 = 10;

  return num1 + num2 + num3;
}


console.log(getSumDifficult(100,200))

console.log(num3) //не достучатся 

//
function getSumDifficult(num1, num2) {
  let num3 = 10;

  function getMinusDifficult(num1, num2) {
    let num4 = 1000
    return num1 - num2 - num4

  }

  return num1 + num2 + num3;
}


console.log(getSumDifficult(100,200))

console.log(num3) //не достучатся 

//

function getSumDifficult(num1, num2) {
  let num3 = 10;

  function getMinusDifficult(num1, num2) {
    let num4 = 1000
    return num1 - num2 - num4

  }
  

  return num1 + num2 + num3 + getMinusDifficult(num1, num2)
}


console.log(getSumDifficult(100,200))

console.log(num3) //не достучатся 

// cnhtkjxyst

const getSumDifficult=(num1, num2) => {
  let num3 = 10;

  const getMinusDifficult=(num1, num2) => {
    let num4 = 1000
    return num1 - num2 - num4

  }
  

  return num1 + num2 + num3 + getMinusDifficult(num1, num2)
}


console.log(getSumDifficult(100,200))

// Промисы

console.log(1)

setTimeout(()=> {
  console.log(2)

}, 500)

console.log(3)

//

let data = null

fetch ('') 
  .then((res) => res.json ())
  .then((res)=> data = res)
  .then(()=>console.log(data.name))