// Current balance function
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    return previousBalanceAmount;
}

// Add event handler in deposite button
document.getElementById('deposite-btn').addEventListener('click', function () {
    // Get input deposite amount 
    const depositeInput = document.getElementById('deposite-input')
    const newDepositeText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeText);
    if (newDepositeAmount > 0) {
        // Update deposite total
        const depositeTotal = document.getElementById('deposite-total');
        const previousDepositeText = depositeTotal.innerText;
        const previousDepositeAmount = parseFloat(previousDepositeText);
        const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
        depositeTotal.innerText = newDepositeTotal;
        // Update balance total
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceAmount = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBalanceAmount + newDepositeAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        alert('Enter a Valid Amount!')
    }
    // clear deposite input field
    depositeInput.value = '';
})
// /Add event handler in withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Get input withdraw amount 
    const withdrawInput = document.getElementById('withdraw-input')
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        // Update Withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawText);
        const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
        withdrawTotal.innerText = newWithdrawTotal;
        // Update balance total
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceAmount = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    if (newWithdrawAmount < 0) {
        alert('Enter a Valid Amount!')
    }
    // clear deposite input field
    withdrawInput.value = '';
})