let totalMinutes:number =  150;
let hours:number;
let minutes:number;

hours = Math.floor(totalMinutes / 60);
minutes = totalMinutes %  60;

console.log(`Total Minutes:- ${totalMinutes}`);
console.log(`Hours:- ${hours}`);
console.log(`Minutes:- ${minutes}`);
