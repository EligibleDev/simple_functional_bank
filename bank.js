const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldNumber;
}

function getInner(innerId) {
    const innerTxt = document.getElementById(innerId);
    const innerTxtString = innerTxt.innerText;
    const innerTxtNumber = parseFloat(innerTxtString);
    return innerTxtNumber;
}

function setTextValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = parseFloat(newValue);
}

// deposit code start 

depositButton.addEventListener('click', function () {
    const depositInputNumber = getInputValue('deposit-input');

    const depositAmountNumber = getInner('deposit-amount')

    const totalDeposit = depositAmountNumber + depositInputNumber;
    setTextValueById('deposit-amount', totalDeposit)

    const balanceAmountNumber = getInner('balance-amount')
    var totalBalance = balanceAmountNumber + depositInputNumber;
    setTextValueById('balance-amount', totalBalance)
})

// withdraw code start 

withdrawButton.addEventListener('click', function () {
    const withdrawInputNumber = getInputValue('withdraw-input')
    const withdrawAmountNumber = getInner('withdraw-amount');
    const balanceAmountNumber = getInner('balance-amount')


    const totalWithdraw = withdrawAmountNumber + withdrawInputNumber;
    setTextValueById('withdraw-amount', totalWithdraw)

    var totalBalance = balanceAmountNumber - withdrawInputNumber;
    if (withdrawInputNumber > balanceAmountNumber) {
        alert('Invalid Amount');
        return;
    }
    setTextValueById('balance-amount', totalBalance)
})


// withdrawButton.addEventListener('click', function () {
//     const withdrawInputNumber = getInputValue('withdraw-input');
//     const withdrawAmountNumber = getInner('withdraw-amount');
//     const balanceAmountNumber = getInner('balance-amount');

//     const totalWithdraw = parseFloat(withdrawAmountNumber) + parseFloat(withdrawInputNumber);
//     setTextValueById('withdraw-amount', totalWithdraw);

//     var totalBalance = parseFloat(balanceAmountNumber) - parseFloat(withdrawInputNumber);
//     if (parseFloat(withdrawInputNumber) > totalBalance) {
//         alert('Invalid Amount');
//         return;
//     }

//     setTextValueById('balance-amount', totalBalance);
// });
