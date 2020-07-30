
import users from './users.js';

// ? task 1

// const getUserNames = function() {
// 	let names = users.map((user) => user.name);
// 	return names;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ? task 2

// Задание 2
// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//     let res = users.filter(user =>  user.eyeColor === color)
//     return res;
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ? task 3

// Задание 3
// Получить массив имен пользователей по полу(поле gender).

// const getUsersWithGender = (users, gender) => {
//     let res = users.filter(user => user.gender === gender)
//     console.log(res);

//     let resultWithName = res.map(user => user.name)
//     return resultWithName
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ? task 4

// Задание 4
// Получить массив только неактивных пользователей(поле isActive).

// const getInactiveUsers = function () {

//     let res = users.filter(user => !user.isActive)
//     return res;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ? task 5

// Задание 5
// Получить пользоваля(не массив) по email(поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//     let res = users.find(el => el.email === email)
//     return res
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// ? task 6

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

// const getUsersWithAge = (users, min, max) => {
//     let res = users.filter(el => el.age >= min && el.age <= max)
//     return res
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ? task 7

// Задание 7
// Получить общую сумму баланса(поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//     let res = users.reduce((acc, value) => acc + value.balance, 0)

//     return res
// };

// console.log(calculateTotalBalance(users)); // 20916

// ? task 8

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//     let res = users.filter(user => user.friends.includes(friendName))

//     let result = res.map(user => user.name)
//     return result;
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// ? task 9

// Задание 9
// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

// const getNamesSortedByFriendsCount = (users) => {
//     // твой код
//     let res = users.sort((a, b) => a.friends.length - b.friends.length)
//     let result = users.map(user => user.name)
//     return result
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ? task 10

// Задание 10
// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.


// const getSortedUniqueSkills = (users) => {
// 	return users
// 		.reduce((allSkills, user) => {
// 			allSkills.push(...user.skills);
// 			return allSkills;
// 		}, [])
// 		.sort()
//         .filter((skills, index, arr) => arr.indexOf(skills) == index);
// };

// console.log(getSortedUniqueSkills(users));
