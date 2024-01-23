function updateCase(isIncrease) {
    const input = document.getElementById('input-case');
    const input1 = input.value;
    const input2 = parseInt(input1);

    let input3;

    if (isIncrease) {
        input3 = input2 + 1;
    }
    else {
        input3 = input2 - 1;
    }
    input.value = input3;

    return input3;
}

function updateCasePrice(input3) {
    const totalAmount = input3 * 59;
    const dollar = document.getElementById('dollar');
    dollar.innerText = totalAmount;
    return totalAmount;
}

document.getElementById('btn-case').addEventListener('click', function () {
    const input3 = updateCase(true);
    updateCasePrice(input3);
    calculatesubtotal();
})
document.getElementById('btn-case-m').addEventListener('click', function () {
    const input3 = updateCase(false);
    updateCasePrice(input3);
    calculatesubtotal();
})