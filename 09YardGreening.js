function yard(input){
let yardMeters = Number(input[0]);
let pricePerMeter = 7.61 ; 
let totalPrice = yardMeters * pricePerMeter ;
let discount = totalPrice * 0.18 ;
let finalPrice = totalPrice - discount
console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${discount} lv.`);
}
yard(["550"]);