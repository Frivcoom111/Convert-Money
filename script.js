const convertButton = document.querySelector(".main-button-convert")

function convertValue() {
    const inputConvertCurrencyValue = document.querySelector("#main-input").value
    const currencyValue = document.querySelector("#currency-value")
    const currencyValueConverted = document.querySelector("#currency-value-converted")

    const dolarToday = 5.26

    const convertedCurrencyValue = inputConvertCurrencyValue / dolarToday

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputConvertCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedCurrencyValue)
}

convertButton.addEventListener("click", convertValue)