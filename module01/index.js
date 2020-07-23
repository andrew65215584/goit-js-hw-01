// task 1-----------------------------------------------------------

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

//task 2 ----------------------------------------------------------

// let total = 100;
// let ordered = 50;

// if (total < ordered ) {
//     console.log('На складе недостаточно товаров!')
// }else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }

//task 3 ------------------------------------------------------------

// let message = prompt('Введите ваш пароль');
// const ADMIN_PASSWORD = 'jqueryismyjam';
// if (message === null) {
// 	message = 'Отменено пользователем!';
// } else if (message === ADMIN_PASSWORD) {
// 	message = 'Добро пожаловать!';
// } else {
// 	message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

//task 4 ------------------------------------------------------------

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;

// let quantityOfDroid = prompt('Сколько дроидов Вы хотите купить?', '');

// totalPrice = quantityOfDroid * pricePerDroid;

// if (quantityOfDroid === null) {
// 	alert('Отменено пользователем!');
// } else if (totalPrice > credits) {
// 	alert('Недостаточно средств на счету!');
// } else if (totalPrice <= credits) {
// 	credits = credits - totalPrice;
// 	alert(`Вы купили ${quantityOfDroid} дроидов, на счету осталось ${credits} кредитов.`);
// }

//task 5 ------------------------------------------------------------

// let country = prompt('Введите вашу страну', '')

// let price;
// let countryName;
// if (country === null) {
//     alert("Отменено пользователем")
// } else {
//     country = country.toLocaleLowerCase()

//     switch (country) {

//         case 'китай':
//             countryName = 'Китай';
//             price = 100;
//             break;

//         case 'чили':
//             countryName = 'Чили';
//             price = 250;
//             break;

//         case 'австралия':
//             countryName = 'Австралия';
//             price = 170;
//             break;

//         case 'индия':
//             countryName = 'Индия';
//             price = 80;
//             break;

//         case 'ямайка':
//             countryName = 'Ямайка';
//             price = 120;
//             break;

//         default: alert('В вашей стране доставка не доступна');

//     }

//     countryName ? alert(`Доставка в ${countryName} будет стоить ${price} кредитов`) : "";
// }

// console.log('country: ',country)

//task 6 ------------------------------------------------------------

// let input;
// let total = 0;
// let message; 




// while (input !== null) {
// 	input = prompt('введите число');

// 	if (!isNaN(input)) {
// 		total += +input;
		
// 	} else {
// 		alert('Введено не число ')
// 	}

	
// }

// if (total === 0) {
// 	alert(`Пользователь отменил`)
// } else {
// 	alert(`Общая сумма чисел равна ${total}`);
// }



