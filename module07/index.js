//? task 1

// const itemRefs = document.querySelectorAll('.item');
// console.log(`В списке ${itemRefs.length} категории`);

// const titleRef = itemRefs.forEach(item => console.log(`Категория: ${item.children[0].textContent}, количество елементов  ${item.querySelector("ul").children.length}`))

//? task 2
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

// const ingredients = [ 'Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы' ];

// const result = ingredients.map((el) => {
// 	let li = document.createElement('li');
// 	li.textContent = el;
// 	return li
// });

// const ingredientsRef = document.querySelector("#ingredients")
// ingredientsRef.append(...result)

// console.log(ingredientsRef);

//? task 3

// const images = [
// 	{
// 		url:
// 			'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		alt: 'White and Black Long Fur Cat'
// 	},
// 	{
// 		url:
// 			'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
// 	},
// 	{
// 		url:
// 			'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// 		alt: 'Group of Horses Running'
// 	}
// ];

// const gallery = document.querySelector('#gallery');
// console.log(gallery);
// gallery.style.display = 'flex';

// let arr = images.map((el) => {
// 	return `<li> <img src="${el.url}" alt="${el.alt} width="300px height="300px"> </li>`;
// });

// gallery.insertAdjacentHTML('afterbegin', arr.join(' '));

// const galleryItem = document.querySelectorAll('#gallery > li');
// console.log(galleryItem);

// galleryItem.forEach((el) => {
// 	el.classList.add('gallery-item');
// 	el.style.margin = '20px';
// });

// ? task 4

// let counterValue = 0;

// let increment = function() {
// 	updateCounterValue("increment");
// 	updateViewValue();
// };

// let decrement = function() {
// 	updateCounterValue("decrement");
// 	updateViewValue();
// };

// function updateViewValue() {
// 	valueRef.textContent = counterValue;
// }

// function updateCounterValue(str) {
// 	if (str === 'increment') {
// 		counterValue++
// 	} else {
// 		counterValue--
// 	}

// }

// const decrementRef = document.querySelector('.decrement');
// const incrementRef = document.querySelector('.increment');
// const valueRef = document.querySelector('#value');

// decrementRef.addEventListener('click', decrement);
// incrementRef.addEventListener('click', increment);

// ? task 5

// let input = document.querySelector('#name-input')
// let span = document.querySelector("#name-output")
// console.log(input);

// input.addEventListener("change", e => {
//     span.textContent = e.target.value;
// })

// ? task 6

// let input = document.querySelector('#validation-input');

// const inputLength = input.getAttribute('data-length');
// console.log(inputLength);

// input.addEventListener('change', (event) => {
// 	console.log(event.target.value.length);
// 	if (event.target.value.length > +inputLength) {
// 		input.classList.add('valid');
// 	} else if (event.target.value.length < +inputLength) {
// 		input.classList.add('invalid');
// 	}
// });

// ? task 7

// const input = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');
// console.log(text);
// console.log(input);
// // let textContentOfText = text.style.fontSize

// input.addEventListener('input', (event) => {
// 	text.style.fontSize = `${event.target.value}px`;
// });

// ? task 8
// const controls = document.querySelector('.controls');
// const input = document.querySelector('.input-controls');
// const boxes = document.querySelector('#boxes');

// let myInput = input.addEventListener('input', (event) => {
// 	let inputValue = +event.target.value;
// 	return inputValue;
// });

// console.log(myInput);

// for (let i = 0; i < inputValue; i++) {
//     let div = document.createElement('div')
//     div.classList.add('div-element')
//     controls.append(div)
//     console.log(inputValue[i]);
// }
