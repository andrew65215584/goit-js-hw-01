// class SHOP {
// 	constructor(item, quantity) {
// 		this.item = item;
// 		this.quantity = quantity;
// 	}

// 	showBuy(item) {
// 		console.log(`Вы купили ${this.item}`);
// 	}

// 	buy(item, quantity) {
// 		this.quantity += quantity;
// 	}
// }

// const myShop = new SHOP('socks', 10);

// console.log(myShop);

// const numbers = [1, 2, 3, 4, 22, 25];

// // // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// // 	console.log(numbers[i]);
// // }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// // numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const users = [
// 	{ name: 'Mango', isActive: true },
// 	{ name: 'Poly', isActive: false },
// 	{ name: 'Ajax', isActive: true }
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map((user) => user.name);
// const active = users.map((user) => user.isActive);

// console.log(names); // ["Mango", "Poly", "Ajax"]
// console.log(active);

// 1) Даны два массива: ['a', 'b', 'c'] и[1, 2, 3].Объедините их вместе.

// const a = ['a', 'b', 'c'];
// const b = [1, 2, 3];

// решение 1
// for (let key of a) {
// 	console.log(key);
// 	b.push(key)
// }

// решение 2

// const res = [...a, ...b];
// console.log(res);

// решение 3

// const arr3 = a.concat(b)
// console.log(arr3);

// 2) Дан массив['a', 'b', 'c'].Добавьте ему в конец элементы 1, 2, 3.

// const a = ['a', 'b', 'c'];
// const b = [1, 2, 3];

// for (let key of b) {

// 	a.push(key)
// }

// console.log(a);

// 3) Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1].

// const b = [1, 2, 3].reverse();

// console.log(b);

// 4) Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[1, 2, 3].

// const b = [1, 2, 3, 4, 5];
// const res = b.slice(0, 3)
// console.log(res);

// 5) Дан массив[1, 2, 3, 4, 5].С помощью метода splice преобразуйте массив в[1, 4, 5].// const a = [1, 2, 3, 4, 5];

// const b = [ 1, 2, 3, 4, 5 ];

//  b.splice(1, 2);

// console.log(b);

// function randomInteger(min, max) {
// 	// получить случайное число от (min-0.5) до (max+0.5)
// 	let rand = min - 0.01 + Math.random() * (max - min + 1);
// 	return Math.round(rand);
// }

// -) Записуємо в змінну строку з промта
// -) Зробити строку масивом
// -) Скопіювати масив в нову змінну
// -) Реверсимо масив
// -) З масивів робимо строки

// let message = prompt('Введите, что нибудь');

// let messageInArr = [];
// messageInArr.push(message);

// let copyMessage = messageInArr;
// let reverseMessage = messageInArr.reverse();
// let messageJoin = messageInArr.join();

// console.log(message);
// console.log(messageInArr);
// console.log(copyMessage);
// console.log(reverseMessage);
// console.log(messageJoin);

// const a = [1, 2, 3, 4, 5];

// function getRandomInt(max) {
// 	return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(a.length));

// две стороны вы и комп
// комп даёт рандомное число
// \массив с тремя строками камень ножницы бумага

// ранд число подставляется в индекс массива и выбирается рандомом или камень или ножницы или бумага

// через промпт от юзера строку я ввожу камень

// строку сравниваем с рандомным числом

// const ARRITEM = [ 'камень', 'ножницы', 'бумага' ];

// let computerchoice = Math.round(Math.random() * (ARRITEM.length - 1));

// console.log(`computerchoiceIDX : ${computerchoice}`);
// console.log(`computerchoiceWORD : ${ARRITEM[computerchoice]}`);

// let humanChoice = prompt('Введите одно из трёх значений "Камень", "Ножницы" ,"Бумага" ').toLocaleLowerCase();

// console.log(`humanChoice : ${humanChoice}`);

// let humanCount = 0;
// let computerCount = 0;

// if (humanChoice === 'камень' && computerchoice === 'ножницы') {
// 	humanCount++;
// } else if (humanChoice === 'ножницы' && computerchoice === 'камень') {
// 	computerCount++;
// } else if (humanChoice === 'камень' && computerchoice === 'бумага') {
// 	computerCount++;
// } else if (humanChoice === 'бумага' && computerchoice === 'камень') {
// 	humanCount++;
// }

// человек камень  vs  машина камень
// человек камень  vs  машина ножницы
// человек камень  vs  машина бумага

// человек ножницы  vs  машина камень
// человек ножницы  vs  машина ножницы
// человек ножницы  vs  машина бумага

// человек бумага  vs  машина камень
// человек бумага  vs  машина ножницы
// человек бумага  vs  машина бумага

// new task ----------------------

// let creaturesArr = [];
// class Creature {
// 	constructor(type, planet, status, sex) {
// 		this.type = type;
// 		this.planet = planet;
// 		this.status = status;
// 		this.sex = sex;
// 	}
// 	get show() {
// 		return (`This ${this.type} is from ${this.planet} and has ${this.status} status`)
// 	}
// 	set changePlanet(str) {
// 		this.planet = str;
// 		return this.planet
// 	}
// 	static intro() {
// 		console.log("There is a billions types of creatures all around the world!")
// 	}
// 	static checkCreatures() {
// 		console.log(creaturesArr)
// 	}
// }

// class Human extends Creature {
// 	constructor(name, type, planet, status, sex, nationality) {
// 		super(type, planet, status, sex);
// 		this.name = name;
// 		this.nationality = nationality;
// 	}
// 	addToCreaturesList() {
// 		creaturesArr.push({ name: this.name, planet: this.planet, nationlity: this.nationality })
// 	}
// }

