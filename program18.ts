let totalAmount:number = 5100;
let FinalBill:number;
if(totalAmount > 5000){
    FinalBill = totalAmount - (totalAmount * 15/100);
}else{
    FinalBill = totalAmount -(totalAmount * 5/100);
}

console.log(`Total Amount:- ${totalAmount}`);
console.log(`Discounted Bill:- ${FinalBill}`);