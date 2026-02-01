const convertButton = document.querySelector(".main-button-convert");
const currencySelect = document.querySelector("#select-convert");

function convertValue() {
  const inputConvertCurrencyValue = document.querySelector("#main-input").value;
  const currencyValue = document.querySelector("#currency-value");
  const currencyValueConverted = document.querySelector(
    "#currency-value-converted",
  );

  // Valores das moedas
  const dolarToday = 5.26;
  const euroToday = 6.23;
  const bitcoinToday = 412610.96;
  const libraToday = 7.20;

  // Ifs para formatação
  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputConvertCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputConvertCurrencyValue / euroToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 8,
      maximumFractionDigits: 8
    }).format(inputConvertCurrencyValue / bitcoinToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP"
    }).format(inputConvertCurrencyValue / libraToday);
  }

  // Mostra o valor convertido na tela
  currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputConvertCurrencyValue);
}

function changeCurrency() {
  const nameCurrency = document.querySelector(".name-currency");
  const imageCurrency = document.querySelector(".logo-moeda-convertida");

  if (currencySelect.value == "dolar") {
    imageCurrency.src = "assets/dolar.png";
    nameCurrency.innerHTML = "Dólar Americano";
  }

  if (currencySelect.value == "euro") {
    imageCurrency.src = "assets/euro.png";
    nameCurrency.innerHTML = "Euro";
  }

  if (currencySelect.value == "bitcoin") {
    imageCurrency.src = "assets/bitcoin.png";
    nameCurrency.innerHTML = "₿ Bitcoin";
  }

  if (currencySelect.value == "libra") {
    imageCurrency.src = "assets/libra.png";
    nameCurrency.innerHTML = "Libra";
  }

  convertValue();
}

currencySelect.addEventListener("change", changeCurrency);

convertButton.addEventListener("click", convertValue);
