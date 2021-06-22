// задание 1
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));

// задание 2
let date = '2025-12-31';
let date2 = date.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1');
console.log(date2.replace(/-/g, '/'));

// задание 3
let str3 = 'Я учу javascript!';
console.log(str3.substring(2,5));
console.log(str3.substring(6,16));
console.log(str3.substr(2,3));
console.log(str3.substr(6,10));
console.log(str3.slice(2,5));
console.log(str3.slice(6,16));

// задание 4
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	console.log(Math.pow(arr[i], 3), 'число в кубе');
	sum += Math.pow(arr[i], 3);
}
console.log(sum, 'сумма кубов всех элементов');
console.log(Math.sqrt(sum), 'значение квадратного корня');

// задание 5
function subtraction (a, b) {
	let c = a - b;
	console.log(Math.abs(c));
}
subtraction (3, 5);
subtraction (6, 1);

// задание 6
let dateNow = new Date();
function date6(number) {
	if (number > 0 && number < 10) {
		return '0' + number;
	} else {
		return number;
	}
}

console.log(date6(dateNow.getHours()) + ':' + date6(dateNow.getMinutes()) + ':' + date6(dateNow.getSeconds()) + ' ' + date6(dateNow.getDate()) + '.' + date6(dateNow.getMonth()) + '.' + date6(dateNow.getFullYear()));

// задание 7
let str7 = 'aa aba abba abbba abca abea';
console.log(str7);
console.log(str7.match(/ab+a/g));

// задание 8
let phoneNumber = prompt('Введите номер телефона');

function numberCheck(phoneNumber) {
	let regexp = /\+[1-9]{1,3}[0-9]{0,3}[0-9]{1,10}/g;
	if (regexp.test(phoneNumber) === true) {
		console.log(phoneNumber, 'Номер введен верно');
	} else {
		console.log(phoneNumber, 'Номер введен неверно');
	}
}
numberCheck(phoneNumber);

// задание 9
let email = prompt('Введите электронный адрес');
function emailCheck(email) {
	let regexp2 = /^[a-z]{2,15}[0-9]{0,5}@[a-z_.-]{1,10}\.[a-z]{2,11}/;
	console.log(regexp2.test(email));
}
emailCheck(email);

// задание 10
function getLink(url) {
	let domainName = /^https?\:\/\/[a-z._-]{2,15}\.[a-z]{2,6}/gi;
	console.log(url.match(domainName));
	let data = /\/[0-9/]{8,12}[a-z-0-9]{10,15}\//gi;
	console.log(url.match(data));
	let attr = /\?[a-z_=&0-9]{15,50}/gi;
	console.log(url.match(attr));
	let hash = /\#[a-z0-9]{0,5}/gi;
	console.log(url.match(hash));
	console.log(url.match(domainName).concat(url.match(data), url.match(attr), url.match(hash)));
}
getLink('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');