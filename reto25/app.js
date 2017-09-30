function calculateBillTotal(preTaxAndTipAmount) {
    var agregar = preTaxAndTipAmount * 0.245
    return agregar + preTaxAndTipAmount
}

//datos del ejemplo
var output = calculateBillTotal(20);
console.log(output);
