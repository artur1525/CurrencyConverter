{
const calculateResult = (amount, currency) => {
    const rateEUR = 4.68;
    const rateUSD = 4.43;
    const rateGBP = 5.30;

  switch (currency) {
    case "EUR":
      return amount / rateEUR;
    case "GBP":
      return amount / rateGBP;
    case "USD":
      return amount / rateUSD;
  }
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    console.log('Formularz został wysłany.');

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result= calculateResult(amount, currency);

    resultElement.innerHTML = `${amount.toFixed(2)} PLN =  ${result.toFixed(2)} ${currency}`;
  }

const init = () => {
  const formElement = document.querySelector(".js-form");
  formElement.addEventListener("submit", onFormSubmit);
}
init();

}