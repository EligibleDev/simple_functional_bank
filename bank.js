const depositButton = document.getElementById('deposit-button');
const withdrawButton = document.getElementById('withdraw-button');

const balanceString = document.getElementById('balance-amount');
const balanceAmount = balanceString.innerText;
const balanceAmountNumber = parseFloat(balanceAmount);

// deposit code start 

depositButton.addEventListener('click', function () {
    const depositInputString = document.getElementById('deposit-input');
    const depositInput = depositInputString.value;
    const depositInputNumber = parseFloat(depositInput);

    const depositString = document.getElementById('deposit-amount');
    const depositAmount = depositString.innerText;
    const depositAmountNumber = parseFloat(depositAmount);

    const totalDeposit = depositAmountNumber + depositInputNumber;
    depositString.innerText = totalDeposit;

    var totalBalance = balanceAmountNumber + depositInputNumber;
    balanceString.innerText = totalBalance;

    depositInputString.value = '';
})

// withdrow code start 

withdrawButton.addEventListener('click', function () {
    const withdrawInputString = document.getElementById('withdraw-input');
    const withdrawInput = withdrawInputString.value;
    const withdrawInputNumber = parseFloat(withdrawInput);

    const withdrawString = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawString.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    
    if(withdrawInput > balanceAmountNumber){
        alert('Invalid Amount');
        return;
    }

    const totalWithdraw = withdrawAmountNumber + withdrawInputNumber;
    withdrawString.innerText = totalWithdraw;

    var totalBalance = balanceAmountNumber - totalWithdraw;
    balanceString.innerText = totalBalance;

    withdrawInputString.value = '';

})