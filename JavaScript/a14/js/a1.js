function tip(totalAmount, tip=10, _returnTipOnly=false){
    tip = tip / 100;
    var tipAmount = totalAmount * tip
    totalAmount = totalAmount + tip
    return totalAmount
}
    var totalBill = tip(25, 10)
    console.log(totalBill)