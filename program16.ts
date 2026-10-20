let basicSalary:number = 20000;
let hra:number = basicSalary * 10/100;
let Da:number =  basicSalary * 5/100;

let totalSalary:number;

totalSalary = basicSalary + hra + Da;

console.log(`Basic Salary:- ${basicSalary}`);
console.log(`HRA Amount:- ${hra}`);
console.log(`DA Amount:- ${Da}`);

console.log(`Total Salary:- ${totalSalary}`);