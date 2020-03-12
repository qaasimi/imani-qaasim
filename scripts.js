//welcome message
var user = 'Imani';
var salutation = 'Hello ';
var greeting = salutation + user + '! Here is a review of last years Flagship Phones.';
var greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;

// product price iPhone
var price1 = 999.00,
    studentDiscount1 = .10,
    studentPrice1 = price1 - (price1 * studentDiscount1),
    price1EL = document.getElementById('price1'),
    studentPrice1EL = document.getElementById('student-price1');

price1EL.textContent = price1.toFixed(2);
studentPrice1EL.textContent = studentPrice1.toFixed(2);

// product price Galaxy
var price2 = 1099.99,
    studentDiscount2 = .10,
    studentPrice2 = price2 - (price2 * studentDiscount2),
    price2EL = document.getElementById('price2'),
    studentPrice2EL = document.getElementById('student-price2');

price2EL.textContent = price2.toFixed(2);
studentPrice2EL.textContent = studentPrice2.toFixed(2);

