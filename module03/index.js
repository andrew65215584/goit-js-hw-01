// ? task 1

// const user = {
// 	name: 'Mango',
// 	age: 20,
// 	hobby: 'html',
// 	premium: true
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// let keys = Object.keys(user);

// for (let key of keys) {
// 	console.log(` ${key} : ${user[key]} `);
// }

// // ! второй способ преебора

// for (let i = 0; i < keys.length; i++) {
//     console.log(`${keys[i]} : ${user[keys[i]]} `);
// }

// ? task 2

// const countProps = function (obj) {

//     let keys = Object.keys(obj)

//     return keys.length
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// ? task 3

// const findBestEmployee = function(employees) {
// 	let max = 0;
// 	let name;

// 	const keys = Object.keys(employees);

// 	for (let key of keys) {
// 		if (max < employees[key]) {
// 			max = employees[key];
// 			name = key;
// 		}
// 	}

// 	return name;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
// 	findBestEmployee({
// 		ann: 29,
// 		david: 35,
// 		helen: 1,
// 		lorence: 99
// 	})
// ); // lorence

// console.log(
// 	findBestEmployee({
// 		poly: 12,
// 		mango: 17,
// 		ajax: 4
// 	})
// ); // mango

// console.log(
// 	findBestEmployee({
// 		lux: 147,
// 		david: 21,
// 		kiwi: 19,
// 		chelsy: 38
// 	})
// ); // lux

// ? task 4

// const countTotalSalary = function(employees) {
// 	let total = 0;

// 	for (let key in employees) {
// 		total += employees[key];
// 	}

// 	return total;
// };

// /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
// console.log(countTotalSalary({})); // 0

// console.log(
// 	countTotalSalary({
// 		mango: 100,
// 		poly: 150,
// 		alfred: 80
// 	})
// ); // 330

// console.log(
// 	countTotalSalary({
// 		kiwi: 200,
// 		lux: 50,
// 		chelsy: 150
// 	})
// ); // 400

// ? task 5

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function (arr, prop) {
//     let values = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][prop] !== undefined) {
//             let propertyOfProduct = arr[i][prop];

//             values.push(propertyOfProduct);
//         }
//     }

//     return values;
// };

// /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// // console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// // console.log(getAllPropValues(products, 'category')); // []

// ? task 6

// const products = [
// 	{ name: 'Радар', price: 1300, quantity: 4 },
// 	{ name: 'Сканер', price: 2700, quantity: 3 },
// 	{ name: 'Дроид', price: 400, quantity: 7 },
// 	{ name: 'Захват', price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
// 	let result;

// 	for (let i = 0; i < allProdcuts.length; i++) {
// 		let iterable = allProdcuts[i].name;

// 		if (iterable === productName) {
// 			let totalPrice = allProdcuts[i].price;
// 			let totalQuantity = allProdcuts[i].quantity;

// 			result = totalPrice * totalQuantity;
// 		}
// 	}

// 	return result;
// };

// /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// ? task 7

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//     let result;

//     for (let i = 0; i < allProdcuts.length; i++) {
//         let iterable = allProdcuts[i].name;

//         // console.log(iterable)

//         if (iterable === productName) {
//             // console.log('yeeeeeeeeeeeeeeees');

//             let totalPrice = allProdcuts[i].price;
//             let totalQuantity = allProdcuts[i].quantity;

//             result = totalPrice * totalQuantity;
//         }
//     }

//     return result;
// };

// /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

//? task 8

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//     // Текущий баланс счета
//     balance: 0,

//     // История транзакций
//     transactions: [],

//     /*
//      * Метод создает и возвращает объект транзакции.
//      * Принимает сумму и тип транзакции.
//      */
//     createTransaction(amount, type) { },

//     /*
//      * Метод отвечающий за добавление суммы к балансу.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций
//      */
//     deposit(amount) { },

//     /*
//      * Метод отвечающий за снятие суммы с баланса.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций.
//      *
//      * Если amount больше чем текущий баланс, выводи сообщение
//      * о том, что снятие такой суммы не возможно, недостаточно средств.
//      */
//     withdraw(amount) { },

//     /*
//      * Метод возвращает текущий баланс
//      */
//     getBalance() { },

//     /*
//      * Метод ищет и возвращает объект транзации по id
//      */
//     getTransactionDetails(id) { },

//     /*
//      * Метод возвращает количество средств
//      * определенного типа транзакции из всей истории транзакций
//      */
//     getTransactionTotal(type) { },
// };
