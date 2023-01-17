consol.log ("Witam, ten kod jest już w repozytorium GIT.")

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.68;
let rateUSD = 4.43;
let rateGBP = 5.30;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let amount = +amountElement.value;
let currency = currencyElement.value;
let result;

switch (currency) {
    case "EUR":
      result = amount * rateEUR;
      break;
    case "GBP":
      result = amount * rateGBP;
      break;
    case "USD":
      result = amount * rateUSD;
      break;    
  }

resultElement.innerHTML = `${amount.toFixed(2)} PLN =  ${result.toFixed(2)} ${currency}`;
});

