function update(isIncrease) {
    const input = document.getElementById('input-case1');
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

function updatePhonePrice(input3) {
    const totalAmount = input3 * 1219;
    const dollar = document.getElementById('dollar1');
    dollar.innerText = totalAmount;
    return totalAmount;
}


document.getElementById('btn-case1').addEventListener('click', function () {
    const input3 = update(true);
    updatePhonePrice(input3);
    calculatesubtotal();
})
document.getElementById('btn-case-m1').addEventListener('click', function () {
    const input3 = update(false);
    updatePhonePrice(input3);
    calculatesubtotal();
})