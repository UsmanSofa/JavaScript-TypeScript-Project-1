let ElectricUnit:number = 94;
let Bill:number;

if(ElectricUnit <= 100){
   Bill = ElectricUnit * 5;
}else{
    Bill = ElectricUnit * 8;
}

console.log(`Electricity Bill is:- ${Bill}`)