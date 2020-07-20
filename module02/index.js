//? task 1

// const logItems = function(array) {

//     let counter = 1;

//     for (let i = 0; i < array.length; i += 1){

//         console.log(`${counter}-${array[i]} `)

//         counter += 1;
//     }


//   };


//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//? task 2


// const calculateEngravingPrice = function(message, pricePerWord) {

//     const arr = message.split(' ')

//     const res = arr.length * pricePerWord

//     return res;
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80

//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120

//? task 3


// const findLongestWord = function(string) {

//     let arr = string.split(' ');
//     let longestWord = arr[0];

//     for (let i = 0; i < arr.length; i++){

//         if (arr[i].length > longestWord.length ) {

//             longestWord = arr[i];

//         }
//     }

//     return longestWord;
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

//   console.log(findLongestWord('Google do a roll')); // 'Google'

//   console.log(findLongestWord('May the force be with you')); // 'force'

//? task 4

// const formatString = function(string) {

//    if ( string.length < 40) {
//         return string
//      }


//   if ( string.length > 40) {

//    let res = string.slice(0, 40)
//     res = res + '...'
//     return res;
//   }

//   }; 

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // вернется оригинальная строка

//  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//    // вернется форматированная строка

//   console.log(formatString('Curabitur ligula sapien.'));
//   // вернется оригинальная строка

//  console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
//   // вернется форматированная строка

//? task 5

// const checkForSpam = function(message) {


//     const lowerCase = message.toLowerCase();

//     console.log(lowerCase)

//     if (lowerCase.includes('spam') || lowerCase.includes('sale') ){
//         return true;
//     }
//     else {
//         return false;
//     }
//   };

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(checkForSpam('Latest technology news')); // false

//   console.log(checkForSpam('JavaScript weekly newsletter')); // false

//    console.log(checkForSpam('Get best sale offers now!')); // true

//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


//? task 6


// let input;
// let numbers = [];
// let total = 0;

// while (true){

//     input = prompt('введите число', '')

//     numbers.push(input)

//     if (input === null){

//         for (let i=0; i<numbers.length; i++){

//           total += Number(numbers[i])

//         }

//         console.log(`Общая сумма чисел равна = ${total}`);
//         break;
//     }



// }


//? task 7


// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];



// const isLoginValid = function (login) {

//     if (login.length > 4 && login.length < 16) {
//         return true;
//     }
// };

// const isLoginUnique = function (allLogins, login) {
//     if (allLogins.includes(logins) || login.includes(logins)) {
//         return false;
//     }
// };

// const addLogin = function (allLogins, login) {
//     // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'


