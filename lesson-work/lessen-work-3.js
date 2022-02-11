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

console.log(array)