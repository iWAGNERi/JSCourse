// НЕ СДЕЛАНО

// Объекты и циклы получить все из объекта. Ключ значение

// 1. У нас есть следующий объект:

// Проверьте программно, что этот объект не пустой и что в нем есть ключ age.

// 2. Имеется массив объектов:

// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.

// 3. Удалите из массива объектов, задание 2, объект с name == "Anna".

// 4. Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.



let user = [
	{
		name: "John",
		age: 30
	},
	{
		name: "Bob",
		age: 21
	},
	{
		name: "Anna",
		age: 18
	}
	]
	
	
	for (let key of Object.keys(user)) {
		console.log(key); 
	}
	
	if (user) {
		console.log('объект не пустой')
		for(let key in user) {
			if (user[key] == "age") {
				console.log('age')
				break
			}
		}
	}
	else {
		console.log('объект пустой')
	}

	// 

	let user = {
		name: "John",
		age: 30,
	};
	
	const checkFunc = (obj, checkStr) => {
		for (let key in obj) {
			if (key === checkStr) {
				return obj[checkStr];
			}
		}
		return false;
	};
	
	console.log(checkFunc(user, 'age'));


	let user = [
		{
			name: "John",
			age: 30,
		},
		{
			name: "Bob",
			age: 21,
		},
		{
			name: "Anna",
			age: 18,
		},
	];
	
	const fundObj = (arr, name) => {
		const res = arr.find((item) => item.name === name);
		if (res) {
			return res;
		}
		return false;
	};
	
	console.log(fundObj(user, "Bob"));


	const deleteObj = (arr, name) => {
		const res = arr.findIndex((item) => item.name === name);
		if (res !== -1) {
			arr.splice(res, 1)
			return  arr;
		}
		return false;
	};
	
	console.log(deleteObj(user, "Anna"));


	//

	let user = [
		{
				name: "John",
				age: 30
		},
		{
				name: "Bob",
				age: 21
		},
		{
				name: "Anna",
				age: 19
		}
	]
	
	const fundObj = (arr, name) => {
		const res = arr.find((item) => item.name === name)
		if (res) {
				return res
		}
		return false
	}
	
	const deleteObj = (arr, name) => {
		const res = arr.findIndex((item) => item.name === name)
		if (res !== -1) {
				arr.splice(res, 1)
				return arr
		}
		return false
	}
	
	const sortObj = (arr, key) => {
		let check = false
	
		const res = arr.sort((a, b) => {
				if (a[key] < b[key]) {
						return -1
				}
				if (a[key] > b[key]) {
						return 1
				}
				if (a[key] === b[key]) {
						return 0
				}
		})
	
		arr.forEach((item) => {
				for (let keyArr in item) {
						if (keyArr === key) {
								check = true
						}
				}
		})
	
		if (check) {
				return res
		}
		return false
	}
	
	// console.log(fundObj(user, 'Boba'))
	// console.log(deleteObj(user, 'Anna'))
	console.log(sortObj(user, 'age'))
	
	
	