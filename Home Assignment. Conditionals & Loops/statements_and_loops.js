// variables
const birth_year = 1999;
let current_year = new Date().getFullYear();

let birth_month = 1;
const current_month = new Date().getMonth();


// formula
current_year -= 1;
let age = current_year - birth_year;


// results
console.log(`Patient's age: ${age}`);

if(birth_month <= current_month){
    age++;
    console.log(`Patient's accurate age: ${age}`);
}


