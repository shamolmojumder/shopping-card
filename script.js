const singlePhonePrice = 1219;
const singleCoverPrice =
    calculation("phone_plus", singlePhonePrice)

function calculation(id, singlePhonePrice) {
    document.getElementById(id).addEventListener("click", function() {
        const phone_value = document.getElementById("phone_value").value
        const phone_valueNumber = parseFloat(phone_value)
        const addPhone = phone_valueNumber + 1;
        document.getElementById("phone_value").value = addPhone;

        const phonePrice = document.getElementById("phonePrice").innerText
        const phonePriceNumber = parseFloat(phonePrice);
        const addPhonePrice = phonePriceNumber + singlePhonePrice;
        document.getElementById("phonePrice").innerText = addPhonePrice

        const subTotal = document.getElementById("subTotal").innerText;
        const subTotalNumber = parseFloat(subTotal)
        const subTotalPrice = subTotalNumber + singlePhonePrice;
        document.getElementById("subTotal").innerText = subTotalPrice;
    })
}

// document.getElementById("phone_plus").addEventListener("click", function() {
//     const phone_value = document.getElementById("phone_value").value
//     const phone_valueNumber = parseFloat(phone_value)
//     const addPhone = phone_valueNumber + 1;
//     document.getElementById("phone_value").value = addPhone;

//     const phonePrice = document.getElementById("phonePrice").innerText
//     const phonePriceNumber = parseFloat(phonePrice);
//     const addPhonePrice = phonePriceNumber + singlePhonePrice;
//     document.getElementById("phonePrice").innerText = addPhonePrice

//     const subTotal = document.getElementById("subTotal").innerText;
//     const subTotalNumber = parseFloat(subTotal)
//     const subTotalPrice = subTotalNumber + singlePhonePrice;
//     document.getElementById("subTotal").innerText = subTotalPrice;
// })