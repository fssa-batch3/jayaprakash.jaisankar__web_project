// Form validation
let pre = JSON.parse(localStorage.getItem("jscard"));

let id = JSON.parse(localStorage.getItem("priceid"));
console.log(id);

let check = id.pop();
console.log(check);

let get = pre.find(function (obj) {
  let checkid = obj["uuid"];
  if (check == checkid) {
    return true;
  }
});
console.log(get);

let form = document.querySelector("form");
let cardName = document.getElementById("cardname");
let cardNumber = document.getElementById("cardnumber");
let expMonth = document.getElementById("expmonth");
let expYear = document.getElementById("expyear");
let cvv = document.getElementById("cvv");
let price = document.getElementById("price");

price.value = parseInt(get["price"]) + 100;
console.log(price.value);
form.addEventListener("submit", function (event) {
  if (!validateCardName()) {
    event.preventDefault();
  }
  if (!validateCardNumber()) {
    event.preventDefault();
  }
  if (!validateExpMonth()) {
    event.preventDefault();
  }
  if (!validateExpYear()) {
    event.preventDefault();
  }
  if (!validateCVV()) {
    event.preventDefault();
  }
});

function validateCardName() {
  if (cardName.value === "") {
    alert("Name on card is required");
    return false;
  }
  return true;
}

function validateCardNumber() {
  const cardNumberPattern = /^[0-9]{16}$/;
  if (!cardNumberPattern.test(cardNumber.value)) {
    alert("Card number must be 16 digits");
    return false;
  }
  return true;
}

function validateExpMonth() {
  const expMonthPattern = /^[0-9]{2}$/;
  if (!expMonthPattern.test(expMonth.value)) {
    alert("Expiration month must be 2 digits");
    return false;
  }
  return true;
}

function validateExpYear() {
  const expYearPattern = /^[0-9]{4}$/;
  if (!expYearPattern.test(expYear.value)) {
    alert("Expiration year must be 4 digits");
    return false;
  }
  return true;
}

function validateCVV() {
  const cvvPattern = /^[0-9]{3}$/;
  if (!cvvPattern.test(cvv.value)) {
    alert("CVV must be 3 digits");
    return false;
  }
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "./declarationbill.html";
});

// Get references to the select elements
let monthSelect = document.getElementById("expirationMonth");
let yearSelect = document.getElementById("expirationYear");

// Populate the month dropdown
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.text = months[i - 1];
  option.value = i;
  monthSelect.add(option);
}

// Populate the year dropdown with the current year and the next 10 years
let currentYear = new Date().getFullYear();
for (let i = 0; i < 21; i++) {
  let option = document.createElement("option");
  option.text = currentYear + i;
  option.value = currentYear + i;
  yearSelect.add(option);
}