// let Adam = new Human('Adam', 'human', 'Mars', 'three-dimensional', 'male', 'Ukrainian');
// Adam.addToCreaturesList();
// let Eva = new Human('Eva', 'human', 'Venus', 'three-dimensional', 'female', 'Ukrainian')
// Eva.addToCreaturesList();
// Creature.checkCreatures();

// class Halk extends Creature {
// 	constructor(name, type, planet, status, sex, nationality, typeOfSkin) {

// 		super( type, planet, status, sex);
// 		this.name = name;
// 		this.nationality = nationality;
// 		this.typeOfSkin = typeOfSkin;
// 	}

// 	addToCreaturesList() {
// 		creaturesArr.push({ name: this.name, type: this.type, planet: this.planet, nationlity: this.nationality, typeOfSkin: this.typeOfSkin })
// 	}

// }

// let andrewHulk = new Halk('andrewHulk', 'human', 'Mars', 'three-dimensional', 'male', 'Ukrainian', 'green-Armor')
// andrewHulk.addToCreaturesList()

// console.log(andrewHulk);
// console.log(creaturesArr);

// ? new task

// ________________________TASK#1
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).

//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:

// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}
// 	getFullName() {
// 		return this.name, this.surname
// 	}
// }

// class Student extends User {
// 	constructor(name, surname, yearWhenYouStart) {
// 		super(name, surname);
// 		this.yearWhenYouStart = yearWhenYouStart;
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getCourse(currentYear) {

// 	}
// }

// // Вот так должен работать наш класс:
// let student = new Student('Иван', 'Иванов', 2017);
// // console.log(student.name); //выведет 'Иван'
// // console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2017console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
// // student.getCourse();

// class Student {
//   constructor (){}
// }

// console.log(typeof Student);

// ? Задачки от валеры на усвоение

// 1) Создать масив в котором запишется каждый элемент исходного масива * 2;

// const numbers = [ 1, 2, 3, 4, 5 ];

// const newNumbers = numbers.map((item) => item * 2);
// console.log(newNumbers);

//? 2) Создать масив в котором поочерёдно перечисляется длина элементов исходного масиваж

// var arr = ["Есть", "жизнь", "на", "Марсе"];

// const newArr = arr.map(item => item.length)

// console.log(newArr);

//? 3) Посчитайте все лайки пользователей
// const tweets = [

// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes);

// ? 4) Найдите все обьекты у которых есть тег 'js'(массив tweets);

// const available = tweets.filter(tagss => tagss.tags.includes("js"));

// console.log(available);

//? 5) Создайте функцию которая будет подсчитывать сумму всех переданных ей нечётных(!) аргументов;

// const arrNumber = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const filteredNumbers = arrNumber.filter((element, i) => !(i % 2));
// console.log(filteredNumbers);

// const sum = filteredNumbers.reduce((a, b) => a + b, 0);
// console.log(sum);

// ! второе решение от ментора

// const fn = function (...arr) {
// 	console.log(arr)
// 	let sum = arr.reduce((acc, el) => {
// 		el % 2 !== 0 ? acc += el : '';
// 		return acc
// 	}, 0);
// 	return sum
// };
// console.log(fn(1, 2, 3, 4, 5))

//? 6) Отсортируйте масив по возрасту юзеров;

// let items = [
// 	{ name: 'Миша', age: 23 },
// 	{ name: 'Вася', age: 44 },
// 	{ name: 'Саша', age: 2 },
// 	{ name: 'Рома', age: 99 },
// 	{ name: 'Ашот', age: 19 }
// ];

// const filteredItems = items.sort((a, b) => a.age - b.age);

// console.log(filteredItems);

//? 7) Замените каждый елемент массива на 0; (Метод fill)

// let x = [1, 2, 3, "a", "b", "c"];

// x.fill(0);

// console.log(x);

//?  8) Проверьте есть ли хотя бы один элемент больше 30 ? Верните true / false
// const arr = [ 10, 20, 30, 40 ];

// const res = arr.some((el) => el > 30);

// console.log(res);

// ? 9) Найдите короля района

// let items = [
// 	{ name: "Миша", age: 23, isTheKingOfNeighbourhood: false },
// 	{ name: "Вася", age: 44, isTheKingOfNeighbourhood: false },
// 	{ name: "Саша", age: 2, isTheKingOfNeighbourhood: false },
// 	{ name: "Рома", age: 99, isTheKingOfNeighbourhood: false },
// 	{ name: "Ашот", age: 19, isTheKingOfNeighbourhood: true }

// ];

// const king = items.find(kings => kings.isTheKingOfNeighbourhood === true)
// console.log(king);

// 10) Поменяйте статус юзера на "неактивен", если daysInactive больше 10;

// const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: true },
//     { name: "Ajax", daysInactive: 12, isActive: true }
// ];

// users.forEach((num) => {
//     if (num.daysInactive > 10) {
//         num.isActive = false
//     }
// })
// console.log(users);

// 11) Создайте ф - цию которая принимает строку и возвращает её записанную "Заборчиком"(ПрИвЕт)

// const myFunction = function(str) {
// 	let res = str.split('');

// 	let result = res
// 		.map((el, idx) => {
// 			if (!(idx % 2)) {
// 				return el.toUpperCase();
// 			} else {
// 				return el;
// 			}
// 		})
// 		.join('');

// 	return result;
// };

// console.log(myFunction('привет'));

// const camelC = (word) => {
//     const newAr = [...word];
//     const resultC = newAr.reduce((acc, char, index) => {
//         if (index % 2 != 0) {
//             acc += char.toLowerCase();
//         } else {
//             acc += char.toUpperCase();
//         }
//         return acc;
//     }, "");
//     return resultC;
// };

// console.log(camelC("Привет"));
