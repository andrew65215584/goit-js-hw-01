// Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.

// let schedule = {};

// function isEmpty(obj) {

//    const keys = Object.keys(obj)

//     if (keys.length === 0) {
//         return true;
//     } else {
//         return false
//     }

// }

// // alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// ? task 2

// let salaries = {
// 	john: 100,
// 	ann: 160,
// 	pete: 130
// };

// const sumSalaries = function(obj) {
// 	let sum = 0;

// 	for (let keys in obj) {
// 		sum += obj[keys];
// 	}

// 	return sum;
// };

// alert(sumSalaries(salaries));

// ? task 3
// #4
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//     height: null,
//     weight: undefined,
// };

// const multiplyNumeric = function (object) {

//     for (let keys in object) {

//         if (typeof object[keys] == "number")
//             object[keys] = object[keys] * 2;
//     }

//     return object;
// }

// console.log(multiplyNumeric(menu));

//? task 4 object

// const object = {
// 	name: 'Петр',
// 	surname: 'Петров',
// 	age: '20 лет'
// };

// const { name = "Антоном", surname = "Анонимович", age = '? лет' } = object;
// console.log(object);
// console.log(name);

// ? 5 object

// function fizzBazz(n) {
//     for (let i = 1; i <= n; i++) {

//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }

// 	}
// }

// fizzBazz(133);



// const fizzBuzz = function (n) {
//     for (let i = 1; i <= n; i += 1) {
//         if (i % 3 && i % 5) {
//             console.log(i);
//         } else if (i % 3) {
//             console.log("buzz");
//         } else if (i % 5) {
//             console.log("fizz");
//         } else {
//             console.log("fizzbuzz");
//         }
//     }
// };
// fizzBuzz(15);

// ? task 6 object

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//     read: function (...params) {
//         for (let i = 0; i < params.length; i++) {
//             this[i] = params[i];
//         }
//     },
//     sum: function () {
//         let arr = Object.values(calculator);
//         let sum = 0;
//         for (let el of arr) {
//             if (typeof el === "number") {
//                 sum += el;
//             }
//         }
//         return sum;
//     },
//     mul: function () {
//         let arr = Object.values(calculator);
//         let mul = 1;
//         for (let el of arr) {
//             if (typeof el === "number") {
//                 mul *= el;
//             }
//         }
//         return mul;
//     }
// };
// calculator.read(3, 4, 5, 6, 7, 8, 10);
// alert(calculator.sum());
// alert(calculator.mul());
// console.log(calculator);
