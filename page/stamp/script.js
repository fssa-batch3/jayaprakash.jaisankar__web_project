// Form validation
const form = document.querySelector("form");
const cardName = document.getElementById("cardname");
const cardNumber = document.getElementById("cardnumber");
const expMonth = document.getElementById("expmonth");
const expYear = document.getElementById("expyear");
const cvv = document.getElementById("cvv");

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
