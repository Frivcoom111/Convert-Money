const convertButton = document.querySelector(".main-button-convert");
const selectCurrencyBase = document.querySelector(".select-currency-base");
const selectCurrencyTarget = document.querySelector(".select-currency-target");

const currencies = {
  real: {
    rate: 1,
    format: convertReal,
    currencyImage: "assets/real.png",
    currencyName: "Real"
  },
  dolar: {
    rate: 5.26,
    format: convertDolar,
    currencyImage: "assets/dolar.png",
    currencyName: "Dólar Americano"
  },
  euro: {
    rate: 6.23,
    format: convertEuro,
    currencyImage: "assets/euro.png",
    currencyName: "Euro"
  },
  bitcoin: {
    rate: 412610.96,
    format: convertBitcoin,
    currencyImage: "assets/bitcoin.png",
    currencyName: "Bitcoin"
  },
  libra: {
    rate: 7.20,
    format: convertLibra,
    currencyImage: "assets/libra.png",
    currencyName: "Libra"
  },
  dinar: {
    rate: 17.12,
    format: convertDinar,
    currencyImage: "assets/dinar.png",
    currencyName: "Dinar Kuwaitiano"
  }
}

function convertValue() {
  const inputConvertCurrencyValue = Number(document.querySelector("#main-input").value);
  const currencyValueToConvert = document.querySelector("#currency-value-to-convert");
  const convertedCurrencyValue = document.querySelector("#converted-currency-value");

  const baseCurrency = selectCurrencyBase.value;
  const targetCurrency = selectCurrencyTarget.value;

  const convertedValue = (inputConvertCurrencyValue * currencies[baseCurrency].rate) / currencies[targetCurrency].rate;

  currencyValueToConvert.innerHTML = currencies[baseCurrency].format(inputConvertCurrencyValue);

  convertedCurrencyValue.innerHTML = currencies[targetCurrency].format(convertedValue);
}

function selectChange() {
  const currencyBase = selectCurrencyBase.value;
  const currencyTarget = selectCurrencyTarget.value;

  document.querySelector(".name-currency-to-convert").innerHTML = currencies[currencyBase].currencyName;

  document.querySelector(".name-converted-currency").innerHTML = currencies[currencyTarget].currencyName;

  document.querySelector(".logo-currency-convert").src = currencies[currencyBase].currencyImage;

  document.querySelector(".logo-currency-converted").src = currencies[currencyTarget].currencyImage;

  convertValue();
}

function convertDolar(value) {
  const valueDolar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return valueDolar;
}

function convertEuro(value) {
  const valueEuro = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);

  return valueEuro;
}

function convertBitcoin(value) {
  const valueBitcoin = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC",
    minimumFractionDigits: 8,
    maximumFractionDigits: 8
  }).format(value);

  return valueBitcoin;
}

function convertLibra(value) {
  const valueLibra = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "GBP"
  }).format(value);

  return valueLibra;
}

function convertReal(value) {
  const valueReal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return valueReal;
}

function convertDinar(value) {
  const valueDinar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KWD",
  }).format(value);

  return valueDinar;
}

selectCurrencyBase.addEventListener("change", selectChange);
selectCurrencyTarget.addEventListener("change", selectChange);

convertButton.addEventListener("click", convertValue);
