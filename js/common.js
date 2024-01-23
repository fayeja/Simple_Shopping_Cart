function Totalprice(updatePrice){
    const subtotal=document.getElementById(updatePrice);
    const subString=subtotal.innerText;
    const subInt=parseInt(subString);
    return subInt;
}

function setelementbyid(id,value){
    const s = document.getElementById(id);
    s.innerText = value;
}

function calculatesubtotal() {
    const phoneTotal = Totalprice('dollar1');
    const caseTotal = Totalprice('dollar');
    const total = phoneTotal + caseTotal;

    setelementbyid('subtotal',total);

    // calculate tax
    const taxString=(total*0.1).toFixed(2);
    const tax=parseFloat(taxString);
    setelementbyid('tax',tax);

    const final=total+tax;
    setelementbyid('total',final);
}