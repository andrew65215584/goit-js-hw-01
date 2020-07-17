// task 1-----------------------------------------------------------

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

//task 2 ----------------------------------------------------------

// let total = 100;
// let ordered = 50;

// if (total > ordered ) {
//     console.log('На складе недостаточно товаров!')
// }else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }

//task 3 ------------------------------------------------------------

// let message = prompt('Введите ваш пароль')
// const ADMIN_PASSWORD = 'jqueryismyjam';

// if (message === null) {
//     message = 'Отменено пользователем!'
// }

// else {

//     if (message === ADMIN_PASSWORD) {
//         message = 'Добро пожаловать!'
//     }
//     if (message !== ADMIN_PASSWORD) {
//         message = 'Доступ запрещен, неверный пароль!'
//     }

// }

// let show = alert(message);

//task 4 ------------------------------------------------------------

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice ;

// let quantityOfDroid = prompt('Сколько дроидов Вы хотите купить?', '')

// if (quantityOfDroid === null) {

//     alert('Отменено пользователем!') ;
// }

// else {

//     totalPrice = quantityOfDroid * pricePerDroid;

//     if ( totalPrice > credits ) {
//         alert('Недостаточно средств на счету!') ;

//     }

//     if ( totalPrice <= credits ) {

//         credits = credits -totalPrice ;
//         alert(`Вы купили ${quantityOfDroid} дроидов, на счету осталось ${credits} кредитов.`) ;

//     }

// }

// console.log('quantityOfDroid', quantityOfDroid)
// console.log('totalPrice', totalPrice)
// console.log('credits' , credits)

//task 5 ------------------------------------------------------------

// let country = prompt('Введите вашу страну', '')
// country = country.toLocaleLowerCase()

// switch (country) {

//     case 'китай':
//         alert(`'Доставка в Китай будет стоить 100 кредитов'`);
//         break;

//     case 'чили':
//         alert(`'Доставка в Чили будет стоить 250 кредитов'`);
//          break;

//     case 'австралия':
//          alert(`'Доставка в Австралия будет стоить  кредитов'`);
//          break;

//     case 'индия':
//          alert(`'Доставка в Индия будет стоить 80 кредитов'`);
//          break;

//     case 'ямайка':
//          alert(`'Доставка в Ямайка будет стоить 120 кредитов'`);
//          break;

//     default : alert('В вашей стране доставка не доступна');

// }

// console.log('country: ',country)

//task 6 ------------------------------------------------------------

// let input;
// let total = 0;

// while (true){

//     input = prompt('введите число', '')

//     total += Number(input)

//     if (input === null){
//         alert(`Общая сумма чисел равна ${total}`)
//         break;
//     }

// }

// console.log(input)
// console.log(total)
