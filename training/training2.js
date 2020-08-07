const form = document.querySelector('.form');
const quButton = document.querySelector('.question-button');

let name;
const arrData = [];

form.addEventListener('submit', submitFunc);
quButton.addEventListener('click', calculateWeught);

function calculateWeught() {
	let searchingName = prompt('Введите вашего пользователя');
	console.log(searchingName);

	const rezUser = arrData.find((el) => el.Name === searchingName);

	console.log(rezUser);
	let result = 10 * Number(rezUser.Weight) + 6.25 * Number(rezUser.Height) - 5 * Number(rezUser.Age) - 161;
	alert(`Вы можете сожрать ${result}`);
}

function submitFunc() {
	event.preventDefault();
	const formData = new FormData(form);

	let obj = {};

	formData.forEach((value, key) => (obj[key] = value));
	arrData.push(obj);
	console.log(arrData);
}
