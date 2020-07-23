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

